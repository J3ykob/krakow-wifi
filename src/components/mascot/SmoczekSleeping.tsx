export default function SmoczekSleeping({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Tail curled around */}
      <path d="M180 120 Q210 115 220 100 Q225 90 215 88 Q205 90 200 100 Q195 110 180 115" fill="#34d399" stroke="#059669" strokeWidth="2"/>
      <path d="M218 92 Q222 86 216 84" fill="#f0b429" stroke="#d4940a" strokeWidth="1.5"/>

      {/* Body - lying down */}
      <ellipse cx="120" cy="115" rx="65" ry="35" fill="#4ade80"/>
      <ellipse cx="120" cy="122" rx="45" ry="22" fill="#bbf7d0"/>
      <ellipse cx="120" cy="120" rx="38" ry="18" fill="#dcfce7" opacity="0.5"/>

      {/* Front paws tucked */}
      <ellipse cx="72" cy="135" rx="15" ry="8" fill="#22c55e"/>
      <ellipse cx="100" cy="137" rx="15" ry="8" fill="#22c55e"/>

      {/* Back paw */}
      <ellipse cx="165" cy="133" rx="15" ry="8" fill="#22c55e"/>

      {/* Wing draped over body */}
      <path d="M90 90 Q75 75 85 65 Q95 58 100 72 Q102 80 95 88" fill="#86efac" stroke="#22c55e" strokeWidth="1.5" opacity="0.6"/>

      {/* Head resting on paws */}
      <ellipse cx="75" cy="92" rx="38" ry="34" fill="#4ade80"/>
      <ellipse cx="75" cy="105" rx="22" ry="15" fill="#86efac"/>

      {/* Closed eyes - peaceful */}
      <path d="M58 85 Q65 80 72 85" stroke="#1e3a5f" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M80 85 Q87 80 94 85" stroke="#1e3a5f" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

      {/* Peaceful smile */}
      <path d="M65 107 Q75 114 85 107" stroke="#059669" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Nostrils */}
      <ellipse cx="70" cy="102" rx="2.5" ry="2" fill="#22c55e"/>
      <ellipse cx="80" cy="102" rx="2.5" ry="2" fill="#22c55e"/>

      {/* Horns */}
      <path d="M52 62 Q48 48 55 44 Q60 52 57 62" fill="#f0b429" stroke="#d4940a" strokeWidth="1.5"/>
      <path d="M95 65 Q99 51 92 47 Q87 55 89 65" fill="#f0b429" stroke="#d4940a" strokeWidth="1.5"/>

      {/* ZZZ */}
      <g className="animate-bounce" style={{animationDuration: '3s'}}>
        <text x="105" y="55" fill="#1e3a5f" fontSize="16" fontWeight="bold" opacity="0.3">z</text>
        <text x="118" y="42" fill="#1e3a5f" fontSize="20" fontWeight="bold" opacity="0.5">z</text>
        <text x="135" y="25" fill="#1e3a5f" fontSize="26" fontWeight="bold" opacity="0.7">z</text>
      </g>

      {/* Blush */}
      <ellipse cx="55" cy="95" rx="7" ry="4" fill="#fca5a5" opacity="0.3"/>
      <ellipse cx="95" cy="95" rx="7" ry="4" fill="#fca5a5" opacity="0.3"/>
    </svg>
  );
}
