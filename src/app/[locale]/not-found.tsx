import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <p className="text-[11px] uppercase tracking-wider font-semibold text-muted">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
        Page not found · Strona nie istnieje
      </h1>
      <p className="mt-4 text-base text-slate-600 leading-relaxed">
        The page you were looking for has moved or never existed.
        <br />
        Strona, której szukasz, została przeniesiona albo nigdy nie istniała.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
        <Link
          href="/en"
          className="block p-4 rounded-xl border border-card-border bg-white hover:border-primary transition-colors"
        >
          <div className="text-xs uppercase tracking-wider text-muted font-semibold">
            English
          </div>
          <div className="font-semibold text-foreground mt-1">
            Open the Kraków guide →
          </div>
        </Link>
        <Link
          href="/pl"
          className="block p-4 rounded-xl border border-card-border bg-white hover:border-primary transition-colors"
        >
          <div className="text-xs uppercase tracking-wider text-muted font-semibold">
            Polski
          </div>
          <div className="font-semibold text-foreground mt-1">
            Otwórz przewodnik po Krakowie →
          </div>
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-2 justify-center">
        <Link
          href="/en/wifi"
          className="text-xs font-medium px-3 py-1.5 rounded-full bg-blue-50 text-primary hover:bg-blue-100 transition-colors"
        >
          Free WiFi
        </Link>
        <Link
          href="/en/transport/airport"
          className="text-xs font-medium px-3 py-1.5 rounded-full bg-blue-50 text-primary hover:bg-blue-100 transition-colors"
        >
          Airport → city
        </Link>
        <Link
          href="/en/areas"
          className="text-xs font-medium px-3 py-1.5 rounded-full bg-blue-50 text-primary hover:bg-blue-100 transition-colors"
        >
          Neighborhoods
        </Link>
        <Link
          href="/en/day-trips"
          className="text-xs font-medium px-3 py-1.5 rounded-full bg-blue-50 text-primary hover:bg-blue-100 transition-colors"
        >
          Day trips
        </Link>
      </div>
    </div>
  );
}
