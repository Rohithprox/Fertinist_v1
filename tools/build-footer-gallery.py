# -*- coding: utf-8 -*-
"""Render every footer that has existed in this repo into one standalone HTML
page, phone view first. Throwaway reference for picking which design to keep.

Run:  python tools/build-footer-gallery.py
Out:  footer-versions.html  (self-contained, images inlined)
"""
from PIL import Image
import base64, io as _io, os

H = "src/imports/HomePage/"


def uri(path, max_w=None):
    im = Image.open(path).convert("RGBA")
    if max_w and im.width > max_w:
        im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
    b = _io.BytesIO()
    im.save(b, "PNG", optimize=True)
    return "data:image/png;base64," + base64.b64encode(b.getvalue()).decode()


LOGO = uri(H + "1aed5dd75bf09891e19f587c012f471fdb93ed82.png", 480)
LEAF = uri(H + "392bb1d5fd7fcaf85a6112904b7cac7f8418ffe1.png", 240)
PHONE = uri(H + "f6ff35424cf3f566b22f601b5b2c71f39fb514d9.png")
MAIL = uri(H + "48e6a4e439e50ac0191d8b0b62687ccdc0bc6db0.png")

JK = "'Plus Jakarta Sans',sans-serif"
LINKS = [("Services / Treatments", ["Fertility Treatments", "Infertility Conditions",
                                    "Maternity &amp; Surgical Care"]),
         ("Locations", ["Nellore", "Ananthapur"]),
         ("Resources", ["Fertility Calculators", "Blogs", "About Us"])]


def absolute_footer(bg):
    """V1 / V4 - the Figma footer: every element pinned to a fixed x/y on a 1440px canvas."""
    cols = ""
    for (head, items), left, width in zip(LINKS, (557, 868, 1062), (252, 125, 252)):
        cols += ('<p style="position:absolute;left:%dpx;top:61px;width:252px;font-family:%s;'
                 'font-weight:600;font-size:21px;color:#943687;letter-spacing:-.29px;margin:0">%s</p>'
                 % (left, JK, head))
        cols += '<div style="position:absolute;left:%dpx;top:93px;width:%dpx;font-family:%s;font-size:19.929px;letter-spacing:-.29px">' % (left + 2, width, JK)
        cols += "".join('<p style="line-height:34px;margin:0">%s</p>' % t for t in items)
        cols += "</div>"
    return """<div style="position:relative;width:1440px;height:398px;background:%s;overflow:hidden">
  <img src="%s" style="position:absolute;left:89px;top:37px;width:312.8px;height:101.3px;object-fit:contain;object-position:left">
  <p style="position:absolute;left:155.49px;top:183px;width:147px;transform:translateX(-50%%);font-family:%s;font-weight:600;font-size:19.929px;line-height:16.6px;text-align:center;color:#943687;margin:0">Contact Us</p>
  <img src="%s" style="position:absolute;left:99px;top:217px;width:32.4px;height:27.4px;object-fit:contain">
  <p style="position:absolute;left:207.51px;top:220.32px;width:147px;transform:translateX(-50%%);font-family:%s;font-weight:500;font-size:19.929px;line-height:16.6px;text-align:center;margin:0">+91 9182039911</p>
  <img src="%s" style="position:absolute;left:104px;top:252px;width:24px;height:24px;object-fit:contain">
  <p style="position:absolute;left:143px;top:254px;width:275px;font-family:%s;font-weight:500;font-size:19.929px;line-height:16.6px;margin:0">mythrifertinest@gmail.com</p>
  %s
  <div style="position:absolute;left:503px;top:244px;width:775px;height:1px;background:#943687;transform:rotate(.3deg)"></div>
  <div style="position:absolute;left:1318.9px;top:178px;width:130px;height:220px;opacity:.17;overflow:hidden">
    <img src="%s" style="width:117%%;height:117%%;margin-left:-17%%;transform:rotate(180deg) scaleY(-1)"></div>
  <p style="position:absolute;left:725px;top:327px;width:644px;transform:translateX(-50%%);font-family:%s;font-weight:500;font-size:16px;line-height:16px;text-align:center;margin:0">
    All Rights Reserved &copy; 2026, Mythri Fertinest | Imagined and Crafted By
    <span style="font-family:'Manrope',sans-serif;font-weight:700">TZYN Studio</span></p>
</div>""" % (bg, LOGO, JK, PHONE, JK, MAIL, JK, cols, LEAF, JK)


