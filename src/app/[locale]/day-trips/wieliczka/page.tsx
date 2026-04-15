import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale, SITE_URL } from "@/i18n/config";
import ArticleShell from "@/components/ArticleShell";
import AffLink from "@/components/AffLink";

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
      ? "Kopalnia Soli Wieliczka z Krakowa — bilety, dojazd, trasa"
      : "Wieliczka Salt Mine from Kraków — tickets, transport, route",
    description: isPl
      ? "Pół-dniowy przewodnik po Wieliczce: jak dojechać pociągiem za 5 zł, ile kosztuje bilet, czego się spodziewać po trasie turystycznej."
      : "Half-day guide to Wieliczka: how to get there by 5 zł train, what the ticket costs, what to expect on the tourist route.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/day-trips/wieliczka`,
      languages: {
        en: `${SITE_URL}/en/day-trips/wieliczka`,
        pl: `${SITE_URL}/pl/day-trips/wieliczka`,
      },
    },
  };
}

export default async function WieliczkaPage({
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
      path="/day-trips/wieliczka"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/day-trips`, label: isPl ? "Wycieczki" : "Day trips" },
        {
          href: `/${t}/day-trips/wieliczka`,
          label: isPl ? "Wieliczka" : "Wieliczka",
        },
      ]}
      title={
        isPl
          ? "Kopalnia Soli Wieliczka — pół dnia poniżej powierzchni"
          : "Wieliczka Salt Mine — half a day below the surface"
      }
      lede={
        isPl
          ? "Kopalnia Soli w Wieliczce to działająca od XIII wieku kopalnia na liście UNESCO. Trasa Turystyczna prowadzi 135 metrów pod ziemią przez kaplice wykute w soli, podziemne jeziora i komory drążone przez 700 lat. To najłatwiejsza wycieczka jednodniowa z Krakowa — szybki pociąg, świetna wartość, dzieci to uwielbiają."
          : "The Wieliczka Salt Mine has been operating since the 13th century and is on the UNESCO list. The Tourist Route runs 135 metres underground through chapels carved in salt, underground lakes, and chambers excavated over 700 years. The easiest day trip from Kraków — quick train, great value, kids love it."
      }
      updated="2026-04-14"
      affiliate
      toc={[
        { id: "tickets", label: isPl ? "Bilety" : "Tickets" },
        { id: "transport", label: isPl ? "Dojazd" : "Getting there" },
        { id: "route", label: isPl ? "Trasa Turystyczna" : "The Tourist Route" },
        { id: "tips", label: isPl ? "Praktyczne porady" : "Practical tips" },
      ]}
      faq={
        isPl
          ? [
              {
                q: "Ile kosztuje bilet?",
                a: "Standardowy bilet z trasą turystyczną i przewodnikiem to ok. 119 zł dla dorosłego, 99 zł dla dziecka, ucznia, studenta. W cenie 2 godziny pod ziemią + ekspozycja muzealna na końcu.",
              },
              {
                q: "Czy potrzebuję rezerwacji?",
                a: "W sezonie (maj-wrzesień) tak. Latem bilety w godzinach 10:00-13:00 sprzedają się dzień wcześniej. W styczniu/lutym możesz przyjść bez rezerwacji.",
              },
              {
                q: "Czy w kopalni jest zimno?",
                a: "Stała temperatura 14-16°C przez cały rok. Zimą jest tam cieplej niż na zewnątrz, latem chłodniej. Lekka kurtka wystarczy.",
              },
              {
                q: "Czy mogę zejść samodzielnie bez przewodnika?",
                a: "Nie. Wszystkie trasy turystyczne są obowiązkowo z przewodnikiem ze względów bezpieczeństwa.",
              },
            ]
          : [
              {
                q: "What does the ticket cost?",
                a: "The standard tourist route ticket with a guide is around 119 zł for adults, 99 zł for children, students. The price covers 2 hours underground plus the museum exhibition at the end.",
              },
              {
                q: "Do I need to book?",
                a: "In high season (May-September), yes. In summer, 10 AM - 1 PM slots sell out a day in advance. In January or February you can show up unbooked.",
              },
              {
                q: "Is it cold in the mine?",
                a: "Constant temperature of 14-16°C all year. Warmer than outside in winter, cooler in summer. A light jacket is enough.",
              },
              {
                q: "Can I go down without a guide?",
                a: "No. All tourist routes require a guide for safety reasons.",
              },
            ]
      }
      related={[
        {
          href: `/${t}/day-trips/auschwitz`,
          title: "Auschwitz-Birkenau",
          description: isPl
            ? "Pełny dzień, znacznie cięższy emocjonalnie."
            : "Full day, much heavier emotionally.",
        },
        {
          href: `/${t}/day-trips/zakopane`,
          title: "Zakopane",
          description: isPl ? "Inny kierunek, inne tempo." : "Different direction, different pace.",
        },
        {
          href: `/${t}/transport/mpk`,
          title: "MPK",
          description: isPl ? "Bilet pociągowy do Wieliczki kupisz w jakdojade." : "Buy your Wieliczka train ticket in jakdojade.",
        },
      ]}
    >
      <h2 id="tickets">{isPl ? "Bilety i rezerwacja" : "Tickets and booking"}</h2>
      <p>
        {isPl
          ? "Bilety kupisz na wieliczka-saltmine.com — oficjalnej stronie. Standardowa Trasa Turystyczna kosztuje ok. 119 zł dla dorosłego. W cenie jest 2-godzinna trasa z przewodnikiem (po polsku, angielsku, niemiecku, francusku, włosku, hiszpańsku, rosyjsku) plus dostęp do muzeum żupy krakowskiej na końcu."
          : "Buy tickets at wieliczka-saltmine.com — the official site. The standard Tourist Route is about 119 zł per adult. The price covers a 2-hour guided tour (Polish, English, German, French, Italian, Spanish, Russian) plus access to the Cracow Saltworks Museum at the end."}
      </p>
      <p>
        {isPl ? (
          <>
            Najprostsze rozwiązanie: zarezerwuj{" "}
            <AffLink partner="getyourguide" slug="wieliczka">
              wycieczkę z biletem i transferem z Krakowa
            </AffLink>
            . W cenie ~150-180 zł masz przejazd busem z centrum, bilet z
            przewodnikiem i powrót. Nie musisz nic dopinać. (link afiliacyjny)
          </>
        ) : (
          <>
            Simplest path: book a{" "}
            <AffLink partner="getyourguide" slug="wieliczka">
              ticket-and-transfer tour from Kraków
            </AffLink>
            . For ~150-180 zł you get bus pickup from the centre, a
            guided ticket, and the return ride. Nothing to coordinate.
            (affiliate link)
          </>
        )}
      </p>

      <h2 id="transport">{isPl ? "Dojazd na własną rękę" : "Getting there on your own"}</h2>
      <ul>
        <li>
          <strong>{isPl ? "Pociąg (najlepsze)" : "Train (the best option)"}</strong> —{" "}
          {isPl
            ? "z Krakowa Głównego do stacji Wieliczka Rynek-Kopalnia. ~5 zł, 30 minut. Z peronu kopalnia jest 200 metrów. Pociągi co 30-60 minut."
            : "from Kraków Główny to Wieliczka Rynek-Kopalnia station. ~5 zł, 30 minutes. From the platform the mine is 200 metres away. Trains every 30-60 minutes."}
        </li>
        <li>
          <strong>{isPl ? "Tramwaj/autobus 304" : "Bus 304"}</strong> —{" "}
          {isPl
            ? "linia aglomeracyjna MPK z Dworca Głównego do Wieliczki. Bilet 60-min Strefa I+II (8 zł). Wolniejsze niż pociąg (40-50 min)."
            : "MPK agglomeration line from Kraków Główny to Wieliczka. 60-minute Zone I+II ticket (8 zł). Slower than the train (40-50 min)."}
        </li>
        <li>
          <strong>Bolt</strong> —{" "}
          {isPl ? "55-75 zł w jedną stronę. Dla 3-4 osób porównywalnie." : "55-75 zł one way. Comparable cost for 3-4 people."}
        </li>
      </ul>

      <h2 id="route">{isPl ? "Co zobaczysz na trasie" : "What you'll see on the route"}</h2>
      <p>
        {isPl
          ? "Trasa zaczyna się od zejścia 380 schodami w dół na poziom 64 metrów (komora Daniłowicza). Od tego momentu chodzisz z przewodnikiem przez kolejne komory, korytarze i kaplice. Najważniejsze punkty:"
          : "The route starts with a 380-step descent to the 64-metre level (Daniłowicz Chamber). From there you walk with the guide through chambers, corridors and chapels. The highlights:"}
      </p>
      <ul>
        <li>
          <strong>{isPl ? "Kaplica św. Kingi" : "Chapel of St. Kinga"}</strong>{" "}
          — {isPl ? "głębokość 101 m. Cała kaplica wykuta w soli, łącznie ze świecznikami i ołtarzem. Najbardziej spektakularna część trasy. Czasem odbywają się tu śluby i koncerty." : "101 m deep. Entirely carved from salt, including the chandeliers and the altar. The most spectacular part of the route. Weddings and concerts are sometimes held here."}
        </li>
        <li>
          <strong>{isPl ? "Komora Weimar" : "Weimar Chamber"}</strong> —{" "}
          {isPl ? "podziemne słone jezioro o głębokości 9 metrów, z lustrem wody na poziomie 100 m." : "an underground saline lake 9 metres deep, with the water surface at the 100-metre level."}
        </li>
        <li>
          <strong>{isPl ? "Komora Stanisław Staszic" : "Stanisław Staszic Chamber"}</strong> —{" "}
          {isPl ? "największa komora na trasie, 36 metrów wysokości. Tutaj odbywają się koncerty i pokazy świetlne." : "the largest chamber on the route, 36 metres high. Concerts and light shows are held here."}
        </li>
        <li>
          <strong>{isPl ? "Muzeum Żup Krakowskich" : "Cracow Saltworks Museum"}</strong>{" "}
          — {isPl ? "na końcu trasy, na poziomie 135 m. Dodatkowy wstęp w cenie biletu." : "at the end of the route, on the 135-metre level. Extra entry included with the ticket."}
        </li>
      </ul>
      <p>
        {isPl
          ? "Powrót na powierzchnię windą szybową — 30 sekund z poziomu 135 m do góry. Cała trasa to ok. 3 km chodzenia, około 800 schodów (głównie w dół, kilka pod górę), 2-2.5 godziny."
          : "Return to the surface in a mine elevator — 30 seconds from the 135 m level. The full route is about 3 km of walking, around 800 steps (mostly down, some up), 2-2.5 hours."}
      </p>

      <h2 id="tips">{isPl ? "Praktyczne porady" : "Practical tips"}</h2>
      <ul>
        <li>
          {isPl
            ? "Wygodne buty obowiązkowo. Schody są mokre w niektórych miejscach."
            : "Comfortable shoes essential. Some steps are wet."}
        </li>
        <li>
          {isPl
            ? "Lekka kurtka — w kopalni jest 14-16°C niezależnie od pory roku."
            : "A light jacket — the mine is 14-16°C year-round."}
        </li>
        <li>
          {isPl
            ? "Toalety są na początku trasy i w muzeum na końcu — między nimi nie ma."
            : "Toilets are at the start of the route and in the museum at the end — none in between."}
        </li>
        <li>
          {isPl
            ? "Dzieci poniżej 4 lat schodzą za darmo, ale głośna grupa to nie najlepsze otoczenie."
            : "Children under 4 enter free, but a noisy group is not the best environment."}
        </li>
        <li>
          {isPl
            ? "Wracając pociągiem do Krakowa, rozkład jest co 30-60 minut. Sprawdź ostatni pociąg przed zejściem."
            : "Going back by train to Kraków: schedule every 30-60 minutes. Check the last train before you descend."}
        </li>
      </ul>
    </ArticleShell>
  );
}
