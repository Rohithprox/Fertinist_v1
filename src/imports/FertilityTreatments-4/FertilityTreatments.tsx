import { Link as RouterLink } from "react-router-dom";
import svgPaths from "./svg-4q2uz0d3e9";
import imgIvfHero1 from "./62c7b9e907f92d9cee0468ccfe33cef4450180bb.png";
import imgFertinestLogo2 from "./1aed5dd75bf09891e19f587c012f471fdb93ed82.png";
import imgLogoGraphic2 from "./33a9e540ef550c40ed9e368f8cbf4c7140399000.png";
import imgPhone from "./f6ff35424cf3f566b22f601b5b2c71f39fb514d9.png";
import imgEmail from "./48e6a4e439e50ac0191d8b0b62687ccdc0bc6db0.png";
import imgCompassionateCare from "./18240dddcbf6c4f7795ef985ee035eeefcb55433.png";
import imgHappyCouple from "./3ad14ffb65dd2e98b968b5d03edbb1317c95771e.png";
import imgDoctor from "./a80c7ab28b3375de2899d3aa5a1bf96cfc38fe5f.png";
import imgImage from "./c07bed52fb37b7ddaae3cfd4898d9b22b9ad0db7.png";
import imgPhone1 from "./ae80eef40c182e316b8185947a4106e808fe0d4c.png";
import { Header } from "../../app/components/shared/Header";
import { Footer as SharedFooter } from "../../app/components/shared/Footer";
import { FAQAccordion } from "../../app/components/FAQAccordion";
import SectionStepByStepProcess from "../SectionStepByStepProcess/SectionStepByStepProcess";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#221823] text-[24px] w-full">
        <p className="leading-[32px]">Our Expertise</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <div className="bg-[#650a76] h-[4px] rounded-[9999px] shrink-0 w-[48px]" data-name="Background" />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[19px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19">
        <g id="Container">
          <path d={svgPaths.p376fb300} fill="var(--fill-0, #650A76)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(101,10,118,0.1)] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Overlay">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#650a76] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">POPULAR</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Overlay />
        <Container5 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8.6px] relative size-full">
        <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#221823] text-[20px] w-full">
          <p className="leading-[28px]">IVF Treatment</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434f] text-[14px] w-full">
          <p className="leading-[22.75px] mb-0">Personalized In-Vitro Fertilization protocols</p>
          <p className="leading-[22.75px]">using the latest laboratory technology.</p>
        </div>
      </div>
    </div>
  );
}

function MainServiceCard() {
  return (
    <div className="bg-white col-1 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[32px] row-1 self-start shrink-0" data-name="Main Service Card">
      <div aria-hidden="true" className="absolute border border-[rgba(211,193,208,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex flex-col gap-[7.4px] items-start p-[25px] relative size-full">
        <Container3 />
        <Heading2 />
        <Container6 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8.7px] relative size-full">
        <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#221823] text-[16px] w-full">
          <p className="leading-[24px]">IUI</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.75px] relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434f] text-[11px] w-full">
          <p className="leading-[16.5px] mb-0">Intrauterine</p>
          <p className="leading-[16.5px]">Insemination</p>
        </div>
      </div>
    </div>
  );
}