def flex_footer():
    """V3 - TreatmentPageTemplate's own footer: flex, but no breakpoints at all."""
    cols = ""
    for head, items in LINKS:
        cols += '<div class="flex flex-col gap-[12px]"><p class="font-semibold text-[#943687] text-[17px] m-0" style="font-family:%s">%s</p>' % (JK, head)
        cols += "".join('<p class="text-[15px] text-black m-0" style="font-family:%s">%s</p>' % (JK, t) for t in items)
        cols += "</div>"
    return """<div class="bg-[#fff7fa] w-full pt-[48px] pb-[32px]">
  <div class="max-w-[1440px] mx-auto px-[80px]">
    <div class="flex gap-[64px] items-start mb-[40px]">
      <div class="flex flex-col gap-[24px] w-[260px] shrink-0">
        <img src="%s" class="h-[56px] object-contain object-left" style="max-width:180px">
        <div class="flex flex-col gap-[14px]">
          <p class="font-semibold text-[#943687] text-[16px] m-0" style="font-family:%s">Contact Us</p>
          <div class="flex items-center gap-[10px]"><img src="%s" class="w-[18px] h-[18px] object-contain shrink-0"><p class="text-[15px] m-0" style="font-family:%s">+91 9182039911</p></div>
          <div class="flex items-center gap-[10px]"><img src="%s" class="w-[18px] h-[18px] object-contain shrink-0"><p class="text-[15px] m-0" style="font-family:%s">mythrifertinest@gmail.com</p></div>
        </div>
      </div>
      <div class="flex gap-[64px] flex-1">%s</div>
    </div>
    <div class="w-full mb-[24px]" style="height:1px;background:rgba(148,54,135,.15)"></div>
    <p class="font-medium text-[14px] text-center m-0" style="font-family:%s">All Rights Reserved &copy; 2026, Mythri Fertinest | Imagined and Crafted By <span style="font-family:'Manrope',sans-serif;font-weight:700">TZYN Studio</span></p>
  </div>
</div>""" % (LOGO, JK, PHONE, JK, MAIL, JK, cols, JK)


def responsive_footer():
    """V2 - the current footer: the only one with breakpoints."""
    cols = ""
    for head, items in LINKS:
        cols += '<div class="flex flex-col gap-3"><p class="font-semibold text-[#943687] text-[16px] sm:text-[17px] m-0" style="font-family:%s">%s</p>' % (JK, head)
        cols += "".join('<p class="text-[14px] sm:text-[15px] text-black m-0" style="font-family:%s">%s</p>' % (JK, t) for t in items)
        cols += "</div>"
    return """<footer class="bg-[#fff7fa] w-full">
  <div class="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[60px] pt-10 sm:pt-14 pb-6 sm:pb-8">
    <div class="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-10">
      <div class="flex flex-col gap-5 lg:w-[260px] shrink-0">
        <img src="%s" class="h-12 sm:h-14 w-auto object-contain object-left">
        <div class="flex flex-col gap-3">
          <p class="font-semibold text-[#943687] text-[16px] m-0" style="font-family:%s">Contact Us</p>
          <div class="flex items-center gap-2.5"><img src="%s" class="w-[18px] h-[18px] object-contain shrink-0"><p class="text-[15px] m-0" style="font-family:%s">+91 9182039911</p></div>
          <div class="flex items-center gap-2.5"><img src="%s" class="w-[18px] h-[18px] object-contain shrink-0"><p class="text-[15px] m-0" style="font-family:%s">mythrifertinest@gmail.com</p></div>
        </div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 flex-1">%s</div>
    </div>
    <div class="w-full mb-5" style="height:1px;background:rgba(148,54,135,.18)"></div>
    <p class="font-medium text-[13px] sm:text-[14px] text-center m-0" style="font-family:%s">All Rights Reserved &copy; 2026, Mythri Fertinest | Imagined and Crafted By <span style="font-family:'Manrope',sans-serif;font-weight:700">TZYN Studio</span></p>
  </div>
</footer>""" % (LOGO, JK, PHONE, JK, MAIL, JK, cols, JK)


VARIANTS = [
    dict(n="V1", title="Original Figma footer",
         where="src/app/components/shared/Footer.tsx", commit="8dfc3c1 &middot; first commit",
         status="replaced", mobile="broken",
         note="The rich one Tharun remembers: 313px logo, 21px headings, 20px body, leaf watermark, tilted purple rule. Absolutely positioned on a fixed 1440px canvas, so a phone shows only the far-left slice.",
         html=absolute_footer("#fff7fa"), fixed=True),
    dict(n="V2", title="Current footer",
         where="src/app/components/shared/Footer.tsx", commit="299d3de &middot; addedresponsiveness",
         status="live now", mobile="works",
         note="The rebuild that made it responsive. Correct on every screen, but the logo dropped from 313px to ~50px, type shrank ~5px, and the leaf watermark was dropped.",
         html=responsive_footer(), fixed=False),
    dict(n="V3", title="Treatment page footer",
         where="src/app/components/TreatmentPageTemplate.tsx", commit="8dfc3c1 &middot; first commit",
         status="removed", mobile="broken",
         note="Treatment pages briefly had their own footer. Flex rather than absolute, and the closest to a middle ground: 56px logo, 17px headings, 15px body. But no breakpoints and px-[80px] gutters, so it still overflows a phone.",
         html=flex_footer(), fixed=True),
    dict(n="V4", title="Figma page footer",
         where="src/imports/FertilityTreatments-3/FertilityTreatments.tsx", commit="8dfc3c1 &middot; first commit",
         status="never shipped", mobile="broken",
         note="The same design as V1 on a pink #ffeffc ground, inside a Figma export that was never wired into the app.",
         html=absolute_footer("#ffeffc"), fixed=True),
]

