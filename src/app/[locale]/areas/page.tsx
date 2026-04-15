import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, type Locale, SITE_URL } from "@/i18n/config";
import ArticleShell from "@/components/ArticleShell";
import { AREAS } from "@/content/areas";

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
      ? "Dzielnice Krakowa — przewodnik po Starym Mieście, Kazimierzu, Wawelu, Podgórzu i Nowej Hucie"
      : "Kraków neighborhoods — Old Town, Kazimierz, Wawel, Podgórze and Nowa Huta",
    description: isPl
      ? "Przewodnik po pięciu dzielnicach Krakowa, które warto zobaczyć: co zwiedzić, gdzie zjeść, jak dojechać i ile czasu zaplanować."
      : "A guide to the five Kraków neighborhoods worth seeing: what to visit, where to eat, how to get there and how much time to budget.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/areas`,
      languages: {
        en: `${SITE_URL}/en/areas`,
        pl: `${SITE_URL}/pl/areas`,
      },
    },
  };
}

export default async function AreasHub({
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
      path="/areas"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/areas`, label: isPl ? "Dzielnice" : "Areas" },
      ]}
      title={
        isPl
          ? "Dzielnice Krakowa, które warto zobaczyć"
          : "Kraków neighborhoods worth seeing"
      }
      lede={
        isPl
          ? "Kraków jest mniejszy niż większość turystów myśli — wszystko, co naprawdę warte zobaczenia, mieści się na obszarze 4 km na 4 km. Pięć dzielnic, które poniżej opisujemy, pokrywają 95% potrzeb pierwszego wyjazdu."
          : "Kraków is smaller than most visitors think — everything genuinely worth seeing fits inside a 4 km by 4 km area. The five districts below cover 95% of a first trip."
      }
      updated="2026-04-14"
      related={AREAS.slice(0, 4).map((a) => ({
        href: `/${t}/areas/${a.slug}`,
        title: isPl ? a.titlePl : a.titleEn,
        description: (isPl ? a.ledePl : a.ledeEn).slice(0, 130) + "…",
      }))}
    >
      <p>
        {isPl
          ? "Każdy z poniższych przewodników ma jedną sekcję 'co zobaczyć', jedną 'gdzie zjeść' i jedną 'jak dojechać' — bez wody. Linki działają, ceny są aktualne, a restauracje wybraliśmy spośród miejsc, w których realnie jadamy."
          : "Each of the guides below has one 'what to see', one 'where to eat' and one 'how to get there' section — no fluff. Links work, prices are current, and the restaurants are picked from places we actually eat."}
      </p>

      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        {AREAS.map((a) => (
          <Link
            key={a.slug}
            href={`/${t}/areas/${a.slug}`}
            className="block p-5 rounded-2xl border border-card-border bg-white hover:border-primary hover:shadow-md transition-all"
          >
            <h3 className="font-bold text-foreground text-base">
              {isPl ? a.titlePl : a.titleEn}
            </h3>
            <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
              {(isPl ? a.ledePl : a.ledeEn).slice(0, 140)}…
            </p>
            <span className="inline-block mt-3 text-xs font-semibold text-primary">
              {isPl ? "Czytaj →" : "Read →"}
            </span>
          </Link>
        ))}
      </div>
    </ArticleShell>
  );
}
