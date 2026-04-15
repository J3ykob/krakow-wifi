import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale, SITE_URL } from "@/i18n/config";
import ArticleShell from "@/components/ArticleShell";
import AffLink from "@/components/AffLink";
import { AREAS, getArea } from "@/content/areas";

export async function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const a = getArea(slug);
  if (!a) return {};
  const isPl = locale === "pl";
  return {
    title: isPl ? a.titlePl : a.titleEn,
    description: isPl ? a.ledePl : a.ledeEn,
    alternates: {
      canonical: `${SITE_URL}/${locale}/areas/${slug}`,
      languages: {
        en: `${SITE_URL}/en/areas/${slug}`,
        pl: `${SITE_URL}/pl/areas/${slug}`,
      },
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const a = getArea(slug);
  if (!a) notFound();
  const t = locale as Locale;
  const isPl = t === "pl";

  const body = isPl ? a.bodyPl : a.bodyEn;
  const see = isPl ? a.seePl : a.seeEn;
  const eat = isPl ? a.eatPl : a.eatEn;
  const getThere = isPl ? a.getTherePl : a.getThereEn;

  return (
    <ArticleShell
      locale={t}
      path={`/areas/${a.slug}`}
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/areas`, label: isPl ? "Dzielnice" : "Areas" },
        {
          href: `/${t}/areas/${a.slug}`,
          label: isPl ? a.titlePl : a.titleEn,
        },
      ]}
      title={isPl ? a.titlePl : a.titleEn}
      lede={isPl ? a.ledePl : a.ledeEn}
      updated="2026-04-14"
      affiliate
      toc={[
        ...body.map((b, i) => ({ id: `s-${i}`, label: b.h })),
        { id: "see", label: isPl ? "Co zobaczyć" : "What to see" },
        { id: "eat", label: isPl ? "Gdzie zjeść" : "Where to eat" },
        { id: "get-there", label: isPl ? "Jak dojechać" : "How to get there" },
        { id: "stay", label: isPl ? "Gdzie spać" : "Where to stay" },
      ]}
      related={AREAS.filter((x) => x.slug !== a.slug)
        .slice(0, 4)
        .map((x) => ({
          href: `/${t}/areas/${x.slug}`,
          title: isPl ? x.titlePl : x.titleEn,
          description: (isPl ? x.ledePl : x.ledeEn).slice(0, 130) + "…",
        }))}
    >
      {body.map((s, i) => (
        <div key={s.h}>
          <h2 id={`s-${i}`}>{s.h}</h2>
          <p>{s.p}</p>
        </div>
      ))}

      <h2 id="see">{isPl ? "Co zobaczyć" : "What to see"}</h2>
      <ul>
        {see.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <h2 id="eat">{isPl ? "Gdzie zjeść" : "Where to eat"}</h2>
      <ul>
        {eat.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <h2 id="get-there">{isPl ? "Jak dojechać" : "How to get there"}</h2>
      <p>{getThere}</p>

      <h2 id="stay">{isPl ? "Gdzie spać w okolicy" : "Where to stay nearby"}</h2>
      <p>
        {isPl ? (
          <>
            Dla ekonomicznych pobytów: hostele i apartamenty na Booking.com w
            Twoim budżecie. Dla wycieczek tematycznych w okolicy:{" "}
            <AffLink partner="getyourguide" slug={a.slug}>
              wycieczki z przewodnikiem
            </AffLink>{" "}
            albo{" "}
            <AffLink partner="booking" slug={`Krakow ${a.slug}`}>
              hotele w okolicy
            </AffLink>{" "}
            (linki afiliacyjne).
          </>
        ) : (
          <>
            For budget stays: hostels and apartments on Booking.com in your
            price range. For guided tours nearby:{" "}
            <AffLink partner="getyourguide" slug={a.slug}>
              guided tours
            </AffLink>{" "}
            or{" "}
            <AffLink partner="booking" slug={`Krakow ${a.slug}`}>
              hotels in the area
            </AffLink>{" "}
            (affiliate links).
          </>
        )}
      </p>
    </ArticleShell>
  );
}
