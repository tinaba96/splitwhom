# SplitWhom

**Split the bill and see exactly who pays whom — in the fewest payments.**

A free, no-login web app for splitting shared group expenses. Unlike a simple "one person paid, divide by N" splitter, SplitWhom handles the messy real cases — where several people each paid different amounts — and tells you the minimum set of transfers to settle up.

> Built for trips, camping, BBQs, shared houses, and any group where more than one person fronted the money.

- 🧮 **Fewest-payments settlement** — not just balances; the minimal "who → whom" transfer list
- 👥 **Per-payment participants** — split each expense among only the people involved (e.g. food = everyone, drinks = just three of you)
- 📊 **Balance breakdown** — each member's paid / share / net, so the math is auditable
- 🔌 **No login, no server** — everything runs in your browser; data is saved to `localStorage`
- 💱 Multi-currency (USD / CAD / EUR / JPY), computed in integer minor units so rounding never drifts

## How it works

1. Add the members
2. Add each payment — who paid, what for, how much, and who shares it
3. The settlement (minimal transfers + balance table) updates instantly

The settlement engine lives in `src/lib/settle.ts`: it computes each member's net balance (`paid − owed`), then greedily matches the largest creditor with the largest debtor to minimize the number of transfers.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, static export)
- React 19 / TypeScript
- Tailwind CSS v4

State is held in a small `useSyncExternalStore` store (`src/lib/store.ts`) backed by `localStorage`.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm run lint
```

## Project layout

```
src/
  app/                Next.js App Router (layout, page, globals.css)
  components/         UI (members, payments, results sections)
  lib/
    types.ts          data model + currency definitions
    settle.ts         settlement engine (balances + minimal transfers)
    store.ts          localStorage-backed external store
    format.ts         currency formatting / id generation
    storage.ts        persistence
```

## Roadmap

- [ ] Fixed-amount and percentage shares
- [ ] Shareable group links + QR codes
- [ ] Localized landing pages (i18n + hreflang) for multi-language discovery
- [ ] Receipt scanning (AI)

## License

MIT
