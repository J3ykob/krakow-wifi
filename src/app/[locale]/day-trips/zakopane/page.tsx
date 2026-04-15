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
      ? "Zakopane i Tatry z Krakowa — wycieczka jednodniowa"
      : "Zakopane and the Tatras from Kraków — day trip guide",
    description: isPl
      ? "Wycieczka jednodniowa z Krakowa do Zakopanego i Tatr: jak dojechać, kolejka na Kasprowy Wierch, Krupówki, Morskie Oko."
      : "Day trip from Kraków to Zakopane and the Tatras: how to get there, the Kasprowy Wierch cable car, Krupówki, Morskie Oko.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/day-trips/zakopane`,
      languages: {
        en: `${SITE_URL}/en/day-trips/zakopane`,
        pl: `${SITE_URL}/pl/day-trips/zakopane`,
      },
    },
  };
}

export default async function ZakopanePage({
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
      path="/day-trips/zakopane"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/day-trips`, label: isPl ? "Wycieczki" : "Day trips" },
        {
          href: `/${t}/day-trips/zakopane`,
          label: "Zakopane",
        },
      ]}
      title={
        isPl
          ? "Zakopane i Tatry — co da się zrobić w jeden dzień z Krakowa"
          : "Zakopane and the Tatras — what you can fit into a day from Kraków"
      }
      lede={
        isPl
          ? "Zakopane to polska stolica gór, 100 km na południe od Krakowa, u podnóża Tatr. Jako wycieczka jednodniowa jest możliwa, ale napięta — 2 godziny w jedną stronę zostawiają około 5-6 godzin na samym miejscu. Wystarczy na Krupówki, kolejkę na Kasprowy Wierch i jeden dobry góralski obiad. Nie wystarczy na Morskie Oko."
          : "Zakopane is Poland's mountain capital, 100 km south of Kraków at the foot of the Tatras. As a day trip it is doable but tight — 2 hours each way leaves you about 5-6 hours on site. Enough for Krupówki, the Kasprowy Wierch cable car and one good highlander lunch. Not enough for Morskie Oko."
      }
      updated="2026-04-14"
      affiliate
      toc={[
        { id: "should", label: isPl ? "Czy warto na 1 dzień?" : "Worth it for one day?" },
        { id: "transport", label: isPl ? "Dojazd" : "Getting there" },
        { id: "what", label: isPl ? "Co zobaczyć" : "What to see" },
        { id: "morskie", label: isPl ? "Morskie Oko" : "Morskie Oko" },
      ]}
      faq={
        isPl
          ? [
              {
                q: "Czy 1 dzień wystarczy?",
                a: "Tylko ledwo. Dwa dni z noclegiem są znacznie lepsze. Jednodniowa wycieczka pozwala na Krupówki + Kasprowy Wierch + obiad. Morskie Oko + Krupówki + Kasprowy w jeden dzień jest niemożliwe.",
              },
              {
                q: "Ile kosztuje kolejka na Kasprowy Wierch?",
                a: "~119 zł w obie strony, dorosły. Latem rezerwacja online dzień wcześniej obowiązkowa, bo bilety dzienne się rozchodzą.",
              },
              {
                q: "Czy mogę dojechać do Morskiego Oka?",
                a: "Tak, ale to inna trasa: bus z Zakopanego do Palenicy Białczańskiej (40 min), a stamtąd 9 km w jedną stronę pieszo lub konnym wozem. Razem z dojazdem z Krakowa na Morskie Oko to minimum 12 godzin. Znacznie lepiej z noclegiem.",
              },
            ]
          : [
              {
                q: "Is one day enough?",
                a: "Barely. Two days with an overnight is much better. A one-day trip allows Krupówki + Kasprowy Wierch + lunch. Morskie Oko + Krupówki + Kasprowy in one day is impossible.",
              },
              {
                q: "How much is the Kasprowy Wierch cable car?",
                a: "~119 zł return, adult. In summer, online booking the day before is essential — same-day tickets sell out.",
              },
              {
                q: "Can I reach Morskie Oko?",
                a: "Yes, but it's a different route: bus from Zakopane to Palenica Białczańska (40 min), then a 9 km one-way walk or horse cart. Combined with travel from Kraków, getting to Morskie Oko is a minimum 12-hour day. Much better with an overnight.",
              },
            ]
      }
      related={[
        {
          href: `/${t}/day-trips/wieliczka`,
          title: "Wieliczka",
          description: isPl
            ? "Pół-dniowa alternatywa, mniejsza logistyka."
            : "Half-day alternative with less logistics.",
        },
        {
          href: `/${t}/day-trips/auschwitz`,
          title: "Auschwitz-Birkenau",
          description: isPl
            ? "Inny kierunek, inny rodzaj wizyty."
            : "Different direction, different kind of visit.",
        },
        {
          href: `/${t}/transport`,
          title: "Transport",
          description: isPl
            ? "Skąd odjeżdżają busy do Zakopanego."
            : "Where the Zakopane buses depart from.",
        },
      ]}
    >
      <h2 id="should">{isPl ? "Czy warto jako wycieczka jednodniowa?" : "Is it worth it as a day trip?"}</h2>
      <p>
        {isPl
          ? "Krótka odpowiedź: jeśli to Twoja pierwsza wizyta w Polsce i musisz zobaczyć góry, to tak — ale wybierz tylko jedną rzecz w Tatrach (Kasprowy Wierch ALBO Dolina Kościeliska, NIE oba). Jeśli masz drugi dzień, prawie zawsze lepiej jest nocować w Zakopanem i zrobić Morskie Oko drugiego dnia rano. Najgorszy wariant to 'spróbujmy Morskie Oko jednodniowo' — wracasz wyczerpany, niewiele widziałeś, marudzisz cały następny dzień."
          : "Short answer: if it's your first visit to Poland and you must see the mountains, yes — but pick one thing in the Tatras (Kasprowy Wierch OR the Kościeliska Valley, not both). If you have a second day, it's almost always better to stay overnight in Zakopane and do Morskie Oko on the second morning. The worst variant is 'let's try Morskie Oko in a day' — you come back exhausted, having seen little, and grumble all next day."}
      </p>

      <h2 id="transport">{isPl ? "Dojazd z Krakowa" : "Getting there from Kraków"}</h2>
      <ul>
        <li>
          <strong>{isPl ? "Bus prywatny" : "Private bus"}</strong> —{" "}
          {isPl
            ? "operatorzy: FlixBus, SzwagroPol, Strama. Z Dworca MDA (obok Kraków Główny) co 30-60 minut. ~25-40 zł, 2 godziny."
            : "operators: FlixBus, SzwagroPol, Strama. From MDA Bus Station (next to Kraków Główny) every 30-60 minutes. ~25-40 zł, 2 hours."}
        </li>
        <li>
          <strong>{isPl ? "Pociąg" : "Train"}</strong> —{" "}
          {isPl
            ? "PKP Intercity z Krakowa Głównego, 2 h 30 min, ~30 zł. Mniej elastyczny od busa, ale wygodniejszy."
            : "PKP Intercity from Kraków Główny, 2 h 30 min, ~30 zł. Less flexible than the bus but more comfortable."}
        </li>
        <li>
          <strong>{isPl ? "Wycieczka organizowana" : "Organised tour"}</strong>{" "}
          —{" "}
          {isPl ? (
            <>
              minibus z hotelu z przewodnikiem mówiącym po angielsku. ~250 zł.{" "}
              <AffLink partner="getyourguide" slug="zakopane">
                Rezerwacja
              </AffLink>{" "}
              (link afiliacyjny).
            </>
          ) : (
            <>
              minibus pickup from your hotel with an English-speaking guide.
              ~250 zł.{" "}
              <AffLink partner="getyourguide" slug="zakopane">
                Booking
              </AffLink>{" "}
              (affiliate link).
            </>
          )}
        </li>
      </ul>

      <h2 id="what">{isPl ? "Co realnie zobaczysz" : "What you'll realistically see"}</h2>
      <p>
        {isPl ? (
          <>
            Zakładając wyjazd z Krakowa o 7:00 i powrót o 21:00, w samym
            Zakopanem masz ok. 6 godzin. Realny plan:
          </>
        ) : (
          <>
            Assuming a 7 AM departure from Kraków and a 9 PM return, you have
            about 6 hours in Zakopane itself. A realistic plan:
          </>
        )}
      </p>
      <ol>
        <li>
          <strong>{isPl ? "Krupówki" : "Krupówki"}</strong> —{" "}
          {isPl
            ? "główny deptak Zakopanego, 30-45 min na spacer i krótką sesję zdjęciową. Wszystko, co musisz zobaczyć w samym mieście."
            : "Zakopane's main pedestrian street. 30-45 min for a walk and a quick photo session. Everything you need to see in town itself."}
        </li>
        <li>
          <strong>{isPl ? "Kolejka na Kasprowy Wierch" : "Kasprowy Wierch cable car"}</strong>{" "}
          — {isPl ? "wjazd w 12 minut na 1987 m. Na górze pół godziny na panoramę Tatr (Słowacja po drugiej stronie). 119 zł, rezerwuj online dzień wcześniej w sezonie." : "12-minute ride to 1987 m. Half an hour on top for the Tatra panorama (Slovakia on the other side). 119 zł, book online a day ahead in season."}
        </li>
        <li>
          <strong>{isPl ? "Obiad w karczmie" : "Lunch in a karczma"}</strong>{" "}
          — {isPl ? "tradycyjna góralska kuchnia: oscypek z żurawiną, kwaśnica, placek po zbójnicku. Najlepsze miejsca są jedną przecznicę od Krupówek (mniej tłumu, lepsze ceny)." : "traditional highlander food: oscypek (smoked sheep cheese) with cranberry, kwaśnica, placek po zbójnicku. The best spots are one block off Krupówki (less crowd, better prices)."}
        </li>
      </ol>
      <p>
        {isPl
          ? "Co NIE zmieścisz w jednym dniu: Morskie Oko (pełen dzień samo w sobie), Dolina Kościeliska (3-4 godziny), Gubałówka (alternatywa dla Kasprowego, ale wybierz jedno)."
          : "What you cannot fit in one day: Morskie Oko (a full day on its own), the Kościeliska Valley (3-4 hours), Gubałówka (alternative to Kasprowy, but pick one)."}
      </p>

      <h2 id="morskie">{isPl ? "Morskie Oko — dlaczego potrzebuje 2 dni" : "Morskie Oko — why it needs 2 days"}</h2>
      <p>
        {isPl
          ? "Morskie Oko to największe i najpiękniejsze górskie jezioro polskich Tatr — często pojawia się na zdjęciach 'Polska, miejsca, które musisz zobaczyć'. Dojazd: bus z Zakopanego do parkingu Palenica Białczańska (40 minut), potem 9 km pieszo asfaltową drogą w górę (2 godziny w jedną stronę) lub konnym wozem (45 zł, ale działa tylko do określonego punktu). Razem z czasem nad jeziorem to 6-7 godzin samej wycieczki — nie do połączenia z dojazdem z Krakowa w 14 godzin."
          : "Morskie Oko is the largest and most beautiful mountain lake in the Polish Tatras — it appears constantly in 'Poland, places you must see' photo lists. Access: bus from Zakopane to the Palenica Białczańska car park (40 minutes), then 9 km on a paved uphill road (2 hours one way) or a horse cart (45 zł, only goes to a certain point). With time at the lake itself this is 6-7 hours just for the excursion — not compatible with a 14-hour round trip from Kraków."}
      </p>
      <p>
        {isPl
          ? "Lepszy wariant: nocleg w Zakopanem, wczesny start na Morskie Oko (autobus 7:00), powrót koło 14:00, a po południu Krupówki i Kasprowy Wierch."
          : "Better plan: overnight in Zakopane, early morning start to Morskie Oko (7 AM bus), back around 2 PM, and Krupówki + Kasprowy Wierch in the afternoon."}
      </p>
    </ArticleShell>
  );
}
