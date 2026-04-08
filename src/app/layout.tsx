import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kraków Free WiFi — Find Hotspots Near You",
  description:
    "Find free municipal WiFi hotspots across Kraków. Stay connected while exploring the city with our interactive hotspot map.",
  keywords: [
    "Kraków WiFi",
    "free WiFi Krakow",
    "Krakow hotspots",
    "darmowe WiFi Kraków",
    "Krakow internet",
    "tourist WiFi Poland",
  ],
  openGraph: {
    title: "Kraków Free WiFi — Find Hotspots Near You",
    description:
      "Stay connected while exploring Kraków. Find free municipal WiFi hotspots across the city.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  const hasAdsense = adsenseId && adsenseId !== "ca-pub-XXXXXXXXXXXXXXXX";
  const medianetId = process.env.NEXT_PUBLIC_MEDIANET_CUSTOMER_ID;
  const hasMedianet = medianetId && medianetId !== "XXXXXXXX";

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Consent Mode v2 — must run before any Google tags */}
        <Script id="consent-mode-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500,
            });
          `}
        </Script>

        {/* Google AdSense — raw script tag so Google's crawler can verify ownership */}
        {hasAdsense && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
          />
        )}

        {/* Media.net contextual ads */}
        {hasMedianet && (
          <Script
            async
            src={`https://contextual.media.net/dmedianet.js?cid=${medianetId}`}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
