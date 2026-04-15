import type { CSSProperties } from "react";

type Format = "horizontal" | "rectangle" | "responsive";

const HEIGHTS: Record<Format, number> = {
  horizontal: 90,
  rectangle: 250,
  responsive: 280,
};

export default function AdSlot({
  slot,
  format = "responsive",
  label = "Advertisement",
  className = "",
}: {
  slot: string;
  format?: Format;
  label?: string;
  className?: string;
}) {
  const height = HEIGHTS[format];
  const reserved: CSSProperties = {
    minHeight: `${height}px`,
    contain: "layout paint",
  };
  return (
    <aside
      aria-label={label}
      data-ad-slot={slot}
      className={
        "ad-slot relative w-full rounded-xl border border-dashed border-card-border bg-slate-50/60 grid place-items-center text-[10px] uppercase tracking-wider text-slate-400 " +
        className
      }
      style={reserved}
    >
      <span aria-hidden>{label}</span>
    </aside>
  );
}
