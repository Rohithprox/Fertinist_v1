import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BRANCHES } from "../../lib/branches";
import svgPaths from "../../../imports/HomePage/svg-vjjq4l2gti";

// The app-style tab bar from the Figma mobile artboard. It shipped inside
// HomepageMobile, which sits at left-[-1876px] off the canvas, so it has never
// been visible. Same icons and styling, but the fixed 390px width is now fluid
// and the tabs are real links.

const ACTIVE = "#650A76";
const IDLE = "#221823";

type Tab = {
  label: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  sheet?: boolean;
  viewBox: string;
  path: string;
  w: number;
  h: number;
  evenodd?: boolean;
};

const TABS: Tab[] = [
  { label: "Home", to: "/", viewBox: "0 0 16 18", path: svgPaths.p1820480, w: 16, h: 18 },
  {
    label: "Services",
    onClick: () => window.dispatchEvent(new CustomEvent("open-services-dropdown")),
    viewBox: "0 0 20 20", path: svgPaths.p2cccbbb0, w: 20, h: 20,
  },
  {
    label: "Tools", to: "/tools", viewBox: "0 0 20 20", w: 20, h: 20, evenodd: true,
    path:
      "M4 1h12a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2z" +
      "M5 3.5h10v3.5H5z" +
      "M5 9h2.2v2.2H5zM8.9 9h2.2v2.2H8.9zM12.8 9h2.2v2.2H12.8z" +
      "M5 12.9h2.2v2.2H5zM8.9 12.9h2.2v2.2H8.9zM12.8 12.9h2.2v2.2H12.8z",
  },
  { label: "Consult", sheet: true, viewBox: "0 0 18 20", path: svgPaths.p3c95900, w: 18, h: 20 },
];

export function MobileBottomNav() {
  const { pathname, hash } = useLocation();
  const [sheetOpen, setSheetOpen] = useState(false);

  const isActive = (t: Tab) =>
    t.to === "/" ? pathname === "/" && !hash : t.to ? pathname + hash === t.to : false;

  return (
    <>
    {sheetOpen && (
      <>
        <div className="lg:hidden fixed inset-0 z-[61] bg-black/30" onClick={() => setSheetOpen(false)} />
        <div
          className="lg:hidden fixed left-0 right-0 z-[62] bg-white rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_-6px_24px_rgba(0,0,0,0.18)] px-4 pt-4 pb-3"
          style={{ bottom: "var(--bottom-nav-h)" }}
        >
          <p className="font-['Manrope',sans-serif] font-bold text-[12px] tracking-[0.6px] uppercase text-[#943687] m-0 mb-2">
            Call a clinic
          </p>
          {BRANCHES.map((b) => (
            <a
              key={b.city}
              href={`tel:${b.dial}`}
              onClick={() => setSheetOpen(false)}
              className="flex items-center justify-between gap-3 py-3 no-underline border-b border-[rgba(167,75,153,0.10)] last:border-b-0"
            >
              <span className="flex flex-col min-w-0">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#221823] text-[15px] leading-tight">{b.city}</span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[#4f434f] text-[14px] leading-snug">{b.display}</span>
              </span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0288c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 8.09 8.09l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          ))}
        </div>
      </>
    )}
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white rounded-tl-[32px] rounded-tr-[32px] drop-shadow-[0px_-8px_20px_rgba(101,10,118,0.08)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      data-name="BottomNavBar"
    >
      <div className="flex items-stretch gap-[6px] px-[12px] pt-[12px] pb-[14px]">
        {TABS.map((t) => {
          const active = isActive(t);
          const color = active ? ACTIVE : IDLE;
          const inner = (
            <>
              <svg width={t.w} height={t.h} viewBox={t.viewBox} fill="none" className="shrink-0">
                <path d={t.path} fill={color} fillRule={t.evenodd ? "evenodd" : "nonzero"} />
              </svg>
              <span
                className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[11px] leading-[16.5px] pt-[4px] whitespace-nowrap"
                style={{ color }}
              >
                {t.label}
              </span>
            </>
          );
          // flex-1 rather than the artboard's fixed widths, so four tabs fit any phone
          const cls =
            "flex-1 min-w-0 flex flex-col items-center justify-center px-[6px] py-[8px] rounded-[32px] transition-colors " +
            (active ? "bg-[#ffeffc]" : "bg-transparent");

          if (t.sheet)
            return (
              <button key={t.label} type="button" onClick={() => setSheetOpen((o) => !o)} className={cls + " border-0 cursor-pointer"}>
                {inner}
              </button>
            );
          if (t.href) return <a key={t.label} href={t.href} className={cls}>{inner}</a>;
          if (t.onClick)
            return (
              <button key={t.label} type="button" onClick={t.onClick} className={cls + " border-0 cursor-pointer"}>
                {inner}
              </button>
            );
          return <Link key={t.label} to={t.to!} className={cls}>{inner}</Link>;
        })}
      </div>
    </nav>
    </>
  );
}
