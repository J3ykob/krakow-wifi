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
      ? "Bary mleczne w Krakowie — gdzie, jak zamówić, ceny"
      : "Milk bars (bary mleczne) in Kraków — where, how to order, prices",
    description: isPl
      ? "Krótki praktyczny poradnik krakowskich barów mlecznych — pełna lista najlepszych adresów, jak czytać menu i ile zapłacić."
      : "A short practical guide to Kraków's milk bars — full list of the best addresses, how to read the menu, and what to pay.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/food/milk-bars`,
      languages: {
        en: `${SITE_URL}/en/food/milk-bars`,
        pl: `${SITE_URL}/pl/food/milk-bars`,
      },
    },
  };
}

export default async function MilkBarsPage({
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
      path="/food/milk-bars"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/food`, label: isPl ? "Jedzenie" : "Food" },
        { href: `/${t}/food/milk-bars`, label: isPl ? "Bary mleczne" : "Milk bars" },
      ]}
      title={
        isPl
          ? "Bary mleczne w Krakowie — pełen przewodnik"
          : "Milk bars in Kraków — the complete guide"
      }
      lede={
        isPl
          ? "Bar mleczny to tradycyjna polska stołówka dotowana przez państwo. Pełen obiad — zupa, danie główne, kompot — kosztuje mniej niż piwo w turystycznej knajpie. To zdecydowanie najlepszy stosunek jakości do ceny w polskiej kuchni i jedyne miejsce, w którym jadasz to samo, co lokalsi."
          : "A milk bar (bar mleczny) is a traditional Polish cafeteria subsidised by the state. A full lunch — soup, main, compote — costs less than a beer in a tourist bar. By far the best price-to-quality ratio in Polish cooking, and the only place where you eat the same thing as the locals do."
      }
      updated="2026-04-14"
      toc={[
        { id: "what", label: isPl ? "Co to właściwie jest" : "What is this, exactly" },
        { id: "how", label: isPl ? "Jak to działa" : "How it works" },
        { id: "menu", label: isPl ? "Menu — co zamówić" : "Menu — what to order" },
        { id: "list", label: isPl ? "Najlepsze bary" : "Best milk bars" },
      ]}
      faq={
        isPl
          ? [
              {
                q: "Czy mówią po angielsku?",
                a: "Zwykle nie. Menu jest po polsku, czasem ze zdjęciami. Najprościej pokaż palcem albo użyj Google Translate w trybie kamery.",
              },
              {
                q: "Czy płacę kartą?",
                a: "Większość już tak, ale niektóre stare bary trzymają się gotówki. Miej 30-50 zł na wszelki wypadek.",
              },
              {
                q: "Czy są wegetariańskie opcje?",
                a: "Tak, sporo. Pierogi ruskie, naleśniki ze serem, leniwe, kopytka, zupa pomidorowa, sałatka jarzynowa.",
              },
              {
                q: "Czy są otwarte wieczorem?",
                a: "Większość zamyka między 17:00 a 19:00. To miejsce na lunch, nie na kolację.",
              },
            ]
          : [
              {
                q: "Do they speak English?",
                a: "Usually not. The menu is in Polish, sometimes with photos. The easiest move is to point or use Google Translate camera mode.",
              },
              {
                q: "Do they take cards?",
                a: "Most do now, but some of the older ones are cash-only. Carry 30-50 zł just in case.",
              },
              {
                q: "Vegetarian options?",
                a: "Plenty. Pierogi ruskie, cottage-cheese pancakes, leniwe, kopytka, tomato soup, vegetable salad.",
              },
              {
                q: "Open in the evening?",
                a: "Most close between 5 and 7 PM. This is a lunch place, not a dinner place.",
              },
            ]
      }
      related={[
        {
          href: `/${t}/food/pierogi`,
          title: "Pierogi",
          description: isPl
            ? "Bary mleczne robią najlepsze i najtańsze pierogi w mieście."
            : "Milk bars serve the best and cheapest pierogi in town.",
        },
        {
          href: `/${t}/phrases`,
          title: isPl ? "50 zwrotów po polsku" : "50 Polish phrases",
          description: isPl
            ? "Łącznie z 'poproszę' i 'dziękuję'."
            : "Including 'please' and 'thank you'.",
        },
        {
          href: `/${t}/money`,
          title: isPl ? "Pieniądze" : "Money",
          description: isPl
            ? "Trzymaj drobne — niektóre bary nadal lubią gotówkę."
            : "Keep some small bills — some milk bars still prefer cash.",
        },
      ]}
    >
      <h2 id="what">{isPl ? "Co to właściwie jest" : "What is this, exactly"}</h2>
      <p>
        {isPl
          ? "Bar mleczny to dotowana przez państwo jadłodajnia, która pojawiła się w PRL-u w latach 60. jako sposób na tanie wyżywienie pracowników. Państwowa dotacja istnieje do dziś — to dlatego talerz pierogów kosztuje 16 zł, a nie 36 zł jak w restauracji. Większość barów ma autentyczny wystrój z lat 70. lub 80. (formikowe stoły, plastikowe krzesła, kafelki na ścianach), bo nikt nie inwestuje w renowację miejsca, w którym zysk jest minimalny."
          : "A milk bar is a state-subsidised eatery that appeared during the communist era in the 1960s as a cheap way to feed workers. The state subsidy still exists, which is why a plate of pierogi costs 16 zł and not 36 zł like in a restaurant. Most milk bars still have their original 1970s or 1980s decor (formica tables, plastic chairs, tiled walls), because nobody renovates a place where the margin is minimal."}
      </p>

      <h2 id="how">{isPl ? "Jak to działa" : "How it works"}</h2>
      <ol>
        <li>
          {isPl
            ? "Wchodzisz. Stań w kolejce do okienka."
            : "Walk in. Queue at the window."}
        </li>
        <li>
          {isPl
            ? "Powiedz co chcesz, pani przyjmie zamówienie i wystawi paragon. Płacisz od razu (gotówka lub karta)."
            : "Tell the lady what you want, she takes the order and prints a slip. You pay immediately (cash or card)."}
        </li>
        <li>
          {isPl
            ? "Czekasz przy okienku wydawczym, aż zawołają numer / rodzaj dania."
            : "Wait at the serving window until they call your number / dish."}
        </li>
        <li>
          {isPl
            ? "Bierzesz tacę, niesiesz do stołu, jesz. Sztućce i serwetki są zwykle przy okienku."
            : "Take your tray to a table, eat. Cutlery and napkins are usually next to the window."}
        </li>
        <li>
          {isPl
            ? "Po obiedzie odnosisz tacę do oznaczonego miejsca. Tak, masz to zrobić sam."
            : "After eating, you carry your tray to the marked drop-off. Yes, you do it yourself."}
        </li>
      </ol>

      <h2 id="menu">{isPl ? "Menu — co zamówić" : "Menu — what to order"}</h2>
      <ul>
        <li>
          <strong>Pierogi ruskie</strong> —{" "}
          {isPl
            ? "ziemniak + twaróg + cebula. Klasyk barów mlecznych, 14-18 zł za porcję."
            : "potato + cottage cheese + onion. The milk-bar classic, 14-18 zł per plate."}
        </li>
        <li>
          <strong>Pierogi z mięsem</strong> —{" "}
          {isPl ? "z mielonym, podobna cena." : "with minced meat, similar price."}
        </li>
        <li>
          <strong>Kotlet schabowy</strong> —{" "}
          {isPl
            ? "panierowany kotlet wieprzowy, ziemniaki, surówka. Polski 'national dish'. 22-28 zł."
            : "breaded pork cutlet, potatoes, salad. Poland's national dish. 22-28 zł."}
        </li>
        <li>
          <strong>Zupa pomidorowa z makaronem</strong> —{" "}
          {isPl ? "tania, dobra, prosta. 6-9 zł." : "cheap, good, simple. 6-9 zł."}
        </li>
        <li>
          <strong>Żurek</strong> —{" "}
          {isPl ? "zupa z mąki żytniej, kiełbasa, jajko. 9-12 zł." : "rye flour soup, sausage, egg. 9-12 zł."}
        </li>
        <li>
          <strong>Naleśniki ze serem</strong> —{" "}
          {isPl ? "deser. Twaróg w środku, śmietana lub dżem na wierzchu." : "for dessert. Cottage cheese inside, sour cream or jam on top."}
        </li>
        <li>
          <strong>Kompot</strong> —{" "}
          {isPl ? "domowy napój z owoców, zwykle truskawek lub jabłek." : "home-made fruit drink, usually strawberry or apple."}
        </li>
      </ul>

      <h2 id="list">{isPl ? "Najlepsze bary mleczne w Krakowie" : "Best milk bars in Kraków"}</h2>
      <ul>
        <li>
          <strong>Bar Mleczny Pod Temidą</strong> (Grodzka 43){" "}
          {isPl
            ? "— blisko Wawelu, popularny u prawników z pobliskiego sądu, więc kolejka po 13:00 jest długa. Jeden z najlepszych pierogów w mieście."
            : "— near Wawel, popular with lawyers from the nearby court, so the line after 1 PM is long. One of the best pierogi in town."}
        </li>
        <li>
          <strong>Bar Mleczny Tomasza</strong> (Świętego Tomasza 24){" "}
          {isPl
            ? "— centrum, nieco bardziej współczesny wystrój, ale wciąż autentyczne ceny."
            : "— central, slightly more modern decor but still authentic prices."}
        </li>
        <li>
          <strong>Milk Bar Tomasza</strong> (Tomasza 24){" "}
          {isPl ? "— inny niż wyżej, młodsza wersja, dobre obiady" : "— different from above, a younger version, good lunches"}
        </li>
        <li>
          <strong>Stylowa</strong> (al. Róż 3, Nowa Huta){" "}
          {isPl
            ? "— PRL-owski klimat zachowany w 100%. Warto nadłożyć drogi do Nowej Huty żeby zobaczyć."
            : "— communist-era atmosphere preserved 100%. Worth the detour to Nowa Huta just to see."}
        </li>
        <li>
          <strong>Bar Mleczny Centralny</strong> (Krowoderska 28){" "}
          {isPl ? "— solidny lunch, lokalsi" : "— solid lunch, locals"}
        </li>
        <li>
          <strong>Polakowski</strong> (Miodowa 39, Kazimierz){" "}
          {isPl
            ? "— nie do końca tradycyjny bar mleczny, ale z menu w języku angielskim, jeśli boisz się Polish-only."
            : "— not strictly a traditional milk bar, but with an English-language menu if you're nervous about Polish-only."}
        </li>
      </ul>
    </ArticleShell>
  );
}
