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
      ? "Obwarzanek krakowski — historia, gdzie kupić, ile kosztuje"
      : "Obwarzanek krakowski — history, where to buy, what it costs",
    description: isPl
      ? "Krakowski obwarzanek to chronione oznaczenie geograficzne UE. Historia, jak wygląda prawdziwy, gdzie kupić i ile zapłacisz."
      : "The obwarzanek krakowski has EU protected geographical status. History, what the real one looks like, where to buy it, and what to pay.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/food/obwarzanek`,
      languages: {
        en: `${SITE_URL}/en/food/obwarzanek`,
        pl: `${SITE_URL}/pl/food/obwarzanek`,
      },
    },
  };
}

export default async function ObwarzanekPage({
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
      path="/food/obwarzanek"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/food`, label: isPl ? "Jedzenie" : "Food" },
        { href: `/${t}/food/obwarzanek`, label: "Obwarzanek" },
      ]}
      title={
        isPl
          ? "Obwarzanek krakowski — krakowski symbol kulinarny"
          : "Obwarzanek krakowski — Kraków's edible symbol"
      }
      lede={
        isPl
          ? "Plecione koło z ciasta, posypane sezamem, makiem, solą lub serem, sprzedawane z błękitnych wózków na każdym rogu w centrum Krakowa. Obwarzanek to nie 'polski preclel' — to osobne ciasto z udokumentowaną pisemnie tradycją z 1394 roku i unijnym znakiem ochrony pochodzenia."
          : "A braided ring of dough sprinkled with sesame, poppy seed, salt or cheese, sold from blue carts on every corner in central Kraków. Not a 'Polish pretzel' — it's a separate baked good with a written tradition going back to 1394 and an EU protected designation of origin."
      }
      updated="2026-04-14"
      toc={[
        { id: "what", label: isPl ? "Co to jest" : "What it is" },
        { id: "history", label: isPl ? "Krótka historia" : "A short history" },
        { id: "buy", label: isPl ? "Gdzie kupić i za ile" : "Where to buy and what it costs" },
        { id: "fakes", label: isPl ? "Jak rozpoznać podróbkę" : "How to spot a fake" },
      ]}
      related={[
        {
          href: `/${t}/food`,
          title: isPl ? "Co zjeść w Krakowie" : "What to eat in Kraków",
          description: isPl
            ? "Pełen przegląd lokalnej kuchni."
            : "Full overview of local cuisine.",
        },
        {
          href: `/${t}/areas/old-town`,
          title: isPl ? "Stare Miasto" : "Old Town",
          description: isPl
            ? "Najwięcej wózków z obwarzankami jest tu."
            : "Most obwarzanek carts are here.",
        },
      ]}
    >
      <h2 id="what">{isPl ? "Co to dokładnie jest" : "What it is, precisely"}</h2>
      <p>
        {isPl
          ? "Obwarzanek to ciasto pszenne, plecione w pierścień, sparzone (obwarzane) we wrzątku przed pieczeniem — stąd nazwa. Po sparzeniu pieczone w piekarniku do chrupkości. Wierzch posypany sezamem, makiem, solą gruboziarnistą lub tartym serem. Średnica około 12-17 cm, waga ok. 80-100 g. Spożywany na świeżo — po kilku godzinach robi się twardy."
          : "Obwarzanek is wheat dough braided into a ring, parboiled in water (the verb obwarzać = to parboil) before baking — hence the name. After parboiling it's baked until crispy. Topped with sesame, poppy seed, coarse salt or grated cheese. Diameter 12-17 cm, weight around 80-100 g. Eaten fresh — after a few hours it goes hard."}
      </p>

      <h2 id="history">{isPl ? "Krótka historia" : "A short history"}</h2>
      <p>
        {isPl
          ? "Pierwsza wzmianka o obwarzanku w księgach rachunkowych dworu Władysława Jagiełły pochodzi z 1394 roku. Przez wieki obwarzanek był wypiekany przez krakowskich piekarzy, którzy mieli wyłączność na jego produkcję — przywilej nadany przez króla Jana Olbrachta w 1496 roku. W 2010 roku obwarzanek krakowski został wpisany do unijnego rejestru chronionych oznaczeń geograficznych (PGI), co znaczy że tylko obwarzanki wypieczone w Krakowie i okolicach mogą używać tej nazwy."
          : "The first mention of obwarzanek appears in the household accounts of King Władysław Jagiełło in 1394. For centuries Kraków's bakers held the exclusive right to bake it — a privilege granted by King John I Albert in 1496. In 2010 obwarzanek krakowski was registered in the EU Protected Geographical Indication scheme, which means only obwarzanki baked in Kraków and the surrounding region may use the name."}
      </p>

      <h2 id="buy">{isPl ? "Gdzie kupić i za ile" : "Where to buy and what it costs"}</h2>
      <p>
        {isPl
          ? "Wózki sprzedażowe są ustawione w stałych miejscach w całym centrum: na Rynku Głównym (przy pomniku Mickiewicza), przy Bramie Floriańskiej, na Plantach przy Sukiennicach, przy ul. Franciszkańskiej, przy Wawelu, na ul. Karmelickiej, przy Dworcu Głównym i na Placu Matejki. Każdy wózek jest niebieski i ma napis 'OBWARZANEK KRAKOWSKI'. Cena: 3-4 zł za sztukę, niezależnie od posypki."
          : "Carts stand in fixed spots across the centre: Rynek Główny (next to the Mickiewicz statue), at the Floriańska Gate, on Planty by the Cloth Hall, on Franciszkańska Street, near Wawel, on Karmelicka, by Kraków Główny station and on Plac Matejki. Every cart is blue and reads 'OBWARZANEK KRAKOWSKI'. Price: 3-4 zł each, regardless of topping."}
      </p>
      <p>
        {isPl
          ? "Najlepiej smakują rano, świeżo z piekarni. Po południu są mniej chrupkie. Wieczorem — często już twarde. Jeśli masz wybór, kup około 10:00."
          : "They taste best in the morning, straight from the bakery. By afternoon they're less crispy. By evening, often hard. If you can pick the time, buy around 10 AM."}
      </p>

      <h2 id="fakes">{isPl ? "Jak rozpoznać podróbkę" : "How to spot a fake"}</h2>
      <ul>
        <li>
          {isPl
            ? "Obwarzanek jest plecioniony, z wyraźnymi 'splotami' ciasta. Jeśli pierścień jest gładki (jak donut bez dziurki), to jest prosty preclelek lub bagel — nie obwarzanek."
            : "Obwarzanek is braided, with visible dough strands. If the ring is smooth (like a donut without the hole), it's a simple pretzel or bagel — not an obwarzanek."}
        </li>
        <li>
          {isPl
            ? "Powinien być chrupki na zewnątrz i miękki w środku. Gumowy = stary."
            : "Should be crisp outside and soft inside. Chewy = old."}
        </li>
        <li>
          {isPl
            ? "Kupuj tylko z błękitnych miejskich wózków — to oficjalne punkty sprzedaży krakowskich piekarni. Sprzedawcy uliczni z plastikowych toreb to najczęściej przepakowane bagle z hurtowni."
            : "Buy only from the blue municipal carts — these are official outlets of Kraków bakeries. Street vendors with plastic bags are usually wholesale bagels rebranded."}
        </li>
      </ul>
    </ArticleShell>
  );
}
