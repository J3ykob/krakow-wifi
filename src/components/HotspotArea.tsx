interface HotspotAreaProps {
  name: string;
  description: string;
  icon: string;
}

export default function HotspotArea({
  name,
  description,
  icon,
}: HotspotAreaProps) {
  return (
    <div className="flex items-center gap-3 bg-card-bg border border-card-border rounded-xl px-4 py-3 hover:shadow-sm transition-shadow">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="font-semibold text-sm text-foreground">{name}</p>
        <p className="text-xs text-muted">{description}</p>
      </div>
    </div>
  );
}
