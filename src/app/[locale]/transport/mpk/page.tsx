import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale, SITE_URL } from "@/i18n/config";
import ArticleShell from "@/components/ArticleShell";

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
      ? "Bilety MPK Kraków — strefy, ceny, jak kupić"
      : "MPK Kraków tickets — zones, prices, how to buy",
    description: isPl
      ? "Bilety czasowe MPK, strefa I+II, jak kupić w aplikacji jakdojade i mobiMPK, jak ich nie skasować źle, mandaty kontrolerów."
      : "MPK time-based tickets, Zone I+II, how to buy in jakdojade and mobiMPK apps, how not to get fined.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/transport/mpk`,
      languages: {
        en: `${SITE_URL}/en/transport/mpk`,
        pl: `${SITE_URL}/pl/transport/mpk`,
      },
    },
  };
}

export default async function MpkPage({
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
      path="/transport/mpk"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/transport`, label: "Transport" },
        { href: `/${t}/transport/mpk`, label: "MPK" },
      ]}
      title={
        isPl
          ? "Bilety MPK: strefy, ceny i jak ich nie skasować źle"
          : "MPK tickets: zones, prices and how not to validate them wrong"
      }
      lede={
        isPl
          ? "MPK Kraków obsługuje wszystkie tramwaje i autobusy miejskie. System biletowy jest prosty, ale ma kilka pułapek, na których łapie się większość turystów. Ten przewodnik je wszystkie wyjaśnia."
          : "MPK Kraków runs every tram and city bus. The ticket system is simple, but it has a few traps that catch most tourists. This guide covers them all."
      }
      updated="2026-04-14"
      toc={[
        { id: "zones", label: isPl ? "Strefy" : "Zones" },
        { id: "tickets", label: isPl ? "Rodzaje biletów" : "Ticket types" },
        { id: "buy", label: isPl ? "Jak kupić" : "How to buy" },
        { id: "validate", label: isPl ? "Jak skasować" : "How to validate" },
        { id: "fines", label: isPl ? "Kontrolerzy i mandaty" : "Inspectors and fines" },
      ]}
      faq={
        isPl
          ? [
              {
                q: "Czy bilet kasowany w tramwaju działa też w autobusie?",
                a: "Tak — bilety czasowe (20-, 60-, 90-minutowe, 24-, 48-, 72-godzinne) działają na wszystkich pojazdach MPK w wybranej strefie. Możesz przesiąść się dowolną liczbę razy w okresie ważności biletu.",
              },
              {
                q: "Strefa I czy I+II dla turysty?",
                a: "Jeśli zostajesz w centrum, Kazimierzu, Podgórzu i jedziesz na Wawel — wystarcza Strefa I. Strefa II obejmuje Lotnisko Balice, Wieliczkę i obrzeża. Bus 300 z lotniska to Strefa I+II.",
              },
              {
                q: "Czy mogę kupić bilet u kierowcy / motorniczego?",
                a: "Nie u kierowcy. Niektóre nowe pojazdy mają automaty biletowe wewnątrz (akceptują karty). Pewniejsze jest kupno przez aplikację jakdojade lub mobiMPK przed wejściem.",
              },
              {
                q: "Kontroler złapał mnie bez biletu — co teraz?",
                a: "Mandat to 280 zł na miejscu (lub 240 zł zapłacone od razu kartą). Brak biletu = mandat, nawet jeśli mówisz, że jesteś turystą. Nie ma marginesu negocjacji.",
              },
            ]
          : [
              {
                q: "Does a ticket validated in a tram also work on a bus?",
                a: "Yes — time-based tickets (20-, 60-, 90-minute, 24-, 48-, 72-hour) work on every MPK vehicle within the chosen zone. You can change as many times as you want within the validity window.",
              },
              {
                q: "Zone I or Zone I+II for tourists?",
                a: "If you stick to the centre, Kazimierz, Podgórze and Wawel — Zone I is enough. Zone II covers Balice Airport, Wieliczka and the outskirts. Bus 300 from the airport is Zone I+II.",
              },
              {
                q: "Can I buy from the driver?",
                a: "Not from the driver. Some newer vehicles have a ticket vending machine inside (cards accepted). The safer option is to buy in the jakdojade or mobiMPK app before boarding.",
              },
              {
                q: "An inspector caught me without a ticket — what now?",
                a: "The fine is 280 zł on the spot (or 240 zł if you pay immediately by card). No ticket equals fine, even if you explain you are a tourist. There is no negotiation margin.",
              },
            ]
      }
      related={[
        {
          href: `/${t}/transport/airport`,
          title: isPl ? "Lotnisko → centrum" : "Airport → city",
          description: isPl
            ? "Bus 300 vs pociąg — kiedy bilet MPK się przydaje."
            : "Bus 300 vs train — when an MPK ticket helps.",
        },
        {
          href: `/${t}/transport/taxi`,
          title: "Taxi · Bolt · Uber",
          description: isPl
            ? "Kiedy MPK nie ma sensu i lepiej zamówić Bolta."
            : "When MPK doesn't make sense and Bolt is the move.",
        },
        {
          href: `/${t}/areas/nowa-huta`,
          title: "Nowa Huta",
          description: isPl
            ? "Tramwaje 4, 10, 14, 16 i 22 dojadą tam za bilet 4 zł."
            : "Trams 4, 10, 14, 16 and 22 reach Nowa Huta on a 4 zł ticket.",
        },
      ]}
    >
      <h2 id="zones">{isPl ? "Strefy" : "Zones"}</h2>
      <p>
        {isPl
          ? "MPK ma dwie strefy: Strefa I to miasto Kraków w granicach administracyjnych. Strefa II to gminy podmiejskie (Wieliczka, Skawina, Zielonki...) plus lotnisko Balice. Każdy bilet kupujesz albo na 'Strefa I', albo na 'Strefa I+II'."
          : "MPK has two zones: Zone I is the city of Kraków within its administrative boundaries. Zone II covers the surrounding municipalities (Wieliczka, Skawina, Zielonki...) plus Balice Airport. Every ticket is sold either as 'Zone I' or 'Zone I+II'."}
      </p>

      <h2 id="tickets">{isPl ? "Rodzaje biletów" : "Ticket types"}</h2>
      <table>
        <thead>
          <tr>
            <th>{isPl ? "Bilet" : "Ticket"}</th>
            <th>{isPl ? "Strefa I" : "Zone I"}</th>
            <th>{isPl ? "Strefa I+II" : "Zone I+II"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{isPl ? "20 minut" : "20 minutes"}</td>
            <td>4 zł</td>
            <td>—</td>
          </tr>
          <tr>
            <td>{isPl ? "60 minut" : "60 minutes"}</td>
            <td>6 zł</td>
            <td>8 zł</td>
          </tr>
          <tr>
            <td>{isPl ? "90 minut" : "90 minutes"}</td>
            <td>8 zł</td>
            <td>10 zł</td>
          </tr>
          <tr>
            <td>{isPl ? "24 godziny" : "24 hours"}</td>
            <td>17 zł</td>
            <td>22 zł</td>
          </tr>
          <tr>
            <td>{isPl ? "48 godzin" : "48 hours"}</td>
            <td>30 zł</td>
            <td>38 zł</td>
          </tr>
          <tr>
            <td>{isPl ? "72 godziny" : "72 hours"}</td>
            <td>42 zł</td>
            <td>52 zł</td>
          </tr>
          <tr>
            <td>{isPl ? "Weekendowy (sob+nd)" : "Weekend (Sat+Sun)"}</td>
            <td>26 zł</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>

      <div className="callout callout--tip">
        <strong>Tip:</strong>{" "}
        {isPl
          ? "Dla typowego dnia zwiedzania Krakowa najtaniej wychodzi bilet 24-godzinny w Strefie I (17 zł). Po trzech-czterech kursach już się zwraca."
          : "For a typical day of sightseeing in Kraków, the 24-hour Zone I ticket (17 zł) is the cheapest. It pays back after three or four rides."}
      </div>

      <h2 id="buy">{isPl ? "Jak kupić bilet" : "How to buy a ticket"}</h2>
      <ul>
        <li>
          <strong>jakdojade.pl</strong> — {isPl
            ? "aplikacja po angielsku, kupujesz bilet kartą, kasowanie automatyczne. Najprostsze."
            : "English app, buy with a card, automatic validation. The simplest option."}
        </li>
        <li>
          <strong>mobiMPK</strong> — {isPl
            ? "oficjalna aplikacja MPK, ten sam katalog biletów."
            : "the official MPK app, same ticket catalogue."}
        </li>
        <li>
          <strong>{isPl ? "Automaty na przystankach" : "Vending machines at stops"}</strong> —{" "}
          {isPl ? "akceptują karty bezstykowe." : "accept contactless cards."}
        </li>
        <li>
          <strong>{isPl ? "Automaty w pojazdach" : "On-board vending machines"}</strong> —{" "}
          {isPl
            ? "tylko w nowszych tramwajach i autobusach. Karta tylko."
            : "only in newer trams and buses. Cards only."}
        </li>
      </ul>

      <h2 id="validate">{isPl ? "Jak skasować bilet" : "How to validate a ticket"}</h2>
      <p>
        {isPl
          ? "Bilet papierowy z automatu kasujesz w żółtym kasowniku zaraz po wejściu do pojazdu (wkładasz końcówką ze strzałką). Bilet kupiony w aplikacji aktywuje się automatycznie w momencie zakupu — nie musisz nic kasować, ale nie kupuj go kilka minut wcześniej, bo czas leci od momentu zakupu."
          : "A paper ticket from a vending machine must be punched in the yellow on-board validator immediately after boarding (insert the arrow end first). A ticket bought in an app activates automatically at the time of purchase — you don't need to validate anything, but don't buy it minutes early because the clock starts ticking from the purchase time."}
      </p>

      <h2 id="fines">{isPl ? "Kontrolerzy i mandaty" : "Inspectors and fines"}</h2>
      <p>
        {isPl
          ? "Kontrolerzy w cywilu wsiadają w losowych miejscach, najczęściej między Rynkiem a Dworcem, na linii do Krakowa Płaszowa i na trasach do Nowej Huty. Pokazują legitymację i proszą o bilet. Brak biletu = 280 zł mandatu (240 zł przy zapłacie kartą od razu). Kontroler nie ma marginesu negocjacji, więc nie marnuj jego czasu argumentacją."
          : "Inspectors in plain clothes board at random points, most often between Rynek and the train station, on the Płaszów line, and on routes to Nowa Huta. They show their ID and ask for your ticket. No ticket = 280 zł fine (240 zł if you pay by card on the spot). Inspectors have no negotiation margin — don't waste their time arguing."}
      </p>
      <p>
        {isPl
          ? "Jeśli kupiłeś bilet w aplikacji, pokaż ekran z aktywnym biletem. Wystarczy."
          : "If you bought your ticket in the app, just show the active ticket screen. That is enough."}
      </p>
    </ArticleShell>
  );
}
