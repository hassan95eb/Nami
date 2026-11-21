import type { MetadataRoute } from "next";
import { localeUrl } from "@/lib/site";
import { sitePaths } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePaths.flatMap((path) => {
    const suffix = path ? `/${path}/` : "/";
    return (["fa", "en"] as const).map((locale) => ({
      url: localeUrl(locale, suffix), lastModified: new Date(), changeFrequency: "monthly" as const,
      priority: path ? 0.7 : 1,
      alternates: { languages: { fa: localeUrl("fa", suffix), en: localeUrl("en", suffix) } },
    }));
  });
}
