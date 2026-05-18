import { useState } from "react";
import { Link } from "react-router-dom";
import { ServicesDropdownInteractive } from "../ServicesDropdownInteractive";
import imgFertinestLogo from "../../../imports/HomePage/1aed5dd75bf09891e19f587c012f471fdb93ed82.png";
import imgPhone from "../../../imports/HomePage/ae80eef40c182e316b8185947a4106e808fe0d4c.png";

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
          height: "clamp(80px, 9.028vw, 130px)",
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

          {/* Phone icon + number */}
          <div style={{ position: "absolute", left: "76.736%", top: "clamp(24px, 3.125vw, 45px)", height: "clamp(32px, 3.472vw, 50px)", display: "flex", alignItems: "center", gap: "clamp(4px, 0.556vw, 8px)" }}>
            <img alt="" src={imgPhone} style={{ width: "clamp(14px, 1.667vw, 24px)", height: "clamp(14px, 1.667vw, 24px)", objectFit: "contain", flexShrink: 0, pointerEvents: "none" }} />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, color: "white", fontSize: "clamp(10px, 1.25vw, 18px)", letterSpacing: "-0.35px", whiteSpace: "nowrap" }}>
              9182039911
            </span>
          </div>
        </div>

        <ServicesDropdownInteractive isOpen={servicesOpen} onClose={() => setServicesOpen(false)} />
      </div>

      {/* ── Mobile header (< lg): logo + hamburger ── */}
      <div className="lg:hidden fixed left-0 top-0 z-[50] w-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.15)]">
        <div className="flex items-center justify-between px-5 h-[64px]">
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
          <div className="bg-white border-t border-[rgba(167,75,153,0.12)] px-5 py-2 flex flex-col">
            <button
              className="text-left w-full font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[16px] text-[#a74b99] py-3 border-b border-[rgba(167,75,153,0.08)] bg-transparent border-x-0 border-t-0 cursor-pointer"
              onClick={() => { setServicesOpen((o) => !o); }}
            >
              Services
            </button>
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
            <div className="flex items-center gap-2.5 py-4">
              <img src={imgPhone} alt="" className="w-[18px] h-[18px] object-contain shrink-0" />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#0288c2] text-[16px]">
                9182039911
              </span>
            </div>
          </div>
        )}

        <ServicesDropdownInteractive isOpen={servicesOpen} onClose={() => setServicesOpen(false)} />
      </div>
    </>
  );
}
