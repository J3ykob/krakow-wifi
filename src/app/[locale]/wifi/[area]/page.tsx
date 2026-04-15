import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale, SITE_URL } from "@/i18n/config";
import ArticleShell from "@/components/ArticleShell";
import { WIFI_AREAS, getWifiArea } from "@/content/wifi-areas";

const HotspotMap = dynamic(() => import("@/components/HotspotMap"));

export async function generateStaticParams() {
  return WIFI_AREAS.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; area: string }>;
}): Promise<Metadata> {
  const { locale, area } = await params;
  if (!isLocale(locale)) return {};
  const a = getWifiArea(area);
  if (!a) return {};
  const isPl = locale === "pl";
  return {
    title: isPl ? a.titlePl : a.titleEn,
    description: isPl ? a.ledePl : a.ledeEn,
    alternates: {
      canonical: `${SITE_URL}/${locale}/wifi/${area}`,
      languages: {
        en: `${SITE_URL}/en/wifi/${area}`,
        pl: `${SITE_URL}/pl/wifi/${area}`,
      },
    },
  };
}

export default async function WifiAreaPage({
  params,
}: {
  params: Promise<{ locale: string; area: string }>;
}) {
  const { locale, area } = await params;
  if (!isLocale(locale)) notFound();
  const a = getWifiArea(area);
  if (!a) notFound();
  const t = locale as Locale;
  const isPl = t === "pl";

  const body = isPl ? a.bodyPl : a.bodyEn;
  const bestFor = isPl ? a.bestForPl : a.bestForEn;

  return (
    <ArticleShell
      locale={t}
      path={`/wifi/${a.slug}`}
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/wifi`, label: isPl ? "Darmowe WiFi" : "Free WiFi" },
        {
          href: `/${t}/wifi/${a.slug}`,
          label: isPl ? a.titlePl : a.titleEn,
        },
      ]}
      title={isPl ? a.titlePl : a.titleEn}
      lede={isPl ? a.ledePl : a.ledeEn}
      updated="2026-04-14"
      toc={body.map((b, i) => ({ id: `s-${i}`, label: b.h }))}
      related={WIFI_AREAS.filter((x) => x.slug !== a.slug)
        .slice(0, 4)
        .map((x) => ({
          href: `/${t}/wifi/${x.slug}`,
          title: isPl ? x.titlePl : x.titleEn,
          description: (isPl ? x.ledePl : x.ledeEn).slice(0, 120) + "…",
        }))}
    >
      <h2>{isPl ? "Najlepsze do" : "Best for"}</h2>
      <ul>
        {bestFor.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {body.map((s, i) => (
        <div key={s.h}>
          <h2 id={`s-${i}`}>{s.h}</h2>
          <p>{s.p}</p>
        </div>
      ))}

      <h2>{isPl ? "Hotspoty w tej dzielnicy" : "Hotspots in this district"}</h2>
      <div className="not-prose my-6">
        <HotspotMap locale={t} initialDistrict={a.district} />
      </div>
    </ArticleShell>
  );
}
