import type { Dictionary } from "@/i18n/types";
import { LOCALE_BCP47, SITE_URL, type Locale, localeUrl } from "@/i18n/config";

// JSON-LD structured data, rendered per locale for multilingual + generative search:
//   • Organization  — the publisher entity (knowledge-graph anchor)
//   • WebApplication — rich-result eligibility + feature list for AI summaries
//   • HowTo          — the "how it works" steps as machine-readable instructions
//   • FAQPage        — FAQ rich results (also a strong signal for answer engines)
// No aggregateRating is emitted: we have no genuine review data, and fabricating
// ratings violates schema.org/Google guidelines and erodes trust with AI engines.
export default function StructuredData({ t, locale }: { t: Dictionary; locale: Locale }) {
  const lang = LOCALE_BCP47[locale];

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SplitWhom",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/icon.svg`,
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SplitWhom",
    url: localeUrl(locale),
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript and a modern web browser.",
    inLanguage: lang,
    description: t.meta.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    isAccessibleForFree: true,
    featureList: t.landing.features.map((f) => f.title),
    publisher: { "@type": "Organization", name: "SplitWhom", url: `${SITE_URL}/` },
    image: `${SITE_URL}/icon.svg`,
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: t.landing.howItWorksTitle,
    inLanguage: lang,
    step: t.landing.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: t.landing.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const graphs = [organization, webApp, howTo, faqPage];

  return (
    <>
      {graphs.map((g, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(g) }}
        />
      ))}
    </>
  );
}
