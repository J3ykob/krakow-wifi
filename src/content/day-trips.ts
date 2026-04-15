export interface DayTripContent {
  slug: string;
  titleEn: string;
  titlePl: string;
  ledeEn: string;
  ledePl: string;
  distanceKm: number;
  travelTimeMin: { min: number; max: number };
  bookEn: string;
  bookPl: string;
  // partner slug for GetYourGuide / Booking link
  gygQuery: string;
}

export const DAY_TRIPS: DayTripContent[] = [
  {
    slug: "auschwitz",
    titleEn: "Auschwitz-Birkenau day trip from Kraków",
    titlePl: "Auschwitz-Birkenau — wycieczka z Krakowa",
    ledeEn:
      "The former Auschwitz-Birkenau concentration and extermination camp is 65 km west of Kraków, in the town of Oświęcim. A visit takes a full day end-to-end and is one of the most important historical experiences you can have anywhere in Europe. This page explains how the visit works, how to book, and the practical details no other guide tells you.",
    ledePl:
      "Były obóz koncentracyjny i zagłady Auschwitz-Birkenau leży 65 km na zachód od Krakowa, w Oświęcimiu. Wizyta zajmuje cały dzień od początku do końca i jest jednym z najważniejszych historycznych doświadczeń, jakie można przeżyć w Europie. Ta strona tłumaczy jak wygląda wizyta, jak ją zarezerwować i podaje praktyczne szczegóły, których inne przewodniki nie mówią.",
    distanceKm: 65,
    travelTimeMin: { min: 90, max: 120 },
    bookEn: "Auschwitz-Birkenau guided tour from Kraków",
    bookPl: "Wycieczka z przewodnikiem do Auschwitz-Birkenau z Krakowa",
    gygQuery: "auschwitz",
  },
  {
    slug: "wieliczka",
    titleEn: "Wieliczka Salt Mine day trip",
    titlePl: "Kopalnia Soli Wieliczka — wycieczka",
    ledeEn:
      "The Wieliczka Salt Mine is a 700-year-old working salt mine 14 km south-east of Kraków, with 800 years of carved chapels, underground lakes, and salt sculptures along a 3 km tourist route. UNESCO since 1978. Half a day end-to-end, easy to combine with something else in the afternoon.",
    ledePl:
      "Kopalnia Soli Wieliczka to działająca od 700 lat kopalnia 14 km na południowy wschód od Krakowa, z 800 latami wyrzeźbionych w soli kaplic, podziemnych jezior i rzeźb wzdłuż 3-kilometrowej trasy turystycznej. UNESCO od 1978. Pół dnia, łatwo połączyć z czymś innym po południu.",
    distanceKm: 14,
    travelTimeMin: { min: 30, max: 40 },
    bookEn: "Wieliczka Salt Mine ticket and tour",
    bookPl: "Bilet i wycieczka do Kopalni Soli Wieliczka",
    gygQuery: "wieliczka",
  },
  {
    slug: "zakopane",
    titleEn: "Zakopane and the Tatra Mountains day trip",
    titlePl: "Zakopane i Tatry — wycieczka jednodniowa",
    ledeEn:
      "Zakopane is Poland's mountain capital, 100 km south of Kraków at the foot of the Tatras — the only proper alpine range in the country. As a day trip from Kraków it is doable but tight: 2 hours each way plus enough time on top of Kasprowy Wierch (cable car) to make it worth the journey. As a 2-day trip it's much better.",
    ledePl:
      "Zakopane to polska stolica gór, 100 km na południe od Krakowa u podnóża Tatr — jedynego prawdziwie alpejskiego pasma w kraju. Jako jednodniowa wycieczka z Krakowa jest możliwa, ale napięta: 2 godziny drogi w jedną stronę plus tyle czasu na Kasprowym Wierchu (kolejka), żeby to miało sens. Jako 2-dniowa wycieczka jest dużo lepsza.",
    distanceKm: 100,
    travelTimeMin: { min: 120, max: 150 },
    bookEn: "Zakopane and Tatra Mountains tour from Kraków",
    bookPl: "Zakopane i Tatry — wycieczka z Krakowa",
    gygQuery: "zakopane",
  },
];

export function getDayTrip(slug: string): DayTripContent | undefined {
  return DAY_TRIPS.find((d) => d.slug === slug);
}
