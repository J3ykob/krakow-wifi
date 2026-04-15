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
      ? "Bolt, Uber i taxi w Krakowie — ceny i pułapki"
      : "Bolt, Uber and taxis in Kraków — real prices and traps",
    description: isPl
      ? "Bolt vs Uber vs klasyczna taksówka: realne ceny, jak unikać kombinacji z taksometrem i co zrobić, gdy aplikacja nie znajduje samochodu."
      : "Bolt vs Uber vs traditional taxi: real prices, how to avoid taxi meter scams, and what to do when no car shows up in the app.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/transport/taxi`,
      languages: {
        en: `${SITE_URL}/en/transport/taxi`,
        pl: `${SITE_URL}/pl/transport/taxi`,
      },
    },
  };
}

export default async function TaxiPage({
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
      path="/transport/taxi"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/transport`, label: "Transport" },
        { href: `/${t}/transport/taxi`, label: "Taxi" },
      ]}
      title={
        isPl
          ? "Bolt, Uber i taxi w Krakowie — co używać i ile to kosztuje"
          : "Bolt, Uber and taxis in Kraków — what to use, what it costs"
      }
      lede={
        isPl
          ? "Krótka odpowiedź: używaj Bolta. Długa odpowiedź — kiedy Uber, kiedy klasyczne taxi i jak rozpoznać postój, na którym kierowca przekręci taksometr — w środku."
          : "Short answer: use Bolt. Long answer — when Uber makes sense, when a real taxi rank works, and how to recognise the stands where the driver will mess with the meter — below."
      }
      updated="2026-04-14"
      toc={[
        { id: "bolt", label: "Bolt" },
        { id: "uber", label: "Uber" },
        { id: "taxi", label: isPl ? "Klasyczne taxi" : "Traditional taxis" },
        { id: "scams", label: isPl ? "Pułapki" : "Traps to avoid" },
        { id: "prices", label: isPl ? "Realne ceny" : "Real prices" },
      ]}
      faq={
        isPl
          ? [
              {
                q: "Czy Bolt jest tańszy niż taxi?",
                a: "Prawie zawsze tak. Wyjątek to godziny szczytu (piątek-sobota wieczór), kiedy Bolt włącza ceny dynamiczne x1.5-x2 i może wyjść drożej niż taksówka z postoju.",
              },
              {
                q: "Czy mogę zapłacić kartą za Bolta?",
                a: "Tak, karta lub Apple Pay / Google Pay z aplikacji. Możesz też wybrać 'gotówkę' przy zamówieniu.",
              },
              {
                q: "Kierowca nie ma reszty z 200 zł",
                a: "Klasyczna zagrywka. Płać kartą, jeśli to możliwe, lub upewnij się, że masz drobne. Większość krakowskich Boltów akceptuje karty.",
              },
            ]
          : [
              {
                q: "Is Bolt cheaper than a taxi?",
                a: "Almost always yes. The exception is rush hour (Friday and Saturday evenings) when Bolt switches to surge pricing 1.5-2x and can come out more expensive than a rank taxi.",
              },
              {
                q: "Can I pay by card in Bolt?",
                a: "Yes, card or Apple Pay / Google Pay from the app. You can also pick 'cash' when ordering.",
              },
              {
                q: "The driver has no change for a 200 zł note",
                a: "Classic move. Pay by card if you can, or make sure you have small bills. Most Kraków Bolt drivers accept cards.",
              },
            ]
      }
      related={[
        {
          href: `/${t}/transport/airport`,
          title: isPl ? "Lotnisko → centrum" : "Airport → city",
          description: isPl
            ? "Bolt z lotniska to 55-85 zł. Pociąg 17 zł. Wybierz mądrze."
            : "Bolt from the airport is 55-85 zł. The train is 17 zł. Choose wisely.",
        },
        {
          href: `/${t}/scams`,
          title: isPl ? "Oszustwa na turystach" : "Tourist scams",
          description: isPl
            ? "Pełna lista najczęstszych przekrętów, w tym taksometrowych."
            : "Full list of common scams, including the taxi-meter ones.",
        },
        {
          href: `/${t}/money`,
          title: isPl ? "Pieniądze, kantory, bankomaty" : "Money, kantors, ATMs",
          description: isPl
            ? "Jak nie stracić 12% w 'kantorze' przy Sukiennicach."
            : "How not to lose 12% at the 'kantor' next to the Cloth Hall.",
        },
      ]}
    >
      <h2 id="bolt">Bolt</h2>
      <p>
        {isPl
          ? "Bolt to dominująca aplikacja przewozowa w Krakowie. Ma najwięcej kierowców, najczęściej zatrzymuje pasażerów w 2-4 minuty od zamówienia, a ceny są przewidywalne. Działa tak samo jak Uber: zamawiasz, widzisz cenę z góry, płacisz w aplikacji."
          : "Bolt is the dominant rideshare app in Kraków. It has the most drivers, usually picks you up within 2-4 minutes, and prices are predictable. It works exactly like Uber: order, see the upfront price, pay in the app."}
      </p>
      <p>
        {isPl
          ? "Cena bazowa typowego krótkiego kursu w centrum (Rynek → Kazimierz, ~1.5 km): 12-18 zł. Z lotniska do centrum: 55-85 zł. Z dworca głównego do Wawelu: 15-22 zł. W godzinach szczytu surge potrafi podbić to o 50-100%."
          : "Typical short ride in the centre (Rynek → Kazimierz, ~1.5 km): 12-18 zł. Airport to centre: 55-85 zł. Main station to Wawel: 15-22 zł. In rush hour, surge pricing can add 50-100%."}
      </p>

      <h2 id="uber">Uber</h2>
      <p>
        {isPl
          ? "Uber jest dostępny, ale ma mniej kierowców niż Bolt, więc czasy oczekiwania są dłuższe. Ceny są porównywalne. Jeśli używasz Ubera w domu i masz dane karty, nic nie tracisz korzystając z niego — ale Bolt z reguły będzie szybszy."
          : "Uber is available but has fewer drivers than Bolt, so wait times are longer. Prices are comparable. If you use Uber at home and have your card on file, you lose nothing by sticking with it — but Bolt is usually faster."}
      </p>

      <h2 id="taxi">{isPl ? "Klasyczne taxi" : "Traditional taxis"}</h2>
      <p>
        {isPl
          ? "Działa kilka legalnych korporacji (iCar, Mega, Wawel). Mają stałe stawki: opłata startowa ~9 zł + 3-4 zł/km w dzień, więcej w nocy i w niedziele. Zamówiona przez telefon lub aplikację korporacyjną — uczciwa. Złapana z ulicy lub z postoju przy Rynku — często z 'pomyłkami' na taksometrze."
          : "Several licensed companies operate (iCar, Mega, Wawel). They have fixed tariffs: a start fee of ~9 zł plus 3-4 zł per km during the day, more at night and on Sundays. Ordered by phone or via the company app — honest. Hailed from the street or from the rank near Rynek — often comes with creative meter 'mistakes'."}
      </p>

      <h2 id="scams">{isPl ? "Pułapki" : "Traps to avoid"}</h2>
      <ul>
        <li>
          {isPl
            ? "'Pirat taxi' z postoju przy Rynku — auto bez logo korporacji, kierowca proponuje cenę ryczałt, zwykle dwukrotnie wyższą niż Bolt. Odmawiaj."
            : "'Pirate taxi' at the rank near Rynek — a car with no company logo, driver offers a flat rate twice the price of Bolt. Decline."}
        </li>
        <li>
          {isPl
            ? "Taksometr z 'tarifą 4' włączoną w dzień. Tarifa 4 to stawka świąteczno-nocna spoza miasta. Sprawdzaj, czy ekran taksometru pokazuje '1' (lub '2' w nocy)."
            : "Meter set to 'tariff 4' during the day. Tariff 4 is the holiday/night out-of-town rate. Check that the meter screen shows '1' (or '2' at night)."}
        </li>
        <li>
          {isPl
            ? "'Brak terminala płatniczego' — kierowca po przyjeździe oświadcza, że terminal nie działa, i chce gotówkę. Powiedz, że płaci w aplikacji albo wysiadasz. Nagle terminal działa."
            : "'Payment terminal is broken' — on arrival the driver claims the card reader doesn't work and asks for cash. Say you'll either pay in the app or walk away. The terminal magically starts working."}
        </li>
        <li>
          {isPl
            ? "Trasa 'okrężna'. Włącz nawigację w telefonie i obserwuj. Dłuższa trasa o 1-2 km dodaje 5-10 zł."
            : "Scenic detour. Open your phone navigation and watch. An extra 1-2 km adds 5-10 zł to the meter."}
        </li>
      </ul>

      <h2 id="prices">{isPl ? "Realne ceny — typowe trasy" : "Real prices — common routes"}</h2>
      <table>
        <thead>
          <tr>
            <th>{isPl ? "Trasa" : "Route"}</th>
            <th>Bolt</th>
            <th>Taxi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rynek → Kazimierz (Plac Nowy)</td>
            <td>12-18 zł</td>
            <td>18-25 zł</td>
          </tr>
          <tr>
            <td>Rynek → Wawel</td>
            <td>10-15 zł</td>
            <td>15-20 zł</td>
          </tr>
          <tr>
            <td>Rynek → {isPl ? "Fabryka Schindlera" : "Schindler Factory"}</td>
            <td>15-22 zł</td>
            <td>22-30 zł</td>
          </tr>
          <tr>
            <td>Rynek → Nowa Huta (Plac Centralny)</td>
            <td>30-45 zł</td>
            <td>40-55 zł</td>
          </tr>
          <tr>
            <td>Lotnisko → Rynek</td>
            <td>55-85 zł</td>
            <td>89-110 zł</td>
          </tr>
          <tr>
            <td>Rynek → Wieliczka (kopalnia soli)</td>
            <td>55-75 zł</td>
            <td>75-95 zł</td>
          </tr>
        </tbody>
      </table>
    </ArticleShell>
  );
}
