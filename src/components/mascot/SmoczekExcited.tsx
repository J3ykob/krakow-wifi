export default function SmoczekExcited({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 230" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Tail - wagging */}
      <g className="animate-[wiggle_0.5s_ease-in-out_infinite]" style={{transformOrigin: '40px 170px'}}>
        <path d="M45 170 Q20 175 10 160 Q5 150 15 145 Q25 140 35 150 Q40 158 45 165" fill="#34d399" stroke="#059669" strokeWidth="2"/>
        <path d="M12 148 Q8 142 14 138" fill="#f0b429" stroke="#d4940a" strokeWidth="1.5"/>
      </g>

      {/* Body - slightly bouncing */}
      <ellipse cx="100" cy="155" rx="55" ry="48" fill="#4ade80"/>
      <ellipse cx="100" cy="163" rx="35" ry="30" fill="#bbf7d0"/>
      <ellipse cx="100" cy="160" rx="28" ry="24" fill="#dcfce7" opacity="0.5"/>

      {/* Both arms up! */}
      <path d="M55 135 Q35 110 30 95 Q28 88 34 86 Q40 88 40 95 Q42 108 58 128" fill="#4ade80" stroke="#22c55e" strokeWidth="2"/>
      <path d="M145 135 Q165 110 170 95 Q172 88 166 86 Q160 88 160 95 Q158 108 142 128" fill="#4ade80" stroke="#22c55e" strokeWidth="2"/>

      {/* Star sparkles around hands */}
      <g className="animate-pulse">
        <path d="M25 82 L27 78 L29 82 L33 84 L29 86 L27 90 L25 86 L21 84Z" fill="#f0b429"/>
        <path d="M172 78 L174 74 L176 78 L180 80 L176 82 L174 86 L172 82 L168 80Z" fill="#f0b429"/>
        <path d="M18 92 L19 90 L20 92 L22 93 L20 94 L19 96 L18 94 L16 93Z" fill="#f0b429" opacity="0.6"/>
        <path d="M182 88 L183 86 L184 88 L186 89 L184 90 L183 92 L182 90 L180 89Z" fill="#f0b429" opacity="0.6"/>
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

      {/* Wings - spread wide */}
      <path d="M55 115 Q30 85 45 65 Q58 50 72 75 Q78 90 65 110" fill="#86efac" stroke="#22c55e" strokeWidth="1.5" opacity="0.8"/>
      <path d="M145 115 Q170 85 155 65 Q142 50 128 75 Q122 90 135 110" fill="#86efac" stroke="#22c55e" strokeWidth="1.5" opacity="0.8"/>

      {/* Head */}
      <ellipse cx="100" cy="98" rx="42" ry="38" fill="#4ade80"/>
      <ellipse cx="100" cy="113" rx="25" ry="18" fill="#86efac"/>

      {/* Eyes - wide and sparkly! */}
      <ellipse cx="82" cy="90" rx="14" ry="16" fill="white"/>
      <ellipse cx="118" cy="90" rx="14" ry="16" fill="white"/>
      <ellipse cx="84" cy="90" rx="9" ry="10" fill="#1e3a5f"/>
      <ellipse cx="116" cy="90" rx="9" ry="10" fill="#1e3a5f"/>
      <circle cx="87" cy="86" r="4" fill="white"/>
      <circle cx="119" cy="86" r="4" fill="white"/>
      <circle cx="82" cy="93" r="2" fill="white" opacity="0.5"/>
      <circle cx="114" cy="93" r="2" fill="white" opacity="0.5"/>

      {/* Nostrils */}
      <ellipse cx="93" cy="111" rx="3" ry="2.5" fill="#22c55e"/>
      <ellipse cx="107" cy="111" rx="3" ry="2.5" fill="#22c55e"/>

      {/* Big open smile */}
      <path d="M82 120 Q100 140 118 120" stroke="#059669" strokeWidth="2.5" fill="#bbf7d0" strokeLinecap="round"/>
      <path d="M90 122 Q100 128 110 122" fill="#f87171" opacity="0.4"/>

      {/* Blush */}
      <ellipse cx="68" cy="105" rx="8" ry="5" fill="#fca5a5" opacity="0.4"/>
      <ellipse cx="132" cy="105" rx="8" ry="5" fill="#fca5a5" opacity="0.4"/>

      {/* Horns */}
      <path d="M72 65 Q68 47 75 42 Q80 52 78 65" fill="#f0b429" stroke="#d4940a" strokeWidth="1.5"/>
      <path d="M128 65 Q132 47 125 42 Q120 52 122 65" fill="#f0b429" stroke="#d4940a" strokeWidth="1.5"/>

      {/* Spines */}
      <path d="M95 60 Q100 47 105 60" fill="#22c55e"/>
    </svg>
  );
}
