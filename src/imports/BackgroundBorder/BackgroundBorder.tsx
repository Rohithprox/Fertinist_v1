import svgPaths from "./svg-fzq1mikxdy";

function Heading() {
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

export default function BackgroundBorder() {
  return (
    <div className="bg-[#dcf1ff] content-stretch flex flex-col gap-[24px] items-start pl-[72px] pr-[33px] py-[33px] relative rounded-[24px] size-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#c1c6d5] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Heading />
      <List />
    </div>
  );
}