import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import Toc from "./Toc";
import RelatedGuides, { type Related } from "./RelatedGuides";
import AdSlot from "./AdSlot";
import JsonLd from "./JsonLd";
import AffiliateDisclosure from "./AffiliateDisclosure";
import { SITE_NAME, SITE_URL, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface FaqItem {
  q: string;
  a: string;
}

export interface ArticleShellProps {
  locale: Locale;
  path: string;
  breadcrumbs: Crumb[];
  title: string;
  lede: string;
  updated: string;
  toc?: { id: string; label: string }[];
  hero?: ReactNode;
  children: ReactNode;
  related?: Related[];
  faq?: FaqItem[];
  affiliate?: boolean;
}

export default async function ArticleShell({
  locale,
  path,
  breadcrumbs,
  title,
  lede,
  updated,
  toc,
  hero,
  children,
  related,
  faq,
  affiliate,
}: ArticleShellProps) {
  const dict = await getDictionary(locale);
  const url = `${SITE_URL}/${locale}${path}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: lede,
    inLanguage: locale === "pl" ? "pl-PL" : "en-GB",
    datePublished: updated,
    dateModified: updated,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: url,
  };

  const faqLd = faq && faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <article className="max-w-3xl mx-auto px-4 py-6 sm:py-10">
      <JsonLd data={articleLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <Breadcrumbs items={breadcrumbs} />

      <header className="mt-4 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">{lede}</p>
        <p className="mt-2 text-xs text-muted">
          {dict.common.updated}: {updated}
        </p>
      </header>

      {hero}

      {affiliate && (
        <div className="mb-6">
          <AffiliateDisclosure locale={locale} />
        </div>
      )}

      {toc && toc.length >= 3 && (
        <div className="mb-6">
          <Toc heading={dict.toc.heading} items={toc} />
        </div>
      )}

      <AdSlot slot="article-top" format="responsive" className="mb-8" />

      <div className="prose">{children}</div>

      {faq && faq.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-4">FAQ</h2>
          <div className="space-y-3">
            {faq.map((f) => (
              <details
                key={f.q}
                className="rounded-xl border border-card-border bg-white p-4 group"
              >
                <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>{f.q}</span>
                  <span
                    aria-hidden
                    className="text-muted transition-transform group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      <AdSlot slot="article-bottom" format="responsive" className="mt-10" />

      {related && related.length > 0 && (
        <RelatedGuides heading={dict.related.heading} items={related} />
      )}
    </article>
  );
}
