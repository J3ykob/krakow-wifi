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
      ? "Pierogi w Krakowie — rodzaje, gdzie zjeść, ceny"
      : "Pierogi in Kraków — varieties, where to eat, prices",
    description: isPl
      ? "Krótki przewodnik po pierogach: rodzaje, jak rozróżnić ruskie od włoskich, gdzie najlepiej zjeść w Krakowie i ile to kosztuje."
      : "A short guide to pierogi: varieties, how to tell ruskie from włoskie, where to eat them in Kraków, and what to pay.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/food/pierogi`,
      languages: {
        en: `${SITE_URL}/en/food/pierogi`,
        pl: `${SITE_URL}/pl/food/pierogi`,
      },
    },
  };
}

export default async function PierogiPage({
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
      path="/food/pierogi"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/food`, label: isPl ? "Jedzenie" : "Food" },
        { href: `/${t}/food/pierogi`, label: "Pierogi" },
      ]}
      title={
        isPl
          ? "Pierogi w Krakowie — rodzaje, miejsca, ceny"
          : "Pierogi in Kraków — varieties, places, prices"
      }
      lede={
        isPl
          ? "Pierogi to najważniejsze danie polskiej kuchni i prawie zawsze pierwsza rzecz, której zagraniczny gość chce spróbować w Krakowie. Tu jest wszystko, co warto wiedzieć w pięć minut: co zamówić, gdzie pójść i jak nie zostać oszukanym na 'pierogi domowe' z zamrażarki."
          : "Pierogi are the most important dish in Polish cuisine and almost always the first thing a foreign visitor wants to try in Kraków. Here's everything you need to know in five minutes: what to order, where to go, and how not to get charged premium prices for frozen 'homemade' dumplings."
      }
      updated="2026-04-14"
      toc={[
        { id: "what", label: isPl ? "Czym są pierogi" : "What pierogi are" },
        { id: "types", label: isPl ? "Rodzaje" : "Varieties" },
        { id: "how", label: isPl ? "Jak są przygotowywane" : "How they're prepared" },
        { id: "where", label: isPl ? "Gdzie zjeść" : "Where to eat them" },
      ]}
      related={[
        {
          href: `/${t}/food/milk-bars`,
          title: isPl ? "Bary mleczne" : "Milk bars",
          description: isPl
            ? "Najtańsze i najbardziej autentyczne pierogi w mieście."
            : "Cheapest and most authentic pierogi in town.",
        },
        {
          href: `/${t}/food/obwarzanek`,
          title: "Obwarzanek",
          description: isPl
            ? "Drugi krakowski symbol kulinarny."
            : "Kraków's other culinary symbol.",
        },
        {
          href: `/${t}/scams`,
          title: isPl ? "Oszustwa" : "Scams",
          description: isPl
            ? "'Cena za 100g' w menu pierogowym to klasyk."
            : "'Price per 100g' on a pierogi menu is a classic.",
        },
      ]}
    >
      <h2 id="what">{isPl ? "Czym są pierogi" : "What pierogi are"}</h2>
      <p>
        {isPl
          ? "Pierogi to półksiężycowate kluski z ciasta pszennego nadziewane różnymi farszami, gotowane we wrzątku, czasem dodatkowo podsmażane na maśle z cebulą. Polski archetyp 'jedzenia, którego brakuje za granicą' — niemal każdy emigrant z Polski tęskni za pierogami po roku za granicą. W Krakowie znajdziesz je dosłownie wszędzie, od barów mlecznych po fine dining."
          : "Pierogi are crescent-shaped wheat dough dumplings filled with various stuffings, boiled in water, sometimes additionally pan-fried in butter with onions. The Polish archetype of 'food I miss abroad' — almost every Polish emigrant pines for pierogi after a year overseas. In Kraków you'll find them literally everywhere, from milk bars to fine dining."}
      </p>

      <h2 id="types">{isPl ? "Najpopularniejsze rodzaje" : "The most common varieties"}</h2>
      <ul>
        <li>
          <strong>Ruskie</strong> —{" "}
          {isPl
            ? "ziemniak + twaróg + cebula. NIE rosyjskie. Nazwa pochodzi od dawnej Rusi (Ukraina/Białoruś), gdzie powstały. Najpopularniejsze w całej Polsce."
            : "potato + cottage cheese + onion. NOT Russian. The name comes from old Ruthenia (Ukraine/Belarus), where they originated. The most popular variety in all of Poland."}
        </li>
        <li>
          <strong>{isPl ? "Z mięsem" : "Z mięsem (with meat)"}</strong> —{" "}
          {isPl
            ? "mielone wieprzowe lub mieszane, czasem z dodatkiem cebuli."
            : "minced pork or mixed meat, sometimes with onion."}
        </li>
        <li>
          <strong>{isPl ? "Z kapustą i grzybami" : "Z kapustą i grzybami (sauerkraut and mushrooms)"}</strong> —{" "}
          {isPl
            ? "klasyczne, wegetariańskie, z mocniejszym smakiem. Często serwowane w Wigilię."
            : "classic, vegetarian, with a stronger flavour. Traditionally served on Christmas Eve."}
        </li>
        <li>
          <strong>{isPl ? "Ze szpinakiem" : "Ze szpinakiem (spinach)"}</strong>{" "}
          {isPl ? "— ze szpinakiem i serem feta lub twarogiem, nowsza moda." : "— with spinach and feta or cottage cheese, more recent."}
        </li>
        <li>
          <strong>{isPl ? "Z owocami" : "Z owocami (with fruit)"}</strong> —{" "}
          {isPl
            ? "deser. Truskawki, jagody lub czereśnie. Polewane śmietaną i cukrem. Sezonowe (lato)."
            : "dessert. Strawberry, blueberry or cherry. Topped with sour cream and sugar. Seasonal (summer)."}
        </li>
      </ul>

      <h2 id="how">{isPl ? "Gotowane czy smażone" : "Boiled or fried"}</h2>
      <p>
        {isPl
          ? "Klasyczne pierogi są gotowane. Częsty wariant: ‚odsmażane' — najpierw gotowane, potem podsmażane na patelni do chrupkości, podawane ze skwarkami (boczkiem) i karmelizowaną cebulą. To krakowski wariant, którym zachęcają w wielu pierogarniach. Spróbuj obu i sam zdecyduj."
          : "Classic pierogi are boiled. A common Kraków variant is 'odsmażane' (pan-fried): first boiled, then crisped in butter, served with skwarki (bacon bits) and caramelised onion. Try both and pick your favourite."}
      </p>

      <h2 id="where">{isPl ? "Gdzie zjeść w Krakowie" : "Where to eat them in Kraków"}</h2>
      <ul>
        <li>
          <strong>Pierogarnia Krakowiacy</strong> (Szewska 23){" "}
          {isPl
            ? "— ponad 30 rodzajów, ceny ~25-32 zł za porcję, blisko Rynku."
            : "— 30+ varieties, ~25-32 zł per plate, near Rynek."}
        </li>
        <li>
          <strong>Przystanek Pierogarnia</strong> (Bonerowska 14){" "}
          {isPl
            ? "— mała, lokalna, kolejka w godzinach lunchowych."
            : "— small, local, queue at lunchtime."}
        </li>
        <li>
          <strong>Pierogarnia Pierożki u Vincenta</strong> (Józefa 11, Kazimierz){" "}
          {isPl
            ? "— sąsiad Eszewerii, dobre, mały lokal."
            : "— neighbour of Eszeweria, good, tiny place."}
        </li>
        <li>
          <strong>Bar Mleczny Pod Temidą</strong> (Grodzka 43){" "}
          {isPl
            ? "— najtańsze pierogi w centrum (16-19 zł), bar mleczny."
            : "— cheapest pierogi in the centre (16-19 zł), milk bar."}
        </li>
      </ul>
      <div className="callout callout--warn">
        <strong>{isPl ? "Pułapka" : "Trap"}:</strong>{" "}
        {isPl
          ? "Niektóre menu w restauracjach przy Rynku podają cenę 'za 100 g' zamiast 'za porcję'. Sześć pierogów ruskich waży zwykle 250-300 g. Cena 18 zł / 100 g brzmi rozsądnie, ale w rzeczywistości to 45-55 zł za talerz. Sprawdzaj zawsze co znaczy 'cena'."
          : "Some menus in tourist-area restaurants show prices 'per 100 g' instead of per plate. A standard six-pierogi serving weighs 250-300 g. A '18 zł / 100 g' price sounds reasonable but actually means 45-55 zł per plate. Always check what 'price' means."}
      </div>
    </ArticleShell>
  );
}
