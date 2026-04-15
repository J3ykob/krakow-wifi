import Link from "next/link";

export interface Related {
  href: string;
  title: string;
  description: string;
}

export default function RelatedGuides({
  heading,
  items,
}: {
  heading: string;
  items: Related[];
}) {
  if (!items.length) return null;
  return (
    <section className="mt-12">
      <h2 className="text-lg font-bold text-foreground mb-4">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="block p-4 rounded-xl border border-card-border bg-white hover:border-primary hover:shadow-sm transition-all"
          >
            <div className="font-semibold text-sm text-foreground">
              {it.title}
            </div>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              {it.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
