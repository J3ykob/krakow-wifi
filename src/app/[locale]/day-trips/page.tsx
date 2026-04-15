import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, type Locale, SITE_URL } from "@/i18n/config";
import ArticleShell from "@/components/ArticleShell";
import { DAY_TRIPS } from "@/content/day-trips";

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
      ? "Wycieczki jednodniowe z Krakowa — Auschwitz, Wieliczka, Zakopane"
      : "Day trips from Kraków — Auschwitz, Wieliczka, Zakopane",
    description: isPl
      ? "Trzy najpopularniejsze wycieczki jednodniowe z Krakowa: Auschwitz-Birkenau, Kopalnia Soli w Wieliczce, Zakopane i Tatry. Jak dojechać, ile to kosztuje, gdzie kupić bilety."
      : "The three most popular day trips from Kraków: Auschwitz-Birkenau, Wieliczka Salt Mine, Zakopane and the Tatra mountains. How to get there, what it costs, where to book.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/day-trips`,
      languages: {
        en: `${SITE_URL}/en/day-trips`,
        pl: `${SITE_URL}/pl/day-trips`,
      },
    },
  };
}

export default async function DayTripsHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = locale as Locale;
  const isPl = t === "pl";

  return (
    <ArticleShell
      locale={t}
      path="/day-trips"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/day-trips`, label: isPl ? "Wycieczki" : "Day trips" },
      ]}
      title={
        isPl
          ? "Trzy najlepsze wycieczki jednodniowe z Krakowa"
          : "The three best day trips from Kraków"
      }
      lede={
        isPl
          ? "Kraków leży w idealnym miejscu na trzy bardzo różne wycieczki jednodniowe: jedno z najważniejszych miejsc historycznych XX wieku, najstarsza działająca kopalnia soli w Europie i wjazd kolejką w Tatry. Każda jest możliwa do zrealizowania w jeden dzień. Ta strona porównuje wszystkie trzy."
          : "Kraków sits within easy reach of three very different day trips: one of the most important historical sites of the 20th century, Europe's oldest working salt mine, and a cable car into the Tatras. Each is doable in one day. This page compares all three."
      }
      updated="2026-04-14"
      affiliate
      related={DAY_TRIPS.map((d) => ({
        href: `/${t}/day-trips/${d.slug}`,
        title: isPl ? d.titlePl : d.titleEn,
        description: (isPl ? d.ledePl : d.ledeEn).slice(0, 130) + "…",
      }))}
    >
      <h2>{isPl ? "Porównanie" : "At a glance"}</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>{isPl ? "Odległość" : "Distance"}</th>
            <th>{isPl ? "Czas dojazdu" : "Travel time"}</th>
            <th>{isPl ? "Pełen dzień?" : "Full day?"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link
                href={`/${t}/day-trips/auschwitz`}
                className="text-primary"
              >
                Auschwitz-Birkenau
              </Link>
            </td>
            <td>65 km</td>
            <td>1 h 30 – 2 h</td>
            <td>{isPl ? "Tak" : "Yes"}</td>
          </tr>
          <tr>
            <td>
              <Link
                href={`/${t}/day-trips/wieliczka`}
                className="text-primary"
              >
                {isPl ? "Wieliczka" : "Wieliczka Salt Mine"}
              </Link>
            </td>
            <td>14 km</td>
            <td>30 – 40 min</td>
            <td>{isPl ? "Pół dnia" : "Half day"}</td>
          </tr>
          <tr>
            <td>
              <Link
                href={`/${t}/day-trips/zakopane`}
                className="text-primary"
              >
                Zakopane
              </Link>
            </td>
            <td>100 km</td>
            <td>2 – 2 h 30</td>
            <td>{isPl ? "Pełen / 2 dni" : "Full / better as 2 days"}</td>
          </tr>
        </tbody>
      </table>

      <p>
        {isPl
          ? "Krótko: jeśli masz tylko jeden dzień ekstra, jedź do Wieliczki — najmniejsze ryzyko logistyczne, najwięcej wartości na godzinę. Jeśli masz dwa dni, zrób Auschwitz w jeden i Wieliczkę w drugi. Jeśli masz trzy lub więcej, Zakopane zrobione na spokojnie (z noclegiem) jest tego warte."
          : "Short version: if you only have one extra day, go to Wieliczka — lowest logistical risk, most value per hour. If you have two days, do Auschwitz on one and Wieliczka on the other. If you have three or more, Zakopane done properly (with an overnight) is worth it."}
      </p>

      <h2>{isPl ? "Trzy odmienne doświadczenia" : "Three very different experiences"}</h2>
      <p>
        {isPl
          ? "Auschwitz to wizyta w miejscu pamięci — wymaga emocjonalnego nastawienia i ciszy. Wieliczka to typowa atrakcja turystyczna z przewodnikiem, ze zdjęciami i pomysłem. Zakopane to zmiana scenerii — góry, świeże powietrze, drewniana architektura góralska, kolejka pod sam szczyt 1987 m. Trudno traktować je jako alternatywy — to są trzy różne kategorie wyjazdu."
          : "Auschwitz is a memorial visit — it requires an emotional headspace and silence. Wieliczka is a guided tourist attraction with photo opportunities and a sense of wonder. Zakopane is a change of scenery — mountains, fresh air, wooden highlander architecture, a cable car to a 1987 m summit. They are not really alternatives — they are three different categories of trip."}
      </p>
    </ArticleShell>
  );
}
