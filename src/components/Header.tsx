import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import LangSwitcher from "./LangSwitcher";
import SearchBox from "./SearchBox";
import { buildSearchIndex } from "@/content/search-index";

export default async function Header({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const base = `/${locale}`;
  const searchIndex = buildSearchIndex(locale);
  const searchPlaceholder = locale === "pl" ? "Szukaj…" : "Search…";

  const items = [
    { href: `${base}/wifi`, label: dict.nav.wifi },
    { href: `${base}/transport`, label: dict.nav.transport },
    { href: `${base}/food`, label: dict.nav.food },
    { href: `${base}/areas`, label: dict.nav.areas },
    { href: `${base}/money`, label: dict.nav.money },
    { href: `${base}/connect`, label: dict.nav.connect },
    { href: `${base}/day-trips`, label: dict.nav.dayTrips },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-card-border">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
        <Link
          href={base}
          className="flex items-center gap-2 font-semibold text-foreground"
        >
          <span
            aria-hidden
            className="w-7 h-7 rounded-lg bg-primary text-white grid place-items-center text-[13px] font-bold"
          >
            CC
          </span>
          <span className="text-[15px] tracking-tight">
            City<span className="text-primary">Compass</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-2.5 py-1.5 rounded-lg text-muted hover:text-foreground hover:bg-blue-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <SearchBox index={searchIndex} placeholder={searchPlaceholder} />
          <LangSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}
