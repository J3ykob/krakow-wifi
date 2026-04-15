export const locales = ["en", "pl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  pl: "Polski",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const SITE_URL = "https://citycompass.pl";
export const SITE_NAME = "CityCompass";
export const SITE_TAGLINE_EN = "Your pocket guide to Kraków";
export const SITE_TAGLINE_PL = "Kieszonkowy przewodnik po Krakowie";
