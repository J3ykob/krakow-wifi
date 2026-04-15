import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale, SITE_URL } from "@/i18n/config";
import ArticleShell from "@/components/ArticleShell";

const HotspotMap = dynamic(() => import("@/components/HotspotMap"), {
  loading: () => (
    <div className="w-full h-[420px] rounded-2xl border border-card-border bg-slate-100 grid place-items-center text-xs text-muted">
      Loading map…
    </div>
  ),
});

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
      ? "Darmowe WiFi w Krakowie — mapa miejskich hotspotów"
      : "Free WiFi in Kraków — interactive map of city hotspots",
    description: isPl
      ? "Interaktywna mapa ponad 80 darmowych miejskich hotspotów Wi-Fi w Krakowie. Filtruj po dzielnicy, sprawdź uwagi praktyczne, połącz się bez hasła."
      : "Interactive map of 80+ free municipal WiFi hotspots in Kraków. Filter by district, see practical notes, connect without a password.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/wifi`,
      languages: {
        en: `${SITE_URL}/en/wifi`,
        pl: `${SITE_URL}/pl/wifi`,
      },
    },
  };
}

export default async function WifiPage({
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
      path="/wifi"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/wifi`, label: isPl ? "Darmowe WiFi" : "Free WiFi" },
      ]}
      title={isPl ? "Darmowe WiFi w Krakowie" : "Free WiFi in Kraków"}
      lede={
        isPl
          ? "Kraków utrzymuje sieć ponad 80 darmowych hotspotów rozsianych po placach, parkach i przy ważnych obiektach. Tu jest mapa, filtr po dzielnicy i krótka instrukcja jak się połączyć."
          : "Kraków runs a network of 80+ free municipal WiFi hotspots scattered across squares, parks and key landmarks. Here is the map, the district filter, and a short guide on how to actually connect."
      }
      updated="2026-04-14"
      toc={[
        {
          id: "how",
          label: isPl ? "Jak się połączyć" : "How to connect",
        },
        {
          id: "map",
          label: isPl ? "Mapa hotspotów" : "Hotspot map",
        },
        {
          id: "tips",
          label: isPl ? "Tipy praktyczne" : "Practical tips",
        },
        {
          id: "limits",
          label: isPl ? "Co działa, a co nie" : "What works, what doesn't",
        },
      ]}
      faq={
        isPl
          ? [
              {
                q: "Czy WiFi jest naprawdę darmowe?",
                a: "Tak. Miasto Kraków utrzymuje sieć z budżetu publicznego. Brak opłat, brak rejestracji, brak limitu czasu.",
              },
              {
                q: "Jakie jest hasło?",
                a: "Nie ma hasła. Sieć HotSpot-Krakow jest otwarta. Po połączeniu może pojawić się strona powitalna z regulaminem do zaakceptowania.",
              },
              {
                q: "Czy to jest bezpieczne?",
                a: "Do nawigacji, map i przeglądania — tak. Do bankowości i wpisywania haseł — używaj VPN lub mobilnej transmisji danych. To otwarta sieć, tak jak każda inna.",
              },
              {
                q: "Co jeśli sieci nie ma na liście?",
                a: "Możliwe że jesteś za daleko od hotspota. Zasięg z reguły dochodzi do ~30 metrów. Spróbuj podejść bliżej środka placu lub innego oznaczonego punktu.",
              },
            ]
          : [
              {
                q: "Is the WiFi really free?",
                a: "Yes. The City of Kraków funds the network from the public budget. No fees, no signup, no time limit.",
              },
              {
                q: "What's the password?",
                a: "There is no password. The HotSpot-Krakow network is open. After connecting, a welcome page may appear asking you to accept the terms of use.",
              },
              {
                q: "Is it safe?",
                a: "For navigation, maps and browsing — yes. For banking or logins, use a VPN or your mobile data instead. It is an open network like any other.",
              },
              {
                q: "What if I can't see the network?",
                a: "You are probably too far from a hotspot. Coverage usually drops at ~30 metres. Try moving closer to the centre of the square or to another marked location.",
              },
            ]
      }
      related={[
        {
          href: `/${t}/connect`,
          title: isPl ? "eSIM, SIM i roaming" : "eSIM, SIM and roaming",
          description: isPl
            ? "Kiedy hotspoty nie wystarczą — pełen poradnik mobilnego internetu w Polsce."
            : "When hotspots aren't enough — full guide to mobile data in Poland.",
        },
        {
          href: `/${t}/wifi/old-town`,
          title: isPl ? "WiFi w Starym Mieście" : "WiFi in the Old Town",
          description: isPl
            ? "Najgęstsza siatka hotspotów w Krakowie."
            : "The densest hotspot grid in the city.",
        },
        {
          href: `/${t}/transport/airport`,
          title: isPl ? "Lotnisko → centrum" : "Airport → city centre",
          description: isPl
            ? "Co z WiFi w terminalu i w pociągu na Kraków Główny?"
            : "What about WiFi at the terminal and on the train to Kraków Główny?",
        },
        {
          href: `/${t}/scams`,
          title: isPl ? "Oszustwa na turystach" : "Tourist scams",
          description: isPl
            ? "Znajomy WiFi to nie jedyna pułapka. Sprawdź najczęstsze przekręty."
            : "WiFi safety is one piece — see the most common scams in Kraków too.",
        },
      ]}
    >
      <h2 id="how">{isPl ? "Jak się połączyć" : "How to connect"}</h2>
      <ol>
        <li>
          {isPl
            ? "Otwórz ustawienia WiFi w telefonie lub laptopie."
            : "Open WiFi settings on your phone or laptop."}
        </li>
        <li>
          {isPl ? (
            <>
              Znajdź sieć o nazwie <code>HotSpot-Krakow</code> i wybierz ją.
            </>
          ) : (
            <>
              Find the network named <code>HotSpot-Krakow</code> and select it.
            </>
          )}
        </li>
        <li>
          {isPl
            ? "Brak hasła — sieć jest otwarta."
            : "No password is needed — the network is open."}
        </li>
        <li>
          {isPl
            ? "Otwórz dowolną stronę. Pojawi się portal powitalny — zaakceptuj regulamin i klikaj dalej."
            : "Open any web page. A welcome portal appears — accept the terms and continue."}
        </li>
        <li>
          {isPl
            ? "Gotowe. Możesz korzystać tak długo jak chcesz."
            : "You're online. You can use it for as long as you want."}
        </li>
      </ol>

      <div className="callout callout--info">
        <strong>SSID:</strong> HotSpot-Krakow ·{" "}
        <strong>{isPl ? "Hasło" : "Password"}:</strong>{" "}
        {isPl ? "brak (sieć otwarta)" : "none (open network)"} ·{" "}
        <strong>{isPl ? "Cena" : "Price"}:</strong>{" "}
        {isPl ? "0 zł zawsze" : "0 zł, always"}
      </div>

      <h2 id="map">{isPl ? "Mapa hotspotów" : "Hotspot map"}</h2>
      <p>
        {isPl
          ? "Każda kropka to jeden hotspot. Filtruj po dzielnicy, kliknij kropkę, żeby zobaczyć szczegóły. Współrzędne pochodzą z OpenStreetMap, lista hotspotów z oficjalnego wykazu krakow.pl, a praktyczne uwagi — od nas."
          : "Each dot is one hotspot. Filter by district, tap a dot to see details. Coordinates come from OpenStreetMap, the hotspot list from the official krakow.pl directory, and the practical notes from us."}
      </p>

      <div className="not-prose my-6">
        <HotspotMap locale={t} />
      </div>

      <h2 id="tips">{isPl ? "Tipy praktyczne" : "Practical tips"}</h2>
      <ul>
        <li>
          {isPl
            ? "Zasięg jest punktowy — z reguły 20-30 metrów od oznaczonego miejsca. Jeśli nic nie widać, podejdź kilka metrów."
            : "Coverage is hyper-local — typically 20-30 metres from the marked location. If you see nothing, walk a few steps closer."}
        </li>
        <li>
          {isPl
            ? "Latem pod Sukiennicami sieć zwalnia po godzinie 18 — zbyt dużo turystów na jednym hotspocie."
            : "On summer evenings the Cloth Hall hotspot gets congested after 6 PM. Too many tourists on the same access point."}
        </li>
        <li>
          {isPl
            ? "W parkach (Planty, Błonia, Park Jordana) zasięg jest tylko wzdłuż ścieżek przy ławkach z oznaczeniem."
            : "In parks (Planty, Błonia, Park Jordana) you only get coverage along the paved paths near marked benches."}
        </li>
        <li>
          {isPl
            ? "Kawiarnie i restauracje oferują własne, prywatne WiFi — często szybsze. Pytaj o hasło przy zamówieniu."
            : "Cafés and restaurants offer their own private WiFi — often faster. Ask for the password when ordering."}
        </li>
        <li>
          {isPl
            ? "Lotnisko Balice ma osobną sieć Krakow Airport Free Wi-Fi — działa w terminalu, ale nie w pociągu do miasta."
            : "Kraków Airport has its own Krakow Airport Free Wi-Fi — it works in the terminal but not on the train into town."}
        </li>
      </ul>

      <h2 id="limits">{isPl ? "Co działa, a co nie" : "What works, what doesn't"}</h2>
      <p>
        {isPl
          ? "Miejskie hotspoty są dobre do nawigacji w Mapach Google, sprawdzania komunikatorów i przeglądania internetu. Są kiepskie do streamingu wideo i połączeń wideo — ruch jest ograniczany na hotspotach o dużym obciążeniu. Nie używaj ich do bankowości online ani do logowania się do wrażliwych serwisów bez VPN."
          : "Municipal hotspots are great for navigating with Google Maps, checking messengers and general browsing. They are poor for video streaming and video calls — bandwidth is throttled on heavily loaded access points. Don't use them for online banking or sensitive logins without a VPN."}
      </p>
      <p>
        {isPl
          ? "Jeśli planujesz dłuższy pobyt albo jedziesz do dzielnic z rzadszą siatką (Nowa Huta, peryferia), prawdziwie stabilny internet daje eSIM. Nasz przewodnik ma porównanie cen Airalo, Holafly i lokalnych SIM."
          : "If you are staying longer, or heading to districts with a sparser hotspot grid (Nowa Huta, the outskirts), an eSIM is the only way to get genuinely stable internet. Our guide compares Airalo, Holafly and local SIM prices."}
      </p>
    </ArticleShell>
  );
}
