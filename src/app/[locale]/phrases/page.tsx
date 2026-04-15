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
      ? "50 polskich zwrotów dla turystów w Krakowie"
      : "50 essential Polish phrases for travellers to Kraków",
    description: isPl
      ? "Praktyczna lista 50 zwrotów po polsku z wymową fonetyczną — pozdrowienia, restauracja, transport, sklep, pomoc."
      : "A practical list of 50 Polish phrases with phonetic pronunciation — greetings, restaurant, transport, shop, emergency.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/phrases`,
      languages: {
        en: `${SITE_URL}/en/phrases`,
        pl: `${SITE_URL}/pl/phrases`,
      },
    },
  };
}

interface PhraseGroup {
  heading: { en: string; pl: string };
  rows: { en: string; pl: string; phon: string }[];
}

const GROUPS: PhraseGroup[] = [
  {
    heading: { en: "Basics", pl: "Podstawowe" },
    rows: [
      { en: "Hello", pl: "Cześć", phon: "cheshch" },
      { en: "Good morning", pl: "Dzień dobry", phon: "dzhen DOH-bri" },
      { en: "Good evening", pl: "Dobry wieczór", phon: "DOH-bri VYEH-chor" },
      { en: "Goodbye", pl: "Do widzenia", phon: "doh vee-DZEH-nya" },
      { en: "Thank you", pl: "Dziękuję", phon: "jen-KOO-yeh" },
      { en: "Please / you're welcome", pl: "Proszę", phon: "PRO-sheh" },
      { en: "Sorry / excuse me", pl: "Przepraszam", phon: "psheh-PRAH-shahm" },
      { en: "Yes / no", pl: "Tak / nie", phon: "tahk / nyeh" },
      { en: "I don't understand", pl: "Nie rozumiem", phon: "nyeh ro-ZOO-myem" },
      { en: "Do you speak English?", pl: "Czy mówi pan/pani po angielsku?", phon: "chi MOO-vee pan/PAH-nee po an-GYEL-skoo" },
    ],
  },
  {
    heading: { en: "Restaurant", pl: "W restauracji" },
    rows: [
      { en: "A table for two, please", pl: "Stolik dla dwojga, proszę", phon: "STOH-leek dla DVOY-gah PRO-sheh" },
      { en: "The menu, please", pl: "Poproszę menu", phon: "po-PRO-sheh meh-NOO" },
      { en: "I'd like…", pl: "Poproszę…", phon: "po-PRO-sheh" },
      { en: "Water, please", pl: "Wodę proszę", phon: "VOH-deh PRO-sheh" },
      { en: "A beer, please", pl: "Piwo proszę", phon: "PEE-vo PRO-sheh" },
      { en: "Without meat", pl: "Bez mięsa", phon: "bez MYEN-sah" },
      { en: "Vegetarian", pl: "Wegetariański", phon: "veh-geh-tar-YAN-skee" },
      { en: "Delicious!", pl: "Pyszne!", phon: "PISH-neh" },
      { en: "The bill, please", pl: "Rachunek proszę", phon: "ra-HOO-nek PRO-sheh" },
      { en: "Keep the change", pl: "Reszty nie trzeba", phon: "RESH-ti nyeh TSHEH-bah" },
    ],
  },
  {
    heading: { en: "Getting around", pl: "Transport" },
    rows: [
      { en: "Where is…?", pl: "Gdzie jest…?", phon: "gjeh yest" },
      { en: "How much is it?", pl: "Ile to kosztuje?", phon: "EE-leh toh kosh-TOO-yeh" },
      { en: "One ticket, please", pl: "Jeden bilet, proszę", phon: "YEH-den BEE-let PRO-sheh" },
      { en: "Two tickets, please", pl: "Dwa bilety, proszę", phon: "dvah bee-LEH-ti PRO-sheh" },
      { en: "To the airport", pl: "Na lotnisko", phon: "nah lot-NEES-ko" },
      { en: "To the train station", pl: "Na dworzec", phon: "nah DVOR-zhets" },
      { en: "To Old Town", pl: "Na Stare Miasto", phon: "nah STAH-reh MYAS-to" },
      { en: "Stop here, please", pl: "Proszę się tu zatrzymać", phon: "PRO-sheh sheh too zaht-SHIH-mahch" },
      { en: "Right / left / straight", pl: "W prawo / w lewo / prosto", phon: "vprah-vo / vleh-vo / PRO-sto" },
      { en: "Far / close", pl: "Daleko / blisko", phon: "dah-LEH-ko / BLEES-ko" },
    ],
  },
  {
    heading: { en: "Shopping", pl: "Zakupy" },
    rows: [
      { en: "How much does it cost?", pl: "Ile to kosztuje?", phon: "EE-leh toh kosh-TOO-yeh" },
      { en: "Too expensive", pl: "Za drogo", phon: "zah DRO-goh" },
      { en: "I'll take it", pl: "Wezmę to", phon: "VEZ-meh toh" },
      { en: "Card or cash?", pl: "Kartą czy gotówką?", phon: "KAR-tom chi go-TOOV-kom" },
      { en: "By card", pl: "Kartą", phon: "KAR-tom" },
      { en: "Receipt", pl: "Paragon", phon: "pah-RAH-gon" },
      { en: "I'm just looking", pl: "Tylko oglądam", phon: "TIL-ko og-LAN-dam" },
      { en: "Smaller / bigger", pl: "Mniejszy / większy", phon: "MNYEY-shi / VYENK-shi" },
    ],
  },
  {
    heading: { en: "Help / emergency", pl: "Pomoc" },
    rows: [
      { en: "Help!", pl: "Pomocy!", phon: "po-MO-tsi" },
      { en: "Call the police", pl: "Proszę zadzwonić na policję", phon: "PRO-sheh zad-ZVO-neech nah po-LEET-syeh" },
      { en: "I need a doctor", pl: "Potrzebuję lekarza", phon: "po-tsheh-BOO-yeh leh-KAR-zha" },
      { en: "I'm lost", pl: "Zgubiłem się / Zgubiłam się", phon: "zgoo-BEE-wem sheh / zgoo-BEE-wam sheh" },
      { en: "I lost my passport", pl: "Zgubiłem paszport", phon: "zgoo-BEE-wem PASH-port" },
      { en: "I don't feel well", pl: "Źle się czuję", phon: "zhleh sheh CHOO-yeh" },
      { en: "Where is the pharmacy?", pl: "Gdzie jest apteka?", phon: "gjeh yest ap-TEH-kah" },
      { en: "Hospital", pl: "Szpital", phon: "SHPEE-tal" },
    ],
  },
];

