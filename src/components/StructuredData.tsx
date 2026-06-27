import type { Dictionary } from "@/i18n/types";
import { LOCALE_BCP47, SITE_URL, type Locale, localeUrl } from "@/i18n/config";

// JSON-LD structured data: WebApplication (rich result eligibility for the app)
// and FAQPage (FAQ rich results). Rendered per locale for multilingual search.
export default function StructuredData({ t, locale }: { t: Dictionary; locale: Locale }) {
  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SplitWhom",
    url: localeUrl(locale),
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    inLanguage: LOCALE_BCP47[locale],
    description: t.meta.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    isAccessibleForFree: true,
    image: `${SITE_URL}/icon.svg`,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: LOCALE_BCP47[locale],
    mainEntity: t.landing.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
