"use client";

import { useEffect, useState, useCallback } from "react";

type ConsentState = "granted" | "denied";

interface ConsentConfig {
  ad_storage: ConsentState;
  analytics_storage: ConsentState;
  ad_user_data: ConsentState;
  ad_personalization: ConsentState;
}

const COOKIE_NAME = "krakow_wifi_consent";
const CONSENT_GRANTED: ConsentConfig = {
  ad_storage: "granted",
  analytics_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
};
const CONSENT_DENIED: ConsentConfig = {
  ad_storage: "denied",
  analytics_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

function getStoredConsent(): ConsentConfig | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match.split("=")[1]));
  } catch {
    return null;
  }
}

function setConsentCookie(consent: ConsentConfig) {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(consent))};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function gtag(...args: unknown[]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(args);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  const pushConsent = useCallback((consent: ConsentConfig) => {
    gtag("consent", "update", consent);
  }, []);

  useEffect(() => {
    // Set default consent to denied (Consent Mode v2 requirement)
    gtag("consent", "default", CONSENT_DENIED);

    const stored = getStoredConsent();
    if (stored) {
      pushConsent(stored);
    } else {
      setVisible(true);
    }
  }, [pushConsent]);

  const handleAccept = () => {
    setConsentCookie(CONSENT_GRANTED);
    pushConsent(CONSENT_GRANTED);
    setVisible(false);
  };

  const handleReject = () => {
    setConsentCookie(CONSENT_DENIED);
    pushConsent(CONSENT_DENIED);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[9999] p-4 sm:p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-2xl border border-card-border p-5 sm:p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">
              We value your privacy
            </h3>
            <p className="text-xs text-muted mt-1 leading-relaxed">
              We use cookies and similar technologies to show you relevant ads
              and improve your experience. You can accept all cookies or choose
              to browse with limited functionality.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 bg-primary text-white text-sm font-semibold py-2.5 px-4 rounded-xl hover:bg-primary-dark transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={handleReject}
            className="flex-1 border border-card-border text-foreground text-sm font-semibold py-2.5 px-4 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Reject Non-Essential
          </button>
        </div>
        <p className="text-[10px] text-muted mt-3 text-center">
          Read our{" "}
          <a href="/privacy" className="underline hover:text-foreground">
            Privacy Policy
          </a>{" "}
          for more details.
        </p>
      </div>
    </div>
  );
}
