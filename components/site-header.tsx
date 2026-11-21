import Link from "next/link";
import Image from "next/image";
import { FullScreenMenu } from "./full-screen-menu";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";

export function SiteHeader({ locale, overlay = false }: { locale: Locale; overlay?: boolean }) {
  const t = content[locale];
  return (
    <header className={`${overlay ? "absolute text-white" : "relative border-b border-black/10 bg-paper text-ink dark:border-white/10 dark:bg-night dark:text-white"} inset-x-0 top-0 z-40`}>
      <div className={`mx-auto flex h-28 w-[min(94%,1600px)] items-center justify-between gap-6 ${overlay ? "border-b border-white/25" : ""}`}>
        <Link href={`/${locale}/`} className="flex flex-col items-center leading-none" aria-label={t.artist}>
          <Image
            src="/parisa-nami-logo.png"
            alt=""
            width={50}
            height={50}
            priority
            className={`size-12 object-contain ${overlay ? "" : "invert dark:invert-0"}`}
          />
          <span className="mt-2 block text-[.64rem] font-medium tracking-[.22em]">{t.artistLatin}</span>
        </Link>
        <FullScreenMenu locale={locale} />
      </div>
    </header>
  );
}
