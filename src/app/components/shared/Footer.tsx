import { Link } from "react-router-dom";
import imgFertinestLogo from "../../../imports/HomePage/1aed5dd75bf09891e19f587c012f471fdb93ed82.png";
import imgPhone from "../../../imports/HomePage/f6ff35424cf3f566b22f601b5b2c71f39fb514d9.png";
import imgEmail from "../../../imports/HomePage/48e6a4e439e50ac0191d8b0b62687ccdc0bc6db0.png";

// topOffset kept for backward-compat but no longer used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface FooterProps { topOffset?: number }

export function Footer(_props: FooterProps = {}) {
  return (
    <footer className="bg-[#fff7fa] w-full">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[60px] pt-10 sm:pt-14 pb-6 sm:pb-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-10">

          {/* Logo + contact */}
          <div className="flex flex-col gap-5 lg:w-[260px] shrink-0">
            <img
              src={imgFertinestLogo}
              alt="Fertinest Logo"
              className="h-12 sm:h-14 w-auto object-contain object-left"
            />
            <div className="flex flex-col gap-3">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#943687] text-[16px] m-0">
                Contact Us
              </p>
              <div className="flex items-center gap-2.5">
                <img src={imgPhone} alt="" className="w-[18px] h-[18px] object-contain shrink-0" />
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-black m-0">
                  +91 9182039911
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <img src={imgEmail} alt="" className="w-[18px] h-[18px] object-contain shrink-0" />
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-black m-0">
                  mythrifertinest@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 flex-1">
            <div className="flex flex-col gap-3">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#943687] text-[16px] sm:text-[17px] m-0">
                Services / Treatments
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] sm:text-[15px] text-black m-0">
                Fertility Treatments
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] sm:text-[15px] text-black m-0">
                Infertility Conditions
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] sm:text-[15px] text-black m-0">
                Maternity &amp; Surgical Care
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#943687] text-[16px] sm:text-[17px] m-0">
                Locations
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] sm:text-[15px] text-black m-0">
                Nellore
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] sm:text-[15px] text-black m-0">
                Ananthapur
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#943687] text-[16px] sm:text-[17px] m-0">
                Resources
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] sm:text-[15px] text-black m-0">
                Fertility Calculators
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] sm:text-[15px] text-black m-0">
                Blogs
              </p>
              <Link to="/about" className="hover:opacity-70 transition-opacity">
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] sm:text-[15px] text-black m-0">
                  About Us
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full mb-5" style={{ height: "1px", background: "rgba(148,54,135,0.18)" }} />
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[13px] sm:text-[14px] text-black text-center m-0">
          All Rights Reserved &copy; 2026, Mythri Fertinest | Imagined and Crafted By{" "}
          <span className="font-['Manrope',sans-serif] font-bold">TZYN Studio</span>
        </p>
      </div>
    </footer>
  );
}
