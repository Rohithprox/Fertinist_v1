import { Link, useLocation } from "react-router-dom";
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
  { label: "Consult", href: "tel:+919182039911", viewBox: "0 0 18 20", path: svgPaths.p3c95900, w: 18, h: 20 },
];

export function MobileBottomNav() {
  const { pathname, hash } = useLocation();

  const isActive = (t: Tab) =>
    t.to === "/" ? pathname === "/" && !hash : t.to ? pathname + hash === t.to : false;

  return (
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
  );
}
