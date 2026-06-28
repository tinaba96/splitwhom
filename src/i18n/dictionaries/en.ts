import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "SplitWhom — split the bill & see who pays whom",
    description:
      "Free, no-login web app that splits group expenses and shows exactly who pays whom in the fewest payments. Perfect for trips, camping, and shared houses.",
    keywords: [
      "split the bill",
      "split expenses",
      "bill splitter",
      "who pays whom",
      "settle up",
      "group expenses",
      "expense splitter",
      "split costs calculator",
    ],
    ogTitle: "SplitWhom — split the bill & see who pays whom",
    ogDescription:
      "Split group expenses and settle up in the fewest payments. No sign-up, free, works in your browser.",
  },
  hero: {
    tagline:
      "Split shared expenses and see exactly who pays whom — in the fewest payments. No sign-up, runs entirely in your browser.",
  },
  setup: {
    eventName: "Event name",
    eventPlaceholder: "e.g. Camping trip",
    currency: "Currency",
  },
  members: {
    title: "Members",
    addPlaceholder: "Add a name",
    add: "Add",
    empty: "Add everyone who shared the costs.",
    removeAria: "Remove {name}",
    confirmDelete: "This also deletes {count} payment(s) made by {name}. Continue?",
    peopleLabel: "people",
  },
  payments: {
    title: "Payments",
    itemsLabel: "items",
    addMembersFirst: "Add members first.",
    paidBy: "Paid by",
    description: "Description",
    descPlaceholder: "e.g. Food",
    amount: "Amount",
    splitBetween: "Split between",
    selectAll: "Select all",
    clearAll: "Clear all",
    addPayment: "Add payment",
    paidFor: "paid for",
    splitEveryone: "Split between everyone",
    splitBetweenNames: "Split between {names}",
    deleteAria: "Delete",
    removed: "(removed)",
    capToggle: "Spending caps (optional)",
    capPlaceholder: "no cap",
    capTag: "max",
    splitRest: "Rest split between {names}",
    capsTooLow: "These caps can't cover the total.",
  },
  results: {
    emptyPrompt: "Add members and payments to see the settlement here.",
    settlementTitle: "Settlement — fewest payments",
    total: "Total {amount}",
    allSettled: "All settled — nobody owes anything 🎉",
    balancesTitle: "Balances",
    member: "Member",
    paid: "Paid",
    share: "Share",
    net: "Net",
    legendPositive: "Positive",
    legendNegative: "negative",
    legendPositiveDesc: "= gets money back",
    legendNegativeDesc: "= owes money",
  },
  footer: {
    loadSample: "Load sample data",
    reset: "Reset everything",
    confirmSample: "Replace your current data with sample data?",
    confirmReset: "Erase all data? This cannot be undone.",
  },
  sample: {
    title: "Camping trip",
    names: ["Alex", "Ben", "Chloe", "Dan", "Emma"],
    food: "Food",
    drinks: "Drinks",
    firewood: "Firewood",
  },
  landing: {
    heroHeading: "Split the bill and see who pays whom",
    heroSub:
      "When several people pay for different things, SplitWhom works out the simplest way to settle up — the fewest payments to make everyone even. Free, no account, no app to install.",
    howItWorksTitle: "How it works",
    steps: [
      {
        title: "Add everyone",
        body: "List the people who shared the expenses — friends, roommates, your camping crew.",
      },
      {
        title: "Enter who paid for what",
        body: "Add each payment with the amount, and pick exactly who it should be split between.",
      },
      {
        title: "Get the fewest payments",
        body: "SplitWhom instantly shows who pays whom to settle up with the minimum number of transfers.",
      },
    ],
    whyTitle: "Why SplitWhom",
    features: [
      {
        title: "Fewest payments",
        body: "Most splitters just show balances. SplitWhom calculates the minimal set of transfers, so you make as few payments as possible.",
      },
      {
        title: "Split each item your way",
        body: "Shared the food but only three of you bought drinks? Choose who's included on every single expense.",
      },
      {
        title: "Private by design",
        body: "No sign-up and no server — every calculation runs in your browser and your data stays on your device.",
      },
      {
        title: "Any currency",
        body: "Works in USD, EUR, JPY and more, with exact rounding so no cent or yen ever goes missing.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "How do you split a bill when several people paid?",
        a: "Enter each payment and who shared it. SplitWhom adds up what everyone paid versus what they owe, then shows the fewest transfers to make everyone even.",
      },
      {
        q: "Is SplitWhom free?",
        a: "Yes, completely free. There's no account, no subscription, and nothing to install — it runs in your web browser.",
      },
      {
        q: "Can I split a single expense between only some people?",
        a: "Yes. For every payment you choose exactly who it's split between, so shared costs and group-only costs are both handled correctly.",
      },
      {
        q: "Does it work for trips, camping, and roommates?",
        a: "That's exactly what it's for — any situation where more than one person fronted the money and you need to settle up fairly.",
      },
      {
        q: "Is my data private?",
        a: "Yes. There is no login and no server. All calculations happen in your browser and your data is saved only on your device.",
      },
    ],
  },
  switcher: {
    label: "Language",
  },
  share: {
    share: "Share",
    copied: "Link copied!",
    edit: "Edit",
    readonlyNote: "Shared result · view only",
    invalid: "This shared link is invalid or empty.",
    ctaTitle: "Split your own group expenses",
    ctaButton: "Open SplitWhom",
  },
};
