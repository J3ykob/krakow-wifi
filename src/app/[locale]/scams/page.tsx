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
      ? "Najczęstsze oszustwa na turystach w Krakowie"
      : "The most common tourist scams in Kraków",
    description: isPl
      ? "Pełna lista przekrętów, na które można się natknąć w Krakowie: kantory, taksometry, podmiana menu, dynamic currency conversion."
      : "Complete list of scams to watch for in Kraków: kantors, taxi meters, menu swaps, dynamic currency conversion.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/scams`,
      languages: {
        en: `${SITE_URL}/en/scams`,
        pl: `${SITE_URL}/pl/scams`,
      },
    },
  };
}

export default async function ScamsPage({
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
      path="/scams"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/scams`, label: isPl ? "Oszustwa" : "Scams" },
      ]}
      title={
        isPl
          ? "Najczęstsze oszustwa na turystach w Krakowie"
          : "The most common tourist scams in Kraków"
      }
      lede={
        isPl
          ? "Kraków jest bardzo bezpiecznym miastem — przemoc uliczna jest rzadka, kradzieży kieszonkowych jest mniej niż w Barcelonie czy Paryżu. Ale jest kilka klasycznych przekrętów na turystach, które wciąż działają, bo polegają na nieznajomości lokalnych cen i procedur. Tu są wszystkie, na które warto uważać."
          : "Kraków is a very safe city — street violence is rare and pickpocketing is less common than in Barcelona or Paris. But there are classic tourist scams that still work because they rely on unfamiliarity with local prices and procedures. Here are all the ones worth knowing about."
      }
      updated="2026-04-14"
      toc={[
        { id: "kantor", label: isPl ? "Kantor turystyczny" : "Tourist kantors" },
        { id: "dcc", label: "DCC" },
        { id: "menu", label: isPl ? "Podmiana menu" : "Menu swap" },
        { id: "weight", label: isPl ? "Cena za 100 g" : "Price per 100g" },
        { id: "taxi", label: isPl ? "Taksometr 'tariff 4'" : "Taxi 'tariff 4'" },
        { id: "sim", label: isPl ? "Turystyczny SIM" : "Tourist SIM" },
        { id: "guides", label: isPl ? "Bezpłatne 'wycieczki'" : "Free 'tours'" },
      ]}
      related={[
        {
          href: `/${t}/money`,
          title: isPl ? "Pieniądze" : "Money",
          description: isPl
            ? "Pełen przewodnik po kursach i kantorach."
            : "Full guide to exchange rates and kantors.",
        },
        {
          href: `/${t}/transport/taxi`,
          title: "Taxi · Bolt",
          description: isPl
            ? "Bezpieczny transport zamiast łapania z postoju."
            : "Safe transport instead of hailing from a rank.",
        },
        {
          href: `/${t}/connect`,
          title: isPl ? "eSIM, SIM i roaming" : "eSIM, SIM and roaming",
          description: isPl
            ? "Jak nie kupić 80 zł SIM-a, który normalnie kosztuje 25 zł."
            : "How not to buy an 80 zł SIM that normally costs 25 zł.",
        },
      ]}
    >
      <h2 id="kantor">{isPl ? "1. 'Kantor 0% prowizji' przy Sukiennicach" : "1. The '0% commission' kantor near the Cloth Hall"}</h2>
      <p>
        {isPl
          ? "Mechanika: kantor pokazuje na tablicy świetlnej dwa kursy 'BUY' i 'SELL'. Wpisując 100 EUR widzisz ofertę 380 zł zamiast 430 zł. Brak prowizji jest prawdą — zarabiają na ogromnym spreadzie. Strata 12-15% na transakcji. Działa w kilku miejscach na Floriańskiej, Grodzkiej i wokół Sukiennic."
          : "Mechanics: the kantor displays a 'BUY' and 'SELL' rate on its electronic board. For €100 you see an offer of 380 zł instead of 430 zł. The 0% commission claim is true — they make money on a huge spread instead. You lose 12-15% on the transaction. Several locations on Floriańska, Grodzka and around the Cloth Hall."}
        <br />
        <strong>{isPl ? "Obrona" : "Defence"}:</strong>{" "}
        {isPl
          ? "wymieniaj w Galerii Krakowskiej lub w 'Kantor Euro' (Pawia 5). Sprawdzaj recenzje w Mapach Google przed wymianą."
          : "exchange in Galeria Krakowska mall or at 'Kantor Euro' (Pawia 5). Check Google Maps reviews before exchanging."}
      </p>

      <h2 id="dcc">{isPl ? "2. Dynamic Currency Conversion (DCC) w bankomatach i terminalach" : "2. Dynamic Currency Conversion (DCC) at ATMs and card terminals"}</h2>
      <p>
        {isPl
          ? "Bankomat (zwykle Euronet) lub terminal w restauracji pyta: 'Pay in EUR or PLN?'. Wybór EUR oznacza, że to bank lokalny (a nie twój własny) ustala kurs — i robi to z marżą 5-12%. Zawsze wybieraj PLN."
          : "An ATM (usually Euronet) or a restaurant card terminal asks: 'Pay in EUR or PLN?'. Choosing EUR means the local bank (not yours) sets the rate — with a 5-12% markup. Always choose PLN."}
      </p>

      <h2 id="menu">{isPl ? "3. Podmiana menu" : "3. The menu swap"}</h2>
      <p>
        {isPl
          ? "Restauracja przy Rynku ma dwa menu: jedno tańsze, jedno droższe (różnica 30-50%). Klientom z Polski podają tańsze, klientom z zagranicy droższe. Czasem różnica polega na tym, że na droższym menu nie ma 'porcji', tylko 'cena za 100 g'."
          : "A restaurant on Rynek has two menus: one cheaper, one more expensive (30-50% difference). Polish customers get the cheap one, foreign customers get the expensive one. Sometimes the trick is that the foreign menu has no portion sizes, only 'price per 100g'."}
        <br />
        <strong>{isPl ? "Obrona" : "Defence"}:</strong>{" "}
        {isPl
          ? "sprawdź ceny w Google Reviews przed zamówieniem. Jeśli widać dwa różne menu — wyjdź."
          : "check Google Reviews for the actual prices before ordering. If you see two different menus — leave."}
      </p>

      <h2 id="weight">{isPl ? "4. Cena 'za 100 g'" : "4. The 'per 100g' price"}</h2>
      <p>
        {isPl
          ? "Klasyk dla ryb, pierogów, golonki i większych dań mięsnych w restauracjach turystycznych. 'Pierogi: 18 zł' wygląda rozsądnie, dopóki nie zauważysz, że to '18 zł / 100 g', a porcja waży 280 g. Na rachunku: 50 zł zamiast 18."
          : "Classic for fish, pierogi, pork knuckle and larger meat dishes in tourist restaurants. 'Pierogi: 18 zł' looks reasonable until you notice it's '18 zł / 100 g' and the portion weighs 280 g. On the bill: 50 zł instead of 18."}
        <br />
        <strong>{isPl ? "Obrona" : "Defence"}:</strong>{" "}
        {isPl
          ? "zawsze pytaj 'is this per portion or per 100 grams?'. Restauracje uczciwe podają pełną cenę porcji."
          : "always ask 'is this per portion or per 100 grams?'. Honest restaurants list the full portion price."}
      </p>

      <h2 id="taxi">{isPl ? "5. Taksometr w 'tariff 4'" : "5. Taxi meter on 'tariff 4'"}</h2>
      <p>
        {isPl
          ? "Krakowskie taksometry mają cztery taryfy: 1 (dzień, miasto), 2 (noc, miasto), 3 (dzień, poza miastem), 4 (noc, poza miastem). Niektórzy kierowcy włączają tarifę 4 nawet w dzień w środku miasta — stawka jest dwukrotnie wyższa. Jeśli widzisz '4' na ekranie taksometru w sobotę o 14:00 w środku Krakowa, to oszustwo."
          : "Kraków taxi meters have four tariffs: 1 (day, city), 2 (night, city), 3 (day, out of town), 4 (night, out of town). Some drivers switch on tariff 4 even on a daytime city ride — at double the rate. If you see '4' on the meter on a Saturday at 2 PM in central Kraków, it's a scam."}
        <br />
        <strong>{isPl ? "Obrona" : "Defence"}:</strong>{" "}
        {isPl ? "używaj Bolta zamiast taxi z postoju." : "use Bolt instead of street taxis."}
      </p>

      <h2 id="sim">{isPl ? "6. Turystyczny SIM za 80 zł" : "6. The 80 zł 'tourist' SIM card"}</h2>
      <p>
        {isPl
          ? "Kioski przy Rynku z napisem 'TOURIST SIM CARD HERE' sprzedają zwykłe karty Orange / Play za 60-80 zł zamiast 25 zł. To nie kradzież, ale 200% marży tylko dlatego, że nie wiesz, ile to powinno kosztować."
          : "Kiosks near Rynek with 'TOURIST SIM CARD HERE' signs sell regular Orange / Play cards for 60-80 zł instead of 25. Not theft — just a 200% markup because you don't know what it should cost."}
        <br />
        <strong>{isPl ? "Obrona" : "Defence"}:</strong>{" "}
        {isPl
          ? "kup eSIM przed wylotem albo idź do salonu Play / Orange w Galerii Krakowskiej."
          : "buy an eSIM before you fly, or visit a Play / Orange shop in Galeria Krakowska."}
      </p>

      <h2 id="guides">{isPl ? "7. 'Free' wycieczki, które nie są darmowe" : "7. 'Free' walking tours that aren't"}</h2>
      <p>
        {isPl
          ? "Modela 'free walking tour' to model napiwkowy — wycieczka jest formalnie darmowa, ale przewodnik na koniec oczekuje napiwku 50-80 zł od osoby. Nie jest to oszustwo, jeśli masz świadomość. Niektóre lokalne firmy łączą model 'free' z agresywnym pchaniem komercyjnych dokupek (jacuzzi-bus do Auschwitz, kolacja w karczmie...) z prowizją dla przewodnika."
          : "The 'free walking tour' model is tip-based — the tour is formally free, but the guide expects a 50-80 zł tip per person at the end. Not a scam if you go in with that knowledge. Some local outfits combine the 'free' model with aggressive upselling of commercial add-ons (a jacuzzi-bus to Auschwitz, a tavern dinner) on commission to the guide."}
        <br />
        <strong>{isPl ? "Obrona" : "Defence"}:</strong>{" "}
        {isPl
          ? "wiedz z góry że koszt to ~60 zł. Jeśli przewodnik mocno dosprzedaje — wybierz innego."
          : "go in knowing the real cost is ~60 zł. If the guide is pushing add-ons hard, pick a different one."}
      </p>
    </ArticleShell>
  );
}
