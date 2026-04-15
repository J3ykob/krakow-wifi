const en: Dictionary = {
  meta: {
    siteName: "CityCompass",
    tagline: "Your pocket guide to Kraków",
    description:
      "Free WiFi hotspots, transport, money tips, food and neighborhood guides for visitors to Kraków.",
  },
  nav: {
    home: "Home",
    wifi: "WiFi",
    transport: "Transport",
    food: "Food",
    areas: "Areas",
    money: "Money",
    connect: "Stay online",
    dayTrips: "Day trips",
    scams: "Scams",
    emergency: "Emergency",
    phrases: "Phrases",
    faq: "FAQ",
    about: "About",
    privacy: "Privacy",
    terms: "Terms",
  },
  bottomNav: {
    wifi: "WiFi",
    transport: "Transport",
    food: "Food",
    areas: "Areas",
  },
  switcher: {
    label: "Language",
  },
  consent: {
    title: "We value your privacy",
    body: "We use cookies for analytics and to show ads from Google. You can accept all, or reject non-essential cookies and continue with limited features.",
    accept: "Accept all",
    reject: "Reject non-essential",
    learn: "Read our Privacy Policy.",
  },
  related: {
    heading: "Related guides",
  },
  toc: {
    heading: "On this page",
  },
  affiliate: {
    disclosure:
      "This page contains affiliate links. If you book or buy through them, we may earn a small commission at no extra cost to you. We only recommend services we believe are useful for visitors to Kraków.",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built for travellers, not algorithms.",
  },
  common: {
    readMore: "Read more",
    backToTop: "Back to top",
    updated: "Updated",
    minRead: "min read",
    open: "Open",
    closed: "Closed",
    free: "Free",
    paid: "Paid",
  },
};

export default en;

export interface Dictionary {
  meta: { siteName: string; tagline: string; description: string };
  nav: {
    home: string;
    wifi: string;
    transport: string;
    food: string;
    areas: string;
    money: string;
    connect: string;
    dayTrips: string;
    scams: string;
    emergency: string;
    phrases: string;
    faq: string;
    about: string;
    privacy: string;
    terms: string;
  };
  bottomNav: { wifi: string; transport: string; food: string; areas: string };
  switcher: { label: string };
  consent: {
    title: string;
    body: string;
    accept: string;
    reject: string;
    learn: string;
  };
  related: { heading: string };
  toc: { heading: string };
  affiliate: { disclosure: string };
  footer: { rights: string; builtWith: string };
  common: {
    readMore: string;
    backToTop: string;
    updated: string;
    minRead: string;
    open: string;
    closed: string;
    free: string;
    paid: string;
  };
}
export type En = Dictionary;
