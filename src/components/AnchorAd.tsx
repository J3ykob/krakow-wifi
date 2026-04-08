"use client";

import { useEffect, useRef } from "react";

interface AnchorAdProps {
  slot: string;
}

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

export default function AnchorAd({ slot }: AnchorAdProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded
    }
  }, []);

  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  const isConfigured = adsenseId && adsenseId !== "ca-pub-XXXXXXXXXXXXXXXX";

  if (!isConfigured) {
    return (
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/90 backdrop-blur border-t border-card-border">
        <div className="max-w-4xl mx-auto px-4 py-2 text-center text-xs text-muted">
          Sticky Anchor Ad &middot; {slot}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-40">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsenseId}
        data-ad-slot={slot}
        data-ad-format="autorelaxed"
        data-full-width-responsive="true"
      />
    </div>
  );
}
