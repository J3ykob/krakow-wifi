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
    title: isPl ? "Regulamin" : "Terms of Use",
    description: isPl
      ? "Regulamin korzystania ze strony CityCompass."
      : "Terms of use for the CityCompass website.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/terms`,
      languages: {
        en: `${SITE_URL}/en/terms`,
        pl: `${SITE_URL}/pl/terms`,
      },
    },
  };
}

export default async function TermsPage({
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
      path="/terms"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/terms`, label: isPl ? "Regulamin" : "Terms" },
      ]}
      title={isPl ? "Regulamin korzystania ze strony" : "Terms of Use"}
      lede={
        isPl
          ? "Krótkie zasady korzystania z CityCompass. Pisane prosto, nie po prawniczemu."
          : "Short rules for using CityCompass. Written plainly, not in legalese."
      }
      updated="2026-04-14"
    >
      <h2>1. {isPl ? "O czym jest ten regulamin" : "What this document covers"}</h2>
      <p>
        {isPl
          ? "Niniejszy regulamin określa zasady korzystania ze strony citycompass.pl i wszystkich jej podstron."
          : "These terms govern your use of citycompass.pl and all its subpages."}
      </p>

      <h2>2. {isPl ? "Charakter informacyjny" : "Informational nature"}</h2>
      <p>
        {isPl
          ? "Wszystkie treści na CityCompass mają charakter informacyjny. Staramy się żeby były aktualne i precyzyjne, ale nie gwarantujemy, że ceny, godziny otwarcia, dostępność hotspotów czy inne dane są aktualne w chwili Twojej wizyty. Decyzje podejmujesz na własne ryzyko."
          : "All CityCompass content is informational. We try to keep it current and accurate, but we do not guarantee that prices, opening hours, hotspot availability, or other data are correct at the time of your visit. You make decisions at your own risk."}
      </p>

      <h2>3. {isPl ? "Brak doradztwa profesjonalnego" : "Not professional advice"}</h2>
      <p>
        {isPl
          ? "Treści dotyczące zdrowia (apteki, szpitale), pieniędzy (kantory, bankomaty) i bezpieczeństwa nie zastępują porady profesjonalnej. W razie wątpliwości skontaktuj się z odpowiednią instytucją."
          : "Content about health (pharmacies, hospitals), money (kantors, ATMs) and safety is not a substitute for professional advice. When in doubt, contact the relevant institution."}
      </p>

      <h2>4. {isPl ? "Linki afiliacyjne i reklamy" : "Affiliate links and ads"}</h2>
      <p>
        {isPl
          ? "Strona zawiera linki afiliacyjne (oznaczone jako sponsored) oraz reklamy displayowe Google AdSense. Wynagrodzenie z tych źródeł nie wpływa na rzetelność informacji w artykułach. Linki afiliacyjne polecamy tylko do produktów i usług, którym ufamy."
          : "The site contains affiliate links (marked as sponsored) and Google AdSense display ads. Revenue from these sources does not influence the integrity of article content. We only recommend affiliate products and services we trust."}
      </p>

      <h2>5. {isPl ? "Prawa autorskie" : "Copyright"}</h2>
      <p>
        {isPl
          ? "Treści (teksty, grafika, układ) są chronione prawami autorskimi. Możesz cytować fragmenty z podaniem źródła. Reprodukcja całej strony lub większych fragmentów wymaga zgody — napisz do nas."
          : "Content (text, graphics, layout) is protected by copyright. You may quote excerpts with attribution. Republishing the whole page or substantial parts requires permission — write to us."}
      </p>

      <h2>6. {isPl ? "Ograniczenie odpowiedzialności" : "Limitation of liability"}</h2>
      <p>
        {isPl
          ? "W maksymalnym dozwolonym przez prawo zakresie nie ponosimy odpowiedzialności za jakiekolwiek szkody pośrednie, przypadkowe lub wynikowe wynikające z korzystania z naszej strony."
          : "To the maximum extent permitted by law, we are not liable for any indirect, incidental or consequential damages arising from your use of our site."}
      </p>

      <h2>7. {isPl ? "Zmiany regulaminu" : "Changes to these terms"}</h2>
      <p>
        {isPl
          ? "Możemy aktualizować ten regulamin. Aktualna wersja jest zawsze dostępna pod adresem citycompass.pl/terms. Data ostatniej aktualizacji jest podana u góry tej strony."
          : "We may update these terms. The current version is always at citycompass.pl/terms. The last updated date is shown at the top of this page."}
      </p>

      <h2>8. {isPl ? "Prawo właściwe i jurysdykcja" : "Governing law and jurisdiction"}</h2>
      <p>
        {isPl
          ? "Niniejszy regulamin podlega prawu polskiemu. Spory rozstrzygają sądy właściwe dla siedziby operatora strony."
          : "These terms are governed by Polish law. Disputes are resolved by the courts having jurisdiction over the site operator's seat."}
      </p>

      <h2>9. {isPl ? "Kontakt" : "Contact"}</h2>
      <p>
        Email: <a href="mailto:hello@citycompass.pl">hello@citycompass.pl</a>
      </p>
    </ArticleShell>
  );
}
