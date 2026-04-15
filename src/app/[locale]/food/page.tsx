import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
      ? "Co zjeść w Krakowie — pierogi, bary mleczne, obwarzanek i więcej"
      : "What to eat in Kraków — pierogi, milk bars, obwarzanek and more",
    description: isPl
      ? "Krótki przewodnik po krakowskim jedzeniu: pierogi, bary mleczne, obwarzanek, zapiekanki i kilka porad jak unikać turystycznych pułapek."
      : "A short guide to Kraków food: pierogi, milk bars, obwarzanek, zapiekanki, plus tips for avoiding the tourist traps.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/food`,
      languages: {
        en: `${SITE_URL}/en/food`,
        pl: `${SITE_URL}/pl/food`,
      },
    },
  };
}

export default async function FoodHub({
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
      path="/food"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/food`, label: isPl ? "Jedzenie" : "Food" },
      ]}
      title={
        isPl ? "Co zjeść w Krakowie" : "What to eat in Kraków"
      }
      lede={
        isPl
          ? "Polska kuchnia jest cięższa i bardziej mięsna niż większość turystów spodziewa się, ale Kraków ma też świetną scenę wegetariańską, doskonałe kawiarnie i kilka tanich, autentycznych miejsc, w których obiad kosztuje tyle co kawa w Berlinie. Tu jest streszczenie."
          : "Polish cuisine is heavier and meatier than most visitors expect, but Kraków also has a great vegetarian scene, excellent cafés and several cheap, authentic places where lunch costs the same as a coffee in Berlin. Here is the short version."
      }
      updated="2026-04-14"
      related={[
        {
          href: `/${t}/food/milk-bars`,
          title: isPl ? "Bary mleczne" : "Milk bars",
          description: isPl
            ? "Pełen obiad za 25 zł. Klimat lat 70. Trudniej pominąć niż wytłumaczyć."
            : "A full lunch for 25 zł. 1970s atmosphere. Harder to skip than to explain.",
        },
        {
          href: `/${t}/food/pierogi`,
          title: "Pierogi",
          description: isPl
            ? "Najważniejsze danie polskie i jego krakowskie mutacje."
            : "The most important Polish dish and its Kraków mutations.",
        },
        {
          href: `/${t}/food/obwarzanek`,
          title: "Obwarzanek",
          description: isPl
            ? "Krakowski 'preclel' z chronionym oznaczeniem geograficznym UE."
            : "The Kraków 'pretzel' with EU protected geographical status.",
        },
        {
          href: `/${t}/scams`,
          title: isPl ? "Pułapki menu" : "Menu traps",
          description: isPl
            ? "Trick z ceną 'za 100 g' i inne zagrywki turystyczne."
            : "The 'price per 100g' trick and other tourist plays.",
        },
      ]}
    >
      <h2>{isPl ? "Pięć rzeczy, które warto spróbować" : "Five things worth trying"}</h2>
      <ul>
        <li>
          <strong>Pierogi.</strong>{" "}
          {isPl
            ? "Klasyk: ruskie (z ziemniakiem i twarogiem) i z mięsem. Krakowski wariant: 'pierogi pieczone' — odsmażane na patelni do chrupkości. Zwykle 25-35 zł za porcję 6-8 sztuk."
            : "Classics: ruskie (potato and cottage cheese) and meat. The Kraków twist: 'pierogi pieczone' — pan-fried to crispy. Usually 25-35 zł for a plate of 6-8."}{" "}
          <Link href={`/${t}/food/pierogi`} className="text-primary underline">
            {isPl ? "Pełen poradnik" : "Full guide"}
          </Link>
          .
        </li>
        <li>
          <strong>Obwarzanek krakowski.</strong>{" "}
          {isPl
            ? "Plecione, posypane sezamem lub makiem. Sprzedawane z błękitnych wózków na ulicach. Cena: 3-4 zł. To prawdziwy krakowski symbol."
            : "Braided, sprinkled with sesame or poppy. Sold from blue carts on the streets. 3-4 zł each. A genuine Kraków symbol."}{" "}
          <Link
            href={`/${t}/food/obwarzanek`}
            className="text-primary underline"
          >
            {isPl ? "Skąd to się wzięło" : "Where it comes from"}
          </Link>
          .
        </li>
        <li>
          <strong>Zapiekanka.</strong>{" "}
          {isPl
            ? "Pół bagietki z pieczarkami, serem i keczupem, opieczona. Klasyczne miejsce: Okrąglak na Placu Nowym (Kazimierz). 14-18 zł."
            : "Half a baguette with mushrooms, cheese and ketchup, baked. The classic place: the Okrąglak market hall on Plac Nowy (Kazimierz). 14-18 zł."}
        </li>
        <li>
          <strong>Żurek.</strong>{" "}
          {isPl
            ? "Kwaśna zupa z mąki żytniej, serwowana z kiełbasą i jajkiem. Często w wydrążonym chlebie. Ulubiona zupa polska."
            : "Sour rye soup served with sausage and an egg. Often in a hollowed-out bread bowl. Poland's favourite soup."}
        </li>
        <li>
          <strong>Bigos.</strong>{" "}
          {isPl
            ? "Tradycyjny polski stew z kapusty kiszonej, mięsa i grzybów. Smakuje lepiej drugiego dnia. Najlepszy w restauracjach poza centrum."
            : "Traditional Polish stew of sauerkraut, meat and mushrooms. Tastes better on day two. Best in restaurants outside the centre."}
        </li>
      </ul>

      <h2>{isPl ? "Gdzie nie jeść" : "Where not to eat"}</h2>
      <p>
        {isPl
          ? "Restauracje z fotografiami dań w menu, z zegarem na fasadzie pokazującym 'tylko 25 zł' i z hostami zachęcającymi z zewnątrz są pułapkami. Menu w siedmiu językach też jest sygnałem ostrzegawczym. W praktyce: jeśli restauracja stoi prostopadle do Rynku Głównego, jest to zła opcja. Wystarczy odejść jedną przecznicę."
          : "Restaurants with photos of dishes in the menu, with a clock on the facade saying 'only 25 zł', and with a host pulling people in from the street, are traps. A menu in seven languages is another warning sign. In practice: if a restaurant has windows directly on the main square, it is a bad option. Walk one block away."}
      </p>

      <h2>{isPl ? "Bary mleczne — sekret tanich obiadów" : "Milk bars — the cheap-lunch secret"}</h2>
      <p>
        {isPl
          ? "Bar mleczny to tradycyjna polska stołówka, dotowana przez państwo od czasów PRL-u. Pełen obiad — zupa, danie główne, kompot — kosztuje 18-28 zł. Nie ma kelnerów, zamawiasz przy okienku, sam nosisz tacę. To jedno z najlepszych miejsc na poznanie codziennej polskiej kuchni."
          : "A bar mleczny is a traditional Polish cafeteria, subsidised by the state since the communist era. A full lunch — soup, main, compote — costs 18-28 zł. No waiters, order at a window, carry your own tray. One of the best places to taste everyday Polish cooking."}{" "}
        <Link href={`/${t}/food/milk-bars`} className="text-primary underline">
          {isPl ? "Pełen poradnik" : "Full guide"}
        </Link>
        .
      </p>
    </ArticleShell>
  );
}
