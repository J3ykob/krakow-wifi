import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, type Locale } from "@/i18n/config";

function pickLocale(request: NextRequest): Locale {
  const accept = request.headers.get("accept-language") ?? "";
  const preferred = accept
    .split(",")
    .map((entry) => entry.trim().split(";")[0].toLowerCase().slice(0, 2));
  for (const code of preferred) {
    if ((locales as readonly string[]).includes(code)) return code as Locale;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/icons") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/ads.txt" ||
    pathname === "/manifest.webmanifest" ||
    /\.(?:png|jpg|jpeg|svg|webp|avif|ico|txt|xml|webmanifest|js|css|woff2?)$/i.test(
      pathname,
    )
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = pickLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
