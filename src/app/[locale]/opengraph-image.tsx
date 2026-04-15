import { ImageResponse } from "next/og";
import { isLocale } from "@/i18n/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "CityCompass — pocket guide to Kraków";

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isPl = isLocale(locale) && locale === "pl";
  const tagline = isPl
    ? "Kieszonkowy przewodnik po Krakowie"
    : "Your pocket guide to Kraków";
  const subtitle = isPl
    ? "WiFi · transport · jedzenie · dzielnice"
    : "WiFi · transport · food · neighborhoods";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "white",
              color: "#1d4ed8",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 26,
              letterSpacing: -1,
            }}
          >
            CC
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: 36,
              letterSpacing: -1,
            }}
          >
            CityCompass
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              letterSpacing: -2.5,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            {tagline}
          </div>
          <div
            style={{
              fontSize: 30,
              opacity: 0.85,
              fontWeight: 500,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 80,
            fontSize: 22,
            opacity: 0.7,
            fontWeight: 600,
          }}
        >
          citycompass.pl
        </div>
      </div>
    ),
    { ...size },
  );
}
