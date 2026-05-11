import { TreatmentPageTemplate } from "../components/TreatmentPageTemplate";
import imgHero from "../../imports/FertilityTreatments-4/62c7b9e907f92d9cee0468ccfe33cef4450180bb.png";

export function DonorProgramsPage() {
  return (
    <TreatmentPageTemplate
      treatmentName="Donor Programs"
      treatmentSubtitle="Our comprehensive donor program offers egg, sperm, and embryo donation — opening the path to parenthood for individuals and couples who need donor assistance to build their family."
      heroImage={imgHero}
      whatIsTitle="What are Donor Programs?"
      whatIsDescription={[
        "​",
        "Donor programs involve using eggs, sperm, or embryos donated by a third party to achieve pregnancy. These programs are a vital option for individuals or couples who cannot use their own gametes due to medical reasons, age-related fertility decline, genetic concerns, or same-sex partnerships.",
        "​",
        "At Fertinest, our donor program is designed with the highest standards of confidentiality, medical screening, and ethical practice. All donors undergo comprehensive physical, psychological, and genetic screening. We work with a curated database of thoroughly vetted donors so you can find the match that feels right for your family."
      ]}
      rightForYouTitle="Are Donor Programs right for you?"
      rightForYouItems={[
        "Premature ovarian insufficiency or severely diminished ovarian reserve",
        "Repeated IVF failure with own eggs despite optimal protocols",
        "Genetic conditions that cannot be safely passed to a child",
        "Absence of retrievable sperm (azoospermia after failed surgical retrieval)",
        "Same-sex couples or single individuals building a family",
        "Couples considering embryo adoption as an ethical path to parenthood"
      ]}
      journeyTitle="The Donor Journey"
      journeySubtitle="A compassionate, confidential process guided by experienced specialists every step."
      timelineTitle="Donor Program Timeline at Fertinest – What to Expect"
      timelineIntro="The timeline varies depending on whether you are using egg, sperm, or embryo donation. Sperm donation cycles are most straightforward, while egg donation involves synchronising donor and recipient cycles. Our team guides you through every step with full transparency."
      timelinePhases={[
        {
          title: "Consultation & Matching Phase (Weeks 1–3)",
          description: "A detailed consultation with our fertility specialist to determine which type of donation is right for you. You are then given access to our donor database to review anonymised profiles based on physical characteristics, education, blood type, and interests.",
          timeCommitment: "1–2 consultations"
        },
        {
          title: "Donor Screening Phase (Concurrent)",
          description: "All donors undergo comprehensive screening including blood group, infectious disease tests (HIV, Hepatitis B & C, VDRL), genetic carrier screening, hormone profiling, psychological assessment, and physical examination.",
          timeCommitment: "Handled by our team — no additional visits for recipients"
        },
        {
          title: "Preparation & Synchronisation Phase (Weeks 3–5)",
          description: "For egg donation: recipient's uterine lining is prepared while donor undergoes ovarian stimulation — cycles are carefully synchronised. For sperm donation: selected from cryopreserved quarantined samples. For embryo donation: lining prepared for frozen embryo transfer.",
          timeCommitment: "3 to 4 monitoring visits (egg donation)"
        },
        {
          title: "Procedure Phase",
          description: "Egg donation: donor eggs retrieved and fertilised with partner's or donor sperm via ICSI. Embryos cultured for 3–5 days before transfer. Sperm donation: IUI or IVF/ICSI performed as appropriate. Embryo donation: frozen embryo thawed and transferred.",
          timeCommitment: "1 transfer visit (15–20 minutes)"
        }
      ]}
      timelineOverall={[
        "Sperm Donation IUI: 2–3 weeks from matching to insemination",
        "Egg Donation IVF: 4–8 weeks from matching to embryo transfer",
        "Embryo Donation: 3–4 weeks from matching to transfer",
        "All donors medically and psychologically screened to the highest standards",
        "Pregnancy success rate with donor eggs: 65–75% per transfer — highest in assisted reproduction"
      ]}
      footerOffset={3872}
    />
  );
}
