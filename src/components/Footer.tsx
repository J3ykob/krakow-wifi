import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { SITE_NAME } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Footer({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const base = `/${locale}`;
  const year = new Date().getFullYear();

  const cols: { heading: string; links: { href: string; label: string }[] }[] =
    [
      {
        heading: dict.nav.wifi,
        links: [
          { href: `${base}/wifi`, label: dict.nav.wifi },
          { href: `${base}/connect`, label: dict.nav.connect },
        ],
      },
      {
        heading: dict.nav.transport,
        links: [
          { href: `${base}/transport`, label: dict.nav.transport },
          { href: `${base}/transport/airport`, label: "Balice → city" },
          { href: `${base}/transport/mpk`, label: "MPK" },
          { href: `${base}/transport/taxi`, label: "Taxi · Bolt" },
        ],
      },
      {
        heading: dict.nav.food,
        links: [
          { href: `${base}/food`, label: dict.nav.food },
          { href: `${base}/food/milk-bars`, label: "Milk bars" },
          { href: `${base}/food/pierogi`, label: "Pierogi" },
          { href: `${base}/food/obwarzanek`, label: "Obwarzanek" },
        ],
      },
      {
        heading: dict.nav.areas,
        links: [
          { href: `${base}/areas`, label: dict.nav.areas },
          { href: `${base}/areas/old-town`, label: "Old Town" },
          { href: `${base}/areas/kazimierz`, label: "Kazimierz" },
          { href: `${base}/areas/wawel`, label: "Wawel" },
          { href: `${base}/areas/podgorze`, label: "Podgórze" },
          { href: `${base}/areas/nowa-huta`, label: "Nowa Huta" },
        ],
      },
      {
        heading: dict.nav.dayTrips,
        links: [
          { href: `${base}/day-trips`, label: dict.nav.dayTrips },
          { href: `${base}/day-trips/auschwitz`, label: "Auschwitz" },
          { href: `${base}/day-trips/wieliczka`, label: "Wieliczka" },
          { href: `${base}/day-trips/zakopane`, label: "Zakopane" },
        ],
      },
      {
        heading: "Info",
        links: [
          { href: `${base}/money`, label: dict.nav.money },
          { href: `${base}/scams`, label: dict.nav.scams },
          { href: `${base}/emergency`, label: dict.nav.emergency },
          { href: `${base}/phrases`, label: dict.nav.phrases },
          { href: `${base}/faq`, label: dict.nav.faq },
        ],
      },
    ];

  return (
    <footer className="border-t border-card-border bg-white pb-24 md:pb-10">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-sm">
          {cols.map((col) => (
            <div key={col.heading}>
              <h4 className="font-semibold text-foreground mb-2">
                {col.heading}
              </h4>
              <ul className="space-y-1.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-muted hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-card-border flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between text-xs text-muted">
          <p>
            © {year} {SITE_NAME}. {dict.footer.rights} {dict.footer.builtWith}
          </p>
          <div className="flex gap-4">
            <Link
              href={`${base}/about`}
              className="hover:text-foreground transition-colors"
            >
              {dict.nav.about}
            </Link>
            <Link
              href={`${base}/privacy`}
              className="hover:text-foreground transition-colors"
            >
              {dict.nav.privacy}
            </Link>
            <Link
              href={`${base}/terms`}
              className="hover:text-foreground transition-colors"
            >
              {dict.nav.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
