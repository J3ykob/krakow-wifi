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
      ? "eSIM, SIM i roaming w Polsce — jak być online w Krakowie"
      : "eSIM, SIM and roaming in Poland — how to stay online in Kraków",
    description: isPl
      ? "Porównanie najtańszych sposobów na mobilny internet w Polsce dla osób odwiedzających Kraków: eSIM (Airalo, Holafly, Saily), karty lokalne i unijny roaming."
      : "A comparison of the cheapest ways to get mobile data in Poland for visitors to Kraków: eSIMs (Airalo, Holafly, Saily), local SIM cards, and EU roaming.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/connect`,
      languages: {
        en: `${SITE_URL}/en/connect`,
        pl: `${SITE_URL}/pl/connect`,
      },
    },
  };
}

export default async function ConnectPage({
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
      path="/connect"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/connect`, label: isPl ? "Internet" : "Stay online" },
      ]}
      title={
        isPl
          ? "Internet w Polsce: eSIM, SIM i roaming"
          : "Mobile data in Poland: eSIM, SIM, and roaming"
      }
      lede={
        isPl
          ? "Miejskie hotspoty WiFi są darmowe i pokrywają większość centrum, ale nie wszędzie. Jeśli chcesz pełnej swobody (Mapy w czasie rzeczywistym, Bolt, połączenia, streaming) potrzebujesz mobilnej transmisji danych. Tu jest pełne porównanie wszystkich opcji ze stanu na 2026 rok."
          : "City WiFi hotspots are free and cover most of the centre, but not everywhere. If you want full freedom (live Maps, Bolt, calls, streaming) you need mobile data. Here is a complete comparison of every option as of 2026."
      }
      updated="2026-04-14"
      affiliate
      toc={[
        { id: "tldr", label: "TL;DR" },
        { id: "esim", label: "eSIM" },
        { id: "sim", label: isPl ? "Karta lokalna" : "Local SIM" },
        { id: "roaming", label: "EU roaming" },
        { id: "non-eu", label: isPl ? "Spoza UE" : "Non-EU visitors" },
      ]}
      faq={
        isPl
          ? [
              {
                q: "Czy mój telefon obsługuje eSIM?",
                a: "Wszystkie iPhone'y od XS (2018) wzwyż, Pixele od 3 wzwyż, Samsungi serii S20 i nowsze, Huawei P40 i nowsze. W ustawieniach poszukaj 'Dodaj plan komórkowy' lub 'eSIM'.",
              },
              {
                q: "Czy zadziała w innych krajach UE?",
                a: "Większość eSIM-ów regionalnych Airalo / Holafly obejmuje całą UE. Wybierz pakiet 'Eurolink' lub 'Europe', a nie tylko 'Poland', jeśli planujesz odwiedzić więcej krajów.",
              },
              {
                q: "Najlepsza polska sieć?",
                a: "Play, T-Mobile (zwane też Heyah), Orange i Plus mają porównywalne pokrycie w Krakowie i prędkości 4G+ w centrum. Różnice są w cenie pakietów prepaid.",
              },
              {
                q: "Czy potrzebuję dowodu osobistego do zakupu polskiego SIM?",
                a: "Tak. Od 2017 prawo polskie wymaga rejestracji każdej karty SIM na dokument tożsamości (paszport wystarczy). Sprzedawca w salonie zrobi to za Ciebie.",
              },
            ]
          : [
              {
                q: "Does my phone support eSIM?",
                a: "All iPhones from XS (2018) onwards, Pixels from 3 onwards, Samsung S20 series and later, Huawei P40 and later. In Settings look for 'Add cellular plan' or 'eSIM'.",
              },
              {
                q: "Will it work in other EU countries?",
                a: "Most regional Airalo / Holafly eSIMs cover the entire EU. Pick a 'Eurolink' or 'Europe' plan rather than only 'Poland' if you plan to visit more countries.",
              },
              {
                q: "Best Polish network?",
                a: "Play, T-Mobile (also branded Heyah), Orange and Plus have comparable coverage in Kraków and 4G+ speeds in the centre. The difference is in prepaid bundle pricing.",
              },
              {
                q: "Do I need an ID to buy a local Polish SIM?",
                a: "Yes. Since 2017 Polish law requires every SIM card to be registered to an ID (a passport is enough). The shop assistant will do it for you.",
              },
            ]
      }
      related={[
        {
          href: `/${t}/wifi`,
          title: isPl ? "Darmowe miejskie WiFi" : "Free city WiFi",
          description: isPl
            ? "Mapa hotspotów Kraków — kiedy darmowe WiFi wystarczy."
            : "Hotspot map for Kraków — when free WiFi is enough.",
        },
        {
          href: `/${t}/transport/airport`,
          title: isPl ? "Z lotniska do miasta" : "Airport → city",
          description: isPl
            ? "Możesz kupić eSIM przed wylądowaniem i mieć internet od razu po wyjściu z samolotu."
            : "Buy an eSIM before landing and have data the second you step off the plane.",
        },
        {
          href: `/${t}/scams`,
          title: isPl ? "Oszustwa na turystach" : "Tourist scams",
          description: isPl
            ? "W tym sklepy z 'turystycznym' SIM-em za 80 zł, który normalnie kosztuje 25 zł."
            : "Including 'tourist' SIM card kiosks selling 25 zł cards for 80 zł.",
        },
      ]}
    >
      <h2 id="tldr">TL;DR</h2>
      <ul>
        <li>
          {isPl ? (
            <>
              <strong>Krótki pobyt (1-7 dni), z UE:</strong> twój pakiet
              roamingowy działa za darmo. Nic nie kupuj.
            </>
          ) : (
            <>
              <strong>Short trip (1-7 days), EU citizen:</strong> your home
              roaming plan works for free. Don't buy anything.
            </>
          )}
        </li>
        <li>
          {isPl ? (
            <>
              <strong>Krótki pobyt, spoza UE:</strong> kup{" "}
              <AffLink partner="airalo">Airalo eSIM</AffLink> przed
              wylądowaniem. ~$5 za 1 GB / 7 dni.
            </>
          ) : (
            <>
              <strong>Short trip, non-EU:</strong> buy an{" "}
              <AffLink partner="airalo">Airalo eSIM</AffLink> before you land.
              ~$5 for 1 GB / 7 days.
            </>
          )}
        </li>
        <li>
          {isPl ? (
            <>
              <strong>Tydzień+ z dużym użyciem:</strong>{" "}
              <AffLink partner="holafly">Holafly</AffLink> ma plany unlimited od
              ok. $27 za 7 dni.
            </>
          ) : (
            <>
              <strong>Week+, heavy data user:</strong>{" "}
              <AffLink partner="holafly">Holafly</AffLink> sells unlimited plans
              from around $27 for 7 days.
            </>
          )}
        </li>
        <li>
          {isPl ? (
            <>
              <strong>Miesiąc lub więcej:</strong> idź do salonu Play / Orange w
              centrum handlowym i kup polski prepaid (~25 zł za 30 GB / 30 dni).
            </>
          ) : (
            <>
              <strong>One month or more:</strong> walk into a Play / Orange shop
              in any mall and buy a Polish prepaid (~25 zł for 30 GB / 30 days).
            </>
          )}
        </li>
      </ul>

      <h2 id="esim">eSIM — {isPl ? "najprostsza opcja" : "the simplest option"}</h2>
      <p>
        {isPl
          ? "eSIM to wirtualna karta SIM, którą instalujesz przez zeskanowanie kodu QR. Nic do wkładania, nic do gubienia. W Krakowie działa na każdej polskiej sieci, a ceny zwykle są niższe niż roaming poza UE i wyższe niż polski prepaid kupiony w salonie."
          : "An eSIM is a virtual SIM that you install by scanning a QR code. Nothing to insert, nothing to lose. In Kraków it works on every Polish network. Prices are usually lower than non-EU roaming and higher than a local Polish prepaid bought in a shop."}
      </p>

      <h3>{isPl ? "Polecane usługi (linki afiliacyjne)" : "Recommended providers (affiliate links)"}</h3>
      <table>
        <thead>
          <tr>
            <th>{isPl ? "Dostawca" : "Provider"}</th>
            <th>{isPl ? "Najlepszy do" : "Best for"}</th>
            <th>{isPl ? "Cena startowa" : "Starts from"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <AffLink partner="airalo" />
            </td>
            <td>
              {isPl
                ? "Krótkie wyjazdy, najtaniej za GB"
                : "Short trips, cheapest per-GB"}
            </td>
            <td>~$4.50 / 1 GB / 7 dni</td>
          </tr>
          <tr>
            <td>
              <AffLink partner="holafly" />
            </td>
            <td>
              {isPl
                ? "Plany unlimited, intensywne korzystanie"
                : "Unlimited plans, heavy use"}
            </td>
            <td>~$19 / 5 dni unlimited</td>
          </tr>
          <tr>
            <td>
              <AffLink partner="saily" />
            </td>
            <td>
              {isPl ? "Przejrzyste pakiety, dobry support" : "Clean bundles, good support"}
            </td>
            <td>~$3.99 / 1 GB / 7 dni</td>
          </tr>
        </tbody>
      </table>

      <div className="callout callout--tip">
        <strong>Tip:</strong>{" "}
        {isPl
          ? "Kup i zainstaluj eSIM zanim wsiądziesz do samolotu. Pakiet aktywuje się dopiero po pierwszym połączeniu z polską siecią — więc nic Ci nie ucieka. W praktyce: lądujesz, przełączasz tryb samolotowy, i już masz internet bez szukania WiFi w terminalu."
          : "Buy and install your eSIM before boarding. The plan only activates the first time it connects to a Polish network — so nothing is wasted. In practice: you land, toggle airplane mode, and you're online before leaving the gate."}
      </div>

      <h2 id="sim">{isPl ? "Karta SIM lokalnie" : "Buying a local SIM card"}</h2>
      <p>
        {isPl
          ? "Jeśli zostajesz dłużej niż dwa tygodnie, polski prepaid od Play, T-Mobile, Orange lub Plus jest bezkonkurencyjnie najtańszy. Pakiety startowe kosztują 5-10 zł, doładowania z pakietem 30 GB / 30 dni — około 25-30 zł. Salony są w każdym dużym centrum handlowym (Galeria Krakowska przy dworcu, Bonarka, Galeria Kazimierz)."
          : "If you are staying longer than two weeks, a Polish prepaid card from Play, T-Mobile, Orange or Plus is by far the cheapest option. Starter packs cost 5-10 zł, top-ups with 30 GB / 30 days bundles run around 25-30 zł. Shops are in every large mall (Galeria Krakowska next to the train station, Bonarka, Galeria Kazimierz)."}
      </p>
      <p>
        {isPl
          ? "Pamiętaj o paszporcie — od 2017 roku każda karta musi być zarejestrowana na dokument. Salonowy pracownik zrobi to przy zakupie. To zajmuje 5-10 minut."
          : "Bring your passport — since 2017 every Polish SIM must be registered to an ID document. The shop assistant will do this at the counter. It takes 5-10 minutes."}
      </p>
      <div className="callout callout--warn">
        <strong>{isPl ? "Uwaga" : "Warning"}:</strong>{" "}
        {isPl
          ? "Unikaj 'turystycznych' kiosków przy Rynku oferujących 'specjalne' SIM-y dla obcokrajowców za 60-80 zł. To zwykłe karty Orange / Play z marżą 200%."
          : "Avoid 'tourist' kiosks near the main square selling 'special' SIMs for foreigners at 60-80 zł. They are regular Orange / Play cards with a 200% markup."}
      </div>

      <h2 id="roaming">{isPl ? "Roaming UE — dla obywateli UE" : "EU roaming — for EU citizens"}</h2>
      <p>
        {isPl
          ? "Jeśli masz aktywny abonament w którymkolwiek kraju UE, działa on w Polsce bez dodatkowych opłat zgodnie z zasadą 'roam like at home'. Twój pakiet danych, minut i SMS-ów obowiązuje 1:1 — przy dwóch zastrzeżeniach: limit fair use (zwykle kilkanaście GB) i ograniczenie czasu (maks. 4 miesiące w roku poza krajem rejestracji). Dla większości turystów to oznacza zerowe dodatkowe opłaty."
          : "If you have an active contract with any EU operator, it works in Poland with no surcharge under the 'roam like at home' rule. Your data, minutes and SMS allowances apply 1:1 — with two caveats: a fair-use cap (usually a few GB) and a time limit (max four months per year outside your home country). For most tourists this means zero extra cost."}
      </p>

      <h2 id="non-eu">{isPl ? "Goście spoza UE" : "Non-EU visitors"}</h2>
      <p>
        {isPl ? (
          <>
            Roaming z USA, Kanady, Australii, UK po brexicie i większości innych
            krajów jest drogi (zwykle $10-15/dzień). Dla wszystkich oprócz
            najkrótszego pobytu eSIM się zwraca już pierwszego dnia. Jeśli
            jeszcze nie wybrałeś, zacznij od{" "}
            <AffLink partner="airalo">Airalo</AffLink> — najtańsze i najprostsze
            w obsłudze.
          </>
        ) : (
          <>
            Roaming from the US, Canada, Australia, post-Brexit UK and most
            non-EU countries is expensive (usually $10-15 per day). For anything
            longer than the shortest trip, an eSIM pays for itself on day one.
            If you haven't picked one yet, start with{" "}
            <AffLink partner="airalo">Airalo</AffLink> — cheapest and easiest to
            set up.
          </>
        )}
      </p>
    </ArticleShell>
  );
}