function SmallerCards() {
  return (
    <div className="bg-white col-1 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[32px] row-1 self-start shrink-0" data-name="Smaller Cards">
      <div aria-hidden="true" className="absolute border border-[rgba(211,193,208,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex flex-col gap-[3.3px] items-start p-[21px] relative size-full">
        <div className="relative shrink-0 size-[20px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p111d6a00} fill="var(--fill-0, #006688)" id="Icon" />
          </svg>
        </div>
        <Heading3 />
        <Container8 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8.7px] relative size-full">
        <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#221823] text-[16px] w-full">
          <p className="leading-[24px]">ICSI</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.75px] relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434f] text-[11px] w-full">
          <p className="leading-[16.5px] mb-0">Intracytoplasmic</p>
          <p className="leading-[16.5px]">Sperm Injection</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white col-2 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[32px] row-1 self-start shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(211,193,208,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex flex-col gap-[3.3px] items-start p-[21px] relative size-full">
        <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
            <path d={svgPaths.p378ff500} fill="var(--fill-0, #802B8F)" id="Icon" />
          </svg>
        </div>
        <Heading4 />
        <Container9 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="col-1 gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_147px] justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <SmallerCards />
      <BackgroundBorderShadow />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[15px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
        <g id="Container">
          <path d={svgPaths.p3c2a9000} fill="var(--fill-0, #79002E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ffd9de] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#221823] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Egg Freezing</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px] mb-0">Preserve your fertility for the</p>
        <p className="leading-[16px]">future.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-[159px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading5 />
        <Container12 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #817380)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white col-1 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[106px] justify-self-stretch relative rounded-[32px] row-3 shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(211,193,208,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[25px] relative size-full">
          <Background />
          <Container11 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___195.50px_147px_106px] relative shrink-0 w-full" data-name="Container">
      <MainServiceCard />
      <Container7 />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function SectionServicesBentoGridMobileAdaptation() {
  return (
    <div className="absolute bg-[#ffeffc] content-stretch flex flex-col items-start left-0 px-[24px] py-[48px] right-0 rounded-tl-[48px] rounded-tr-[48px] top-[773.56px]" data-name="Section - Services Bento Grid (Mobile Adaptation)">
      <Container />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#221823] text-[30px] text-center tracking-[-0.75px] whitespace-nowrap">
        <p className="leading-[36px]">Why Fertinest?</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4f434f] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Precision meets compassion.</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container16 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
        <g id="Container">
          <path d={svgPaths.p20cc9b00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[48px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(101, 10, 118) 0%, rgb(128, 43, 143) 100%)" }} data-name="Background">
      <Container19 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#221823] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">24/7 Patient Concierge</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">{`You're never alone on this journey. Our`}</p>
        <p className="leading-[20px] mb-0">dedicated care team is available round</p>
        <p className="leading-[20px]">the clock for support.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0 w-[254px]" data-name="Container">
      <Heading7 />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Container20 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[18px] relative shrink-0 w-[18.057px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.057 18">
        <g id="Container">
          <path d={svgPaths.p269eed00} fill="var(--fill-0, #004F6B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#43c5fd] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[48px]" data-name="Background">
      <Container23 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#221823] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Advanced Embryo Labs</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">World-class laboratory facilities in Nellore,</p>
        <p className="leading-[20px] mb-0">equipped with time-lapse imaging and</p>
        <p className="leading-[20px]">genetic screening.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0 w-[278px]" data-name="Container">
      <Heading8 />
      <Container25 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Background2 />
      <Container24 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container22 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container17 />
    </div>
  );
}

function SectionFertinestAdvantage() {
  return (
    <div className="absolute bg-[#fff7fa] content-stretch flex flex-col items-start left-0 px-[24px] py-[64px] right-0 top-[1426.06px]" data-name="Section - Fertinest Advantage">
      <Container14 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15.75">
        <g id="Container">
          <path d={svgPaths.p26ccbe40} fill="var(--fill-0, #004F6B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#004f6b] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">
        <p className="leading-[18px]">95% SUCCESS RATE</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(67,197,253,0.2)] content-stretch flex gap-[8px] items-center px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <Container27 />
      <Container28 />
    </div>
  );
}

function OverlayAlignFlexStart() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Overlay:align-flex-start">
      <Overlay1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#221823] text-[44px] tracking-[-1.1px] w-full">
        <p className="leading-[48.4px] mb-0">Building</p>
        <p className="leading-[48.4px] mb-0">Families with</p>
        <p className="mb-0">
          <span className="font-['Manrope',sans-serif] font-extrabold leading-[48.4px] text-[#650a76]">Science</span>
          <span className="leading-[48.4px]">{` and`}</span>
        </p>
        <p className="leading-[48.4px] text-[#802b8f]">Soul.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[307.79998779296875px] relative shrink-0 w-[307.8px]" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434f] text-[16px] whitespace-nowrap">
        <p className="leading-[26px] mb-0">Advanced fertility treatments delivered</p>
        <p className="leading-[26px] mb-0">with deep human empathy in the heart of</p>
        <p className="leading-[26px]">Nellore.</p>
      </div>
    </div>
  );
}

