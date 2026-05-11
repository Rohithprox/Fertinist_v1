import { Header } from "../components/shared/Header";
import { Footer as SharedFooter } from "../components/shared/Footer";

function LocationCard({
  name,
  badge,
  address,
  phone,
  email,
  hours,
  mapsUrl,
}: {
  name: string;
  badge?: string;
  address: string;
  phone: string;
  email: string;
  hours: string[];
  mapsUrl: string;
}) {
  return (
    <div
      className="bg-white rounded-[28px] p-[40px] flex flex-col gap-[24px]"
      style={{ boxShadow: "0 4px 32px rgba(167,75,153,0.10)", border: "1px solid rgba(167,75,153,0.12)" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[14px]">
          <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #a74b99, #650a76)" }}>
            <svg width="22" height="26" viewBox="0 0 20 24" fill="none">
              <path d="M10 0C4.477 0 0 4.477 0 10c0 7.5 10 14 10 14s10-6.5 10-14C20 4.477 15.523 0 10 0zm0 13a3 3 0 110-6 3 3 0 010 6z" fill="white" />
            </svg>
          </div>
          <h3 className="font-['Anek_Latin',sans-serif] font-semibold text-[28px] text-[#221823] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>{name}</h3>
        </div>
        {badge && (
          <span className="font-['Manrope',sans-serif] font-bold text-[11px] tracking-[0.8px] uppercase px-[12px] py-[5px] rounded-full" style={{ background: "rgba(167,75,153,0.1)", color: "#a74b99", border: "1px solid rgba(167,75,153,0.25)" }}>
            {badge}
          </span>
        )}
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-[#f0e0ee]" />

      {/* Details */}
      <div className="flex flex-col gap-[18px]">
        {/* Address */}
        <div className="flex items-start gap-[14px]">
          <div className="mt-[2px] shrink-0 w-[20px] h-[20px] flex items-center justify-center">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path d="M8 0C3.582 0 0 3.582 0 8c0 6 8 12 8 12s8-6 8-12C16 3.582 12.418 0 8 0zm0 11a3 3 0 110-6 3 3 0 010 6z" fill="#a74b99" />
            </svg>
          </div>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] text-[#4f434f] leading-[26px] m-0">{address}</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-[14px]">
          <div className="shrink-0 w-[20px] h-[20px] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#0288c2" />
            </svg>
          </div>
          <a href={`tel:${phone}`} className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] text-[#221823] font-medium no-underline hover:text-[#a74b99] transition-colors">{phone}</a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-[14px]">
          <div className="shrink-0 w-[20px] h-[20px] flex items-center justify-center">
            <svg width="18" height="14" viewBox="0 0 24 20" fill="none">
              <path d="M20 0H4C2.9 0 2 .9 2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z" fill="#a74b99" />
            </svg>
          </div>
          <a href={`mailto:${email}`} className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] text-[#221823] font-medium no-underline hover:text-[#a74b99] transition-colors">{email}</a>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-[14px]">
          <div className="mt-[2px] shrink-0 w-[20px] h-[20px] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm.5 13H7v-2h3.5V6h2v7z" fill="#650a76" />
            </svg>
          </div>
          <div className="flex flex-col gap-[4px]">
            {hours.map((h, i) => (
              <p key={i} className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-[#4f434f] leading-[24px] m-0">{h}</p>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline flex items-center justify-center gap-[10px] rounded-full py-[14px] px-[32px] font-['Manrope',sans-serif] font-bold text-[15px] text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-[2px]"
        style={{ background: "linear-gradient(135deg, #a74b99, #650a76)", boxShadow: "0 4px 16px rgba(167,75,153,0.30)" }}
      >
        <svg width="14" height="18" viewBox="0 0 20 24" fill="none">
          <path d="M10 0C4.477 0 0 4.477 0 10c0 7.5 10 14 10 14s10-6.5 10-14C20 4.477 15.523 0 10 0zm0 13a3 3 0 110-6 3 3 0 010 6z" fill="white" />
        </svg>
        Open in Google Maps
      </a>
    </div>
  );
}

export function LocationsPage() {
  return (
    <div className="bg-white relative w-full" style={{ minHeight: "100vh" }}>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full pt-[130px]" style={{ background: "linear-gradient(135deg, #a74b99 0%, #650a76 100%)" }}>
        <div className="max-w-[1440px] mx-auto px-[80px] py-[80px] flex flex-col items-center text-center">
          <div className="inline-flex flex-col items-center gap-[16px] mb-[24px]">
            <span className="font-['Manrope',sans-serif] font-bold text-[12px] tracking-[2px] uppercase text-[rgba(255,255,255,0.7)] px-[16px] py-[6px] rounded-full border border-[rgba(255,255,255,0.3)]">
              Andhra Pradesh · India
            </span>
            <h1 className="font-['Anek_Latin',sans-serif] font-semibold text-[64px] text-white m-0 leading-[1.1]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Our Locations
            </h1>
            <div className="h-[2px] w-[80px] rounded-full bg-[rgba(255,255,255,0.5)]" />
          </div>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.85)] leading-[30px] m-0 max-w-[560px]">
            Two clinics, one mission — bringing world-class fertility care closer to you across Andhra Pradesh.
          </p>
        </div>

        {/* Wave bottom */}
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
            <path d="M0 48h1440V24C1200 8 960 0 720 0S240 8 0 24v24z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Location Cards */}
      <div className="max-w-[1440px] mx-auto px-[80px] py-[64px]">
        <div className="grid grid-cols-2 gap-[32px]">
          <LocationCard
            name="Nellore"
            badge="Flagship Clinic"
            address="Mythri Fertinest, MG Road, Nellore, Andhra Pradesh – 524 001"
            phone="+91 91820 39911"
            email="mythrifertinest@gmail.com"
            hours={[
              "Mon – Sat: 8:00 AM – 8:00 PM",
              "Sunday: By Appointment Only"
            ]}
            mapsUrl="https://maps.app.goo.gl/Q3hTYenGrXYGorCB8?g_st=iw"
          />
          <LocationCard
            name="Ananthapur"
            address="Mythri Fertinest, Station Road, Ananthapur, Andhra Pradesh – 515 001"
            phone="+91 91820 39911"
            email="mythrifertinest@gmail.com"
            hours={[
              "Mon – Sat: 9:00 AM – 6:00 PM",
              "Sunday: Closed"
            ]}
            mapsUrl="https://maps.app.goo.gl/Q3hTYenGrXYGorCB8?g_st=iw"
          />
        </div>
      </div>

      {/* What to expect section */}
      <div className="bg-[#fff7fa] w-full py-[64px]">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="inline-flex flex-col items-stretch gap-[8px] mb-[48px]">
            <h2 className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[40px] leading-[48px] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>What to Expect at Your Visit</h2>
            <div className="h-[2px] w-full rounded-full bg-[#650a76]" />
          </div>

          <div className="grid grid-cols-3 gap-[24px]">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="#a74b99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "Warm Welcome",
                desc: "Our front desk team greets you by name and ensures paperwork is minimal so you can focus on your consultation."
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#0288c2" strokeWidth="2" />
                    <path d="M12 6v6l4 2" stroke="#0288c2" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                title: "On-Time Appointments",
                desc: "We respect your time. Our scheduling system ensures minimal wait and maximum quality time with your specialist."
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="#a74b99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "Compassionate Care",
                desc: "Every member of our team — from specialists to nurses — is trained to support you emotionally, not just medically."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[20px] p-[32px] flex flex-col gap-[16px]" style={{ boxShadow: "0 2px 16px rgba(167,75,153,0.08)" }}>
                <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center" style={{ background: "rgba(167,75,153,0.08)" }}>
                  {item.icon}
                </div>
                <h3 className="font-['Manrope',sans-serif] font-bold text-[20px] text-[#221823] m-0">{item.title}</h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-[#4f434f] leading-[26px] m-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Book Appointment CTA */}
      <div className="w-full py-[80px]" style={{ background: "linear-gradient(135deg, #650a76 0%, #a74b99 100%)" }}>
        <div className="max-w-[1440px] mx-auto px-[80px] flex flex-col items-center text-center gap-[24px]">
          <h2 className="font-['Anek_Latin',sans-serif] font-semibold text-white text-[48px] leading-[1.1] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            Ready to Begin Your Journey?
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.85)] leading-[30px] m-0 max-w-[480px]">
            Call us or walk into either clinic. Our team is here to answer your questions with no pressure.
          </p>
          <div className="flex gap-[16px] mt-[8px]">
            <a
              href="tel:+919182039911"
              className="no-underline flex items-center gap-[10px] bg-white rounded-full py-[16px] px-[36px] font-['Manrope',sans-serif] font-bold text-[16px] text-[#a74b99] transition-all duration-300 hover:opacity-90 hover:-translate-y-[2px]"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#a74b99" />
              </svg>
              Call Now
            </a>
            <a
              href="mailto:mythrifertinest@gmail.com"
              className="no-underline flex items-center gap-[10px] border-2 border-white rounded-full py-[14px] px-[36px] font-['Manrope',sans-serif] font-bold text-[16px] text-white transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)] hover:-translate-y-[2px]"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      <SharedFooter topOffset={1680} />
    </div>
  );
}
