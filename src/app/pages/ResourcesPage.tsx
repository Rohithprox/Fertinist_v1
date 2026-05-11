import { useState } from "react";
import { Header } from "../components/shared/Header";
import { Footer as SharedFooter } from "../components/shared/Footer";

type Category = "all" | "fertility-basics" | "male-fertility" | "female-fertility" | "treatments" | "lifestyle";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fertility-basics", label: "Fertility Basics" },
  { id: "female-fertility", label: "Female Fertility" },
  { id: "male-fertility", label: "Male Fertility" },
  { id: "treatments", label: "Treatments" },
  { id: "lifestyle", label: "Lifestyle & Wellness" },
];

const articles = [
  {
    category: "fertility-basics" as Category,
    tag: "Fertility Basics",
    tagColor: "#a74b99",
    readTime: "8 min read",
    title: "Understanding IVF: A Complete Step-by-Step Guide",
    excerpt: "In vitro fertilisation demystified — from ovarian stimulation to embryo transfer. What to expect, what questions to ask, and how to prepare your body and mind.",
    featured: true,
  },
  {
    category: "female-fertility" as Category,
    tag: "Female Fertility",
    tagColor: "#0288c2",
    readTime: "6 min read",
    title: "Fertility After 35: Everything You Need to Know",
    excerpt: "Age and fertility have a complex relationship. Learn what actually changes in your 30s, what still works in your favour, and what modern medicine can do.",
    featured: false,
  },
  {
    category: "male-fertility" as Category,
    tag: "Male Fertility",
    tagColor: "#650a76",
    readTime: "5 min read",
    title: "Male Fertility: Common Myths Debunked",
    excerpt: "From laptops to boxers — separating fact from fiction about what actually affects sperm health and what you can genuinely improve.",
    featured: false,
  },
  {
    category: "female-fertility" as Category,
    tag: "Female Fertility",
    tagColor: "#0288c2",
    readTime: "7 min read",
    title: "PCOS and Fertility: Your Questions Answered",
    excerpt: "PCOS is one of the most common causes of female infertility — but it's also one of the most treatable. Here's what the research actually says.",
    featured: false,
  },
  {
    category: "lifestyle" as Category,
    tag: "Lifestyle & Wellness",
    tagColor: "#43b960",
    readTime: "5 min read",
    title: "Nutrition and Fertility: What to Eat (and What to Avoid)",
    excerpt: "A fertility dietitian's evidence-based guide to foods that support conception, hormonal balance, and egg and sperm quality.",
    featured: false,
  },
  {
    category: "treatments" as Category,
    tag: "Treatments",
    tagColor: "#a74b99",
    readTime: "6 min read",
    title: "IUI vs IVF: Which Treatment is Right for You?",
    excerpt: "A clear, no-jargon comparison of two of the most common fertility treatments — costs, success rates, and who each one suits best.",
    featured: false,
  },
  {
    category: "fertility-basics" as Category,
    tag: "Fertility Basics",
    tagColor: "#a74b99",
    readTime: "4 min read",
    title: "Understanding Your Ovulation Cycle",
    excerpt: "Your fertile window is narrower than you might think. Learn how to identify your peak fertility days using signs your body is already giving you.",
    featured: false,
  },
  {
    category: "lifestyle" as Category,
    tag: "Lifestyle & Wellness",
    tagColor: "#43b960",
    readTime: "6 min read",
    title: "Stress and Infertility: What the Research Says",
    excerpt: "Does stress cause infertility? Can meditation improve IVF outcomes? We look at what the science actually supports — and how to protect your wellbeing.",
    featured: false,
  },
  {
    category: "male-fertility" as Category,
    tag: "Male Fertility",
    tagColor: "#650a76",
    readTime: "5 min read",
    title: "Semen Analysis Explained: Reading Your Report",
    excerpt: "Count, motility, morphology — what these numbers mean, what's considered normal, and what options exist when results are below average.",
    featured: false,
  },
];