function CompassionateCare() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="Compassionate Care">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[142.5%] left-0 max-w-none top-[-21.25%] w-full" src={imgCompassionateCare} />
      </div>
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start overflow-clip relative rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Overlay+Shadow">
      <CompassionateCare />
      <div className="absolute bg-gradient-to-t from-[rgba(101,10,118,0.4)] inset-0 to-[rgba(101,10,118,0)]" data-name="Gradient" />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <OverlayShadow />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <OverlayAlignFlexStart />
      <Heading />
      <Container29 />
      <Margin />
    </div>
  );
}

function HeaderHeroSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[48px] pt-[96px] px-[24px] right-0 top-0" data-name="Header - Hero Section">
      <Container26 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[100px] right-0 top-0 w-[90px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 100">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p20e1c900} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[32px]">Ovulation Tracker</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-full">
        <p className="leading-[22.75px] mb-0">Understand your cycle to maximize your</p>
        <p className="leading-[22.75px]">chances of natural conception.</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">LAST PERIOD START DATE</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans',sans-serif] font-normal gap-px items-start leading-[0] px-px relative self-stretch shrink-0 text-[18px] text-white whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[28px]">mm</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[28px]">/</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[28px]">dd</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[28px]">/</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[28px]">yyyy</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-start min-w-px overflow-clip relative" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Svg() {
  return <div className="h-[16.875px] shrink-0 w-[18px]" data-name="SVG" />;
}

function ButtonMenu() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative shrink-0 size-[22px]" data-name="Button menu">
      <Svg />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Input">
      <Container34 />
      <ButtonMenu />
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+OverlayBlur">
      <div className="content-stretch flex flex-col gap-[7.5px] items-start p-[16px] relative size-full">
        <Label />
        <Input />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">AVERAGE CYCLE LENGTH</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="SVG">
          <path d={svgPaths.p2fccf000} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.025" />
        </g>
      </svg>
    </div>
  );
}

function ImageClip() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center overflow-clip pl-[211px] pr-[8px] py-[0.5px]" data-name="image clip">
      <Svg1 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[28px]">28 Days</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Options">
      <ImageClip />
      <Container35 />
    </div>
  );
}

function OverlayOverlayBlur1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+OverlayBlur">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <Label1 />
        <Options />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center py-[16px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Manrope',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#650a76] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Calculate Window</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16.6px] relative shrink-0 w-full" data-name="Container">
      <OverlayOverlayBlur />
      <OverlayOverlayBlur1 />
      <Button />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[7.4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function SectionOvulationCalculatorCondensed() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip p-[32px] right-[24px] rounded-[32px] top-[1878.06px]" style={{ backgroundImage: "linear-gradient(135.04deg, rgb(101, 10, 118) 0%, rgb(128, 43, 143) 100%)" }} data-name="Section - Ovulation Calculator (Condensed)">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#221823] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Success Stories</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p304eaa0} fill="var(--fill-0, #650A76)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#650a76] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">View Gallery</p>
      </div>
      <Container38 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Link />
    </div>
  );
}

function HappyCouple() {
  return (
    <div className="max-w-[248px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Happy Couple">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgHappyCouple} />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#221823] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Priya & Karthik`}</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434f] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Patient since 2022</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <HappyCouple />
      <Container41 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#4f434f] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">{`"The emotional support we received`}</p>
        <p className="leading-[22.75px] mb-0">at Fertinest was as vital as the clinical</p>
        <p className="leading-[22.75px] mb-0">treatment. Today we have our</p>
        <p className="leading-[22.75px]">{`daughter."`}</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="absolute bg-white bottom-[16px] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start left-0 p-[20px] rounded-[32px] top-0 w-[288px]" data-name="Background+Shadow">
      <Container40 />
      <Container44 />
    </div>
  );
}

