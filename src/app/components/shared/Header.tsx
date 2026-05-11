import { Link } from "react-router-dom";
import imgFertinestLogo from "../../../imports/HomePage/1aed5dd75bf09891e19f587c012f471fdb93ed82.png";
import imgPhone from "../../../imports/HomePage/ae80eef40c182e316b8185947a4106e808fe0d4c.png";

function Frame() {
  return (
    <div className="absolute flex font-['Plus_Jakarta_Sans',sans-serif] font-medium gap-[44px] items-center justify-center leading-[0] left-[457px] w-[610px] h-[50px] text-[17px] text-white top-[45px] tracking-[-0.35px] whitespace-nowrap">
      <Link to="/" className="flex items-center h-full relative shrink-0 hover:opacity-80 transition-opacity">
        <p className="leading-[20px]">Services</p>
      </Link>
      <Link to="/locations" className="flex items-center h-full relative shrink-0 hover:opacity-80 transition-opacity">
        <p className="leading-[20px]">Locations</p>
      </Link>
      <Link to="/about" className="flex items-center h-full relative shrink-0 hover:opacity-80 transition-opacity">
        <p className="leading-[20px]">About Us</p>
      </Link>
      <Link to="/resources" className="flex items-center h-full relative shrink-0 hover:opacity-80 transition-opacity">
        <p className="leading-[20px]">Resources</p>
      </Link>
      <Link to="/tools" className="flex items-center h-full relative shrink-0 hover:opacity-80 transition-opacity">
        <p className="leading-[20px]">Tools</p>
      </Link>
    </div>
  );
}

export function Header() {
  return (
    <div className="absolute left-0 top-0 z-[50] w-[1440px] h-[130px]" data-name="Header">
      <div className="absolute bg-white h-[130px] left-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.15)] top-0 w-[1440px]" />
      <Link to="/" className="absolute h-[70px] left-[59px] top-[30px] w-[215px] hover:opacity-80 transition-opacity block" data-name="Fertinest Logo">
        <img alt="Fertinest Logo" className="h-full w-full object-cover" src={imgFertinestLogo} />
      </Link>
      <div className="absolute bg-[#0288c2] h-[50px] left-[985px] rounded-[100px] top-[45px] w-[300px]" />
      <div className="absolute bg-[#a74b99] h-[50px] left-[457px] rounded-[100px] top-[45px] w-[610px]" />
      <Frame />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-medium justify-center leading-[0] left-[1137px] text-[18px] text-white top-[70px] tracking-[-0.35px] w-[146px]">
        <p className="leading-[20px]">9182039911</p>
      </div>
      <div className="absolute left-[1105px] size-[24px] top-[60px]" data-name="Phone">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgPhone} />
      </div>
    </div>
  );
}
