import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import PageChrome from "./PageChrome";

export const LAST_UPDATED = "2026-06-28";

type LegalDoc = Dictionary["privacy"]; // same shape as Dictionary["terms"]

// Renders a legal document (Privacy Policy or Terms of Service).
export default function LegalArticle({
  t,
  locale,
  doc,
  subpath,
}: {
  t: Dictionary;
  locale: Locale;
  doc: LegalDoc;
  subpath: string;
}) {
  return (
    <PageChrome t={t} locale={locale} subpath={subpath}>
      <article className="flex flex-col gap-5">
        <header className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">{doc.title}</h1>
          <p className="text-xs text-muted">
            {doc.updatedLabel}: {LAST_UPDATED}
          </p>
        </header>
        <p className="text-sm leading-relaxed text-muted">{doc.intro}</p>
        {doc.sections.map((s, i) => (
          <section key={i} className="flex flex-col gap-1.5">
            <h2 className="text-base font-semibold text-foreground">{s.heading}</h2>
            <p className="text-sm leading-relaxed text-muted">{s.body}</p>
          </section>
        ))}
      </article>
    </PageChrome>
  );
}
