"use client";

import { useEffect, useState, useCallback } from "react";

type ConsentState = "granted" | "denied";

interface ConsentConfig {
  ad_storage: ConsentState;
  analytics_storage: ConsentState;
  ad_user_data: ConsentState;
  ad_personalization: ConsentState;
  functionality_storage: ConsentState;
  personalization_storage: ConsentState;
  security_storage: ConsentState;
}

const COOKIE_NAME = "cc_consent";
const GRANTED: ConsentConfig = {
  ad_storage: "granted",
  analytics_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  functionality_storage: "granted",
  personalization_storage: "granted",
  security_storage: "granted",
};
const DENIED: ConsentConfig = {
  ad_storage: "denied",
  analytics_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "granted",
};

function readCookie(): ConsentConfig | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE_NAME}=`));
  if (!m) return null;
  try {
    return JSON.parse(decodeURIComponent(m.split("=")[1]));
  } catch {
    return null;
  }
}

function writeCookie(c: ConsentConfig) {
  const expires = new Date();
  expires.setMonth(expires.getMonth() + 6);
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(c))};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function gtag(...args: unknown[]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(args);
}

interface Copy {
  title: string;
  body: string;
  accept: string;
  reject: string;
  learn: string;
  privacyHref: string;
}

export default function CookieConsent({ copy }: { copy: Copy }) {
  const [visible, setVisible] = useState(false);

  const push = useCallback((c: ConsentConfig) => {
    gtag("consent", "update", c);
    window.dispatchEvent(
      new CustomEvent("cc:consent", { detail: c }),
    );
  }, []);

  useEffect(() => {
    const stored = readCookie();
    if (stored) {
      push(stored);
    } else {
      setVisible(true);
    }
  }, [push]);

  const accept = () => {
    writeCookie(GRANTED);
    push(GRANTED);
    setVisible(false);
  };
  const reject = () => {
    writeCookie(DENIED);
    push(DENIED);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="consent-title"
      className="fixed inset-x-0 bottom-0 z-[9999] p-4 sm:p-6"
    >
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-2xl border border-card-border p-5">
        <h3 id="consent-title" className="font-semibold text-foreground text-sm">
          {copy.title}
        </h3>
        <p className="text-xs text-muted mt-1.5 leading-relaxed">{copy.body}</p>
        <div className="flex gap-2 mt-4">
          <button
            onClick={accept}
            className="flex-1 bg-primary text-white text-sm font-semibold py-2.5 px-4 rounded-xl hover:bg-primary-dark transition-colors"
          >
            {copy.accept}
          </button>
          <button
            onClick={reject}
            className="flex-1 border border-card-border text-foreground text-sm font-semibold py-2.5 px-4 rounded-xl hover:bg-slate-50 transition-colors"
          >
            {copy.reject}
          </button>
        </div>
        <p className="text-[10px] text-muted mt-3 text-center">
          <a
            href={copy.privacyHref}
            className="underline hover:text-foreground"
          >
            {copy.learn}
          </a>
        </p>
      </div>
    </div>
  );
}
