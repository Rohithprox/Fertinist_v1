import { TreatmentPageTemplate } from "../components/TreatmentPageTemplate";
import imgHero from "../../imports/FertilityTreatments-4/62c7b9e907f92d9cee0468ccfe33cef4450180bb.png";

export function IVFPage() {
  return (
    <TreatmentPageTemplate
      treatmentName="IVF"
      treatmentSubtitle="Also known as Test Tube Baby — we combine cutting-edge embryology with a deeply human touch to guide you through every step of your journey toward parenthood."
      heroImage={imgHero}
      whatIsTitle="What is IVF?"
      whatIsDescription={[
        "In-Vitro Fertilization (IVF) is the process where an egg is fertilized by sperm outside the body, in a specialized laboratory environment. It is the most effective form of assisted reproductive technology (ART) available today.",
        "At Fertinest, we go beyond the standard procedure by utilizing AI-driven embryo selection and time-lapse monitoring to maximize the potential of every cycle. Our laboratory is designed to mimic the natural environment of the womb as closely as possible, giving your embryos the best possible start.",
      ]}
      rightForYouTitle="Is IVF right for you?"
      rightForYouItems={[
        "Advanced maternal age (typically over 35)",
        "Blocked or damaged fallopian tubes",
        "Endometriosis affecting fertility",
        "Unexplained infertility lasting over 12 months",
        "Male factor infertility requiring ICSI",
        "Recurrent IUI failures",
        "Genetic carrier screening requirements (PGT)",
        "Same-sex couples or single parents using donor eggs or sperm",
      ]}
      journeyTitle="The IVF Journey"
      journeySubtitle="Five dedicated stages designed for safety, precision, and the highest success potential."
      timelineTitle="IVF Timeline at Fertinest – What to Expect"
      timelineIntro="For many working couples, understanding the time involved in IVF is important. At Fertinest, we follow a structured, patient-friendly approach designed to fit into your routine. While every journey is unique, a typical IVF cycle usually takes about 4 to 6 weeks."
      timelinePhases={[
        {
          title: "The Preparation Phase (Weeks 1–2)",
          description:
            "Your journey begins with planning and preparation. This includes blood tests, ultrasound scans, and sometimes medications to regulate your cycle and prepare your body for treatment.",
          timeCommitment: "1 to 2 clinic visits",
        },
        {
          title: "The Stimulation Phase (Weeks 3–4)",
          description:
            "Starting on Day 2 or 3 of your period, this phase involves daily hormone injections for around 10 to 12 days to stimulate egg growth. Your progress is monitored through regular ultrasound scans and blood tests.",
          timeCommitment: "3 to 4 short clinic visits",
        },
        {
          title: "The Procedure Phase (Week 4)",
          description:
            "Once the eggs are ready, they are collected through a short, minimally invasive procedure under light sedation that usually takes about 20 minutes. The eggs are then fertilized in our lab and allowed to develop for 3 to 5 days.",
          timeCommitment: "Half-day clinic visit",
        },
        {
          title: "The Transfer Phase (Week 5 or Later)",
          description:
            "The highest quality embryo is selected and placed into the uterus through a gentle procedure. Fresh transfers are done 3–5 days after retrieval; Frozen transfers (FET) are performed in a subsequent cycle, often improving success rates by allowing your body to recover fully.",
          timeCommitment: "1 clinic visit, approximately 1 hour",
        },
        {
          title: "The Result Phase (2 Weeks After Transfer)",
          description:
            "A blood pregnancy test (beta-HCG) is performed approximately 14 days after embryo transfer. Our team is with you every step of the way, providing emotional support and medical guidance throughout.",
          timeCommitment: "1 follow-up visit",
        },
      ]}
      timelineOverall={[
        "Fresh IVF Cycle: Approximately 3 to 4 weeks (from Day 1 of period to embryo transfer)",
        "Frozen IVF Cycle: Approximately 6 to 8 weeks (spread across two menstrual cycles)",
        "Overall Clinic Visits: 6 to 8 visits per cycle",
        "At Fertinest, every step is carefully guided to ensure a smooth, efficient, and supportive experience.",
      ]}
      footerOffset={3872}
    />
  );
}
