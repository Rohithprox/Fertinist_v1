import { Header } from "../components/shared/Header";
import { Footer as SharedFooter } from "../components/shared/Footer";

const whyChooseItems = [
  {
    color: "#a74b99",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4L12 14.01l-3-3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "95% Success Rate",
    desc: "Industry-leading outcomes backed by advanced technology, experienced specialists, and protocols refined over thousands of cycles.",
  },
  {
    color: "#0288c2",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "AI-Driven Technology",
    desc: "Cutting-edge AI embryo selection, time-lapse monitoring, and advanced genetic screening for optimal outcomes at every step.",
  },
  {
    color: "#a74b99",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Experienced Team",
    desc: "Board-certified fertility specialists, embryologists, and counsellors with decades of combined experience across thousands of families.",
  },
  {
    color: "#0288c2",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Personalised Care",
    desc: "No two fertility journeys are the same. Every treatment plan is built around your unique diagnosis, history, and goals.",
  },
  {
    color: "#650a76",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "State-of-the-Art Lab",
    desc: "Our advanced embryology lab is engineered to mimic the natural womb environment — temperature-controlled, contamination-free, and precision-monitored.",
  },
  {
    color: "#0288c2",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.8" />
        <path d="M12 8v4l3 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Compassionate Support",
    desc: "Dedicated counsellors, nurse coordinators, and support staff ensure you are never navigating this journey alone — emotionally or practically.",
  },
];

const stats = [
  { value: "95%", label: "Success Rate" },
  { value: "10K+", label: "Families Built" },
  { value: "15+", label: "Years of Excellence" },
  { value: "2", label: "State-of-the-Art Clinics" },
];

