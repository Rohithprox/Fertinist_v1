// One entry per dropdown service that has no bespoke page of its own.
// Rendered by ServicePage via /treatments/:slug, so adding a service here is
// all that is needed to give it a live page.
//
// CLINICAL COPY IS DRAFT — written to be conservative and factual, with no
// success-rate or outcome promises. A doctor must review before publishing.

export interface ServiceContent {
  slug: string;
  name: string;
  subtitle: string;
  whatIsTitle: string;
  whatIs: string[];
  rightForYouTitle: string;
  rightForYou: string[];
  timelineTitle: string;
  timelineIntro: string;
  phases: { title: string; description: string; timeCommitment?: string }[];
  overall: string[];
}

export const services: ServiceContent[] = [
  // ── Female infertility conditions ──
  {
    slug: "pcos-pcod",
    name: "PCOS / PCOD",
    subtitle:
      "Polycystic ovary syndrome is one of the most common and most treatable causes of difficulty conceiving. With the right plan, most women with PCOS go on to have healthy pregnancies.",
    whatIsTitle: "What is PCOS / PCOD?",
    whatIs: [
      "Polycystic Ovary Syndrome (PCOS), sometimes called PCOD, is a hormonal condition in which the ovaries produce higher than usual levels of androgens. This can disrupt ovulation, making cycles irregular or absent and making it harder to conceive.",
      "At Fertinest we assess PCOS as a whole-body condition rather than an ovarian problem alone, looking at hormone levels, insulin resistance, weight and thyroid function together, so treatment addresses the cause and not only the symptom.",
    ],
    rightForYouTitle: "You may want an assessment if you have",
    rightForYou: [
      "Irregular, infrequent or absent periods",
      "Difficulty conceiving after 12 months of trying",
      "Excess hair growth, acne or hair thinning",
      "Difficulty losing weight, or rapid weight gain",
      "Multiple small follicles seen on an ovarian scan",
      "A family history of PCOS or type 2 diabetes",
    ],
    timelineTitle: "How PCOS care works at Fertinest",
    timelineIntro:
      "PCOS is managed rather than cured, and the plan depends on whether you are trying to conceive now or later. Most women see cycle changes within two to three months of starting treatment.",
    phases: [
      {
        title: "Assessment",
        description:
          "Blood tests for hormones, thyroid and insulin resistance, along with a pelvic ultrasound to assess the ovaries and uterine lining.",
        timeCommitment: "1 to 2 visits",
      },
      {
        title: "Lifestyle and medical management",
        description:
          "A nutrition and activity plan alongside medication where indicated, to restore regular ovulation. This is the foundation of PCOS treatment and often enough on its own.",
        timeCommitment: "Review every 4 to 6 weeks",
      },
      {
        title: "Fertility treatment if needed",
        description:
          "If ovulation does not return, ovulation induction with follicular monitoring is the usual next step, progressing to IUI or IVF only where required.",
        timeCommitment: "Cycle-by-cycle monitoring",
      },
    ],
    overall: [
      "Cycle regulation: often within 2 to 3 months of consistent treatment",
      "Long-term management continues after conception to reduce pregnancy risks",
    ],
  },
  {
    slug: "low-ovarian-reserve",
    name: "Low Ovarian Reserve",
    subtitle:
      "A lower egg count does not mean pregnancy is out of reach. It means timing, protocol choice and expert monitoring matter more, which is where a specialist plan makes the difference.",
    whatIsTitle: "What is low ovarian reserve?",
    whatIs: [
      "Ovarian reserve describes the number of eggs remaining in the ovaries. It declines naturally with age, but some women have a lower reserve than expected for their age due to genetics, previous surgery, endometriosis or medical treatment.",
      "Low reserve affects the number of eggs available in a cycle rather than your ability to carry a pregnancy. Our approach focuses on protocols that make the most of the eggs you have, and on not delaying treatment unnecessarily.",
    ],
    rightForYouTitle: "You may want an assessment if you have",
    rightForYou: [
      "A low AMH result or high FSH on blood testing",
      "A low antral follicle count on ultrasound",
      "Shortening menstrual cycles",
      "Difficulty conceiving over the age of 35",
      "Previous ovarian surgery, chemotherapy or radiotherapy",
      "A family history of early menopause",
    ],
    timelineTitle: "How we assess and treat low ovarian reserve",
    timelineIntro:
      "Assessment is quick, and because reserve declines with time, we aim to move from testing to a treatment decision without unnecessary delay.",
    phases: [
      {
        title: "Reserve testing",
        description:
          "AMH blood test and an antral follicle count scan, ideally early in your cycle, to establish a clear baseline.",
        timeCommitment: "1 visit",
      },
      {
        title: "Protocol planning",
        description:
          "Your specialist selects a stimulation approach suited to a lower reserve, which may differ considerably from a standard protocol.",
        timeCommitment: "1 consultation",
      },
      {
        title: "Treatment cycle",
        description:
          "Stimulation with close scan monitoring, followed by egg retrieval. Some patients benefit from collecting eggs or embryos over more than one cycle before transfer.",
        timeCommitment: "3 to 5 monitoring visits per cycle",
      },
    ],
    overall: [
      "Testing to treatment plan: usually within 2 to 3 weeks",
      "Where reserve is very low, banking embryos across cycles may be advised",
    ],
  },
  {
    slug: "tubal-blocks",
    name: "Tubal Blocks / Post Tubectomy",
    subtitle:
      "Blocked fallopian tubes, including after a previous tubectomy, are a mechanical barrier rather than a hormonal one. That means there is usually a clear route forward.",
    whatIsTitle: "What are tubal blocks?",
    whatIs: [
      "The fallopian tubes carry the egg from the ovary towards the uterus and are where fertilisation normally happens. If one or both tubes are blocked or damaged, sperm and egg cannot meet naturally. Causes include past infection, endometriosis, previous surgery and elective tubectomy.",
      "Because the problem is structural, treatment is either to bypass the tubes with IVF or, in selected cases, to repair them surgically. We assess which of the two gives you the better chance rather than defaulting to one.",
    ],
    rightForYouTitle: "You may want an assessment if you have",
    rightForYou: [
      "A previous tubectomy and now wish to conceive",
      "A history of pelvic infection or pelvic inflammatory disease",
      "A previous ectopic pregnancy",
      "Known endometriosis or previous pelvic surgery",
      "Difficulty conceiving with otherwise normal test results",
      "An abnormal HSG or tubal patency test",
    ],
    timelineTitle: "How tubal factor treatment works",
    timelineIntro:
      "The first step is confirming whether the tubes are blocked, where, and how badly. That finding determines the treatment route.",
    phases: [
      {
        title: "Tubal assessment",
        description:
          "An HSG or hysterolaparoscopy to map whether one or both tubes are affected and whether the tube is otherwise healthy.",
        timeCommitment: "1 procedure visit",
      },
      {
        title: "Route decision",
        description:
          "Where a short, healthy segment can be rejoined, surgical repair may be offered. Where tubes are extensively damaged, IVF bypasses them entirely and is usually the stronger option.",
        timeCommitment: "1 consultation",
      },
      {
        title: "Treatment",
        description:
          "Either laparoscopic tubal surgery followed by a period of trying naturally, or an IVF cycle where the tubes are not involved at all.",
        timeCommitment: "Depends on route chosen",
      },
    ],
    overall: [
      "Assessment to decision: usually within 2 to 4 weeks",
      "After tubal repair, natural conception is generally attempted for 6 to 12 months before moving to IVF",
    ],
  },
  {
    slug: "uterine-fibroids",
    name: "Uterine Fibroids",
    subtitle:
      "Fibroids are very common and most do not affect fertility at all. What matters is their size and, above all, their position relative to the uterine cavity.",
    whatIsTitle: "What are uterine fibroids?",
    whatIs: [
      "Fibroids are non-cancerous growths of the muscular wall of the uterus. They are extremely common and many women have them without symptoms or any effect on fertility. Their significance depends far more on where they sit than on how many there are.",
      "Fibroids that distort the uterine cavity or block a tube can interfere with implantation, while those sitting on the outer wall often need no treatment at all. Our assessment is aimed at telling those situations apart before recommending surgery.",
    ],
    rightForYouTitle: "You may want an assessment if you have",
    rightForYou: [
      "Heavy or prolonged menstrual bleeding",
      "Pelvic pressure, bloating or a feeling of fullness",
      "Difficulty conceiving or recurrent miscarriage",
      "Fibroids already seen on a scan elsewhere",
      "Frequent urination or lower back discomfort",
      "Anaemia related to heavy periods",
    ],
    timelineTitle: "How fibroid treatment is planned",
    timelineIntro:
      "Not every fibroid needs removing. The plan follows from accurate mapping of size and position, balanced against your fertility timeline.",
    phases: [
      {
        title: "Mapping",
        description:
          "Ultrasound, and where needed hysteroscopy or MRI, to record the size, number and exact position of each fibroid.",
        timeCommitment: "1 to 2 visits",
      },
      {
        title: "Decision",
        description:
          "Fibroids distorting the cavity are usually removed before fertility treatment. Others may simply be monitored, avoiding unnecessary surgery.",
        timeCommitment: "1 consultation",
      },
      {
        title: "Myomectomy if indicated",
        description:
          "Minimally invasive removal by hysteroscopy or laparoscopy, preserving the uterus and its ability to carry a pregnancy.",
        timeCommitment: "Day-care or short stay",
      },
    ],
    overall: [
      "Recovery after minimally invasive myomectomy: usually 1 to 2 weeks",
      "A healing interval is generally advised before conceiving or starting IVF",
    ],
  },
  {
    slug: "adenomyosis-endometriosis",
    name: "Adenomyosis / Endometriosis",
    subtitle:
      "Both conditions are frequently missed for years and often dismissed as ordinary period pain. Accurate diagnosis is the single biggest step towards effective treatment.",
    whatIsTitle: "What are adenomyosis and endometriosis?",
    whatIs: [
      "In endometriosis, tissue similar to the uterine lining grows outside the uterus, on the ovaries, tubes or pelvic lining, causing inflammation, pain and scarring. In adenomyosis, that tissue grows into the muscular wall of the uterus itself, typically causing heavy, painful periods.",
      "Both can affect fertility through inflammation, adhesions and altered implantation. Both are also manageable. Our aim is to diagnose accurately, treat the pain and protect your fertility at the same time rather than treating each in isolation.",
    ],
    rightForYouTitle: "You may want an assessment if you have",
    rightForYou: [
      "Severe or worsening period pain",
      "Heavy periods, or bleeding between periods",
      "Pain during intercourse or on passing urine or stool",
      "Chronic pelvic pain outside your period",
      "Difficulty conceiving with unexplained results",
      "An ovarian cyst suggestive of endometrioma on a scan",
    ],
    timelineTitle: "How we manage adenomyosis and endometriosis",
    timelineIntro:
      "Treatment is tailored to whether your priority is pain relief, fertility, or both, and the sequence matters because some treatments pause fertility.",
    phases: [
      {
        title: "Diagnosis",
        description:
          "Detailed history, examination and specialist ultrasound, with diagnostic laparoscopy where the picture is unclear. Laparoscopy remains the definitive test for endometriosis.",
        timeCommitment: "1 to 2 visits",
      },
      {
        title: "Medical or surgical treatment",
        description:
          "Medication to control pain and progression, or laparoscopic excision of endometriotic tissue and adhesions where fertility or severe symptoms are the concern.",
        timeCommitment: "Varies by route",
      },
      {
        title: "Fertility planning",
        description:
          "Because both conditions can progress, we discuss the timing of conception or fertility preservation early rather than after treatment concludes.",
        timeCommitment: "Ongoing review",
      },
    ],
    overall: [
      "Post-laparoscopy recovery: usually 1 to 2 weeks",
      "Fertility is often best attempted in the months following surgical treatment",
    ],
  },
  {
    slug: "uterine-malformations",
    name: "Uterine Septum / Uterine Malformations",
    subtitle:
      "Differences in the shape of the uterus are present from birth and often discovered only during fertility or miscarriage investigation. Many are correctable with day-care surgery.",
    whatIsTitle: "What are uterine malformations?",
    whatIs: [
      "The uterus forms in early development from two halves that fuse together. When fusion is incomplete, the result can be a septum dividing the cavity, or a differently shaped uterus such as a bicornuate, unicornuate or arcuate uterus.",
      "Many of these differences cause no problems at all. A septum, however, is associated with miscarriage and can usually be divided in a short hysteroscopic procedure, which is why accurate diagnosis is worth pursuing.",
    ],
    rightForYouTitle: "You may want an assessment if you have",
    rightForYou: [
      "Two or more miscarriages, particularly in the first trimester",
      "A uterine abnormality suggested on a previous scan",
      "Difficulty conceiving with normal hormone results",
      "A history of preterm birth or malpresentation",
      "Painful periods since your teenage years",
      "Known kidney abnormalities, which can occur alongside",
    ],
    timelineTitle: "How correction is planned",
    timelineIntro:
      "The key question is whether the abnormality is one that benefits from surgery. Imaging usually answers it, and correction where indicated is typically a short procedure.",
    phases: [
      {
        title: "Imaging",
        description:
          "Three-dimensional ultrasound, and hysteroscopy where needed, to define the exact shape of the cavity. This distinguishes a septum from other variants that need no surgery.",
        timeCommitment: "1 to 2 visits",
      },
      {
        title: "Hysteroscopic correction",
        description:
          "Where a septum is confirmed, it is divided hysteroscopically through the cervix, with no external incision. Usually a day-care procedure.",
        timeCommitment: "Day-care",
      },
      {
        title: "Healing and review",
        description:
          "A follow-up scan or hysteroscopy confirms a healthy cavity before conception or embryo transfer is attempted.",
        timeCommitment: "1 review visit",
      },
    ],
    overall: [
      "Recovery after hysteroscopic septal division: usually a few days",
      "Conception is generally advised after one to two cycles of healing",
    ],
  },
  {
    slug: "hormonal-imbalance",
    name: "Hormonal Imbalance",
    subtitle:
      "Ovulation depends on a precise sequence of hormonal signals. When one is out of range, cycles falter, and correcting it is often among the simplest fertility treatments there is.",
    whatIsTitle: "What is hormonal imbalance?",
    whatIs: [
      "Conception relies on coordinated signalling between the brain, thyroid and ovaries. Disruption at any point, whether raised prolactin, an underactive or overactive thyroid, or altered FSH, LH or progesterone, can prevent ovulation or make the uterine lining unreceptive.",
      "These imbalances are usually straightforward to identify with blood tests and frequently correctable with medication. In many couples, treating a hormonal issue is all that is needed for conception to follow naturally.",
    ],
    rightForYouTitle: "You may want an assessment if you have",
    rightForYou: [
      "Irregular, absent or unusually short cycles",
      "Milk discharge from the breasts when not breastfeeding",
      "Unexplained weight change, fatigue or hair loss",
      "Known thyroid disease, treated or untreated",
      "Difficulty conceiving without an obvious cause",
      "A short luteal phase or spotting before your period",
    ],
    timelineTitle: "How hormonal treatment progresses",
    timelineIntro:
      "Testing is quick and inexpensive, and because most imbalances respond to medication, improvement is often seen within a few cycles.",
    phases: [
      {
        title: "Hormone profiling",
        description:
          "Blood tests timed to your cycle, covering thyroid function, prolactin, FSH, LH, AMH and progesterone as indicated.",
        timeCommitment: "1 to 2 visits",
      },
      {
        title: "Correction",
        description:
          "Targeted medication to bring the specific hormone back into range, with repeat testing to confirm the correction has taken effect.",
        timeCommitment: "Review every 4 to 8 weeks",
      },
      {
        title: "Cycle tracking",
        description:
          "Once levels are stable, follicular monitoring confirms that ovulation has resumed before considering any further treatment.",
        timeCommitment: "2 to 3 scans per cycle",
      },
    ],
    overall: [
      "Most hormonal corrections show measurable change within 6 to 12 weeks",
      "Thyroid and prolactin management usually continues through pregnancy",
    ],
  },
  {
    slug: "recurrent-pregnancy-loss",
    name: "Recurrent Pregnancy Loss",
    subtitle:
      "Repeated miscarriage is one of the most painful experiences a couple can face, and it deserves systematic investigation rather than reassurance that you should simply try again.",
    whatIsTitle: "What is recurrent pregnancy loss?",
    whatIs: [
      "Recurrent pregnancy loss means two or more consecutive miscarriages. Causes include chromosomal factors, uterine abnormalities, hormonal and thyroid disorders, clotting and immune conditions such as antiphospholipid syndrome, and in a proportion of couples no cause is found.",
      "A structured evaluation identifies a treatable cause in many couples. Where no cause is identified, that is genuinely encouraging information, as the likelihood of a successful future pregnancy remains good with appropriate support and monitoring.",
    ],
    rightForYouTitle: "You may want an assessment if you have",
    rightForYou: [
      "Two or more miscarriages, consecutive or otherwise",
      "A miscarriage after 10 weeks of pregnancy",
      "A known clotting or autoimmune disorder",
      "A previous baby with a chromosomal condition",
      "A uterine abnormality seen on imaging",
      "A stillbirth or unexplained pregnancy loss",
    ],
    timelineTitle: "How the evaluation works",
    timelineIntro:
      "Investigation is thorough by design, since the aim is to rule causes in or out properly rather than repeat an unsupported attempt.",
    phases: [
      {
        title: "Investigation",
        description:
          "Chromosomal analysis for both partners, uterine imaging, thyroid and hormone profiling, and clotting and immune screening.",
        timeCommitment: "2 to 3 visits",
      },
      {
        title: "Targeted treatment",
        description:
          "Treatment directed at whatever is found, which may include blood-thinning medication, thyroid correction, hysteroscopic surgery, or PGT with IVF for chromosomal factors.",
        timeCommitment: "Varies by cause",
      },
      {
        title: "Supported pregnancy care",
        description:
          "Early scans, hormonal support where indicated, and closer monitoring through the first trimester and beyond.",
        timeCommitment: "Fortnightly early review",
      },
    ],
    overall: [
      "Full investigation: usually completed within 4 to 6 weeks",
      "Care continues through the next pregnancy, not only until conception",
    ],
  },

  // ── Male infertility conditions ──
  {
    slug: "low-sperm-count",
    name: "Low Sperm Count",
    subtitle:
      "Male factor contributes to roughly half of all infertility, and a low count is rarely the end of the discussion. Modern techniques need far fewer sperm than natural conception does.",
    whatIsTitle: "What is low sperm count?",
    whatIs: [
      "A low sperm count, or oligospermia, means fewer sperm in the semen than the reference range. Causes include varicocele, hormonal imbalance, infection, undescended testes, genetic factors, heat exposure, smoking, alcohol and certain medications.",
      "Count is only one measure, and treatment depends on the cause. Where sperm are present in any number, ICSI requires only a single healthy sperm per egg, which is why very low counts still carry a realistic path to pregnancy.",
    ],
    rightForYouTitle: "You may want an assessment if you have",
    rightForYou: [
      "A previous semen analysis showing a low count",
      "Difficulty conceiving after 12 months of trying",
      "Swelling, discomfort or a lump in the scrotum",
      "A history of undescended testes, mumps or testicular injury",
      "Previous chemotherapy, radiotherapy or anabolic steroid use",
      "Reduced facial or body hair, or low libido",
    ],
    timelineTitle: "How male factor treatment progresses",
    timelineIntro:
      "Sperm production runs on roughly a three-month cycle, so the effect of any treatment is assessed on that timescale rather than sooner.",
    phases: [
      {
        title: "Evaluation",
        description:
          "Semen analysis repeated for reliability, hormone profiling, scrotal ultrasound and genetic testing where indicated.",
        timeCommitment: "2 visits",
      },
      {
        title: "Treatment of the cause",
        description:
          "Varicocele repair, hormonal treatment, infection management or lifestyle change, depending on what the evaluation shows.",
        timeCommitment: "Review at 3 months",
      },
      {
        title: "Assisted conception if needed",
        description:
          "IUI where the count is adequate, or ICSI where it is very low. Surgical retrieval by TESA or PESA is available where no sperm appear in the ejaculate.",
        timeCommitment: "Cycle-based",
      },
    ],
    overall: [
      "Sperm regeneration cycle: approximately 72 to 90 days",
      "Repeat analysis is generally advised 3 months after starting treatment",
    ],
  },
  {
    slug: "sperm-motility",
    name: "Sperm Motility Problems",
    subtitle:
      "Sperm must swim well to reach the egg. When motility is reduced, the count can be entirely normal and conception still difficult, which is why analysis looks well beyond numbers.",
    whatIsTitle: "What are sperm motility problems?",
    whatIs: [
      "Motility describes how well sperm move. Reduced motility, or asthenozoospermia, means fewer sperm are able to travel through the cervix and uterus to reach the egg. Causes include varicocele, infection, oxidative stress, prolonged heat exposure, smoking and certain nutritional deficiencies.",
      "Because motility can be reduced while count is normal, it is a common reason for otherwise unexplained infertility. Laboratory techniques can select the most motile sperm, and ICSI removes the need for the sperm to swim at all.",
    ],
    rightForYouTitle: "You may want an assessment if you have",
    rightForYou: [
      "A semen analysis showing reduced motility",
      "A normal sperm count but difficulty conceiving",
      "A varicocele, or scrotal swelling or discomfort",
      "Frequent exposure to heat, such as long driving hours",
      "A history of genital infection",
      "Smoking, heavy alcohol use or significant work stress",
    ],
    timelineTitle: "How motility is treated",
    timelineIntro:
      "Motility often improves with treatment of the underlying cause and with antioxidant support, assessed over a full sperm production cycle.",
    phases: [
      {
        title: "Detailed analysis",
        description:
          "Semen analysis including motility grading and, where useful, DNA fragmentation testing to assess sperm quality beyond movement.",
        timeCommitment: "1 to 2 visits",
      },
      {
        title: "Medical and lifestyle treatment",
        description:
          "Antioxidant therapy, treatment of infection or varicocele, and specific lifestyle changes, reviewed after about three months.",
        timeCommitment: "Review at 3 months",
      },
      {
        title: "Laboratory selection",
        description:
          "Sperm preparation techniques concentrate the most motile sperm for IUI, or a single sperm is selected directly for ICSI.",
        timeCommitment: "Cycle-based",
      },
    ],
    overall: [
      "Meaningful reassessment: approximately 3 months after starting treatment",
      "ICSI bypasses motility entirely where treatment does not achieve enough change",
    ],
  },
  {
    slug: "erectile-problems",
    name: "Erectile Problems",
    subtitle:
      "Erectile difficulty is common, treatable, and frequently the first sign of a wider health issue worth checking. It is also a recognised and manageable cause of difficulty conceiving.",
    whatIsTitle: "What causes erectile problems?",
    whatIs: [
      "Erectile dysfunction is the difficulty in achieving or maintaining an erection sufficient for intercourse. Causes are commonly physical, including diabetes, high blood pressure, cardiovascular disease, hormonal imbalance and medication side effects, and often have a psychological component alongside.",
      "It is worth assessing properly for two reasons. It is a treatable barrier to conception, and it can be an early indicator of cardiovascular or metabolic disease that benefits from being found sooner rather than later.",
    ],
    rightForYouTitle: "You may want an assessment if you have",
    rightForYou: [
      "Ongoing difficulty achieving or maintaining an erection",
      "Difficulty with ejaculation or timing during intercourse",
      "Diabetes, high blood pressure or high cholesterol",
      "Reduced libido, fatigue or low mood",
      "Medication that may affect sexual function",
      "Significant stress, anxiety or relationship strain",
    ],
    timelineTitle: "How treatment is approached",
    timelineIntro:
      "Assessment is discreet and starts with general health, since treating an underlying condition often resolves the difficulty itself.",
    phases: [
      {
        title: "Assessment",
        description:
          "Confidential history, examination, and blood tests for blood sugar, lipids, testosterone and thyroid function.",
        timeCommitment: "1 visit",
      },
      {
        title: "Treatment",
        description:
          "Management of any underlying condition, medication where appropriate, counselling support, and review of any medicines that may be contributing.",
        timeCommitment: "Review at 4 to 6 weeks",
      },
      {
        title: "Conception support",
        description:
          "Where difficulty persists, timed intercourse guidance, IUI or ICSI provide a route to conception while treatment continues.",
        timeCommitment: "Cycle-based",
      },
    ],
    overall: [
      "Most men see change within 4 to 8 weeks of starting treatment",
      "Care is coordinated with your physician where a metabolic cause is found",
    ],
  },

  // ── Fertility treatments ──
  {
    slug: "ovulation-induction",
    name: "Ovulation Induction",
    subtitle:
      "The simplest and least invasive fertility treatment there is. Where ovulation is irregular or absent, gentle stimulation is often all that stands between you and conception.",
    whatIsTitle: "What is ovulation induction?",
    whatIs: [
      "Ovulation induction uses oral or injectable medication to encourage the ovaries to develop and release a mature egg. It is the first-line treatment where cycles are irregular or ovulation is not happening, most commonly in PCOS.",
      "Cycles are monitored by ultrasound so that egg development can be tracked and the timing of intercourse or IUI advised precisely. Monitoring also keeps the response controlled and reduces the chance of a multiple pregnancy.",
    ],
    rightForYouTitle: "This may be right for you if you have",
    rightForYou: [
      "Irregular or absent ovulation",
      "PCOS with otherwise open tubes and normal semen analysis",
      "Unexplained infertility of relatively short duration",
      "A partner with a normal semen analysis",
      "At least one open fallopian tube",
      "A preference for starting with the least invasive option",
    ],
    timelineTitle: "What an induction cycle involves",
    timelineIntro:
      "Treatment follows your natural cycle, so one attempt takes roughly one month from the start of your period to the point of testing.",
    phases: [
      {
        title: "Baseline scan",
        description:
          "A scan early in your cycle, usually day 2 or 3, to confirm the ovaries are quiet and the lining is thin before starting medication.",
        timeCommitment: "1 visit",
      },
      {
        title: "Stimulation and monitoring",
        description:
          "Medication for around 5 days, followed by scans to track follicle growth and identify the point of maturity.",
        timeCommitment: "2 to 3 short visits",
      },
      {
        title: "Timing and support",
        description:
          "Once a follicle is mature, timed intercourse or IUI is advised, with progesterone support afterwards where indicated.",
        timeCommitment: "1 to 2 visits",
      },
    ],
    overall: [
      "One cycle: approximately 4 weeks from period to pregnancy test",
      "Usually attempted for 3 to 6 cycles before reconsidering the approach",
    ],
  },
  {
    slug: "follicular-scan",
    name: "Follicular Scan",
    subtitle:
      "A short, painless series of scans that shows exactly when you ovulate. For many couples, knowing the timing precisely is the difference that matters.",
    whatIsTitle: "What is a follicular scan?",
    whatIs: [
      "Follicular monitoring is a sequence of brief ultrasound scans across your cycle that track the growing follicle in the ovary and measure the thickness of the uterine lining. Together these show whether and when ovulation is occurring.",
      "It is used both as an investigation, to confirm ovulation is happening at all, and as a guide during treatment, to time intercourse, IUI or a trigger injection accurately. The scans themselves are quick and require no preparation.",
    ],
    rightForYouTitle: "This may be right for you if you have",
    rightForYou: [
      "Irregular cycles, or uncertainty about whether you ovulate",
      "Been trying to conceive without success for some months",
      "Started ovulation induction or an IUI cycle",
      "Difficulty interpreting home ovulation kits",
      "A need to time intercourse around work or travel",
      "A history of thin uterine lining",
    ],
    timelineTitle: "What monitoring involves",
    timelineIntro:
      "Scans are spread across a single cycle, each taking only a few minutes, with the number depending on how your cycle progresses.",
    phases: [
      {
        title: "Baseline",
        description:
          "A scan on day 2 or 3 of your period to record the starting state of the ovaries and lining.",
        timeCommitment: "1 short visit",
      },
      {
        title: "Mid-cycle tracking",
        description:
          "Scans roughly every 2 to 3 days from around day 9, following the leading follicle as it matures.",
        timeCommitment: "2 to 4 short visits",
      },
      {
        title: "Confirmation",
        description:
          "A final scan confirms the follicle has released, and your doctor advises on timing and any support needed afterwards.",
        timeCommitment: "1 short visit",
      },
    ],
    overall: [
      "Each scan takes about 10 minutes with no preparation needed",
      "A full monitored cycle typically involves 4 to 6 visits",
    ],
  },
  {
    slug: "blastocyst-culture",
    name: "Blastocyst Culture",
    subtitle:
      "Growing embryos to day five, rather than transferring earlier, lets the strongest embryos identify themselves. It is one of the clearest advances in modern IVF.",
    whatIsTitle: "What is blastocyst culture?",
    whatIs: [
      "After fertilisation, embryos are cultured in the laboratory for five to six days until they reach the blastocyst stage, the point at which a healthy embryo has begun to differentiate and would naturally be ready to implant.",
      "Extending culture to day five is informative in itself. Embryos with limited developmental potential typically stop before this stage, so those that do reach it are the better candidates for transfer, allowing a single embryo to be selected with greater confidence.",
    ],
    rightForYouTitle: "This may be right for you if you have",
    rightForYou: [
      "Several embryos available and a need to choose between them",
      "A previous IVF cycle with a day-two or day-three transfer that did not succeed",
      "A wish to transfer a single embryo and avoid a twin pregnancy",
      "Plans for genetic testing of embryos with PGT",
      "A plan to freeze embryos for later transfer",
      "Been advised that embryo selection is the key issue in your case",
    ],
    timelineTitle: "How blastocyst culture fits into IVF",
    timelineIntro:
      "Culture happens entirely in the laboratory after egg retrieval, so it adds no additional visits for you beyond your usual IVF schedule.",
    phases: [
      {
        title: "Fertilisation",
        description:
          "Eggs are fertilised by IVF or ICSI on the day of retrieval and placed into culture in a controlled incubator.",
        timeCommitment: "Laboratory, day 0",
      },
      {
        title: "Extended culture",
        description:
          "Embryos are grown to day 5 or 6 in a stable environment designed to mimic the body, with development assessed by our embryologists.",
        timeCommitment: "Laboratory, days 1 to 6",
      },
      {
        title: "Transfer or freezing",
        description:
          "The strongest blastocyst is transferred, or all suitable blastocysts are frozen for a later cycle.",
        timeCommitment: "1 short visit",
      },
    ],
    overall: [
      "Culture period: 5 to 6 days after egg retrieval",
      "Not all embryos reach blastocyst stage, and that is expected",
    ],
  },

  // ── Minimal access surgery ──
  {
    slug: "hysteroscopic-surgeries",
    name: "Hysteroscopic Surgeries",
    subtitle:
      "Surgery inside the uterus, performed through the cervix with no incision at all. Most patients go home the same day and return to normal activity within days.",
    whatIsTitle: "What is hysteroscopic surgery?",
    whatIs: [
      "Hysteroscopy uses a fine telescope passed through the cervix to see directly inside the uterine cavity. It allows both diagnosis and treatment in the same sitting, with no cut to the abdomen and no visible scar.",
      "It is used to remove polyps and submucosal fibroids, divide a uterine septum, release adhesions and investigate abnormal bleeding or repeated implantation failure. Because access is through the natural passage of the cervix, recovery is considerably faster than open surgery.",
    ],
    rightForYouTitle: "This may be right for you if you have",
    rightForYou: [
      "A polyp or fibroid within the uterine cavity",
      "A suspected uterine septum or adhesions",
      "Heavy, irregular or unexplained bleeding",
      "Recurrent miscarriage or failed embryo transfers",
      "An abnormal finding on ultrasound requiring direct assessment",
      "A need for diagnosis and treatment in a single procedure",
    ],
    timelineTitle: "What to expect",
    timelineIntro:
      "Hysteroscopy is usually a day-care procedure, most often scheduled in the first half of your cycle when the lining is thin and visibility best.",
    phases: [
      {
        title: "Preparation",
        description:
          "Pre-operative assessment and blood tests, with the procedure timed to the right point in your cycle.",
        timeCommitment: "1 visit",
      },
      {
        title: "Procedure",
        description:
          "Performed under short anaesthesia and typically lasting 20 to 45 minutes depending on what is being treated.",
        timeCommitment: "Day-care admission",
      },
      {
        title: "Recovery and review",
        description:
          "Home the same day in most cases, with mild cramping and light spotting expected, and a review scan to confirm healing.",
        timeCommitment: "1 review visit",
      },
    ],
    overall: [
      "Return to normal activity: usually 2 to 3 days",
      "Fertility treatment can often resume after one or two cycles",
    ],
  },
  {
    slug: "laparoscopic-surgery",
    name: "Laparoscopic Surgery",
    subtitle:
      "Keyhole surgery through incisions of a few millimetres. Less pain, a shorter stay and a faster return to normal life than open surgery for the same condition.",
    whatIsTitle: "What is laparoscopic surgery?",
    whatIs: [
      "Laparoscopy is performed through two or three incisions of five to ten millimetres, using a camera and fine instruments. The surgeon operates with a magnified view, which allows precise work on the ovaries, tubes and uterus.",
      "In fertility care it is used to treat endometriosis, remove cysts and fibroids, release adhesions and assess the tubes. Compared with open surgery, patients typically experience less pain, less blood loss, a shorter hospital stay and a quicker recovery.",
    ],
    rightForYouTitle: "This may be right for you if you have",
    rightForYou: [
      "Endometriosis or chronic pelvic pain",
      "An ovarian cyst requiring removal",
      "Fibroids on the outer wall of the uterus",
      "Suspected pelvic adhesions or tubal disease",
      "Unexplained infertility after normal initial tests",
      "A need for both diagnosis and treatment at once",
    ],
    timelineTitle: "What to expect",
    timelineIntro:
      "Most laparoscopic procedures involve a short admission, with recovery measured in days rather than weeks.",
    phases: [
      {
        title: "Pre-operative assessment",
        description:
          "Consultation, blood tests, imaging and anaesthetic review to plan the procedure.",
        timeCommitment: "1 to 2 visits",
      },
      {
        title: "Surgery",
        description:
          "Performed under general anaesthesia, typically lasting 45 minutes to 2 hours depending on complexity.",
        timeCommitment: "Day-care or 1 night",
      },
      {
        title: "Recovery",
        description:
          "Walking the same day, with shoulder-tip discomfort from the gas used being common and short-lived.",
        timeCommitment: "1 review at 1 to 2 weeks",
      },
    ],
    overall: [
      "Return to desk work: usually within 1 week",
      "Full recovery including exercise: about 2 to 4 weeks",
    ],
  },
  {
    slug: "laparoscopic-myomectomy",
    name: "Laparoscopic Myomectomy",
    subtitle:
      "Removal of fibroids while preserving the uterus, performed through keyhole incisions. The goal is to treat the fibroid and protect your ability to carry a pregnancy.",
    whatIsTitle: "What is laparoscopic myomectomy?",
    whatIs: [
      "Myomectomy is the surgical removal of fibroids with the uterus left intact, in contrast to hysterectomy. Performed laparoscopically, it uses small incisions and a magnified view, and the uterine wall is carefully repaired afterwards.",
      "It is chosen where fibroids are causing heavy bleeding, pain or pressure, or where their position may be affecting fertility or pregnancy. The quality of the uterine repair matters for future pregnancy, which is why the surgeon's experience is central.",
    ],
    rightForYouTitle: "This may be right for you if you have",
    rightForYou: [
      "Fibroids causing heavy bleeding, pain or pressure",
      "Fibroids that distort the uterine cavity",
      "A wish to preserve the uterus for future pregnancy",
      "Difficulty conceiving with fibroids identified as a factor",
      "Recurrent miscarriage associated with fibroids",
      "Anaemia due to fibroid-related bleeding",
    ],
    timelineTitle: "What to expect",
    timelineIntro:
      "Recovery is longer than for a simple laparoscopy because the uterine wall needs time to heal fully before pregnancy is attempted.",
    phases: [
      {
        title: "Planning",
        description:
          "Detailed mapping of the fibroids by ultrasound or MRI, with treatment of any anaemia beforehand.",
        timeCommitment: "1 to 2 visits",
      },
      {
        title: "Surgery",
        description:
          "Fibroids are removed and the uterine wall repaired in layers under general anaesthesia.",
        timeCommitment: "1 to 2 nights",
      },
      {
        title: "Healing",
        description:
          "A review scan confirms the uterine wall has healed before conception or embryo transfer is planned.",
        timeCommitment: "Review at 6 weeks",
      },
    ],
    overall: [
      "Return to normal activity: about 2 to 4 weeks",
      "Conception is generally advised after 3 to 6 months of healing",
    ],
  },
  {
    slug: "ovarian-cyst-removal",
    name: "Ovarian Cyst Removal",
    subtitle:
      "Most ovarian cysts need watching rather than surgery. When removal is needed, the priority is taking the cyst while preserving healthy ovarian tissue.",
    whatIsTitle: "What does ovarian cyst removal involve?",
    whatIs: [
      "Many ovarian cysts are functional, appearing and resolving with the menstrual cycle without treatment. Surgery is considered where a cyst is large, persistent, causing pain, or has features on imaging that need clarifying.",
      "Where removal is needed, laparoscopic cystectomy removes the cyst wall while conserving as much healthy ovarian tissue as possible. This matters directly for fertility, since ovarian reserve depends on the tissue that remains.",
    ],
    rightForYouTitle: "This may be right for you if you have",
    rightForYou: [
      "A cyst that has persisted across several cycles",
      "Pelvic pain, pressure or bloating",
      "A large cyst, or one with concerning features on scan",
      "An endometrioma affecting fertility",
      "A cyst causing difficulty during fertility treatment",
      "Sudden severe pain, which needs urgent assessment",
    ],
    timelineTitle: "What to expect",
    timelineIntro:
      "Assessment first establishes whether surgery is needed at all, since many cysts resolve on their own with a period of observation.",
    phases: [
      {
        title: "Assessment",
        description:
          "Ultrasound, tumour marker blood tests where indicated, and often a repeat scan after one cycle to see whether the cyst resolves.",
        timeCommitment: "1 to 2 visits",
      },
      {
        title: "Surgery if needed",
        description:
          "Laparoscopic removal of the cyst wall with careful preservation of healthy ovarian tissue.",
        timeCommitment: "Day-care or 1 night",
      },
      {
        title: "Follow-up",
        description:
          "Review of the histology result and a scan to confirm ovarian recovery.",
        timeCommitment: "1 review visit",
      },
    ],
    overall: [
      "Return to normal activity: usually 1 to 2 weeks",
      "Ovarian reserve is generally reassessed after endometrioma surgery",
    ],
  },
  {
    slug: "diagnostic-laparoscopy",
    name: "Diagnostic Laparoscopy",
    subtitle:
      "When scans and blood tests cannot explain infertility or pelvic pain, laparoscopy allows the pelvis to be seen directly. It often finds what imaging cannot.",
    whatIsTitle: "What is diagnostic laparoscopy?",
    whatIs: [
      "Diagnostic laparoscopy uses a camera passed through a small incision near the navel to view the uterus, tubes, ovaries and pelvic lining directly. It remains the definitive method of diagnosing endometriosis and pelvic adhesions, both of which are frequently invisible on ultrasound.",
      "It is often combined with a dye test to check whether the tubes are open, and treatment can usually be carried out in the same sitting, so a diagnostic procedure frequently becomes a therapeutic one.",
    ],
    rightForYouTitle: "This may be right for you if you have",
    rightForYou: [
      "Unexplained infertility after normal blood tests and scans",
      "Chronic pelvic pain without a clear cause",
      "Suspected endometriosis or pelvic adhesions",
      "An abnormal or inconclusive tubal patency test",
      "A history of pelvic infection or previous abdominal surgery",
      "Failed fertility treatment with no identified reason",
    ],
    timelineTitle: "What to expect",
    timelineIntro:
      "This is usually a day-care procedure, and because treatment can often be performed at the same time, one admission may cover both.",
    phases: [
      {
        title: "Preparation",
        description:
          "Consultation, blood tests and anaesthetic assessment, with the procedure timed to your cycle.",
        timeCommitment: "1 visit",
      },
      {
        title: "Procedure",
        description:
          "Direct inspection of the pelvis under general anaesthesia, with a dye test to assess the tubes and treatment of any findings.",
        timeCommitment: "Day-care admission",
      },
      {
        title: "Findings discussion",
        description:
          "A review appointment to go through what was seen, including images, and to agree the next step in your fertility plan.",
        timeCommitment: "1 review visit",
      },
    ],
    overall: [
      "Procedure time: usually 30 to 60 minutes",
      "Return to normal activity: about 3 to 7 days",
    ],
  },
  {
    slug: "adhesiolysis",
    name: "Adhesiolysis",
    subtitle:
      "Scar tissue from past surgery, infection or endometriosis can bind pelvic organs together. Releasing it can restore normal anatomy and relieve long-standing pain.",
    whatIsTitle: "What is adhesiolysis?",
    whatIs: [
      "Adhesions are bands of scar tissue that form after surgery, infection or inflammation, sticking organs to one another. In the pelvis they can distort the position of the ovaries and tubes, interfering with egg pickup, and cause persistent pain.",
      "Adhesiolysis is the careful surgical division of this scar tissue, usually laparoscopically, to restore normal anatomy. Technique matters, since surgery itself can create new adhesions, so the aim is precise release with minimal further trauma.",
    ],
    rightForYouTitle: "This may be right for you if you have",
    rightForYou: [
      "Previous pelvic or abdominal surgery, including caesarean section",
      "A history of pelvic infection or tuberculosis",
      "Known endometriosis with scarring",
      "Chronic pelvic pain, or pain during intercourse",
      "Infertility with tubes displaced or bound down",
      "Adhesions seen at a previous laparoscopy",
    ],
    timelineTitle: "What to expect",
    timelineIntro:
      "The extent of surgery depends on how dense the adhesions are, which is often only fully apparent once the procedure begins.",
    phases: [
      {
        title: "Assessment",
        description:
          "Review of previous surgical and infection history with imaging, to anticipate the likely extent of adhesions.",
        timeCommitment: "1 to 2 visits",
      },
      {
        title: "Surgery",
        description:
          "Laparoscopic division of adhesions to free the organs, with measures taken to reduce the chance of them reforming.",
        timeCommitment: "Day-care or 1 to 2 nights",
      },
      {
        title: "Recovery",
        description:
          "Early mobilisation is encouraged, and fertility treatment is generally planned soon afterwards while anatomy is at its best.",
        timeCommitment: "Review at 2 weeks",
      },
    ],
    overall: [
      "Return to normal activity: usually 1 to 2 weeks",
      "Conception is often best attempted in the months following surgery",
    ],
  },

  // ── High risk maternity care ──
  {
    slug: "high-risk-pregnancy",
    name: "High-Risk Pregnancy Care",
    subtitle:
      "A pregnancy labelled high risk is not a pregnancy expected to go wrong. It is one that benefits from closer watching, and closer watching is what changes outcomes.",
    whatIsTitle: "What is high-risk pregnancy care?",
    whatIs: [
      "A pregnancy is considered higher risk where factors exist that increase the chance of complications for mother or baby. These include maternal age, diabetes, high blood pressure, thyroid disease, twins, previous pregnancy loss or preterm birth, and pregnancies conceived after fertility treatment.",
      "Care means more frequent review, targeted scans and coordinated input from other specialists where needed. The great majority of higher-risk pregnancies proceed to a healthy delivery when monitored appropriately.",
    ],
    rightForYouTitle: "This may apply to you if you have",
    rightForYou: [
      "Pregnancy over the age of 35, or under 18",
      "Diabetes, high blood pressure or thyroid disease",
      "A twin or higher-order pregnancy",
      "Previous miscarriage, preterm birth or stillbirth",
      "A pregnancy conceived through IVF or other fertility treatment",
      "A previous caesarean section or uterine surgery",
    ],
    timelineTitle: "How care is structured",
    timelineIntro:
      "Visits are more frequent than in routine care and increase in frequency as pregnancy advances, with the schedule set to your specific risk factors.",
    phases: [
      {
        title: "First trimester",
        description:
          "Early confirmation scan, baseline blood tests, review of medication, and a plan built around your specific risks.",
        timeCommitment: "Every 2 to 4 weeks",
      },
      {
        title: "Second trimester",
        description:
          "Anomaly scan, growth monitoring, screening for gestational diabetes and pre-eclampsia, and cervical assessment where indicated.",
        timeCommitment: "Every 2 to 3 weeks",
      },
      {
        title: "Third trimester",
        description:
          "Growth and Doppler scans, fetal wellbeing monitoring, and planning of the timing and mode of delivery.",
        timeCommitment: "Weekly to fortnightly",
      },
    ],
    overall: [
      "Typical schedule: 12 to 18 visits across the pregnancy",
      "A delivery plan is normally agreed by 34 to 36 weeks",
    ],
  },
  {
    slug: "antenatal-monitoring",
    name: "Antenatal Fetal Monitoring",
    subtitle:
      "Scanning and wellbeing checks that follow your baby's growth through pregnancy, so that anything needing attention is picked up while there is time to act.",
    whatIsTitle: "What is antenatal fetal monitoring?",
    whatIs: [
      "Antenatal monitoring is the series of scans and assessments used through pregnancy to check your baby's growth, movement, heart rate, position and the amount of amniotic fluid, along with blood flow in the umbilical cord and placenta.",
      "The purpose is early detection. Identifying restricted growth or reduced placental flow in good time allows care to be adjusted, and in some cases delivery to be planned, well before a problem becomes urgent.",
    ],
    rightForYouTitle: "This may be recommended if you have",
    rightForYou: [
      "Any higher-risk pregnancy factor",
      "Reduced or changed fetal movements",
      "Concerns about your baby's growth on a previous scan",
      "High blood pressure or diabetes in pregnancy",
      "A twin or higher-order pregnancy",
      "A pregnancy continuing beyond the due date",
    ],
    timelineTitle: "The monitoring schedule",
    timelineIntro:
      "Scans are spread across pregnancy, with the standard schedule intensified where a specific concern arises.",
    phases: [
      {
        title: "Early pregnancy",
        description:
          "Dating and viability scan, followed by the nuchal translucency scan and first-trimester screening.",
        timeCommitment: "6 to 13 weeks",
      },
      {
        title: "Mid pregnancy",
        description:
          "The detailed anomaly scan at around 18 to 22 weeks, assessing your baby's structural development in full.",
        timeCommitment: "18 to 22 weeks",
      },
      {
        title: "Late pregnancy",
        description:
          "Growth scans, Doppler studies of cord and placental flow, and cardiotocography to assess fetal heart rate patterns.",
        timeCommitment: "28 weeks onward",
      },
    ],
    overall: [
      "Routine pregnancy: typically 4 to 6 scans",
      "Higher-risk pregnancy: often fortnightly or weekly in the third trimester",
    ],
  },
  {
    slug: "labour-analgesia",
    name: "Labour Analgesia",
    subtitle:
      "Effective pain relief in labour, including epidural. Choosing comfort does not mean giving up a normal delivery, and it does not mean giving up control.",
    whatIsTitle: "What is labour analgesia?",
    whatIs: [
      "Labour analgesia covers the methods available to manage pain during childbirth, ranging from breathing and positioning support to injectable pain relief and epidural analgesia, in which anaesthetic is delivered into the epidural space to numb the lower body while you remain awake and aware.",
      "A well-managed epidural does not prevent a normal vaginal delivery and does not remove your ability to push. Our anaesthetists discuss the options with you in advance, so the choice is an informed one made calmly rather than in the middle of labour.",
    ],
    rightForYouTitle: "This may be right for you if you",
    rightForYou: [
      "Would like effective pain relief during labour",
      "Have a low pain threshold or significant anxiety about labour",
      "Are having your first baby, where labour is often longer",
      "Have high blood pressure, where pain control is beneficial",
      "Have a prolonged or induced labour",
      "Would like to discuss the options before your due date",
    ],
    timelineTitle: "How it works",
    timelineIntro:
      "The discussion happens before labour begins, so that on the day the decision is simply whether and when, not what the options are.",
    phases: [
      {
        title: "Antenatal discussion",
        description:
          "A conversation with your obstetrician and anaesthetist about the available methods, their effects and your preferences.",
        timeCommitment: "1 visit in third trimester",
      },
      {
        title: "During labour",
        description:
          "Pain relief is provided when you ask for it, with an epidural typically taking effect within 15 to 20 minutes of placement.",
        timeCommitment: "As needed in labour",
      },
      {
        title: "After delivery",
        description:
          "The epidural is stopped, sensation and movement return over a few hours, and you are supported to mobilise.",
        timeCommitment: "Same day",
      },
    ],
    overall: [
      "Epidural onset: usually 15 to 20 minutes",
      "Sensation typically returns fully within 2 to 4 hours of stopping",
    ],
  },
  {
    slug: "normal-delivery",
    name: "Normal Delivery",
    subtitle:
      "Where it is safe for you and your baby, a vaginal birth remains the preferred route. Our approach is to support it actively rather than intervene by default.",
    whatIsTitle: "What is normal delivery?",
    whatIs: [
      "Normal or vaginal delivery is birth through the birth canal, with medical support available but intervention kept to what is genuinely needed. Recovery is generally quicker than after caesarean section, hospital stay shorter, and future pregnancies are usually more straightforward.",
      "Supporting a normal delivery means good antenatal preparation, freedom of movement and position in labour, effective pain relief on request, and continuous assessment so that if circumstances change, the decision to change course is made promptly and safely.",
    ],
    rightForYouTitle: "This may be right for you if you have",
    rightForYou: [
      "A single baby in the head-down position",
      "No placental or cord complication",
      "A pregnancy that has progressed without major complication",
      "A previous normal delivery",
      "A previous caesarean, where trial of labour is assessed as suitable",
      "A preference for vaginal birth where it is safe",
    ],
    timelineTitle: "What to expect",
    timelineIntro:
      "Labour length varies widely, particularly with a first baby, and each stage is monitored so support can be adjusted as it progresses.",
    phases: [
      {
        title: "Early labour",
        description:
          "Contractions establish and the cervix begins to dilate. This is often the longest stage and much of it can be spent moving about.",
        timeCommitment: "Variable, often several hours",
      },
      {
        title: "Active labour and birth",
        description:
          "Contractions strengthen and dilation completes, followed by the pushing stage and the birth of your baby, with continuous monitoring throughout.",
        timeCommitment: "Monitored continuously",
      },
      {
        title: "After birth",
        description:
          "Delivery of the placenta, immediate skin-to-skin contact, support with first feeding, and postnatal observation.",
        timeCommitment: "First 24 to 48 hours",
      },
    ],
    overall: [
      "Hospital stay: usually 24 to 48 hours",
      "Initial recovery: most women feel substantially better within 1 to 2 weeks",
    ],
  },
  {
    slug: "cesarean-delivery",
    name: "Cesarean Delivery (C-Section)",
    subtitle:
      "A caesarean is the safest route for some mothers and babies, whether planned in advance or decided during labour. Either way it should be a considered decision, not a default one.",
    whatIsTitle: "What is a caesarean delivery?",
    whatIs: [
      "A caesarean section delivers your baby through an incision in the abdomen and uterus. It may be planned before labour where a specific indication exists, or performed during labour if circumstances change and it becomes the safer option for you or your baby.",
      "It is a common and well-established operation, usually performed under spinal anaesthesia so you are awake for your baby's birth. Recovery takes longer than after vaginal delivery, and the decision to operate always weighs that against the reason for it.",
    ],
    rightForYouTitle: "This may be recommended if you have",
    rightForYou: [
      "A baby in breech or another non-head-down position",
      "Placenta praevia or another placental complication",
      "A twin or higher-order pregnancy, depending on presentation",
      "A previous caesarean where repeat delivery is advised",
      "Labour that is not progressing, or fetal distress",
      "A medical condition making labour unsafe",
    ],
    timelineTitle: "What to expect",
    timelineIntro:
      "For a planned caesarean the timing is agreed in advance, usually at or after 39 weeks unless there is a reason to deliver earlier.",
    phases: [
      {
        title: "Preparation",
        description:
          "Pre-operative assessment, blood tests and anaesthetic review, with the date and time agreed with you.",
        timeCommitment: "1 to 2 visits",
      },
      {
        title: "The procedure",
        description:
          "Usually under spinal anaesthesia and taking around 45 minutes to an hour, with your baby generally born in the first 10 to 15 minutes.",
        timeCommitment: "Around 1 hour",
      },
      {
        title: "Recovery",
        description:
          "Support with mobilising and feeding, wound care guidance, and pain relief, with a wound review before discharge.",
        timeCommitment: "3 to 4 nights",
      },
    ],
    overall: [
      "Hospital stay: usually 3 to 4 days",
      "Full recovery: about 6 weeks, with lifting and driving restricted initially",
    ],
  },
];

export const serviceBySlug = new Map(services.map((s) => [s.slug, s]));
