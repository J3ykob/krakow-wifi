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
      ? "O CityCompass — kto za tym stoi i dlaczego"
      : "About CityCompass — who's behind this and why",
    description: isPl
      ? "CityCompass to niezależny przewodnik po Krakowie pisany przez ludzi mieszkających w mieście."
      : "CityCompass is an independent travel guide to Kraków written by people who live in the city.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/about`,
      languages: {
        en: `${SITE_URL}/en/about`,
        pl: `${SITE_URL}/pl/about`,
      },
    },
  };
}

export default async function AboutPage({
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
      path="/about"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/about`, label: isPl ? "O nas" : "About" },
      ]}
      title={
        isPl
          ? "O CityCompass — kto za tym stoi i dlaczego"
          : "About CityCompass — who's behind this and why"
      }
      lede={
        isPl
          ? "CityCompass to niezależny przewodnik po Krakowie. Bez SEO-spamu, bez 'top 10 things to do' rankingów, bez popupów. Tylko praktyczne informacje, które naprawdę przydają się komuś, kto przyjeżdża pierwszy raz."
          : "CityCompass is an independent travel guide to Kraków. No SEO spam, no 'top 10 things to do' lists, no popups. Just practical information that genuinely helps a first-time visitor."
      }
      updated="2026-04-14"
    >
      <h2>{isPl ? "Po co to robimy" : "Why we built this"}</h2>
      <p>
        {isPl
          ? "Większość 'krakowskich' stron, które znajdziesz w Google, ma jeden cel: przekierować Cię do partnera afiliacyjnego, sprzedać Ci wycieczkę albo wcisnąć Ci subskrypcję newslettera. CityCompass jest na odwrót: chcemy, żeby strona, którą czytasz, dawała Ci odpowiedź na własnym tekście. Linki afiliacyjne i reklamy są, ale ich rolą jest pokrycie hostingu — nie zastąpienie treści."
          : "Most 'Kraków' pages you'll find in Google have one goal: redirect you to an affiliate partner, sell you a tour, or push you onto a newsletter list. CityCompass is the opposite: we want the page you're reading to actually answer your question on the page. Affiliate links and ads exist to cover hosting costs, not to replace content."}
      </p>
      <p>
        {isPl
          ? "Wszystkie teksty są pisane lub redagowane przez osoby mieszkające w Krakowie. Dane (hotspoty, ceny, godziny otwarcia) są weryfikowane na bieżąco. Jeśli znajdziesz coś nieaktualnego — daj nam znać, poprawimy."
          : "Every page is written or edited by someone who lives in Kraków. Data (hotspots, prices, opening hours) is verified on a rolling basis. If you spot anything out of date, let us know and we'll fix it."}
      </p>

      <h2>{isPl ? "Jak zarabiamy" : "How we make money"}</h2>
      <p>
        {isPl
          ? "Trzy źródła, w kolejności znaczenia:"
          : "Three sources, in order of importance:"}
      </p>
      <ul>
        <li>
          {isPl ? (
            <>
              <strong>Linki afiliacyjne.</strong> Niektóre linki (do Airalo,
              Holafly, Booking.com, GetYourGuide) są oznaczone jako sponsored.
              Jeśli kupisz przez nie usługę, otrzymujemy małą prowizję bez
              dodatkowych kosztów dla Ciebie. Polecamy tylko produkty, których
              sami używamy lub którym ufamy.
            </>
          ) : (
            <>
              <strong>Affiliate links.</strong> Some links (to Airalo, Holafly,
              Booking.com, GetYourGuide) are marked as sponsored. If you buy a
              service through them, we earn a small commission at no extra cost
              to you. We only recommend products we use ourselves or trust.
            </>
          )}
        </li>
        <li>
          {isPl ? (
            <>
              <strong>Reklamy displayowe.</strong> Strony zawierają ograniczoną
              liczbę slotów reklamowych Google AdSense. Dwa lub trzy na stronę,
              żadnych pop-upów, żadnych vignette ad, żadnych sticky bannerów.
              Reklamy nigdy nie są pierwszą rzeczą, którą widzisz.
            </>
          ) : (
            <>
              <strong>Display ads.</strong> Pages contain a limited number of
              Google AdSense slots. Two or three per page, no popups, no
              vignette ads, no sticky banners. Ads are never the first thing you
              see.
            </>
          )}
        </li>
        <li>
          {isPl ? (
            <>
              <strong>Donacje (opcja przyszła).</strong> Pracujemy nad opcją
              dobrowolnego wsparcia dla osób, które chcą.
            </>
          ) : (
            <>
              <strong>Donations (planned).</strong> We're working on a voluntary
              tipping option for readers who want to support us directly.
            </>
          )}
        </li>
      </ul>

      <h2>{isPl ? "Kontakt" : "Contact"}</h2>
      <p>
        {isPl ? (
          <>
            Email: <a href="mailto:hello@citycompass.pl">hello@citycompass.pl</a>
            <br />
            Operator: CityCompass, Kraków, Polska. Strona prowadzona prywatnie,
            niekomercyjnie, jako projekt informacyjny.
          </>
        ) : (
          <>
            Email: <a href="mailto:hello@citycompass.pl">hello@citycompass.pl</a>
            <br />
            Operator: CityCompass, Kraków, Poland. The site is operated
            privately as an informational project.
          </>
        )}
      </p>

      <h2>{isPl ? "Korekty i sugestie" : "Corrections and suggestions"}</h2>
      <p>
        {isPl
          ? "Jeśli widzisz coś, co jest nieaktualne, błędne albo wprowadzające w błąd — napisz do nas. Korekty wprowadzamy szybciej niż wymagają tego algorytmy. Sugestie nowych treści też mile widziane."
          : "If you spot something out of date, wrong, or misleading — write to us. We push fixes faster than algorithms require. Suggestions for new content are also welcome."}
      </p>
    </ArticleShell>
  );
}
