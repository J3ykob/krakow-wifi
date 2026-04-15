"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { SearchEntry } from "@/content/search-index";

interface Props {
  index: SearchEntry[];
  placeholder: string;
}

function score(entry: SearchEntry, q: string): number {
  const text = `${entry.title} ${entry.body} ${entry.section}`.toLowerCase();
  const tokens = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return 0;
  let s = 0;
  for (const tok of tokens) {
    if (entry.title.toLowerCase().includes(tok)) s += 5;
    else if (entry.section.toLowerCase().includes(tok)) s += 3;
    else if (text.includes(tok)) s += 1;
    else return 0;
  }
  return s;
}

export default function SearchBox({ index, placeholder }: Props) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const results = useMemo(() => {
    if (!q.trim()) return [];
    return index
      .map((e) => ({ entry: e, s: score(e, q) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map((r) => r.entry);
  }, [q, index]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="hidden md:flex items-center gap-2 text-xs text-muted bg-slate-50 border border-card-border hover:border-primary px-3 py-1.5 rounded-lg transition-colors"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <span>{placeholder}</span>
        <kbd className="ml-1 text-[10px] bg-white border border-card-border px-1.5 py-0.5 rounded">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm grid place-items-start pt-20 px-4">
          <div
            ref={ref}
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-card-border overflow-hidden"
          >
            <div className="flex items-center gap-2 border-b border-card-border px-4 py-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64748b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={placeholder}
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xs text-muted hover:text-foreground"
                aria-label="Close"
              >
                Esc
              </button>
            </div>
            <ul className="max-h-[60vh] overflow-y-auto">
              {results.length === 0 && q.trim() && (
                <li className="px-4 py-6 text-center text-sm text-muted">
                  No results
                </li>
              )}
              {results.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 hover:bg-blue-50 transition-colors"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-primary font-semibold">
                      {r.section}
                    </div>
                    <div className="text-sm font-semibold text-foreground mt-0.5">
                      {r.title}
                    </div>
                    <div className="text-xs text-muted mt-0.5 line-clamp-1">
                      {r.body}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
