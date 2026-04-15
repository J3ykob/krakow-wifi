import type { Locale } from "@/i18n/config";

export interface SearchEntry {
  href: string;
  title: string;
  body: string;
  section: string;
}

const COMMON: Omit<SearchEntry, "title" | "body" | "section">[] = [
  { href: "" },
  { href: "/wifi" },
  { href: "/wifi/old-town" },
  { href: "/wifi/kazimierz" },
  { href: "/wifi/wawel" },
  { href: "/wifi/podgorze" },
  { href: "/wifi/nowa-huta" },
  { href: "/connect" },
  { href: "/transport" },
  { href: "/transport/airport" },
  { href: "/transport/mpk" },
  { href: "/transport/taxi" },
  { href: "/money" },
  { href: "/money/atm" },
  { href: "/areas" },
  { href: "/areas/old-town" },
  { href: "/areas/kazimierz" },
  { href: "/areas/wawel" },
  { href: "/areas/podgorze" },
  { href: "/areas/nowa-huta" },
  { href: "/food" },
  { href: "/food/milk-bars" },
  { href: "/food/pierogi" },
  { href: "/food/obwarzanek" },
  { href: "/day-trips" },
  { href: "/day-trips/auschwitz" },
  { href: "/day-trips/wieliczka" },
  { href: "/day-trips/zakopane" },
  { href: "/scams" },
  { href: "/emergency" },
  { href: "/phrases" },
  { href: "/faq" },
];

const TITLES_EN: Record<string, [string, string, string]> = {
  "": ["CityCompass — Kraków guide", "Free WiFi, transport, food, neighborhoods, day trips for Kraków visitors", "Home"],
  "/wifi": ["Free WiFi map", "80+ municipal hotspots, no password, no signup", "WiFi"],
  "/wifi/old-town": ["WiFi in the Old Town", "Densest hotspot grid in Kraków", "WiFi"],
  "/wifi/kazimierz": ["WiFi in Kazimierz", "Plac Nowy, Szeroka, Bernatka bridge", "WiFi"],
  "/wifi/wawel": ["WiFi at Wawel and the Vistula", "Riverbank coverage", "WiFi"],
  "/wifi/podgorze": ["WiFi in Podgórze", "Plac Bohaterów Getta, Schindler", "WiFi"],
  "/wifi/nowa-huta": ["WiFi in Nowa Huta", "Plac Centralny socialist realism", "WiFi"],
  "/connect": ["eSIM, SIM, roaming", "Airalo Holafly Saily Polish prepaid mobile data", "Connect"],
  "/transport": ["Getting around Kraków", "Trams buses Bolt taxi airport overview", "Transport"],
  "/transport/airport": ["Airport to city centre", "Train bus 300 taxi Bolt KRK Balice", "Transport"],
  "/transport/mpk": ["MPK tickets and zones", "Tram bus jakdojade mobiMPK validation fines", "Transport"],
  "/transport/taxi": ["Bolt Uber and taxis", "Real prices meter scams pickup", "Transport"],
  "/money": ["Money in Kraków", "Złoty PLN currency kantor exchange tipping", "Money"],
  "/money/atm": ["ATMs and DCC", "Euronet dynamic currency conversion bank fees", "Money"],
  "/areas": ["Kraków neighborhoods", "Old Town Kazimierz Wawel Podgórze Nowa Huta", "Areas"],
  "/areas/old-town": ["Old Town guide", "Rynek Główny St Mary's Cloth Hall Royal Route", "Areas"],
  "/areas/kazimierz": ["Kazimierz guide", "Jewish quarter synagogues Plac Nowy nightlife", "Areas"],
  "/areas/wawel": ["Wawel and Vistula guide", "Royal castle cathedral dragon riverbank", "Areas"],
  "/areas/podgorze": ["Podgórze guide", "Schindler MOCAK Krak Mound ghetto memorial", "Areas"],
  "/areas/nowa-huta": ["Nowa Huta guide", "Socialist realism Plac Centralny Lord's Ark", "Areas"],
  "/food": ["What to eat in Kraków", "Pierogi milk bars zapiekanka żurek bigos", "Food"],
  "/food/milk-bars": ["Milk bars (bary mleczne)", "Cheap traditional Polish lunch", "Food"],
  "/food/pierogi": ["Pierogi guide", "Ruskie meat varieties where to eat", "Food"],
  "/food/obwarzanek": ["Obwarzanek krakowski", "Kraków pretzel history blue carts", "Food"],
  "/day-trips": ["Day trips from Kraków", "Auschwitz Wieliczka Zakopane comparison", "Day trips"],
  "/day-trips/auschwitz": ["Auschwitz-Birkenau day trip", "Tickets transport memorial Oświęcim", "Day trips"],
  "/day-trips/wieliczka": ["Wieliczka Salt Mine", "UNESCO underground tour tickets", "Day trips"],
  "/day-trips/zakopane": ["Zakopane and the Tatras", "Mountain day trip Kasprowy Wierch Morskie Oko", "Day trips"],
  "/scams": ["Tourist scams in Kraków", "Kantor DCC menu swap taxi meter SIM", "Scams"],
  "/emergency": ["Emergency in Kraków", "112 pharmacy 24/7 hospital embassy passport", "Emergency"],
  "/phrases": ["Polish phrases", "50 essential phrases pronunciation greetings", "Phrases"],
  "/faq": ["FAQ", "Safety water language stay duration weather visa", "FAQ"],
};

