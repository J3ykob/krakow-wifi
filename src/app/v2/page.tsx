import type { Metadata } from "next";
import SmoczekWaving from "@/components/mascot/SmoczekWaving";
import SmoczekPointing from "@/components/mascot/SmoczekPointing";
import SmoczekExcited from "@/components/mascot/SmoczekExcited";
import SmoczekSleeping from "@/components/mascot/SmoczekSleeping";
import SpeechBubble from "@/components/mascot/SpeechBubble";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Smoczek — Your Kraków Guide | Free WiFi & Top Attractions",
  description:
    "Meet Smoczek, the friendly Wawel Dragon! Your guide to free WiFi hotspots, top tours, and local tips in Kraków.",
};

const TOP_PICKS = [
  {
    icon: "⛏️",
    title: "Wieliczka Salt Mine",
    quote: "135 meters underground and the ceilings are made of SALT. Humans are weird. But I love it.",
    price: "From $28",
    href: "#",
    tag: "Must See",
    tagColor: "bg-amber-100 text-amber-800",
  },
  {
    icon: "🏰",
    title: "Wawel Castle Tour",
    quote: "I literally live under this castle. The Dragon's Den is my front door. Come visit!",
    price: "From $22",
    href: "#",
    tag: "My Home!",
    tagColor: "bg-green-100 text-green-800",
  },
  {
    icon: "🥟",
    title: "Pierogi & Food Tour",
    quote: "Humans have this thing called pierogi. I've eaten 4,000 of them. No regrets.",
    price: "From $35",
    href: "#",
    tag: "Yummy",
    tagColor: "bg-rose-100 text-rose-800",
  },
  {
    icon: "🌙",
    title: "Old Town Night Walk",
    quote: "The Main Square at night? Pure magic. Almost as beautiful as my scales.",
    price: "From $18",
    href: "#",
    tag: "Romantic",
    tagColor: "bg-purple-100 text-purple-800",
  },
];

const HOTSPOTS = [
  { name: "Rynek Główny", area: "Main Market Square", signal: "Strong" },
  { name: "Kazimierz", area: "Jewish Quarter", signal: "Strong" },
  { name: "Wawel Hill", area: "Castle & River", signal: "Good" },
  { name: "Planty Park", area: "Old Town Green Belt", signal: "Good" },
  { name: "Nowa Huta", area: "Eastern District", signal: "Moderate" },
  { name: "Podgórze", area: "South Bank", signal: "Good" },
];

const PRO_TIPS = [
  {
    emoji: "📶",
    title: "WiFi Network Name",
    tip: "Look for 'HotSpot-Krakow' — no password needed. Just connect and go!",
  },
  {
    emoji: "🔒",
    title: "Stay Safe",
    tip: "Public WiFi is great for maps & browsing. Use a VPN for banking though!",
  },
  {
    emoji: "🚋",
    title: "Getting Around",
    tip: "Buy a tram ticket from any kiosk. The city center is super walkable too.",
  },
  {
    emoji: "💰",
    title: "Save Money",
    tip: "Eat at 'bar mleczny' (milk bars) — authentic Polish food for like $4.",
  },
];

