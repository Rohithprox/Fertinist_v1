import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ServicesDropdownInteractive } from "../ServicesDropdownInteractive";
import { MobileServicesMenu } from "./MobileServicesMenu";
import imgFertinestLogo from "../../../imports/HomePage/1aed5dd75bf09891e19f587c012f471fdb93ed82.png";

// Both branches, so the Contact button can offer a choice instead of silently
// dialling one. Nellore's number is the one used across the site; if Anantapur
// has its own line, change it here and it updates every surface.
const BRANCHES = [
  { city: "Nellore", display: "+91 91820 39911", dial: "+919182039911" },
  { city: "Anantapur", display: "+91 951555 3093", dial: "+919515553093" },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="flex flex-col justify-center gap-[5px] w-[22px] cursor-pointer">
      <span className="block h-[2px] rounded-full bg-[#a74b99] transition-all duration-200"
        style={{ transform: open ? "rotate(45deg) translateY(7px)" : "none" }} />
      <span className="block h-[2px] rounded-full bg-[#a74b99] transition-all duration-200"
        style={{ opacity: open ? 0 : 1 }} />
      <span className="block h-[2px] rounded-full bg-[#a74b99] transition-all duration-200"
        style={{ transform: open ? "rotate(-45deg) translateY(-7px)" : "none" }} />
    </div>
  );
}

// All values expressed as clamp(mobile, vw, desktop) so layout scales
// proportionally from any small screen up to 1440 px.
// Horizontal positions use % so they stay proportional at any width.

