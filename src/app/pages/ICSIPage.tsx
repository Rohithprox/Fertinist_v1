import { TreatmentPageTemplate } from "../components/TreatmentPageTemplate";
import imgHero from "../../imports/FertilityTreatments-4/62c7b9e907f92d9cee0468ccfe33cef4450180bb.png";

export function ICSIPage() {
  return (
    <TreatmentPageTemplate
      treatmentName="ICSI"
      treatmentSubtitle="Intracytoplasmic Sperm Injection (ICSI) is an advanced IVF technique where a single sperm is directly injected into each egg, offering hope for couples facing severe male infertility challenges."
      heroImage={imgHero}
      whatIsTitle="What is ICSI?"
      whatIsDescription={[
        "​",
        "Intracytoplasmic Sperm Injection (ICSI) is a specialized form of IVF where a single healthy sperm is carefully selected and directly injected into a mature egg using micromanipulation techniques. This procedure bypasses many of the natural barriers to fertilization and is particularly beneficial for severe male factor infertility.",
        "​",
        "At Fertinest, our expert embryologists use state-of-the-art equipment and advanced techniques to select the best quality sperm for injection. With our high-magnification microscopy and precision instruments, we achieve exceptional fertilization rates even in challenging cases."
      ]}
      rightForYouTitle="Is ICSI right for you?"
      rightForYouItems={[
        "Severe male factor infertility (very low sperm count or motility)",
        "Previous IVF cycles with poor or no fertilization",
        "Use of surgically retrieved sperm (TESA, PESA, mTESE)",
        "Frozen sperm with limited quantity or quality",
        "Couples requiring preimplantation genetic testing (PGT)",
        "Advanced maternal age requiring maximum fertilization rates"
      ]}
      journeyTitle="The ICSI Journey"
      journeySubtitle="Five specialized stages combining advanced embryology with personalized care."
      timelineTitle="ICSI Timeline at Fertinest – What to Expect"
      timelineIntro="ICSI follows a similar timeline to standard IVF, with the key difference being the fertilization technique. The entire process typically takes 4 to 6 weeks, though frozen embryo transfers may extend this timeline."
      timelinePhases={[
        {
          title: "The Preparation Phase (Weeks 1–2)",
          description: "Comprehensive fertility assessment including semen analysis, hormone tests, and ultrasound scans. Medications may be prescribed to prepare your body for the treatment cycle.",
          timeCommitment: "1 to 2 clinic visits"
        },
        {
          title: "The Stimulation Phase (Weeks 3–4)",
          description: "Daily hormone injections for 10-12 days to stimulate multiple egg development. Regular monitoring through ultrasound and blood tests ensures optimal follicle growth.",
          timeCommitment: "3 to 4 short clinic visits"
        },
        {
          title: "The Collection Phase (Week 4)",
          description: "Egg retrieval under light sedation (20-minute procedure) and sperm collection on the same day. Both are then prepared in our specialized laboratory.",
          timeCommitment: "Half-day clinic visit"
        },
        {
          title: "The ICSI Procedure (Day of Retrieval)",
          description: "Our embryologist carefully selects the best quality sperm and injects one sperm directly into each mature egg using advanced micromanipulation techniques. Fertilized eggs are then cultured in our incubators for 3-5 days.",
          timeCommitment: "Laboratory procedure (you rest at home)"
        },
        {
          title: "The Transfer Phase (Week 5 or Later)",
          description: "The highest quality embryo is selected and transferred into the uterus. Fresh transfers occur 3-5 days after retrieval, while frozen transfers happen in a subsequent cycle after the body has recovered.",
          timeCommitment: "1 clinic visit, approximately 1 hour"
        }
      ]}
      timelineOverall={[
        "Fresh ICSI Cycle: Approximately 4 weeks (from stimulation to transfer)",
        "Frozen ICSI Cycle: Approximately 6-8 weeks (includes recovery period)",
        "Overall Clinic Visits: 6 to 8 visits per cycle",
        "Success Rate: ICSI achieves fertilization rates of 70-80% even in severe male factor cases"
      ]}
      footerOffset={3872}
    />
  );
}