const TITLES_PL: Record<string, [string, string, string]> = {
  "": ["CityCompass — przewodnik po Krakowie", "Darmowe WiFi, transport, jedzenie, dzielnice, wycieczki", "Start"],
  "/wifi": ["Mapa darmowego WiFi", "Ponad 80 hotspotów, bez hasła, bez rejestracji", "WiFi"],
  "/wifi/old-town": ["WiFi na Starym Mieście", "Najgęstsza siatka hotspotów w Krakowie", "WiFi"],
  "/wifi/kazimierz": ["WiFi na Kazimierzu", "Plac Nowy Szeroka kładka Bernatka", "WiFi"],
  "/wifi/wawel": ["WiFi na Wawelu i Wiśle", "Zasięg nad Wisłą", "WiFi"],
  "/wifi/podgorze": ["WiFi na Podgórzu", "Plac Bohaterów Getta Schindler", "WiFi"],
  "/wifi/nowa-huta": ["WiFi w Nowej Hucie", "Plac Centralny socrealizm", "WiFi"],
  "/connect": ["eSIM, SIM, roaming", "Airalo Holafly Saily polski prepaid internet mobilny", "Internet"],
  "/transport": ["Transport w Krakowie", "Tramwaje autobusy Bolt taxi lotnisko", "Transport"],
  "/transport/airport": ["Lotnisko do centrum", "Pociąg bus 300 taxi Bolt KRK Balice", "Transport"],
  "/transport/mpk": ["Bilety i strefy MPK", "Tramwaj autobus jakdojade mobiMPK kasowanie mandaty", "Transport"],
  "/transport/taxi": ["Bolt Uber i taxi", "Realne ceny taksometr oszustwa", "Transport"],
  "/money": ["Pieniądze w Krakowie", "Złoty PLN waluta kantor wymiana napiwki", "Pieniądze"],
  "/money/atm": ["Bankomaty i DCC", "Euronet dynamic currency conversion prowizje", "Pieniądze"],
  "/areas": ["Dzielnice Krakowa", "Stare Miasto Kazimierz Wawel Podgórze Nowa Huta", "Dzielnice"],
  "/areas/old-town": ["Stare Miasto", "Rynek Mariacka Sukiennice Droga Królewska", "Dzielnice"],
  "/areas/kazimierz": ["Kazimierz", "Dzielnica żydowska synagogi Plac Nowy klimat", "Dzielnice"],
  "/areas/wawel": ["Wawel i Wisła", "Zamek królewski katedra smok bulwary", "Dzielnice"],
  "/areas/podgorze": ["Podgórze", "Schindler MOCAK Kopiec Krakusa pomnik getta", "Dzielnice"],
  "/areas/nowa-huta": ["Nowa Huta", "Socrealizm Plac Centralny Arka Pana", "Dzielnice"],
  "/food": ["Co zjeść w Krakowie", "Pierogi bary mleczne zapiekanka żurek bigos", "Jedzenie"],
  "/food/milk-bars": ["Bary mleczne", "Tani tradycyjny polski obiad", "Jedzenie"],
  "/food/pierogi": ["Pierogi", "Ruskie z mięsem rodzaje gdzie zjeść", "Jedzenie"],
  "/food/obwarzanek": ["Obwarzanek krakowski", "Krakowski preclel historia niebieskie wózki", "Jedzenie"],
  "/day-trips": ["Wycieczki z Krakowa", "Auschwitz Wieliczka Zakopane porównanie", "Wycieczki"],
  "/day-trips/auschwitz": ["Auschwitz-Birkenau", "Bilety dojazd miejsce pamięci Oświęcim", "Wycieczki"],
  "/day-trips/wieliczka": ["Kopalnia Wieliczka", "UNESCO trasa podziemna bilety", "Wycieczki"],
  "/day-trips/zakopane": ["Zakopane i Tatry", "Wycieczka górska Kasprowy Wierch Morskie Oko", "Wycieczki"],
  "/scams": ["Oszustwa na turystach", "Kantor DCC menu taksometr SIM", "Oszustwa"],
  "/emergency": ["Pomoc w Krakowie", "112 apteka 24/7 szpital ambasada paszport", "Pomoc"],
  "/phrases": ["Polskie zwroty", "50 zwrotów wymowa pozdrowienia", "Zwroty"],
  "/faq": ["FAQ", "Bezpieczeństwo woda język czas wizyty pogoda wiza", "FAQ"],
};

export function buildSearchIndex(locale: Locale): SearchEntry[] {
  const titles = locale === "pl" ? TITLES_PL : TITLES_EN;
  return COMMON.map(({ href }) => {
    const data = titles[href] ?? ["", "", ""];
    return {
      href: `/${locale}${href}`,
      title: data[0],
      body: data[1],
      section: data[2],
    };
  });
}
