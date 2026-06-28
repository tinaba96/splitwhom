import type { Dictionary } from "@/i18n/types";

// SEO landing content rendered as static HTML below the tool: how it works,
// why SplitWhom, and an FAQ (which also powers the FAQ structured data).
export default function LandingSections({ t }: { t: Dictionary }) {
  const l = t.landing;
  return (
    <div className="flex flex-col gap-10">
      <section aria-labelledby="how">
        <h2 id="how" className="mb-4 text-lg font-bold tracking-tight">
          {l.howItWorksTitle}
        </h2>
        <ol className="grid gap-3 sm:grid-cols-3">
          {l.steps.map((s, i) => (
            <li key={i} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="mb-2 grid h-7 w-7 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                {i + 1}
              </div>
              <h3 className="text-sm font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="why">
        <h2 id="why" className="mb-4 text-lg font-bold tracking-tight">
          {l.whyTitle}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {l.features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <h3 className="text-sm font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="use-cases">
        <h2 id="use-cases" className="mb-4 text-lg font-bold tracking-tight">
          {l.useCasesTitle}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {l.useCases.map((u, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <h3 className="text-sm font-semibold">{u.title}</h3>
              <p className="mt-1 text-sm text-muted">{u.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq" className="mb-4 text-lg font-bold tracking-tight">
          {l.faqTitle}
        </h2>
        <div className="flex flex-col gap-2">
          {l.faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold marker:hidden">
                <span className="flex items-center justify-between gap-2">
                  {f.q}
                  <span aria-hidden className="text-muted transition group-open:rotate-180">▾</span>
                </span>
              </summary>
              <p className="mt-2 text-sm text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