function ArticleCard({ article }: { article: typeof articles[0] }) {
  return (
    <div
      className="bg-white rounded-[20px] p-[28px] flex flex-col gap-[16px] cursor-pointer transition-all duration-300 hover:-translate-y-[4px]"
      style={{ boxShadow: "0 2px 16px rgba(167,75,153,0.08)", border: "1px solid rgba(167,75,153,0.08)" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(167,75,153,0.15)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(167,75,153,0.08)"; }}
    >
      {/* Placeholder image area */}
      <div className="w-full h-[160px] rounded-[12px] flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${article.tagColor}18, ${article.tagColor}08)` }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke={article.tagColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke={article.tagColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-['Manrope',sans-serif] font-bold text-[11px] tracking-[0.8px] uppercase px-[10px] py-[4px] rounded-full" style={{ background: `${article.tagColor}15`, color: article.tagColor }}>
          {article.tag}
        </span>
        <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#4f434f]">{article.readTime}</span>
      </div>

      <h3 className="font-['Manrope',sans-serif] font-bold text-[18px] text-[#221823] leading-[26px] m-0">{article.title}</h3>
      <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#4f434f] leading-[23px] m-0">{article.excerpt}</p>

      <div className="flex items-center gap-[6px] mt-auto pt-[8px]">
        <span className="font-['Manrope',sans-serif] font-bold text-[14px]" style={{ color: article.tagColor }}>Read Article</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M12 5l7 7-7 7" stroke={article.tagColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = activeCategory === "all"
    ? articles
    : articles.filter(a => a.category === activeCategory);

  const featured = articles.find(a => a.featured);
  const rest = filtered.filter(a => !a.featured);

  return (
    <div className="bg-white relative w-full" style={{ minHeight: "100vh" }}>
      <Header />

      {/* Hero */}
      <div className="relative w-full pt-[130px] bg-[#ffeffc]">
        <div className="max-w-[1440px] mx-auto px-[80px] py-[64px]">
          <div className="inline-flex flex-col items-stretch gap-[8px] mb-[16px]">
            <h1 className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[56px] leading-[64px] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>Fertility Resources</h1>
            <div className="h-[2px] w-full rounded-full bg-[#650a76]" />
          </div>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] text-[#4f434f] leading-[30px] m-0 max-w-[560px]">
            Evidence-based guides, expert articles, and real answers to the questions you're afraid to ask.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-[1440px] mx-auto px-[80px] py-[40px]">
        <div className="flex gap-[12px] flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="font-['Manrope',sans-serif] font-bold text-[14px] px-[20px] py-[10px] rounded-full border-2 transition-all duration-200 cursor-pointer"
              style={{
                background: activeCategory === cat.id ? "#a74b99" : "transparent",
                color: activeCategory === cat.id ? "white" : "#a74b99",
                borderColor: "#a74b99",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Article (only shown when "all" selected) */}
      {activeCategory === "all" && featured && (
        <div className="max-w-[1440px] mx-auto px-[80px] mb-[48px]">
          <div
            className="rounded-[24px] p-[48px] flex items-center gap-[48px] cursor-pointer transition-all duration-300 hover:-translate-y-[4px]"
            style={{ background: "linear-gradient(135deg, #a74b99 0%, #650a76 100%)", boxShadow: "0 8px 40px rgba(167,75,153,0.30)" }}
          >
            <div className="flex-1 flex flex-col gap-[16px]">
              <div className="flex items-center gap-[12px]">
                <span className="font-['Manrope',sans-serif] font-bold text-[11px] tracking-[0.8px] uppercase px-[12px] py-[5px] rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                  Featured
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[rgba(255,255,255,0.7)]">{featured.readTime}</span>
              </div>
              <h2 className="font-['Anek_Latin',sans-serif] font-semibold text-white text-[36px] leading-[44px] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>{featured.title}</h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] text-[rgba(255,255,255,0.85)] leading-[27px] m-0">{featured.excerpt}</p>
              <div className="flex items-center gap-[8px] mt-[8px]">
                <span className="font-['Manrope',sans-serif] font-bold text-[15px] text-white">Read Article</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="w-[280px] h-[200px] rounded-[16px] shrink-0 flex items-center justify-center bg-[rgba(255,255,255,0.1)]">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="max-w-[1440px] mx-auto px-[80px] pb-[80px]">
        <div className="grid grid-cols-3 gap-[24px]">
          {rest.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>

        {rest.length === 0 && (
          <div className="text-center py-[80px]">
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] text-[#4f434f]">No articles in this category yet. Check back soon.</p>
          </div>
        )}
      </div>

      <SharedFooter topOffset={2200} />
    </div>
  );
}
