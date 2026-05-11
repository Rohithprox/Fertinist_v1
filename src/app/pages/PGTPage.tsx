import { TreatmentPageTemplate } from "../components/TreatmentPageTemplate";
import imgHero from "../../imports/FertilityTreatments-4/62c7b9e907f92d9cee0468ccfe33cef4450180bb.png";

export function PGTPage() {
  return (
    <TreatmentPageTemplate
      treatmentName="Genetic Screening (PGT)"
      treatmentSubtitle="Preimplantation Genetic Testing screens embryos for chromosomal abnormalities before transfer — dramatically improving IVF success rates and reducing the risk of miscarriage."
      heroImage={imgHero}
      whatIsTitle="What is Preimplantation Genetic Testing?"
      whatIsDescription={[
        "​",
        "Preimplantation Genetic Testing (PGT) is an advanced technique performed during IVF that examines embryos for chromosomal abnormalities or specific genetic disorders before they are transferred to the uterus. By selecting only chromosomally normal embryos, PGT dramatically improves pregnancy rates and reduces miscarriage risk.",
        "​",
        "At Fertinest, we offer three types of PGT: PGT-A (aneuploidy screening for chromosome number), PGT-M (monogenic/single gene disorders), and PGT-SR (structural rearrangements). Our partnership with leading genetic laboratories ensures the highest accuracy, giving you confidence to proceed with the healthiest possible embryo."
      ]}
      rightForYouTitle="Is PGT right for you?"
      rightForYouItems={[
        "Advanced maternal age (35+) with higher chromosomal abnormality risk",
        "Recurrent IVF failure despite good embryo quality",
        "Recurrent pregnancy loss (two or more miscarriages)",
        "Previous pregnancy or child with a chromosomal condition",
        "Known carrier of hereditary genetic disorders (cystic fibrosis, SMA, etc.)",
        "Family history of chromosomal translocations or inversions"
      ]}
      journeyTitle="The PGT Journey"
      journeySubtitle="Precision genetic analysis integrated seamlessly into your IVF cycle."
      timelineTitle="PGT Timeline at Fertinest – What to Expect"
      timelineIntro="PGT is performed as part of your IVF cycle, adding a biopsy and genetic analysis step before embryo transfer. This typically means a frozen embryo transfer cycle as results take 1–2 weeks to return from the genetics lab."
      timelinePhases={[
        {
          title: "Genetic Counselling Phase (Week 1)",
          description: "A dedicated session with our genetic counsellor to determine which type of PGT suits your situation, what the test can and cannot detect, and the implications of various results.",
          timeCommitment: "1 consultation (60–90 minutes)"
        },
        {
          title: "IVF Stimulation & Retrieval Phase (Weeks 2–4)",
          description: "Standard IVF ovarian stimulation and egg retrieval. Fertilisation occurs via ICSI (recommended for PGT cycles). Embryos are cultured to blastocyst stage (Day 5 or 6).",
          timeCommitment: "3 to 4 monitoring visits + retrieval day"
        },
        {
          title: "Biopsy Phase (Day 5–6 of Embryo Development)",
          description: "A few trophectoderm cells are carefully removed from each blastocyst by our specialist embryologist. This does not harm the embryo. Biopsied embryos are vitrified while samples are sent to the genetics lab.",
          timeCommitment: "Laboratory procedure — no visit required"
        },
        {
          title: "Analysis Phase (1–2 Weeks)",
          description: "The genetics laboratory analyses biopsied cells. Results identify chromosomally normal (euploid) embryos suitable for transfer. Your doctor reviews results with you and selects the best embryo.",
          timeCommitment: "1 results consultation"
        },
        {
          title: "Frozen Embryo Transfer Phase",
          description: "A euploid embryo is transferred in a subsequent cycle. The uterine lining is prepared with medications, and the thaw-and-transfer procedure takes approximately 15–20 minutes.",
          timeCommitment: "2 to 3 monitoring visits + transfer day"
        }
      ]}
      timelineOverall={[
        "PGT-A results: 7–14 days from biopsy",
        "PGT-M results: 3–4 weeks from biopsy (more complex analysis)",
        "Total timeline egg retrieval to transfer: 6–10 weeks",
        "Implantation rate with euploid embryo: 60–70% per transfer",
        "Miscarriage reduction: Up to 50% lower rate versus untested embryos"
      ]}
      footerOffset={3872}
    />
  );
}
