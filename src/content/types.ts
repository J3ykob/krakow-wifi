import type { ReactNode } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export interface RelatedRef {
  href: string;
  title: string;
  description: string;
}

export interface PageMeta {
  title: string;
  description: string;
  updated: string;
  readingTime?: number;
}

export interface ArticleShape {
  meta: PageMeta;
  intro: ReactNode;
  body: ReactNode;
  faq?: FaqItem[];
  related?: RelatedRef[];
}
