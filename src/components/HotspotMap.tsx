"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  HOTSPOTS,
  DISTRICT_LABELS,
  type District,
  type Hotspot,
} from "@/content/hotspots";

const DISTRICT_ORDER: District[] = [
  "old-town",
  "kazimierz",
  "wawel",
  "podgorze",
  "nowa-huta",
  "other",
];

export default function HotspotMap({
  locale,
  initialDistrict,
}: {
  locale: "en" | "pl";
  initialDistrict?: District;
}) {
  const [district, setDistrict] = useState<District | "all">(
    initialDistrict ?? "all",
  );
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<unknown>(null);
  const markerLayerRef = useRef<unknown>(null);

  const filtered = useMemo(() => {
    if (district === "all") return HOTSPOTS;
    return HOTSPOTS.filter((h) => h.district === district);
  }, [district]);

  useEffect(() => {
    let cancelled = false;
    if (!mapRef.current) return;
    (async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");
      if (cancelled || !mapRef.current) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const existing = leafletMapRef.current as any;
      if (existing) {
        existing.remove();
      }
      const map = L.map(mapRef.current, {
        center: [50.0617, 19.937],
        zoom: 13,
        scrollWheelZoom: false,
      });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);
      const layer = L.layerGroup().addTo(map);
      leafletMapRef.current = map;
      markerLayerRef.current = layer;
      drawMarkers(L, layer, HOTSPOTS, locale);
    })();
    return () => {
      cancelled = true;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const m = leafletMapRef.current as any;
      if (m) m.remove();
      leafletMapRef.current = null;
    };
  }, [locale]);

  useEffect(() => {
    (async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const layer = markerLayerRef.current as any;
      if (!layer) return;
      const L = (await import("leaflet")).default;
      layer.clearLayers();
      drawMarkers(L, layer, filtered, locale);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const map = leafletMapRef.current as any;
      if (map && filtered.length > 0) {
        const bounds = L.latLngBounds(
          filtered.map((h) => [h.lat, h.lng] as [number, number]),
        );
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
      }
    })();
  }, [filtered, locale]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <FilterButton
          active={district === "all"}
          onClick={() => setDistrict("all")}
        >
          {locale === "pl" ? "Wszystkie" : "All"} ({HOTSPOTS.length})
        </FilterButton>
        {DISTRICT_ORDER.map((d) => {
          const count = HOTSPOTS.filter((h) => h.district === d).length;
          return (
            <FilterButton
              key={d}
              active={district === d}
              onClick={() => setDistrict(d)}
            >
              {DISTRICT_LABELS[d][locale]} ({count})
            </FilterButton>
          );
        })}
      </div>

      <div
        ref={mapRef}
        className="w-full rounded-2xl border border-card-border bg-slate-100 overflow-hidden"
        style={{ height: "420px" }}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map((h) => (
          <li
            key={h.id}
            className="rounded-xl border border-card-border bg-white p-4"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-sm text-foreground leading-snug">
                {h.name}
              </h3>
              <span className="shrink-0 text-[10px] uppercase tracking-wider bg-blue-50 text-primary px-2 py-0.5 rounded-full font-semibold">
                {DISTRICT_LABELS[h.district][locale]}
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              {locale === "pl" ? h.notePl : h.noteEn}
            </p>
            <p className="text-[11px] text-muted mt-2 font-mono">
              SSID: {h.ssid}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors " +
        (active
          ? "bg-primary text-white border-primary"
          : "bg-white text-muted border-card-border hover:border-primary hover:text-primary")
      }
    >
      {children}
    </button>
  );
}

function drawMarkers(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  L: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layer: any,
  spots: Hotspot[],
  locale: "en" | "pl",
) {
  for (const h of spots) {
    const icon = L.divIcon({
      className: "cc-marker",
      html: `<span style="display:block;width:14px;height:14px;border-radius:50%;background:#2563eb;border:2px solid white;box-shadow:0 0 0 1px rgba(37,99,235,.6),0 1px 4px rgba(0,0,0,.25)"></span>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });
    L.marker([h.lat, h.lng], { icon })
      .bindPopup(
        `<strong>${h.name}</strong><br/><small>${locale === "pl" ? h.notePl : h.noteEn}</small>`,
      )
      .addTo(layer);
  }
}
