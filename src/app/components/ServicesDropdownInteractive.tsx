import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgLogoGraphic3 from "../../imports/Group7/33a9e540ef550c40ed9e368f8cbf4c7140399000.png";

type ServiceSection =
  | "fertility-treatments"
  | "infertility-conditions"
  | "maternity-surgical-care"
  | "minimal-access-surgeries";

const serviceContent: Record<ServiceSection, { title: string; items: Array<{ main: string; sub?: string }> }> = {
  "fertility-treatments": {
    title: "Fertility Treatments",
    items: [
      { main: "IVF", sub: "/ Test Tube Baby" },
      { main: "IUI", sub: "(Intrauterine Insemination)" },
      { main: "ICSI", sub: "(Intracytoplasmic Sperm Injection)" },
      { main: "Donor Programs", sub: "(Egg, Sperm, and Embryo)" },
      { main: "Egg / Sperm / Embryo Freezing", sub: "(Cryopreservation)" },
      { main: "Male Infertility Treatment" },
      { main: "Surgical Sperm Retrieval", sub: "(TESA, PESA, mTESE)" },
      { main: "Tubal Recanalization", sub: "(Reversing a tubectomy)" },
      { main: "Laparotomy, Laparoscopy & Hysteroscopy", sub: "(Surgical fertility enhancement)" },
    ],
  },
  "infertility-conditions": {
    title: "Infertility Conditions",
    items: [
      { main: "Uterus & Ovarian Management", sub: "(PCOS, PCOD, Endometriosis)" },
      { main: "Recurrent Pregnancy Loss Care", sub: "(Special care for recurrent abortions)" },
      { main: "High-Risk Pregnancy Care" },
      { main: "Preconceptional Counseling" },
      { main: "Couple & Fertility Counseling" },
      { main: "Cancer Screening", sub: "(Preventative reproductive health)" },
    ],
  },
  "maternity-surgical-care": {
    title: "Maternity & Surgical Care",
    items: [
      { main: "Normal Delivery" },
      { main: "Cesarean Delivery (C-Section)" },
      { main: "Labour Analgesia", sub: "(Painless labor options)" },
      { main: "Antenatal Fetal Monitoring", sub: "(Scanning and baby's health tracking)" },
      { main: "Tubectomy", sub: "(Permanent family planning)" },
    ],
  },
  "minimal-access-surgeries": {
    title: "Minimal Access Surgeries",
    items: [
      { main: "Laparoscopic Surgery", sub: "(Minimally invasive abdominal surgery)" },
      { main: "Hysteroscopy", sub: "(Uterine examination and treatment)" },
      { main: "Laparoscopic Myomectomy", sub: "(Fibroid removal)" },
      { main: "Ovarian Cyst Removal" },
      { main: "Diagnostic Laparoscopy", sub: "(Investigation of pelvic conditions)" },
      { main: "Adhesiolysis", sub: "(Removal of scar tissue)" },
    ],
  },
};

interface ServicesDropdownInteractiveProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ServicesDropdownInteractive({ isOpen, onClose }: ServicesDropdownInteractiveProps) {
  const [activeSection, setActiveSection] = useState<ServiceSection>("fertility-treatments");
  const [hoveredSection, setHoveredSection] = useState<ServiceSection | null>(null);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const displaySection = hoveredSection || activeSection;
  const content = serviceContent[displaySection];

  const handleTreatmentClick = (treatment: string) => {
    onClose();
    const routes: Record<string, string> = {
      "IVF": "/treatments/ivf",
      "IUI": "/treatments/iui",
      "ICSI": "/treatments/icsi",
      "Egg / Sperm / Embryo Freezing": "/treatments/egg-freezing",
      "Donor Programs": "/treatments/donor-programs",
      "Surgical Sperm Retrieval": "/treatments/pesa-tesa",
    };
    const route = routes[treatment];
    if (route) {
      navigate(route);
    }
  };

  return (
    <>
      {/* Transparent Backdrop - click to close */}
      <div
        className="fixed inset-0 z-[60]"
        onClick={onClose}
      />

      {/* Integrated Section - flows with the page */}
      <div className="absolute left-0 right-0 top-[116px] z-[70] flex justify-center">
        <div className="w-full max-w-[1440px]">
          {/* Main Section - matches page style */}
          <div className="relative bg-[#ffeffc] shadow-[0px_6px_12px_-3px_rgba(0,0,0,0.06)]">
            <div className="relative flex items-start justify-center min-h-[360px] px-12 py-8">

              {/* Left Navigation */}
              <div className="w-[280px] flex flex-col gap-4 pt-1">
                {/* Fertility Treatments */}
                <div
                  className={`cursor-pointer transition-colors duration-200 ${
                    (hoveredSection === "fertility-treatments" || activeSection === "fertility-treatments")
                      ? "text-[#ab4a9c]"
                      : "text-black"
                  }`}
                  onMouseEnter={() => setHoveredSection("fertility-treatments")}
                  onMouseLeave={() => setHoveredSection(null)}
                  onClick={() => setActiveSection("fertility-treatments")}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`h-6 w-1 rounded-full transition-all duration-200 ${
                      (hoveredSection === "fertility-treatments" || activeSection === "fertility-treatments")
                        ? "bg-[#0287C6]"
                        : "bg-transparent"
                    }`} />
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-tight">
                      Fertility Treatments
                    </span>
                  </div>
                </div>

