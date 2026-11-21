import type { MetadataRoute } from "next";
import { localeUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: localeUrl("fa", "/"), lastModified: new Date(), changeFrequency: "monthly", priority: 1, alternates: { languages: { fa: localeUrl("fa", "/"), en: localeUrl("en", "/") } } },
    { url: localeUrl("en", "/"), lastModified: new Date(), changeFrequency: "monthly", priority: 1, alternates: { languages: { fa: localeUrl("fa", "/"), en: localeUrl("en", "/") } } },
  ];
}
