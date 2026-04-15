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
      ? "Auschwitz-Birkenau z Krakowa — bilety, dojazd, organizacja"
      : "Auschwitz-Birkenau from Kraków — tickets, transport, planning",
    description: isPl
      ? "Pełen przewodnik po wizycie w Auschwitz-Birkenau z Krakowa: jak zarezerwować bilet, jak dojechać autobusem lub z grupą, ile to trwa, czego się spodziewać."
      : "A complete guide to visiting Auschwitz-Birkenau from Kraków: how to book a ticket, how to get there by bus or with a group, how long it takes, what to expect.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/day-trips/auschwitz`,
      languages: {
        en: `${SITE_URL}/en/day-trips/auschwitz`,
        pl: `${SITE_URL}/pl/day-trips/auschwitz`,
      },
    },
  };
}

export default async function AuschwitzPage({
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
      path="/day-trips/auschwitz"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/day-trips`, label: isPl ? "Wycieczki" : "Day trips" },
        {
          href: `/${t}/day-trips/auschwitz`,
          label: "Auschwitz-Birkenau",
        },
      ]}
      title={
        isPl
          ? "Auschwitz-Birkenau z Krakowa — kompletny przewodnik"
          : "Auschwitz-Birkenau from Kraków — the complete guide"
      }
      lede={
        isPl
          ? "Były niemiecki nazistowski obóz koncentracyjny i zagłady Auschwitz-Birkenau leży 65 km na zachód od Krakowa, w Oświęcimiu. Wizyta zajmuje cały dzień i jest jednym z najtrudniejszych emocjonalnie, ale i najważniejszych miejsc, które można odwiedzić w Europie. Tu jest wszystko, co musisz wiedzieć, żeby zaplanować wizytę: bilety, dojazd, czego się spodziewać i czego unikać."
          : "The former German Nazi concentration and extermination camp Auschwitz-Birkenau is 65 km west of Kraków, in the town of Oświęcim. A visit takes a full day and is one of the most emotionally demanding but also most important places you can visit in Europe. Here is everything you need to plan the visit: tickets, transport, what to expect and what to avoid."
      }
      updated="2026-04-14"
      affiliate
      toc={[
        { id: "before", label: isPl ? "Zanim pojedziesz" : "Before you go" },
        { id: "tickets", label: isPl ? "Bilety" : "Tickets" },
        { id: "transport", label: isPl ? "Dojazd" : "Getting there" },
        { id: "visit", label: isPl ? "Jak wygląda wizyta" : "What the visit looks like" },
        { id: "etiquette", label: isPl ? "Etykieta" : "Etiquette" },
      ]}
      faq={
        isPl
          ? [
              {
                q: "Czy bilety są darmowe?",
                a: "Wstęp na teren Państwowego Muzeum Auschwitz-Birkenau jest formalnie bezpłatny, ale w godzinach 10:00-15:00 (najwięcej zwiedzających) wymagana jest rezerwacja z opłatą za przewodnika — ok. 100 zł. Poza tymi godzinami można wejść samodzielnie bez opłaty, ale o godzinie 8:00 lub po 16:00.",
              },
              {
                q: "Czy mogę pojechać samodzielnie czy lepiej z grupą?",
                a: "Możesz oba. Samodzielny dojazd to autobus z dworca autobusowego w Krakowie (~13 zł, 1 h 45 min) lub pociąg (~17 zł, 1 h 30 min). Z grupą to typowa zorganizowana wycieczka: bus z hotelu, przewodnik mówiący po angielsku, powrót po południu. Logistycznie prościej.",
              },
              {
                q: "Czy dzieci mogą wejść?",
                a: "Muzeum nie zaleca wizyty dzieciom poniżej 14 roku życia.",
              },
              {
                q: "Ile trwa zwiedzanie?",
                a: "Standardowa trasa to 3.5 godziny — 2 godziny w Auschwitz I (główny obóz) i 1.5 godziny w Auschwitz II Birkenau (3 km dalej, transport autobusem między obozami w cenie). Razem z dojazdem z Krakowa: cały dzień (8-9 godzin).",
              },
            ]
          : [
              {
                q: "Are tickets free?",
                a: "Entry to the State Museum Auschwitz-Birkenau is formally free, but between 10 AM and 3 PM (peak hours) you must reserve with a guide fee of about 100 zł. Outside those hours you can enter individually without a fee, but only at 8 AM or after 4 PM.",
              },
              {
                q: "Should I go on my own or with a tour?",
                a: "Both work. On your own: bus from Kraków bus station (~13 zł, 1 h 45 min) or train (~17 zł, 1 h 30 min). With a group: a typical organised tour bus from your hotel, English-speaking guide, return in the afternoon. Logistically simpler.",
              },
              {
                q: "Can children visit?",
                a: "The museum advises against visits by children under 14.",
              },
              {
                q: "How long does the visit take?",
                a: "The standard route is 3.5 hours — 2 hours in Auschwitz I (the main camp) and 1.5 hours in Auschwitz II Birkenau (3 km away, shuttle bus between camps included). Together with travel from Kraków: a full day (8-9 hours).",
              },
            ]
      }
      related={[
        {
          href: `/${t}/day-trips/wieliczka`,
          title: isPl ? "Wieliczka" : "Wieliczka Salt Mine",
          description: isPl
            ? "Pół-dniowa wycieczka w przeciwnym kierunku."
            : "A half-day trip in the opposite direction.",
        },
        {
          href: `/${t}/day-trips/zakopane`,
          title: "Zakopane",
          description: isPl
            ? "Tatry — odpoczynek po ciężkim dniu."
            : "The Tatras — recovery after a heavy day.",
        },
        {
          href: `/${t}/transport`,
          title: "Transport",
          description: isPl
            ? "Jak dojechać na dworzec autobusowy w Krakowie."
            : "How to get to Kraków bus station.",
        },
      ]}
    >
      <h2 id="before">{isPl ? "Zanim pojedziesz" : "Before you go"}</h2>
      <p>
        {isPl
          ? "Auschwitz-Birkenau to nie atrakcja turystyczna w klasycznym sensie. To miejsce pamięci o ponad milionie ludzi (głównie Żydów europejskich, ale też Polaków, Romów, sowieckich jeńców wojennych) zamordowanych tu przez Niemców między 1940 a 1945 rokiem. Idziesz, żeby pamiętać, nie żeby zwiedzać. Większość ludzi opisuje wizytę jako fizycznie i emocjonalnie wyczerpującą, niezależnie od tego, ile o tym wcześniej czytała."
          : "Auschwitz-Birkenau is not a tourist attraction in the conventional sense. It is a memorial site for over a million people (mostly European Jews, but also Poles, Roma, and Soviet POWs) murdered here by the Germans between 1940 and 1945. You go to remember, not to sightsee. Most people describe the visit as physically and emotionally exhausting, regardless of how much they read about it beforehand."}
      </p>
      <p>
        {isPl
          ? "Praktycznie: weź wodę, wygodne buty (chodzenie po terenie 4-5 km), ubranie odpowiednie do pogody (większość trasy na zewnątrz), telefon naładowany. Nie zaplanuj nic obciążającego po południu po powrocie."
          : "Practically: bring water, comfortable shoes (4-5 km of walking on uneven ground), weather-appropriate clothing (most of the route is outdoors), a charged phone. Don't plan anything demanding for the afternoon after you return."}
      </p>

      <h2 id="tickets">{isPl ? "Bilety i rezerwacja" : "Tickets and booking"}</h2>
      <p>
        {isPl
          ? "Bilety rezerwujesz na visit.auschwitz.org — oficjalnej stronie muzeum. Sprzedaż otwiera się 90 dni przed datą wizyty. W sezonie (maj-wrzesień) bilety na rano sprzedają się w 24-48 godzin. Spóźnisz się — będzie pełno."
          : "Book tickets at visit.auschwitz.org — the official museum site. Sales open 90 days before the visit date. In peak season (May-September) morning slots sell out within 24-48 hours. Don't wait."}
      </p>
      <p>
        {isPl
          ? "Trzy główne typy biletów:"
          : "Three main ticket types:"}
      </p>
      <ul>
        <li>
          <strong>{isPl ? "Wejście indywidualne" : "Individual entry"}</strong>{" "}
          — {isPl ? "bezpłatne, dostępne tylko 8:00 lub po 16:00. Sam zwiedzasz, bez przewodnika." : "free, available only at 8 AM or after 4 PM. You walk through on your own, no guide."}
        </li>
        <li>
          <strong>{isPl ? "Wycieczka z przewodnikiem" : "Guided tour"}</strong>{" "}
          — {isPl ? "obowiązkowa w godzinach 10:00-15:00. ~100 zł od osoby. Trwa 3.5 godziny. Można wybrać język (PL, EN, DE, ES, IT, FR i inne)." : "mandatory between 10 AM and 3 PM. ~100 zł per person. 3.5 hours. You can choose the language (PL, EN, DE, ES, IT, FR and others)."}
        </li>
        <li>
          <strong>{isPl ? "Wycieczka studyjna" : "Study tour"}</strong> —{" "}
          {isPl ? "6-8 godzin, dla tych, którzy chcą zobaczyć więcej niż standardową trasę. ~200 zł." : "6-8 hours, for visitors who want more than the standard route. ~200 zł."}
        </li>
      </ul>
      <div className="callout callout--info">
        <strong>{isPl ? "Najprostsze rozwiązanie" : "Simplest option"}:</strong>{" "}
        {isPl ? (
          <>
            zarezerwuj zorganizowaną{" "}
            <AffLink partner="getyourguide" slug="auschwitz">
              wycieczkę z transportem z hotelu
            </AffLink>
            . Cena ~150-200 zł obejmuje przejazd w obie strony, bilet, przewodnika muzealnego i opiekuna grupy. Mniej logistyki, mniej stresu. (link afiliacyjny)
          </>
        ) : (
          <>
            book an organised{" "}
            <AffLink partner="getyourguide" slug="auschwitz">
              tour with hotel transport
            </AffLink>
            . The 150-200 zł price covers round-trip transport, the ticket, the museum guide and a tour leader. Less logistics, less stress. (affiliate link)
          </>
        )}
      </div>

      <h2 id="transport">{isPl ? "Dojazd na własną rękę" : "Getting there on your own"}</h2>
      <ul>
        <li>
          <strong>{isPl ? "Autobus" : "Bus"}</strong> —{" "}
          {isPl
            ? "z Dworca Autobusowego MDA (obok Krakowa Głównego). Linia bezpośrednia 'Oświęcim' co godzinę. ~13-18 zł, 1 h 45 min. Wysiadasz przed bramą muzeum."
            : "from MDA Bus Station (next to Kraków Główny). Direct 'Oświęcim' service every hour. ~13-18 zł, 1 h 45 min. You alight right at the museum gate."}
        </li>
        <li>
          <strong>{isPl ? "Pociąg" : "Train"}</strong> —{" "}
          {isPl
            ? "z Krakowa Głównego do Oświęcimia. ~17 zł, 1 h 30 min. Z dworca w Oświęcimiu autobus 24 lub 25 do bram muzeum (~10 min)."
            : "from Kraków Główny to Oświęcim. ~17 zł, 1 h 30 min. From Oświęcim station, bus 24 or 25 to the museum gates (~10 min)."}
        </li>
        <li>
          <strong>Bolt</strong> —{" "}
          {isPl ? "ok. 250-320 zł w jedną stronę. Sensowne tylko dla 3-4 osób." : "around 250-320 zł one way. Only worth it for 3-4 people."}
        </li>
      </ul>

      <h2 id="visit">{isPl ? "Jak wygląda wizyta" : "What the visit looks like"}</h2>
      <p>
        {isPl
          ? "Wizyta jest podzielona na dwie części. Pierwsza — Auschwitz I, dawny obóz koncentracyjny, mieszczący się w przedwojennych polskich koszarach. Tu zwiedzasz bloki ekspozycyjne: zdjęcia, dokumenty, gabloty z osobistymi rzeczami zamordowanych — buty, walizki, włosy, okulary. Najtrudniejsza emocjonalnie część wizyty. Trwa ok. 2 godziny."
          : "The visit is in two parts. First — Auschwitz I, the original concentration camp, set in pre-war Polish barracks. Here you walk through exhibition blocks: photographs, documents, display cases with personal belongings of those murdered — shoes, suitcases, hair, glasses. The emotionally hardest part of the visit. About 2 hours."}
      </p>
      <p>
        {isPl
          ? "Druga część — Auschwitz II Birkenau, oddalona o 3 km. Tu zbudowano największy ośrodek zagłady; tu znajdowały się komory gazowe i krematoria. Skala jest oszałamiająca: 175 hektarów drewnianych baraków, tor kolejowy, ruiny komór. Druga godzina i pół wizyty. Bezpłatny autobus wahadłowy między obozami jest w cenie biletu."
          : "Second — Auschwitz II Birkenau, 3 km away. This is where the largest extermination centre was built; the gas chambers and crematoria were here. The scale is overwhelming: 175 hectares of wooden barracks, the railway track, the ruins of the chambers. The second 1.5 hours of the visit. The free shuttle bus between the camps is included in the ticket."}
      </p>

      <h2 id="etiquette">{isPl ? "Etykieta na miejscu" : "Etiquette on site"}</h2>
      <ul>
        <li>
          {isPl
            ? "Nie rób uśmiechniętych selfie. To jest cmentarz."
            : "No smiling selfies. This is a graveyard."}
        </li>
        <li>
          {isPl
            ? "Wycisz telefon. Mów po cichu. W barakach mieszkalnych bywają chwile, w których nawet przewodnik milczy — przyłącz się."
            : "Silence your phone. Speak quietly. In the residential barracks there are moments when even the guide stops talking — join them."}
        </li>
        <li>
          {isPl
            ? "Zdjęcia są dozwolone w większości miejsc, ale nie wszędzie. Słuchaj przewodnika."
            : "Photos are allowed in most places but not everywhere. Listen to your guide."}
        </li>
        <li>
          {isPl
            ? "Nie zostawiaj jedzenia ani niedopałków. Nie wchodź poza wyznaczone trasy."
            : "Don't leave food or cigarette butts. Don't step off the marked paths."}
        </li>
      </ul>
    </ArticleShell>
  );
}
