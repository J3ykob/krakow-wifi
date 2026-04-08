interface WifiTipCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WifiTipCard({
  icon,
  title,
  description,
}: WifiTipCardProps) {
  return (
    <div className="bg-card-bg border border-card-border rounded-2xl p-5 flex gap-4 items-start hover:shadow-md transition-shadow">
      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-sm text-foreground">{title}</h3>
        <p className="text-sm text-muted mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
