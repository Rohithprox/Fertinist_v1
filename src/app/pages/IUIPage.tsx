import { TreatmentPageTemplate } from "../components/TreatmentPageTemplate";
import imgHero from "../../imports/FertilityTreatments-4/62c7b9e907f92d9cee0468ccfe33cef4450180bb.png";

export function IUIPage() {
  return (
    <TreatmentPageTemplate
      treatmentName="IUI"
      treatmentSubtitle="Intrauterine Insemination (IUI) is a simple, minimally invasive fertility treatment that places specially prepared sperm directly into the uterus during ovulation, increasing the chances of conception."
      heroImage={imgHero}
      whatIsTitle="What is IUI?"
      whatIsDescription={[
        "​",
        "Intrauterine Insemination (IUI) is a fertility treatment where washed and concentrated sperm is placed directly into the uterus around the time of ovulation. This procedure helps increase the number of sperm that reach the fallopian tubes and subsequently increases the chance of fertilization.",
        "​",
        "At Fertinest, we use advanced sperm preparation techniques and precise ovulation tracking to optimize your chances of success. Our patient-friendly approach makes IUI an accessible first step for many couples on their fertility journey."
      ]}
      rightForYouTitle="Is IUI right for you?"
      rightForYouItems={[
        "Unexplained infertility with regular ovulation",
        "Mild male factor infertility (low sperm count or motility)",
        "Cervical factor infertility or cervical mucus issues",
        "Mild endometriosis (Stage I or II)",
        "Same-sex couples or single parents using donor sperm",
        "Couples seeking a less invasive first-line treatment"
      ]}
      journeyTitle="The IUI Journey"
      journeySubtitle="Three simple stages designed to maximize your chances of conception naturally."
      timelineTitle="IUI Timeline at Fertinest – What to Expect"
      timelineIntro="IUI is one of the least invasive fertility treatments with minimal time commitment. Understanding the timeline helps you plan your schedule accordingly. A typical IUI cycle takes about 2 to 3 weeks from start to finish."
      timelinePhases={[
        {
          title: "The Preparation Phase (Days 1–3)",
          description: "Your cycle begins with baseline ultrasound and blood tests to assess your ovarian reserve and hormone levels. Based on results, medications may be prescribed to stimulate follicle growth.",
          timeCommitment: "1 clinic visit"
        },
        {
          title: "The Monitoring Phase (Days 8–12)",
          description: "Regular ultrasound scans monitor follicle development. When follicles reach the optimal size, a trigger injection is given to induce ovulation within 36-40 hours.",
          timeCommitment: "2 to 3 short clinic visits"
        },
        {
          title: "The Insemination Phase (Day 14)",
          description: "On the day of ovulation, your partner provides a semen sample which is processed in our lab. The prepared sperm is then gently placed into your uterus through a thin catheter. The procedure is quick, painless, and takes only 5-10 minutes.",
          timeCommitment: "1 clinic visit, approximately 30 minutes"
        },
        {
          title: "The Waiting Phase (Days 14–28)",
          description: "After insemination, progesterone support may be prescribed. A pregnancy test is scheduled approximately 14 days after the procedure.",
          timeCommitment: "1 follow-up visit"
        }
      ]}
      timelineOverall={[
        "Natural IUI Cycle: Approximately 2 weeks (monitoring to insemination)",
        "Stimulated IUI Cycle: Approximately 2-3 weeks (medication to pregnancy test)",
        "Overall Clinic Visits: 4 to 5 visits per cycle"
      ]}
      footerOffset={3872}
    />
  );
}
