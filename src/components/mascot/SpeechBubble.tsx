interface SpeechBubbleProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
}

export default function SpeechBubble({
  children,
  direction = "left",
  className = "",
}: SpeechBubbleProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="bg-white rounded-3xl px-6 py-4 shadow-lg border-2 border-[#e8dcc8] relative">
        {children}
        {/* Triangle pointer */}
        <div
          className={`absolute bottom-[-12px] ${direction === "left" ? "left-8" : "right-8"} w-0 h-0`}
          style={{
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderTop: "14px solid white",
            filter: "drop-shadow(0 2px 1px rgba(0,0,0,0.06))",
          }}
        />
        <div
          className={`absolute bottom-[-14px] ${direction === "left" ? "left-8" : "right-8"} w-0 h-0`}
          style={{
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderTop: "14px solid #e8dcc8",
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );
}
