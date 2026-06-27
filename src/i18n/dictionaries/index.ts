import type { Locale } from "../config";
import type { Dictionary } from "../types";
import { en } from "./en";
import { ja } from "./ja";
import { es } from "./es";
import { fr } from "./fr";
import { de } from "./de";
import { pt } from "./pt";
import { it } from "./it";
import { zh } from "./zh";
import { ko } from "./ko";
import { ru } from "./ru";

const DICTIONARIES: Record<Locale, Dictionary> = { en, ja, es, fr, de, pt, it, zh, ko, ru };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? en;
}
