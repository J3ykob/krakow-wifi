import type { ReactNode } from "react";

type Partner = "airalo" | "holafly" | "saily" | "booking" | "getyourguide" | "omio" | "discovercars";

const PARTNERS: Record<Partner, { url: (slug?: string) => string; label: string }> = {
  airalo: {
    label: "Airalo",
    url: () => "https://airalo.tp.st/citycompass-poland",
  },
  holafly: {
    label: "Holafly",
    url: () => "https://holafly.sjv.io/citycompass-poland",
  },
  saily: {
    label: "Saily",
    url: () => "https://saily.com/?utm_source=citycompass",
  },
  booking: {
    label: "Booking.com",
    url: (slug) =>
      `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(slug ?? "Krakow")}&aid=citycompass`,
  },
  getyourguide: {
    label: "GetYourGuide",
    url: (slug) =>
      `https://www.getyourguide.com/krakow-l47/?partner_id=citycompass&q=${encodeURIComponent(slug ?? "")}`,
  },
  omio: {
    label: "Omio",
    url: () => "https://omio.sjv.io/citycompass-krakow",
  },
  discovercars: {
    label: "DiscoverCars",
    url: () => "https://www.discovercars.com/?a_aid=citycompass",
  },
};

export default function AffLink({
  partner,
  slug,
  children,
  className = "",
}: {
  partner: Partner;
  slug?: string;
  children?: ReactNode;
  className?: string;
}) {
  const cfg = PARTNERS[partner];
  return (
    <a
      href={cfg.url(slug)}
      target="_blank"
      rel="sponsored noopener noreferrer"
      data-affiliate={partner}
      className={
        "underline decoration-primary/30 hover:decoration-primary text-primary font-medium " +
        className
      }
    >
      {children ?? cfg.label}
    </a>
  );
}
