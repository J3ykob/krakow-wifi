import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale, SITE_URL } from "@/i18n/config";
import ArticleShell from "@/components/ArticleShell";
import Link from "next/link";

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
      ? "Transport w Krakowie — tramwaje, autobusy, taxi i lotnisko"
      : "Getting around Kraków — trams, buses, taxis and airport",
    description: isPl
      ? "Kompletny przewodnik po transporcie w Krakowie: jak dojechać z lotniska, jak działa MPK, czy używać Bolta zamiast taksówki, ceny i czasy."
      : "A complete guide to getting around Kraków: airport transfers, how MPK works, Bolt vs. taxi, real prices and travel times.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/transport`,
      languages: {
        en: `${SITE_URL}/en/transport`,
        pl: `${SITE_URL}/pl/transport`,
      },
    },
  };
}

export default async function TransportHub({
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
      path="/transport"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/transport`, label: isPl ? "Transport" : "Transport" },
      ]}
      title={
        isPl
          ? "Transport w Krakowie — przewodnik praktyczny"
          : "Getting around Kraków — practical guide"
      }
      lede={
        isPl
          ? "Kraków jest miastem kompaktowym — większość rzeczy w centrum jest w zasięgu spaceru. Ale gdy odległości robią się dłuższe, masz cztery sensowne opcje: tramwaj, autobus, Bolt/Uber i pieszo. Tu jest streszczenie, kiedy używać czego."
          : "Kraków is a compact city — most things in the centre are within walking distance. When distances grow, you have four sensible options: tram, bus, Bolt/Uber, or walking. Here is the short version of when to use which."
      }
      updated="2026-04-14"
      related={[
        {
          href: `/${t}/transport/airport`,
          title: isPl ? "Lotnisko Balice → centrum" : "Balice Airport → city",
          description: isPl
            ? "Pociąg, bus 300, taxi, Bolt — wszystkie opcje porównane."
            : "Train, bus 300, taxi, Bolt — all options compared.",
        },
        {
          href: `/${t}/transport/mpk`,
          title: isPl ? "Bilety i strefy MPK" : "MPK tickets and zones",
          description: isPl
            ? "Jak działają bilety czasowe i jak ich nie skasować źle."
            : "How time-based tickets work and how not to validate them wrong.",
        },
        {
          href: `/${t}/transport/taxi`,
          title: isPl ? "Taxi, Bolt, Uber" : "Taxi, Bolt, Uber",
          description: isPl
            ? "Realne ceny, jak unikać oszustw na taksometrach."
            : "Real prices, how to avoid taxi meter scams.",
        },
        {
          href: `/${t}/wifi`,
          title: isPl ? "Darmowe WiFi" : "Free WiFi",
          description: isPl
            ? "Sprawdzaj czas dojazdu nie zużywając pakietu danych."
            : "Check arrival times without burning your data plan.",
        },
      ]}
    >
      <h2>{isPl ? "Tramwaje i autobusy (MPK)" : "Trams and buses (MPK)"}</h2>
      <p>
        {isPl ? (
          <>
            MPK to miejski operator. 24 linie tramwajowe, ~150 linii
            autobusowych, jedna strefa biletowa pokrywająca całe miasto i
            podmiejskie gminy (Strefa I+II). Bilet 20-minutowy kosztuje 4 zł,
            60-minutowy 6 zł, 24-godzinny 17 zł. Pełen poradnik biletów →{" "}
            <Link href={`/${t}/transport/mpk`} className="text-primary underline">
              MPK guide
            </Link>
            .
          </>
        ) : (
          <>
            MPK is the city operator. 24 tram lines, ~150 bus lines, one ticket
            zone covering the whole city and the surrounding municipalities
            (Zone I+II). A 20-minute ticket is 4 zł, 60 minutes is 6 zł, 24
            hours is 17 zł. Full ticket guide →{" "}
            <Link href={`/${t}/transport/mpk`} className="text-primary underline">
              MPK guide
            </Link>
            .
          </>
        )}
      </p>
      <p>
        {isPl
          ? "Tramwaje są szybsze niż autobusy w godzinach szczytu, bo mają wydzielone torowiska na większości tras. Aplikacja jakdojade.pl działa lepiej niż Mapy Google dla planowania trasy w Krakowie."
          : "Trams are faster than buses in rush hour because most routes have dedicated track. The jakdojade.pl app works better than Google Maps for planning routes in Kraków."}
      </p>

      <h2>{isPl ? "Bolt vs. Uber vs. taxi" : "Bolt vs. Uber vs. taxi"}</h2>
      <p>
        {isPl
          ? "Bolt jest dominującą aplikacją taxi w Krakowie. Działa identycznie jak Uber, oferuje porównywalne ceny, a kierowców jest więcej. Uber również działa, ale z reguły z dłuższym czasem oczekiwania. Klasyczne taksówki na postojach (przy Rynku, dworcu, hotelach) są droższe i częściej kombinują z taksometrem — lepiej omijać. "
          : "Bolt is the dominant taxi app in Kraków. It works exactly like Uber, prices are comparable, and there are more drivers. Uber works too but with longer wait times. Traditional taxis at the ranks (Rynek, train station, hotels) are more expensive and more likely to play games with the meter — best avoided. "}
        <Link
          href={`/${t}/transport/taxi`}
          className="text-primary underline"
        >
          {isPl ? "Pełen przewodnik po taxi →" : "Full taxi guide →"}
        </Link>
      </p>

      <h2>{isPl ? "Lotnisko" : "Airport"}</h2>
      <p>
        {isPl ? (
          <>
            Lotnisko Kraków-Balice (KRK) jest 11 km na zachód od centrum.
            Pociąg dociera do dworca Kraków Główny w 20 minut za 17 zł, bez
            korków. Inne opcje (bus 300, taxi, Bolt) opisaliśmy w pełnym
            przewodniku →{" "}
            <Link
              href={`/${t}/transport/airport`}
              className="text-primary underline"
            >
              airport guide
            </Link>
            .
          </>
        ) : (
          <>
            Kraków-Balice Airport (KRK) is 11 km west of the centre. The train
            reaches Kraków Główny station in 20 minutes for 17 zł, no traffic
            jams. The other options (bus 300, taxi, Bolt) are covered in the
            full guide →{" "}
            <Link
              href={`/${t}/transport/airport`}
              className="text-primary underline"
            >
              airport guide
            </Link>
            .
          </>
        )}
      </p>

      <h2>{isPl ? "Pieszo i rowerem" : "On foot and by bike"}</h2>
      <p>
        {isPl
          ? "Stare Miasto, Kazimierz i Wawel da się obejść w jeden dzień. Z Rynku do Wawelu jest 700 metrów, z Wawelu do Placu Nowego na Kazimierzu kolejne 1.2 km. Rower miejski Wavelo działa, ale rzadko jest najszybszą opcją — w centrum brak ścieżek rowerowych w wielu miejscach."
          : "The Old Town, Kazimierz and Wawel can all be walked in one day. From Rynek to Wawel is 700 metres; Wawel to Plac Nowy in Kazimierz is another 1.2 km. The Wavelo city bike works, but it is rarely the fastest option — many parts of the centre still lack dedicated bike lanes."}
      </p>

      <h2>{isPl ? "Pociągi międzymiastowe" : "Intercity trains"}</h2>
      <p>
        {isPl
          ? "Z Krakowa Głównego pociągi PKP Intercity dochodzą do Warszawy w 2 godz. 15 min, do Wrocławia w 3 godz. 15 min, do Gdańska w 5-6 godz. Kupuj bilety online na intercity.pl, w aplikacji Koleo, lub przez Omio (interfejs po angielsku, lekka prowizja)."
          : "From Kraków Główny, PKP Intercity trains reach Warsaw in 2 h 15 min, Wrocław in 3 h 15 min, Gdańsk in 5-6 h. Buy tickets online at intercity.pl, in the Koleo app, or via Omio (English interface, small markup)."}
      </p>
    </ArticleShell>
  );
}
