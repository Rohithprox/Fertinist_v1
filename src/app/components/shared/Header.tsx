import { useState } from "react";
import { Link } from "react-router-dom";
import { ServicesDropdownInteractive } from "../ServicesDropdownInteractive";
import imgFertinestLogo from "../../../imports/HomePage/1aed5dd75bf09891e19f587c012f471fdb93ed82.png";
import imgPhone from "../../../imports/HomePage/ae80eef40c182e316b8185947a4106e808fe0d4c.png";

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-[50] w-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)]">
      {/* Main bar */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[60px] h-[70px] lg:h-[80px] flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="h-[42px] lg:h-[52px] shrink-0 hover:opacity-80 transition-opacity"
          onClick={() => { setServicesOpen(false); setMobileOpen(false); }}
        >
          <img
            src={imgFertinestLogo}
            alt="Fertinest Logo"
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-[36px] bg-[#a74b99] rounded-full px-[28px] h-[46px] font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[16px] text-white tracking-[-0.3px]">
          <button
            className="hover:opacity-80 transition-opacity bg-transparent border-0 text-white font-inherit text-[16px] cursor-pointer p-0 font-['Plus_Jakarta_Sans',sans-serif] font-medium tracking-[-0.3px]"
            onClick={() => setServicesOpen((o) => !o)}
          >
            Services
          </button>
          <Link to="/locations" className="hover:opacity-80 transition-opacity" onClick={() => setServicesOpen(false)}>
            Locations
          </Link>
          <Link to="/about" className="hover:opacity-80 transition-opacity" onClick={() => setServicesOpen(false)}>
            About Us
          </Link>
          <Link to="/resources" className="hover:opacity-80 transition-opacity" onClick={() => setServicesOpen(false)}>
            Resources
          </Link>
          <Link to="/tools" className="hover:opacity-80 transition-opacity" onClick={() => setServicesOpen(false)}>
            Tools
          </Link>
        </nav>

        {/* Phone — desktop */}
        <div className="hidden lg:flex items-center gap-[8px] bg-[#0288c2] rounded-full px-[20px] h-[46px]">
          <img src={imgPhone} alt="" className="w-[20px] h-[20px] object-contain shrink-0" />
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-white text-[16px] tracking-[-0.3px]">
            9182039911
          </span>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-0 cursor-pointer"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-[22px] h-[2px] rounded-full transition-all duration-200"
            style={{
              background: "#a74b99",
              transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <span
            className="block w-[22px] h-[2px] rounded-full transition-all duration-200"
            style={{
              background: "#a74b99",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-[22px] h-[2px] rounded-full transition-all duration-200"
            style={{
              background: "#a74b99",
              transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[rgba(167,75,153,0.12)] px-5 py-4 flex flex-col gap-0">
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
          <div className="flex items-center gap-2.5 pt-4">
            <img src={imgPhone} alt="" className="w-[18px] h-[18px] object-contain shrink-0" />
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#0288c2] text-[16px]">
              9182039911
            </span>
          </div>
        </div>
      )}

      {/* Services mega-dropdown */}
      <ServicesDropdownInteractive
        isOpen={servicesOpen}
        onClose={() => setServicesOpen(false)}
      />
    </header>
  );
}
