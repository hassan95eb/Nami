"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collections, content } from "@/lib/content";
import type { Locale } from "@/lib/site";

export function HeroSlideshow({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const t = content[locale].home;

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % collections.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#222] text-white" aria-label={t.heroTitle}>
      {collections.map((collection, index) => (
        <div key={collection.slug} className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${index === active ? "opacity-100" : "opacity-0"}`} aria-hidden={index !== active}>
          <Image src={collection.image} alt="" fill priority={index === 0} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/35" />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto flex w-[min(94%,1600px)] flex-col items-start gap-6 pb-10 md:flex-row md:items-end md:justify-between md:pb-14">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[.24em] text-white/65">{t.heroLabel}</p>
          <h1 className="display-title text-[clamp(3.4rem,8vw,8.5rem)] font-light leading-[.84] tracking-[-.055em]">{collections[active].title}</h1>
          <Link className="mt-7 inline-block border-b border-white/60 pb-1 text-sm uppercase tracking-[.16em] transition hover:border-white/20 hover:text-white/60" href={`/${locale}/portfolio/${collections[active].slug}/`}>{t.heroCta}</Link>
        </div>
        <div className="flex gap-2" role="group" aria-label={locale === "fa" ? "انتخاب اسلاید" : "Choose slide"}>
          {collections.map((collection, index) => (
            <button key={collection.slug} type="button" onClick={() => setActive(index)} aria-label={collection.title} aria-pressed={active === index} className={`h-px transition-all ${active === index ? "w-14 bg-white" : "w-8 bg-white/35 hover:bg-white/70"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
