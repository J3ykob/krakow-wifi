export default function SmoczekWaving({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Tail */}
      <path d="M45 170 Q20 175 10 160 Q5 150 15 145 Q25 140 35 150 Q40 158 45 165" fill="#34d399" stroke="#059669" strokeWidth="2"/>
      <path d="M12 148 Q8 142 14 138" fill="#f0b429" stroke="#d4940a" strokeWidth="1.5"/>

      {/* Body */}
      <ellipse cx="100" cy="155" rx="55" ry="50" fill="#4ade80"/>
      <ellipse cx="100" cy="155" rx="55" ry="50" fill="url(#bodyGrad)" opacity="0.3"/>

      {/* Belly */}
      <ellipse cx="100" cy="165" rx="35" ry="32" fill="#bbf7d0"/>
      <ellipse cx="100" cy="162" rx="28" ry="25" fill="#dcfce7" opacity="0.5"/>

      {/* Left arm */}
      <path d="M55 145 Q40 135 35 125 Q33 120 38 118 Q43 116 45 122 Q48 130 58 138" fill="#4ade80" stroke="#22c55e" strokeWidth="2"/>

      {/* Right arm (waving!) */}
      <g className="animate-[wave_1s_ease-in-out_infinite]" style={{transformOrigin: '145px 130px'}}>
        <path d="M145 145 Q160 125 155 105 Q153 95 148 90" fill="#4ade80" stroke="#22c55e" strokeWidth="2"/>
        {/* Hand */}
        <circle cx="148" cy="88" r="8" fill="#4ade80" stroke="#22c55e" strokeWidth="2"/>
        <path d="M142 83 Q140 78 143 76" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
        <path d="M148 81 Q148 75 151 74" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
        <path d="M154 83 Q156 78 153 76" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
      </g>

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

      {/* Head */}
      <ellipse cx="100" cy="100" rx="42" ry="38" fill="#4ade80"/>

      {/* Snout */}
      <ellipse cx="100" cy="115" rx="25" ry="18" fill="#86efac"/>

      {/* Eyes */}
      <ellipse cx="82" cy="92" rx="12" ry="14" fill="white"/>
      <ellipse cx="118" cy="92" rx="12" ry="14" fill="white"/>
      <ellipse cx="85" cy="93" rx="7" ry="8" fill="#1e3a5f"/>
      <ellipse cx="115" cy="93" rx="7" ry="8" fill="#1e3a5f"/>
      <circle cx="87" cy="89" r="3" fill="white"/>
      <circle cx="117" cy="89" r="3" fill="white"/>

      {/* Nostrils */}
      <ellipse cx="93" cy="113" rx="3" ry="2.5" fill="#22c55e"/>
      <ellipse cx="107" cy="113" rx="3" ry="2.5" fill="#22c55e"/>

      {/* Smile */}
      <path d="M85 122 Q100 135 115 122" stroke="#059669" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Horns */}
      <path d="M72 68 Q68 50 75 45 Q80 55 78 68" fill="#f0b429" stroke="#d4940a" strokeWidth="1.5"/>
      <path d="M128 68 Q132 50 125 45 Q120 55 122 68" fill="#f0b429" stroke="#d4940a" strokeWidth="1.5"/>

      {/* Spines */}
      <path d="M95 63 Q100 50 105 63" fill="#22c55e"/>
      <path d="M92 65 Q100 48 108 65" fill="#34d399" opacity="0.5"/>

      {/* WiFi signals from mouth */}
      <g opacity="0.6" className="animate-pulse">
        <path d="M125 118 Q135 115 140 108" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4"/>
        <path d="M128 122 Q142 118 150 108" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
        <path d="M130 126 Q148 122 158 110" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8"/>
      </g>

      <defs>
        <radialGradient id="bodyGrad" cx="0.4" cy="0.3">
          <stop offset="0%" stopColor="white"/>
          <stop offset="100%" stopColor="transparent"/>
        </radialGradient>
      </defs>
    </svg>
  );
}