function Doctor() {
  return (
    <div className="max-w-[248px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Doctor">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDoctor} />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#221823] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dr. Anjali Rao</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434f] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Chief Embryologist</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[92px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Doctor />
      <Container46 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#4f434f] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">{`"We combine global standards with`}</p>
        <p className="leading-[22.75px] mb-0">local care to ensure every patient</p>
        <p className="leading-[22.75px] mb-0">feels heard and valued throughout</p>
        <p className="leading-[22.75px]">{`their journey."`}</p>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="absolute bg-white bottom-[16px] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start left-[304px] p-[20px] rounded-[32px] top-0 w-[288px]" data-name="Background+Shadow">
      <Container45 />
      <Container49 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[211px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow />
      <BackgroundShadow1 />
    </div>
  );
}

function Background4() {
  return (
    <div className="h-[44px] relative shrink-0 w-[40px]" data-name="Background">
      <div className="absolute inset-[-4.55%_-30.05%_-50%_-30%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.02 68">
          <g id="Background">
            <rect fill="var(--fill-0, white)" height="44" rx="20" width="40" x="12" y="2" />
            <g filter="url(#filter0_dd_1_540)" id="Overlay+Shadow">
              <rect fill="var(--fill-0, white)" fillOpacity="0.01" height="44" rx="20.01" shapeRendering="crispEdges" width="40.02" x="12" y="2" />
            </g>
            <path d={svgPaths.p2a26c680} fill="var(--fill-0, #650A76)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="68" id="filter0_dd_1_540" width="64.02" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect1_dropShadow_1_540" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_540" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="3" result="effect2_dropShadow_1_540" />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_1_540" mode="normal" result="effect2_dropShadow_1_540" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_540" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f0dded] content-stretch flex h-[160px] items-center justify-center relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="absolute inset-0 opacity-40" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[213.75%] left-0 max-w-none top-[-56.87%] w-full" src={imgImage} />
        </div>
      </div>
      <Background4 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#221823] text-[18px] w-full">
        <p className="leading-[28px]">Fertinest Nellore</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434f] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">12-3-456, GNT Road, Vedayapalem, Nellore,</p>
        <p className="leading-[22.75px]">Andhra Pradesh 524004</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p34b4000} fill="var(--fill-0, #650A76)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-px py-[11px] relative rounded-[24px] shrink-0 w-[142px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#650a76] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container53 />
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#650a76] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Get Directions</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
        <g id="Container">
          <path d={svgPaths.pb3c9680} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#802b8f] content-stretch flex gap-[8px] items-center justify-center py-[11px] relative rounded-[24px] shrink-0 w-[140px]" data-name="Button">
      <Container54 />
      <div className="flex flex-col font-['Manrope',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Call Us</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center pt-[12.6px] relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[3.4px] items-start p-[24px] relative size-full">
        <Heading11 />
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function LocationSection() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Location Section">
      <Background3 />
      <Container50 />
    </div>
  );
}

function LocationSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Location Section:margin">
      <LocationSection />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container39 />
      <LocationSectionMargin />
    </div>
  );
}

