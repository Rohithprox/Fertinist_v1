"""Generate distinct on-brand hero backgrounds, one per service slug.

Deterministic from the slug, so re-running produces identical files.
Art sits on the right; the left stays pale because the template renders the
heading and body copy there in dark purple over this image.
"""
from PIL import Image, ImageDraw, ImageFilter
import hashlib, math, os, sys

W, H, S = 1600, 620, 2          # S = supersample factor, kills blur banding

# category -> (pale gradient pair, accent colours for the motif)
PALETTES = {
    "female":    ((255, 246, 252), (250, 231, 245), [(214, 138, 198), (186, 96, 172), (236, 190, 226)]),
    "male":      ((243, 250, 255), (226, 241, 252), [(104, 178, 224), (56, 140, 198), (168, 214, 238)]),
    "treatment": ((250, 245, 255), (240, 232, 250), [(168, 122, 206), (124, 78, 170), (206, 178, 232)]),
    "surgery":   ((242, 252, 253), (224, 243, 248), [(88, 178, 194), (52, 138, 158), (166, 216, 226)]),
    "maternity": ((255, 248, 249), (252, 234, 236), [(224, 148, 158), (198, 104, 122), (240, 198, 206)]),
}

def hero(slug, category):
    pale_a, pale_b, accents = PALETTES[category]
    seed = int(hashlib.sha256(slug.encode()).hexdigest(), 16)
    rnd = lambda n: ((seed >> (n * 11)) % 10000) / 10000.0

    w, h = W * S, H * S
    base = Image.new("RGB", (w, h))
    d = ImageDraw.Draw(base)
    for y in range(h):                                  # vertical pale gradient
        t = y / h
        d.line([(0, y), (w, y)],
               fill=tuple(round(pale_a[i] + (pale_b[i] - pale_a[i]) * t) for i in range(3)))

    # petal / arc motif echoing the Fertinest leaf mark, weighted to the right
    art = Image.new("RGB", (w, h), (255, 255, 255))
    da = ImageDraw.Draw(art)
    petals = 5 + int(rnd(1) * 3)
    ox = int(w * (0.68 + rnd(2) * 0.14))
    oy = int(h * (0.96 + rnd(3) * 0.06))
    spread = 0.70 + rnd(4) * 0.55
    for i in range(petals):
        ang = -math.pi / 2 + (i - petals / 2) * spread / 2 + rnd(5 + i) * 0.35
        ln = h * (0.50 + rnd(9 + i) * 0.34)
        wd = ln * (0.20 + rnd(13 + i) * 0.14)
        tipx, tipy = ox + math.cos(ang) * ln, oy + math.sin(ang) * ln
        da.polygon([(ox, oy),
                    (ox + math.cos(ang - 0.5) * wd, oy + math.sin(ang - 0.5) * wd),
                    (tipx, tipy),
                    (ox + math.cos(ang + 0.5) * wd, oy + math.sin(ang + 0.5) * wd)],
                   fill=accents[i % len(accents)])
    art = art.filter(ImageFilter.GaussianBlur(h * 0.030))

    out = Image.blend(base, art, 0.34)


    # fade the art out across the left half so dark text stays readable
    mask = Image.new("L", (w, h))
    dm = ImageDraw.Draw(mask)
    for x in range(w):
        t = x / w
        dm.line([(x, 0), (x, h)], fill=int(255 * max(0.0, min(1.0, (t - 0.30) / 0.42))))
    out = Image.composite(out, base, mask)

    return out.resize((W, H), Image.LANCZOS)

SLUG_CATEGORY = {
    # female infertility conditions
    "pcos-pcod": "female", "low-ovarian-reserve": "female", "tubal-blocks": "female",
    "uterine-fibroids": "female", "adenomyosis-endometriosis": "female",
    "uterine-malformations": "female", "hormonal-imbalance": "female",
    "recurrent-pregnancy-loss": "female",
    # male infertility conditions
    "low-sperm-count": "male", "sperm-motility": "male", "erectile-problems": "male",
    "pesa-tesa": "male",
    # fertility treatments
    "ovulation-induction": "treatment", "follicular-scan": "treatment",
    "blastocyst-culture": "treatment", "iui": "treatment", "icsi": "treatment",
    "pgt": "treatment", "donor-programs": "treatment", "egg-freezing": "treatment",
    # minimal access surgery
    "hysteroscopic-surgeries": "surgery", "laparoscopic-surgery": "surgery",
    "laparoscopic-myomectomy": "surgery", "ovarian-cyst-removal": "surgery",
    "diagnostic-laparoscopy": "surgery", "adhesiolysis": "surgery",
    # high risk maternity care
    "high-risk-pregnancy": "maternity", "antenatal-monitoring": "maternity",
    "labour-analgesia": "maternity", "normal-delivery": "maternity",
    "cesarean-delivery": "maternity",
}

if __name__ == "__main__":
    outdir = sys.argv[1] if len(sys.argv) > 1 else "src/app/assets/heroes"
    os.makedirs(outdir, exist_ok=True)
    total = 0
    for slug, cat in sorted(SLUG_CATEGORY.items()):
        f = os.path.join(outdir, slug + ".webp")
        hero(slug, cat).save(f, "WEBP", quality=86, method=6)
        total += os.path.getsize(f)
    print("%d heroes, %.0f KB total, %.1f KB average"
          % (len(SLUG_CATEGORY), total / 1e3, total / 1e3 / len(SLUG_CATEGORY)))
