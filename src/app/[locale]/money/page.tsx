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
      ? "Pieniądze w Krakowie — złoty, kantory, karty i napiwki"
      : "Money in Kraków — złoty, exchange offices, cards and tipping",
    description: isPl
      ? "Praktyczny przewodnik po pieniądzach dla turystów: kurs euro/złoty, gdzie wymieniać bezpiecznie, gdzie nie, używanie kart płatniczych i napiwki."
      : "A practical money guide for visitors: euro/złoty rate, where to exchange safely, where not to, paying by card, and tipping etiquette.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/money`,
      languages: {
        en: `${SITE_URL}/en/money`,
        pl: `${SITE_URL}/pl/money`,
      },
    },
  };
}

export default async function MoneyPage({
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
      path="/money"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/money`, label: isPl ? "Pieniądze" : "Money" },
      ]}
      title={
        isPl
          ? "Pieniądze w Krakowie — złoty, kantory, karty i napiwki"
          : "Money in Kraków — złoty, exchange offices, cards and tipping"
      }
      lede={
        isPl
          ? "Polska używa polskiego złotego (PLN, ‏zł). To jeden z mniej znanych zachodniowi turyście aspektów Krakowa — i jeden z najczęstszych miejsc, gdzie można stracić niepotrzebnie 10-15% pieniędzy. Tu jest wszystko, co warto wiedzieć w pięciu minutach."
          : "Poland uses the Polish złoty (PLN, zł). It is one of the less obvious things for first-time western visitors to Kraków — and one of the easiest places to needlessly lose 10-15% of your money. Here is everything you should know in five minutes."
      }
      updated="2026-04-14"
      toc={[
        { id: "currency", label: isPl ? "Waluta i kurs" : "Currency and exchange rate" },
        { id: "kantor", label: isPl ? "Kantory" : "Exchange offices" },
        { id: "atm", label: "ATM" },
        { id: "card", label: isPl ? "Karta i Apple/Google Pay" : "Card and contactless" },
        { id: "tipping", label: isPl ? "Napiwki" : "Tipping" },
      ]}
      faq={
        isPl
          ? [
              {
                q: "Czy w Krakowie wszędzie zapłacę kartą?",
                a: "Praktycznie tak. Tramwaje, autobusy, kawiarnie, sklepy spożywcze, taxi, nawet większość ulicznych food trucków akceptują kartę zbliżeniową. Kilka tradycyjnych barów mlecznych i targowisk to jedyne miejsca gdzie potrzebujesz gotówki.",
              },
              {
                q: "Czy euro są akceptowane?",
                a: "W większości miejsc nie. Niektóre hotele i sklepy turystyczne przy Rynku przyjmują euro, ale po fatalnym kursie. Płać w złotych.",
              },
              {
                q: "Ile złotych za euro?",
                a: "Kurs NBP (oficjalny) to zwykle 4.20-4.40 PLN za 1 EUR. W kantorze poza Rynkiem dostaniesz mniej więcej tyle. W kantorze na Floriańskiej lub przy Sukiennicach możesz dostać 3.70-3.90 PLN — to jest 10-15% straty.",
              },
            ]
          : [
              {
                q: "Will I be able to pay by card everywhere in Kraków?",
                a: "Effectively yes. Trams, buses, cafés, supermarkets, taxis, even most street food trucks accept contactless cards. A handful of traditional milk bars and farmers' markets are the only places where you need cash.",
              },
              {
                q: "Are euros accepted?",
                a: "In most places, no. Some hotels and tourist shops near Rynek accept euros, but at a terrible rate. Pay in złoty.",
              },
              {
                q: "How many złoty per euro?",
                a: "The NBP (official) rate is usually 4.20-4.40 PLN per 1 EUR. At a kantor outside Rynek you'll get something close to that. At a kantor on Floriańska or next to the Cloth Hall you may get 3.70-3.90 PLN — that's a 10-15% loss.",
              },
            ]
      }
      related={[
        {
          href: `/${t}/money/atm`,
          title: "ATM · DCC",
          description: isPl
            ? "Jak ustawić bankomat, żeby nie wcisnął Ci 8% prowizji za 'wygodę'."
            : "How to use an ATM so it doesn't sneak in an 8% 'convenience' fee.",
        },
        {
          href: `/${t}/scams`,
          title: isPl ? "Oszustwa na turystach" : "Tourist scams",
          description: isPl
            ? "Pełna lista, w tym 'kantor 0% prowizji' i menu po angielsku."
            : "Full list, including '0% commission' kantors and the English-menu trick.",
        },
        {
          href: `/${t}/transport/taxi`,
          title: "Taxi · Bolt",
          description: isPl
            ? "Kierowca z 'zepsutym terminalem' to klasyczna sztuczka."
            : "The 'broken card terminal' driver is a classic.",
        },
      ]}
    >
      <h2 id="currency">{isPl ? "Polski złoty — podstawy" : "The Polish złoty — basics"}</h2>
      <p>
        {isPl
          ? "Polski złoty (kod ISO PLN, symbol zł) to oficjalna waluta Polski. 1 złoty dzieli się na 100 groszy. W obiegu są banknoty 10, 20, 50, 100, 200 i 500 zł oraz monety 1 gr, 2 gr, 5 gr, 10 gr, 20 gr, 50 gr, 1 zł, 2 zł i 5 zł. Polska jest w Unii Europejskiej, ale nie w strefie euro — i nie ma ustalonej daty wejścia."
          : "The Polish złoty (ISO code PLN, symbol zł) is Poland's official currency. 1 złoty splits into 100 groszy. Banknotes in circulation: 10, 20, 50, 100, 200 and 500 zł. Coins: 1, 2, 5, 10, 20 and 50 groszy plus 1, 2 and 5 zł. Poland is in the EU but not in the eurozone, with no fixed date for joining."}
      </p>
      <p>
        {isPl
          ? "Kurs Narodowego Banku Polskiego (NBP) jest oficjalny i jest publikowany każdego dnia roboczego. Możesz go sprawdzić na nbp.pl. To jest twój punkt odniesienia — wszystko, co odbiega od tego kursu o więcej niż 1-2%, jest 'wymianą turystyczną'."
          : "The National Bank of Poland (NBP) rate is official and published every business day. You can check it at nbp.pl. This is your reference point — anything more than 1-2% off this rate is a 'tourist rate'."}
      </p>

      <h2 id="kantor">{isPl ? "Kantory — gdzie tak, gdzie nie" : "Kantors — yes and no"}</h2>
      <p>
        {isPl
          ? "Kantor to po polsku biuro wymiany walut. Niektóre są uczciwe (kurs ~1% od NBP), inne są pułapką (kurs ~12% od NBP). Reguła: kantor blisko Sukiennic, na ulicy Floriańskiej, na Grodzkiej i przy dworcu jest prawie zawsze pułapką."
          : "A kantor is a currency exchange office. Some are honest (rate within ~1% of NBP), others are tourist traps (rate up to ~12% off NBP). Rule of thumb: any kantor right next to the Cloth Hall, on Floriańska, on Grodzka, or at the train station is almost always a trap."}
      </p>
      <p>
        {isPl
          ? "Zaufane miejsca: kantor InterChange w Galerii Krakowskiej (poziom 0) i kantor 'Kantor Euro' przy ul. Pawiej 5 (oba 1-2% od NBP). Wpisz 'kantor' w Mapy Google i sprawdź recenzje — dobre kantory mają oceny 4.6+, pułapki 3.8 i poniżej."
          : "Trusted places: the InterChange kantor in Galeria Krakowska mall (level 0) and 'Kantor Euro' at Pawia 5 (both within 1-2% of NBP). Type 'kantor' into Google Maps and check the reviews — honest kantors have ratings of 4.6+, tourist traps have 3.8 and below."}
      </p>
      <div className="callout callout--warn">
        <strong>{isPl ? "Pułapka" : "Trap"}:</strong>{" "}
        {isPl
          ? "'0% commission' nie znaczy 'dobry kurs'. Brak prowizji jest neutralny — patrzy się na kurs kupna i sprzedaży. Jeśli różnica między 'buy' a 'sell' jest większa niż 2%, kantor zarabia na spreadzie i tracisz."
          : "'0% commission' does not mean 'good rate'. Zero commission is neutral — what matters is the buy and sell rate. If the spread between 'buy' and 'sell' is more than 2%, the kantor makes money on the spread and you lose."}
      </div>

      <h2 id="atm">ATM</h2>
      <p>
        {isPl ? (
          <>
            Wybranie pieniędzy z bankomatu to często najprostsza i najbardziej
            uczciwa metoda. ALE bankomaty Euronet, które są wszędzie w centrum,
            zaproponują Ci 'dynamic currency conversion' (DCC) — z fatalnym
            kursem. <Link href={`/${t}/money/atm`} className="text-primary underline">
            Pełen poradnik ATM</Link> tłumaczy jak go odmówić.
          </>
        ) : (
          <>
            Withdrawing from an ATM is often the simplest and most honest
            method. BUT Euronet ATMs, which are everywhere in the centre, will
            offer you 'dynamic currency conversion' (DCC) at a terrible rate.{" "}
            <Link href={`/${t}/money/atm`} className="text-primary underline">
              Full ATM guide
            </Link>{" "}
            explains how to refuse it.
          </>
        )}
      </p>
      <p>
        {isPl
          ? "Bezpieczne bankomaty: PKO BP, Pekao, Santander, mBank, ING. Unikaj Euronet (żółto-niebieskie) i bankomatów stojących na ulicy w centrum bez logo banku."
          : "Safe ATMs: PKO BP, Pekao, Santander, mBank, ING. Avoid Euronet (yellow-blue) and any standalone ATM in the centre without a real bank logo."}
      </p>

      <h2 id="card">{isPl ? "Karta i płatności zbliżeniowe" : "Card and contactless"}</h2>
      <p>
        {isPl
          ? "Polska jest jednym z najbardziej cashless krajów w Europie. Visa, Mastercard, Apple Pay i Google Pay są wszędzie. Kartą zapłacisz za bilet w tramwaju, za 5 zł kawę, za parkomat. W praktyce: jeśli masz kartę i telefon z NFC, możesz tygodniami nie używać gotówki."
          : "Poland is one of the most cashless countries in Europe. Visa, Mastercard, Apple Pay and Google Pay are everywhere. You can use a card for a tram ticket, a 5 zł coffee, a parking meter. In practice: if you have a card and an NFC phone, you can go weeks without touching cash."}
      </p>
      <p>
        {isPl
          ? "Wyjątki: niektóre stare bary mleczne, część budek z obwarzankami, ślepe ulice na Stary Kleparzu — gotówka. Trzymaj 50-100 zł na takie sytuacje."
          : "Exceptions: some old milk bars, some obwarzanek stalls, the back rows at Stary Kleparz market — cash only. Keep 50-100 zł on you for these."}
      </p>

      <h2 id="tipping">{isPl ? "Napiwki" : "Tipping"}</h2>
      <p>
        {isPl
          ? "Standard w restauracji to 10%. W barach nie napiwkujesz (ewentualnie zaokrąglasz). W taksówce — zaokrąglasz w górę. U fryzjera 5-10 zł. W hotelu portierowi 5 zł, sprzątaczce 10-20 zł na koniec pobytu jeśli zostawiasz obsługę. Napiwek wręczasz gotówką lub mówisz 'dziękuję' przy płatności kartą — kelner wie, że to znaczy 'reszta dla pana'. Jeśli mówisz 'dziękuję' przy płatności, a chciałeś resztę — szybko dodaj 'reszta dla mnie'."
          : "10% in a restaurant is standard. No tipping at a bar (you may round up). In a taxi, round up. At a hairdresser, 5-10 zł. In a hotel, 5 zł for a doorman, 10-20 zł for housekeeping at the end of your stay if they cleaned daily. Tip in cash, or say 'dziękuję' (thank you) when paying by card — the waiter understands that as 'keep the change'. If you say 'dziękuję' but wanted change, quickly add 'reszta dla mnie' (change for me)."}
      </p>
    </ArticleShell>
  );
}
