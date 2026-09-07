import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgLogoGraphic3 from "../../imports/Group7/33a9e540ef550c40ed9e368f8cbf4c7140399000.png";

type ServiceSection =
  | "female-infertility"
  | "male-infertility"
  | "fertility-treatments"
  | "minimal-access-surgery"
  | "high-risk-maternity";

const serviceContent: Record<ServiceSection, { title: string; items: Array<{ main: string; slug: string; sub?: string }> }> = {
  "female-infertility": {
    title: "Female Infertility Conditions",
    items: [
      { main: "PCOS / PCOD", slug: "pcos-pcod" },
      { main: "Low Ovarian Reserve", slug: "low-ovarian-reserve" },
      { main: "Tubal Blocks / Post Tubectomy", slug: "tubal-blocks" },
      { main: "Uterine Fibroids", slug: "uterine-fibroids" },
      { main: "Adenomyosis / Endometriosis", slug: "adenomyosis-endometriosis" },
      { main: "Uterine Septum / Uterine Malformations", slug: "uterine-malformations" },
      { main: "Hormonal Imbalance", slug: "hormonal-imbalance" },
      { main: "Recurrent Pregnancy Loss", slug: "recurrent-pregnancy-loss" },
    ],
  },
  "male-infertility": {
    title: "Male Infertility Conditions",
    items: [
      { main: "Low Sperm Count", slug: "low-sperm-count" },
      { main: "Sperm Motility Problems", slug: "sperm-motility" },
      { main: "Erectile Problems", slug: "erectile-problems" },
    ],
  },
  "fertility-treatments": {
    title: "Fertility Treatments",
    items: [
      { main: "Ovulation Induction", slug: "ovulation-induction" },
      { main: "Follicular Scan", slug: "follicular-scan" },
      { main: "IUI", slug: "iui", sub: "(Intrauterine Insemination)" },
      { main: "IVF", slug: "ivf", sub: "/ Test Tube Baby" },
      { main: "ICSI", slug: "icsi", sub: "(Intracytoplasmic Sperm Injection)" },
      { main: "Blastocyst Culture", slug: "blastocyst-culture" },
      { main: "TESA / PESA", slug: "pesa-tesa", sub: "(Surgical sperm retrieval)" },
      { main: "Genetic Screening", slug: "pgt", sub: "(PGT)" },
      { main: "Donor Programs", slug: "donor-programs", sub: "(Egg, Sperm, and Embryo)" },
      { main: "Fertility Preservation", slug: "egg-freezing", sub: "(Egg / Sperm / Embryo freezing)" },
    ],
  },
  "minimal-access-surgery": {
    title: "Minimal Access Surgery",
    items: [
      { main: "Hysteroscopic Surgeries", slug: "hysteroscopic-surgeries", sub: "(Uterine examination and treatment)" },
      { main: "Laparoscopic Surgery", slug: "laparoscopic-surgery", sub: "(Minimally invasive abdominal surgery)" },
      { main: "Laparoscopic Myomectomy", slug: "laparoscopic-myomectomy", sub: "(Fibroid removal)" },
      { main: "Ovarian Cyst Removal", slug: "ovarian-cyst-removal" },
      { main: "Diagnostic Laparoscopy", slug: "diagnostic-laparoscopy", sub: "(Investigation of pelvic conditions)" },
      { main: "Adhesiolysis", slug: "adhesiolysis", sub: "(Removal of scar tissue)" },
    ],
  },
  "high-risk-maternity": {
    title: "High Risk Maternity Care",
    items: [
      { main: "High-Risk Pregnancy Care", slug: "high-risk-pregnancy" },
      { main: "Antenatal Fetal Monitoring", slug: "antenatal-monitoring", sub: "(Scanning and baby's health tracking)" },
      { main: "Labour Analgesia", slug: "labour-analgesia", sub: "(Painless labor options)" },
      { main: "Normal Delivery", slug: "normal-delivery" },
      { main: "Cesarean Delivery (C-Section)", slug: "cesarean-delivery" },
    ],
  },
};

const navSections: Array<{ key: ServiceSection; label: string; icon: React.ReactNode }> = [
  {
    key: "female-infertility",
    label: "Female Infertility Conditions",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="5"/>
        <line x1="12" y1="13" x2="12" y2="21"/>
        <line x1="9" y1="18" x2="15" y2="18"/>
      </svg>
    ),
  },
  {
    key: "male-infertility",
    label: "Male Infertility Conditions",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="14" r="6"/>
        <line x1="14.5" y1="9.5" x2="21" y2="3"/>
        <polyline points="15 3 21 3 21 9"/>
      </svg>
    ),
  },
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
    key: "minimal-access-surgery",
    label: "Minimal Access Surgery",
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
  {
    key: "high-risk-maternity",
    label: "High Risk Maternity Care",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z"/>
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
  const navigate = useNavigate();

  if (!isOpen) return null;

  const content = serviceContent[activeSection];

  const handleTreatmentClick = (slug: string) => {
    onClose();
    navigate(`/treatments/${slug}`);
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
                  const active = activeSection === key;
                  return (
                    <div
                      key={key}
                      className={`cursor-pointer rounded-[10px] px-3 py-2.5 transition-all duration-200 ${
                        active ? "bg-white shadow-sm text-[#ab4a9c]" : "text-[#444] hover:text-[#ab4a9c]"
                      }`}
                      onMouseEnter={() => setActiveSection(key)}
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
                    const isClickable = true;  // every item now has a page
                    return (
                      <li
                        key={index}
                        className={`flex items-start gap-2.5 text-[15px] leading-[24px] group ${
                          isClickable ? "cursor-pointer" : ""
                        }`}
                        onClick={() => handleTreatmentClick(item.slug)}
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
