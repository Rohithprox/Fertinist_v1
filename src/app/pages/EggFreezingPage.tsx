import { TreatmentPageTemplate } from "../components/TreatmentPageTemplate";
import imgHero from "../../imports/FertilityTreatments-4/62c7b9e907f92d9cee0468ccfe33cef4450180bb.png";

export function EggFreezingPage() {
  return (
    <TreatmentPageTemplate
      treatmentName="Egg Freezing"
      treatmentSubtitle="Preserve your fertility and take control of your reproductive timeline. Our advanced vitrification technology ensures your eggs are safely stored until you're ready to start your family."
      heroImage={imgHero}
      whatIsTitle="What is Egg Freezing?"
      whatIsDescription={[
        "​",
        "Egg freezing, also known as oocyte cryopreservation, is a process where a woman's eggs are extracted, frozen, and stored for future use. This allows you to preserve your fertility at its current state, giving you the option to conceive later in life when the time is right for you.",
        "​",
        "At Fertinest, we use the latest vitrification (rapid freezing) technology, which has dramatically improved egg survival rates to over 95%. Our state-of-the-art cryostorage facility ensures your eggs are safely preserved for years, maintaining their quality until you're ready to use them."
      ]}
      rightForYouTitle="Is Egg Freezing right for you?"
      rightForYouItems={[
        "Career-focused individuals wanting to delay parenthood",
        "Women under 38 seeking to preserve fertility potential",
        "Medical reasons (upcoming cancer treatment or surgery)",
        "Family history of early menopause or diminished ovarian reserve",
        "Not yet ready for parenthood but want future options",
        "Personal choice to preserve reproductive autonomy"
      ]}
      journeyTitle="The Egg Freezing Journey"
      journeySubtitle="Four focused stages to preserve your fertility for the future."
      timelineTitle="Egg Freezing Timeline at Fertinest – What to Expect"
      timelineIntro="Egg freezing is a proactive step that gives you reproductive freedom. The entire process takes about 2 to 3 weeks from consultation to freezing, with minimal disruption to your daily routine."
      timelinePhases={[
        {
          title: "The Consultation Phase (Week 1)",
          description: "Initial fertility assessment including ovarian reserve testing (AMH blood test and antral follicle count). We discuss your goals, timeline, and create a personalized treatment plan based on your age and ovarian reserve.",
          timeCommitment: "1 comprehensive consultation"
        },
        {
          title: "The Stimulation Phase (Weeks 2–3)",
          description: "Daily hormone injections for 10-12 days to stimulate your ovaries to produce multiple mature eggs. Regular monitoring through ultrasound scans and blood tests tracks follicle development and ensures optimal timing.",
          timeCommitment: "3 to 4 short monitoring visits"
        },
        {
          title: "The Retrieval Phase (End of Week 3)",
          description: "A minor surgical procedure under light sedation to collect the eggs. The 20-minute procedure is performed using ultrasound guidance. Most women return to normal activities within 1-2 days.",
          timeCommitment: "Half-day clinic visit"
        },
        {
          title: "The Freezing Phase (Same Day as Retrieval)",
          description: "Immediately after retrieval, mature eggs are identified and frozen using vitrification technology. Each egg is carefully prepared and stored in our secure cryostorage facility where they can remain safely preserved for years.",
          timeCommitment: "Laboratory procedure (no additional visit required)"
        }
      ]}
      timelineOverall={[
        "Complete Egg Freezing Cycle: Approximately 2-3 weeks",
        "Overall Clinic Visits: 5 to 6 visits total",
        "Recovery Time: 1-2 days of rest recommended after retrieval",
        "Storage: Eggs can be safely stored for 10+ years without quality degradation",
        "Recommended Age: Best outcomes when done before age 35, though we successfully freeze eggs for women up to age 42"
      ]}
      footerOffset={3872}
    />
  );
}
