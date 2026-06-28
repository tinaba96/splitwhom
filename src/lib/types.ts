// Core data model for SplitWhom
// All money is stored as numbers in the currency's MAJOR unit (e.g. dollars, yen)
// as entered by the user. Calculations convert to integer MINOR units internally
// (see settle.ts) so rounding never loses or invents a cent.

export type CurrencyCode = "JPY" | "USD" | "CAD" | "EUR";

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  /** number of decimal digits in the minor unit (JPY = 0, USD = 2) */
  decimals: number;
  label: string;
}

export const CURRENCIES: Record<CurrencyCode, Currency> = {
  JPY: { code: "JPY", symbol: "¥", decimals: 0, label: "Japanese Yen (JPY)" },
  USD: { code: "USD", symbol: "$", decimals: 2, label: "US Dollar (USD)" },
  CAD: { code: "CAD", symbol: "$", decimals: 2, label: "Canadian Dollar (CAD)" },
  EUR: { code: "EUR", symbol: "€", decimals: 2, label: "Euro (EUR)" },
};

export interface Member {
  id: string;
  name: string;
  /** optional free-text note: email, phone, or a payment ID used to send money */
  note?: string;
}

export interface Expense {
  id: string;
  /** member id of who paid */
  payerId: string;
  description: string;
  /** amount in major units, as entered */
  amount: number;
  /** member ids who share this expense */
  participantIds: string[];
  /**
   * Optional spending caps (major units) for specific participants — the most that
   * person will pay for this expense. If their equal share is below the cap, the cap
   * has no effect; if it would exceed the cap, they pay the cap and the excess is
   * redistributed among the others (progressive "water-filling"). e.g. { Alex: 20 }
   * → Alex pays at most 20.
   */
  caps?: Record<string, number>;
}

export interface SplitState {
  title: string;
  currency: CurrencyCode;
  members: Member[];
  expenses: Expense[];
}

export function emptyState(): SplitState {
  return {
    title: "",
    currency: "USD",
    members: [],
    expenses: [],
  };
}
