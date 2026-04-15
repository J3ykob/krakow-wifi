interface Item {
  id: string;
  label: string;
}

export default function Toc({
  heading,
  items,
}: {
  heading: string;
  items: Item[];
}) {
  if (items.length < 3) return null;
  return (
    <nav
      aria-label={heading}
      className="rounded-xl border border-card-border bg-white/60 p-4"
    >
      <p className="text-[11px] uppercase tracking-wider text-muted font-semibold mb-2">
        {heading}
      </p>
      <ol className="space-y-1.5 text-sm">
        {items.map((it, i) => (
          <li key={it.id} className="flex gap-2">
            <span className="text-muted tabular-nums w-5 text-right">
              {i + 1}.
            </span>
            <a
              href={`#${it.id}`}
              className="text-primary hover:underline leading-snug"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
