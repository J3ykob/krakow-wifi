import type { MetadataRoute } from "next";
import { ROUTES } from "@/content/routes";
import { SITE_URL, locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}/en${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${SITE_URL}/${l}${r.path}`]),
      ),
    },
  }));
}
