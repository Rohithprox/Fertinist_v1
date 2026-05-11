import { TreatmentPageTemplate } from "../components/TreatmentPageTemplate";
import imgHero from "../../imports/FertilityTreatments-4/62c7b9e907f92d9cee0468ccfe33cef4450180bb.png";

export function PesaTesaPage() {
  return (
    <TreatmentPageTemplate
      treatmentName="PESA & TESA"
      treatmentSubtitle="Surgical sperm retrieval techniques that offer hope to men with azoospermia — allowing them to father biological children through IVF/ICSI even when sperm is absent from the ejaculate."
      heroImage={imgHero}
      whatIsTitle="What is PESA & TESA?"
      whatIsDescription={[
        "​",
        "PESA (Percutaneous Epididymal Sperm Aspiration) and TESA (Testicular Sperm Aspiration) are minimally invasive surgical procedures used to retrieve sperm directly from the epididymis or testicles. These are performed when sperm cannot be found in the ejaculate due to blockages or production issues.",
        "​",
        "At Fertinest, our experienced andrologists use ultrasound-guided precision to maximise sperm retrieval rates while minimising discomfort. The retrieved sperm is used with ICSI to fertilise eggs, giving couples with severe male factor infertility the chance to have biological children."
      ]}
      rightForYouTitle="Is PESA / TESA right for you?"
      rightForYouItems={[
        "Obstructive azoospermia — no sperm in ejaculate due to blockage",
        "Non-obstructive azoospermia — low or absent sperm production",
        "Previous vasectomy or failed vasectomy reversal",
        "Congenital absence of the vas deferens (CAVD)",
        "Retrograde ejaculation or ejaculatory dysfunction",
        "Prior ICSI cycles requiring surgically retrieved sperm"
      ]}
      journeyTitle="The PESA/TESA Journey"
      journeySubtitle="A precise, minimally invasive approach to sperm retrieval designed for your comfort."
      timelineTitle="PESA/TESA Timeline at Fertinest – What to Expect"
      timelineIntro="The surgical sperm retrieval process is carefully coordinated with your partner's egg retrieval cycle to ensure the freshest possible sperm for fertilisation. The procedure itself is brief, with most men returning home the same day."
      timelinePhases={[
        {
          title: "Assessment Phase (Weeks 1–2)",
          description: "Comprehensive male fertility evaluation including semen analysis, hormone profile, scrotal ultrasound, and genetic testing. Your andrologist recommends PESA or TESA based on findings.",
          timeCommitment: "1 to 2 clinic visits"
        },
        {
          title: "Coordination Phase (Week 3)",
          description: "Your procedure is scheduled to coincide with your partner's egg retrieval day. Pre-procedure instructions, fasting requirements, and preparatory medications are provided.",
          timeCommitment: "1 pre-procedure consultation"
        },
        {
          title: "Retrieval Procedure (Day of Egg Retrieval)",
          description: "Under local anaesthesia with sedation, your andrologist performs PESA (fine needle aspiration from the epididymis) or TESA (needle biopsy of the testis). The procedure takes 20–30 minutes and retrieved tissue is immediately assessed for viable sperm.",
          timeCommitment: "Half-day clinic visit"
        },
        {
          title: "ICSI Fertilisation Phase (Same Day)",
          description: "Viable sperm retrieved are immediately used for ICSI fertilisation. Any surplus sperm of good quality can be cryopreserved for future cycles, avoiding repeat procedures.",
          timeCommitment: "Laboratory procedure — you rest at home"
        }
      ]}
      timelineOverall={[
        "Entire process coordinated with partner's IVF/ICSI cycle",
        "Procedure duration: 20–30 minutes under local anaesthesia with sedation",
        "Recovery: Most men return to normal activities within 24–48 hours",
        "Sperm retrieval success: 85–95% in obstructive azoospermia, 40–60% in non-obstructive",
        "Surplus sperm cryopreserved to avoid repeat procedures in future cycles"
      ]}
      footerOffset={3872}
    />
  );
}