export default async function PhrasesPage({
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
      path="/phrases"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/phrases`, label: isPl ? "Zwroty" : "Phrases" },
      ]}
      title={
        isPl
          ? "50 polskich zwrotów dla turystów"
          : "50 essential Polish phrases for travellers"
      }
      lede={
        isPl
          ? "Większość krakowian w branży turystycznej mówi po angielsku, ale powiedzenie 'dzień dobry' i 'dziękuję' po polsku otwiera drzwi szybciej niż cokolwiek innego. Tu jest 50 najprzydatniejszych zwrotów z fonetyką ułatwiającą wymowę. Zaznacz tę stronę i miej ją offline w hotelu."
          : "Most people in Kraków's hospitality scene speak English, but saying 'dzień dobry' and 'dziękuję' in Polish opens doors faster than anything else. Here are 50 essential phrases with simple phonetic pronunciation. Bookmark and keep handy."
      }
      updated="2026-04-14"
    >
      {GROUPS.map((g) => (
        <div key={g.heading.en}>
          <h2>{isPl ? g.heading.pl : g.heading.en}</h2>
          <table>
            <thead>
              <tr>
                <th>{isPl ? "Po angielsku" : "English"}</th>
                <th>{isPl ? "Po polsku" : "Polish"}</th>
                <th>{isPl ? "Wymowa" : "Pronunciation"}</th>
              </tr>
            </thead>
            <tbody>
              {g.rows.map((r) => (
                <tr key={r.pl}>
                  <td>{r.en}</td>
                  <td>
                    <strong>{r.pl}</strong>
                  </td>
                  <td>
                    <code>{r.phon}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <div className="callout callout--tip">
        <strong>{isPl ? "Wskazówka" : "Tip"}:</strong>{" "}
        {isPl
          ? "Polskie 'cz', 'sz', 'rz' wymawia się jak angielskie 'ch', 'sh', 'zh'. 'ł' to angielskie 'w'. 'ż' = 'zh'. Akcent prawie zawsze pada na przedostatnią sylabę."
          : "Polish 'cz', 'sz', 'rz' map to English 'ch', 'sh', 'zh'. 'ł' is the English 'w'. 'ż' = 'zh'. Stress almost always lands on the second-to-last syllable."}
      </div>
    </ArticleShell>
  );
}
