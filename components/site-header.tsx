import Link from "next/link";
import { FullScreenMenu } from "./full-screen-menu";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <header className="absolute inset-x-0 top-0 z-40 text-white">
      <div className="mx-auto flex h-24 w-[min(96%,1800px)] items-center justify-between gap-6 border-b border-white/30 px-2">
        <Link href={`/${locale}/`} className="leading-none"><span className="block text-2xl font-bold tracking-[-.07em] sm:text-3xl">{t.artist}</span><span className="mt-1 block text-[.58rem] uppercase tracking-[.48em] opacity-65">artist portfolio</span></Link>
        <FullScreenMenu locale={locale} />
      </div>
    </header>
  );
}
