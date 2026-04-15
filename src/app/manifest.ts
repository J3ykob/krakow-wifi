import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/i18n/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Kraków travel guide`,
    short_name: SITE_NAME,
    description: "Free WiFi, transport, food and area guides for Kraków.",
    start_url: "/en",
    scope: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#2563eb",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
