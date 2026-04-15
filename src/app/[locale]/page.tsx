import Link from "next/link";
import type { Metadata } from "next";
import { isLocale, type Locale, SITE_URL, SITE_NAME } from "@/i18n/config";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import JsonLd from "@/components/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const isPl = locale === "pl";
  return {
    title: isPl
      ? "CityCompass — przewodnik po Krakowie dla turystów"
      : "CityCompass — the practical Kraków guide for travellers",
    description: isPl
      ? "WiFi, transport, pieniądze, jedzenie i przewodnik po dzielnicach Krakowa. Zrobione dla podróżnych, nie dla algorytmów."
      : "WiFi, transport, money, food and neighborhood guides for Kraków. Built for travellers, not algorithms.",
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: { en: `${SITE_URL}/en`, pl: `${SITE_URL}/pl` },
    },
  };
}

const COPY = {
  en: {
    eyebrow: "Free guide · No signup",
    title: "Your pocket guide to Kraków",
    lede: "Free WiFi, real transport prices, where to eat, what to skip, and how not to get scammed at the exchange counter — written by people who actually live here.",
    primaryCta: "Find free WiFi",
    primaryHref: "/wifi",
    secondaryCta: "Get from the airport",
    secondaryHref: "/transport/airport",
    sectionsTitle: "Start here",
    sections: [
      {
        href: "/wifi",
        title: "Free WiFi map",
        body: "80+ municipal hotspots across the city. Open SSID, no password, no signup.",
        icon: "wifi",
      },
      {
        href: "/connect",
        title: "Stay online (eSIM, SIM, roaming)",
        body: "If hotspots aren't enough — the cheapest way to get mobile data in Poland.",
        icon: "globe",
      },
      {
        href: "/transport/airport",
        title: "Airport → Old Town",
        body: "Train, bus 300, taxi or Bolt: real prices, real travel times, no surprises.",
        icon: "plane",
      },
      {
        href: "/transport/mpk",
        title: "Trams & buses (MPK)",
        body: "Which ticket to buy, how the zones work, and which app actually works.",
        icon: "tram",
      },
      {
        href: "/money",
        title: "Currency & ATMs",
        body: "How much złoty per euro this week, and how to avoid the 12% kantor markup near Rynek.",
        icon: "money",
      },
      {
        href: "/scams",
        title: "Tourist scams",
        body: "Menu swap, taxi meter tricks, dynamic currency conversion — what to actually watch for.",
        icon: "shield",
      },
      {
        href: "/areas/old-town",
        title: "Neighborhood guides",
        body: "Old Town, Kazimierz, Wawel, Podgórze, Nowa Huta — what to see and where to eat.",
        icon: "pin",
      },
      {
        href: "/food/milk-bars",
        title: "Cheap, real Polish food",
        body: "Milk bars (bary mleczne) — full lunch for under 25 zł. Where, how, and what to order.",
        icon: "fork",
      },
    ],
    pitchTitle: "Why we built this",
    pitchBody:
      "Most 'Kraków tourist info' pages are landing pages that bounce you to somebody else's site. CityCompass is the opposite: an honest pocket guide that gives you the answer on the page. We use a few affiliate links and a couple of ads to keep it free, and that's it. No popups, no email gates, no fluff.",
    nowTitle: "What you probably need right now",
    nowItems: [
      {
        href: "/wifi",
        label: "Free WiFi nearby",
      },
      {
        href: "/transport/airport",
        label: "How do I get from the airport?",
      },
      {
        href: "/money/atm",
        label: "Should I use this ATM?",
      },
      {
        href: "/emergency",
        label: "Pharmacy 24/7 / emergency",
      },
      {
        href: "/phrases",
        label: "How do I say 'thank you'?",
      },
    ],
  },
  pl: {
    eyebrow: "Darmowy przewodnik · Bez rejestracji",
    title: "Kieszonkowy przewodnik po Krakowie",
    lede: "Darmowe WiFi, realne ceny transportu, gdzie zjeść, czego unikać i jak nie dać się oskubać w kantorze — pisane przez ludzi, którzy faktycznie tu mieszkają.",
    primaryCta: "Znajdź darmowe WiFi",
    primaryHref: "/wifi",
    secondaryCta: "Z lotniska do miasta",
    secondaryHref: "/transport/airport",
    sectionsTitle: "Zacznij tutaj",
    sections: [
      {
        href: "/wifi",
        title: "Mapa darmowego WiFi",
        body: "Ponad 80 miejskich hotspotów w całym Krakowie. Otwarta sieć, bez hasła, bez rejestracji.",
        icon: "wifi",
      },
      {
        href: "/connect",
        title: "Internet (eSIM, SIM, roaming)",
        body: "Kiedy hotspoty nie wystarczą — najtańszy sposób na mobilny internet w Polsce.",
        icon: "globe",
      },
      {
        href: "/transport/airport",
        title: "Z lotniska do Starego Miasta",
        body: "Pociąg, bus 300, taxi lub Bolt: realne ceny, czasy, bez niespodzianek.",
        icon: "plane",
      },
      {
        href: "/transport/mpk",
        title: "Tramwaje i autobusy (MPK)",
        body: "Jaki bilet kupić, jak działają strefy, która apka faktycznie działa.",
        icon: "tram",
      },
      {
        href: "/money",
        title: "Pieniądze i bankomaty",
        body: "Ile złotych za euro w tym tygodniu i jak ominąć 12% marżę kantorów przy Rynku.",
        icon: "money",
      },
      {
        href: "/scams",
        title: "Oszustwa na turystach",
        body: "Podmiana menu, kombinacje przy taksometrach, DCC — czego naprawdę pilnować.",
        icon: "shield",
      },
      {
        href: "/areas/old-town",
        title: "Przewodniki po dzielnicach",
        body: "Stare Miasto, Kazimierz, Wawel, Podgórze, Nowa Huta — co zobaczyć i gdzie zjeść.",
        icon: "pin",
      },
      {
        href: "/food/milk-bars",
        title: "Tania, prawdziwa polska kuchnia",
        body: "Bary mleczne — pełen obiad za mniej niż 25 zł. Gdzie, jak i co zamówić.",
        icon: "fork",
      },
    ],
    pitchTitle: "Po co to robimy",
    pitchBody:
      "Większość stron 'turystyka Kraków' to landingi, które przekierowują Cię na cudzą witrynę. CityCompass jest na odwrót: uczciwy przewodnik, który daje odpowiedź na własnej stronie. Mamy kilka linków afiliacyjnych i parę reklam, żeby to było darmowe — i tyle. Bez popupów, bez bramek mailowych, bez wody.",
    nowTitle: "To, czego pewnie potrzebujesz teraz",
    nowItems: [
      { href: "/wifi", label: "Darmowe WiFi w pobliżu" },
      { href: "/transport/airport", label: "Jak dojadę z lotniska?" },
      { href: "/money/atm", label: "Czy używać tego bankomatu?" },
      { href: "/emergency", label: "Apteka 24/7 / pomoc" },
      { href: "/phrases", label: "Jak się mówi 'dziękuję'?" },
    ],
  },
} as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = COPY[locale as Locale];
  const base = `/${locale}`;

  const ld = {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    name: SITE_NAME,
    url: `${SITE_URL}/${locale}`,
    inLanguage: locale === "pl" ? "pl-PL" : "en-GB",
    about: {
      "@type": "City",
      name: "Kraków",
      sameAs: "https://en.wikipedia.org/wiki/Krak%C3%B3w",
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-10">
      <JsonLd data={ld} />

      {/* Hero */}
      <section className="text-center py-6 sm:py-10">
        <p className="inline-block text-[11px] uppercase tracking-wider font-semibold bg-blue-50 text-primary px-3 py-1 rounded-full">
          {t.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          {t.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {t.lede}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={`${base}${t.primaryHref}`}
            className="inline-flex items-center justify-center gap-2 bg-primary text-white text-base font-semibold px-6 py-3 rounded-2xl hover:bg-primary-dark transition-colors shadow-lg shadow-blue-200"
          >
            {t.primaryCta}
          </Link>
          <Link
            href={`${base}${t.secondaryHref}`}
            className="inline-flex items-center justify-center gap-2 bg-white border border-card-border text-foreground text-base font-semibold px-6 py-3 rounded-2xl hover:border-primary transition-colors"
          >
            {t.secondaryCta}
          </Link>
        </div>
      </section>

      {/* "Right now" links */}
      <section className="mt-4">
        <h2 className="text-xs uppercase tracking-wider font-semibold text-muted mb-3">
          {t.nowTitle}
        </h2>
        <div className="flex flex-wrap gap-2">
          {t.nowItems.map((it) => (
            <Link
              key={it.href}
              href={`${base}${it.href}`}
              className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-full bg-white border border-card-border hover:border-primary hover:text-primary transition-colors"
            >
              {it.label}
            </Link>
          ))}
        </div>
      </section>

      <AdSlot slot="home-mid" format="rectangle" className="mt-10" />

      {/* Section grid */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {t.sectionsTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.sections.map((s) => (
            <Link
              key={s.href}
              href={`${base}${s.href}`}
              className="group p-5 rounded-2xl border border-card-border bg-white hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                {s.body}
              </p>
              <span className="inline-block mt-3 text-xs font-semibold text-primary">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Pitch */}
      <section className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
        <h2 className="text-xl font-bold text-foreground">{t.pitchTitle}</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">{t.pitchBody}</p>
      </section>

      <AdSlot slot="home-bottom" format="responsive" className="mt-10" />
    </div>
  );
}
