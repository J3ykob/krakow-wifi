import type { Locale } from "@/i18n/config";

export interface RouteDef {
  path: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
}

export const ROUTES: RouteDef[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/wifi", changeFrequency: "weekly", priority: 0.9 },
  { path: "/wifi/old-town", changeFrequency: "monthly", priority: 0.8 },
  { path: "/wifi/kazimierz", changeFrequency: "monthly", priority: 0.8 },
  { path: "/wifi/wawel", changeFrequency: "monthly", priority: 0.8 },
  { path: "/wifi/podgorze", changeFrequency: "monthly", priority: 0.7 },
  { path: "/wifi/nowa-huta", changeFrequency: "monthly", priority: 0.7 },
  { path: "/connect", changeFrequency: "monthly", priority: 0.9 },
  { path: "/transport", changeFrequency: "monthly", priority: 0.9 },
  { path: "/transport/airport", changeFrequency: "monthly", priority: 0.85 },
  { path: "/transport/mpk", changeFrequency: "monthly", priority: 0.85 },
  { path: "/transport/taxi", changeFrequency: "monthly", priority: 0.8 },
  { path: "/money", changeFrequency: "monthly", priority: 0.85 },
  { path: "/money/atm", changeFrequency: "monthly", priority: 0.8 },
  { path: "/areas", changeFrequency: "monthly", priority: 0.85 },
  { path: "/areas/old-town", changeFrequency: "monthly", priority: 0.85 },
  { path: "/areas/kazimierz", changeFrequency: "monthly", priority: 0.85 },
  { path: "/areas/wawel", changeFrequency: "monthly", priority: 0.85 },
  { path: "/areas/podgorze", changeFrequency: "monthly", priority: 0.7 },
  { path: "/areas/nowa-huta", changeFrequency: "monthly", priority: 0.7 },
  { path: "/food", changeFrequency: "monthly", priority: 0.85 },
  { path: "/food/milk-bars", changeFrequency: "monthly", priority: 0.8 },
  { path: "/food/pierogi", changeFrequency: "monthly", priority: 0.8 },
  { path: "/food/obwarzanek", changeFrequency: "monthly", priority: 0.7 },
  { path: "/day-trips", changeFrequency: "monthly", priority: 0.9 },
  { path: "/day-trips/auschwitz", changeFrequency: "monthly", priority: 0.9 },
  { path: "/day-trips/wieliczka", changeFrequency: "monthly", priority: 0.85 },
  { path: "/day-trips/zakopane", changeFrequency: "monthly", priority: 0.85 },
  { path: "/scams", changeFrequency: "monthly", priority: 0.85 },
  { path: "/emergency", changeFrequency: "monthly", priority: 0.8 },
  { path: "/phrases", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "yearly", priority: 0.4 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export function localizedPath(locale: Locale, path: string): string {
  return `/${locale}${path}`;
}
