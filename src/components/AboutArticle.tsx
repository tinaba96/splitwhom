import { CONTACT_EMAIL, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import PageChrome from "./PageChrome";

export default function AboutArticle({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <PageChrome t={t} locale={locale} subpath="about/">
      <article className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold tracking-tight">{t.about.title}</h1>
        {t.about.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-muted">
            {p}
          </p>
        ))}
        <section className="flex flex-col gap-1.5">
          <h2 className="text-base font-semibold text-foreground">{t.about.contactHeading}</h2>
          <p className="text-sm leading-relaxed text-muted">
            {t.about.contactBody}{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-brand hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>
      </article>
    </PageChrome>
  );
}
