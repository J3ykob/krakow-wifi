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
      ? "Z lotniska Kraków-Balice do centrum — pociąg, bus, taxi, Bolt"
      : "Kraków-Balice Airport to city centre — train, bus, taxi, Bolt",
    description: isPl
      ? "Wszystkie sposoby na dojazd z KRK do Krakowa Głównego: pociąg za 17 zł, bus 300, taxi i Bolt. Czasy, ceny, jak kupić bilet."
      : "Every way to get from KRK to Kraków Główny: 17 zł train, bus 300, taxi and Bolt. Travel times, prices, how to buy a ticket.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/transport/airport`,
      languages: {
        en: `${SITE_URL}/en/transport/airport`,
        pl: `${SITE_URL}/pl/transport/airport`,
      },
    },
  };
}

export default async function AirportPage({
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
      path="/transport/airport"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/transport`, label: "Transport" },
        {
          href: `/${t}/transport/airport`,
          label: isPl ? "Lotnisko" : "Airport",
        },
      ]}
      title={
        isPl
          ? "Z lotniska Kraków-Balice do centrum"
          : "Kraków-Balice Airport to the city centre"
      }
      lede={
        isPl
          ? "Lotnisko Kraków-Balice (KRK) jest 11 km na zachód od centrum. Masz cztery sensowne opcje: pociąg, bus 300, taxi z postoju i Bolt. Pociąg jest najszybszy i najtańszy. Reszta zależy od bagażu, godziny i tego, ile osób jedzie."
          : "Kraków-Balice Airport (KRK) is 11 km west of the centre. You have four sensible options: train, bus 300, taxi from the rank, and Bolt. The train is the fastest and the cheapest. The rest depends on your luggage, the time of day, and how many people you are travelling with."
      }
      updated="2026-04-14"
      affiliate
      toc={[
        { id: "train", label: isPl ? "Pociąg (najlepsze)" : "Train (the best)" },
        { id: "bus", label: isPl ? "Bus 300" : "Bus 300" },
        { id: "taxi", label: "Taxi" },
        { id: "bolt", label: "Bolt / Uber" },
        { id: "compare", label: isPl ? "Porównanie" : "Comparison" },
        { id: "data", label: isPl ? "Internet po wylądowaniu" : "Mobile data on arrival" },
      ]}
      faq={
        isPl
          ? [
              {
                q: "Jak długo to trwa do Starego Miasta?",
                a: "Pociąg do Krakowa Głównego: 18-22 minuty + 10-15 minut spaceru do Rynku. Razem ok. 35 minut. Taxi/Bolt: 25-50 minut zależnie od korków.",
              },
              {
                q: "Czy pociąg jeździ w nocy?",
                a: "Ostatni pociąg z lotniska odjeżdża około północy, pierwszy o 4:00 rano. W tym przedziale trzeba wziąć Bolta lub taxi.",
              },
              {
                q: "Czy mogę zapłacić kartą za bilet?",
                a: "Tak. W automacie biletowym na peronie pociągu, w aplikacji Koleo, w aplikacji jakdojade. Brak gotówki nie jest problemem.",
              },
              {
                q: "Czy taxi z postoju przed terminalem jest uczciwe?",
                a: "Działa licencja lotniskowa z ustaloną stawką (zwykle 89-110 zł do centrum). Mimo to często wychodzi drożej niż Bolt — zamów Bolta z aplikacji, kierowca podjedzie pod wskazany słupek.",
              },
            ]
          : [
              {
                q: "How long does it take to the Old Town?",
                a: "Train to Kraków Główny: 18-22 minutes + 10-15 minutes' walk to Rynek. Total ~35 minutes. Taxi/Bolt: 25-50 minutes depending on traffic.",
              },
              {
                q: "Does the train run at night?",
                a: "The last train from the airport leaves around midnight, the first one around 4 AM. Between those, you need a Bolt or a taxi.",
              },
              {
                q: "Can I pay by card for the ticket?",
                a: "Yes. At the platform vending machine, in the Koleo app, in the jakdojade app. Not having cash is not a problem.",
              },
              {
                q: "Is the taxi rank in front of the terminal honest?",
                a: "It runs under an airport licence with a fixed tariff (usually 89-110 zł to the centre). Even so, Bolt is often cheaper — order from the app and the driver will pull up at the marked pole.",
              },
            ]
      }
      related={[
        {
          href: `/${t}/connect`,
          title: isPl ? "eSIM, SIM i roaming" : "eSIM, SIM and roaming",
          description: isPl
            ? "Mieć internet w sekundę po wylądowaniu — kup eSIM przed wylotem."
            : "Have data the second you land — buy an eSIM before you fly.",
        },
        {
          href: `/${t}/transport/mpk`,
          title: "MPK — bilety, strefy",
          description: isPl
            ? "Ten sam bilet co na bus 300 możesz potem użyć na tramwajach."
            : "The same ticket you buy for bus 300 also works on trams.",
        },
        {
          href: `/${t}/wifi`,
          title: isPl ? "Darmowe WiFi w mieście" : "Free city WiFi",
          description: isPl
            ? "Po zostawieniu lotniska — gdzie dalej łapać darmowy internet."
            : "Once you leave the airport — where to grab free internet next.",
        },
      ]}
    >
      <h2 id="train">{isPl ? "Pociąg — opcja zalecana" : "Train — the recommended option"}</h2>
      <p>
        {isPl
          ? "Bezpośrednio nad terminalem pasażerskim jest stacja Kraków Lotnisko. Pociąg do dworca Kraków Główny odjeżdża co 30 minut (czasem co 20). Czas jazdy: 18-22 minuty. Bilet: 17 zł (~3.80 €). Bilet kupujesz w automacie na peronie (karta lub gotówka), w aplikacji Koleo lub bezpośrednio u konduktora bez dopłaty."
          : "Directly above the passenger terminal is the Kraków Lotnisko station. Trains to Kraków Główny run every 30 minutes (sometimes every 20). Journey: 18-22 minutes. Ticket: 17 zł (~€3.80). Buy your ticket at the platform vending machine (card or cash), in the Koleo app, or from the conductor on board with no surcharge."}
      </p>
      <ul>
        <li>
          {isPl ? (
            <>
              <strong>Czas:</strong> 18-22 min na dworzec + 10-15 min spaceru do
              Rynku. Razem ~35 min.
            </>
          ) : (
            <>
              <strong>Time:</strong> 18-22 min to the station + 10-15 min walk
              to Rynek. Total ~35 min.
            </>
          )}
        </li>
        <li>
          <strong>{isPl ? "Cena" : "Price"}:</strong> 17 zł
        </li>
        <li>
          <strong>{isPl ? "Częstotliwość" : "Frequency"}:</strong> {isPl ? "co 30 min" : "every 30 min"}
        </li>
        <li>
          <strong>{isPl ? "Pierwszy / ostatni" : "First / last"}:</strong> ~04:00 / ~00:00
        </li>
      </ul>

      <h2 id="bus">Bus 300</h2>
      <p>
        {isPl
          ? "Linia 300 to autobus aglomeracyjny obsługiwany przez MPK. Jeździ z lotniska do dworca Kraków Główny przez aleje i centrum. Czas: 40-60 minut zależnie od korków. Cena: 6 zł (bilet 60-minutowy MPK strefa I+II) — kupisz w aplikacji jakdojade lub u kierowcy w automacie kartą. Działa też w nocy (linie 902 i 952)."
          : "Bus 300 is an agglomeration line operated by MPK. It runs from the airport to Kraków Główny via the avenues and the centre. Travel time: 40-60 minutes in traffic. Price: 6 zł (60-minute MPK Zone I+II ticket) — buy in the jakdojade app or from the on-board card vending machine. There is a night service too (lines 902 and 952)."}
      </p>

      <h2 id="taxi">Taxi</h2>
      <p>
        {isPl
          ? "Taxi z oficjalnego postoju przed terminalem jeździ na licencji lotniskowej z ustaloną opłatą za kurs do centrum (zwykle 89-110 zł). Płacisz kartą lub gotówką. Bezpieczne, ale prawie zawsze droższe od Bolta."
          : "Taxis from the official rank in front of the terminal operate under an airport licence with a fixed flat rate to the centre (usually 89-110 zł). You can pay by card or in cash. Safe, but almost always more expensive than Bolt."}
      </p>

      <h2 id="bolt">Bolt / Uber</h2>
      <p>
        {isPl
          ? "Bolt jest dominującą aplikacją w Krakowie. Cena z lotniska do centrum to zwykle 55-85 zł (z surge w czasie szczytu wieczornego — do 110 zł). Po wylądowaniu zamawiasz auto, idziesz do oznaczonego punktu odbioru pasażerów po prawej stronie wyjścia z hali przylotów (oznaczone 'rideshare pickup'). Uber działa identycznie, czasem mniej kierowców."
          : "Bolt is the dominant app in Kraków. From the airport to the centre it usually costs 55-85 zł (with surge in the evening rush, up to 110 zł). After landing, request the car, walk to the marked rideshare pickup point on the right side of the arrivals hall exit. Uber works the same way, sometimes with fewer cars."}
      </p>

      <h2 id="compare">{isPl ? "Porównanie" : "Comparison"}</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>{isPl ? "Cena" : "Price"}</th>
            <th>{isPl ? "Czas" : "Time"}</th>
            <th>{isPl ? "Najlepsze do" : "Best for"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{isPl ? "Pociąg" : "Train"}</td>
            <td>17 zł</td>
            <td>18-22 min</td>
            <td>{isPl ? "Każdy" : "Default"}</td>
          </tr>
          <tr>
            <td>Bus 300</td>
            <td>6 zł</td>
            <td>40-60 min</td>
            <td>{isPl ? "Bardzo skąpi, brak bagażu" : "Backpackers on a budget"}</td>
          </tr>
          <tr>
            <td>Bolt</td>
            <td>55-85 zł</td>
            <td>25-50 min</td>
            <td>{isPl ? "2-4 osoby z bagażem, noc" : "2-4 people with luggage, night"}</td>
          </tr>
          <tr>
            <td>Taxi</td>
            <td>89-110 zł</td>
            <td>25-50 min</td>
            <td>{isPl ? "Brak telefonu z apką" : "No app phone, hate apps"}</td>
          </tr>
        </tbody>
      </table>

      <h2 id="data">{isPl ? "Internet w drodze" : "Mobile data on arrival"}</h2>
      <p>
        {isPl ? (
          <>
            W terminalu jest darmowe WiFi (Krakow Airport Free Wi-Fi). Ale w
            pociągu i autobusie 300 — już nie. Najprostsze rozwiązanie: kup{" "}
            <AffLink partner="airalo">Airalo eSIM</AffLink> przed wylotem,
            zainstaluj go (działa offline) i włącz po wylądowaniu. Twój telefon
            złapie polski operator zanim wyjdziesz z hali przylotów.
          </>
        ) : (
          <>
            The terminal has free WiFi (Krakow Airport Free Wi-Fi). The train
            and bus 300 do not. The simplest fix: buy an{" "}
            <AffLink partner="airalo">Airalo eSIM</AffLink> before you fly,
            install it (it works offline) and enable it after landing. Your
            phone will pick up a Polish network before you leave the arrivals
            hall.
          </>
        )}
      </p>
    </ArticleShell>
  );
}
