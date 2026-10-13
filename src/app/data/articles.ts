// Resource articles. Each one renders at /resources/<slug> via ArticlePage.
//
// Body is Markdown, limited to: ## and ### headings, - bullets, **bold**,
// *italic*, and plain paragraphs. ArticlePage renders that subset directly, so
// no markdown dependency is needed.
//
// readTime is measured from the body, not typed by hand - see wordCount below.

export type ArticleCategory =
  | "fertility-basics"
  | "female-fertility"
  | "male-fertility"
  | "treatments"
  | "lifestyle";

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  tag: string;
  tagColor: string;
  excerpt: string;
  featured?: boolean;
  /** shown under the title; written by the clinic, reviewed by a doctor */
  disclaimer?: string;
  body: string;
}

export const articles: Article[] = [
  {
    slug: "understanding-ivf-step-by-step-guide",
    title: "Understanding IVF: A Complete Step-by-Step Guide",
    category: "fertility-basics",
    tag: "Fertility Basics",
    tagColor: "#a74b99",
    featured: true,
    excerpt:
      "What IVF actually involves, stage by stage — from your first consultation through egg retrieval, fertilisation and the pregnancy test, in plain language.",
    disclaimer:
      "This article is intended for general educational purposes only. It does not replace professional medical advice, diagnosis, or treatment. Always follow the recommendations of your fertility specialist.",
    body: `## Introduction

For couples who are finding it difficult to conceive naturally, In Vitro Fertilisation (IVF) can offer another path towards parenthood. However, starting fertility treatment can bring many questions. What exactly is IVF? How does the process work? Is it painful? And what can you expect at each stage?

Understanding the IVF process can help you feel more confident and prepared when discussing treatment with your fertility specialist.

In this guide, we explain IVF step by step, using simple language to help you understand the procedure, its benefits, possible risks, and what to expect throughout your fertility journey.

## What Is IVF?

IVF stands for In Vitro Fertilisation. It is a fertility treatment in which an egg and sperm are brought together in a laboratory to achieve fertilisation.

Once an embryo develops, it may be transferred into the woman's uterus, where it can implant and develop into a pregnancy.

In natural conception, fertilisation usually takes place inside the fallopian tube. In IVF, fertilisation takes place outside the body under carefully controlled laboratory conditions.

IVF may be recommended for people experiencing certain fertility problems, including:

- Blocked or damaged fallopian tubes.
- Certain male fertility problems, such as low sperm count or poor sperm movement.
- Ovulation difficulties in selected cases.
- Endometriosis.
- Unexplained infertility.
- Situations where other fertility treatments have not been successful.

IVF is not necessary for everyone who experiences difficulty conceiving. Your fertility specialist will evaluate your medical history and test results before recommending the most appropriate treatment.

## How Does IVF Work? A Step-by-Step Guide

The IVF process involves several stages. The exact treatment plan and duration can vary depending on your health, fertility diagnosis, and response to medication.

### Step 1: Fertility Assessment and Consultation

The first step is a consultation with a fertility specialist.

During this appointment, your doctor will discuss your medical history, menstrual cycle, previous pregnancies, and how long you have been trying to conceive. Your partner may also undergo an evaluation.

Depending on your circumstances, investigations may include:

- Blood tests to assess relevant hormone levels.
- Ultrasound scans to examine the uterus and ovaries.
- Tests to assess ovarian reserve.
- Semen analysis to evaluate sperm health.
- Additional investigations when clinically necessary.

These assessments help your doctor understand possible causes of infertility and determine whether IVF is suitable for you.

### Step 2: Ovarian Stimulation

Normally, the ovaries release one egg during an ovulatory cycle. During IVF, fertility medications are used to encourage the development of multiple follicles, which may contain eggs.

This increases the opportunity to collect several eggs during one treatment cycle.

Your doctor will prescribe medication based on your individual needs. During this stage, ultrasound scans and sometimes blood tests are used to monitor how your ovaries respond.

The duration of stimulation varies, but it commonly lasts around 8–14 days.

### Step 3: Monitoring Egg Development

Throughout ovarian stimulation, your fertility team monitors the growth of the follicles in your ovaries.

Follicles are small, fluid-filled structures in which eggs develop. Ultrasound scans help your doctor assess their size and development.

Based on these findings, your medication may be adjusted if necessary.

When the follicles are ready, you will receive a carefully timed medication to support the final maturation of the eggs before collection.

### Step 4: Egg Retrieval

Egg retrieval is the procedure used to collect eggs from the ovaries.

It is generally performed using a thin needle guided by ultrasound. The procedure usually takes a short time and is commonly performed under sedation or anaesthesia to minimise discomfort.

After retrieval, the collected eggs are taken to the laboratory for assessment.

Not every collected egg will necessarily be mature or suitable for fertilisation. Your fertility team will explain the results and the next steps.

You may experience mild cramping, bloating, or spotting afterward. Your clinic will provide recovery instructions and explain which symptoms require medical attention.

### Step 5: Sperm Collection and Fertilisation

On the day of egg retrieval, a sperm sample is usually collected and prepared in the laboratory. Previously frozen or donor sperm may be used in appropriate circumstances.

There are two common methods of fertilisation:

**Conventional IVF:** Prepared sperm is placed with the collected eggs in a laboratory dish, allowing fertilisation to occur.

**Intracytoplasmic Sperm Injection (ICSI):** A single sperm is injected directly into an egg. This technique may be recommended in selected cases, particularly when certain sperm-related problems are present or there has been a previous fertilisation issue.

Your fertility specialist and embryology team will determine which method is appropriate for your situation.

### Step 6: Embryo Development

After fertilisation, the laboratory team monitors the developing embryos.

The fertilised eggs are observed over the following days to assess whether they develop appropriately. Some embryos may stop developing, while others may progress to a stage suitable for transfer or freezing.

Embryo selection depends on several factors, including development and appearance. These assessments help the embryology team identify suitable embryos, but they cannot guarantee that an embryo will implant or result in a pregnancy.

Depending on your treatment plan, embryo transfer may take place during the same cycle or in a later cycle using a frozen embryo.

### Step 7: Embryo Transfer

Embryo transfer is the stage in which an embryo is placed inside the uterus.

The procedure usually involves passing a thin, flexible catheter through the cervix into the uterus. The embryo is then released into the uterine cavity under clinical guidance.

Embryo transfer is generally a simple procedure and does not usually require general anaesthesia.

Your doctor will explain whether a fresh or frozen embryo transfer is more appropriate for you. The decision depends on factors such as your response to medication, uterine preparation, and the overall treatment plan.

Your clinic will also advise you about medications to continue after transfer and any specific instructions to follow.

### Step 8: Pregnancy Test

After embryo transfer, you will need to wait before taking a pregnancy test.

Your clinic will tell you the appropriate date, commonly around 9–14 days after transfer, depending on the protocol used.

A blood test measuring beta-human chorionic gonadotropin (beta-hCG) can help determine whether pregnancy has occurred.

Testing too early may produce a misleading result. Continue following your clinic's medication instructions unless your doctor advises otherwise.

If the test is positive, your fertility team may arrange follow-up blood tests or an ultrasound to assess the pregnancy.

If the result is negative, your doctor can discuss the possible reasons and whether any further evaluation or treatment may be appropriate.

## How Long Does the IVF Process Take?

An IVF treatment cycle often takes several weeks from the start of ovarian stimulation to pregnancy testing.

However, the complete journey may take longer if you need preliminary investigations, treatment for an underlying condition, a frozen embryo transfer, or additional cycles.

Your timeline will depend on your medical circumstances and how your body responds to treatment.

Your fertility clinic can provide a personalised schedule so you know what to expect at each stage.

## Is IVF Painful?

The experience varies from person to person.

Hormone injections may cause mild discomfort, while ovarian stimulation can lead to temporary bloating or pelvic discomfort.

Egg retrieval is usually performed under sedation or anaesthesia. Some cramping or discomfort may occur afterward.

Embryo transfer generally causes little discomfort, although some people experience mild cramping.

Your medical team will explain how discomfort is managed and what symptoms should prompt you to contact the clinic.

## What Are the Risks of IVF?

IVF is widely used, but like any medical treatment, it has potential risks.

These may include:

- **Medication side effects:** Hormonal medications can cause bloating, headaches, or other temporary symptoms.
- **Ovarian hyperstimulation syndrome (OHSS):** In some cases, the ovaries respond excessively to stimulation, leading to symptoms that may range from mild to serious.
- **Complications during egg retrieval:** These are uncommon but may include bleeding, infection, or injury to nearby structures.
- **Ectopic pregnancy:** A pregnancy can occasionally develop outside the uterus, including after IVF.
- **Multiple pregnancy:** The transfer of more than one embryo increases the chance of twins or higher-order pregnancies, which carry additional risks.
- **Emotional and financial stress:** Treatment can involve uncertainty, repeated appointments, and significant expenses.

Your doctor will explain the risks relevant to your health and discuss ways to reduce them.

Contact your fertility clinic promptly if you experience severe abdominal pain, rapidly increasing swelling, persistent vomiting, breathing difficulties, faintness, or reduced urination after ovarian stimulation or egg retrieval. Severe symptoms require urgent medical assessment.

## What Factors Affect IVF Success?

IVF success differs between individuals. Several factors can influence the likelihood of achieving a pregnancy and having a live birth.

**Age:** Age is an important factor, particularly when using a person's own eggs, because egg quality and the likelihood of chromosomal abnormalities change over time.

**Egg and sperm health:** The characteristics of the eggs and sperm can affect fertilisation and embryo development.

**Cause of infertility:** Conditions affecting the fallopian tubes, uterus, ovulation, or sperm may influence treatment planning and outcomes.

**Embryo development:** The number and developmental characteristics of suitable embryos can affect the options available for transfer.

**Medical history:** Previous fertility treatments and certain underlying health conditions may also influence the treatment plan.

No fertility clinic can guarantee a successful outcome. Ask your specialist to explain the success rates relevant to your age group, diagnosis, and proposed treatment, including whether the figures refer to pregnancy or live birth.

## How Can You Prepare for IVF?

Preparing for treatment can help you feel more informed and organised.

- Attend all recommended consultations and investigations.
- Tell your doctor about existing medical conditions, medications, and supplements.
- Follow your prescribed medication schedule carefully.
- Discuss folic acid and other preconception recommendations with your healthcare professional.
- Avoid smoking and recreational drugs, and avoid alcohol when trying to conceive.
- Maintain a balanced diet and regular, appropriate physical activity.
- Arrange emotional and practical support if you need it.
- Discuss the expected costs, possible additional procedures, and follow-up plan before beginning treatment.

Avoid starting unverified fertility supplements or changing prescribed medication without medical advice.

## Frequently Asked Questions About IVF

### Can IVF guarantee pregnancy?

No. IVF can improve the opportunity to conceive for people experiencing certain fertility problems, but it does not guarantee pregnancy or a live birth. Outcomes depend on several individual factors.

### Can I get pregnant on my first IVF attempt?

Yes, pregnancy can occur during the first IVF cycle, but it does not happen for everyone. Some people may require additional treatment cycles, while others may need to reconsider their options based on their results.

### Are IVF babies healthy?

Many children conceived through IVF are healthy. As with any pregnancy, outcomes can vary, and certain risks may be influenced by parental age, underlying infertility, multiple pregnancy, and other factors. Your doctor can discuss any concerns relevant to your circumstances.

### Can frozen embryos be used later?

Yes. Suitable embryos can be frozen and stored for future use. A frozen embryo transfer may allow you to attempt pregnancy in a later cycle without repeating the entire egg retrieval process.

### Should I rest completely after embryo transfer?

Complete bed rest is generally not recommended as a way to improve IVF success. Your clinic will advise you about normal activities, exercise, and any precautions specific to your treatment.

### What happens if IVF is unsuccessful?

An unsuccessful cycle does not necessarily mean that pregnancy will never occur. Your specialist may review the treatment response, fertilisation results, embryo development, and other relevant factors before discussing the next steps.

Depending on your circumstances, options may include another IVF cycle, a modified treatment approach, further investigations, or alternative family-building choices.

## Conclusion

IVF can be an important option for individuals and couples experiencing fertility difficulties. From the first consultation to egg retrieval, fertilisation, embryo transfer, and pregnancy testing, each stage plays a role in the overall treatment process.

Understanding what to expect can help you ask informed questions, prepare for appointments, and make decisions that suit your needs.

Every fertility journey is different. The most appropriate treatment depends on your medical history, investigations, and personal circumstances.

If you have been trying to conceive without success, consider consulting a fertility specialist to understand the possible causes and explore the treatment options available to you.`,
  },
  {
    slug: "fertility-after-35",
    title: "Fertility After 35: Everything You Need to Know",
    category: "female-fertility",
    tag: "Female Fertility",
    tagColor: "#0288c2",
    excerpt:
      "Turning 35 does not mean you cannot conceive. What actually changes with age, when to seek an assessment, and which options stay open to you.",
    disclaimer:
      "This article is intended for general educational purposes only and does not replace professional medical advice, diagnosis, or treatment.",
    body: `## Introduction

Planning a pregnancy after the age of 35 is becoming increasingly common. Many women choose to focus on their careers, relationships, personal goals, or financial stability before starting a family. While many women conceive naturally and have healthy pregnancies after 35, fertility can change with age.

Understanding these changes can help you make informed decisions about pregnancy, recognise when to seek medical advice, and explore the options available if you experience difficulty conceiving.

The good news is that turning 35 does not mean you cannot become pregnant. Every woman's fertility journey is different, and an individual assessment can help you understand your reproductive health and plan your next steps.

## How Does Age Affect Female Fertility?

Female fertility is influenced by several factors, including the number and quality of eggs remaining in the ovaries.

Women are born with a finite number of eggs. Over time, this number decreases, and the likelihood of chromosomal abnormalities in eggs increases. These changes can make conception more difficult and increase the risk of miscarriage as age advances.

Fertility generally declines gradually, with a more noticeable decrease during the mid-to-late thirties and a further decline in the forties.

Age can influence several aspects of reproductive health:

- **Egg quantity:** The number of eggs remaining in the ovaries decreases over time.
- **Egg quality:** The proportion of eggs with chromosomal abnormalities increases with age.
- **Time to conception:** It may take longer to become pregnant.
- **Miscarriage risk:** The likelihood of pregnancy loss increases with age.
- **Fertility treatment outcomes:** Age, particularly the age of the person providing the eggs, can influence the chances of success with treatments such as IVF.

These are general patterns, not predictions of an individual's outcome. Many women over 35 conceive naturally, while some younger women experience fertility difficulties.

## Can You Get Pregnant Naturally After 35?

Yes. Natural conception remains possible after 35, and many women in their late thirties and early forties have healthy pregnancies.

However, because fertility declines with age, understanding your menstrual cycle and seeking medical advice at the appropriate time can be particularly important.

Ovulation, the release of an egg from an ovary, plays a key role in conception. Having intercourse during the fertile window can improve the opportunity for sperm and egg to meet.

If your periods are regular, ovulation may be easier to estimate, although regular periods do not guarantee that every cycle is ovulatory. If your periods are irregular, identifying your fertile window may be more difficult.

If you are trying to conceive, consider discussing your reproductive health with a specialist rather than relying solely on cycle tracking.

## When Should You Seek a Fertility Assessment?

Knowing when to seek help can prevent unnecessary delays.

General recommendations are:

- **Under 35:** Consider a fertility evaluation after 12 months of regular, unprotected intercourse without conception.
- **Age 35 to 40:** Consider an evaluation after six months of trying without success.
- **Over 40:** Seek medical advice promptly when planning pregnancy or experiencing difficulty conceiving.

You may benefit from an earlier assessment if you have irregular or absent periods, endometriosis, a history of pelvic infection or reproductive surgery, repeated pregnancy losses, or a known fertility concern.

You do not need to wait six months if your doctor has already identified a reason to investigate your fertility.

## What Fertility Tests May Be Recommended?

A fertility assessment helps your doctor understand possible causes of difficulty conceiving and determine whether treatment may be useful.

Depending on your medical history, investigations may include the following.

### Ovarian Reserve Testing

Tests such as anti-Mullerian hormone (AMH) and an ultrasound assessment of antral follicle count can help estimate ovarian reserve and predict how the ovaries may respond to fertility medications.

However, these tests cannot reliably predict whether you will conceive naturally, and a normal result does not guarantee pregnancy.

### Hormone Testing

Blood tests may be recommended to assess specific hormones involved in ovulation and reproductive health. Thyroid function and other hormonal factors may also be evaluated when appropriate.

### Ultrasound Examination

A pelvic ultrasound can help assess the uterus and ovaries and identify certain conditions that may affect fertility.

### Fallopian Tube Assessment

Your doctor may recommend testing to determine whether your fallopian tubes are open. This can be important because fertilisation during natural conception usually takes place within a fallopian tube.

### Partner Fertility Assessment

Fertility difficulties can involve either partner or both. Semen analysis may be recommended to assess sperm concentration, movement, and other characteristics.

Not every patient needs every test. Your specialist will recommend investigations based on your individual circumstances.

## What Are Your Fertility Treatment Options After 35?

The appropriate treatment depends on your age, fertility assessment, underlying diagnosis, preferences, and reproductive goals.

### Lifestyle and Preconception Care

Balanced nutrition, regular physical activity, avoiding smoking, and managing existing health conditions can support general health before pregnancy. Your healthcare professional may also recommend folic acid supplementation.

These measures are beneficial, but they cannot reverse age-related changes in egg quality.

### Ovulation Treatment

If irregular or absent ovulation is contributing to infertility, medication may be prescribed to help an egg develop and be released.

The choice of medication depends on the underlying cause and requires appropriate medical supervision.

### Intrauterine Insemination (IUI)

IUI involves placing prepared sperm directly into the uterus around the time of ovulation. It may be suitable in selected circumstances, depending on factors such as fallopian tube health and sperm characteristics.

### In Vitro Fertilisation (IVF)

IVF involves collecting eggs, fertilising them in a laboratory, and transferring an embryo into the uterus.

For some women, IVF may be recommended because of age, the cause of infertility, previous treatment outcomes, or other clinical factors. However, IVF does not guarantee pregnancy, and success rates generally vary with age and the use of one's own eggs versus donor eggs.

Your fertility specialist can explain which approach is most appropriate and whether delaying treatment could affect your options.

## How Can You Support Your Fertility After 35?

Although age-related fertility changes cannot be prevented completely, you can take practical steps to support your health while planning pregnancy.

- Eat a balanced diet that includes vegetables, fruits, whole grains, and suitable protein sources.
- Discuss folic acid supplementation with your healthcare professional before conception.
- Avoid smoking and recreational drugs.
- Avoid alcohol when trying to conceive and during pregnancy.
- Limit excessive caffeine intake and discuss your consumption with your doctor.
- Maintain regular physical activity and adequate sleep.
- Review your medications and existing medical conditions before pregnancy.
- Seek medical advice at the appropriate time rather than delaying an evaluation.

Be cautious of supplements or treatments that claim to reverse ovarian ageing, restore egg quality, or guarantee pregnancy. Such claims should not replace evidence-based medical advice.

## Frequently Asked Questions

### Is 35 too late to have a baby?

No. Many women conceive and have healthy pregnancies after 35. However, fertility declines with age, so understanding your reproductive health and seeking timely advice can be helpful.

### Does a low AMH level mean I cannot get pregnant?

Not necessarily. AMH helps estimate ovarian reserve and may help predict the response to fertility medication. It does not independently determine whether natural conception is possible.

### Should I consider IVF immediately after 35?

Not everyone needs IVF. The appropriate treatment depends on your fertility evaluation, age, medical history, and other factors. Your specialist can explain whether natural conception, ovulation treatment, IUI, or IVF may be appropriate.

### Can lifestyle changes improve egg quality?

Healthy habits support overall reproductive health, but there is no proven lifestyle change or supplement that can reliably reverse age-related egg-quality changes.

### When should I consult a fertility specialist?

If you are 35 or older and have been trying to conceive for six months without success, consider a fertility assessment. If you are over 40 or have irregular periods or known fertility concerns, seek advice sooner.

## Conclusion

Fertility after 35 is a personal journey, and age is only one part of the overall picture. While the chances of conception generally decrease with age, pregnancy remains possible for many women.

Understanding your menstrual cycle, addressing underlying health conditions, and seeking timely medical advice can help you make informed decisions about your reproductive future.

If you are planning a pregnancy or have been experiencing difficulty conceiving, a consultation with a fertility specialist can help you understand your options and determine the next appropriate step.`,
  },
  {
    slug: "male-fertility-myths-debunked",
    title: "Male Fertility: Common Myths Debunked",
    category: "male-fertility",
    tag: "Male Fertility",
    tagColor: "#650a76",
    excerpt:
      "Sexual performance is not fertility, one abnormal test is not a verdict, and supplements are not a cure. Seven myths about male fertility, corrected.",
    disclaimer:
      "This article is intended for general educational purposes only and does not replace professional medical advice, diagnosis, or treatment.",
    body: `## Introduction

When a couple experiences difficulty conceiving, the conversation often focuses on female fertility. However, male reproductive health is equally important when trying to achieve a pregnancy.

Male-factor fertility problems may contribute to infertility on their own or alongside female-factor concerns. Yet, misconceptions about sperm health, sexual performance, age, and fertility testing can prevent people from seeking the right support.

Understanding the facts can help couples approach fertility concerns without blame, embarrassment, or unnecessary anxiety.

In this article, we explore common myths about male fertility and explain what you should know about sperm health and reproductive wellbeing.

## Myth 1: Infertility Is Always a Woman's Problem

**Fact: Male fertility can be an important part of the picture.**

Infertility can be related to the male partner, the female partner, both partners, or causes that remain unexplained after investigation.

Male-factor infertility may involve problems with sperm production, sperm movement, sperm shape, hormone function, or the reproductive tract.

For this reason, fertility evaluations often involve both partners. Identifying the cause can help the doctor recommend appropriate investigations and treatment.

## Myth 2: Normal Sexual Performance Means Normal Fertility

**Fact: Sexual function and fertility are not the same.**

A man may have normal libido, erections, and ejaculation while experiencing a low sperm count or reduced sperm motility.

Similarly, a man may have normal sperm production but experience sexual difficulties that make conception more challenging.

Sexual performance alone cannot determine fertility. A semen analysis and, when necessary, further medical investigations provide more useful information.

## Myth 3: A High Sperm Count Guarantees Pregnancy

**Fact: Sperm count is only one part of male fertility.**

A semen analysis assesses several characteristics that may influence reproductive potential, including:

- **Sperm concentration:** The number of sperm per millilitre of semen.
- **Total sperm number:** The total number of sperm in the sample.
- **Motility:** How sperm move.
- **Morphology:** The proportion of sperm with typical shape.
- **Semen volume:** The amount of semen produced.

These factors need to be considered together. Even when semen parameters fall within laboratory reference ranges, pregnancy is not guaranteed because conception depends on several factors involving both partners.

## Myth 4: Lifestyle Has No Effect on Male Fertility

**Fact: Certain lifestyle choices and health conditions can affect reproductive health.**

Smoking, anabolic steroid use, recreational drugs, some medications, and certain medical conditions may affect sperm production or function.

Excessive alcohol consumption and some environmental or occupational exposures may also be relevant.

Supporting your general health can be a useful starting point. Consider eating a balanced diet, exercising regularly, getting adequate sleep, avoiding tobacco and recreational drugs, and maintaining a healthy lifestyle.

However, lifestyle changes cannot correct every cause of infertility. If you have concerns about sperm health, seek medical advice rather than relying only on dietary changes or supplements.

## Myth 5: Male Fertility Never Changes With Age

**Fact: Male reproductive ageing can affect fertility, although changes are generally more gradual than in female fertility.**

As men age, some semen parameters may change. Paternal age may also be associated with longer time to conception and certain reproductive risks.

However, age alone does not determine whether a man can father a child. Overall health, sperm characteristics, partner fertility, and other individual factors also matter.

## Myth 6: One Abnormal Semen Analysis Means Permanent Infertility

**Fact: A single abnormal result does not necessarily mean pregnancy is impossible.**

Semen parameters can vary between samples. Recent illness, fever, the time since the previous ejaculation, incomplete sample collection, and other factors may influence the results.

Your doctor may recommend repeating the test to confirm the findings.

If an abnormality persists, further investigations may be suggested to identify a possible underlying cause and determine whether treatment is needed.

## Myth 7: Fertility Supplements Can Fix Every Sperm Problem

**Fact: Supplements are not a guaranteed solution for male infertility.**

Some nutrients are important for general health, but evidence that fertility supplements reliably improve pregnancy or live-birth outcomes is limited and varies by product and individual circumstances.

Taking excessive doses may also cause harm or interact with medication.

Before starting supplements, testosterone products, or other treatments marketed for male fertility, consult a qualified healthcare professional.

It is particularly important to know that testosterone therapy can suppress sperm production and may reduce fertility.

## When Should You Seek a Male Fertility Assessment?

Consider consulting a fertility specialist if:

- You and your partner have been trying to conceive without success.
- You have a history of testicular injury, surgery, or reproductive conditions.
- You have a known hormonal problem.
- You have experienced sexual difficulties that affect conception.
- You have previously received an abnormal semen analysis.
- You use testosterone or anabolic steroids and wish to have children.

A specialist may recommend semen analysis, a medical examination, hormone testing, or other investigations depending on your history.

## Frequently Asked Questions

### Can male infertility be treated?

Some causes are treatable, while others may require assisted reproductive techniques. Treatment depends on the underlying cause and the couple's fertility assessment.

### Does low sperm count mean I cannot have children?

Not necessarily. A low sperm count may reduce the likelihood of conception, but it does not automatically mean pregnancy is impossible. Your doctor can explain what your results mean and discuss appropriate options.

### Can sperm quality improve naturally?

Some sperm parameters may improve when an underlying condition or contributing lifestyle factor is addressed. However, improvement is not guaranteed, and medical evaluation may still be necessary.

### Should both partners undergo fertility testing?

In many cases, yes. Evaluating both partners can help identify relevant factors and avoid unnecessary delays in treatment.

## Conclusion

Male fertility is an important part of reproductive health, yet it is often misunderstood. Separating myths from medical facts can help men seek appropriate care without embarrassment or unnecessary worry.

If you are experiencing difficulty conceiving, a semen analysis and a personalised fertility assessment can help clarify the possible causes and guide your next steps.`,
  },
  {
    slug: "pcos-and-fertility",
    title: "PCOS and Fertility: Your Questions Answered",
    category: "female-fertility",
    tag: "Female Fertility",
    tagColor: "#0288c2",
    excerpt:
      "How PCOS affects ovulation, whether you can conceive naturally with it, and the treatments available when you are planning a pregnancy.",
    disclaimer:
      "This article is intended for general educational purposes only and does not replace professional medical advice, diagnosis, or treatment.",
    body: `## Introduction

Polycystic Ovary Syndrome (PCOS) is a common hormonal condition that can affect menstrual cycles, skin, hair growth, and metabolic health. For some women, PCOS can also make it harder to conceive because ovulation may occur irregularly or may not occur at all.

Receiving a PCOS diagnosis does not mean you cannot become pregnant. Many women with PCOS conceive naturally, while others benefit from medical support.

Understanding how PCOS affects reproductive health can help you recognise possible symptoms, seek the right assessment, and explore treatment options when planning a pregnancy.

## What Is PCOS?

PCOS is a hormonal and metabolic condition that can affect how the ovaries function.

It is commonly associated with one or more of the following features:

- Irregular or absent ovulation.
- Higher-than-usual androgen levels, sometimes called male-type hormones.
- A characteristic appearance of the ovaries on ultrasound.

The diagnosis is based on appropriate clinical criteria and the exclusion of other possible causes. An ultrasound finding alone does not necessarily mean someone has PCOS.

Symptoms vary between individuals. Some women experience irregular periods and acne, while others may notice increased facial hair, scalp hair thinning, or difficulty conceiving.

PCOS can occur in women of different body sizes and should not be diagnosed based on weight alone.

## How Does PCOS Affect Fertility?

Ovulation is the process in which an ovary releases an egg. For pregnancy to occur naturally, an egg must be released and sperm must reach and fertilise it.

In PCOS, hormonal changes can interfere with normal follicle development and ovulation. This may mean that ovulation happens less frequently or unpredictably.

As a result, there may be fewer opportunities to conceive during a given period.

However, PCOS does not necessarily mean that eggs are absent or that the ovaries have stopped functioning. Other factors, including fallopian tube health and sperm quality, can also influence conception.

## Can You Get Pregnant Naturally With PCOS?

Yes. Many women with PCOS conceive naturally.

The likelihood depends on whether ovulation occurs, age, overall reproductive health, partner fertility, and other individual factors.

If your menstrual cycles are irregular, it may be more difficult to predict your fertile window. Home ovulation tests can also be harder to interpret in some people with PCOS.

If you are planning a pregnancy, a fertility assessment can help determine whether ovulation is occurring and whether any additional support may be useful.

## What Are the Symptoms of PCOS?

Common symptoms include:

**Irregular periods:** Menstrual cycles may be infrequent, unpredictable, or absent.

**Acne and oily skin:** Hormonal changes may contribute to persistent acne.

**Increased facial or body hair:** Higher androgen levels can cause excess hair growth in some women.

**Scalp hair thinning:** Some women experience hair loss or thinning.

**Difficulty conceiving:** Irregular or absent ovulation may make conception more difficult.

Not everyone with PCOS experiences all these symptoms. If you have persistent menstrual irregularity or other concerns, consult a healthcare professional for an appropriate assessment.

## How Is PCOS Diagnosed?

Your doctor may review your menstrual history, symptoms, medical history, and pregnancy goals.

Depending on your circumstances, investigations may include:

- Blood tests to assess selected hormones.
- Tests to exclude other conditions that can cause similar symptoms.
- Pelvic ultrasound when indicated.
- Blood pressure and metabolic assessment.
- Blood glucose testing to evaluate diabetes risk.

Not every woman requires every test. Your doctor will recommend investigations based on your symptoms and clinical findings.

## What Fertility Treatments Are Available for PCOS?

Treatment depends on whether you are trying to conceive, the underlying cause of your symptoms, and whether other fertility factors are present.

### Lifestyle and Preconception Care

Balanced nutrition, regular physical activity, adequate sleep, and appropriate management of blood sugar and other health conditions can support general wellbeing.

These measures may improve ovulatory function for some women, but they do not guarantee pregnancy and should not be presented as a cure for PCOS.

### Ovulation-Induction Medication

If irregular or absent ovulation is the main cause of infertility, a fertility specialist may prescribe medication to help an egg develop and be released.

Letrozole is commonly recommended as a first-line medication for many women with PCOS-related anovulatory infertility when no other infertility factor is present.

Treatment should be medically supervised, with monitoring when appropriate.

### Other Medications

Metformin may be considered for selected patients, particularly when metabolic concerns are present. Its role in fertility treatment depends on individual circumstances.

Do not start or stop medication without medical advice.

### IUI or IVF

If ovulation treatment is unsuccessful or additional fertility factors are identified, your specialist may discuss intrauterine insemination (IUI) or in vitro fertilisation (IVF).

The appropriate option depends on the complete fertility assessment rather than the PCOS diagnosis alone.

## How Can You Prepare for Pregnancy With PCOS?

If you have PCOS and are planning a pregnancy, consider discussing the following with your doctor:

- Whether you are ovulating regularly.
- Blood sugar and blood pressure assessment, where appropriate.
- Folic acid supplementation before pregnancy.
- Your current medications and supplements.
- Thyroid function or other investigations when indicated.
- Any history of pregnancy loss or previous fertility treatment.

Preconception care can help identify health concerns that may need attention before pregnancy.

## Frequently Asked Questions

### Does PCOS mean I have ovarian cysts that need surgery?

No. Despite its name, PCOS does not simply mean that you have ovarian cysts that need to be removed. The structures seen on ultrasound are generally small follicles, and surgery is not the routine first treatment for PCOS-related infertility.

### Will losing weight cure PCOS?

PCOS is a complex condition and is not necessarily cured by weight loss. For some women, lifestyle changes and weight management may improve metabolic health and ovulation. Treatment should be individualised and free from stigma.

### Can PCOS affect pregnancy?

PCOS may be associated with an increased risk of certain pregnancy complications, including gestational diabetes and high blood pressure. Appropriate preconception care and antenatal monitoring can help identify and manage relevant risks.

### Should I wait a year before seeking fertility help?

If your periods are absent or very irregular, you may not be ovulating consistently. You can seek medical advice without waiting a full year. Early evaluation may help identify the most appropriate next step.

## Conclusion

PCOS can make the journey to pregnancy less predictable, but it does not eliminate the possibility of parenthood. With an appropriate diagnosis and a treatment plan tailored to your needs, you can better understand your reproductive health and available options.

If you have PCOS and are planning a pregnancy, or if you have been trying to conceive without success, consider speaking with a fertility specialist.`,
  },
  {
    slug: "nutrition-and-fertility",
    title: "Nutrition and Fertility: What to Eat (and What to Avoid)",
    category: "lifestyle",
    tag: "Lifestyle & Wellness",
    tagColor: "#43b960",
    excerpt:
      "What to eat when planning a pregnancy, which nutrients matter before conception, and why no single food or supplement can guarantee it.",
    disclaimer:
      "This article is intended for general educational purposes only and does not replace professional medical advice, diagnosis, or treatment.",
    body: `## Introduction

Nutrition is an important part of overall health, particularly when preparing for pregnancy. A balanced diet helps the body obtain the nutrients it needs to function well and supports health before and during pregnancy.

When trying to conceive, it is natural to look for foods that might improve fertility. However, no single food, supplement, or diet can guarantee pregnancy.

The most useful approach is to focus on balanced eating, appropriate preconception supplementation, and healthy habits while addressing any underlying medical concerns with your healthcare professional.

## What Foods Should You Include in Your Diet?

A varied diet can provide the nutrients needed for general and reproductive health.

### Vegetables and Fruits

Include a variety of colourful vegetables and fruits in your daily meals. They provide vitamins, minerals, fibre, and other beneficial compounds.

Fresh, frozen, and appropriately prepared options can all contribute to a balanced diet.

### Whole Grains

Foods such as oats, whole-wheat roti, brown rice, and millets provide energy and fibre.

Choose whole grains regularly as part of a varied eating pattern that suits your preferences and health needs.

### Protein-Rich Foods

Protein is important for the body's normal growth and repair.

Suitable sources include lentils, beans, chickpeas, eggs, dairy products, tofu, fish, and other protein-rich foods.

Including a variety of sources can help meet your nutritional needs.

### Healthy Fats

Nuts, seeds, and unsaturated vegetable oils can form part of a balanced diet. Fish may also provide omega-3 fatty acids.

If you eat fish while planning pregnancy, choose pregnancy-safe varieties and follow local food-safety guidance.

### Adequate Hydration

Drinking enough water supports general health. Your fluid needs may vary depending on your activity level, climate, and medical circumstances.

Staying hydrated is beneficial, although drinking extra water does not independently improve fertility.

## Important Nutrients to Consider Before Pregnancy

### Folic Acid

Folic acid is particularly important before conception and during early pregnancy because it helps reduce the risk of neural tube defects in the developing baby.

People planning pregnancy are generally advised to take 400 micrograms of folic acid daily, beginning before conception and continuing through early pregnancy, unless a healthcare professional recommends a different dose.

Some medical circumstances require a higher prescribed dose.

### Iron

Iron supports the production of healthy red blood cells. Sources include beans, lentils, leafy green vegetables, and meat.

Your healthcare professional may recommend testing or supplementation if you have an iron deficiency or another clinical indication.

### Vitamin B12

Vitamin B12 is important for normal blood formation and nervous system function.

People following vegan diets may need a reliable fortified food source or supplementation because unfortified plant foods are not dependable sources of vitamin B12.

### Vitamin D and Iodine

These nutrients play important roles in health, including during pregnancy. Whether supplementation is necessary depends on your diet, health, and local recommendations.

Discuss supplements with your healthcare professional rather than taking multiple products without reviewing their ingredients and doses.

## What Should You Limit or Avoid?

Certain substances and dietary habits deserve particular attention when planning pregnancy.

**Alcohol:** The safest approach is to avoid alcohol while trying to conceive and during pregnancy.

**Smoking and recreational drugs:** These can adversely affect reproductive and general health and should be avoided.

**Excessive caffeine:** Moderate caffeine intake is advisable. During pregnancy, commonly used guidance is to limit total caffeine to less than 200 mg per day. Discuss your intake with your healthcare professional while planning pregnancy.

**Unverified fertility supplements:** Products claiming to restore egg quality, balance hormones, or guarantee conception may lack reliable evidence and can interact with medications.

**Extreme diets:** Highly restrictive eating patterns may make it harder to obtain adequate nutrients. Aim for a balanced, sustainable approach rather than unnecessary food restrictions.

## Can a Fertility Diet Improve Your Chances of Pregnancy?

A balanced eating pattern can support overall health and may be particularly helpful when managing conditions such as diabetes or PCOS.

However, there is no universally proven fertility diet that guarantees conception or reverses age-related changes in egg quality.

Nutrition cannot correct every cause of infertility, including blocked fallopian tubes or certain sperm-related problems.

If you have been trying to conceive without success, dietary improvements should complement, not replace, an appropriate fertility assessment.

## Nutrition for Male Fertility

Nutrition is relevant to both partners.

A balanced diet supports general health, but no single food has been proven to reliably correct male infertility. Smoking, certain medications, anabolic steroid use, and underlying reproductive conditions may also affect sperm production or function.

If you have concerns about sperm quality, seek medical advice rather than relying solely on dietary changes or supplements.

## Frequently Asked Questions

### Should I start taking folic acid before pregnancy?

Yes. Discuss preconception supplementation with your healthcare professional. Folic acid is recommended before conception because early fetal development begins before many people know they are pregnant.

### Can certain foods increase sperm count?

No individual food has been proven to reliably correct a low sperm count. A balanced diet supports general health, but persistent sperm-related concerns should be assessed medically.

### Are fertility supplements necessary?

Not always. Some nutrients are important before pregnancy, but the need for additional supplements depends on your diet, medical history, and clinical findings.

### Should I follow a special diet if I have PCOS?

A balanced eating pattern can support metabolic health in women with PCOS. Your dietary approach should be sustainable and tailored to your nutritional needs, preferences, and medical circumstances.

## Conclusion

Nutrition can play a valuable role in preparing for pregnancy, but you do not need a perfect diet to support your health. Focus on variety, adequate nourishment, and sustainable habits rather than searching for a single food that promises better fertility.

If you have specific nutritional concerns, a qualified dietitian or fertility specialist can help you identify what is appropriate for your circumstances.`,
  },
  {
    slug: "iui-vs-ivf",
    title: "IUI vs IVF: Which Treatment Is Right for You?",
    category: "treatments",
    tag: "Treatments",
    tagColor: "#a74b99",
    excerpt:
      "How the two treatments actually differ, when each is appropriate, and the questions to ask before comparing any clinic's success rates.",
    disclaimer:
      "This article is intended for general educational purposes only and does not replace professional medical advice, diagnosis, or treatment.",
    body: `## Introduction

When pregnancy does not happen naturally, it is common to explore fertility treatments. Two options you may hear about are Intrauterine Insemination (IUI) and In Vitro Fertilisation (IVF).

Although both treatments can help people trying to conceive, they work in different ways and are suitable for different clinical situations.

IUI involves placing prepared sperm directly into the uterus around the time of ovulation. IVF involves collecting eggs, fertilising them in a laboratory, and transferring an embryo into the uterus.

Neither treatment is automatically the best choice for everyone. Understanding the differences can help you have a more informed discussion with your fertility specialist.

## What Is IUI?

IUI stands for Intrauterine Insemination.

During this procedure, sperm is prepared in a laboratory and placed directly into the uterus using a thin catheter. The procedure is timed around ovulation to improve the opportunity for sperm and egg to meet.

Depending on the clinical situation, IUI may involve a natural menstrual cycle or medication to support ovulation.

The process generally includes:

- Fertility assessment and confirmation that IUI is appropriate.
- Monitoring natural ovulation or using medication when indicated.
- Collecting and preparing the sperm sample.
- Placing the prepared sperm into the uterus.
- Taking a pregnancy test at the time advised by the clinic.

IUI is generally less invasive than IVF and does not usually require egg retrieval.

However, it generally requires at least one suitable, open fallopian tube and sufficient sperm function for fertilisation to occur.

## What Is IVF?

IVF stands for In Vitro Fertilisation.

Unlike IUI, IVF involves fertilisation outside the body in a laboratory.

The treatment generally includes:

- Fertility assessment and treatment planning.
- Ovarian stimulation using fertility medication.
- Monitoring follicle development.
- Collecting eggs from the ovaries.
- Fertilising the eggs with sperm in the laboratory.
- Monitoring embryo development.
- Transferring a suitable embryo into the uterus, either during the same cycle or in a later cycle when appropriate.
- Performing a pregnancy test at the recommended time.

IVF is a more involved treatment process, but it can be appropriate for a broader range of fertility conditions, including situations where the fallopian tubes are blocked or severely damaged.

## IUI vs IVF: What Are the Main Differences?

**Where fertilisation occurs:** With IUI, fertilisation usually occurs inside the body, typically in the fallopian tube. With IVF, fertilisation takes place in a laboratory.

**Egg collection:** IUI does not usually involve egg retrieval. IVF requires eggs to be collected from the ovaries.

**Medication:** IUI may be performed in a natural cycle or with ovulation medication. IVF commonly involves medication to stimulate the development of multiple follicles.

**Fallopian tube requirements:** IUI generally requires at least one suitable, open fallopian tube. IVF can be an option when the tubes are blocked or damaged.

**Laboratory involvement:** IUI involves sperm preparation. IVF requires laboratory handling of eggs, fertilisation, and embryo development.

**Treatment intensity:** IUI is generally simpler and less invasive. IVF involves more appointments, medication, egg retrieval, and laboratory procedures.

## When Might IUI Be Recommended?

IUI may be considered in selected circumstances, including:

- Certain cases of unexplained infertility.
- Some mild male-factor fertility concerns.
- Use of donor sperm when appropriate.
- Selected ovulation-related or other clinical circumstances.

IUI may be less suitable when both fallopian tubes are blocked, significant male-factor infertility is present, or other clinical findings suggest that IVF may be a more appropriate option.

Your doctor will assess the likely benefits of IUI in relation to your diagnosis and age.

## When Might IVF Be Recommended?

IVF may be considered when:

- The fallopian tubes are blocked or severely damaged.
- Significant male-factor infertility is present.
- Other fertility treatments have not been successful.
- Age or other clinical factors make a more direct treatment approach appropriate.
- Certain reproductive conditions require IVF-based treatment.

A technique called Intracytoplasmic Sperm Injection (ICSI) may be used during IVF in selected cases, particularly when certain sperm-related problems are present.

ICSI is a fertilisation technique used as part of IVF rather than a separate alternative to IVF.

## Which Treatment Has a Better Chance of Success?

Success depends on age, the cause of infertility, egg and sperm characteristics, previous treatment history, and other individual factors.

IVF may offer a more appropriate route for certain diagnoses, while IUI may be a reasonable option for appropriately selected patients.

When discussing success rates, ask your fertility specialist about the likelihood of a live birth per treatment cycle, the possibility of needing multiple cycles, and the cumulative outlook over time.

Avoid comparing percentages from different clinics without checking whether they refer to pregnancy rates or live-birth rates and whether they apply to people with similar clinical circumstances.

## Is IUI Less Expensive Than IVF?

IUI generally has a lower initial treatment cost because it involves fewer procedures and does not require egg retrieval or laboratory fertilisation.

IVF is usually more expensive because it involves ovarian stimulation, egg collection, laboratory procedures, and embryo transfer.

However, the total cost of treatment depends on the clinic, medication requirements, additional procedures, and whether multiple cycles are needed.

Ask your clinic for a clear estimate that includes the likely treatment steps and any additional charges.

## Frequently Asked Questions

### Is IUI less painful than IVF?

IUI is generally a simpler procedure and usually causes little discomfort, although mild cramping may occur. IVF involves additional procedures, including egg retrieval, which is commonly performed under sedation or anaesthesia.

### Can I move from IUI to IVF?

Yes. If IUI is unsuccessful or your clinical circumstances change, your specialist may recommend reassessing your fertility and considering IVF.

### Is IVF always more successful than IUI?

Not in every situation. The most suitable treatment depends on your diagnosis, age, and other fertility factors. Your specialist can explain which option offers a more appropriate balance of effectiveness, risks, time, and cost.

### Can IUI or IVF guarantee pregnancy?

No. Both treatments can help people conceive, but neither guarantees pregnancy or a live birth.

## Conclusion

IUI and IVF are different fertility treatments designed to address different reproductive challenges. IUI may be suitable in selected cases and generally involves a simpler procedure, while IVF may be recommended when more complex fertility factors are present.

The right decision should be based on a comprehensive fertility assessment rather than assumptions about which treatment is easier or more effective.`,
  },
  {
    slug: "understanding-your-ovulation-cycle",
    title: "Understanding Your Ovulation Cycle",
    category: "fertility-basics",
    tag: "Fertility Basics",
    tagColor: "#a74b99",
    excerpt:
      "The four stages of your cycle, when the fertile window really falls, and how to track ovulation when your periods are irregular.",
    disclaimer:
      "This article is intended for general educational purposes only and does not replace professional medical advice, diagnosis, or treatment.",
    body: `## Introduction

Understanding your menstrual cycle can help you learn more about your reproductive health and identify when pregnancy may be most likely.

One of the most important stages of the menstrual cycle is ovulation, when an ovary releases an egg. Knowing how ovulation works can help you understand your fertile window and recognise when you may benefit from medical advice.

However, menstrual cycles vary between individuals, and even regular periods do not guarantee that ovulation occurs every month.

## What Is Ovulation?

Ovulation is the release of a mature egg from an ovary.

After the egg is released, it enters the fallopian tube, where fertilisation may occur if sperm are present.

The egg generally remains capable of being fertilised for approximately 12 to 24 hours after ovulation. Sperm can survive for several days under favourable conditions, which is why the fertile window includes the days before ovulation as well as the day it occurs.

Understanding this timing can help when planning a pregnancy.

## The Four Stages of the Menstrual Cycle

### Menstruation

The first day of menstrual bleeding marks the beginning of a new cycle.

During menstruation, the uterine lining sheds because pregnancy did not occur in the previous cycle.

### Follicular Phase

During this phase, hormonal signals encourage follicles in the ovaries to develop. Usually, one follicle becomes dominant and contains the egg that will be released.

The uterine lining also begins to develop in preparation for a possible pregnancy.

### Ovulation

A rise in luteinising hormone (LH) triggers the release of an egg from the ovary.

In a typical 28-day cycle, ovulation may occur around day 14, but the timing varies considerably. It does not always happen on the same day for everyone.

### Luteal Phase

After ovulation, the body produces progesterone, which helps prepare and maintain the uterine lining.

If pregnancy does not occur, hormone levels fall and menstruation begins again.

## When Are You Most Fertile?

The fertile window is generally the six-day period ending on the day of ovulation.

The likelihood of conception is often highest during the two days before ovulation.

If you are trying to conceive, having intercourse every one to two days during the fertile window can help maximise the opportunity for sperm and egg to meet.

Alternatively, regular intercourse two to three times per week can be a practical approach if tracking ovulation becomes stressful.

Remember that ovulation timing can vary even among people with usually regular cycles.

## What Are the Common Signs of Ovulation?

Some people notice physical changes around ovulation, including:

**Changes in cervical mucus:** Discharge may become clearer, slippery, and stretchy, similar to raw egg white.

**Mild pelvic discomfort:** Some people experience temporary discomfort on one side of the lower abdomen.

**Changes in basal body temperature:** Body temperature may rise slightly after ovulation.

**Increased sexual desire:** Some people notice changes in libido around their fertile window.

**Positive ovulation test:** A urine test may detect an LH surge that often occurs shortly before ovulation.

These signs are not definitive. Some people have no noticeable symptoms, and an LH test predicts approaching ovulation rather than confirming that an egg was released.

## How Can You Track Your Ovulation?

There are several ways to estimate when ovulation may occur.

- **Menstrual calendar:** Recording the first day of each period can help you understand your cycle pattern.
- **Cervical mucus observation:** Changes in discharge may provide clues about the fertile window.
- **Ovulation predictor kits:** These detect a rise in LH in urine.
- **Basal body temperature:** Recording your temperature each morning may help identify a pattern after ovulation.
- **Medical assessment:** A clinician may recommend ultrasound monitoring or selected hormone tests when needed.

No home method is completely reliable for everyone. Tracking may be particularly challenging if you have irregular cycles or PCOS.

## What If Your Periods Are Irregular?

Irregular or absent periods can make ovulation difficult to predict. Possible causes include PCOS, thyroid disorders, significant weight changes, excessive exercise, and other hormonal conditions.

If your periods are consistently irregular, you do not need to rely on home tracking alone. A healthcare professional can help identify possible causes and determine whether further assessment is necessary.

## Frequently Asked Questions

### Does ovulation always occur on day 14?

No. Day 14 is an approximate estimate for a typical 28-day cycle. Ovulation may occur earlier or later depending on the individual and the cycle.

### Can I become pregnant during my period?

Pregnancy is possible, particularly with short or irregular cycles, because ovulation may occur earlier than expected and sperm can survive for several days.

### Can I have periods without ovulating?

Yes. Bleeding can occur even when normal ovulation has not taken place. Persistent irregular periods or absent menstruation should be discussed with a healthcare professional.

### When should I seek fertility advice?

If you are under 35 and have been trying to conceive for 12 months without success, consider a fertility evaluation. If you are 35 or older, seek help after six months. Consider earlier assessment if your periods are absent or irregular or you have a known reproductive condition.

## Conclusion

Understanding your ovulation cycle can help you recognise your fertile window and make informed decisions when planning a pregnancy.

However, cycle tracking is only one part of fertility care. If conception is taking longer than expected or your periods are irregular, a fertility specialist can help identify possible causes and discuss suitable next steps.`,
  },
];

export const articleBySlug = new Map(articles.map((a) => [a.slug, a]));

/** Reading time measured from the body rather than typed by hand. */
export function readTime(body: string) {
  const words = body.replace(/[#*\-`]/g, " ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}