function Frame({ onServicesClick }: { onServicesClick: () => void }) {
  const linkStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    height: "100%",
    position: "relative",
    flexShrink: 0,
    opacity: 1,
    transition: "opacity 0.15s",
    textDecoration: "none",
    color: "white",
  };
  const btnStyle: React.CSSProperties = {
    ...linkStyle,
    background: "transparent",
    border: 0,
    cursor: "pointer",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 500,
    color: "white",
    padding: 0,
    fontSize: "inherit",
    letterSpacing: "inherit",
  };

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 500,
        gap: "clamp(14px, 3.056vw, 44px)",
        alignItems: "center",
        justifyContent: "center",
        left: "31.736%",
        width: "clamp(200px, 42.361vw, 610px)",
        height: "clamp(28px, 3.472vw, 50px)",
        top: "clamp(16px, 3.125vw, 45px)",
        fontSize: "clamp(9px, 1.181vw, 17px)",
        color: "white",
        whiteSpace: "nowrap",
        letterSpacing: "-0.35px",
        lineHeight: 0,
      }}
    >
      <button style={btnStyle} onClick={onServicesClick}>
        <p style={{ lineHeight: "20px", margin: 0 }}>Services</p>
      </button>
      <Link to="/locations" style={linkStyle}>
        <p style={{ lineHeight: "20px", margin: 0 }}>Locations</p>
      </Link>
      <Link to="/about" style={linkStyle}>
        <p style={{ lineHeight: "20px", margin: 0 }}>About Us</p>
      </Link>
      <Link to="/resources" style={linkStyle}>
        <p style={{ lineHeight: "20px", margin: 0 }}>Resources</p>
      </Link>
      <Link to="/tools" style={linkStyle}>
        <p style={{ lineHeight: "20px", margin: 0 }}>Tools</p>
      </Link>
    </div>
  );
}

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // the mobile tab bar and the footer categories ask the header to open its
  // dropdown; the footer also names which section to show
  const [requestedSection, setRequestedSection] = useState<string | null>(null);
  useEffect(() => {
    const open = (e: Event) => {
      const section = (e as CustomEvent).detail?.section ?? null;
      setRequestedSection(section);
      setServicesOpen(true);
      setMobileOpen(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("open-services-dropdown", open);
    return () => window.removeEventListener("open-services-dropdown", open);
  }, []);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Desktop header (lg+): original pill design, fully scaled ── */}
      <div
        data-name="Header"
        className="hidden lg:block"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 50,
          width: "100%",
          height: "var(--header-h)",
        }}
      >
        <div style={{ position: "absolute", background: "white", height: "100%", left: 0, width: "100%", boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.15)" }} />

        <div style={{ position: "relative", width: "100%", maxWidth: "1440px", margin: "0 auto", height: "100%" }}>
          {/* Logo */}
          <Link to="/" onClick={() => setServicesOpen(false)} style={{ position: "absolute", height: "clamp(40px, 4.861vw, 70px)", left: "4.097%", top: "clamp(14px, 2.083vw, 30px)", width: "clamp(120px, 14.931vw, 215px)", display: "block" }}>
            <img alt="Fertinest Logo" src={imgFertinestLogo} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
          </Link>

          {/* Blue pill */}
          <div style={{ position: "absolute", background: "#0288c2", height: "clamp(32px, 3.472vw, 50px)", left: "68.403%", borderRadius: "100px", top: "clamp(24px, 3.125vw, 45px)", width: "clamp(180px, 20.833vw, 300px)" }} />

          {/* Purple pill */}
          <div style={{ position: "absolute", background: "#a74b99", height: "clamp(32px, 3.472vw, 50px)", left: "31.736%", borderRadius: "100px", top: "clamp(24px, 3.125vw, 45px)", width: "clamp(220px, 42.361vw, 610px)" }} />

          {/* Nav links */}
          <Frame onServicesClick={() => setServicesOpen((o) => !o)} />

          {/* Phone icon + Contact (opens the branch picker) */}
          <button
            type="button"
            onClick={() => setContactOpen((o) => !o)}
            aria-expanded={contactOpen}
            style={{ position: "absolute", left: "calc(31.736% + clamp(220px, 42.361vw, 610px))", right: "calc(31.597% - clamp(180px, 20.833vw, 300px) + 10px)", top: "clamp(24px, 3.125vw, 45px)", height: "clamp(32px, 3.472vw, 50px)", display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(4px, 0.556vw, 8px)", background: "transparent", border: 0, padding: 0, cursor: "pointer" }}
          >
            <svg style={{ width: "clamp(14px, 1.667vw, 24px)", height: "clamp(14px, 1.667vw, 24px)", flexShrink: 0, display: "block" }} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 8.09 8.09l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, color: "white", fontSize: "clamp(9px, 1.181vw, 17px)", letterSpacing: "-0.35px", whiteSpace: "nowrap" }}>
              Contact
            </span>
          </button>

          {contactOpen && (
            <>
              <div className="fixed inset-0 z-[65]" onClick={() => setContactOpen(false)} />
              <div
                className="absolute z-[70] bg-white rounded-[14px] shadow-[0px_8px_24px_rgba(0,0,0,0.14)] py-2 min-w-[230px]"
                style={{ left: "74%", top: "calc(clamp(24px, 3.125vw, 45px) + clamp(32px, 3.472vw, 50px) + 8px)" }}
              >
                {BRANCHES.map((b) => (
                  <a
                    key={b.city}
                    href={`tel:${b.dial}`}
                    onClick={() => setContactOpen(false)}
                    className="flex flex-col px-4 py-2.5 no-underline hover:bg-[#fdf4fb] transition-colors"
                  >
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#943687] text-[13px] leading-tight">
                      {b.city}
                    </span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[#221823] text-[15px] leading-snug">
                      {b.display}
                    </span>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>

        <ServicesDropdownInteractive isOpen={servicesOpen} onClose={() => setServicesOpen(false)} requestedSection={requestedSection as never} />
      </div>

      {/* ── Mobile header (< lg): logo + hamburger ── */}
      <div className="lg:hidden fixed left-0 top-0 z-[50] w-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.15)]">
        <div className="flex items-center justify-between px-5" style={{ height: "var(--header-h)" }}>
          <Link to="/" className="h-[38px] block" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>
            <img alt="Fertinest Logo" src={imgFertinestLogo} className="h-full w-auto object-contain" />
          </Link>
          <button
            className="p-2 bg-transparent border-0 cursor-pointer"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div
            className="bg-white border-t border-[rgba(167,75,153,0.12)] px-5 py-2 flex flex-col overflow-y-auto overscroll-contain"
            style={{ maxHeight: "calc(100vh - var(--header-h) - var(--bottom-nav-h))" }}
          >
            <button
              aria-expanded={servicesOpen}
              className="flex items-center justify-between w-full font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[16px] text-[#a74b99] py-3 border-b border-[rgba(167,75,153,0.08)] bg-transparent border-x-0 border-t-0 cursor-pointer text-left"
              onClick={() => { setServicesOpen((o) => !o); }}
            >
              Services
              <svg
                className="transition-transform duration-200"
                style={{ transform: servicesOpen ? "rotate(90deg)" : "none" }}
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="#a74b99" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pt-2">
                <MobileServicesMenu
                  key={requestedSection ?? "none"}
                  initialSection={requestedSection as never}
                  onNavigate={() => { setMobileOpen(false); setServicesOpen(false); }}
                />
              </div>
            )}
            {[
              { to: "/locations", label: "Locations" },
              { to: "/about", label: "About Us" },
              { to: "/resources", label: "Resources" },
              { to: "/tools", label: "Tools" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[16px] text-[#221823] py-3 border-b border-[rgba(167,75,153,0.08)] hover:text-[#a74b99] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="flex flex-col gap-1 py-3">
              {BRANCHES.map((b) => (
                <a
                  key={b.city}
                  href={`tel:${b.dial}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5 py-2 no-underline"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0288c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 8.09 8.09l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#0288c2] text-[15px]">
                    {b.city} &mdash; {b.display}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </>
  );
}
