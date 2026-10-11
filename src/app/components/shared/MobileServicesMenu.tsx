import { useState } from "react";
import { Link } from "react-router-dom";
import {
  navSections,
  serviceContent,
  type ServiceSection,
} from "../ServicesDropdownInteractive";

// Phones get an accordion inside the one menu panel, not the desktop mega-menu.
// The desktop version shows a category list and a content panel side by side,
// which on a phone stacked into two competing panels in ~400px.
//
// Services -> category -> treatment, one level revealed at a time.

export function MobileServicesMenu({
  onNavigate,
  initialSection = null,
}: {
  onNavigate: () => void;
  initialSection?: ServiceSection | null;
}) {
  const [openSection, setOpenSection] = useState<ServiceSection | null>(initialSection);

  return (
    <div className="flex flex-col bg-[#fdf4fb] rounded-[14px] overflow-hidden mb-2">
      {navSections.map(({ key, label, icon }) => {
        const open = openSection === key;
        const items = serviceContent[key].items;
        return (
          <div key={key} className="border-b border-[rgba(167,75,153,0.10)] last:border-b-0">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenSection(open ? null : key)}
              className="w-full flex items-center gap-3 px-4 py-3.5 bg-transparent border-0 cursor-pointer text-left"
            >
              <span
                className={`shrink-0 w-[30px] h-[30px] rounded-[8px] flex items-center justify-center transition-colors ${
                  open ? "bg-[#f0dded] text-[#ab4a9c]" : "bg-[rgba(0,0,0,0.04)] text-[#444]"
                }`}
              >
                {icon}
              </span>
              <span
                className={`flex-1 min-w-0 font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] leading-tight ${
                  open ? "text-[#ab4a9c]" : "text-[#221823]"
                }`}
              >
                {label}
              </span>
              <svg
                className="shrink-0 transition-transform duration-200"
                style={{ transform: open ? "rotate(90deg)" : "none" }}
                width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke={open ? "#ab4a9c" : "#8a8a95"} strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {open && (
              <ul className="list-none m-0 pl-[58px] pr-4 pb-3 pt-0 flex flex-col gap-0.5">
                {items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={`/treatments/${item.slug}`}
                      onClick={onNavigate}
                      className="block no-underline py-2.5 font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#943687] leading-snug active:opacity-60"
                    >
                      {item.main}
                      {item.sub && (
                        <span className="text-[#777] text-[12.5px]"> {item.sub}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