                {/* Infertility Conditions */}
                <div
                  className={`cursor-pointer transition-colors duration-200 ${
                    (hoveredSection === "infertility-conditions" || activeSection === "infertility-conditions")
                      ? "text-[#ab4a9c]"
                      : "text-black"
                  }`}
                  onMouseEnter={() => setHoveredSection("infertility-conditions")}
                  onMouseLeave={() => setHoveredSection(null)}
                  onClick={() => setActiveSection("infertility-conditions")}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`h-6 w-1 rounded-full transition-all duration-200 ${
                      (hoveredSection === "infertility-conditions" || activeSection === "infertility-conditions")
                        ? "bg-[#0287C6]"
                        : "bg-transparent"
                    }`} />
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-tight">
                      Infertility Conditions
                    </span>
                  </div>
                </div>

                {/* Maternity & Surgical Care */}
                <div
                  className={`cursor-pointer transition-colors duration-200 ${
                    (hoveredSection === "maternity-surgical-care" || activeSection === "maternity-surgical-care")
                      ? "text-[#ab4a9c]"
                      : "text-black"
                  }`}
                  onMouseEnter={() => setHoveredSection("maternity-surgical-care")}
                  onMouseLeave={() => setHoveredSection(null)}
                  onClick={() => setActiveSection("maternity-surgical-care")}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`h-6 w-1 rounded-full transition-all duration-200 ${
                      (hoveredSection === "maternity-surgical-care" || activeSection === "maternity-surgical-care")
                        ? "bg-[#0287C6]"
                        : "bg-transparent"
                    }`} />
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-tight">
                      Maternity & Surgical Care
                    </span>
                  </div>
                </div>

                {/* Minimal Access Surgeries */}
                <div
                  className={`cursor-pointer transition-colors duration-200 ${
                    (hoveredSection === "minimal-access-surgeries" || activeSection === "minimal-access-surgeries")
                      ? "text-[#ab4a9c]"
                      : "text-black"
                  }`}
                  onMouseEnter={() => setHoveredSection("minimal-access-surgeries")}
                  onMouseLeave={() => setHoveredSection(null)}
                  onClick={() => setActiveSection("minimal-access-surgeries")}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`h-6 w-1 rounded-full transition-all duration-200 ${
                      (hoveredSection === "minimal-access-surgeries" || activeSection === "minimal-access-surgeries")
                        ? "bg-[#0287C6]"
                        : "bg-transparent"
                    }`} />
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-tight">
                      Minimal Access Surgeries
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Content - White Card */}
              <div className="flex-1 bg-white rounded-[16px] shadow-[0px_2px_6px_rgba(0,0,0,0.06)] p-7 ml-10 max-w-[680px]">
                <ul className="space-y-3">
                  {content.items.map((item, index) => {
                    const isClickable = displaySection === "fertility-treatments" &&
                      (item.main === "IVF" || item.main === "IUI" || item.main === "ICSI" || item.main === "Egg / Sperm / Embryo Freezing" || item.main === "Donor Programs" || item.main === "Surgical Sperm Retrieval");
                    return (
                      <li
                        key={index}
                        className={`flex items-start gap-2.5 text-[15px] leading-[24px] ${
                          isClickable ? "cursor-pointer hover:opacity-70 transition-opacity" : ""
                        }`}
                        onClick={isClickable ? () => handleTreatmentClick(item.main) : undefined}
                      >
                        <span className="text-[#943687] mt-0.5">â€¢</span>
                        <div>
                          <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[#943687]">
                            {item.main}
                          </span>
                          {item.sub && (
                            <>
                              {" "}
                              <span className="text-black font-['Plus_Jakarta_Sans',sans-serif]">
                                {item.sub}
                              </span>
                            </>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Decorative Logo */}
              <div className="absolute right-12 top-8 opacity-4 pointer-events-none">
                <img src={imgLogoGraphic3} alt="" className="w-[140px] h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
