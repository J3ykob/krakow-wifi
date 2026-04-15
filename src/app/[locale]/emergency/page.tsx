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
      ? "Pomoc w Krakowie — apteki 24/7, szpitale, ambasady, numery"
      : "Emergency in Kraków — 24/7 pharmacies, hospitals, embassies, numbers",
    description: isPl
      ? "Praktyczne adresy: apteki czynne 24/7, szpitale z izbą przyjęć, ambasady, numery alarmowe i co zrobić, jeśli zgubisz paszport."
      : "Practical contacts: 24/7 pharmacies, hospitals with ER, embassies, emergency numbers, and what to do if you lose your passport.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/emergency`,
      languages: {
        en: `${SITE_URL}/en/emergency`,
        pl: `${SITE_URL}/pl/emergency`,
      },
    },
  };
}

export default async function EmergencyPage({
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
      path="/emergency"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/emergency`, label: isPl ? "Pomoc" : "Emergency" },
      ]}
      title={
        isPl
          ? "Pomoc w Krakowie — strona, którą warto mieć w zakładkach"
          : "Emergency in Kraków — the page worth bookmarking"
      }
      lede={
        isPl
          ? "Numer alarmowy w Polsce to 112. Działa z każdego telefonu, w każdej sieci, bez karty SIM. Dyspozytor mówi po polsku i angielsku. Poniżej dodatkowe informacje, których potrzebujesz, jeśli coś pójdzie nie tak."
          : "The emergency number in Poland is 112. It works from any phone, on any network, with or without a SIM card. The dispatcher speaks Polish and English. Below are the extra contacts you may need if something goes wrong."
      }
      updated="2026-04-14"
      toc={[
        { id: "numbers", label: isPl ? "Numery alarmowe" : "Emergency numbers" },
        { id: "pharmacy", label: isPl ? "Apteki 24/7" : "24/7 pharmacies" },
        { id: "hospital", label: isPl ? "Szpitale" : "Hospitals" },
        { id: "embassies", label: isPl ? "Ambasady" : "Embassies" },
        { id: "passport", label: isPl ? "Zgubiony paszport" : "Lost passport" },
      ]}
    >
      <h2 id="numbers">{isPl ? "Numery alarmowe" : "Emergency numbers"}</h2>
      <ul>
        <li>
          <strong>112</strong> — {isPl ? "ogólny numer alarmowy" : "general emergency"}
        </li>
        <li>
          <strong>999</strong> — {isPl ? "pogotowie ratunkowe" : "ambulance"}
        </li>
        <li>
          <strong>998</strong> — {isPl ? "straż pożarna" : "fire brigade"}
        </li>
        <li>
          <strong>997</strong> — {isPl ? "policja" : "police"}
        </li>
        <li>
          <strong>986</strong> — {isPl ? "straż miejska" : "municipal police"}
        </li>
        <li>
          <strong>981</strong> — {isPl ? "pomoc drogowa" : "road assistance"}
        </li>
      </ul>
      <p>
        {isPl
          ? "Wszystkie te numery są bezpłatne. 112 łączy z dyspozytorem, który przekierowuje połączenie na właściwą służbę. Mówią po angielsku."
          : "All these numbers are free. 112 reaches a dispatcher who routes the call to the right service. They speak English."}
      </p>

      <h2 id="pharmacy">{isPl ? "Apteki czynne 24 godziny" : "Pharmacies open 24 hours"}</h2>
      <ul>
        <li>
          <strong>Apteka 24h Bonifratrów</strong> — Krakowska 41 ({isPl ? "Stradom, 5 min od Wawelu" : "Stradom, 5 min from Wawel"})
        </li>
        <li>
          <strong>Apteka Dworcowa</strong> — Pawia 5{" "}
          ({isPl ? "obok Galerii Krakowskiej i dworca" : "next to Galeria Krakowska and the train station"})
        </li>
        <li>
          <strong>Apteka Nowa Huta 24h</strong> — al. Jana Pawła II 53{" "}
          ({isPl ? "Nowa Huta" : "Nowa Huta"})
        </li>
        <li>
          <strong>Apteka Ziko 24h</strong> — Pilotów 6{" "}
          ({isPl ? "Olsza, na wschód od centrum" : "Olsza, east of the centre"})
        </li>
      </ul>
      <p>
        {isPl
          ? "Polski farmaceuta może wydać wiele leków bez recepty (paracetamol, ibuprofen, antybiotyki dla rany powierzchniowej, leki przeciwhistaminowe). Polskie nazwy często różnią się od zachodnich — najprościej pokazać opakowanie znanego leku w telefonie."
          : "A Polish pharmacist can dispense many medications without a prescription (paracetamol, ibuprofen, basic antibiotics for surface wounds, antihistamines). Polish brand names often differ from western ones — the easiest move is to show a photo of a familiar pill packet."}
      </p>

      <h2 id="hospital">{isPl ? "Szpitale z izbą przyjęć (SOR)" : "Hospitals with emergency rooms (SOR)"}</h2>
      <ul>
        <li>
          <strong>Szpital Uniwersytecki</strong> — Jakubowskiego 2 (
          {isPl ? "główny szpital miasta, na zachód od centrum" : "main city hospital, west of the centre"})
        </li>
        <li>
          <strong>Szpital im. Jana Pawła II</strong> — Prądnicka 80
        </li>
        <li>
          <strong>Szpital im. Narutowicza</strong> — Prądnicka 35-37
        </li>
        <li>
          <strong>Szpital Specjalistyczny im. S. Żeromskiego</strong> — os. Na Skarpie 66 (Nowa Huta)
        </li>
      </ul>
      <p>
        {isPl
          ? "Obywatele UE z ważną kartą EKUZ otrzymują leczenie na zasadach lokalnych — większość pomocy bezpłatnie. Spoza UE: zapłacisz na miejscu i odzyskasz koszty z ubezpieczenia."
          : "EU citizens with a valid EHIC card receive treatment at local-resident terms — most care free of charge. Non-EU: you pay on the spot and reclaim from your travel insurance."}
      </p>

      <h2 id="embassies">{isPl ? "Konsulaty i ambasady w Krakowie" : "Consulates and embassies in Kraków"}</h2>
      <p>
        {isPl
          ? "Większość ambasad jest w Warszawie, ale Kraków ma kilka konsulatów ogólnych, które obsłużą sprawy wizowe i wydadzą paszport zastępczy. Najważniejsze:"
          : "Most embassies are in Warsaw, but Kraków has several consulates general which can handle visa matters and issue an emergency passport. Key ones:"}
      </p>
      <ul>
        <li>
          <strong>{isPl ? "USA" : "USA"}:</strong> ul. Stolarska 9, +48 12 424 5100
        </li>
        <li>
          <strong>{isPl ? "Niemcy" : "Germany"}:</strong> ul. Stolarska 7, +48 12 424 3000
        </li>
        <li>
          <strong>{isPl ? "Wielka Brytania" : "United Kingdom"}:</strong> ul. św. Anny 9, +48 12 421 7030
        </li>
        <li>
          <strong>{isPl ? "Francja" : "France"}:</strong> ul. Stolarska 15, +48 12 424 5300
        </li>
        <li>
          <strong>{isPl ? "Włochy" : "Italy"}:</strong> ul. Wenecja 8
        </li>
        <li>
          <strong>{isPl ? "Ukraina" : "Ukraine"}:</strong> ul. Balicka 113C
        </li>
      </ul>
      <p>
        {isPl
          ? "Sprawdź zawsze aktualne dane przed udaniem się — adresy mogą się zmieniać."
          : "Always confirm current details before going — addresses may change."}
      </p>

      <h2 id="passport">{isPl ? "Co zrobić, jeśli zgubisz paszport" : "What to do if you lose your passport"}</h2>
      <ol>
        <li>
          {isPl
            ? "Zgłoś kradzież lub zgubienie na policji (997 lub osobiście w komendzie). Otrzymasz zaświadczenie po polsku i angielsku."
            : "Report the theft or loss to the police (997 or in person at any station). You'll receive a statement in Polish and English."}
        </li>
        <li>
          {isPl
            ? "Skontaktuj się z konsulatem swojego kraju (lista wyżej). Większość wydaje paszport zastępczy w 24-72 godziny."
            : "Contact your country's consulate (list above). Most issue an emergency passport in 24-72 hours."}
        </li>
        <li>
          {isPl
            ? "Z paszportem zastępczym możesz wyjechać tylko bezpośrednio do swojego kraju — nie używasz go jako normalnego paszportu."
            : "An emergency passport only allows direct travel back to your home country — it is not a normal passport."}
        </li>
      </ol>
    </ArticleShell>
  );
}
