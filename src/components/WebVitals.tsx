"use client";

import { useReportWebVitals } from "next/web-vitals";

export default function WebVitals() {
  useReportWebVitals((metric) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (typeof w.gtag === "function") {
      w.gtag("event", metric.name, {
        value: Math.round(
          metric.name === "CLS" ? metric.value * 1000 : metric.value,
        ),
        event_label: metric.id,
        non_interaction: true,
      });
    }
    if (typeof w.plausible === "function") {
      w.plausible(`webvital:${metric.name}`, {
        props: {
          value: Math.round(
            metric.name === "CLS" ? metric.value * 1000 : metric.value,
          ),
          rating: metric.rating,
        },
      });
    }
  });

  return null;
}