PHONE_W = 390
cards = ""
for v in VARIANTS:
    badge = {"live now": "#1a7f37", "replaced": "#b3261e",
             "removed": "#b3261e", "never shipped": "#8a6d00"}[v["status"]]
    mob = ('<span class="pill bad">cut off on phone</span>' if v["mobile"] == "broken"
           else '<span class="pill ok">fits the phone</span>')
    inner = ('<div style="width:1440px;transform:scale(1);transform-origin:top left">%s</div>' % v["html"]
             if v["fixed"] else '<div style="width:%dpx">%s</div>' % (PHONE_W, v["html"]))
    cards += """
<section class="card">
  <div class="head">
    <div class="titles"><h2>%(n)s &mdash; %(title)s</h2>
      <p class="path">%(where)s</p><p class="path">%(commit)s</p></div>
    <div class="pills"><span class="pill" style="background:%(badge)s">%(status)s</span>%(mob)s</div>
  </div>
  <p class="note">%(note)s</p>
  <div class="views">
    <div class="view"><p class="vlabel">Phone &mdash; 390px (actual size)</p>
      <div class="phone"><div class="screen">%(inner)s</div></div></div>
    <div class="view wide"><p class="vlabel">Desktop &mdash; 1440px (scaled to fit)</p>
      <div class="desk"><div style="width:1440px;transform:scale(.47);transform-origin:top left">%(full)s</div></div></div>
  </div>
</section>""" % dict(n=v["n"], title=v["title"], where=v["where"], commit=v["commit"],
                     badge=badge, status=v["status"], mob=mob, note=v["note"],
                     inner=inner, full=v["html"])

PAGE = """<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Fertinest &mdash; every footer version</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Manrope:wght@400;700&display=swap" rel="stylesheet">
<style>
 *{box-sizing:border-box}
 body{margin:0;background:#eceaf0;font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:#1b1b1f}
 header{background:#fff;padding:26px 28px;border-bottom:1px solid #ddd}
 h1{margin:0 0 6px;font-size:23px}
 header p{margin:0;color:#5c5c66;font-size:14px;max-width:760px}
 main{padding:26px 28px 64px;max-width:1240px;margin:0 auto}
 .card{background:#fff;border:1px solid #ddd;border-radius:14px;padding:20px;margin-bottom:24px}
 .head{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;align-items:flex-start}
 .head h2{margin:0;font-size:18px}
 .path{margin:3px 0 0;font-family:ui-monospace,Menlo,monospace;font-size:11.5px;color:#73737d}
 .pills{display:flex;gap:7px;flex-wrap:wrap}
 .pill{color:#fff;font-size:11px;font-weight:700;padding:4px 9px;border-radius:999px;text-transform:uppercase;letter-spacing:.5px;white-space:nowrap}
 .pill.ok{background:#1a7f37}.pill.bad{background:#b3261e}
 .note{margin:12px 0 16px;font-size:14px;line-height:1.55;color:#3d3d45;max-width:860px}
 .views{display:grid;grid-template-columns:420px 1fr;gap:20px;align-items:start}
 @media(max-width:980px){.views{grid-template-columns:1fr}}
 .vlabel{margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:#73737d}
 .phone{width:390px;max-width:100%%;border:9px solid #1b1b1f;border-radius:30px;overflow:hidden;background:#fff}
 .screen{width:100%%;height:460px;overflow:auto;background:#fff}
 .desk{height:200px;overflow:hidden;border:1px solid #e2e2e8;border-radius:10px;background:#fff}
</style></head><body>
<header><h1>Fertinest &mdash; every footer version</h1>
<p>All four footers that have existed in this repo, newest design decisions and oldest alike. Each is shown first at real phone size (390px), then at desktop width. Scroll inside a phone frame to see the whole footer.</p></header>
<main>%s</main></body></html>""" % cards

with open("footer-versions.html", "w", encoding="utf-8") as f:
    f.write(PAGE)
print("footer-versions.html  %.0f KB  (%d variants)" % (
    os.path.getsize("footer-versions.html") / 1e3, len(VARIANTS)))
