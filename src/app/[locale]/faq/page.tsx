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
      ? "FAQ — najczęściej zadawane pytania o Kraków"
      : "FAQ — frequently asked questions about Kraków",
    description: isPl
      ? "Najczęściej zadawane pytania przez turystów w Krakowie: bezpieczeństwo, woda z kranu, język, waluta, czas pobytu."
      : "The most common questions tourists ask about Kraków: safety, tap water, language, currency, how long to stay.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/faq`,
      languages: {
        en: `${SITE_URL}/en/faq`,
        pl: `${SITE_URL}/pl/faq`,
      },
    },
  };
}

const QA = {
  en: [
    {
      q: "Is Kraków safe?",
      a: "Yes — by European standards Kraków is one of the safer cities. Violent street crime is rare. The main risks are pickpocketing on crowded trams (especially the line from the train station to Wawel) and tourist scams (covered on /scams). Walking around the Old Town and Kazimierz at any hour of the night is fine for most people.",
    },
    {
      q: "Can I drink the tap water?",
      a: "Yes. Polish tap water meets EU standards and Kraków's supply is well-regarded. Locals drink it regularly. If you don't like the taste, bottled water is cheap (3-4 zł in any shop).",
    },
    {
      q: "What language do they speak?",
      a: "Polish. In the centre of Kraków, almost everyone working in hospitality, transport and museums also speaks English. Older people outside the centre often don't. Most signs in the centre are bilingual or trilingual.",
    },
    {
      q: "How long should I stay?",
      a: "Two full days for the first visit: one for the Old Town + Wawel, one for Kazimierz + Podgórze. Three days if you want to add Nowa Huta or a half-day trip to Wieliczka salt mine. Five days if you also want Auschwitz-Birkenau and Zakopane.",
    },
    {
      q: "Is Kraków expensive?",
      a: "Cheaper than London, Paris, Berlin and Amsterdam, but more expensive than it was five years ago. Expect to spend €40-70 a day for budget travel (hostel + milk bars + walking) or €100-150 for mid-range (3-star hotel + restaurant lunches + occasional taxi).",
    },
    {
      q: "What's the weather like?",
      a: "Continental climate with cold winters (down to -10°C in January, snow likely) and warm summers (25-30°C in July, occasional thunderstorms). Best months to visit: May, June, September. Avoid late November and February — grey, damp, no snow yet or already gone.",
    },
    {
      q: "Do I need a visa?",
      a: "EU citizens: no, just an ID card. UK / US / Canadian / Australian / Japanese citizens and most others: no visa for stays under 90 days within any 180-day period (Schengen rules). Check Schengen calculator before longer trips.",
    },
    {
      q: "Should I use cash or card?",
      a: "Card almost everywhere. Tap pay works on trams, parking meters, food trucks. Keep 50-100 zł in cash for the few milk bars, market stalls and obwarzanek vendors that still prefer cash.",
    },
    {
      q: "What should I avoid?",
      a: "Restaurants directly facing Rynek Główny with photos in the menu. Kantors on Floriańska with '0% commission' signs. Euronet ATMs. 'Tourist SIM' kiosks. Hailing taxis from the rank instead of using Bolt.",
    },
    {
      q: "When are museums closed?",
      a: "Most museums close on Mondays (this includes Wawel Royal Castle museum routes, the Czartoryski Museum and most national museum branches). Schindler's Factory closes on the first Tuesday of every month. Cathedrals are open daily but shorter hours on Sundays.",
    },
    {
      q: "Can I visit Auschwitz from Kraków?",
      a: "Yes. Auschwitz-Birkenau is 65 km west of Kraków. Bus from Kraków main bus station (~1 h 45 min, 18-25 zł), or a guided tour with transport from your hotel. Book the museum entry ticket online in advance — same-day entry is rarely available.",
    },
    {
      q: "What about Wieliczka Salt Mine?",
      a: "Half a day. Train from Kraków Główny to Wieliczka Rynek-Kopalnia (~30 min, 5 zł). The mine entry ticket is around 119 zł and includes a 2-hour guided tour underground. Comfortable shoes essential — 800+ steps on the route.",
    },
  ],
  pl: [
    {
      q: "Czy Kraków jest bezpieczny?",
      a: "Tak — w skali europejskiej Kraków jest jednym z bezpieczniejszych miast. Przemoc uliczna jest rzadka. Główne ryzyka to kradzieże kieszonkowe w tłocznych tramwajach (zwłaszcza linia z dworca pod Wawel) i oszustwa na turystach (opisane na /scams). Spacer po Starym Mieście i Kazimierzu o dowolnej porze nocy jest dla większości osób bezpieczny.",
    },
    {
      q: "Czy mogę pić wodę z kranu?",
      a: "Tak. Polska woda z kranu spełnia normy unijne, a krakowski wodociąg ma dobrą opinię. Mieszkańcy regularnie ją piją. Jeśli nie podoba Ci się smak, butelkowana jest tania (3-4 zł w sklepie).",
    },
    {
      q: "Jakim językiem się tu mówi?",
      a: "Polskim. W centrum Krakowa praktycznie każdy pracujący w turystyce, transporcie i muzeach mówi również po angielsku. Starsze osoby poza centrum często nie. Znaki w centrum są zwykle dwu- lub trzyjęzyczne.",
    },
    {
      q: "Ile czasu zostawić na Kraków?",
      a: "Dwa pełne dni na pierwszą wizytę: jeden na Stare Miasto + Wawel, jeden na Kazimierz + Podgórze. Trzy dni, jeśli chcesz dodać Nową Hutę lub pół dnia w Wieliczce. Pięć dni jeśli również Auschwitz-Birkenau i Zakopane.",
    },
    {
      q: "Czy Kraków jest drogi?",
      a: "Taniej niż Londyn, Paryż, Berlin i Amsterdam, ale drożej niż pięć lat temu. Budżet 40-70 € dziennie wystarcza na hostel + bary mleczne + spacer. Średnia półka to 100-150 € dziennie (hotel 3* + restauracje + okazyjnie taxi).",
    },
    {
      q: "Jaka jest pogoda?",
      a: "Klimat kontynentalny — zimy chłodne (do -10°C w styczniu, śnieg prawdopodobny), lata ciepłe (25-30°C w lipcu, okazyjne burze). Najlepsze miesiące: maj, czerwiec, wrzesień. Unikaj końcówki listopada i lutego — szaro, mokro, śniegu jeszcze nie ma albo już go nie ma.",
    },
    {
      q: "Czy potrzebuję wizy?",
      a: "Obywatele UE: nie, wystarczy dowód osobisty. Brytyjczycy / Amerykanie / Kanadyjczycy / Australijczycy / Japończycy i większość innych: bez wizy do 90 dni w 180-dniowym okresie (zasady Schengen). Sprawdź kalkulator Schengen przed dłuższymi pobytami.",
    },
    {
      q: "Karta czy gotówka?",
      a: "Karta praktycznie wszędzie. Płatność zbliżeniowa działa w tramwajach, na parkomatach, w food truckach. Trzymaj 50-100 zł w gotówce na kilka barów mlecznych, stragany i wózki z obwarzankami, które wciąż wolą gotówkę.",
    },
    {
      q: "Czego unikać?",
      a: "Restauracji wprost na Rynku ze zdjęciami w menu. Kantorów na Floriańskiej z napisami '0% prowizji'. Bankomatów Euronet. Kiosków z 'tourist SIM'. Łapania taxi z postoju zamiast korzystania z Bolta.",
    },
    {
      q: "Kiedy muzea są zamknięte?",
      a: "Większość muzeów jest zamknięta w poniedziałki (w tym trasy Zamku Królewskiego na Wawelu, Muzeum Czartoryskich i większość oddziałów Muzeum Narodowego). Fabryka Schindlera jest zamknięta w pierwszy wtorek miesiąca. Kościoły są otwarte codziennie, ale krócej w niedziele.",
    },
    {
      q: "Czy mogę odwiedzić Auschwitz z Krakowa?",
      a: "Tak. Auschwitz-Birkenau jest 65 km na zachód od Krakowa. Autobus z dworca autobusowego (~1 h 45 min, 18-25 zł) lub wycieczka z transportem z hotelu. Bilet wstępu rezerwuj online z wyprzedzeniem — w dniu wizyty rzadko są wolne miejsca.",
    },
    {
      q: "A co z Wieliczką?",
      a: "Pół dnia. Pociąg z Krakowa Głównego do Wieliczki Rynek-Kopalnia (~30 min, 5 zł). Bilet do kopalni to ok. 119 zł i obejmuje 2-godzinną trasę z przewodnikiem pod ziemią. Wygodne buty obowiązkowe — na trasie ponad 800 schodów.",
    },
  ],
};

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = locale as Locale;
  const isPl = t === "pl";
  const items = QA[t];

  return (
    <ArticleShell
      locale={t}
      path="/faq"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/faq`, label: "FAQ" },
      ]}
      title={
        isPl
          ? "FAQ — pytania, które padają najczęściej"
          : "FAQ — the questions we get most"
      }
      lede={
        isPl
          ? "12 pytań, które padają najczęściej w wiadomościach od czytelników CityCompass. Jeśli czegoś tu nie ma, daj znać przez stronę 'O nas' — odpowiemy i dorzucimy do FAQ."
          : "12 questions we get most often in messages from CityCompass readers. If something is missing, drop us a note via the About page — we'll reply and add it to the FAQ."
      }
      updated="2026-04-14"
      faq={items}
    >
      <p>
        {isPl
          ? "Pytania niżej są ułożone od najogólniejszych do najbardziej specyficznych. Sekcja FAQ poniżej jest też dostępna jako uporządkowane dane (FAQPage schema), więc pojawia się bezpośrednio w wynikach Google."
          : "The questions below are ordered from the most general to the most specific. The FAQ section here is also exposed as structured data (FAQPage schema), so it shows up directly in Google search results."}
      </p>
    </ArticleShell>
  );
}
