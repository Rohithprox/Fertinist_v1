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

const navSections: Array<{ key: ServiceSection; label: string; icon: React.ReactNode }> = [
  {
    key: "fertility-treatments",
    label: "Fertility Treatments",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    key: "infertility-conditions",
    label: "Infertility Conditions",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    key: "maternity-surgical-care",
    label: "Maternity & Surgical Care",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    key: "minimal-access-surgeries",
    label: "Minimal Access Surgeries",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <line x1="20" y1="4" x2="8.12" y2="15.88"/>
        <line x1="14.47" y1="14.48" x2="20" y2="20"/>
        <line x1="8.12" y1="8.12" x2="12" y2="12"/>
      </svg>
    ),
  },
];

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
    if (route) navigate(route);
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[60]" onClick={onClose} />

      {/* Dropdown panel */}
      <div className="absolute left-0 right-0 top-full z-[70] flex justify-center">
        <div className="w-full max-w-[1440px]">
          <div className="relative bg-[#ffeffc] shadow-[0px_6px_12px_-3px_rgba(0,0,0,0.06)]">
            <div className="relative flex items-start justify-center min-h-[360px] px-12 py-8">

              {/* Left nav — category tabs with icons */}
              <div className="w-[280px] flex flex-col gap-1 pt-1 shrink-0">
                {navSections.map(({ key, label, icon }) => {
                  const active = hoveredSection === key || activeSection === key;
                  return (
                    <div
                      key={key}
                      className={`cursor-pointer rounded-[10px] px-3 py-2.5 transition-all duration-200 ${
                        active ? "bg-white shadow-sm text-[#ab4a9c]" : "text-[#444] hover:text-[#ab4a9c]"
                      }`}
                      onMouseEnter={() => setHoveredSection(key)}
                      onMouseLeave={() => setHoveredSection(null)}
                      onClick={() => setActiveSection(key)}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`shrink-0 w-[30px] h-[30px] rounded-[8px] flex items-center justify-center transition-colors duration-200 ${
                          active ? "bg-[#f0dded]" : "bg-[rgba(0,0,0,0.04)]"
                        }`}>
                          {icon}
                        </div>
                        <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-semibold leading-tight">
                          {label}
                        </span>
                        {active && (
                          <svg className="ml-auto shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0287C6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right content — service items */}
              <div className="flex-1 bg-white rounded-[16px] shadow-[0px_2px_6px_rgba(0,0,0,0.06)] p-7 ml-6 max-w-[680px]">
                <p className="font-['Manrope',sans-serif] font-bold text-[13px] tracking-[0.6px] uppercase text-[#0287C6] mb-4">
                  {content.title}
                </p>
                <ul className="space-y-3">
                  {content.items.map((item, index) => {
                    const isClickable =
                      displaySection === "fertility-treatments" &&
                      ["IVF", "IUI", "ICSI", "Egg / Sperm / Embryo Freezing", "Donor Programs", "Surgical Sperm Retrieval"].includes(item.main);
                    return (
                      <li
                        key={index}
                        className={`flex items-start gap-2.5 text-[15px] leading-[24px] group ${
                          isClickable ? "cursor-pointer" : ""
                        }`}
                        onClick={isClickable ? () => handleTreatmentClick(item.main) : undefined}
                      >
                        <svg
                          className={`mt-1 shrink-0 transition-colors duration-150 ${isClickable ? "group-hover:stroke-[#650a76]" : ""}`}
                          width="13" height="13" viewBox="0 0 24 24" fill="none"
                          stroke="#943687" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6"/>
                        </svg>
                        <div>
                          <span className={`font-['Plus_Jakarta_Sans',sans-serif] text-[#943687] font-medium transition-colors duration-150 ${isClickable ? "group-hover:text-[#650a76] group-hover:underline underline-offset-2" : ""}`}>
                            {item.main}
                          </span>
                          {item.sub && (
                            <>
                              {" "}
                              <span className="text-[#666] font-['Plus_Jakarta_Sans',sans-serif]">
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

              {/* Decorative logo */}
              <div className="absolute right-12 top-8 opacity-[0.04] pointer-events-none">
                <img src={imgLogoGraphic3} alt="" className="w-[140px] h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
