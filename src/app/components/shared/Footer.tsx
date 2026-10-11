import { Link } from "react-router-dom";
import imgFertinestLogo from "../../../imports/HomePage/1aed5dd75bf09891e19f587c012f471fdb93ed82.png";
import imgPhone from "../../../imports/HomePage/f6ff35424cf3f566b22f601b5b2c71f39fb514d9.png";
import imgEmail from "../../../imports/HomePage/48e6a4e439e50ac0191d8b0b62687ccdc0bc6db0.png";
import { serviceContent } from "../ServicesDropdownInteractive";

// topOffset kept for backward-compat but no longer used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface FooterProps { topOffset?: number }

const JK = "font-['Plus_Jakarta_Sans',sans-serif]";
const HEAD = `${JK} font-semibold text-[#943687] text-[15px] sm:text-[16px] m-0`;
const ITEM = `${JK} text-[13.5px] sm:text-[14px] text-black m-0 hover:text-[#943687] transition-colors`;

// The five main service groups, straight from the dropdown's taxonomy. They
// have no page of their own, so a click opens the header dropdown on that
// group rather than navigating.
const SERVICE_GROUPS = Object.entries(serviceContent).map(([key, c]) => ({
  key,
  title: c.title,
}));

function openServices(section: string) {
  window.dispatchEvent(new CustomEvent("open-services-dropdown", { detail: { section } }));
}

const LOCATIONS = [
  { label: "Nellore", to: "/locations" },
  { label: "Ananthapur", to: "/locations" },
];

const RESOURCES = [
  { label: "Fertility Calculators", to: "/tools" },
  { label: "Blogs", to: "/resources" },
  { label: "About Us", to: "/about" },
];

export function Footer(_props: FooterProps = {}) {
  return (
    <footer className="bg-[#fff7fa] w-full">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[60px] pt-10 sm:pt-14 pb-6 sm:pb-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-10">

          {/* Logo + contact */}
          <div className="flex flex-col gap-5 lg:w-[260px] shrink-0">
            <Link to="/" className="inline-block">
              <img
                src={imgFertinestLogo}
                alt="Fertinest Logo"
                className="h-12 sm:h-14 w-auto object-contain object-left"
              />
            </Link>
            <div className="flex flex-col gap-3">
              <p className={HEAD}>Contact Us</p>
              <a href="tel:+919182039911" className="flex items-center gap-2.5 no-underline">
                <img src={imgPhone} alt="" className="w-[18px] h-[18px] object-contain shrink-0" />
                <span className={ITEM}>+91 9182039911</span>
              </a>
              <a href="mailto:mythrifertinest@gmail.com" className="flex items-center gap-2.5 no-underline">
                <img src={imgEmail} alt="" className="w-[18px] h-[18px] object-contain shrink-0" />
                <span className={`${ITEM} break-all`}>mythrifertinest@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 flex-1">
            <div className="flex flex-col gap-3 min-w-0">
              <p className={HEAD}>Services / Treatments</p>
              {SERVICE_GROUPS.map((g) => (
                <button
                  key={g.key}
                  type="button"
                  onClick={() => openServices(g.key)}
                  className={`${ITEM} text-left bg-transparent border-0 p-0 cursor-pointer`}
                >
                  {g.title}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 min-w-0">
              <p className={HEAD}>Locations</p>
              {LOCATIONS.map((l) => (
                <Link key={l.label} to={l.to} className={`${ITEM} no-underline`}>{l.label}</Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 min-w-0">
              <p className={HEAD}>Resources</p>
              {RESOURCES.map((r) => (
                <Link key={r.label} to={r.to} className={`${ITEM} no-underline`}>{r.label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full mb-5" style={{ height: "1px", background: "rgba(148,54,135,0.18)" }} />
        <p className={`${JK} font-medium text-[13px] sm:text-[14px] text-black text-center m-0`}>
          All Rights Reserved &copy; 2026, Mythri Fertinest | Imagined and Crafted By{" "}
          <span className="font-['Manrope',sans-serif] font-bold">TZYN Studio</span>
        </p>
      </div>
    </footer>
  );
}
