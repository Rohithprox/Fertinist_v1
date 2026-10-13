# -*- coding: utf-8 -*-
"""Replace the IVF Timeline block on the IVF page with a properly structured one.

The Figma export dumped the whole timeline as 18 identical <p> tags whose only
separation came from paragraphs containing a zero-width space. Fixing the
mojibake earlier stripped those characters, the spacer paragraphs collapsed to
zero height, and the section became an unreadable wall of text.

This rebuilds it as real headings, body copy and meta lines.
"""
import io, re

P = "src/imports/FertilityTreatments-4/FertilityTreatments.tsx"

PHASES = [
    ("The Preparation Phase", "Weeks 1–2",
     "Your journey begins with planning and preparation. This includes blood tests, "
     "ultrasound scans, and sometimes medications to regulate your cycle and prepare "
     "your body for treatment.",
     "1 to 2 clinic visits"),
    ("The Stimulation Phase", "Weeks 3–4",
     "Starting on Day 2 or 3 of your period, this phase involves daily hormone injections "
     "for around 10 to 12 days to stimulate egg growth. Your progress is monitored through "
     "regular scans.",
     "3 to 4 short clinic visits"),
    ("The Procedure Phase", "Week 4",
     "Once the eggs are ready, they are collected through a short, minimally invasive "
     "procedure that usually takes about 20 minutes. The eggs are then fertilized in the "
     "lab and allowed to develop for 3 to 5 days.",
     None),
]

def phase_jsx(title, weeks, body, commit):
    meta = ""
    if commit:
        meta = ('\n            <p className="font-[\'Manrope\',sans-serif] font-bold text-[16px] '
                'text-[#943687] m-0 mt-[10px]">Time commitment: '
                '<span className="font-[\'Plus_Jakarta_Sans\',sans-serif] font-normal text-[#4f434f]">%s</span></p>'
                % commit)
    return '''          <div className="mb-[28px]">
            <p className="font-['Manrope',sans-serif] font-bold text-[21px] text-[#221823] m-0 mb-[6px]">
              %s <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[17px] text-[#943687]">(%s)</span>
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[19px] leading-[31px] text-[#4f434f] m-0">%s</p>%s
          </div>''' % (title, weeks, body, meta)

BULLET = ('<li className="font-[\'Plus_Jakarta_Sans\',sans-serif] text-[19px] leading-[31px] '
          'text-[#4f434f] mb-[6px]">%s</li>')

NEW = '''        <div className="absolute left-[100px] top-[2460px] w-[1251px]">
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] text-[#943687] m-0 mb-[18px]">
            IVF Timeline at Fertinest – What to Expect
          </p>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[19px] leading-[31px] text-[#4f434f] m-0 mb-[32px]">
            For many working couples, understanding the time involved in IVF is important. At Fertinest,
            we follow a structured and patient-friendly approach designed to fit into your routine.
            While every journey is unique, a typical IVF cycle usually takes about 4 to 6 weeks.
          </p>
%s
          <div className="mb-[28px]">
            <p className="font-['Manrope',sans-serif] font-bold text-[21px] text-[#221823] m-0 mb-[6px]">
              The Transfer Phase <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[17px] text-[#943687]">(Week 5 or later)</span>
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[19px] leading-[31px] text-[#4f434f] m-0 mb-[8px]">
              In this stage, the embryo is placed into the uterus.
            </p>
            <ul className="list-disc pl-[24px] m-0">
              %s
              %s
            </ul>
          </div>
          <div className="rounded-[16px] p-[24px] mb-[20px]" style={{ background: "rgba(167,75,153,0.07)" }}>
            <p className="font-['Manrope',sans-serif] font-bold text-[18px] text-[#943687] m-0 mb-[10px] tracking-[0.4px] uppercase">
              Overall timeline
            </p>
            <ul className="list-disc pl-[24px] m-0">
              %s
              %s
            </ul>
          </div>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[19px] leading-[31px] text-[#4f434f] m-0">
            At Fertinest, every step is carefully guided to ensure a smooth, efficient, and supportive
            experience throughout your IVF journey.
          </p>
        </div>''' % (
    "\n".join(phase_jsx(*p) for p in PHASES),
    BULLET % "<span className=\"font-semibold text-[#221823]\">Fresh Transfer:</span> done 3 to 5 days after egg retrieval",
    BULLET % "<span className=\"font-semibold text-[#221823]\">Frozen Transfer (recommended):</span> embryos are frozen and transferred in the next menstrual cycle, allowing the body to recover and often improving success rates",
    BULLET % "<span className=\"font-semibold text-[#221823]\">Fresh IVF cycle:</span> approximately 3 to 4 weeks, from Day 1 of your period to embryo transfer",
    BULLET % "<span className=\"font-semibold text-[#221823]\">Frozen IVF cycle:</span> approximately 6 to 8 weeks, spread across two menstrual cycles",
)

s = io.open(P, encoding="utf-8").read()
i = s.index("IVF Timeline at Fertinest")
start = s.rfind("<div", 0, i)
# walk to the matching close of that div
depth, j = 0, start
while True:
    m = re.compile(r"</?div\b").search(s, j)
    depth += 1 if m.group(0) == "<div" else -1
    j = m.end()
    if depth == 0:
        end = s.index(">", j - 1) + 1 if False else j + len(">")
        break
end = s.index(">", j - 1) + 1

io.open(P, "w", encoding="utf-8").write(s[:start] + NEW + s[end:])
print("IVF timeline rebuilt with real structure")
