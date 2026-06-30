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
    notePlaceholder: "Email / phone / payment ID (optional)",
    contactsTitle: "Members & payment info",
    copy: "Copy",
    copied: "Copied!",
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
        q: "How is SplitWhom different from apps like Splitwise?",
        a: "SplitWhom needs no account, no app install, and no server — it runs entirely in your browser. It also works out the fewest payments to settle up and lets you pick exactly who shares each expense, all for free.",
      },
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
      {
        q: "Can I cap how much one person pays?",
        a: "Yes. For any payment you can set a maximum (cap) for specific people; they pay at most that amount and the rest is shared among the others.",
      },
      {
        q: "Can I share the result with my group?",
        a: "Yes. Tap Share to copy a link that opens a read-only summary of who pays whom. The data is encoded in the link itself — nothing is stored on a server.",
      },
      {
        q: "Does it work on my phone?",
        a: "Yes. SplitWhom runs in any modern mobile or desktop browser — there's no app to install.",
      },
    ],
    useCasesTitle: "Made for real-life group costs",
    useCases: [
      {
        title: "Camping & outdoor trips",
        body: "One person buys the food, another the firewood, a third the gear — SplitWhom evens it all out in the fewest payments.",
      },
      {
        title: "Travel & vacations",
        body: "Hotels, taxis, and dinners paid by different people across the trip? Settle the whole thing at the end with one clear list.",
      },
      {
        title: "Shared houses & roommates",
        body: "Split groceries, utilities, and supplies — and choose exactly who shares each expense.",
      },
      {
        title: "Parties, BBQs & group dinners",
        body: "When several people chip in for a get-together, see at a glance who owes whom.",
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
  site: {
    footerTagline: "Split the bill and see who pays whom — free and no sign-up.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    about: "About",
    contact: "Contact",
    rights: "All rights reserved.",
  },
  privacy: {
    title: "Privacy Policy",
    updatedLabel: "Last updated",
    intro:
      "This Privacy Policy explains how SplitWhom handles information when you use the site at splitwhom.com. SplitWhom has no user accounts and no server-side database — the split you create stays in your own browser.",
    sections: [
      {
        heading: "Information you enter",
        body: "The members, payments, and notes you type are stored only in your browser's local storage on your device. They are not transmitted to or stored on our servers, because SplitWhom has no backend database.",
      },
      {
        heading: "Shared links",
        body: "When you create a Share link, the split data is compressed and encoded inside the link's URL fragment (after the # symbol). It is not sent to any server. Anyone you give the link to can view that data, so only share it with people you intend to.",
      },
      {
        heading: "Cookies and local storage",
        body: "SplitWhom itself uses your browser's local storage to remember your current split. We do not set our own tracking cookies. However, the third-party services below may set cookies in your browser.",
      },
      {
        heading: "Analytics",
        body: "We use Google Analytics 4 to understand how the site is used (for example, page views and general location). Google may set cookies and process this data in accordance with its own policies. For details, see Google's Privacy Policy at policies.google.com/privacy.",
      },
      {
        heading: "Advertising",
        body: "We use Google AdSense to display ads. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads to you. You can opt out of personalized advertising by visiting Google's Ads Settings at adsettings.google.com, or opt out of third-party vendors' use of cookies at aboutads.info.",
      },
      {
        heading: "Consent in the EEA, UK and Switzerland",
        body: "If you are in the European Economic Area, the United Kingdom, or Switzerland, a consent message is shown so you can choose how your data is used for ads, as required by applicable law.",
      },
      {
        heading: "Children",
        body: "SplitWhom is not directed to children under 13, and we do not knowingly collect personal information from them.",
      },
      {
        heading: "Your choices",
        body: "You can clear your data at any time by using the Reset button or clearing your browser storage, decline or manage ad personalization through the controls above, and use a browser ad/tracker blocker if you prefer.",
      },
      {
        heading: "Changes to this policy",
        body: "We may update this policy from time to time. Material changes will be reflected by the date shown above.",
      },
      {
        heading: "Contact",
        body: "If you have questions about this policy, contact us at contact@splitwhom.com.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updatedLabel: "Last updated",
    intro:
      "By using SplitWhom at splitwhom.com, you agree to these terms. If you do not agree, please do not use the site.",
    sections: [
      {
        heading: "The service",
        body: "SplitWhom is a free tool that helps groups split shared expenses and see who pays whom. It requires no account and runs in your browser.",
      },
      {
        heading: "Use at your own discretion",
        body: "SplitWhom is provided for convenience. Always review the results before transferring money. You are responsible for how you use the calculations and for any payments you make.",
      },
      {
        heading: "No warranty",
        body: 'The service is provided "as is" and "as available", without warranties of any kind, whether express or implied, including accuracy, fitness for a particular purpose, or uninterrupted availability.',
      },
      {
        heading: "Limitation of liability",
        body: "To the maximum extent permitted by law, SplitWhom and its operator are not liable for any indirect, incidental, or consequential damages, or for any loss arising from your use of the site.",
      },
      {
        heading: "Acceptable use",
        body: "Do not use the site for any unlawful purpose or in a way that could damage, disable, or impair it.",
      },
      {
        heading: "Changes",
        body: "We may update these terms or the service at any time. Continued use after changes means you accept the updated terms.",
      },
      {
        heading: "Contact",
        body: "Questions about these terms? Contact us at contact@splitwhom.com.",
      },
    ],
  },
  about: {
    title: "About SplitWhom",
    paragraphs: [
      "SplitWhom is a free, no-login web app that makes splitting shared group expenses simple. Instead of just showing balances, it calculates the fewest payments needed so everyone ends up even — perfect for trips, camping, shared houses, and parties.",
      "It's built to be private by design: there are no accounts and no server-side database. Every calculation runs in your browser, and your data stays on your device unless you choose to share a link.",
      "SplitWhom is available in many languages and is free to use, supported by ads.",
    ],
    contactHeading: "Contact",
    contactBody: "Questions, feedback, or ideas? Reach us at",
  },
  crossPromo: {
    eyebrow: "From the SplitWhom team",
    title: "Traveling with the group? Meet a local.",
    body: "Shenzhen Buddies pairs international travelers with locals who share their interests — and shows them around.",
    cta: "Discover Shenzhen Buddies",
  },
};
