import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function BottomNav({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const base = `/${locale}`;
  const items = [
    { href: `${base}/wifi`, label: dict.bottomNav.wifi, icon: "wifi" },
    { href: `${base}/transport`, label: dict.bottomNav.transport, icon: "tram" },
    { href: `${base}/food`, label: dict.bottomNav.food, icon: "fork" },
    { href: `${base}/areas`, label: dict.bottomNav.areas, icon: "pin" },
  ] as const;

  return (
    <nav
      aria-label="Primary"
      className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur border-t border-card-border"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0)" }}
    >
      <ul className="grid grid-cols-4 max-w-md mx-auto">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium text-muted hover:text-primary"
            >
              <Icon name={it.icon} />
              <span>{it.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Icon({ name }: { name: "wifi" | "tram" | "fork" | "pin" }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "wifi") {
    return (
      <svg {...common}>
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (name === "tram") {
    return (
      <svg {...common}>
        <rect x="4" y="3" width="16" height="14" rx="2" />
        <path d="M4 11h16" />
        <path d="M8 17l-2 4" />
        <path d="M16 17l2 4" />
        <circle cx="9" cy="14" r=".5" fill="currentColor" />
        <circle cx="15" cy="14" r=".5" fill="currentColor" />
      </svg>
    );
  }
  if (name === "fork") {
    return (
      <svg {...common}>
        <path d="M7 2v8a3 3 0 0 0 6 0V2" />
        <path d="M10 10v12" />
        <path d="M17 2c-1 3-1 6 0 9l1.5 1v10" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