function SectionTrustSuccess() {
  return (
    <div className="absolute bg-[#f5e3f3] content-stretch flex flex-col items-start left-0 px-[24px] py-[48px] right-0 rounded-tl-[48px] rounded-tr-[48px] top-[2371.56px]" data-name="Section - Trust & Success">
      <Container36 />
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p21106180} fill="var(--fill-0, #650A76)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#650a76] text-[20px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[28px]">Fertinest</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative rounded-[9999px] shrink-0" style={{ backgroundImage: "linear-gradient(135.225deg, rgb(101, 10, 118) 0%, rgb(128, 43, 143) 100%)" }} data-name="Button">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Book Now</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[24px] py-[16px] relative size-full">
          <Container56 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function NavTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,247,250,0.8)] content-stretch drop-shadow-[0px_1px_1px_rgba(168,85,247,0.05)] flex flex-col items-start left-0 top-0 w-[390px]" data-name="Nav - TopAppBar">
      <Container55 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p1820480} fill="var(--fill-0, #650A76)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#650a76] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">Home</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#ffeffc] content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative rounded-[32px] shrink-0" data-name="Link">
      <Container60 />
      <Margin1 />
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2cccbbb0} fill="var(--fill-0, #221823)" fillOpacity="0.5" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(34,24,35,0.5)] whitespace-nowrap">
        <p className="leading-[16.5px]">Services</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative shrink-0" data-name="Link">
      <Container61 />
      <Margin2 />
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Container">
          <path d={svgPaths.p11c2d500} fill="var(--fill-0, #221823)" fillOpacity="0.5" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(34,24,35,0.5)] whitespace-nowrap">
        <p className="leading-[16.5px]">Success</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative shrink-0" data-name="Link">
      <Container62 />
      <Margin3 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p3c95900} fill="var(--fill-0, #221823)" fillOpacity="0.5" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(34,24,35,0.5)] whitespace-nowrap">
        <p className="leading-[16.5px]">Consult</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative shrink-0" data-name="Link">
      <Container63 />
      <Margin4 />
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8.7px] items-center pb-[24px] pl-[20.36px] pr-[20.41px] pt-[12px] relative size-full">
          <Link1 />
          <Link2 />
          <Link3 />
          <Link4 />
        </div>
      </div>
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bg-white bottom-[0.06px] content-stretch drop-shadow-[0px_-8px_20px_rgba(101,10,118,0.08)] flex flex-col items-start left-0 rounded-tl-[32px] rounded-tr-[32px] w-[390px]" data-name="BottomNavBar">
      <Container59 />
    </div>
  );
}

function HomepageMobile() {
  return (
    <div className="absolute bg-[#fff7fa] h-[3230.06px] left-[-1876px] right-[2926px] top-0" data-name="Homepage (Mobile)">
      <SectionServicesBentoGridMobileAdaptation />
      <SectionFertinestAdvantage />
      <HeaderHeroSection />
      <SectionOvulationCalculatorCondensed />
      <SectionTrustSuccess />
      <NavTopAppBar />
      <BottomNavBar />
    </div>
  );
}

