"use client";

import { useEffect, useRef, useState } from "react";

interface AdBannerProps {
  slot: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  responsive?: boolean;
  className?: string;
  label?: string;
  lazy?: boolean;
  width?: number;
  height?: number;
  network?: "adsense" | "medianet";
}

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

export default function AdBanner({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  label = "Advertisement",
  lazy = false,
  width,
  height,
  network = "adsense",
}: AdBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);
  const [isVisible, setIsVisible] = useState(!lazy);

  // Lazy loading via IntersectionObserver
  useEffect(() => {
    if (!lazy || !containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [lazy]);

  // Push ad when visible
  useEffect(() => {
    if (!isVisible || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded yet
    }
  }, [isVisible]);

  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  const medianetId = process.env.NEXT_PUBLIC_MEDIANET_CUSTOMER_ID;

  const isConfigured =
    (network === "adsense" &&
      adsenseId &&
      adsenseId !== "ca-pub-XXXXXXXXXXXXXXXX") ||
    (network === "medianet" &&
      medianetId &&
      medianetId !== "XXXXXXXX");

  // Explicit dimensions to prevent CLS
  const containerStyle: React.CSSProperties = {
    minHeight: height ?? (format === "rectangle" ? 250 : 100),
    ...(width ? { width } : {}),
  };

  if (!isConfigured) {
    return (
      <div
        ref={containerRef}
        className={`ad-container ${className}`}
        style={containerStyle}
      >
        <div className="text-center text-sm text-muted p-4">
          <p className="font-medium">{label}</p>
          <p className="text-xs mt-1 opacity-60">
            {network === "medianet" ? "Media.net" : "AdSense"} &middot; {slot}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`ad-container ${className}`}
      style={containerStyle}
    >
      {isVisible && network === "adsense" && (
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={adsenseId}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      )}
      {isVisible && network === "medianet" && (
        <div id={`medianet-${slot}`} />
      )}
    </div>
  );
}