export function AboutUsPage() {
  return (
    <div className="bg-white relative w-full" style={{ minHeight: "100vh" }}>
      <Header />

      {/* Hero */}
      <div className="relative w-full pt-[70px] lg:pt-[130px]" style={{ background: "linear-gradient(135deg, #a74b99 0%, #650a76 100%)" }}>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-[80px] flex flex-col items-center text-center">
          <span className="font-['Manrope',sans-serif] font-bold text-[12px] tracking-[2px] uppercase text-[rgba(255,255,255,0.7)] px-[16px] py-[6px] rounded-full border border-[rgba(255,255,255,0.3)] mb-[24px]">
            Nellore · Andhra Pradesh · Since 2010
          </span>
          <h1 className="font-['Anek_Latin',sans-serif] font-semibold text-[64px] text-white m-0 leading-[1.1] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            About Fertinest
          </h1>
          <div className="h-[2px] w-[80px] rounded-full bg-[rgba(255,255,255,0.5)] mb-[24px]" />
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.88)] leading-[30px] m-0 max-w-[580px]">
            Turning dreams of parenthood into reality — with compassion, expertise, and the science to back it up.
          </p>
        </div>

        {/* Stats bar */}
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] pb-[0px]">
          <div className="bg-[rgba(255,255,255,0.12)] backdrop-blur-sm rounded-t-[24px] px-[48px] py-[32px] grid grid-cols-4 divide-x divide-[rgba(255,255,255,0.2)]">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-[6px] px-[24px]">
                <span className="font-['Anek_Latin',sans-serif] font-semibold text-[40px] text-white leading-none" style={{ fontVariationSettings: "'wdth' 100" }}>{stat.value}</span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[rgba(255,255,255,0.75)]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
            <path d="M0 48h1440V24C1200 8 960 0 720 0S240 8 0 24v24z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[64px] items-center">
          <div>
            <div className="inline-flex flex-col items-stretch gap-[8px] mb-[28px]">
              <h2 className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[40px] leading-[48px] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>Our Story</h2>
              <div className="h-[2px] w-full rounded-full bg-[#650a76]" />
            </div>
            <div className="flex flex-col gap-[18px]">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] text-[#4f434f] leading-[30px] m-0">
                Founded with a vision to make advanced fertility care accessible to every couple, Fertinest has grown into Nellore's leading fertility centre. Our journey began with a simple belief: every family deserves the chance to experience the joy of parenthood.
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] text-[#4f434f] leading-[30px] m-0">
                With state-of-the-art technology, experienced fertility specialists, and a patient-first approach, we have helped thousands of couples achieve their dream of having a baby. Our 95% success rate is a testament to our dedication, expertise, and the trust our patients place in us.
              </p>
            </div>
          </div>
          <div className="rounded-[28px] overflow-hidden" style={{ boxShadow: "0 8px 40px rgba(167,75,153,0.15)" }}>
            <div className="w-full h-[360px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #ffeffc, #fff7fa)" }}>
              <div className="flex flex-col items-center gap-[12px] opacity-40">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="#a74b99" strokeWidth="1.5" />
                </svg>
                <span className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>Fertinest</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-[#ffeffc] w-full py-[80px]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
          <div className="inline-flex flex-col items-stretch gap-[8px] mb-[48px]">
            <h2 className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[40px] leading-[48px] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>Mission & Vision</h2>
            <div className="h-[2px] w-full rounded-full bg-[#650a76]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
            {/* Mission */}
            <div className="bg-white rounded-[24px] p-[40px] flex flex-col gap-[20px]" style={{ boxShadow: "0 4px 24px rgba(167,75,153,0.10)", border: "1px solid rgba(167,75,153,0.10)" }}>
              <div className="flex items-center gap-[16px]">
                <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #a74b99, #650a76)" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.8" />
                    <path d="M12 8v4l3 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-['Manrope',sans-serif] font-bold text-[#a74b99] text-[24px] m-0">Our Mission</h3>
              </div>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] text-[#4f434f] leading-[28px] m-0">
                To provide world-class fertility treatments with compassion, integrity, and personalised care — helping every couple navigate their unique journey to parenthood with hope and confidence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-[24px] p-[40px] flex flex-col gap-[20px]" style={{ boxShadow: "0 4px 24px rgba(167,75,153,0.10)", border: "1px solid rgba(167,75,153,0.10)" }}>
              <div className="flex items-center gap-[16px]">
                <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #0288c2, #004f6b)" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3 className="font-['Manrope',sans-serif] font-bold text-[#0288c2] text-[24px] m-0">Our Vision</h3>
              </div>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] text-[#4f434f] leading-[28px] m-0">
                To be the most trusted name in fertility care across India — setting new standards in success rates, patient experience, and medical excellence through continuous innovation and unwavering commitment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Fertinest */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-[80px]">
        <div className="inline-flex flex-col items-stretch gap-[8px] mb-[48px]">
          <h2 className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[40px] leading-[48px] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>Why Choose Fertinest?</h2>
          <div className="h-[2px] w-full rounded-full bg-[#650a76]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {whyChooseItems.map((item, i) => (
            <div key={i} className="bg-white rounded-[20px] p-[32px] flex flex-col gap-[16px] transition-all duration-300 hover:-translate-y-[4px]"
              style={{ boxShadow: "0 2px 16px rgba(167,75,153,0.08)", border: "1px solid rgba(167,75,153,0.08)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(167,75,153,0.15)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(167,75,153,0.08)"; }}
            >
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center shrink-0" style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)` }}>
                {item.icon}
              </div>
              <h3 className="font-['Manrope',sans-serif] font-bold text-[20px] text-[#221823] m-0">{item.title}</h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-[#4f434f] leading-[26px] m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Commitment */}
      <div className="bg-[#fff7fa] w-full py-[80px]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
          <div className="inline-flex flex-col items-stretch gap-[8px] mb-[36px]">
            <h2 className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[40px] leading-[48px] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>Our Commitment to You</h2>
            <div className="h-[2px] w-full rounded-full bg-[#650a76]" />
          </div>
          <div className="flex flex-col gap-[20px] max-w-[900px]">
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] text-[#4f434f] leading-[30px] m-0">
              At Fertinest, we understand that your journey to parenthood is deeply personal and can be emotionally challenging. That is why we are committed to providing not just medical excellence, but also compassionate care and unwavering support every step of the way.
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] text-[#4f434f] leading-[30px] m-0">
              From your first consultation to the moment you hold your baby, we are here for you. Our team of specialists, embryologists, counsellors, and support staff work together to ensure you receive comprehensive, coordinated care tailored to your unique needs.
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] text-[#4f434f] leading-[30px] m-0">
              We believe in transparency, clear communication, and making you an active participant in your treatment decisions. Your trust is our greatest responsibility — your success is our greatest joy.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full py-[80px]" style={{ background: "linear-gradient(135deg, #650a76 0%, #a74b99 100%)" }}>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] flex flex-col items-center text-center gap-[24px]">
          <h2 className="font-['Anek_Latin',sans-serif] font-semibold text-white text-[48px] leading-[1.1] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            Begin Your Journey With Us
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.85)] leading-[30px] m-0 max-w-[480px]">
            Talk to a specialist today. No pressure, just clarity about your options and your path forward.
          </p>
          <div className="flex gap-[16px] mt-[8px]">
            <a href="tel:+919182039911" className="no-underline flex items-center gap-[10px] bg-white rounded-full py-[16px] px-[36px] font-['Manrope',sans-serif] font-bold text-[16px] text-[#a74b99] transition-all duration-300 hover:opacity-90 hover:-translate-y-[2px]"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
              Call +91 91820 39911
            </a>
            <a href="mailto:mythrifertinest@gmail.com" className="no-underline flex items-center gap-[10px] border-2 border-white rounded-full py-[14px] px-[36px] font-['Manrope',sans-serif] font-bold text-[16px] text-white transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)] hover:-translate-y-[2px]">
              Email Us
            </a>
          </div>
        </div>
      </div>

      <SharedFooter />
    </div>
  );
}