function Heading12() {
  return (
    <div className="relative shrink-0 w-[710.017px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001e2c] text-[21.931px] w-full">
          <p className="leading-[32.897px]">Is IVF right for you?</p>
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[16.448px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="relative shrink-0 size-[27.414px]" data-name="Icon">
        <div className="absolute inset-[0_27.04%_27.04%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1caa9380} fill="var(--fill-0, #943687)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[32.897px] justify-center leading-[0] not-italic relative shrink-0 text-[#001e2c] text-[21.931px] w-[439.758px]">
        <p className="leading-[32.897px]">Advanced maternal age (typically over 35)</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[16.448px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="relative shrink-0 size-[27.414px]" data-name="Icon">
        <div className="absolute inset-[0_27.04%_27.04%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1caa9380} fill="var(--fill-0, #943687)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[32.897px] justify-center leading-[0] not-italic relative shrink-0 text-[#001e2c] text-[21.931px] w-[421.364px]">
        <p className="leading-[32.897px]">Endometriosis or blocked fallopian tubes</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[16.448px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="relative shrink-0 size-[27.414px]" data-name="Icon">
        <div className="absolute inset-[0_27.04%_27.04%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1caa9380} fill="var(--fill-0, #943687)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[32.897px] justify-center leading-[0] not-italic relative shrink-0 text-[#001e2c] text-[21.931px] w-[463.183px]">
        <p className="leading-[32.897px]">Unexplained infertility lasting over 12 months</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[16.448px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="relative shrink-0 size-[27.414px]" data-name="Icon">
        <div className="absolute inset-[0_27.04%_27.04%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1caa9380} fill="var(--fill-0, #943687)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[32.897px] justify-center leading-[0] not-italic relative shrink-0 text-[#001e2c] text-[21.931px] w-[360.491px]">
        <p className="leading-[32.897px]">Male factor infertility requiring ICSI</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[16.448px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="relative shrink-0 size-[27.414px]" data-name="Icon">
        <div className="absolute inset-[0_27.04%_27.04%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1caa9380} fill="var(--fill-0, #943687)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[32.897px] justify-center leading-[0] not-italic relative shrink-0 text-[#001e2c] text-[21.931px] w-[405.697px]">
        <p className="leading-[32.897px]">Genetic carrier screening requirements</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-[710.017px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[21.931px] items-start relative size-full">
        <Item />
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#dcf1ff] content-stretch flex flex-col gap-[24px] h-[383px] items-start left-[calc(50%-1px)] pl-[72px] pr-[33px] py-[33px] rounded-[24px] top-[1111px] w-[1272px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#c1c6d5] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Heading12 />
      <List />
    </div>
  );
}


function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[40.572px] justify-center leading-[0] relative shrink-0 text-[#001e2c] text-[26.082px] w-[451.918px]">
        <p className="leading-[40.572px]">Is the egg retrieval procedure painful?</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[10.723px] relative shrink-0 w-[17.388px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3881 10.7227">
        <g id="Container">
          <path d={svgPaths.p1adfde00} fill="var(--fill-0, #943687)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[34.776px] relative size-full">
          <Container84 />
          <Container85 />
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[34.776px] px-[34.776px] relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414753] text-[23.184px] w-full">
          <p className="leading-[37.674px] mb-0">No, the procedure is performed under light sedation. You will be asleep and</p>
          <p className="leading-[37.674px] mb-0">comfortable. Most patients experience mild cramping similar to a period afterwards,</p>
          <p className="leading-[37.674px]">which resolves within 24 hours.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="bg-white relative rounded-[23.184px] shrink-0 w-full" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.449px] relative rounded-[inherit] size-full">
        <Button4 />
        <Container86 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c6d5] border-[1.449px] border-solid inset-0 pointer-events-none rounded-[23.184px]" />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[40.572px] justify-center leading-[0] relative shrink-0 text-[#001e2c] text-[26.082px] w-[387.292px]">
        <p className="leading-[40.572px]">How long is the recovery period?</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[10.723px] relative shrink-0 w-[17.388px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3881 10.7227">
        <g id="Container">
          <path d={svgPaths.p1adfde00} fill="var(--fill-0, #943687)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[34.776px] relative size-full">
          <Container87 />
          <Container88 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder12() {
  return (
    <div className="bg-white relative rounded-[23.184px] shrink-0 w-full" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.449px] relative rounded-[inherit] size-full">
        <Button5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c6d5] border-[1.449px] border-solid inset-0 pointer-events-none rounded-[23.184px]" />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[40.572px] justify-center leading-[0] relative shrink-0 text-[#001e2c] text-[26.082px] w-[539.829px]">
        <p className="leading-[40.572px]">What are the side effects of IVF medications?</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[10.723px] relative shrink-0 w-[17.388px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3881 10.7227">
        <g id="Container">
          <path d={svgPaths.p1adfde00} fill="var(--fill-0, #943687)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[34.776px] relative size-full">
          <Container89 />
          <Container90 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder13() {
  return (
    <div className="bg-white relative rounded-[23.184px] shrink-0 w-full" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.449px] relative rounded-[inherit] size-full">
        <Button6 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c1c6d5] border-[1.449px] border-solid inset-0 pointer-events-none rounded-[23.184px]" />
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.184px] items-start left-[193px] right-[203.71px] top-[3210.48px]" data-name="Container">
      <BackgroundBorder11 />
      <BackgroundBorder12 />
      <BackgroundBorder13 />
    </div>
  );
}

export default function FertilityTreatments() {
  return (
    <div className="bg-white relative w-full min-h-screen" data-name="Fertility Treatments">
      <div className="absolute h-[552px] left-0 top-[165px] w-[1445px]" data-name="IVF Hero 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIvfHero1} />
      </div>
      <HomepageMobile />
      <div className="absolute bg-[#ffeffc] h-[856px] left-0 top-[692px] w-[1465.684px]" />
      <div className="absolute bg-[#ffeffc] h-[856px] left-0 top-[2163px] w-[1446px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Anek_Latin',sans-serif] font-semibold justify-center leading-[0] left-[95px] text-[#a74b99] text-[70px] top-[366.5px] tracking-[-1.4526px] w-[669px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[58.104px]">IVF</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] left-[95px] text-[#4f434f] text-[20px] top-[486.5px] w-[379px]">
        <p className="leading-[23.605px]">Also known as Test Tube Baby ,we combine cutting-edge embryology with a deeply human touch to guide you through every step of your journey toward parenthood.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal justify-center leading-[0] left-[100px] text-[#4f434f] text-[0px] top-[2591px] w-[1251px]">
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold leading-[25px] mb-0 text-[#943687] text-[36px] whitespace-pre-wrap">IVF Timeline at Fertinest â€“ What to Expect</p>
        <p className="leading-[25px] mb-0 text-[36px] whitespace-pre-wrap">â€‹</p>
        <p className="leading-[25px] mb-0 text-[20px] whitespace-pre-wrap">For many working couples, understanding the time involved in IVF is important. At Fertinest, we follow a structured and patient-friendly approach designed to fit into your routine. While every journey is unique, a typical IVF cycle usually takes about 4 to 6 weeks.</p>
        <p className="leading-[25px] mb-0 text-[20px] whitespace-pre-wrap">â€‹</p>
        <p className="leading-[25px] mb-0 text-[20px] whitespace-pre-wrap">The Preparation Phase (Weeks 1â€“2)</p>
        <p className="leading-[25px] mb-0 text-[20px] whitespace-pre-wrap">Your journey begins with planning and preparation. This includes blood tests, ultrasound scans, and sometimes medications to regulate your cycle and prepare your body for treatment.</p>
        <p className="leading-[25px] mb-0 text-[20px] whitespace-pre-wrap">
          <br aria-hidden="true" />
          Time Commitment: 1 to 2 clinic visits
        </p>
        <p className="leading-[25px] mb-0 text-[20px] whitespace-pre-wrap">The Stimulation Phase (Weeks 3â€“4)</p>
        <p className="leading-[25px] mb-0 text-[20px] whitespace-pre-wrap">Starting on Day 2 or 3 of your period, this phase involves daily hormone injections for around 10 to 12 days to stimulate egg growth. Your progress is monitored through regular scans.</p>
        <p className="leading-[25px] mb-0 text-[20px] whitespace-pre-wrap">
          <br aria-hidden="true" />
          Time Commitment: 3 to 4 short clinic visits
        </p>
        <p className="leading-[25px] mb-0 text-[20px] whitespace-pre-wrap">The Procedure Phase (Week 4)</p>
        <p className="leading-[25px] mb-0 text-[20px] whitespace-pre-wrap">Once the eggs are ready, they are collected through a short, minimally invasive procedure that usually takes about 20 minutes. The eggs are then fertilized in the lab and allowed to develop for 3 to 5 days.</p>
        <p className="leading-[25px] mb-0 text-[20px] whitespace-pre-wrap">â€‹</p>
        <p className="leading-[25px] mb-0 text-[20px] whitespace-pre-wrap">The Transfer Phase (Week 5 or Later)</p>
        <p className="leading-[25px] mb-0 text-[20px] whitespace-pre-wrap">In this stage, the embryo is placed into the uterus.</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[25px] text-[20px]">Fresh Transfer: Done 3 to 5 days after egg retrieval</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[25px] text-[20px]">Frozen Transfer (Recommended): Embryos are frozen and transferred in the next menstrual cycle, allowing the body to recover and often improving success rates</span>
          </li>
        </ul>
        <p className="leading-[25px] mb-0 text-[20px] whitespace-pre-wrap">â€‹</p>
        <p className="leading-[25px] mb-0 text-[20px] whitespace-pre-wrap">Overall Timeline</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[25px] text-[20px]">Fresh IVF Cycle: Approximately 3 to 4 weeks (from Day 1 of period to embryo transfer)</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[25px] text-[20px]">Frozen IVF Cycle: Approximately 6 to 8 weeks (spread across two menstrual cycles)</span>
          </li>
        </ul>
        <p className="leading-[25px] text-[20px] whitespace-pre-wrap">At Fertinest, every step is carefully guided to ensure a smooth, efficient, and supportive experience throughout your IVF journey.</p>
      </div>
      <div className="absolute flex h-[8.344px] items-center justify-center left-[98.38px] top-[4752.83px] w-[78.984px]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.03deg] skew-x-[0.04deg]">
          <div className="h-0 relative w-[79.424px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.4239 1">
                <line id="Line 1" stroke="var(--stroke-0, white)" x2="79.4239" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[350px] justify-center leading-[0] left-[92px] text-[#414753] text-[24.464px] top-[911px] w-[1286px] whitespace-pre-wrap">
        <p className="leading-[31.804px] mb-0">â€‹</p>
        <p className="font-['Manrope',sans-serif] font-bold leading-[31.804px] mb-0">{`What is IVF? `}</p>
        <p className="leading-[31.804px] mb-0">â€‹</p>
        <p className="leading-[31.804px] mb-0">In-Vitro Fertilization (IVF) is the process where an egg is fertilized by sperm outside the body, in a specialized laboratory environment. It is the most effective form of assisted reproductive technology (ART) available today.</p>
        <p className="leading-[31.804px] mb-0">â€‹</p>
        <p className="leading-[31.804px]">At Fertinest, we go beyond the standard procedure by utilizing AI-driven embryo selection and time-lapse monitoring to maximize the potential ofevery cycle. Our laboratory is designed to mimic the natural environment of the womb as closely as possible.</p>
      </div>
      <BackgroundBorder />
      <div className="absolute content-stretch flex flex-col h-[575px] items-start left-[75px] overflow-clip right-[85px] top-[1564px]" data-name="Section - Step-by-Step Process Wrapper">
        <SectionStepByStepProcess />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-normal h-[23.071px] justify-center leading-[0] left-[calc(50%-13.18px)] text-[#001e2c] text-[46.143px] text-center top-[3134.54px] w-[512.377px]">
        <p className="leading-[23.071px]">Common Questions</p>
      </div>
      <FAQAccordion />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope',sans-serif] font-bold h-[24px] justify-center leading-[0] left-[713px] text-[#943687] text-[32px] text-center top-[1646px] w-[280px]">
        <p className="leading-[24px]">The IVF Journey</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-[715px] not-italic text-[#414753] text-[20px] text-center top-[1693px] w-[1280px]">
        <p className="leading-[24px]">Five dedicated stages designed for safety, precision, and the highest success potential.</p>
      </div>
      <Header />
      <SharedFooter topOffset={3872} />
    </div>
  );
}