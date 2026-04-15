import Link from "next/link";
import JsonLd from "./JsonLd";
import { SITE_URL } from "@/i18n/config";

export interface Crumb {
  href: string;
  label: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: `${SITE_URL}${it.href}`,
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted">
      <JsonLd data={ld} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.href} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden>›</span>}
              {last ? (
                <span className="text-foreground font-medium">{it.label}</span>
              ) : (
                <Link
                  href={it.href}
                  className="hover:text-foreground transition-colors"
                >
                  {it.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
