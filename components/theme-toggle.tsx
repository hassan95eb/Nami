"use client";

export function ThemeToggle({ label }: { label: string }) {
  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return <button type="button" onClick={toggleTheme} aria-label={label} title={label} className="grid size-10 place-items-center rounded-full border border-black/15 text-lg transition hover:border-accent hover:text-accent dark:border-white/20"><span className="dark:hidden" aria-hidden="true">☾</span><span className="hidden dark:inline" aria-hidden="true">☀</span></button>;
}
