import type { Metadata } from "next";
import "../globals.css";
import { content } from "@/lib/content";
import { isLocale, localeUrl, locales, siteUrl, type Locale } from "@/lib/site";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "fa";
  const t = content[locale];
  return {
    metadataBase: new URL(siteUrl), title: t.siteTitle, description: t.description,
    alternates: { canonical: localeUrl(locale, "/"), languages: { fa: localeUrl("fa", "/"), en: localeUrl("en", "/"), "x-default": siteUrl } },
    openGraph: { type: "website", locale: locale === "fa" ? "fa_IR" : "en_US", url: localeUrl(locale, "/"), title: t.siteTitle, description: t.description, siteName: t.artist },
    twitter: { card: "summary_large_image", title: t.siteTitle, description: t.description },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  };
}

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}})()`;

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const validLocale: Locale = isLocale(locale) ? locale : "fa";
  return <html lang={validLocale} dir={validLocale === "fa" ? "rtl" : "ltr"} suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body>{children}</body></html>;
}
