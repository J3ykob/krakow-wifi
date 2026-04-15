import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import {
  locales,
  isLocale,
  SITE_NAME,
  SITE_URL,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import CookieConsent from "@/components/CookieConsent";
import ConsentBootstrap from "@/components/ConsentBootstrap";
import Analytics from "@/components/Analytics";
import WebVitals from "@/components/WebVitals";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const altLocales = Object.fromEntries(
    locales.map((l) => [l, `${SITE_URL}/${l}`]),
  );
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME} — ${dict.meta.tagline}`,
      template: `%s · ${SITE_NAME}`,
    },
    description: dict.meta.description,
    applicationName: SITE_NAME,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: altLocales,
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: `${SITE_NAME} — ${dict.meta.tagline}`,
      description: dict.meta.description,
      url: `${SITE_URL}/${locale}`,
      locale: locale === "pl" ? "pl_PL" : "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_NAME} — ${dict.meta.tagline}`,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
    manifest: "/manifest.webmanifest",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = await getDictionary(typedLocale);

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: locale === "pl" ? "pl-PL" : "en-GB",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <ConsentBootstrap />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <link rel="alternate" hrefLang="pl" href={`${SITE_URL}/pl`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en`} />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header locale={typedLocale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={typedLocale} />
        <BottomNav locale={typedLocale} />
        <CookieConsent
          copy={{
            title: dict.consent.title,
            body: dict.consent.body,
            accept: dict.consent.accept,
            reject: dict.consent.reject,
            learn: dict.consent.learn,
            privacyHref: `/${typedLocale}/privacy`,
          }}
        />
        <Analytics />
        <WebVitals />
        <JsonLd data={orgLd} />
      </body>
    </html>
  );
}
