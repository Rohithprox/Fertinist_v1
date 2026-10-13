# -*- coding: utf-8 -*-
"""Download the cover image for each Instagram post listed in
src/app/data/instagram.ts and save it locally.

Instagram's CDN URLs are signed and expire, so the covers have to be hosted
rather than hot-linked. Re-run this after changing the post list:

    python tools/fetch-instagram-covers.py
"""
import io, os, re, subprocess, sys
from PIL import Image

DATA = "src/app/data/instagram.ts"
OUT = "src/app/assets/instagram"
UA = "Mozilla/5.0 (compatible; facebookexternalhit/1.1)"
SIZE = 480  # cards render at 220px; 480 covers 2x


def shell(args):
    return subprocess.run(args, capture_output=True).stdout.decode("utf-8", "replace")


def code_of(url):
    m = re.search(r"/(?:reel|p|tv)/([A-Za-z0-9_-]+)", url)
    return m.group(1) if m else None


def cover_url(post_url):
    html = shell(["curl", "-s", "--max-time", "30", "-A", UA, post_url])
    m = re.search(r'<meta property="og:image" content="([^"]+)"', html)
    return m.group(1).replace("&amp;", "&") if m else None


def main():
    os.makedirs(OUT, exist_ok=True)
    src = io.open(DATA, encoding="utf-8").read()
    urls = [u for u in re.findall(r'url:\s*"([^"]+)"', src) if u]
    if not urls:
        print("no post urls in %s" % DATA); return 1

    ok = 0
    for url in urls:
        code = code_of(url)
        if not code:
            print("  skip (no post code): %s" % url); continue
        img = cover_url(url)
        if not img:
            print("  %-14s no og:image - post private or removed?" % code); continue
        raw = os.path.join(OUT, code + ".raw")
        subprocess.run(["curl", "-s", "--max-time", "60", "-A", UA, "-o", raw, img])
        if not os.path.exists(raw) or os.path.getsize(raw) < 1000:
            print("  %-14s download failed" % code)
            if os.path.exists(raw): os.remove(raw)
            continue
        im = Image.open(raw).convert("RGB")
        w, h = im.size
        side = min(w, h)                      # square crop for the grid card
        im = im.crop(((w - side) // 2, 0, (w - side) // 2 + side, side))
        dest = os.path.join(OUT, code + ".webp")
        im.resize((SIZE, SIZE), Image.LANCZOS).save(dest, "WEBP", quality=82, method=6)
        os.remove(raw)
        print("  %-14s %dx%d -> %s  %.0f KB" % (code, w, h, os.path.basename(dest),
                                                os.path.getsize(dest) / 1e3))
        ok += 1
    print("\n%d/%d covers saved to %s" % (ok, len(urls), OUT))
    return 0


if __name__ == "__main__":
    sys.exit(main())
