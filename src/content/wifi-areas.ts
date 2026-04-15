import type { District } from "./hotspots";

export interface WifiAreaContent {
  slug: string;
  district: District;
  titleEn: string;
  titlePl: string;
  ledeEn: string;
  ledePl: string;
  bestForEn: string[];
  bestForPl: string[];
  bodyEn: { h: string; p: string }[];
  bodyPl: { h: string; p: string }[];
}

export const WIFI_AREAS: WifiAreaContent[] = [
  {
    slug: "old-town",
    district: "old-town",
    titleEn: "Free WiFi in Kraków Old Town",
    titlePl: "Darmowe WiFi w krakowskim Starym Mieście",
    ledeEn:
      "The Old Town has the densest grid of free hotspots in the whole city. Wherever you stand on Rynek Główny, you are within a few metres of a working signal — but density does not always equal speed. Here is what to expect, and where to actually park yourself with a laptop.",
    ledePl:
      "Stare Miasto ma najgęstszą siatkę darmowych hotspotów w całym Krakowie. Gdziekolwiek stoisz na Rynku Głównym, jesteś kilka metrów od działającego sygnału — ale gęstość to nie to samo co prędkość. Oto czego się spodziewać i gdzie naprawdę usiąść z laptopem.",
    bestForEn: [
      "Quick Google Maps lookups while walking the historic loop",
      "Buying tram tickets in the mobiMPK / jakdojade apps",
      "Sending postcards via WhatsApp from a bench on Planty",
    ],
    bestForPl: [
      "Szybki rzut oka w Mapy Google podczas spaceru po historycznej pętli",
      "Kupowanie biletów MPK w aplikacjach mobiMPK / jakdojade",
      "Pisanie z ławki na Plantach przez WhatsApp",
    ],
    bodyEn: [
      {
        h: "Where the signal is strongest",
        p: "On Rynek Główny the most reliable spot is the row of benches around Adam Mickiewicz statue, in front of the Cloth Hall. Plac Mariacki — directly behind St. Mary's Basilica — is a close second, and far less crowded. If you need a quiet seat, walk one block north to Plac Szczepański. The signal there is identical, the foot traffic isn't.",
      },
      {
        h: "Planty: the green ring",
        p: "Planty is the park belt that loops around the Old Town where the medieval walls used to stand. There are at least four marked hotspots along the loop. The benches near the Floriańska Gate and around the Jagiellonian University buildings are the best — shaded, with a steady signal and not too crowded outside of student exam season.",
      },
      {
        h: "What about underground or indoor places?",
        p: "City hotspots are outdoor only. Inside the Cloth Hall, in the Rynek Underground museum, in churches and in the Royal Route's many tunnels you will lose signal completely. Most museums offer their own free WiFi at the entrance — ask at the ticket counter.",
      },
      {
        h: "Speed reality check",
        p: "Around lunchtime in summer you should expect 1-3 Mbps on a busy hotspot — enough for maps, messengers, and basic browsing, not enough for HD video streaming. After 22:00, when the cafés thin out, the same access point routinely does 10-15 Mbps.",
      },
    ],
    bodyPl: [
      {
        h: "Gdzie sygnał jest najmocniejszy",
        p: "Na Rynku Głównym najpewniejszym miejscem jest rząd ławek przy pomniku Adama Mickiewicza, naprzeciwko Sukiennic. Plac Mariacki — bezpośrednio za Bazyliką — jest drugim miejscem, znacznie mniej tłocznym. Jeśli potrzebujesz spokoju, przejdź jedną przecznicę na północ do Placu Szczepańskiego. Sygnał tam jest identyczny, ruchu turystycznego znacznie mniej.",
      },
      {
        h: "Planty: zielony pas",
        p: "Planty to park otaczający Stare Miasto, biegnący tam, gdzie kiedyś stały mury miejskie. W całej pętli jest co najmniej cztery oznaczone hotspoty. Ławki przy Bramie Floriańskiej i wokół budynków UJ są najlepsze — cień, stabilny sygnał i nie za dużo ludzi poza sesją.",
      },
      {
        h: "A pod ziemią albo w środku?",
        p: "Miejskie hotspoty są wyłącznie zewnętrzne. W Sukiennicach, w Podziemiach Rynku, w kościołach i w wielu zaułkach Drogi Królewskiej tracisz sygnał całkowicie. Większość muzeów oferuje własne darmowe WiFi przy wejściu — pytaj w kasie.",
      },
      {
        h: "Realne prędkości",
        p: "W porze obiadowej latem licz na 1-3 Mb/s na obciążonym hotspocie — wystarczy do map, komunikatorów i przeglądania, nie wystarczy do streamingu HD. Po godz. 22, kiedy kawiarnie pustoszeją, ten sam punkt bez problemu wyciąga 10-15 Mb/s.",
      },
    ],
  },
  {
    slug: "kazimierz",
    district: "kazimierz",
    titleEn: "Free WiFi in Kazimierz",
    titlePl: "Darmowe WiFi na Kazimierzu",
    ledeEn:
      "Kazimierz, Kraków's historic Jewish quarter, has fewer hotspots than the Old Town but the ones it has are placed exactly where you actually stop walking — squares, courtyards and the bridge to Podgórze. Coverage is good and the access points are usually less congested.",
    ledePl:
      "Kazimierz, historyczna dzielnica żydowska Krakowa, ma mniej hotspotów niż Stare Miasto, ale te, które ma, są ustawione dokładnie tam, gdzie naprawdę przystajesz — na placach, w podwórkach i przy moście do Podgórza. Zasięg jest dobry, a punkty z reguły mniej zatłoczone.",
    bestForEn: [
      "Sitting on Plac Nowy with a zapiekanka and a Google Translate camera",
      "Looking up Schindler-related sites before crossing Bernatka bridge",
      "Hunting for klezmer concerts and updating your map",
    ],
    bestForPl: [
      "Siedzenie na Placu Nowym z zapiekanką i kamerą Google Translate",
      "Sprawdzanie miejsc związanych ze Schindlerem przed przejściem przez Kładkę Bernatka",
      "Szukanie koncertów klezmerskich i aktualizacja mapy",
    ],
    bodyEn: [
      {
        h: "Plac Nowy is the anchor",
        p: "The whole district orbits around Plac Nowy, the rectangular square with the round red-brick market hall in the middle. The hotspot covers the whole square plus the first few metres of every street that flows out of it. If you are staying in Kazimierz, this is the spot you'll keep coming back to.",
      },
      {
        h: "Ulica Szeroka — the historic core",
        p: "Szeroka is technically a long, wide square rather than a street. It is lined with restaurants and synagogues, and there is reliable WiFi all the way down its length. A good place to plan your evening or check the schedule of the Galicia Jewish Museum a few hundred metres further east.",
      },
      {
        h: "The Bernatka footbridge",
        p: "The pedestrian bridge connecting Kazimierz with Podgórze has its own hotspot, which reaches both ramps. It is a great place to stop, take a photo of the padlocks tourists have left on the railings, and check whether you actually want to walk the extra ten minutes to the Schindler Factory or take a tram instead.",
      },
      {
        h: "Cafés vs. city WiFi",
        p: "Kazimierz is full of small cafés (Mleczarnia, Cheder, Hevre, Eszeweria) where the private WiFi is faster than the city hotspot. Order a coffee, ask for the password, and you've upgraded from 'good enough for maps' to 'good enough for video calls' for the cost of a 14 zł espresso.",
      },
    ],
    bodyPl: [
      {
        h: "Plac Nowy to centrum",
        p: "Cała dzielnica kręci się wokół Placu Nowego, prostokątnego placu z okrągłą halą targową z czerwonej cegły pośrodku. Hotspot obejmuje cały plac plus pierwsze kilka metrów każdej ulicy z niego wybiegającej. Jeśli mieszkasz na Kazimierzu, to jest miejsce, do którego będziesz wracać.",
      },
      {
        h: "Ulica Szeroka — historyczne serce",
        p: "Szeroka technicznie jest długim, szerokim placem, a nie ulicą. Wzdłuż niej stoją restauracje i synagogi, a stabilne WiFi działa na całej długości. Dobre miejsce żeby zaplanować wieczór albo sprawdzić plan Muzeum Galicja kilkaset metrów dalej na wschód.",
      },
      {
        h: "Kładka Bernatka",
        p: "Kładka łącząca Kazimierz z Podgórzem ma własny hotspot, który dochodzi do obu ramp. Świetne miejsce na chwilę przerwy, zdjęcie kłódek pozostawionych przez turystów i sprawdzenie, czy chcesz dojść jeszcze 10 minut do Fabryki Schindlera, czy może lepiej tramwajem.",
      },
      {
        h: "Kawiarnie kontra miejskie WiFi",
        p: "Kazimierz jest pełen małych kawiarni (Mleczarnia, Cheder, Hevre, Eszeweria), w których prywatne WiFi jest szybsze niż miejski hotspot. Zamów kawę, poproś o hasło i z 'wystarczy do map' przeskakujesz na 'wystarczy do połączeń wideo' za cenę espresso po 14 zł.",
      },
    ],
  },
  {
    slug: "wawel",
    district: "wawel",
    titleEn: "Free WiFi at Wawel and the Vistula boulevards",
    titlePl: "Darmowe WiFi na Wawelu i nad Wisłą",
    ledeEn:
      "Wawel Hill itself has limited coverage — the medieval walls block a lot — but the surrounding area, especially the Vistula riverbank, is one of the more reliable WiFi corridors in the city. If you're going to spend an afternoon here, you can stay online without dipping into your data.",
    ledePl:
      "Sam Wzgórze Wawelskie ma ograniczony zasięg — średniowieczne mury blokują sporo sygnału — ale okolica, zwłaszcza brzeg Wisły, to jeden z bardziej stabilnych korytarzy WiFi w mieście. Jeśli planujesz tu spędzić popołudnie, możesz być online bez naruszania pakietu danych.",
    bestForEn: [
      "Reading about the Sigismund Bell on the way up the cathedral hill",
      "Catching the ferry / boat schedules on the river",
      "Picnic on the boulevards with offline-friendly browsing",
    ],
    bestForPl: [
      "Czytanie o Dzwonie Zygmunta podczas wchodzenia na wzgórze",
      "Sprawdzanie rozkładu rejsów po Wiśle",
      "Piknik nad Wisłą z lekkim przeglądaniem internetu",
    ],
    bodyEn: [
      {
        h: "On the hill itself",
        p: "The signal works best in the open courtyard between the cathedral and the royal castle. Inside the cathedral, the dragon's den and the Crown Treasury you will lose it. The far end of the courtyard, near the panoramic viewpoint over the Vistula, is the most consistent spot.",
      },
      {
        h: "Bulwary Wiślane (the Vistula boulevards)",
        p: "Multiple hotspots are placed along the riverbank between Wawel and the Bernatka footbridge in Kazimierz. This is hands-down the nicest place in the centre to sit with a laptop on a sunny day. There are dozens of benches, the access points are not crowded, and the view is the river plus Wawel.",
      },
      {
        h: "Ulica Grodzka and the foot of the hill",
        p: "Where Grodzka meets the foot of Wawel, there is a small open area used by horse-drawn carriages — and a hotspot that covers it. A good place to wait for friends or to refresh your translation app before walking up.",
      },
    ],
    bodyPl: [
      {
        h: "Na samym wzgórzu",
        p: "Sygnał działa najlepiej na otwartym dziedzińcu między katedrą a zamkiem królewskim. W katedrze, Smoczej Jamie i Skarbcu go nie złapiesz. Najpewniejszy punkt to dalszy koniec dziedzińca, przy punkcie widokowym na Wisłę.",
      },
      {
        h: "Bulwary Wiślane",
        p: "Wzdłuż brzegu Wisły, między Wawelem a Kładką Bernatka na Kazimierzu, jest kilka hotspotów. To bezdyskusyjnie najlepsze miejsce w centrum, żeby usiąść z laptopem w słoneczny dzień. Dziesiątki ławek, niezatłoczone punkty, widok na rzekę i Wawel w tle.",
      },
      {
        h: "Ulica Grodzka i podnóże wzgórza",
        p: "Tam, gdzie Grodzka dochodzi do podnóża Wawelu, jest mały plac, na którym stoją dorożki — i hotspot, który go obejmuje. Dobre miejsce żeby poczekać na znajomych albo odświeżyć aplikację do tłumaczenia przed wejściem na górę.",
      },
    ],
  },
  {
    slug: "podgorze",
    district: "podgorze",
    titleEn: "Free WiFi in Podgórze",
    titlePl: "Darmowe WiFi na Podgórzu",
    ledeEn:
      "Podgórze, the southern bank of the Vistula, used to be a separate town and still feels like one. Coverage is patchier than in the Old Town but the hotspots are placed at exactly the points visitors care about — the main square, the ghetto memorial, and the entrance to Park Bednarskiego.",
    ledePl:
      "Podgórze, południowy brzeg Wisły, było kiedyś osobnym miastem i wciąż takie wrażenie sprawia. Zasięg jest rzadszy niż na Starym Mieście, ale hotspoty są w dokładnie tych punktach, na których zależy turystom — główny rynek, Plac Bohaterów Getta i wejście do Parku Bednarskiego.",
    bestForEn: [
      "Visiting Schindler's Factory and MOCAK",
      "Looking up the meaning of the empty chairs memorial",
      "Walking up to the Krak Mound for sunset",
    ],
    bestForPl: [
      "Zwiedzanie Fabryki Schindlera i MOCAK-u",
      "Sprawdzanie znaczenia pomnika pustych krzeseł",
      "Spacer na Kopiec Krakusa o zachodzie słońca",
    ],
    bodyEn: [
      {
        h: "Plac Bohaterów Getta",
        p: "The most important square in Podgórze for visitors — both because of its history (this is where the Kraków Ghetto deportation point was located) and because the Schindler Factory and MOCAK are a 5-minute walk away. The hotspot covers the whole square including the empty chairs memorial.",
      },
      {
        h: "Rynek Podgórski",
        p: "The main square of old Podgórze, dominated by the neo-Gothic St. Joseph's Church. A quiet, locals-mostly square with a working hotspot and several decent cafés around the perimeter.",
      },
      {
        h: "Park Bednarskiego",
        p: "A former limestone quarry turned into a leafy public park. The hotspot covers the lower terrace, where the playground and benches are. Above the quarry walls signal drops fast, so don't count on it for the upper trails.",
      },
      {
        h: "Walking to the Krak Mound",
        p: "If you walk up to the prehistoric Krak Mound for the panorama, you will lose city WiFi about a third of the way up. Download your maps or photos in advance.",
      },
    ],
    bodyPl: [
      {
        h: "Plac Bohaterów Getta",
        p: "Najważniejszy plac Podgórza dla turystów — zarówno z uwagi na historię (to tu znajdował się punkt zborny krakowskiego getta), jak i dlatego, że Fabryka Schindlera i MOCAK są 5 minut spacerem. Hotspot obejmuje cały plac wraz z pomnikiem pustych krzeseł.",
      },
      {
        h: "Rynek Podgórski",
        p: "Główny plac dawnego Podgórza, zdominowany przez neogotycki Kościół św. Józefa. Spokojny, raczej lokalny rynek z działającym hotspotem i kilkoma dobrymi kawiarniami wokół.",
      },
      {
        h: "Park Bednarskiego",
        p: "Dawny kamieniołom przekształcony w zielony park. Hotspot obejmuje dolny taras, gdzie jest plac zabaw i ławki. Powyżej skarp sygnał szybko spada — nie licz na niego na górnych ścieżkach.",
      },
      {
        h: "Spacer na Kopiec Krakusa",
        p: "Jeśli wybierasz się na prehistoryczny Kopiec Krakusa po panoramę, miejskie WiFi tracisz mniej więcej w jednej trzeciej drogi. Pobierz mapy i zdjęcia wcześniej.",
      },
    ],
  },
  {
    slug: "nowa-huta",
    district: "nowa-huta",
    titleEn: "Free WiFi in Nowa Huta",
    titlePl: "Darmowe WiFi w Nowej Hucie",
    ledeEn:
      "Nowa Huta, the planned socialist-realist district built in the 1950s, sits about 8 km east of the Old Town. Hotspot density is lower here than in the centre, but the few that exist are placed on the most important plazas — and getting online for half an hour is enough to navigate the whole district.",
    ledePl:
      "Nowa Huta, planowo zbudowana w latach 50. dzielnica socrealistyczna, leży około 8 km na wschód od Starego Miasta. Gęstość hotspotów jest tu mniejsza niż w centrum, ale te, które są, stoją na najważniejszych placach — a pół godziny online wystarczy, żeby nawigować po całej dzielnicy.",
    bestForEn: [
      "Reading the layout of Plac Centralny while standing in its middle",
      "Finding the Lord's Ark church on a map",
      "Looking up tram timings back to the centre",
    ],
    bestForPl: [
      "Czytanie układu Placu Centralnego stojąc w jego środku",
      "Znajdowanie Arki Pana na mapie",
      "Sprawdzanie powrotnego tramwaju do centrum",
    ],
    bodyEn: [
      {
        h: "Plac Centralny is the heart",
        p: "The whole district was designed to radiate from Plac Centralny (officially named after Ronald Reagan, but everyone still calls it Plac Centralny). The hotspot covers the entire plaza. Stand in the middle, look down each of the five avenues, and you'll understand the urban plan immediately.",
      },
      {
        h: "Aleja Róż",
        p: "The pedestrian boulevard running north from Plac Centralny. There is a hotspot at the southern end. This is also where the famous statue of Lenin used to stand until 1989.",
      },
      {
        h: "Getting around without WiFi",
        p: "Once you walk away from Plac Centralny, you'll be relying on offline maps until you reach a tram stop. Download the Nowa Huta tile in Google Maps before you leave the centre, and screenshot the locations of the steel mill admin building, the Lord's Ark church and the Cyprian Bazylik square if you want to see them all.",
      },
      {
        h: "How to get there",
        p: "Tram lines 4, 10, 14, 16 and 22 reach Plac Centralny from the centre in 25-30 minutes. A single 20-minute MPK ticket (4 zł) does it. See our MPK guide for the ticket details.",
      },
    ],
    bodyPl: [
      {
        h: "Plac Centralny to serce",
        p: "Cała dzielnica została zaprojektowana tak, żeby promieniować z Placu Centralnego (oficjalnie im. Ronalda Reagana, ale i tak wszyscy mówią Plac Centralny). Hotspot obejmuje cały plac. Stań pośrodku, spójrz wzdłuż każdej z pięciu alej i od razu zrozumiesz układ urbanistyczny.",
      },
      {
        h: "Aleja Róż",
        p: "Deptak biegnący na północ od Placu Centralnego. Hotspot stoi na południowym końcu. To również miejsce, gdzie do 1989 roku stał słynny pomnik Lenina.",
      },
      {
        h: "Poruszanie się bez WiFi",
        p: "Jak odejdziesz od Placu Centralnego, będziesz zależny od map offline aż do następnego przystanku tramwajowego. Pobierz region Nowej Huty w Mapach Google przed wyjazdem z centrum i zrób zrzut ekranu lokalizacji budynku administracyjnego huty, Arki Pana i Placu Cypriana Bazylika, jeśli chcesz je wszystkie zobaczyć.",
      },
      {
        h: "Jak tam dojechać",
        p: "Tramwaje 4, 10, 14, 16 i 22 docierają na Plac Centralny z centrum w 25-30 minut. Wystarczy bilet MPK 20-minutowy za 4 zł. Szczegóły w naszym przewodniku po MPK.",
      },
    ],
  },
];

export function getWifiArea(slug: string): WifiAreaContent | undefined {
  return WIFI_AREAS.find((a) => a.slug === slug);
}
