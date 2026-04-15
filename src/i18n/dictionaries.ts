import "server-only";
import { type Locale } from "./config";

const dictionaries = {
  en: () => import("./dict/en").then((m) => m.default),
  pl: () => import("./dict/pl").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export const getDictionary = (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
