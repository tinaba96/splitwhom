import { CURRENCIES, type CurrencyCode } from "./types";
import { toMajor } from "./settle";

/** Format an integer minor-unit amount as a localized currency string. */
export function formatMinor(minor: number, code: CurrencyCode): string {
  const { decimals } = CURRENCIES[code];
  const major = toMajor(minor, decimals);
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: code,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(major);
}

/** Short id generator that works without crypto in any environment. */
export function makeId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2, 10);
}
