import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, type Locale, SITE_URL } from "@/i18n/config";
import ArticleShell from "@/components/ArticleShell";
import { AREAS } from "@/content/areas";

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
      ? "Dzielnice Krakowa — przewodnik po Starym Mieście, Kazimierzu, Wawelu, Podgórzu i Nowej Hucie"
      : "Kraków neighborhoods — Old Town, Kazimierz, Wawel, Podgórze and Nowa Huta",
    description: isPl
      ? "Przewodnik po pięciu dzielnicach Krakowa, które warto zobaczyć: co zwiedzić, gdzie zjeść, jak dojechać i ile czasu zaplanować."
      : "A guide to the five Kraków neighborhoods worth seeing: what to visit, where to eat, how to get there and how much time to budget.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/areas`,
      languages: {
        en: `${SITE_URL}/en/areas`,
        pl: `${SITE_URL}/pl/areas`,
      },
    },
  };
}

export default async function AreasHub({
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
      path="/areas"
      breadcrumbs={[
        { href: `/${t}`, label: isPl ? "Start" : "Home" },
        { href: `/${t}/areas`, label: isPl ? "Dzielnice" : "Areas" },
      ]}
      title={
        isPl
          ? "Dzielnice Krakowa, które warto zobaczyć"
          : "Kraków neighborhoods worth seeing"
      }
      lede={
        isPl
          ? "Kraków jest mniejszy niż większość turystów myśli — wszystko, co naprawdę warte zobaczenia, mieści się na obszarze 4 km na 4 km. Pięć dzielnic, które poniżej opisujemy, pokrywają 95% potrzeb pierwszego wyjazdu."
          : "Kraków is smaller than most visitors think — everything genuinely worth seeing fits inside a 4 km by 4 km area. The five districts below cover 95% of a first trip."
      }
      updated="2026-04-14"
      related={AREAS.slice(0, 4).map((a) => ({
        href: `/${t}/areas/${a.slug}`,
        title: isPl ? a.titlePl : a.titleEn,
        description: (isPl ? a.ledePl : a.ledeEn).slice(0, 130) + "…",
      }))}
      toc={[
        { id: "at-a-glance", label: isPl ? "Porównanie" : "At a glance" },
        { id: "which-first", label: isPl ? "Którą wybrać" : "Which one first" },
        { id: "walking-route", label: isPl ? "Trasa piesza" : "Walking route" },
        { id: "guides", label: isPl ? "Przewodniki" : "Guides" },
      ]}
    >
      <p>
        {isPl
          ? "Każdy z poniższych przewodników ma jedną sekcję 'co zobaczyć', jedną 'gdzie zjeść' i jedną 'jak dojechać' — bez wody. Linki działają, ceny są aktualne, a restauracje wybraliśmy spośród miejsc, w których realnie jadamy."
          : "Each of the guides below has one 'what to see', one 'where to eat' and one 'how to get there' section — no fluff. Links work, prices are current, and the restaurants are picked from places we actually eat."}
      </p>

      <h2 id="at-a-glance">{isPl ? "Dzielnice w skrócie" : "At a glance"}</h2>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-card-border text-left text-xs uppercase tracking-wider text-muted">
              <th className="py-2 pr-4">{isPl ? "Dzielnica" : "District"}</th>
              <th className="py-2 pr-4">{isPl ? "Z Rynku" : "From Rynek"}</th>
              <th className="py-2 pr-4">{isPl ? "Ile czasu" : "Time needed"}</th>
              <th className="py-2 pr-4">{isPl ? "Klimat" : "Vibe"}</th>
              <th className="py-2">{isPl ? "Najlepsza atrakcja" : "Top sight"}</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            <tr className="border-b border-card-border/50">
              <td className="py-2.5 pr-4 font-medium"><Link href={`/${t}/areas/old-town`} className="text-primary hover:underline">{isPl ? "Stare Miasto" : "Old Town"}</Link></td>
              <td className="py-2.5 pr-4">{isPl ? "jesteś tu" : "you're here"}</td>
              <td className="py-2.5 pr-4">{isPl ? "pół dnia – dzień" : "half day – full day"}</td>
              <td className="py-2.5 pr-4">{isPl ? "zabytki, tłumy, kafejki" : "historic, crowded, cafés"}</td>
              <td className="py-2.5">{isPl ? "Rynek Podziemny" : "Rynek Underground"}</td>
            </tr>
            <tr className="border-b border-card-border/50">
              <td className="py-2.5 pr-4 font-medium"><Link href={`/${t}/areas/kazimierz`} className="text-primary hover:underline">Kazimierz</Link></td>
              <td className="py-2.5 pr-4">10 min {isPl ? "pieszo" : "walk"}</td>
              <td className="py-2.5 pr-4">{isPl ? "pół dnia – wieczór" : "half day – evening"}</td>
              <td className="py-2.5 pr-4">{isPl ? "klimat, bary, synagogi" : "atmospheric, bars, synagogues"}</td>
              <td className="py-2.5">{isPl ? "Plac Nowy + zapiekanki" : "Plac Nowy + zapiekanki"}</td>
            </tr>
            <tr className="border-b border-card-border/50">
              <td className="py-2.5 pr-4 font-medium"><Link href={`/${t}/areas/wawel`} className="text-primary hover:underline">Wawel</Link></td>
              <td className="py-2.5 pr-4">8 min {isPl ? "pieszo" : "walk"}</td>
              <td className="py-2.5 pr-4">2–3 h</td>
              <td className="py-2.5 pr-4">{isPl ? "zamek, katedra, widoki" : "castle, cathedral, views"}</td>
              <td className="py-2.5">{isPl ? "Katedra + Dzwon Zygmunta" : "Cathedral + Sigismund Bell"}</td>
            </tr>
            <tr className="border-b border-card-border/50">
              <td className="py-2.5 pr-4 font-medium"><Link href={`/${t}/areas/podgorze`} className="text-primary hover:underline">{isPl ? "Podgórze" : "Podgórze"}</Link></td>
              <td className="py-2.5 pr-4">15 min {isPl ? "tramwajem" : "by tram"}</td>
              <td className="py-2.5 pr-4">{isPl ? "pół dnia" : "half day"}</td>
              <td className="py-2.5 pr-4">{isPl ? "historia, muzea, cisza" : "history, museums, quiet"}</td>
              <td className="py-2.5">{isPl ? "Fabryka Schindlera" : "Schindler's Factory"}</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4 font-medium"><Link href={`/${t}/areas/nowa-huta`} className="text-primary hover:underline">Nowa Huta</Link></td>
              <td className="py-2.5 pr-4">30 min {isPl ? "tramwajem" : "by tram"}</td>
              <td className="py-2.5 pr-4">3–4 h</td>
              <td className="py-2.5 pr-4">{isPl ? "socrealizm, surowo, pusto" : "socialist realism, raw, empty"}</td>
              <td className="py-2.5">{isPl ? "Plac Centralny" : "Plac Centralny"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="which-first">{isPl ? "Którą dzielnicę wybrać" : "Which neighborhood first"}</h2>
      <p>
        {isPl
          ? "Jeśli masz jeden dzień, trzymaj się trzech dzielnic, które przechodzą w siebie: Stare Miasto → Wawel → Kazimierz. To piesza pętla ok. 3 km, dająca największy zwrot z czasu. Zacznij od Bramy Floriańskiej rano, przejdź Drogę Królewską do Wawelu, a po południu zejdź na Kazimierz na obiad i zapiekanki na Placu Nowym."
          : "If you have one day, stick to three districts that flow into each other: Old Town → Wawel → Kazimierz. That's a walkable 3 km loop that gives you the best return on time. Start at the Floriańska Gate in the morning, walk the Royal Route down to Wawel, and drop into Kazimierz in the afternoon for lunch and zapiekanki at Plac Nowy."}
      </p>
      <p>
        {isPl
          ? "Podgórze dorzuć, jeśli interesuje Cię historia XX w. — Fabryka Schindlera i Plac Bohaterów Getta są warte wycieczki tramwajem. Nowa Huta to osobna ekspedycja, najlepsza na drugi dzień: 30 minut tramwajem, ale wrażenie jest zupełnie inne niż cokolwiek w centrum."
          : "Add Podgórze if you're interested in 20th-century history — Schindler's Factory and Plac Bohaterów Getta are worth the tram ride. Nowa Huta is a separate expedition, best for a second day: 30 minutes by tram, but the feel is unlike anything in the centre."}
      </p>

      <h2 id="walking-route">{isPl ? "Sugerowana trasa piesza (3 km, 3–4 h)" : "Suggested walking route (3 km, 3–4 h)"}</h2>
      <ol>
        <li>
          <strong>{isPl ? "Brama Floriańska" : "Floriańska Gate"}</strong> — {isPl
            ? "wejdź w Stare Miasto od północy, idź Floriańską do Rynku (5 min)."
            : "enter Old Town from the north, walk down Floriańska to the Rynek (5 min)."}
        </li>
        <li>
          <strong>{isPl ? "Rynek Główny" : "Main Square (Rynek)"}</strong> — {isPl
            ? "Sukiennice, Bazylika Mariacka, hejnał z wieży co godzinę. Podziemia Rynku jeśli masz czas (1 h)."
            : "Cloth Hall, St. Mary's Basilica, trumpet call from the tower every hour. Rynek Underground if you have time (1 h)."}
        </li>
        <li>
          <strong>{isPl ? "Grodzka → Wawel" : "Grodzka → Wawel"}</strong> — {isPl
            ? "8 min na południe. Dziedzińce darmowe, katedra 19 zł. Widok z południowego muru na Wisłę."
            : "8 min south. Courtyards free, cathedral 19 zł. View from the southern wall over the Vistula."}
        </li>
        <li>
          <strong>{isPl ? "Bulwary → Kazimierz" : "Boulevards → Kazimierz"}</strong> — {isPl
            ? "zejdź ze wzgórza na bulwary wiślane, skręć na wschód. Kładka Bernatka lub ul. Krakowska doprowadzą Cię na Kazimierz (10 min)."
            : "descend from the hill to the Vistula boulevards, turn east. Bernatka Footbridge or ul. Krakowska will bring you to Kazimierz (10 min)."}
        </li>
        <li>
          <strong>{isPl ? "Plac Nowy" : "Plac Nowy"}</strong> — {isPl
            ? "zapiekanki w Okrąglaku (~15 zł), synagogi w promieniu 5 min, bary wieczorem."
            : "zapiekanki at the Okrąglak (~15 zł), synagogues within 5 min walk, bars in the evening."}
        </li>
      </ol>

      <h2 id="guides">{isPl ? "Przewodniki po dzielnicach" : "Neighborhood guides"}</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        {AREAS.map((a) => (
          <Link
            key={a.slug}
            href={`/${t}/areas/${a.slug}`}
            className="block p-5 rounded-2xl border border-card-border bg-white hover:border-primary hover:shadow-md transition-all"
          >
            <h3 className="font-bold text-foreground text-base">
              {isPl ? a.titlePl : a.titleEn}
            </h3>
            <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
              {(isPl ? a.ledePl : a.ledeEn).slice(0, 140)}…
            </p>
            <span className="inline-block mt-3 text-xs font-semibold text-primary">
              {isPl ? "Czytaj →" : "Read →"}
            </span>
          </Link>
        ))}
      </div>
    </ArticleShell>
  );
}
