export interface AreaContent {
  slug: string;
  titleEn: string;
  titlePl: string;
  ledeEn: string;
  ledePl: string;
  bodyEn: { h: string; p: string }[];
  bodyPl: { h: string; p: string }[];
  seeEn: string[];
  seePl: string[];
  eatEn: string[];
  eatPl: string[];
  getThereEn: string;
  getTherePl: string;
}

export const AREAS: AreaContent[] = [
  {
    slug: "old-town",
    titleEn: "Old Town (Stare Miasto) — neighborhood guide",
    titlePl: "Stare Miasto — przewodnik po dzielnicy",
    ledeEn:
      "The medieval centre, anchored by the largest medieval town square in Europe. UNESCO since 1978. This is where most visitors spend their first half-day — and where the highest density of historic sights, cafés and tourist traps coexists in one square kilometre.",
    ledePl:
      "Średniowieczne centrum z największym średniowiecznym placem rynkowym w Europie. UNESCO od 1978. To właśnie tu większość turystów spędza pierwsze pół dnia — i to właśnie tu na jednym kilometrze kwadratowym mieści się największe nagromadzenie zabytków, kawiarni i pułapek na turystów.",
    bodyEn: [
      {
        h: "What it actually is",
        p: "The Old Town is the area enclosed by the Planty park belt, where the medieval city walls used to stand. It is roughly 800 m across, walkable in any direction in 10-15 minutes. The street grid still follows the 1257 charter that founded the modern city — the Rynek (main square) was deliberately placed at the centre, with major streets radiating out at right angles.",
      },
      {
        h: "The Royal Route",
        p: "The traditional ceremonial route runs from St. Florian's Church (north of the walls), through the Floriańska Gate, down Floriańska Street to the Rynek, then south along Grodzka and Kanonicza to Wawel Hill. Walking it end to end takes about 25 minutes without stops, or several hours with stops at every interesting building. It hits most of the main sights of the Old Town in one straight line.",
      },
      {
        h: "How long to spend",
        p: "Realistically, plan a full day for the Old Town if you want to see St. Mary's Basilica with its famous Veit Stoss altarpiece (pay 15 zł and go inside, the photos don't do it justice), the Cloth Hall both at street level and the underground museum, the Czartoryski Museum (Leonardo's Lady with an Ermine), and have lunch at a non-trap restaurant a block off the square. Half a day is enough if you only want the surface.",
      },
      {
        h: "Where the locals avoid",
        p: "Restaurants directly facing Rynek Główny are mostly tourist-priced and tourist-quality. Walk one block in any direction and prices drop 30-40% with no quality loss. The 'menu in 7 languages' is a reliable warning sign.",
      },
    ],
    bodyPl: [
      {
        h: "Co to właściwie jest",
        p: "Stare Miasto to obszar zamknięty pasem Plant, gdzie kiedyś stały mury miejskie. Ma około 800 metrów średnicy i da się go przejść w każdym kierunku w 10-15 minut. Układ ulic wciąż wynika z lokacji z 1257 roku — Rynek został celowo umieszczony pośrodku, a główne ulice rozchodzą się od niego pod kątem prostym.",
      },
      {
        h: "Droga Królewska",
        p: "Tradycyjna trasa ceremonialna biegnie od kościoła św. Floriana (na północ od murów), przez Bramę Floriańską, ulicą Floriańską do Rynku, a dalej Grodzką i Kanoniczą do wzgórza wawelskiego. Przejście całości bez przystanków zajmuje ok. 25 minut, z przystankami przy każdym interesującym budynku — kilka godzin. To prosta linia, która łapie większość głównych atrakcji Starego Miasta.",
      },
      {
        h: "Ile czasu zostawić",
        p: "Realistycznie planuj cały dzień, jeśli chcesz zobaczyć Bazylikę Mariacką z ołtarzem Wita Stwosza (zapłać 15 zł i wejdź — zdjęcia tego nie oddają), Sukiennice z poziomu ulicy i podziemia, Muzeum Czartoryskich (Dama z gronostajem Leonarda) oraz zjeść obiad w nie-pułapce o jedną przecznicę od Rynku. Pół dnia wystarczy, jeśli chcesz tylko powierzchnię.",
      },
      {
        h: "Gdzie nie chodzą lokalsi",
        p: "Restauracje z oknami wprost na Rynek Główny mają w większości ceny i jakość turystyczne. Wystarczy odejść o przecznicę w dowolnym kierunku, żeby ceny spadły o 30-40% bez straty jakości. 'Menu w 7 językach' to niezawodny znak ostrzegawczy.",
      },
    ],
    seeEn: [
      "St. Mary's Basilica (and the hejnał trumpet call from the tower, every hour)",
      "Cloth Hall (Sukiennice) — souvenir stalls upstairs, 19th-century Polish art museum on the second floor",
      "Rynek Underground museum — the 13th-century city beneath your feet",
      "Czartoryski Museum — Leonardo's Lady with an Ermine",
      "Wawel — technically a separate area but a 5-minute walk from the Royal Route",
      "Jagiellonian University Collegium Maius — courtyard free, museum 16 zł",
    ],
    seePl: [
      "Bazylika Mariacka (i hejnał z wieży, co godzinę)",
      "Sukiennice — stragany na parterze, na piętrze galeria sztuki polskiej XIX w.",
      "Podziemia Rynku — XIII-wieczne miasto pod stopami",
      "Muzeum Czartoryskich — Dama z gronostajem Leonarda",
      "Wawel — formalnie osobna dzielnica, ale 5 minut od Drogi Królewskiej",
      "Collegium Maius UJ — dziedziniec za darmo, muzeum 16 zł",
    ],
    eatEn: [
      "U Babci Maliny (Sławkowska 17) — proper Polish home cooking, no menu in 7 languages",
      "Pierogarnia Krakowiacy (Szewska 23) — varieties of pierogi for under 30 zł",
      "Hummus Amamamusi (Sławkowska) — vegan, surprisingly good, 25-35 zł a bowl",
      "Bunkier Café (terrace next to the Bunkier Sztuki gallery) — best café terrace in the centre",
    ],
    eatPl: [
      "U Babci Maliny (Sławkowska 17) — porządna polska kuchnia, bez menu w 7 językach",
      "Pierogarnia Krakowiacy (Szewska 23) — różne rodzaje pierogów do 30 zł",
      "Hummus Amamamusi (Sławkowska) — wege, zaskakująco dobre, 25-35 zł za miskę",
      "Bunkier Café (taras przy Bunkrze Sztuki) — najlepszy taras kawiarniany w centrum",
    ],
    getThereEn:
      "If you arrive at Kraków Główny train station, walk south through Galeria Krakowska mall and the Floriańska Gate to Rynek (10 minutes). Most tram and bus lines stop at Teatr Bagatela or Plac Wszystkich Świętych on the edge of the Old Town.",
    getTherePl:
      "Jeśli przyjeżdżasz na Kraków Główny, idź na południe przez Galerię Krakowską i Bramę Floriańską na Rynek (10 minut). Większość tramwajów i autobusów zatrzymuje się przy Teatrze Bagatela albo Placu Wszystkich Świętych na obrzeżach Starego Miasta.",
  },
  {
    slug: "kazimierz",
    titleEn: "Kazimierz — neighborhood guide",
    titlePl: "Kazimierz — przewodnik po dzielnicy",
    ledeEn:
      "Kraków's historic Jewish quarter and, since the 1990s, the city's most interesting nightlife district. Slower than the Old Town, denser with synagogues, klezmer, vintage shops and great food. Most visitors find it more atmospheric than Rynek itself.",
    ledePl:
      "Historyczna dzielnica żydowska Krakowa, a od lat 90. najciekawsza dzielnica nocnego życia. Wolniejsza niż Stare Miasto, gęstsza w synagogi, klezmer, sklepy vintage i dobre jedzenie. Większość turystów uważa ją za bardziej klimatyczną niż sam Rynek.",
    bodyEn: [
      {
        h: "Two histories on top of each other",
        p: "Kazimierz was founded in 1335 as a separate town. From the 15th century until the Holocaust it was the home of Kraków's Jewish community — at its peak, around 65,000 people lived here. The Holocaust destroyed that community; through the second half of the 20th century the district was largely abandoned. Schindler's List in 1993 turned it into a global tourist destination almost overnight, and it has been gentrifying steadily since.",
      },
      {
        h: "Plac Nowy is the centre of gravity",
        p: "The rectangular square with the round red-brick market hall (Okrąglak) in the middle is the heart of present-day Kazimierz. The Okrąglak sells zapiekanki — half-baguettes covered in mushrooms, cheese and ketchup — for around 15 zł. They're a Kraków institution and yes, you should try one. The square is ringed with bars: Alchemia, Mleczarnia, Eszeweria, Hevre — each with its own atmosphere.",
      },
      {
        h: "The synagogues",
        p: "There are seven surviving synagogues in Kazimierz. The Old Synagogue (the oldest in Poland, 15th century) is now a museum of Jewish history. The Remuh Synagogue with its old cemetery is the only one still actively used. Most charge a small entry fee (10-20 zł) which goes back to maintenance of the buildings.",
      },
      {
        h: "Beyond the obvious",
        p: "Walk down Józefa, Wąska and Bożego Ciała streets for the everyday Kazimierz — bookshops, vinyl, design studios, bars without English signs. Galicia Jewish Museum on Dajwór 18 is worth two hours: it focuses not on what the Jewish community lost, but on what it was.",
      },
    ],
    bodyPl: [
      {
        h: "Dwie historie warstwowo",
        p: "Kazimierz został założony w 1335 jako osobne miasto. Od XV wieku do Holokaustu był domem krakowskiej społeczności żydowskiej — w szczycie mieszkało tu ok. 65 000 osób. Holokaust zniszczył tę społeczność; przez drugą połowę XX wieku dzielnica była w dużej mierze opustoszała. Lista Schindlera w 1993 zmieniła ją w globalną atrakcję turystyczną niemal z dnia na dzień, i od tego czasu trwa stopniowa gentryfikacja.",
      },
      {
        h: "Plac Nowy to środek ciężkości",
        p: "Prostokątny plac z okrągłą halą targową z czerwonej cegły (Okrąglak) pośrodku to serce dzisiejszego Kazimierza. W Okrąglaku sprzedają zapiekanki — pół bagietki z pieczarkami, serem i keczupem — za ok. 15 zł. To krakowska instytucja i tak, powinieneś spróbować. Plac otaczają knajpy: Alchemia, Mleczarnia, Eszeweria, Hevre — każda z innym klimatem.",
      },
      {
        h: "Synagogi",
        p: "Na Kazimierzu zachowało się siedem synagog. Stara Synagoga (najstarsza w Polsce, XV w.) jest dziś muzeum historii Żydów krakowskich. Synagoga Remuh ze starym cmentarzem jest jedyną wciąż aktywnie używaną. Większość pobiera małą opłatę za wstęp (10-20 zł), która idzie na konserwację budynków.",
      },
      {
        h: "Poza tym, co oczywiste",
        p: "Przejdź się ulicami Józefa, Wąska i Bożego Ciała żeby zobaczyć codzienny Kazimierz — księgarnie, winyle, pracownie designu, knajpy bez angielskich szyldów. Muzeum Galicja przy ul. Dajwór 18 jest warte dwóch godzin: skupia się nie na tym, co społeczność żydowska straciła, ale na tym, czym była.",
      },
    ],
    seeEn: [
      "Plac Nowy with the Okrąglak market hall",
      "Old Synagogue and the Jewish Museum",
      "Remuh Synagogue and Cemetery",
      "Galicia Jewish Museum",
      "Tempel Synagogue (still active for high holidays)",
      "Bernatka Footbridge to Podgórze",
    ],
    seePl: [
      "Plac Nowy z Okrąglakiem",
      "Stara Synagoga i Muzeum Żydów Krakowskich",
      "Synagoga Remuh i cmentarz",
      "Muzeum Galicja",
      "Synagoga Tempel (wciąż aktywna w święta)",
      "Kładka Bernatka na Podgórze",
    ],
    eatEn: [
      "Hamsa (Szeroka 2) — modern Israeli, mid-priced",
      "Hummus Amamamusi (a second branch on Estery)",
      "Marchewka z Groszkiem (Sławkowska on the OT side, but also Mostowa) — cheap traditional",
      "Eszeweria (Józefa 9) — cocktails in a courtyard, not for food",
      "Zapiekanki Kazimierz at the Okrąglak — open until late",
    ],
    eatPl: [
      "Hamsa (Szeroka 2) — nowoczesna kuchnia izraelska, średnia półka",
      "Hummus Amamamusi (oddział przy Estery)",
      "Marchewka z Groszkiem (Mostowa) — taniej, tradycyjnie",
      "Eszeweria (Józefa 9) — koktajle na podwórku, nie na obiad",
      "Zapiekanki Kazimierz w Okrąglaku — otwarte do późna",
    ],
    getThereEn:
      "From the Old Town walk south down Stradomska / Krakowska — about 10 minutes. From the train station, tram 3 or 24 to Plac Wolnica or Stradomska. By Bolt from Rynek: 12-18 zł.",
    getTherePl:
      "Ze Starego Miasta idź na południe Stradomską / Krakowską — ok. 10 minut. Z dworca tramwaj 3 lub 24 do przystanku Plac Wolnica lub Stradom. Boltem z Rynku: 12-18 zł.",
  },
  {
    slug: "wawel",
    titleEn: "Wawel and the Vistula — neighborhood guide",
    titlePl: "Wawel i Wisła — przewodnik po dzielnicy",
    ledeEn:
      "Wawel Hill is the symbolic heart of the Polish state — a fortified limestone outcrop above the Vistula that has held a castle, a cathedral, royal tombs and a mythical dragon for over a thousand years. The boulevards along the river below are some of the nicest public space in central Kraków.",
    ledePl:
      "Wzgórze Wawelskie jest symbolicznym sercem państwa polskiego — wapienny próg nad Wisłą, na którym od ponad tysiąca lat stoi zamek, katedra, groby królewskie i mityczny smok. Bulwary nad rzeką poniżej to jedna z najprzyjemniejszych przestrzeni publicznych w centralnym Krakowie.",
    bodyEn: [
      {
        h: "What is on the hill",
        p: "Three things: the Wawel Royal Castle (a 16th-century Renaissance complex with multiple museum routes), the Wawel Cathedral (the coronation and burial place of Polish kings, with the famous Sigismund Bell in its tower), and the open courtyards in between which are free to enter. The view from the southern wall over the Vistula is one of the best photo spots in Kraków.",
      },
      {
        h: "How tickets work",
        p: "Each museum route inside the castle has a separate ticket (15-30 zł each). The cathedral has its own ticket (around 19 zł, which also gets you into the Royal Tombs and the bell tower). The courtyards are free. If you only have an hour, just walk the courtyards and the southern wall — that gives you 80% of what most visitors actually want.",
      },
      {
        h: "The dragon",
        p: "The Wawel Dragon (Smok Wawelski) is the city's mascot. The Smocza Jama (dragon's den) cave entrance is on the riverbank side of the hill, with a separate small ticket. The bronze dragon sculpture outside the cave breathes real fire every few minutes — kids love it.",
      },
      {
        h: "Bulwary Wiślane",
        p: "The Vistula riverbank below Wawel is a long pedestrian and cycling promenade with grass, benches and views. In summer it hosts open-air bars, food trucks and even floating barge venues. From here you can take the Bernatka Footbridge across to Podgórze in 8 minutes.",
      },
    ],
    bodyPl: [
      {
        h: "Co jest na wzgórzu",
        p: "Trzy rzeczy: Zamek Królewski na Wawelu (renesansowy kompleks z XVI wieku z kilkoma trasami muzealnymi), Katedra Wawelska (miejsce koronacji i pochówku polskich królów, ze słynnym Dzwonem Zygmunta w wieży) oraz otwarte dziedzińce między nimi, do których wstęp jest darmowy. Widok z południowego muru na Wisłę to jeden z najlepszych punktów fotograficznych w Krakowie.",
      },
      {
        h: "Jak działają bilety",
        p: "Każda trasa muzealna w zamku ma osobny bilet (15-30 zł). Katedra ma własny bilet (ok. 19 zł, w cenie groby królewskie i wieża z dzwonem). Dziedzińce są darmowe. Jeśli masz godzinę — przejdź się dziedzińcami i południowym murem; to daje 80% tego, czego większość turystów chce.",
      },
      {
        h: "Smok",
        p: "Smok Wawelski jest maskotką miasta. Wejście do Smoczej Jamy jest od strony Wisły, z osobnym małym biletem. Brązowa rzeźba smoka przed jaskinią co kilka minut zioniem prawdziwym ogniem — dzieci uwielbiają.",
      },
      {
        h: "Bulwary Wiślane",
        p: "Brzeg Wisły poniżej Wawelu to długa promenada dla pieszych i rowerzystów z trawą, ławkami i widokami. Latem działają tu plenerowe bary, food trucki, a nawet pływające barki-knajpy. Stąd przejdziesz Kładką Bernatka na Podgórze w 8 minut.",
      },
    ],
    seeEn: [
      "Wawel Royal Castle — Renaissance courtyard at minimum, plus 1-2 museum routes",
      "Wawel Cathedral and the Royal Tombs",
      "Sigismund Bell (climb the tower)",
      "Smocza Jama (dragon's den)",
      "Bulwary Wiślane riverside walk",
      "Manggha Museum of Japanese Art (across the river)",
    ],
    seePl: [
      "Zamek Królewski — minimum dziedziniec renesansowy, plus 1-2 trasy muzealne",
      "Katedra Wawelska i groby królewskie",
      "Dzwon Zygmunta (wejście na wieżę)",
      "Smocza Jama",
      "Bulwary Wiślane",
      "Muzeum Sztuki i Techniki Japońskiej Manggha (na drugim brzegu)",
    ],
    eatEn: [
      "Pod Wawelem (Św. Gertrudy 26-29) — large traditional Polish restaurant, decent for the area",
      "Pod Aniołami (Grodzka 35) — historic cellar restaurant, fine dining tier",
      "Manggha Café (across the river) — light lunch with a view of Wawel",
    ],
    eatPl: [
      "Pod Wawelem (Św. Gertrudy 26-29) — duża tradycyjna polska restauracja, przyzwoita jak na okolicę",
      "Pod Aniołami (Grodzka 35) — historyczna restauracja w piwnicach, fine dining",
      "Manggha Café (drugi brzeg) — lekki lunch z widokiem na Wawel",
    ],
    getThereEn:
      "From Rynek walk south down Grodzka — 8 minutes. From Kazimierz walk along the boulevards or take tram 3, 8, 24 to Stradom. From the train station, tram 18 or 22 to Stradom (5 minutes).",
    getTherePl:
      "Z Rynku Grodzką na południe — 8 minut. Z Kazimierza wzdłuż bulwarów lub tramwajem 3, 8, 24 do Stradom. Z dworca tramwaj 18 lub 22 do Stradom (5 minut).",
  },
  {
    slug: "podgorze",
    titleEn: "Podgórze — neighborhood guide",
    titlePl: "Podgórze — przewodnik po dzielnicy",
    ledeEn:
      "South of the Vistula, Podgórze used to be a separate town until 1915. Today it is the most important district in Kraków for the modern history of the Holocaust, and the location of two of the city's best museums — the Schindler Factory and MOCAK.",
    ledePl:
      "Na południe od Wisły, Podgórze do 1915 było osobnym miastem. Dziś to najważniejsza dzielnica Krakowa dla nowoczesnej historii Holokaustu, a także lokalizacja dwóch najlepszych muzeów miasta — Fabryki Schindlera i MOCAK-u.",
    bodyEn: [
      {
        h: "What to see and why",
        p: "Three sights make Podgórze worth the tram ride. Oskar Schindler's Enamel Factory has been turned into a powerful museum about Kraków under Nazi occupation (1939-1945). MOCAK, the Museum of Contemporary Art, sits literally next door and uses the former factory complex as exhibition space. And Plac Bohaterów Getta — a square covered in dozens of empty bronze chairs — marks the deportation point of the Kraków Ghetto.",
      },
      {
        h: "The Krak Mound",
        p: "On the southern edge of Podgórze stands the Krak Mound, a prehistoric earthen mound about 16 metres tall. The exact age and purpose are still debated by archaeologists, but the panorama from the top is the best 360° view of central Kraków, and entry is free. Plan 30-40 minutes for the walk up.",
      },
      {
        h: "Rynek Podgórski",
        p: "The original main square of old Podgórze is dominated by the neo-Gothic St. Joseph's Church. It is quieter than anything in the centre, with a few decent cafés and a feeling of being in a different city — which historically you would have been.",
      },
      {
        h: "Less obvious",
        p: "If you walk west from MOCAK along Lipowa Street, you reach the area being redeveloped as Zabłocie — old factories converted into restaurants, design shops and offices. Worth half an hour.",
      },
    ],
    bodyPl: [
      {
        h: "Co warto zobaczyć i dlaczego",
        p: "Trzy rzeczy sprawiają, że Podgórze jest warte podróży tramwajem. Fabryka Emalii Oskara Schindlera została przekształcona w mocne muzeum o Krakowie pod okupacją (1939-1945). MOCAK, Muzeum Sztuki Współczesnej, stoi dosłownie obok i wykorzystuje dawny kompleks fabryczny jako przestrzeń wystawienniczą. A Plac Bohaterów Getta — plac pokryty kilkudziesięcioma pustymi brązowymi krzesłami — upamiętnia punkt deportacji krakowskiego getta.",
      },
      {
        h: "Kopiec Krakusa",
        p: "Na południowych obrzeżach Podgórza wznosi się Kopiec Krakusa — prehistoryczny kopiec ziemny o wysokości około 16 metrów. Wiek i przeznaczenie wciąż są przedmiotem debat archeologów, ale panorama ze szczytu to najlepsza 360-stopniowa perspektywa centralnego Krakowa, a wstęp jest darmowy. Na podejście planuj 30-40 minut.",
      },
      {
        h: "Rynek Podgórski",
        p: "Pierwotny główny plac dawnego Podgórza, zdominowany przez neogotycki Kościół św. Józefa. Cichszy niż cokolwiek w centrum, z kilkoma dobrymi kawiarniami i poczuciem, że jest się w innym mieście — bo historycznie tak było.",
      },
      {
        h: "Mniej oczywiste",
        p: "Jeśli pójdziesz z MOCAK-u na zachód ulicą Lipową, dotrzesz do obszaru przekształcanego jako Zabłocie — dawne fabryki zamienione na restauracje, sklepy designerskie i biura. Warte pół godziny.",
      },
    ],
    seeEn: [
      "Schindler's Factory museum (book online — sells out daily)",
      "MOCAK Museum of Contemporary Art",
      "Plac Bohaterów Getta and the empty chairs memorial",
      "Eagle Pharmacy (Apteka pod Orłem) museum",
      "Krak Mound (free)",
      "Rynek Podgórski and St. Joseph's Church",
    ],
    seePl: [
      "Fabryka Schindlera (rezerwuj online — bilety codziennie się rozchodzą)",
      "MOCAK",
      "Plac Bohaterów Getta i pomnik pustych krzeseł",
      "Apteka pod Orłem",
      "Kopiec Krakusa (darmowy)",
      "Rynek Podgórski i Kościół św. Józefa",
    ],
    eatEn: [
      "Zakładka Bistro (Józefińska 2) — small French-leaning place with daily menu",
      "Drukarnia (Nadwiślańska 1) — café in a former print shop, weekend brunch",
      "Pizzeria Del Corso (Kalwaryjska 39) — surprisingly authentic Italian",
    ],
    eatPl: [
      "Zakładka Bistro (Józefińska 2) — mała knajpa o francuskim sznycie z codziennym menu",
      "Drukarnia (Nadwiślańska 1) — kawiarnia w dawnej drukarni, weekendowe brunche",
      "Pizzeria Del Corso (Kalwaryjska 39) — zaskakująco autentyczna kuchnia włoska",
    ],
    getThereEn:
      "From Kazimierz cross the Bernatka Footbridge — 8 minutes. From the centre take tram 3, 19, 24 or 50 to Plac Bohaterów Getta or Limanowskiego. By Bolt from Rynek: 15-22 zł.",
    getTherePl:
      "Z Kazimierza przejdź Kładkę Bernatka — 8 minut. Z centrum tramwaj 3, 19, 24 lub 50 do Placu Bohaterów Getta lub Limanowskiego. Boltem z Rynku: 15-22 zł.",
  },
  {
    slug: "nowa-huta",
    titleEn: "Nowa Huta — neighborhood guide",
    titlePl: "Nowa Huta — przewodnik po dzielnicy",
    ledeEn:
      "A planned socialist-realist city built from scratch in the 1950s as the workers' counterweight to bourgeois Kraków. Half an hour east of the Old Town by tram, Nowa Huta is the strangest, most architecturally cohesive and least touristy district in the city. If you have a second day in Kraków, this is the most rewarding place to spend half of it.",
    ledePl:
      "Planowo zbudowane od zera socrealistyczne miasto z lat 50., pomyślane jako robotnicza przeciwwaga dla burżuazyjnego Krakowa. Pół godziny tramwajem na wschód od Starego Miasta. Najdziwniejsza, najbardziej spójna architektonicznie i najmniej turystyczna dzielnica miasta. Jeśli masz drugi dzień w Krakowie, to najciekawsze miejsce, w którym możesz spędzić pół z nich.",
    bodyEn: [
      {
        h: "Why it exists",
        p: "After WWII, Kraków was politically suspect — too bourgeois, too Catholic, too academic for the new communist government. The decision was made to build, right next to it, an entirely new socialist 'workers' city around a giant steel mill (Nowa Huta means 'new steelworks'). The steel mill went up first, the housing followed, and the entire urban plan was drawn from a single moment in 1949 by a single architect, Tadeusz Ptaszycki. The result is the most cohesive socialist-realist urban ensemble in Europe outside the former USSR.",
      },
      {
        h: "Plac Centralny",
        p: "The whole district radiates from Plac Centralny (officially named after Ronald Reagan since 2004, but everyone still calls it Plac Centralny). Five wide avenues meet here, and the symmetrical neoclassical apartment blocks around the square are pure socialist realism. Stand in the middle and you can read the urban plan in a single glance.",
      },
      {
        h: "The Lord's Ark",
        p: "About 2 km north-west of Plac Centralny stands one of the most architecturally ambitious churches built in 20th-century Europe — the Lord's Ark church (Arka Pana). It was approved as a token concession by the communist government in 1967, and built almost entirely by the parishioners themselves. The shape is supposed to evoke Noah's ark; the interior is spectacular.",
      },
      {
        h: "Other Nowa Huta sights",
        p: "The People's Theatre (Teatr Ludowy), the Museum of Nowa Huta in the original Świat Kina cinema building, the Cyprian Bazylik square, and the Central Square itself if you want to take it all in. You can do all of these in a 3-4 hour loop on foot.",
      },
    ],
    bodyPl: [
      {
        h: "Dlaczego istnieje",
        p: "Po II wojnie światowej Kraków był politycznie podejrzany — za burżuazyjny, za katolicki, za akademicki dla nowej komunistycznej władzy. Zapadła decyzja, żeby tuż obok zbudować całe nowe socjalistyczne 'miasto robotników' wokół ogromnej huty stali (Nowa Huta = nowa huta). Najpierw stanęła huta, potem osiedla, a cały plan urbanistyczny narysował w 1949 jeden architekt — Tadeusz Ptaszycki. Wynik to najbardziej spójny socrealistyczny zespół urbanistyczny w Europie poza dawnym ZSRR.",
      },
      {
        h: "Plac Centralny",
        p: "Cała dzielnica promieniuje z Placu Centralnego (oficjalnie im. Ronalda Reagana od 2004, ale wszyscy mówią Plac Centralny). Spotyka się tu pięć szerokich alej, a symetryczne neoklasyczne kamienice wokół placu to czysty socrealizm. Stań pośrodku i przeczytasz cały układ urbanistyczny jednym spojrzeniem.",
      },
      {
        h: "Arka Pana",
        p: "Około 2 km na północny zachód od Placu Centralnego stoi jeden z najbardziej ambitnych architektonicznie kościołów zbudowanych w XX-wiecznej Europie — kościół Arki Pana. Władza zgodziła się na jego budowę w 1967 jako symboliczne ustępstwo, a postawili go niemal w całości sami parafianie. Kształt ma przypominać arkę Noego; wnętrze jest spektakularne.",
      },
      {
        h: "Co jeszcze",
        p: "Teatr Ludowy, Muzeum Nowej Huty w dawnym kinie Świat, Plac Cypriana Bazylika i sam Plac Centralny, jeśli chcesz to wszystko ogarnąć. Można to zrobić w 3-4 godzinną pętlę pieszą.",
      },
    ],
    seeEn: [
      "Plac Centralny",
      "Lord's Ark church (Arka Pana)",
      "People's Theatre (Teatr Ludowy)",
      "Museum of Nowa Huta",
      "The aleja Róż boulevard (where the Lenin statue used to stand)",
      "Cistercian Abbey in Mogiła (older than the district itself)",
    ],
    seePl: [
      "Plac Centralny",
      "Kościół Arki Pana",
      "Teatr Ludowy",
      "Muzeum Nowej Huty",
      "Aleja Róż (gdzie kiedyś stał Lenin)",
      "Opactwo Cystersów w Mogile (starsze niż dzielnica)",
    ],
    eatEn: [
      "Stylowa (al. Róż 3) — milk bar feel, socialist-era interior intact, 25-30 zł a meal",
      "Karczma Pod Zielonym Drzewem — Polish, no English menu, exactly the point",
    ],
    eatPl: [
      "Stylowa (al. Róż 3) — bar mleczny w klimacie, wnętrze z epoki, 25-30 zł za posiłek",
      "Karczma Pod Zielonym Drzewem — polska kuchnia, bez angielskiego menu, dokładnie o to chodzi",
    ],
    getThereEn:
      "Tram 4, 10, 14, 16 or 22 from the centre to 'Plac Centralny' or 'Centrum A'. Travel time 25-35 minutes. A 60-minute MPK Zone I ticket (6 zł) covers it.",
    getTherePl:
      "Tramwaj 4, 10, 14, 16 lub 22 z centrum do 'Plac Centralny' lub 'Centrum A'. Czas: 25-35 minut. Wystarczy bilet MPK 60-minutowy Strefa I (6 zł).",
  },
];

export function getArea(slug: string): AreaContent | undefined {
  return AREAS.find((a) => a.slug === slug);
}