export default function V2Page() {
  return (
    <div className="v2-page min-h-screen overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="v2-hero relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-12 pb-20">
        {/* Decorative clouds */}
        <div className="absolute top-12 left-[8%] w-24 h-10 bg-white/60 rounded-full blur-sm" />
        <div className="absolute top-20 left-[15%] w-16 h-7 bg-white/40 rounded-full blur-sm" />
        <div className="absolute top-16 right-[10%] w-32 h-12 bg-white/50 rounded-full blur-sm" />
        <div className="absolute top-24 right-[18%] w-20 h-8 bg-white/30 rounded-full blur-sm" />

        {/* Speech bubble */}
        <SpeechBubble direction="left" className="max-w-md mb-6 v2-float">
          <h1 className="v2-display text-2xl sm:text-3xl text-[#1e3a5f] leading-tight">
            Welcome to Kraków!
          </h1>
          <p className="v2-body text-[#5a6e82] mt-1 text-sm sm:text-base">
            I&apos;m <strong className="text-[#22c55e]">Smoczek</strong>, your friendly WiFi dragon.
            Let me show you around!
          </p>
        </SpeechBubble>

        {/* Dragon */}
        <SmoczekWaving className="w-48 sm:w-56 v2-bounce" />

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href="https://www.krakow.pl/196800,artykul,miejskie_hot_spoty_-_darmowe_wi-fi.html"
            className="v2-cta inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-transform"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <circle cx="12" cy="20" r="1" fill="currentColor" />
            </svg>
            Find Free WiFi
          </a>
          <span className="v2-body text-xs text-[#8a9ab5]">
            Tap to open the official hotspot map
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <span className="v2-body text-xs text-[#1e3a5f]">Scroll down</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e3a5f" strokeWidth="2" className="animate-bounce">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ─── AD BANNER ─── */}
      <div className="max-w-2xl mx-auto px-4">
        <AdBanner slot="v2-top" format="horizontal" height={90} className="rounded-2xl !border-[#e8dcc8]" />
      </div>

      {/* ─── SMOCZEK'S TOP PICKS ─── */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-end gap-4 mb-8">
            <SmoczekExcited className="w-24 sm:w-28 flex-shrink-0" />
            <SpeechBubble direction="left" className="flex-1">
              <h2 className="v2-display text-xl sm:text-2xl text-[#1e3a5f]">
                My Top Picks!
              </h2>
              <p className="v2-body text-sm text-[#5a6e82] mt-1">
                Tried, tested, and dragon-approved. These are the things you CANNOT miss.
              </p>
            </SpeechBubble>
          </div>

          <div className="grid gap-4">
            {TOP_PICKS.map((pick) => (
              <a
                key={pick.title}
                href={pick.href}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="v2-pick-card group block rounded-2xl p-5 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="flex gap-4 items-start">
                  <span className="text-3xl">{pick.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="v2-display text-base text-[#1e3a5f] group-hover:text-[#22c55e] transition-colors">
                        {pick.title}
                      </h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${pick.tagColor}`}>
                        {pick.tag}
                      </span>
                    </div>
                    <p className="v2-body text-sm text-[#5a6e82] italic leading-relaxed">
                      &ldquo;{pick.quote}&rdquo;
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="v2-display text-sm text-[#22c55e]">{pick.price}</span>
                      <span className="v2-body text-xs text-[#8a9ab5] group-hover:text-[#1e3a5f] transition-colors flex items-center gap-1">
                        Book now
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AD BANNER ─── */}
      <div className="max-w-2xl mx-auto px-4">
        <AdBanner slot="v2-mid-1" format="rectangle" height={250} lazy className="rounded-2xl !border-[#e8dcc8]" label="Sponsored" />
      </div>

      {/* ─── WIFI HOTSPOTS ─── */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-end gap-4 mb-8 flex-row-reverse">
            <SmoczekPointing className="w-24 sm:w-28 flex-shrink-0 -scale-x-100" />
            <SpeechBubble direction="right" className="flex-1">
              <h2 className="v2-display text-xl sm:text-2xl text-[#1e3a5f]">
                Free WiFi Spots
              </h2>
              <p className="v2-body text-sm text-[#5a6e82] mt-1">
                Instead of fire, I breathe WiFi. Here&apos;s where to catch my signal!
              </p>
            </SpeechBubble>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {HOTSPOTS.map((spot) => (
              <div
                key={spot.name}
                className="v2-hotspot-card flex items-center gap-3 rounded-xl px-4 py-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#22c55e]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                    <circle cx="12" cy="20" r="1" fill="#22c55e" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="v2-display text-sm text-[#1e3a5f]">{spot.name}</p>
                  <p className="v2-body text-xs text-[#8a9ab5]">{spot.area}</p>
                </div>
                <span className={`v2-body text-xs px-2 py-1 rounded-full ${
                  spot.signal === "Strong"
                    ? "bg-green-100 text-green-700"
                    : spot.signal === "Good"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-amber-100 text-amber-700"
                }`}>
                  {spot.signal}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://www.krakow.pl/196800,artykul,miejskie_hot_spoty_-_darmowe_wi-fi.html"
              className="v2-cta-secondary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              View Full Hotspot Map
            </a>
          </div>
        </div>
      </section>

      {/* ─── AD BANNER ─── */}
      <div className="max-w-2xl mx-auto px-4">
        <AdBanner slot="v2-mid-2" format="horizontal" height={100} lazy className="rounded-2xl !border-[#e8dcc8]" label="Sponsored" />
      </div>

      {/* ─── PRO TIPS ─── */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-end gap-4 mb-8">
            <SmoczekPointing className="w-24 sm:w-28 flex-shrink-0" />
            <SpeechBubble direction="left" className="flex-1">
              <h2 className="v2-display text-xl sm:text-2xl text-[#1e3a5f]">
                Smoczek&apos;s Pro Tips
              </h2>
              <p className="v2-body text-sm text-[#5a6e82] mt-1">
                I&apos;ve been here for 800 years. I know a thing or two.
              </p>
            </SpeechBubble>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRO_TIPS.map((tip) => (
              <div key={tip.title} className="v2-tip-card rounded-2xl p-5">
                <span className="text-2xl">{tip.emoji}</span>
                <h3 className="v2-display text-sm text-[#1e3a5f] mt-2">{tip.title}</h3>
                <p className="v2-body text-sm text-[#5a6e82] mt-1 leading-relaxed">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="v2-footer py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Bottom ad */}
          <AdBanner slot="v2-bottom" format="horizontal" height={90} lazy className="rounded-2xl !border-[#d4c9b5] mb-8" />

          <div className="flex flex-col items-center text-center">
            <SmoczekSleeping className="w-48 sm:w-56 mb-4 opacity-80" />
            <p className="v2-display text-lg text-[#1e3a5f]/60">
              See you in Kraków!
            </p>
            <p className="v2-body text-sm text-[#8a9ab5] mt-1">
              Made with fire &amp; WiFi by Smoczek
            </p>
            <div className="flex gap-4 mt-4 text-xs v2-body text-[#8a9ab5]">
              <a href="/privacy" className="hover:text-[#1e3a5f] transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-[#1e3a5f] transition-colors">Terms</a>
              <a href="https://www.krakow.pl" target="_blank" rel="noopener noreferrer" className="hover:text-[#1e3a5f] transition-colors">krakow.pl</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
