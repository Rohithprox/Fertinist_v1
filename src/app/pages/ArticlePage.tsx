import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Header } from "../components/shared/Header";
import { Footer as SharedFooter } from "../components/shared/Footer";
import { articleBySlug, articles, readTime, type Article } from "../data/articles";

// Minimal Markdown renderer for the subset the articles use: ## / ###
// headings, - bullets, **bold**, *italic*, and paragraphs. A full markdown
// dependency would be ~40kb for features none of this content needs.

function inline(text: string, key: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**"))
      return <strong key={`${key}-${i}`} className="font-semibold text-[#221823]">{p.slice(2, -2)}</strong>;
    if (p.startsWith("*") && p.endsWith("*"))
      return <em key={`${key}-${i}`}>{p.slice(1, -1)}</em>;
    return <span key={`${key}-${i}`}>{p}</span>;
  });
}

function Markdown({ source }: { source: string }) {
  const blocks: React.ReactNode[] = [];
  const lines = source.split("\n");
  let bullets: string[] = [];

  const flush = () => {
    if (!bullets.length) return;
    blocks.push(
      <ul key={`ul-${blocks.length}`} className="list-disc pl-[22px] m-0 mb-[20px] flex flex-col gap-[8px]">
        {bullets.map((b, i) => (
          <li key={i} className="text-[16px] sm:text-[17px] leading-[29px] text-[#4f434f]">
            {inline(b, `li-${blocks.length}-${i}`)}
          </li>
        ))}
      </ul>,
    );
    bullets = [];
  };

  lines.forEach((raw, n) => {
    const line = raw.trim();
    if (!line) { flush(); return; }

    if (line.startsWith("- ")) { bullets.push(line.slice(2)); return; }
    flush();

    if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={n} className="font-['Manrope',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#221823] m-0 mt-[28px] mb-[10px]">
          {line.slice(4)}
        </h3>,
      );
    } else if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={n} className="font-['Anek_Latin',sans-serif] font-semibold text-[24px] sm:text-[30px] text-[#943687] m-0 mt-[40px] mb-[14px] leading-[1.25]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {line.slice(3)}
        </h2>,
      );
    } else {
      blocks.push(
        <p key={n} className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] sm:text-[17px] leading-[29px] text-[#4f434f] m-0 mb-[18px]">
          {inline(line, `p-${n}`)}
        </p>,
      );
    }
  });
  flush();
  return <>{blocks}</>;
}

function RelatedArticles({ current }: { current: Article }) {
  const others = articles.filter((a) => a.slug !== current.slug).slice(0, 3);
  if (!others.length) return null;
  return (
    <div className="mt-[56px] pt-[32px]" style={{ borderTop: "1px solid rgba(167,75,153,0.15)" }}>
      <h2 className="font-['Anek_Latin',sans-serif] font-semibold text-[24px] text-[#943687] m-0 mb-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        More from our resources
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
        {others.map((a) => (
          <Link key={a.slug} to={`/resources/${a.slug}`} className="no-underline bg-white rounded-[16px] p-[20px] block"
            style={{ boxShadow: "0 2px 12px rgba(167,75,153,0.08)", border: "1px solid rgba(167,75,153,0.08)" }}>
            <span className="font-['Manrope',sans-serif] font-bold text-[10.5px] tracking-[0.6px] uppercase" style={{ color: a.tagColor }}>
              {a.tag}
            </span>
            <p className="font-['Manrope',sans-serif] font-bold text-[15px] text-[#221823] m-0 mt-[8px] leading-[22px]">{a.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articleBySlug.get(slug) : undefined;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!article) return <Navigate to="/resources" replace />;

  return (
    <div className="bg-white w-full">
      <Header />

      <div className="relative w-full" style={{ paddingTop: "var(--header-h)", background: "linear-gradient(135deg, #ffeffc 0%, #f7e9fb 100%)" }}>
        <div className="max-w-[820px] mx-auto px-5 sm:px-10 py-[48px] sm:py-[64px]">
          <Link to="/resources" className="no-underline font-['Manrope',sans-serif] font-bold text-[13px] text-[#943687] inline-flex items-center gap-[6px] mb-[20px]">
            <span aria-hidden="true">&larr;</span> All resources
          </Link>
          <div className="flex items-center gap-[10px] flex-wrap mb-[14px]">
            <span className="font-['Manrope',sans-serif] font-bold text-[11px] tracking-[0.7px] uppercase px-[12px] py-[5px] rounded-full"
              style={{ background: `${article.tagColor}18`, color: article.tagColor, border: `1px solid ${article.tagColor}30` }}>
              {article.tag}
            </span>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#4f434f]">{readTime(article.body)}</span>
          </div>
          <h1 className="font-['Anek_Latin',sans-serif] font-semibold text-[32px] sm:text-[44px] text-[#221823] m-0 leading-[1.15]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {article.title}
          </h1>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] leading-[28px] text-[#4f434f] m-0 mt-[16px]">
            {article.excerpt}
          </p>
        </div>
      </div>

      <article className="max-w-[820px] mx-auto px-5 sm:px-10 py-[44px] sm:py-[56px]">
        <Markdown source={article.body} />

        <div className="mt-[40px] rounded-[16px] p-[24px]" style={{ background: "rgba(167,75,153,0.07)" }}>
          <p className="font-['Manrope',sans-serif] font-bold text-[15px] text-[#943687] m-0 mb-[8px]">
            Speak to a specialist
          </p>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-[26px] text-[#4f434f] m-0 mb-[16px]">
            Every fertility journey is different. Book a consultation at Nellore or Anantapur for an assessment based on your own history and results.
          </p>
          <Link to="/locations" className="no-underline inline-block font-['Manrope',sans-serif] font-bold text-[14px] text-white px-[24px] py-[12px] rounded-full"
            style={{ background: "linear-gradient(135deg, #a74b99, #650a76)" }}>
            Find your nearest clinic
          </Link>
        </div>

        {article.disclaimer && (
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] leading-[22px] text-[#777] m-0 mt-[28px] italic">
            {article.disclaimer}
          </p>
        )}

        <RelatedArticles current={article} />
      </article>

      <SharedFooter />
    </div>
  );
}
