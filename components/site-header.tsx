import Link from "next/link";
import { FullScreenMenu } from "./full-screen-menu";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";

export function SiteHeader({ locale, overlay = false }: { locale: Locale; overlay?: boolean }) {
  const t = content[locale];
  return (
    <header className={`${overlay ? "absolute text-white" : "relative border-b border-black/10 bg-paper text-ink dark:border-white/10 dark:bg-night dark:text-white"} inset-x-0 top-0 z-40`}>
      <div className={`mx-auto flex h-24 w-[min(94%,1600px)] items-center justify-between gap-6 ${overlay ? "border-b border-white/25" : ""}`}>
        <Link href={`/${locale}/`} className="leading-none"><span className="block text-lg font-medium tracking-[.16em] sm:text-xl">{t.artistLatin}</span><span className="mt-2 block text-[.56rem] uppercase tracking-[.42em] opacity-55">Artist · Sculptor</span></Link>
        <FullScreenMenu locale={locale} />
      </div>
    </header>
  );
}
