import AdBanner from "@/components/AdBanner";
import Header from "@/components/Header";
import WifiTipCard from "@/components/WifiTipCard";
import HotspotArea from "@/components/HotspotArea";
import AnchorAd from "@/components/AnchorAd";
import Link from "next/link";

const HOTSPOT_AREAS = [
  {
    name: "Rynek Główny",
    description: "Main Market Square & surroundings",
    icon: "🏛️",
  },
  {
    name: "Kazimierz",
    description: "Historic Jewish quarter",
    icon: "🕍",
  },
  {
    name: "Wawel Area",
    description: "Castle hill & riverbank",
    icon: "🏰",
  },
  {
    name: "Planty Park",
    description: "Green belt around Old Town",
    icon: "🌳",
  },
  {
    name: "Nowa Huta",
    description: "Socialist realist district",
    icon: "🏗️",
  },
  {
    name: "Podgórze",
    description: "South bank of the Vistula",
    icon: "🌉",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 space-y-8">
        {/* Above-the-fold ad — highest viewability */}
        <AdBanner
          slot="top-banner"
          format="horizontal"
          height={90}
          className="rounded-xl"
        />

        {/* Hero */}
        <section className="text-center py-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <circle cx="12" cy="20" r="1" fill="currentColor" />
            </svg>
            100% Free WiFi
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Free WiFi Hotspots
            <br />
            <span className="text-primary">in Kraków</span>
          </h2>
          <p className="text-muted mt-3 max-w-md mx-auto text-base leading-relaxed">
            Stay connected while exploring one of Europe&apos;s most beautiful
            cities. Find free municipal WiFi hotspots across Kraków.
          </p>
        </section>

        {/* Primary CTA */}
        <section className="flex justify-center">
          <Link
            href="/go"
            className="cta-pulse inline-flex items-center gap-3 bg-primary text-white text-lg font-semibold px-8 py-4 rounded-2xl hover:bg-primary-dark transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-200"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Open WiFi Hotspot Map
          </Link>
        </section>

        {/* In-content ad — high-value placement after hero */}
        <AdBanner
          slot="in-content-1"
          format="rectangle"
          height={250}
          className="rounded-xl"
          label="Sponsored"
        />

        {/* How to Connect */}
        <section className="bg-card-bg border border-card-border rounded-2xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">
            How to Connect
          </h3>
          <ol className="space-y-3 text-sm text-muted">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                1
              </span>
              <span>
                Open your device&apos;s WiFi settings and look for the network
                named <strong className="text-foreground">HotSpot-Krakow</strong>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                2
              </span>
              <span>
                Connect directly — no password is required. A welcome page may
                appear.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                3
              </span>
              <span>
                Accept the terms of use and start browsing. The connection is
                free and available 24/7.
              </span>
            </li>
          </ol>
        </section>

        {/* Popular Hotspot Areas */}
        <section>
          <h3 className="text-lg font-bold text-foreground mb-4">
            Popular Hotspot Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {HOTSPOT_AREAS.map((area) => (
              <HotspotArea key={area.name} {...area} />
            ))}
          </div>
        </section>

        {/* In-content ad #2 — lazy loaded */}
        <AdBanner
          slot="in-content-2"
          format="rectangle"
          height={250}
          lazy
          className="rounded-xl"
          label="Sponsored"
        />

        {/* Tips Section */}
        <section>
          <h3 className="text-lg font-bold text-foreground mb-4">
            WiFi Tips for Tourists
          </h3>
          <div className="space-y-3">
            <WifiTipCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              }
              title="Look for 'HotSpot-Krakow'"
              description="The official municipal network name is 'HotSpot-Krakow'. Connect directly — no password required."
            />
            <WifiTipCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              }
              title="Stay Safe Online"
              description="Public WiFi is great for browsing and maps. Use a VPN for banking or entering sensitive passwords."
            />
            <WifiTipCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              }
              title="Available 24/7"
              description="Most hotspots are always on. Coverage is strongest in the Old Town, Kazimierz, and along the Vistula River."
            />
            <WifiTipCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
              title="Use the Official Map"
              description="The city provides an interactive map showing all hotspot locations. Tap the button above to view it."
            />
          </div>
        </section>

        {/* Bottom ad — lazy loaded */}
        <AdBanner
          slot="bottom-banner"
          format="horizontal"
          height={100}
          lazy
          className="rounded-xl"
          label="Sponsored"
        />

        {/* Secondary CTA */}
        <section className="text-center py-4">
          <Link
            href="/go"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Find Nearest WiFi Hotspot
          </Link>
          <p className="text-xs text-muted mt-2">
            You&apos;ll be redirected to the official Kraków city WiFi map
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-card-border bg-white/50">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <AdBanner slot="footer-banner" format="horizontal" height={90} lazy className="rounded-xl mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
            <p>Kraków WiFi Finder &mdash; Helping tourists stay connected</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
              <a href="https://www.krakow.pl" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">krakow.pl</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky bottom anchor ad */}
      <AnchorAd slot="anchor-bottom" />
    </div>
  );
}
