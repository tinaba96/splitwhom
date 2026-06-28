// Shape of a SplitWhom translation dictionary. Every locale provides one of these.
// Keys are grouped by where they appear. The brand name "SplitWhom" is never translated.

export interface Dictionary {
  /** <head> metadata for this locale */
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  /** hero / header */
  hero: {
    tagline: string; // one-line pitch under the brand
  };
  /** event + currency row */
  setup: {
    eventName: string;
    eventPlaceholder: string;
    currency: string;
  };
  members: {
    title: string;
    addPlaceholder: string;
    add: string;
    empty: string;
    /** "{name}" is replaced with the member name */
    removeAria: string;
    /** "{count}" and "{name}" are replaced */
    confirmDelete: string;
    /** noun shown next to the count, e.g. "people" */
    peopleLabel: string;
    notePlaceholder: string; // optional note input (email/phone/payment id)
    contactsTitle: string; // view: collapsible members + payment info section
    copy: string; // copy button / aria-label
    copied: string; // copy confirmation
  };
  payments: {
    title: string;
    itemsLabel: string; // noun next to the count, e.g. "items"
    addMembersFirst: string;
    paidBy: string;
    description: string;
    descPlaceholder: string;
    amount: string;
    splitBetween: string;
    selectAll: string;
    clearAll: string;
    addPayment: string;
    paidFor: string; // connector: "{payer} paid for {desc}"
    splitEveryone: string;
    /** "{names}" replaced with a joined participant list */
    splitBetweenNames: string;
    deleteAria: string;
    removed: string; // label for a deleted member referenced by an expense
    capToggle: string; // discloses the optional per-person spending caps
    capPlaceholder: string; // amount input placeholder meaning "no cap"
    capTag: string; // badge shown after a capped amount, e.g. "max"
    /** "{names}" replaced with the people splitting the remainder */
    splitRest: string;
    capsTooLow: string; // warning when the caps cannot cover the total
  };
  results: {
    emptyPrompt: string;
    settlementTitle: string;
    total: string; // "{amount}" replaced
    allSettled: string;
    balancesTitle: string;
    member: string;
    paid: string;
    share: string;
    net: string;
    legendPositive: string; // word styled green
    legendNegative: string; // word styled red
    legendPositiveDesc: string; // "= gets money back"
    legendNegativeDesc: string; // "= owes money"
  };
  footer: {
    loadSample: string;
    reset: string;
    confirmSample: string;
    confirmReset: string;
  };
  /** sample dataset (names + item labels) */
  sample: {
    title: string;
    names: [string, string, string, string, string];
    food: string;
    drinks: string;
    firewood: string;
  };
  /** SEO landing content rendered as static HTML */
  landing: {
    heroHeading: string;
    heroSub: string;
    howItWorksTitle: string;
    steps: { title: string; body: string }[];
    whyTitle: string;
    features: { title: string; body: string }[];
    faqTitle: string;
    faqs: { q: string; a: string }[];
  };
  /** language switcher */
  switcher: {
    label: string;
  };
  /** share link + view-only page */
  share: {
    share: string; // share button
    copied: string; // confirmation after copying the link
    edit: string; // edit button on the shared view
    readonlyNote: string; // small label indicating the view is read-only
    invalid: string; // shown when the shared link can't be decoded
    ctaTitle: string; // funnel heading on the shared view
    ctaButton: string; // funnel button to open the editor
  };
}
