# Nami

وب‌سایت شخصی پریسا نامی، پیاده‌سازی‌شده با Next.js و خروجی کاملاً استاتیک.

## اجرا

```bash
npm install
npm run dev
```

## ساخت خروجی استاتیک

```bash
npm run build
```

فایل‌های نهایی در پوشهٔ `out/` ساخته می‌شوند.

## استقرار روی Vercel

مخزن را در Vercel وارد کنید. Vercel پروژه را به‌عنوان Next.js تشخیص می‌دهد و با اجرای `npm run build` خروجی استاتیک را منتشر می‌کند. تنظیم `output: "export"` در `next.config.ts` فعال است.
