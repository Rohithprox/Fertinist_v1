import { Link } from "react-router-dom";
import { Header } from "./shared/Header";
import { Footer as SharedFooter } from "./shared/Footer";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface TimelinePhase {
  title: string;
  description: string;
  timeCommitment?: string;
}

interface TreatmentPageProps {
  treatmentName: string;
  treatmentSubtitle: string;
  heroImage: string;
  whatIsTitle: string;
  whatIsDescription: string[];
  rightForYouTitle: string;
  rightForYouItems: string[];
  journeyTitle: string;
  journeySubtitle: string;
  steps?: Step[];
  faqs?: FAQ[];
  timelineTitle: string;
  timelineIntro: string;
  timelinePhases: TimelinePhase[];
  timelineOverall: string[];
  footerOffset?: number;
}

const phaseAccents = ["#a74b99", "#0288c2", "#650a76", "#a74b99", "#0288c2"];

export function TreatmentPageTemplate({
  treatmentName,
  treatmentSubtitle,
  heroImage,
  whatIsTitle,
  whatIsDescription,
  rightForYouTitle,
  rightForYouItems,
  timelineTitle,
  timelineIntro,
  timelinePhases,
  timelineOverall,
}: TreatmentPageProps) {
  const cleanDescription = whatIsDescription.filter(
    (p) => p.trim() !== "​" && p.trim() !== "",
  );

  return (
    <div className="bg-white w-full">
      <Header />

      {/* ── Hero ── */}
      <div className="relative w-full pt-[130px] overflow-hidden" style={{ minHeight: "480px" }}>
        {/* Full background image */}
        <img
          src={heroImage}
          alt={treatmentName}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        {/* Content */}
        <div className="relative max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-[72px]">
          <div className="flex flex-col gap-[24px] max-w-[640px]">
            <div className="inline-flex flex-col items-start gap-[10px]">
              <h1
                className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.1] m-0"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {treatmentName}
              </h1>
              <div className="h-[2px] w-full rounded-full bg-[#650a76]" />
            </div>
            <p
              className="font-['Anek_Latin',sans-serif] text-[20px] leading-[30px] m-0 text-[#4f434f]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {treatmentSubtitle}
            </p>
            <div className="flex gap-[16px] mt-[8px] flex-wrap">
              <button
                className="font-['Manrope',sans-serif] font-bold text-[15px] px-[28px] py-[14px] rounded-full border-0 cursor-pointer transition-opacity hover:opacity-90 text-white"
                style={{ background: "linear-gradient(135deg, #a74b99, #650a76)" }}
              >
                Book a Consultation
              </button>
              <button
                className="font-['Manrope',sans-serif] font-bold text-[15px] px-[28px] py-[14px] rounded-full bg-transparent cursor-pointer transition-opacity hover:opacity-80"
                style={{ border: "2px solid #a74b99", color: "#a74b99" }}
              >
                Call 9182039911
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── What is [Treatment]? ── */}
      <div className="bg-[#ffeffc] w-full py-[80px]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-start">
            {/* Left: sticky heading */}
            <div className="w-full lg:w-[320px] shrink-0">
              <div className="inline-flex flex-col gap-[10px]">
                <h2
                  className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[40px] leading-[48px] m-0"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {whatIsTitle}
                </h2>
                <div className="h-[2px] w-full rounded-full bg-[#650a76]" />
              </div>

              {/* Decorative pill */}
              <div
                className="mt-[32px] inline-flex items-center gap-[10px] px-[16px] py-[10px] rounded-full"
                style={{
                  background: "rgba(167,75,153,0.1)",
                  border: "1px solid rgba(167,75,153,0.2)",
                }}
              >
                <div
                  className="w-[8px] h-[8px] rounded-full"
                  style={{ background: "#a74b99" }}
                />
                <span
                  className="font-['Manrope',sans-serif] font-bold text-[12px] tracking-[0.6px] uppercase"
                  style={{ color: "#a74b99" }}
                >
                  Expert Overview
                </span>
              </div>
            </div>

            {/* Right: paragraphs */}
            <div className="flex-1 flex flex-col gap-[20px]">
              {cleanDescription.map((para, i) => (
                <p
                  key={i}
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] text-[#221823] leading-[30px] m-0"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Is it right for you? ── */}
      <div className="bg-white w-full py-[80px]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
          <div className="flex flex-col items-center gap-[48px]">
            <div className="inline-flex flex-col items-center gap-[10px]">
              <h2
                className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[40px] leading-[48px] m-0 text-center"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {rightForYouTitle}
              </h2>
              <div className="h-[2px] w-full rounded-full bg-[#650a76]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] w-full max-w-[1040px]">
              {rightForYouItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-[16px] rounded-[16px] px-[24px] py-[22px] transition-all duration-200 hover:-translate-y-[2px]"
                  style={{
                    background: "#ffeffc",
                    border: "1px solid rgba(167,75,153,0.12)",
                    boxShadow: "0 2px 12px rgba(167,75,153,0.06)",
                  }}
                >
                  <div
                    className="shrink-0 w-[28px] h-[28px] rounded-full flex items-center justify-center mt-[1px]"
                    style={{
                      background: "linear-gradient(135deg, #a74b99, #650a76)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] text-[#221823] leading-[26px] m-0">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Timeline / Journey ── */}
      <div className="bg-[#ffeffc] w-full py-[80px]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
          {/* Heading */}
          <div className="flex flex-col items-center gap-[10px] mb-[16px]">
            <h2
              className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[40px] leading-[48px] m-0 text-center"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {timelineTitle}
            </h2>
            <div className="h-[2px] rounded-full bg-[#650a76] w-full max-w-[480px]" />
          </div>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] text-[#4f434f] leading-[28px] m-0 text-center max-w-[720px] mx-auto mb-[56px]">
            {timelineIntro}
          </p>

          {/* Phase cards */}
          <div className="flex flex-col gap-[20px] max-w-[900px] mx-auto mb-[40px]">
            {timelinePhases.map((phase, i) => {
              const accent = phaseAccents[i % phaseAccents.length];
              return (
                <div
                  key={i}
                  className="flex gap-[24px] items-start bg-white rounded-[20px] px-[32px] py-[28px]"
                  style={{
                    boxShadow: "0 2px 16px rgba(167,75,153,0.07)",
                    border: "1px solid rgba(167,75,153,0.08)",
                  }}
                >
                  {/* Step number */}
                  <div
                    className="shrink-0 w-[44px] h-[44px] rounded-full flex items-center justify-center font-['Manrope',sans-serif] font-bold text-[18px] text-white"
                    style={{ background: accent }}
                  >
                    {i + 1}
                  </div>

                  <div className="flex flex-col gap-[8px] flex-1">
                    <h3
                      className="font-['Manrope',sans-serif] font-bold text-[18px] m-0 leading-[26px]"
                      style={{ color: accent }}
                    >
                      {phase.title}
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-[#4f434f] leading-[26px] m-0">
                      {phase.description}
                    </p>
                    {phase.timeCommitment && (
                      <div className="flex items-center gap-[8px] mt-[6px]">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke={accent}
                            strokeWidth="1.5"
                          />
                          <path
                            d="M12 7v5l3.5 2"
                            stroke={accent}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span
                          className="font-['Manrope',sans-serif] font-bold text-[12px] tracking-[0.5px] uppercase"
                          style={{ color: accent }}
                        >
                          {phase.timeCommitment}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Overall timeline summary */}
          <div
            className="max-w-[900px] mx-auto rounded-[24px] px-[40px] py-[36px]"
            style={{
              background: "linear-gradient(135deg, #a74b99 0%, #650a76 100%)",
              boxShadow: "0 8px 32px rgba(167,75,153,0.25)",
            }}
          >
            <h3 className="font-['Manrope',sans-serif] font-bold text-white text-[20px] m-0 mb-[20px]">
              Overall Timeline
            </h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-[14px]">
              {timelineOverall.map((item, i) => (
                <li key={i} className="flex items-start gap-[12px]">
                  <span
                    className="font-bold text-[18px] leading-[24px] shrink-0"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    •
                  </span>
                  <span
                    className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-[24px]"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="bg-white w-full py-[72px]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
          <div
            className="rounded-[28px] px-6 sm:px-10 lg:px-[64px] py-10 lg:py-[56px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-[48px]"
            style={{
              background: "linear-gradient(135deg, #ffeffc 0%, #ffe0f8 100%)",
              border: "1px solid rgba(167,75,153,0.15)",
            }}
          >
            <div className="flex flex-col gap-[12px] max-w-[560px]">
              <h2
                className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[36px] leading-[44px] m-0"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Ready to start your journey?
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] text-[#4f434f] leading-[28px] m-0">
                Speak with our specialists and get a personalised treatment plan
                tailored to you.
              </p>
            </div>
            <div className="flex gap-[16px] shrink-0 flex-wrap">
              <button
                className="font-['Manrope',sans-serif] font-bold text-[15px] px-[32px] py-[16px] rounded-full text-white border-0 cursor-pointer transition-opacity hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, #a74b99 0%, #650a76 100%)",
                  boxShadow: "0 4px 20px rgba(167,75,153,0.30)",
                }}
              >
                Book a Consultation
              </button>
              <button
                className="font-['Manrope',sans-serif] font-bold text-[15px] px-[32px] py-[16px] rounded-full border-2 bg-transparent cursor-pointer transition-opacity hover:opacity-80"
                style={{ borderColor: "#a74b99", color: "#a74b99" }}
              >
                Call 9182039911
              </button>
            </div>
          </div>
        </div>
      </div>

      <SharedFooter />
    </div>
  );
}
