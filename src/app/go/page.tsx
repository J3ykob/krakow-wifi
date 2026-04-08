import Header from "@/components/Header";
import AdBanner from "@/components/AdBanner";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WiFi Hotspot Map — Kraków Free WiFi",
  description:
    "Access the official Kraków municipal WiFi hotspot map. Find free internet near Rynek Główny, Kazimierz, Wawel, and more.",
};

const QUICK_LINKS = [
  {
    icon: "🗺️",
    title: "Interactive Hotspot Map",
    description:
      "View all WiFi locations on the official city map with real-time availability.",
    href: "https://www.krakow.pl/196800,artykul,miejskie_hot_spoty_-_darmowe_wi-fi.html",
    primary: true,
  },
  {
    icon: "📍",
    title: "Old Town Hotspots",
    description:
      "Rynek Główny, Floriańska Street, Planty Park — the densest coverage area.",
    href: "https://www.krakow.pl/196800,artykul,miejskie_hot_spoty_-_darmowe_wi-fi.html",
    primary: false,
  },
  {
    icon: "🏰",
    title: "Wawel & Riverbank",
    description:
      "Stay connected along the Vistula River and near Wawel Castle.",
    href: "https://www.krakow.pl/196800,artykul,miejskie_hot_spoty_-_darmowe_wi-fi.html",
    primary: false,
  },
];

export default function GoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 space-y-8">
        {/* Top Ad */}
        <AdBanner slot="go-top-banner" format="horizontal" height={90} className="rounded-xl" />

        {/* Hero */}
        <section className="text-center py-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            Kraków WiFi Hotspot Map
          </h2>
          <p className="text-muted mt-2 max-w-md mx-auto text-sm leading-relaxed">
            Choose a link below to open the official interactive map from
            the City of Kraków. All hotspots are free and available 24/7.
          </p>
        </section>

        {/* Quick Links */}
        <section className="space-y-3">
          {QUICK_LINKS.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 rounded-2xl p-5 border transition-all hover:shadow-md hover:scale-[1.01] active:scale-[0.99] ${
                link.primary
                  ? "bg-primary text-white border-primary"
                  : "bg-card-bg text-foreground border-card-border"
              }`}
            >
              <span className="text-2xl">{link.icon}</span>
              <div className="flex-1 min-w-0">
                <h3 className={`font-semibold text-sm ${link.primary ? "text-white" : ""}`}>
                  {link.title}
                </h3>
                <p className={`text-xs mt-0.5 ${link.primary ? "text-blue-100" : "text-muted"}`}>
                  {link.description}
                </p>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 ${link.primary ? "text-blue-100" : "text-muted"}`}>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          ))}
        </section>

        {/* In-content Ad */}
        <AdBanner slot="go-in-content" format="rectangle" height={250} className="rounded-xl" label="Sponsored" />

        {/* Connection info */}
        <section className="bg-card-bg border border-card-border rounded-2xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Before You Connect</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-1">Network Name</h4>
              <p className="text-muted">
                Look for{" "}
                <code className="bg-blue-50 text-primary px-1.5 py-0.5 rounded text-xs font-mono">HotSpot-Krakow</code>{" "}
                in your WiFi settings.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Password</h4>
              <p className="text-muted">None required. The network is open and free for everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Coverage</h4>
              <p className="text-muted">Over 80 hotspots in key tourist areas, parks, and public spaces.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Speed</h4>
              <p className="text-muted">Suitable for browsing, maps, and messaging. Not ideal for large downloads.</p>
            </div>
          </div>
        </section>

        {/* Another ad */}
        <AdBanner slot="go-mid" format="rectangle" height={250} lazy className="rounded-xl" label="Sponsored" />

        {/* FAQ */}
        <section>
          <h3 className="text-lg font-bold text-foreground mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <details className="bg-card-bg border border-card-border rounded-xl p-4 group">
              <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                Is the WiFi really free?
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-open:rotate-180"><polyline points="6 9 12 15 18 9" /></svg>
              </summary>
              <p className="text-sm text-muted mt-2">Yes. The City of Kraków provides free municipal WiFi at over 80 hotspot locations. No fees, no registration, no time limits.</p>
            </details>
            <details className="bg-card-bg border border-card-border rounded-xl p-4 group">
              <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                Is it safe to use public WiFi?
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-open:rotate-180"><polyline points="6 9 12 15 18 9" /></svg>
              </summary>
              <p className="text-sm text-muted mt-2">Public WiFi is generally safe for browsing, maps, and messaging. For banking or sensitive logins, use a VPN or your mobile data.</p>
            </details>
            <details className="bg-card-bg border border-card-border rounded-xl p-4 group">
              <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                What if I can&apos;t find the network?
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-open:rotate-180"><polyline points="6 9 12 15 18 9" /></svg>
              </summary>
              <p className="text-sm text-muted mt-2">Make sure you&apos;re near a marked hotspot location on the map. Coverage can vary indoors. Try moving closer to the street or main square.</p>
            </details>
          </div>
        </section>

        {/* Bottom ad */}
        <AdBanner slot="go-bottom-banner" format="horizontal" height={100} lazy className="rounded-xl" label="Sponsored" />

        {/* Back link */}
        <section className="text-center py-4">
          <Link href="/" className="text-sm text-primary hover:underline">&larr; Back to Kraków WiFi Finder</Link>
        </section>
      </main>

      <footer className="border-t border-card-border bg-white/50">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
            <p>Kraków WiFi Finder &mdash; Helping tourists stay connected</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
