import { useState, useRef } from "react";
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

// ─── Social Media Data (replace with real IDs / handles when ready) ──────────

const youtubeVideos = [
  { id: "", title: "What is IVF? A Complete Step-by-Step Guide", duration: "8:24", views: "12K views" },
  { id: "", title: "PCOS & Fertility – Everything You Need to Know", duration: "11:45", views: "8.4K views" },
  { id: "", title: "Understanding Male Infertility", duration: "7:10", views: "6.1K views" },
  { id: "", title: "Is Egg Freezing Right For You?", duration: "9:55", views: "5.8K views" },
  { id: "", title: "IUI vs IVF: Which Treatment Suits You Best?", duration: "10:30", views: "9.2K views" },
  { id: "", title: "Real Success Stories: Our IVF Babies", duration: "5:15", views: "15K views" },
];

const instagramPosts = [
  { type: "Reel", caption: "IVF in 60 seconds — everything explained simply 🧬", likes: "1.2K", color: "#a74b99" },
  { type: "Post", caption: "Celebrating a new addition to the Fertinest family 💕", likes: "892", color: "#0288c2" },
  { type: "Reel", caption: "PCOS: myths vs facts — watch till the end!", likes: "2.1K", color: "#650a76" },
  { type: "Post", caption: "A day inside our state-of-the-art ART lab 🔬", likes: "743", color: "#a74b99" },
  { type: "Reel", caption: "Your IVF questions answered by Dr. Mythri Reddy", likes: "1.8K", color: "#0288c2" },
  { type: "Post", caption: "Top nutrition tips for your fertility journey 🥗", likes: "654", color: "#43b960" },
  { type: "Reel", caption: "What happens during an embryo transfer?", likes: "3.2K", color: "#650a76" },
  { type: "Post", caption: "World IVF Day 2024 celebrations at Fertinest 🎉", likes: "1.1K", color: "#a74b99" },
];

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

// ─── YouTube Section ──────────────────────────────────────────────────────────

function YouTubeSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") =>
    scrollRef.current?.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });

  return (
    <div className="py-[64px] bg-white">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
        {/* Header */}
        <div className="flex items-end justify-between mb-[32px] gap-4 flex-wrap">
          <div className="flex items-center gap-[14px]">
            <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center shrink-0" style={{ background: "#FF0000" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <div>
              <h2 className="font-['Anek_Latin',sans-serif] font-semibold text-[#221823] text-[28px] leading-[34px] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                Watch on YouTube
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#4f434f] m-0 mt-[2px]">
                Expert fertility guidance from Dr. Mythri Reddy &amp; team
              </p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@fertinest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[8px] font-['Manrope',sans-serif] font-bold text-[14px] px-[22px] py-[10px] rounded-full no-underline shrink-0 transition-opacity duration-200 hover:opacity-85"
            style={{ background: "#FF0000", color: "white" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            Subscribe
          </a>
        </div>

        {/* Carousel */}
        <div className="relative px-[24px]">
          <CarouselArrowBtn dir="left" onClick={() => scroll("left")} />
          <div
            ref={scrollRef}
            className="no-scrollbar flex gap-[20px] pb-[8px]"
            style={{ overflowX: "auto", scrollbarWidth: "none" }}
          >
            {youtubeVideos.map((vid, i) => (
              <a
                key={i}
                href={vid.id ? `https://www.youtube.com/watch?v=${vid.id}` : "https://www.youtube.com/@fertinest"}
                target="_blank"
                rel="noopener noreferrer"
                className="group no-underline shrink-0 flex flex-col gap-[12px]"
                style={{ width: "300px" }}
              >
                {/* Thumbnail */}
                <div
                  className="relative w-full rounded-[14px] overflow-hidden"
                  style={{ aspectRatio: "16/9", background: "linear-gradient(135deg, #FF000018 0%, #FF000038 100%)" }}
                >
                  {vid.id && (
                    <img src={`https://img.youtube.com/vi/${vid.id}/mqdefault.jpg`} alt={vid.title} className="w-full h-full object-cover" />
                  )}
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-200 group-hover:bg-[rgba(0,0,0,0.10)]">
                    <div
                      className="w-[52px] h-[52px] rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110"
                      style={{ background: "#FF0000" }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                    </div>
                  </div>
                  {/* Duration badge */}
                  <span
                    className="absolute bottom-[8px] right-[8px] font-['Manrope',sans-serif] font-bold text-[11px] text-white px-[6px] py-[2px] rounded-[4px]"
                    style={{ background: "rgba(0,0,0,0.80)" }}
                  >
                    {vid.duration}
                  </span>
                </div>
                {/* Info */}
                <h4
                  className="font-['Manrope',sans-serif] font-bold text-[15px] text-[#221823] m-0 leading-[22px] transition-colors group-hover:text-[#FF0000]"
                  style={{ overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" } as React.CSSProperties}
                >
                  {vid.title}
                </h4>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#4f434f] m-0">{vid.views}</p>
              </a>
            ))}
          </div>
          <CarouselArrowBtn dir="right" onClick={() => scroll("right")} />
        </div>
      </div>
    </div>
  );
}

// ─── Facebook Section ─────────────────────────────────────────────────────────

function FacebookSection() {
  const fbPosts = [
    { emoji: "🧬", text: "Another beautiful family created at Fertinest! We are so proud of our team and grateful for every patient who trusted us. 💕", tag: "Story", tagColor: "#a74b99" },
    { emoji: "🔬", text: "Our embryology lab just received new time-lapse incubators — improving embryo monitoring and selection accuracy significantly.", tag: "Update", tagColor: "#0288c2" },
    { emoji: "📋", text: "Did you know Vitamin D levels significantly affect fertility outcomes? Ask your doctor about checking your levels at your next visit.", tag: "Health Tip", tagColor: "#43b960" },
  ];

  return (
    <div className="py-[64px]" style={{ background: "linear-gradient(180deg, #EBF3FF 0%, #F0F8FF 100%)" }}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
        {/* Header */}
        <div className="flex items-end justify-between mb-[40px] gap-4 flex-wrap">
          <div className="flex items-center gap-[14px]">
            <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center shrink-0" style={{ background: "#1877F2" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </div>
            <div>
              <h2 className="font-['Anek_Latin',sans-serif] font-semibold text-[#221823] text-[28px] leading-[34px] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                Follow Us on Facebook
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#4f434f] m-0 mt-[2px]">
                Clinic news, patient stories, and fertility tips
              </p>
            </div>
          </div>
          <a
            href="https://www.facebook.com/fertinest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[8px] font-['Manrope',sans-serif] font-bold text-[14px] px-[22px] py-[10px] rounded-full no-underline shrink-0 transition-opacity hover:opacity-85"
            style={{ background: "#1877F2", color: "white" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
            Follow Page
          </a>
        </div>

        <div className="flex gap-[24px] flex-wrap lg:flex-nowrap">
          {/* Page card */}
          <div
            className="bg-white rounded-[20px] p-[28px] flex flex-col gap-[20px] shrink-0 w-full lg:w-[272px]"
            style={{ boxShadow: "0 2px 16px rgba(24,119,242,0.10)", border: "1px solid rgba(24,119,242,0.10)" }}
          >
            <div className="w-full h-[100px] rounded-[12px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1877F220, #1877F240)" }}>
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div>
              <h3 className="font-['Manrope',sans-serif] font-bold text-[18px] text-[#221823] m-0">Fertinest Fertility Clinic</h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] m-0 mt-[4px]" style={{ color: "#1877F2" }}>Medical Center · Nellore, AP</p>
            </div>
            <div className="flex gap-[28px]">
              <div>
                <p className="font-['Manrope',sans-serif] font-bold text-[20px] text-[#221823] m-0">4.9★</p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-[#4f434f] m-0">Google Rating</p>
              </div>
              <div>
                <p className="font-['Manrope',sans-serif] font-bold text-[20px] text-[#221823] m-0">2K+</p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-[#4f434f] m-0">Followers</p>
              </div>
            </div>
            <a
              href="https://www.facebook.com/fertinest"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center font-['Manrope',sans-serif] font-bold text-[14px] py-[11px] rounded-[12px] no-underline transition-all hover:opacity-85"
              style={{ background: "#1877F215", color: "#1877F2" }}
            >
              Visit Facebook Page →
            </a>
          </div>

          {/* Post previews */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
            {fbPosts.map((post, i) => (
              <div
                key={i}
                className="bg-white rounded-[16px] p-[20px] flex flex-col gap-[14px]"
                style={{ boxShadow: "0 2px 10px rgba(24,119,242,0.07)", border: "1px solid rgba(24,119,242,0.08)" }}
              >
                <div className="flex items-center gap-[10px]">
                  <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 text-[18px]" style={{ background: "#1877F215" }}>
                    {post.emoji}
                  </div>
                  <div>
                    <p className="font-['Manrope',sans-serif] font-bold text-[13px] text-[#221823] m-0">Fertinest Fertility</p>
                    <span
                      className="font-['Manrope',sans-serif] font-bold text-[10px] tracking-[0.5px] uppercase px-[6px] py-[1px] rounded-full"
                      style={{ background: `${post.tagColor}18`, color: post.tagColor }}
                    >
                      {post.tag}
                    </span>
                  </div>
                </div>
                <p
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#4f434f] leading-[21px] m-0"
                  style={{ overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical" } as React.CSSProperties}
                >
                  {post.text}
                </p>
                <a
                  href="https://www.facebook.com/fertinest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Manrope',sans-serif] font-bold text-[13px] no-underline mt-auto"
                  style={{ color: "#1877F2" }}
                >
                  Read more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
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
            href="https://www.instagram.com/fertinest"
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
            {instagramPosts.map((post, i) => (
              <a
                key={i}
                href="https://www.instagram.com/fertinest"
                target="_blank"
                rel="noopener noreferrer"
                className="group no-underline shrink-0 flex flex-col gap-[10px]"
                style={{ width: "220px" }}
              >
                {/* Square thumbnail */}
                <div
                  className="relative w-full rounded-[16px] overflow-hidden"
                  style={{ aspectRatio: "1/1", background: `linear-gradient(135deg, ${post.color}28 0%, ${post.color}55 100%)` }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center" style={{ background: `${post.color}28` }}>
                      {post.type === "Reel" ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={post.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={post.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                    style={{ background: post.type === "Reel" ? "rgba(0,0,0,0.65)" : post.color }}
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
                <p
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#221823] leading-[20px] m-0"
                  style={{ overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" } as React.CSSProperties}
                >
                  {post.caption}
                </p>
                {/* Likes */}
                <div className="flex items-center gap-[5px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#a74b99">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
                  </svg>
                  <span className="font-['Manrope',sans-serif] font-bold text-[12px] text-[#4f434f]">{post.likes}</span>
                </div>
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
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
      <Header />

      {/* Hero */}
      <div className="relative w-full pt-[70px] lg:pt-[130px] bg-[#ffeffc]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px] py-[64px]">
          <div className="inline-flex flex-col items-stretch gap-[8px] mb-[16px]">
            <h1 className="font-['Anek_Latin',sans-serif] font-semibold text-[#a74b99] text-[56px] leading-[64px] m-0" style={{ fontVariationSettings: "'wdth' 100" }}>Fertility Resources</h1>
            <div className="h-[2px] w-full rounded-full bg-[#650a76]" />
          </div>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] text-[#4f434f] leading-[30px] m-0 max-w-[560px]">
            Evidence-based guides, expert articles, and real answers to the questions you're afraid to ask.
          </p>
        </div>
      </div>

      {/* ── Social Media Sections ── */}
      <YouTubeSection />
      <FacebookSection />
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
