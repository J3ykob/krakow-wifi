"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";

export default function LangSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const stripped = pathname.replace(/^\/(en|pl)(?=\/|$)/, "") || "";

  return (
    <div className="flex items-center gap-1 text-xs">
      {locales.map((l) => {
        const href = `/${l}${stripped}`;
        const active = l === locale;
        return (
          <Link
            key={l}
            href={href}
            hrefLang={l}
            aria-current={active ? "page" : undefined}
            className={
              "px-2 py-1 rounded-md font-semibold tracking-wide transition-colors " +
              (active
                ? "bg-primary text-white"
                : "text-muted hover:text-foreground hover:bg-blue-50")
            }
          >
            {localeNames[l].slice(0, 2).toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
