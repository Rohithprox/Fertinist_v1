import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { articles as writtenArticles, readTime } from "../data/articles";
import { INSTAGRAM_POSTS, INSTAGRAM_PROFILE } from "../data/instagram";

const CARD_COLORS = ["#a74b99", "#0288c2", "#650a76", "#43b960"];

// Reel covers, downloaded by tools/fetch-instagram-covers.py. Instagram's CDN
// urls are signed and expire, so the images are hosted here instead.
const COVERS = import.meta.glob("../assets/instagram/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const coverFor = (url: string) => {
  const code = url.match(/\/(?:reel|p|tv)\/([A-Za-z0-9_-]+)/)?.[1];
  if (!code) return undefined;
  const hit = Object.entries(COVERS).find(([path]) => path.endsWith(`/${code}.webp`));
  return hit?.[1];
};

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

// Written articles come from src/app/data/articles.ts. The remaining entries
// below are placeholders, shown but not clickable until their copy arrives.
const articles = [
  ...writtenArticles.map((a) => ({
    category: a.category as Category,
    tag: a.tag,
    tagColor: a.tagColor,
    readTime: readTime(a.body),
    title: a.title,
    excerpt: a.excerpt,
    featured: !!a.featured,
    slug: a.slug as string | undefined,
  })),
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

// ─── Social Media Data (replace with real IDs / handles when ready) ──────────


// ─── Shared carousel arrow button ────────────────────────────────────────────

function CarouselArrowBtn({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 z-10 w-[38px] h-[38px] rounded-full bg-white border border-[rgba(0,0,0,0.10)] shadow-md flex items-center justify-center transition-all duration-200 hover:shadow-lg hover:scale-105"
      style={{ [dir === "left" ? "left" : "right"]: "-18px" }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#221823" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {dir === "left" ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
}



// ─── Instagram Section ────────────────────────────────────────────────────────

function InstagramSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") =>
    scrollRef.current?.scrollBy({ left: dir === "right" ? 260 : -260, behavior: "smooth" });

  return (
    <div className="py-[64px]" style={{ background: "linear-gradient(180deg, #fff4fd 0%, #f3eeff 100%)" }}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
        {/* Header */}
        <div className="flex items-end justify-between mb-[32px] gap-4 flex-wrap">
          <div className="flex items-center gap-[14px]">
            <div
              className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, #833AB4 0%, #FD1D1D 52%, #FCAF45 100%)" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="white" stroke="none" />
              </svg>
            </div>
            <div>
              <h2 className="font-['Anek_Latin',sans-serif] font-semibold text-[#221823] text-[28px] leading-[34px] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                Follow on Instagram
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#4f434f] m-0 mt-[2px]">
                Reels, tips &amp; behind-the-scenes from Fertinest
              </p>
            </div>
          </div>
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[8px] font-['Manrope',sans-serif] font-bold text-[14px] px-[22px] py-[10px] rounded-full no-underline shrink-0 transition-opacity hover:opacity-85"
            style={{ background: "linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)", color: "white" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
            </svg>
            Follow
          </a>
        </div>

        {/* Carousel */}
        <div className="relative px-[24px]">
          <CarouselArrowBtn dir="left" onClick={() => scroll("left")} />
          <div
            ref={scrollRef}
            className="no-scrollbar flex gap-[16px] pb-[8px]"
            style={{ overflowX: "auto", scrollbarWidth: "none" }}
          >
            {INSTAGRAM_POSTS.map((post, i) => (
              <a
                key={i}
                href={post.url || INSTAGRAM_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="group no-underline shrink-0 flex flex-col gap-[10px]"
                style={{ width: "220px" }}
              >
                {/* Square thumbnail */}
                <div
                  className="relative w-full rounded-[16px] overflow-hidden"
                  style={{ aspectRatio: "1/1", background: `linear-gradient(135deg, ${CARD_COLORS[i % CARD_COLORS.length]}28 0%, ${CARD_COLORS[i % CARD_COLORS.length]}55 100%)` }}
                >
                  {coverFor(post.url) && (
                    <img
                      src={coverFor(post.url)}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div
                      className="w-[54px] h-[54px] rounded-full flex items-center justify-center backdrop-blur-[2px]"
                      style={{ background: coverFor(post.url) ? "rgba(0,0,0,0.42)" : `${CARD_COLORS[i % CARD_COLORS.length]}28` }}
                    >
                      {post.type === "Reel" ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={coverFor(post.url) ? "#ffffff" : CARD_COLORS[i % CARD_COLORS.length]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={coverFor(post.url) ? "#ffffff" : CARD_COLORS[i % CARD_COLORS.length]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      )}
                    </div>
                  </div>
                  {/* Type badge */}
                  <span
                    className="absolute top-[10px] left-[10px] font-['Manrope',sans-serif] font-bold text-[10px] tracking-[0.5px] uppercase px-[8px] py-[3px] rounded-full text-white"
                    style={{ background: post.type === "Reel" ? "rgba(0,0,0,0.65)" : CARD_COLORS[i % CARD_COLORS.length] }}
                  >
                    {post.type === "Reel" ? "▶ Reel" : "Post"}
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: "rgba(0,0,0,0.22)" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                </div>
                {/* Caption */}
                {post.caption && (
                  <p
                    className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#221823] leading-[20px] m-0"
                    style={{ overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" } as React.CSSProperties}
                  >
                    {post.caption}
                  </p>
                )}
              </a>
            ))}
          </div>
          <CarouselArrowBtn dir="right" onClick={() => scroll("right")} />
        </div>
      </div>
    </div>
  );
}

// ─── Article Card ─────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: typeof articles[0] }) {
  const Wrapper = (article.slug ? Link : "div") as React.ElementType;
  return (
    <Wrapper
      {...(article.slug ? { to: `/resources/${article.slug}` } : {})}
      className={`bg-white rounded-[20px] p-[28px] flex flex-col gap-[16px] transition-all duration-300 no-underline ${article.slug ? "cursor-pointer hover:-translate-y-[4px]" : "cursor-default"}`}
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
    </Wrapper>
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
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
      <Header />

      {/* Hero */}
      <div className="relative w-full bg-[#ffeffc]" style={{ paddingTop: "var(--header-h)" }}>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-[64px]">
          <div className="inline-flex flex-col items-stretch gap-[8px] mb-[16px]">
            <h1 className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[36px] sm:text-[56px] leading-[1.15] sm:leading-[64px] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>Fertility Resources</h1>
            <div className="h-[2px] w-full rounded-full bg-[#650a76]" />
          </div>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] text-[#4f434f] leading-[30px] m-0 max-w-[560px]">
            Evidence-based guides, expert articles, and real answers to the questions you're afraid to ask.
          </p>
        </div>
      </div>

      {/* ── Social Media Sections ── */}
      <InstagramSection />

      {/* Divider before articles */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]"><div className="h-[1px]" style={{ background: "rgba(167,75,153,0.12)" }} /></div>

      {/* Category Filter */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-[40px]">
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
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] mb-[48px]">
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
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] pb-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
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

      <SharedFooter />
    </div>
  );
}
