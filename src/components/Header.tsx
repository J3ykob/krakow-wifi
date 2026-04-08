import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <circle cx="12" cy="20" r="1" fill="white" />
            </svg>
          </div>
          <div>
            <h1 className="text-base font-bold text-foreground leading-tight">
              Kraków WiFi
            </h1>
            <p className="text-[10px] text-muted leading-tight uppercase tracking-wider">
              Free Hotspots
            </p>
          </div>
        </Link>
        <a
          href="https://www.krakow.pl/196800,artykul,miejskie_hot_spoty_-_darmowe_wi-fi.html"
          className="text-xs font-semibold bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
        >
          View Map
        </a>
      </div>
    </header>
  );
}
