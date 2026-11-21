import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtworkGallery } from "@/components/artwork-gallery";
import { SiteHeader } from "@/components/site-header";
import { artworks, content, sitePaths } from "@/lib/content";
import { getPage } from "@/lib/pages";
import { isLocale, localeUrl, locales, type Locale } from "@/lib/site";

type Params = { locale: string; slug: string[] };

export function generateStaticParams() {
  return locales.flatMap((locale) => sitePaths.filter(Boolean).map((path) => ({ locale, slug: path.split("/") })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: value, slug } = await params;
  const locale: Locale = isLocale(value) ? value : "fa";
  const path = slug.join("/");
  const page = getPage(path);
  if (!page) return {};
  const title = `${page.title[locale]} | ${content[locale].artist}`;
  const description = page.intro[locale];
  return {
    title, description,
    alternates: { canonical: localeUrl(locale, `/${path}/`), languages: { fa: localeUrl("fa", `/${path}/`), en: localeUrl("en", `/${path}/`) } },
    openGraph: { title, description, url: localeUrl(locale, `/${path}/`) },
  };
}

export default async function InteriorPage({ params }: { params: Promise<Params> }) {
  const { locale: value, slug } = await params;
  const locale: Locale = isLocale(value) ? value : "fa";
  const path = slug.join("/");
  const page = getPage(path);
  if (!page) notFound();
  const t = content[locale];
  const isArchive = path.startsWith("portfolio/");

  return (
    <main className="min-h-screen bg-paper text-ink dark:bg-night dark:text-white">
      <SiteHeader locale={locale} />
      <header className="mx-auto w-[min(92%,1440px)] pb-20 pt-20 md:pb-28 md:pt-28">
        <p className="section-label">{page.eyebrow}</p>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
          <h1 className="display-title max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-light leading-[.9] tracking-[-.045em]">{page.title[locale]}</h1>
          <p className="max-w-xl text-lg leading-9 text-black/55 dark:text-white/55">{page.intro[locale]}</p>
        </div>
      </header>

      {page.image && (
        <div className="relative mx-auto aspect-[16/8] w-[min(96%,1700px)] overflow-hidden bg-black/5 md:aspect-[16/7]">
          <Image src={page.image} alt={page.title[locale]} fill priority sizes="96vw" className="object-cover" />
        </div>
      )}

      <section className="mx-auto w-[min(92%,1200px)] py-20 md:py-28">
        <div className="divide-y divide-black/15 border-y border-black/15 dark:divide-white/15 dark:border-white/15">
          {page.sections.map((section, index) => {
            const row = <div className="grid gap-5 py-8 transition md:grid-cols-[70px_.8fr_1.2fr] md:items-start md:py-10"><span className="text-sm text-black/35 dark:text-white/35">0{index + 1}</span><h2 className="text-2xl font-light md:text-3xl">{section.title[locale]}</h2><p className="max-w-xl leading-8 text-black/55 dark:text-white/55">{section.body[locale]}</p></div>;
            return section.href ? <Link key={section.title.en} href={`/${locale}/${section.href}/`} className="group block hover:opacity-55">{row}</Link> : <div key={section.title.en}>{row}</div>;
          })}
        </div>

        {path === "cv" && <div className="mt-10 flex flex-wrap items-center gap-4"><span className="border border-black/20 px-6 py-3 text-sm uppercase tracking-[.14em] opacity-50 dark:border-white/20">PDF · {locale === "fa" ? "در انتظار فایل نهایی" : "Awaiting final file"}</span><p className="text-sm text-black/45 dark:text-white/45">{t.pending}</p></div>}
      </section>

      {isArchive && (
        <section className="border-t border-black/10 py-20 dark:border-white/10 md:py-28">
          <div className="mx-auto w-[min(92%,1440px)]"><div className="mb-12"><p className="section-label">{t.gallery.eyebrow}</p><h2 className="display-title mt-4 text-5xl font-light sm:text-7xl">{t.gallery.title}</h2><p className="mt-5 max-w-2xl leading-8 text-black/55 dark:text-white/55">{t.gallery.body}</p></div><ArtworkGallery locale={locale} artworks={artworks} /></div>
        </section>
      )}

      <div className="mx-auto w-[min(92%,1200px)] pb-20"><Link href={`/${locale}/${path.startsWith("portfolio/") ? "portfolio/" : ""}`} className="inline-block border-b border-current pb-1 text-sm uppercase tracking-[.14em]">{locale === "fa" ? "بازگشت" : "Back"}</Link></div>
      <footer className="border-t border-black/10 py-8 text-sm text-black/45 dark:border-white/10 dark:text-white/45"><div className="mx-auto flex w-[min(92%,1440px)] flex-col justify-between gap-3 sm:flex-row"><p>© {new Date().getFullYear()} {t.artist}</p><p>{t.footer}</p></div></footer>
    </main>
  );
}
