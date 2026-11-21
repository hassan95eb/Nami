"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { content, type Artwork } from "@/lib/content";
import type { Locale } from "@/lib/site";

export function ArtworkGallery({ locale, artworks }: { locale: Locale; artworks: Artwork[] }) {
  const t = content[locale].gallery;
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Artwork | null>(null);
  const categories = useMemo(() => Array.from(new Set(artworks.map((art) => art.category[locale]))), [artworks, locale]);
  const visible = filter === "all" ? artworks : artworks.filter((art) => art.category[locale] === filter);

  useEffect(() => {
    if (!selected) return;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", closeOnEscape); };
  }, [selected]);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label={locale === "fa" ? "فیلتر آثار" : "Filter works"}>
        {[t.all, ...categories].map((category, index) => {
          const value = index === 0 ? "all" : category;
          const active = filter === value;
          return <button key={value} type="button" onClick={() => setFilter(value)} aria-pressed={active} className={`rounded-full border px-5 py-2 text-sm transition ${active ? "border-ink bg-ink text-white dark:border-white dark:bg-white dark:text-night" : "border-black/15 hover:border-accent hover:text-accent dark:border-white/20"}`}>{category}</button>;
        })}
      </div>

      <div className="grid auto-rows-[12px] grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((art, index) => {
          const tall = art.featured || index % 3 === 1;
          return (
            <article key={art.id} className={`group mb-5 overflow-hidden rounded-[1.5rem] border border-black/10 bg-white dark:border-white/10 dark:bg-white/5 ${tall ? "row-span-[37]" : "row-span-[30]"}`}>
              <button type="button" onClick={() => setSelected(art)} className="flex h-full w-full flex-col text-start" aria-label={`${t.open}: ${art.title[locale]}`}>
                <div className="relative min-h-0 w-full flex-1 overflow-hidden bg-black/5 dark:bg-white/5">
                  <Image src={art.image} alt={`${t.preview}: ${art.title[locale]}`} fill sizes="(max-width: 768px) 94vw, (max-width: 1280px) 47vw, 31vw" className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]" />
                  <span className="absolute end-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur">{t.preview}</span>
                  <span className="absolute bottom-4 start-4 translate-y-2 rounded-full bg-paper px-4 py-2 text-sm text-ink opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">{t.open}</span>
                </div>
                <div className="flex w-full items-end justify-between gap-4 p-5"><div><h3 className="font-bold">{art.title[locale]}</h3><p className="mt-1 text-sm text-black/55 dark:text-white/55">{art.category[locale]}</p></div><span className="text-sm tabular-nums text-black/35 dark:text-white/35">{art.id}</span></div>
              </button>
            </article>
          );
        })}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 grid bg-night/95 p-3 backdrop-blur md:p-8" role="dialog" aria-modal="true" aria-label={selected.title[locale]} onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}>
          <button type="button" autoFocus onClick={() => setSelected(null)} className="absolute end-5 top-5 z-10 rounded-full border border-white/25 bg-black/30 px-5 py-2 text-sm text-white backdrop-blur hover:border-white" aria-label={t.close}>{t.close}</button>
          <div className="mx-auto grid h-full min-h-0 w-full max-w-[1500px] grid-cols-1 overflow-hidden rounded-2xl bg-[#1b1b18] lg:grid-cols-[1fr_320px]">
            <div className="relative min-h-[55vh] bg-black/25"><Image src={selected.image} alt={selected.title[locale]} fill sizes="80vw" className="object-contain p-3 md:p-8" priority /></div>
            <aside className="flex flex-col justify-end border-t border-white/10 p-7 text-white lg:border-s lg:border-t-0"><p className="text-xs uppercase tracking-[.2em] text-white/45">{selected.category[locale]}</p><h2 className="mt-4 text-2xl font-bold">{selected.title[locale]}</h2><dl className="mt-10 space-y-6 text-sm"><div><dt className="text-white/45">{t.medium}</dt><dd className="mt-1 leading-7">{selected.medium[locale]}</dd></div><div><dt className="text-white/45">{t.dimensions}</dt><dd className="mt-1">{selected.dimensions}</dd></div></dl></aside>
          </div>
        </div>
      )}
    </>
  );
}
