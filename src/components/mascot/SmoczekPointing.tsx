export default function SmoczekPointing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Tail */}
      <path d="M45 170 Q20 180 8 170 Q2 162 12 155 Q22 148 35 155 Q40 160 45 165" fill="#34d399" stroke="#059669" strokeWidth="2"/>
      <path d="M10 158 Q5 152 11 148" fill="#f0b429" stroke="#d4940a" strokeWidth="1.5"/>

      {/* Body */}
      <ellipse cx="100" cy="155" rx="55" ry="50" fill="#4ade80"/>
      <ellipse cx="100" cy="165" rx="35" ry="32" fill="#bbf7d0"/>
      <ellipse cx="100" cy="162" rx="28" ry="25" fill="#dcfce7" opacity="0.5"/>

      {/* Left arm resting */}
      <path d="M55 155 Q42 160 38 165 Q35 170 40 172 Q45 170 55 162" fill="#4ade80" stroke="#22c55e" strokeWidth="2"/>

      {/* Right arm pointing right */}
      <path d="M145 140 Q165 130 178 125" fill="none" stroke="#22c55e" strokeWidth="2"/>
      <path d="M145 140 Q165 132 175 128 Q180 126 182 123" fill="#4ade80" stroke="#22c55e" strokeWidth="2"/>
      {/* Pointing finger */}
      <path d="M178 125 Q188 120 192 118" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>

      {/* Feet */}
      <ellipse cx="78" cy="200" rx="18" ry="10" fill="#22c55e"/>
      <ellipse cx="122" cy="200" rx="18" ry="10" fill="#22c55e"/>
      <circle cx="70" cy="198" r="4" fill="#16a34a"/>
      <circle cx="78" cy="196" r="4" fill="#16a34a"/>
      <circle cx="86" cy="198" r="4" fill="#16a34a"/>
      <circle cx="114" cy="198" r="4" fill="#16a34a"/>
      <circle cx="122" cy="196" r="4" fill="#16a34a"/>
      <circle cx="130" cy="198" r="4" fill="#16a34a"/>

      {/* Wings */}
      <path d="M60 120 Q45 95 55 80 Q65 68 75 85 Q80 95 70 115" fill="#86efac" stroke="#22c55e" strokeWidth="1.5" opacity="0.8"/>
      <path d="M140 120 Q155 95 145 80 Q135 68 125 85 Q120 95 130 115" fill="#86efac" stroke="#22c55e" strokeWidth="1.5" opacity="0.8"/>

      {/* Head - slightly turned right */}
      <ellipse cx="103" cy="100" rx="42" ry="38" fill="#4ade80"/>
      <ellipse cx="103" cy="115" rx="25" ry="18" fill="#86efac"/>

      {/* Eyes - looking right */}
      <ellipse cx="87" cy="92" rx="12" ry="14" fill="white"/>
      <ellipse cx="122" cy="92" rx="12" ry="14" fill="white"/>
      <ellipse cx="92" cy="93" rx="7" ry="8" fill="#1e3a5f"/>
      <ellipse cx="127" cy="93" rx="7" ry="8" fill="#1e3a5f"/>
      <circle cx="94" cy="89" r="3" fill="white"/>
      <circle cx="129" cy="89" r="3" fill="white"/>

      {/* Nostrils */}
      <ellipse cx="96" cy="113" rx="3" ry="2.5" fill="#22c55e"/>
      <ellipse cx="110" cy="113" rx="3" ry="2.5" fill="#22c55e"/>

      {/* Slight smile */}
      <path d="M90 120 Q103 130 116 120" stroke="#059669" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Horns */}
      <path d="M75 68 Q71 50 78 45 Q83 55 81 68" fill="#f0b429" stroke="#d4940a" strokeWidth="1.5"/>
      <path d="M131 68 Q135 50 128 45 Q123 55 125 68" fill="#f0b429" stroke="#d4940a" strokeWidth="1.5"/>

      {/* Spines */}
      <path d="M98 63 Q103 50 108 63" fill="#22c55e"/>
    </svg>
  );
}
