import { Link } from "react-router-dom";
import imgFertinestLogo from "../../../imports/HomePage/1aed5dd75bf09891e19f587c012f471fdb93ed82.png";
import imgLogoGraphic from "../../../imports/HomePage/392bb1d5fd7fcaf85a6112904b7cac7f8418ffe1.png";
import imgPhone from "../../../imports/HomePage/f6ff35424cf3f566b22f601b5b2c71f39fb514d9.png";
import imgEmail from "../../../imports/HomePage/48e6a4e439e50ac0191d8b0b62687ccdc0bc6db0.png";

interface FooterProps {
  topOffset?: number;
}

export function Footer({ topOffset = 6217 }: FooterProps) {
  return (
    <div className="absolute contents left-0" data-name="Footer" style={{ top: `${topOffset}px` }}>
      <div className="absolute bg-[#fff7fa] h-[398px] left-0 w-[1440px]" style={{ top: `${topOffset}px` }} />
      <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans',sans-serif] font-medium h-[39px] leading-[0] left-[725px] text-[16px] text-black text-center w-[644px]" style={{ top: `${topOffset + 327}px` }}>
        <span className="leading-[16px]">{`All Rights Reserved Â© 2026, Mythri Fertinest | Imagined and Crafted By `}</span>
        <span className="font-['Manrope',sans-serif] font-bold leading-[16px]">TZYN Studio</span>
      </p>
      <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans',sans-serif] font-medium h-[31.554px] leading-[16.607px] left-[207.51px] text-[19.929px] text-black text-center tracking-[-0.2906px] w-[146.973px]" style={{ top: `${topOffset + 220.32}px` }}>+91 9182039911</p>
      <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans',sans-serif] font-semibold h-[31.554px] leading-[16.607px] left-[155.49px] text-[#943687] text-[19.929px] text-center tracking-[-0.2906px] w-[146.973px]" style={{ top: `${topOffset + 183}px` }}>Contact Us</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-semibold h-[32px] leading-[16.607px] left-[557px] text-[#943687] text-[21px] tracking-[-0.2906px] w-[252px]" style={{ top: `${topOffset + 61}px` }}>Services / Treatments</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-semibold h-[32px] leading-[16.607px] left-[868px] text-[#943687] text-[21px] tracking-[-0.2906px] w-[252px]" style={{ top: `${topOffset + 61}px` }}>Locations</p>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-semibold h-[32px] leading-[16.607px] left-[1062px] text-[#943687] text-[21px] tracking-[-0.2906px] w-[252px]" style={{ top: `${topOffset + 61}px` }}>Resources</p>
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[109px] leading-[0] left-[559px] text-[19.929px] text-black tracking-[-0.2906px] w-[252px]" style={{ top: `${topOffset + 93}px` }}>
        <p className="leading-[34px] mb-0">Fertility Treatments</p>
        <p className="leading-[34px] mb-0">Infertility Conditions</p>
        <p className="leading-[34px]">{`Maternity & Surgical Care`}</p>
      </div>
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[59px] leading-[0] left-[868px] text-[19.929px] text-black tracking-[-0.2906px] w-[125px]" style={{ top: `${topOffset + 93}px` }}>
        <p className="leading-[34px] mb-0">Nellore</p>
        <p className="leading-[34px]">Ananthapur</p>
      </div>
      <div className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[109px] leading-[0] left-[1062px] text-[19.929px] text-black tracking-[-0.2906px] w-[252px]" style={{ top: `${topOffset + 93}px` }}>
        <p className="leading-[34px] mb-0">Fertility Calculators</p>
        <p className="leading-[34px] mb-0">Blogs</p>
        <Link to="/about" className="hover:opacity-80 transition-opacity">
          <p className="leading-[34px]">About Us</p>
        </Link>
      </div>
      <p className="absolute font-['Plus_Jakarta_Sans',sans-serif] font-medium h-[32px] leading-[16.607px] left-[143px] text-[19.929px] text-black tracking-[-0.2906px] w-[275px]" style={{ top: `${topOffset + 254}px` }}>mythrifertinest@gmail.com</p>
      <div className="absolute h-[101.272px] left-[89px] w-[312.829px]" data-name="Fertinest Logo 2" style={{ top: `${topOffset + 37}px` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFertinestLogo} />
      </div>
      <div className="absolute flex h-[4.009px] items-center justify-center left-[503px] w-[775px]" style={{ top: `${topOffset + 244}px`, "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.3deg]">
          <div className="h-0 relative w-[775.01px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 775.01 1">
                <line id="Line 8" stroke="var(--stroke-0, #943687)" x2="775.01" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[220px] items-center justify-center left-[1318.88px] w-[130.068px]" style={{ top: `${topOffset + 178}px` }}>
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[220px] relative w-[130.068px]" data-name="Logo Graphic 2">
            <div className="absolute inset-0 opacity-17 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[117.23%] left-[-17.22%] max-w-none top-0 w-[117.31%]" src={imgLogoGraphic} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[27.402px] left-[99px] w-[32.384px]" data-name="Phone" style={{ top: `${topOffset + 217}px` }}>
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgPhone} />
      </div>
      <div className="absolute left-[104px] size-[24px]" data-name="Email" style={{ top: `${topOffset + 252}px` }}>
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgEmail} />
      </div>
    </div>
  );
}
