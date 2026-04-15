import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale, SITE_URL } from "@/i18n/config";
import ArticleShell from "@/components/ArticleShell";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const isPl = locale === "pl";
  return {
    title: isPl ? "Polityka prywatności" : "Privacy Policy",
    description: isPl
      ? "Polityka prywatności CityCompass — jakie dane zbieramy, dlaczego, jak je chronimy i jakie masz prawa zgodnie z RODO."
      : "CityCompass privacy policy — what data we collect, why, how we protect it, and what your rights are under GDPR.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/privacy`,
      languages: {
        en: `${SITE_URL}/en/privacy`,
        pl: `${SITE_URL}/pl/privacy`,
      },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = locale as Locale;
  const isPl = t === "pl";

  return (
    <ArticleShell
      locale={t}
      path="/privacy"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/privacy`, label: isPl ? "Prywatność" : "Privacy" },
      ]}
      title={isPl ? "Polityka prywatności" : "Privacy Policy"}
      lede={
        isPl
          ? "CityCompass szanuje Twoją prywatność. Ten dokument tłumaczy w prostym języku, jakie dane zbieramy, dlaczego, jak długo i jakie masz prawa."
          : "CityCompass respects your privacy. This document explains, in plain language, what data we collect, why, for how long, and what rights you have."
      }
      updated="2026-04-14"
    >
      <h2>1. {isPl ? "Kto jest administratorem danych" : "Who controls the data"}</h2>
      <p>
        {isPl
          ? "Administratorem Twoich danych osobowych jest operator strony CityCompass (citycompass.pl). Kontakt: hello@citycompass.pl."
          : "The data controller is the operator of CityCompass (citycompass.pl). Contact: hello@citycompass.pl."}
      </p>

      <h2>2. {isPl ? "Jakie dane zbieramy" : "What data we collect"}</h2>
      <p>
        {isPl
          ? "Zbieramy dwie kategorie danych: techniczne dane przeglądania (anonimowe statystyki ruchu) oraz dane reklamowe (jeśli wyrazisz na to zgodę w bannerze cookie)."
          : "We collect two categories of data: technical browsing data (anonymous traffic statistics) and advertising data (only if you consent in the cookie banner)."}
      </p>
      <ul>
        <li>
          <strong>{isPl ? "Dane techniczne" : "Technical data"}:</strong>{" "}
          {isPl
            ? "adres IP (anonimizowany), typ przeglądarki, system operacyjny, źródło wejścia, czas wizyty, odwiedzone strony. Zbierane przez Plausible Analytics i (po uzyskaniu zgody) Google Analytics 4."
            : "IP address (anonymised), browser type, operating system, referrer, visit duration, pages visited. Collected by Plausible Analytics and (if you consent) Google Analytics 4."}
        </li>
        <li>
          <strong>{isPl ? "Dane reklamowe" : "Advertising data"}:</strong>{" "}
          {isPl
            ? "ciasteczka i identyfikatory używane przez Google AdSense do wyświetlania spersonalizowanych reklam. Aktywne tylko po Twojej wyraźnej zgodzie."
            : "cookies and identifiers used by Google AdSense to serve personalised ads. Active only after your explicit consent."}
        </li>
      </ul>

      <h2>3. {isPl ? "Dlaczego zbieramy te dane" : "Why we collect this data"}</h2>
      <ul>
        <li>
          {isPl
            ? "Aby wiedzieć, które artykuły są przydatne i jak je ulepszać."
            : "To know which articles are useful and how to improve them."}
        </li>
        <li>
          {isPl
            ? "Aby wykryć i ograniczyć abuse (boty, spam)."
            : "To detect and mitigate abuse (bots, spam)."}
        </li>
        <li>
          {isPl
            ? "Aby utrzymać darmowy dostęp do strony przez przychody z reklam (po Twojej zgodzie)."
            : "To keep the site free through ad revenue (after your consent)."}
        </li>
      </ul>

      <h2>4. {isPl ? "Podstawa prawna" : "Legal basis"}</h2>
      <p>
        {isPl
          ? "Anonimowe statystyki: prawnie uzasadniony interes administratora (art. 6 ust. 1 lit. f RODO). Dane reklamowe i analityczne (Google): zgoda użytkownika (art. 6 ust. 1 lit. a RODO). Możesz wycofać zgodę w dowolnym momencie poprzez ponowne otwarcie banera cookie lub wyczyszczenie ciasteczek."
          : "Anonymous statistics: legitimate interest of the controller (Art. 6(1)(f) GDPR). Advertising and analytics data (Google): user consent (Art. 6(1)(a) GDPR). You can withdraw consent at any time by reopening the cookie banner or clearing your browser cookies."}
      </p>

      <h2>5. {isPl ? "Z kim dzielimy się danymi" : "Who we share data with"}</h2>
      <ul>
        <li>
          <strong>Plausible Analytics</strong> — {isPl ? "anonimowa analityka, brak ciasteczek." : "cookieless anonymous analytics."}
        </li>
        <li>
          <strong>Google LLC (Google Analytics 4, Google AdSense)</strong> —{" "}
          {isPl
            ? "tylko po Twojej zgodzie. Google jest niezależnym administratorem części tych danych. Polityka prywatności Google: https://policies.google.com/privacy"
            : "only with your consent. Google is an independent controller for part of this data. Google's privacy policy: https://policies.google.com/privacy"}
        </li>
        <li>
          <strong>{isPl ? "Partnerzy afiliacyjni" : "Affiliate partners"}</strong> —{" "}
          {isPl
            ? "kliknięcie linku afiliacyjnego (oznaczonego jako 'sponsored') przekazuje informację o kliknięciu partnerowi (np. Airalo). Sami nie udostępniamy mu Twoich danych."
            : "clicking an affiliate link (marked 'sponsored') passes click information to the partner (e.g. Airalo). We do not share your other data with them."}
        </li>
        <li>
          <strong>Vercel</strong> — {isPl ? "host strony, przetwarza logi serwera." : "site host, processes server logs."}
        </li>
      </ul>

      <h2>6. {isPl ? "Ciasteczka" : "Cookies"}</h2>
      <p>
        {isPl
          ? "Strona używa minimalnych ciasteczek niezbędnych do działania (np. zapisanie Twojego wyboru zgody na cookies). Po Twojej zgodzie dochodzą ciasteczka analityczne (GA4) i reklamowe (Google AdSense). Kategorie ciasteczek można zmieniać poprzez ponowne otwarcie banera cookie."
          : "The site uses minimal cookies necessary to function (e.g. storing your cookie consent choice). After your consent, analytics (GA4) and advertising (Google AdSense) cookies are added. Cookie categories can be changed by reopening the cookie banner."}
      </p>

      <h2>7. {isPl ? "Twoje prawa (RODO)" : "Your rights under GDPR"}</h2>
      <ul>
        <li>{isPl ? "Prawo dostępu do swoich danych" : "Right to access your data"}</li>
        <li>{isPl ? "Prawo do sprostowania danych" : "Right to rectification"}</li>
        <li>{isPl ? "Prawo do usunięcia danych ('prawo do bycia zapomnianym')" : "Right to erasure ('right to be forgotten')"}</li>
        <li>{isPl ? "Prawo do ograniczenia przetwarzania" : "Right to restrict processing"}</li>
        <li>{isPl ? "Prawo do przenoszenia danych" : "Right to data portability"}</li>
        <li>{isPl ? "Prawo wycofania zgody w dowolnym momencie" : "Right to withdraw consent at any time"}</li>
        <li>
          {isPl
            ? "Prawo do złożenia skargi do organu nadzorczego (w Polsce: Prezes UODO, www.uodo.gov.pl)"
            : "Right to lodge a complaint with the supervisory authority (in Poland: the President of UODO, www.uodo.gov.pl)"}
        </li>
      </ul>
      <p>
        {isPl
          ? "Aby skorzystać z tych praw napisz na hello@citycompass.pl. Odpowiadamy w ciągu 30 dni."
          : "To exercise these rights write to hello@citycompass.pl. We reply within 30 days."}
      </p>

      <h2>8. {isPl ? "Okres przechowywania" : "Retention period"}</h2>
      <p>
        {isPl
          ? "Anonimowe dane analityczne: do 25 miesięcy. Logi serwera: do 30 dni. Ciasteczka zgody na cookies: do 6 miesięcy."
          : "Anonymous analytics: up to 25 months. Server logs: up to 30 days. Cookie consent: up to 6 months."}
      </p>

      <h2>9. {isPl ? "Zmiany w polityce" : "Changes to this policy"}</h2>
      <p>
        {isPl
          ? "Zmiany polityki publikujemy z datą aktualizacji u góry tej strony. Istotne zmiany komunikujemy przez baner cookie z prośbą o ponowne wyrażenie zgody."
          : "Policy changes are published with an updated date at the top of this page. Material changes are communicated via the cookie banner asking for renewed consent."}
      </p>
    </ArticleShell>
  );
}
