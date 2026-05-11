import { useState } from "react";
import { Header } from "../components/shared/Header";
import { Footer as SharedFooter } from "../components/shared/Footer";

type ActiveTool = "ovulation" | "bmi" | "ivf-success" | "due-date" | null;

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-[8px] mb-[48px]">
      <div className="inline-flex flex-col items-stretch gap-[8px]">
        <h2 className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[40px] leading-[48px] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>{title}</h2>
        <div className="h-[2px] w-full rounded-full bg-[#650a76]" />
      </div>
      {subtitle && <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] text-[#4f434f] leading-[28px] m-0 mt-[4px]">{subtitle}</p>}
    </div>
  );
}

function OvulationCalculator() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState("28");
  const [result, setResult] = useState<{ ovulation: string; windowStart: string; windowEnd: string } | null>(null);

  const calculate = () => {
    if (!lastPeriod) return;
    const start = new Date(lastPeriod);
    const cycle = parseInt(cycleLength) || 28;
    const ovulationDay = new Date(start);
    ovulationDay.setDate(start.getDate() + cycle - 14);
    const windowStart = new Date(ovulationDay);
    windowStart.setDate(ovulationDay.getDate() - 2);
    const windowEnd = new Date(ovulationDay);
    windowEnd.setDate(ovulationDay.getDate() + 1);
    const fmt = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
    setResult({ ovulation: fmt(ovulationDay), windowStart: fmt(windowStart), windowEnd: fmt(windowEnd) });
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="grid grid-cols-2 gap-[20px]">
        <div className="flex flex-col gap-[8px]">
          <label className="font-['Manrope',sans-serif] font-bold text-[12px] tracking-[0.6px] uppercase text-[#4f434f]">First Day of Last Period</label>
          <input
            type="date"
            value={lastPeriod}
            onChange={e => setLastPeriod(e.target.value)}
            className="bg-[#f0dded] rounded-[14px] px-[16px] py-[12px] font-['Plus_Jakarta_Sans',sans-serif] text-[16px] text-[#221823] border-none outline-none"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label className="font-['Manrope',sans-serif] font-bold text-[12px] tracking-[0.6px] uppercase text-[#4f434f]">Average Cycle Length (Days)</label>
          <select
            value={cycleLength}
            onChange={e => setCycleLength(e.target.value)}
            className="bg-[#f0dded] rounded-[14px] px-[16px] py-[12px] font-['Plus_Jakarta_Sans',sans-serif] text-[16px] text-[#221823] border-none outline-none cursor-pointer"
          >
            {Array.from({ length: 15 }, (_, i) => i + 21).map(d => (
              <option key={d} value={d}>{d} days</option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={calculate}
        className="w-full py-[16px] rounded-[14px] font-['Manrope',sans-serif] font-bold text-[16px] text-white border-none cursor-pointer transition-opacity hover:opacity-90"
        style={{ background: "linear-gradient(135deg, #a74b99, #650a76)" }}
      >
        Calculate My Fertile Window
      </button>
      {result && (
        <div className="rounded-[16px] p-[24px] flex flex-col gap-[14px]" style={{ background: "linear-gradient(135deg, rgba(167,75,153,0.08), rgba(101,10,118,0.04))", border: "1px solid rgba(167,75,153,0.15)" }}>
          <p className="font-['Manrope',sans-serif] font-bold text-[14px] tracking-[0.5px] uppercase text-[#a74b99] m-0">Your Results</p>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between items-center">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-[#4f434f]">Estimated Ovulation</span>
              <span className="font-['Manrope',sans-serif] font-bold text-[15px] text-[#221823]">{result.ovulation}</span>
            </div>
            <div className="h-[1px] bg-[rgba(167,75,153,0.12)]" />
            <div className="flex justify-between items-center">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-[#4f434f]">Fertile Window</span>
              <span className="font-['Manrope',sans-serif] font-bold text-[15px] text-[#221823]">{result.windowStart} – {result.windowEnd}</span>
            </div>
          </div>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#4f434f] m-0 leading-[20px]">For a personalised assessment, schedule a consultation with our specialists.</p>
        </div>
      )}
    </div>
  );
}

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<{ bmi: number; category: string; color: string; note: string } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (!w || !h) return;
    const bmi = w / (h * h);
    let category, color, note;
    if (bmi < 18.5) { category = "Underweight"; color = "#0288c2"; note = "Being underweight can affect hormone levels and ovulation. A fertility specialist can advise on optimal weight for conception."; }
    else if (bmi < 25) { category = "Healthy Weight"; color = "#43b960"; note = "A healthy BMI is associated with better fertility outcomes and lower pregnancy risks. Great foundation for your journey."; }
    else if (bmi < 30) { category = "Overweight"; color = "#f59e0b"; note = "A moderately elevated BMI can affect hormone balance and ovulation. Modest weight management may improve outcomes."; }
    else { category = "Obese"; color = "#ef4444"; note = "Obesity can significantly affect fertility and pregnancy. Our team can guide you on a personalised pre-conception weight management plan."; }
    setResult({ bmi: Math.round(bmi * 10) / 10, category, color, note });
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="grid grid-cols-2 gap-[20px]">
        <div className="flex flex-col gap-[8px]">
          <label className="font-['Manrope',sans-serif] font-bold text-[12px] tracking-[0.6px] uppercase text-[#4f434f]">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="e.g. 65"
            className="bg-[#f0dded] rounded-[14px] px-[16px] py-[12px] font-['Plus_Jakarta_Sans',sans-serif] text-[16px] text-[#221823] border-none outline-none"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label className="font-['Manrope',sans-serif] font-bold text-[12px] tracking-[0.6px] uppercase text-[#4f434f]">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={e => setHeight(e.target.value)}
            placeholder="e.g. 165"
            className="bg-[#f0dded] rounded-[14px] px-[16px] py-[12px] font-['Plus_Jakarta_Sans',sans-serif] text-[16px] text-[#221823] border-none outline-none"
          />
        </div>
      </div>
      <button
        onClick={calculate}
        className="w-full py-[16px] rounded-[14px] font-['Manrope',sans-serif] font-bold text-[16px] text-white border-none cursor-pointer transition-opacity hover:opacity-90"
        style={{ background: "linear-gradient(135deg, #a74b99, #650a76)" }}
      >
        Calculate My BMI
      </button>
      {result && (
        <div className="rounded-[16px] p-[24px] flex flex-col gap-[14px]" style={{ background: "linear-gradient(135deg, rgba(167,75,153,0.08), rgba(101,10,118,0.04))", border: "1px solid rgba(167,75,153,0.15)" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-['Manrope',sans-serif] font-bold text-[14px] tracking-[0.5px] uppercase text-[#a74b99] m-0 mb-[4px]">Your BMI</p>
              <p className="font-['Anek_Latin',sans-serif] font-semibold text-[48px] m-0" style={{ color: result.color, fontVariationSettings: "'wdth' 100" }}>{result.bmi}</p>
            </div>
            <span className="font-['Manrope',sans-serif] font-bold text-[14px] px-[14px] py-[6px] rounded-full" style={{ background: `${result.color}18`, color: result.color }}>{result.category}</span>
          </div>
          <div className="h-[1px] bg-[rgba(167,75,153,0.12)]" />
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#4f434f] m-0 leading-[22px]">{result.note}</p>
        </div>
      )}
    </div>
  );
}

function IVFSuccessEstimator() {
  const [age, setAge] = useState("");
  const [attempts, setAttempts] = useState("1");
  const [result, setResult] = useState<{ rate: number; note: string } | null>(null);

  const calculate = () => {
    const a = parseInt(age);
    const att = parseInt(attempts);
    if (!a) return;
    let base = a < 35 ? 45 : a < 38 ? 35 : a < 40 ? 25 : a < 43 ? 15 : 8;
    const cumulative = 1 - Math.pow(1 - base / 100, att);
    const rate = Math.round(cumulative * 100);
    const note = att > 1
      ? `Cumulative success rate over ${att} cycles. Each attempt builds on the last — our team optimises your protocol between cycles.`
      : "Per-cycle estimate based on age. Success rates improve with personalised protocols — our 95% success rate reflects our multi-cycle approach.";
    setResult({ rate, note });
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="grid grid-cols-2 gap-[20px]">
        <div className="flex flex-col gap-[8px]">
          <label className="font-['Manrope',sans-serif] font-bold text-[12px] tracking-[0.6px] uppercase text-[#4f434f]">Age</label>
          <input
            type="number"
            value={age}
            onChange={e => setAge(e.target.value)}
            placeholder="e.g. 32"
            min="20" max="50"
            className="bg-[#f0dded] rounded-[14px] px-[16px] py-[12px] font-['Plus_Jakarta_Sans',sans-serif] text-[16px] text-[#221823] border-none outline-none"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label className="font-['Manrope',sans-serif] font-bold text-[12px] tracking-[0.6px] uppercase text-[#4f434f]">Number of Cycles</label>
          <select
            value={attempts}
            onChange={e => setAttempts(e.target.value)}
            className="bg-[#f0dded] rounded-[14px] px-[16px] py-[12px] font-['Plus_Jakarta_Sans',sans-serif] text-[16px] text-[#221823] border-none outline-none cursor-pointer"
          >
            {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} {n === 1 ? "cycle" : "cycles"}</option>)}
          </select>
        </div>
      </div>
      <button
        onClick={calculate}
        className="w-full py-[16px] rounded-[14px] font-['Manrope',sans-serif] font-bold text-[16px] text-white border-none cursor-pointer transition-opacity hover:opacity-90"
        style={{ background: "linear-gradient(135deg, #a74b99, #650a76)" }}
      >
        Estimate My Success Rate
      </button>
      {result && (
        <div className="rounded-[16px] p-[24px] flex flex-col gap-[14px]" style={{ background: "linear-gradient(135deg, rgba(167,75,153,0.08), rgba(101,10,118,0.04))", border: "1px solid rgba(167,75,153,0.15)" }}>
          <div className="flex items-center gap-[20px]">
            <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #a74b99, #650a76)" }}>
              <span className="font-['Anek_Latin',sans-serif] font-semibold text-[22px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>{result.rate}%</span>
            </div>
            <div>
              <p className="font-['Manrope',sans-serif] font-bold text-[14px] tracking-[0.5px] uppercase text-[#a74b99] m-0 mb-[4px]">Estimated Success Rate</p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#4f434f] m-0 leading-[22px]">{result.note}</p>
            </div>
          </div>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-[#4f434f] m-0 italic">This is a statistical estimate only. Individual results vary based on diagnosis, embryo quality, and many other factors.</p>
        </div>
      )}
    </div>
  );
}

function DueDateCalculator() {
  const [lmp, setLmp] = useState("");
  const [result, setResult] = useState<{ dueDate: string; currentWeek: number; trimester: string } | null>(null);

  const calculate = () => {
    if (!lmp) return;
    const start = new Date(lmp);
    const due = new Date(start);
    due.setDate(start.getDate() + 280);
    const today = new Date();
    const daysPregnant = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    const weeksPregnant = Math.max(0, Math.floor(daysPregnant / 7));
    const trimester = weeksPregnant < 13 ? "First Trimester" : weeksPregnant < 27 ? "Second Trimester" : "Third Trimester";
    const fmt = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
    setResult({ dueDate: fmt(due), currentWeek: weeksPregnant, trimester });
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[8px]">
        <label className="font-['Manrope',sans-serif] font-bold text-[12px] tracking-[0.6px] uppercase text-[#4f434f]">First Day of Last Menstrual Period</label>
        <input
          type="date"
          value={lmp}
          onChange={e => setLmp(e.target.value)}
          className="bg-[#f0dded] rounded-[14px] px-[16px] py-[12px] font-['Plus_Jakarta_Sans',sans-serif] text-[16px] text-[#221823] border-none outline-none"
        />
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#4f434f] m-0">Uses Naegele's rule: LMP + 280 days</p>
      </div>
      <button
        onClick={calculate}
        className="w-full py-[16px] rounded-[14px] font-['Manrope',sans-serif] font-bold text-[16px] text-white border-none cursor-pointer transition-opacity hover:opacity-90"
        style={{ background: "linear-gradient(135deg, #a74b99, #650a76)" }}
      >
        Calculate Due Date
      </button>
      {result && (
        <div className="rounded-[16px] p-[24px] flex flex-col gap-[14px]" style={{ background: "linear-gradient(135deg, rgba(167,75,153,0.08), rgba(101,10,118,0.04))", border: "1px solid rgba(167,75,153,0.15)" }}>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-['Manrope',sans-serif] font-bold text-[14px] tracking-[0.5px] uppercase text-[#a74b99] m-0 mb-[6px]">Estimated Due Date</p>
              <p className="font-['Anek_Latin',sans-serif] font-semibold text-[28px] text-[#221823] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>{result.dueDate}</p>
            </div>
            {result.currentWeek > 0 && (
              <div className="text-right">
                <p className="font-['Manrope',sans-serif] font-bold text-[14px] tracking-[0.5px] uppercase text-[#a74b99] m-0 mb-[6px]">Currently</p>
                <p className="font-['Manrope',sans-serif] font-bold text-[20px] text-[#221823] m-0">Week {result.currentWeek}</p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#4f434f] m-0">{result.trimester}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const tools = [
  {
    id: "ovulation" as ActiveTool,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#a74b99" strokeWidth="1.8" />
        <path d="M12 6v6l4 2" stroke="#a74b99" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Ovulation Calculator",
    desc: "Find your peak fertile window based on your cycle",
    component: <OvulationCalculator />,
  },
  {
    id: "bmi" as ActiveTool,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#0288c2" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: "BMI & Fertility Check",
    desc: "Understand how your BMI relates to fertility health",
    component: <BMICalculator />,
  },
  {
    id: "ivf-success" as ActiveTool,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 3v18h18" stroke="#650a76" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 16l4-6 4 4 4-8" stroke="#650a76" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "IVF Success Estimator",
    desc: "Statistical success rate based on age and cycle count",
    component: <IVFSuccessEstimator />,
  },
  {
    id: "due-date" as ActiveTool,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#a74b99" strokeWidth="1.8" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="#a74b99" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke="#a74b99" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Due Date Calculator",
    desc: "Calculate your estimated due date and current week",
    component: <DueDateCalculator />,
  },
];

export function ToolsPage() {
  const [activeTool, setActiveTool] = useState<ActiveTool>("ovulation");
  const active = tools.find(t => t.id === activeTool);

  return (
    <div className="bg-white relative w-full" style={{ minHeight: "100vh" }}>
      <Header />

      {/* Hero */}
      <div className="relative w-full pt-[130px] bg-[#ffeffc]">
        <div className="max-w-[1440px] mx-auto px-[80px] py-[64px]">
          <div className="inline-flex flex-col items-stretch gap-[8px] mb-[16px]">
            <h1 className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[56px] leading-[64px] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>Your Fertility Toolkit</h1>
            <div className="h-[2px] w-full rounded-full bg-[#650a76]" />
          </div>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] text-[#4f434f] leading-[30px] m-0 max-w-[560px]">
            Free, evidence-based tools to help you understand your fertility, track your cycle, and plan your journey.
          </p>
        </div>
      </div>

      {/* Tool Selector + Calculator */}
      <div className="max-w-[1440px] mx-auto px-[80px] py-[64px]">
        <SectionHeader title="Interactive Tools" subtitle="Select a tool below to get started — all calculations are private and happen in your browser." />

        <div className="flex gap-[32px]">
          {/* Tool Picker */}
          <div className="flex flex-col gap-[12px] w-[320px] shrink-0">
            {tools.map(tool => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className="flex items-center gap-[16px] p-[20px] rounded-[16px] border-2 text-left cursor-pointer transition-all duration-200"
                style={{
                  background: activeTool === tool.id ? "rgba(167,75,153,0.07)" : "white",
                  borderColor: activeTool === tool.id ? "#a74b99" : "rgba(167,75,153,0.12)",
                  boxShadow: activeTool === tool.id ? "0 4px 16px rgba(167,75,153,0.12)" : "none",
                }}
              >
                <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center shrink-0" style={{ background: activeTool === tool.id ? "rgba(167,75,153,0.12)" : "rgba(167,75,153,0.06)" }}>
                  {tool.icon}
                </div>
                <div>
                  <p className="font-['Manrope',sans-serif] font-bold text-[15px] m-0" style={{ color: activeTool === tool.id ? "#a74b99" : "#221823" }}>{tool.title}</p>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#4f434f] m-0 mt-[2px] leading-[18px]">{tool.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Calculator */}
          <div className="flex-1 bg-white rounded-[24px] p-[40px]" style={{ boxShadow: "0 4px 32px rgba(167,75,153,0.10)", border: "1px solid rgba(167,75,153,0.12)" }}>
            {active && (
              <>
                <div className="flex items-center gap-[14px] mb-[28px]">
                  <div className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center" style={{ background: "rgba(167,75,153,0.10)" }}>
                    {active.icon}
                  </div>
                  <div>
                    <h2 className="font-['Anek_Latin',sans-serif] font-semibold text-[#221823] text-[24px] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>{active.title}</h2>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#4f434f] m-0">{active.desc}</p>
                  </div>
                </div>
                <div className="h-[1px] bg-[rgba(167,75,153,0.10)] mb-[28px]" />
                {active.component}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-[#fff7fa] w-full py-[48px]">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="flex items-start gap-[16px] bg-white rounded-[16px] p-[24px]" style={{ border: "1px solid rgba(167,75,153,0.12)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[1px]">
              <circle cx="12" cy="12" r="10" stroke="#a74b99" strokeWidth="1.8" />
              <path d="M12 8v4M12 16h.01" stroke="#a74b99" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#4f434f] leading-[24px] m-0">
              <strong className="text-[#221823]">Medical Disclaimer:</strong> These tools are for informational purposes only and do not constitute medical advice. Results are estimates based on population-level data and cannot account for your individual health history. Always consult a qualified fertility specialist before making any medical decisions.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full py-[64px]" style={{ background: "linear-gradient(135deg, #650a76 0%, #a74b99 100%)" }}>
        <div className="max-w-[1440px] mx-auto px-[80px] flex flex-col items-center text-center gap-[20px]">
          <h2 className="font-['Anek_Latin',sans-serif] font-semibold text-white text-[40px] leading-[1.1] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            Tools are a starting point. Our specialists are the answer.
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] text-[rgba(255,255,255,0.85)] leading-[28px] m-0 max-w-[480px]">
            Book a free 15-minute discovery call with our fertility team. No commitment, no pressure.
          </p>
          <a
            href="tel:+919182039911"
            className="no-underline mt-[8px] flex items-center gap-[10px] bg-white rounded-full py-[16px] px-[36px] font-['Manrope',sans-serif] font-bold text-[16px] text-[#a74b99] transition-all duration-300 hover:opacity-90 hover:-translate-y-[2px]"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#a74b99" />
            </svg>
            Call +91 91820 39911
          </a>
        </div>
      </div>

      <SharedFooter topOffset={2600} />
    </div>
  );
}
