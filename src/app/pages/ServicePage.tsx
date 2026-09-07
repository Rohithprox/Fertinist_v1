import { useParams, Navigate } from "react-router-dom";
import { TreatmentPageTemplate } from "../components/TreatmentPageTemplate";
import { serviceBySlug } from "../data/services";
import imgHeroFallback from "../../imports/FertilityTreatments-4/62c7b9e907f92d9cee0468ccfe33cef4450180bb.png";

// One generated hero per slug (see tools/generate-heroes.py). Globbed rather
// than imported one by one, so a new service needs no wiring here.
const heroes = import.meta.glob("../assets/heroes/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const heroBySlug: Record<string, string> = Object.fromEntries(
  Object.entries(heroes).map(([path, url]) => [
    path.split("/").pop()!.replace(".webp", ""),
    url,
  ]),
);

// Every dropdown service without a bespoke page renders through here.
export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceBySlug.get(slug) : undefined;

  // unknown slug: send them home rather than showing an empty shell
  if (!service) return <Navigate to="/" replace />;

  return (
    <TreatmentPageTemplate
      key={service.slug}
      treatmentName={service.name}
      treatmentSubtitle={service.subtitle}
      heroImage={heroBySlug[service.slug] ?? imgHeroFallback}
      whatIsTitle={service.whatIsTitle}
      whatIsDescription={service.whatIs}
      rightForYouTitle={service.rightForYouTitle}
      rightForYouItems={service.rightForYou}
      timelineTitle={service.timelineTitle}
      timelineIntro={service.timelineIntro}
      timelinePhases={service.phases}
      timelineOverall={service.overall}
    />
  );
}
