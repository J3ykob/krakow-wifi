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
    title: isPl
      ? "Bankomaty w Krakowie — jak unikać 8% prowizji DCC"
      : "ATMs in Kraków — how to avoid the 8% DCC fee",
    description: isPl
      ? "Jak korzystać z bankomatów w Krakowie i nie dać się oskubać dynamic currency conversion. Które banki są bezpieczne, dlaczego unikać Euronet."
      : "How to use Kraków ATMs without falling for dynamic currency conversion. Which banks are safe, why to avoid Euronet machines.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/money/atm`,
      languages: {
        en: `${SITE_URL}/en/money/atm`,
        pl: `${SITE_URL}/pl/money/atm`,
      },
    },
  };
}

export default async function AtmPage({
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
      path="/money/atm"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/money`, label: isPl ? "Pieniądze" : "Money" },
        { href: `/${t}/money/atm`, label: "ATM" },
      ]}
      title={
        isPl
          ? "Bankomaty w Krakowie i pułapka DCC"
          : "ATMs in Kraków and the DCC trap"
      }
      lede={
        isPl
          ? "Wypłata z bankomatu to zwykle najtańszy sposób na zdobycie złotówek — pod jednym warunkiem: musisz świadomie odmówić 'dynamic currency conversion'. Bo jeśli się zgodzisz, automat doliczy Ci 5-12% za sam fakt zobaczenia salda w euro. Tu jest 90-sekundowa instrukcja."
          : "Withdrawing from an ATM is usually the cheapest way to get złoty — on one condition: you must explicitly refuse 'dynamic currency conversion'. If you accept, the machine will charge you 5-12% on top, just for showing your balance in euro. Here is the 90-second guide."
      }
      updated="2026-04-14"
      toc={[
        { id: "what-is-dcc", label: "DCC — what it is" },
        { id: "how-to-refuse", label: isPl ? "Jak odmówić" : "How to refuse" },
        { id: "good-bad", label: isPl ? "Dobre i złe banki" : "Good and bad ATMs" },
        { id: "fees", label: isPl ? "Prowizje banku" : "Bank fees" },
      ]}
      related={[
        {
          href: `/${t}/money`,
          title: isPl ? "Pieniądze — pełen poradnik" : "Money — full guide",
          description: isPl
            ? "Kantory, karty, napiwki i kurs."
            : "Kantors, cards, tipping and the exchange rate.",
        },
        {
          href: `/${t}/scams`,
          title: isPl ? "Oszustwa na turystach" : "Tourist scams",
          description: isPl
            ? "DCC to nie jedyna pułapka."
            : "DCC is not the only trap.",
        },
      ]}
    >
      <h2 id="what-is-dcc">DCC — {isPl ? "co to jest" : "what it is"}</h2>
      <p>
        {isPl
          ? "Dynamic Currency Conversion (DCC) to opcja, którą bankomat (lub terminal w restauracji) zaproponuje Ci, jeśli wykryje, że Twoja karta jest wydana w innej walucie niż złoty. Pyta: 'czy chcesz, żebyśmy przewalutowali to na euro/funta/dolara po naszym kursie?'. Brzmi pomocnie — jest pułapką."
          : "Dynamic Currency Conversion (DCC) is an option that an ATM (or a restaurant card terminal) offers you when it detects your card is issued in a currency other than złoty. It asks: 'do you want us to convert this to your home currency at our rate?'. Sounds helpful — it's a trap."}
      </p>
      <p>
        {isPl
          ? "Kurs DCC jest zawsze gorszy niż kurs Visa/Mastercard, którego użyje Twój własny bank, jeśli zostawisz transakcję w złotych. Różnica to zwykle 5-12%. Na 500 zł wypłaty to 25-60 zł podarowane bankomatowi za nic."
          : "The DCC rate is always worse than the Visa/Mastercard rate your own bank will use if you let the transaction settle in złoty. The gap is usually 5-12%. On a 500 zł withdrawal that's 25-60 zł handed to the ATM operator for nothing."}
      </p>

      <h2 id="how-to-refuse">{isPl ? "Jak odmówić" : "How to refuse"}</h2>
      <p>
        {isPl
          ? "Po wpisaniu PIN-u i kwoty bankomat pokaże ekran z dwoma opcjami:"
          : "After entering your PIN and amount, the ATM will show a screen with two options:"}
      </p>
      <ul>
        <li>
          {isPl ? (
            <>
              <strong>'With conversion'</strong> / 'I accept the rate of X EUR'{" "}
              — kliknij <strong>NIE</strong>. To jest DCC.
            </>
          ) : (
            <>
              <strong>'With conversion'</strong> / 'I accept the rate of X EUR'{" "}
              — click <strong>NO</strong>. This is DCC.
            </>
          )}
        </li>
        <li>
          {isPl ? (
            <>
              <strong>'Without conversion'</strong> / 'Continue in PLN' — kliknij{" "}
              <strong>TAK</strong>. To jest opcja, którą chcesz.
            </>
          ) : (
            <>
              <strong>'Without conversion'</strong> / 'Continue in PLN' — click{" "}
              <strong>YES</strong>. This is what you want.
            </>
          )}
        </li>
      </ul>
      <div className="callout callout--info">
        <strong>{isPl ? "Zasada" : "Rule"}:</strong>{" "}
        {isPl
          ? "Zawsze wybieraj opcję rozliczenia w PLN. Twój bank użyje prawdziwego kursu Visa/Mastercard, który jest tylko ułamek procenta od kursu NBP."
          : "Always choose to settle in PLN. Your own bank will use the real Visa/Mastercard rate, which is fractions of a percent away from NBP."}
      </div>

      <h2 id="good-bad">{isPl ? "Dobre i złe bankomaty" : "Good and bad ATMs"}</h2>
      <p>
        <strong>{isPl ? "Bezpieczne (mała prowizja, uczciwe DCC)" : "Safe (low fees, fair DCC)"}:</strong>{" "}
        PKO BP, Pekao, Santander, mBank, ING, Millennium. {isPl ? "To są bankomaty rzeczywistych banków polskich. Wybór 'continue in PLN' działa." : "These are real Polish bank ATMs. Choosing 'continue in PLN' works."}
      </p>
      <p>
        <strong>{isPl ? "Unikaj" : "Avoid"}:</strong>{" "}
        {isPl
          ? "Euronet (żółto-niebieskie), Cashzone, ATM 24 i niezależne maszyny stojące na chodniku bez wnętrza banku. Domyślnie naliczają DCC i często mają ekrany zaprojektowane tak, żeby utrudnić Ci jego odmówienie."
          : "Euronet (yellow-blue), Cashzone, ATM 24 and any standalone machine on a sidewalk without a bank lobby. They default to DCC and often have screens designed to make refusing it confusing."}
      </p>

      <h2 id="fees">{isPl ? "Prowizje twojego banku" : "Your own bank's fees"}</h2>
      <p>
        {isPl
          ? "Niezależnie od bankomatu, twój bank w domu może doliczać własną prowizję za wypłatę z bankomatu zagranicznego. To zwykle 1-3% albo stała opłata 3-5 EUR. Sprawdź to przed wyjazdem. Karty fintechowe (Revolut, Wise, N26) zwykle pozwalają na pierwsze 200-400 EUR/miesiąc bez prowizji — dla pobytu w Krakowie to często wystarcza."
          : "Regardless of which ATM, your home bank may charge its own foreign withdrawal fee. Typically 1-3% or a flat 3-5 EUR. Check this before you leave. Fintech cards (Revolut, Wise, N26) usually allow the first 200-400 EUR per month with no fee — for a Kraków trip that is often enough."}
      </p>
    </ArticleShell>
  );
}
