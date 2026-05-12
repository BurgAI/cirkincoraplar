"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/data/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const rest = locales.includes(parts[0] as Locale) ? parts.slice(1) : parts;

  return (
    <div className="flex items-center rounded-full border border-ink/10 bg-white p-1">
      {locales.map((item) => (
        <Link
          key={item}
          href={`/${item}${rest.length ? `/${rest.join("/")}` : ""}`}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
            item === locale ? "bg-ink text-white" : "text-ink/60 hover:bg-mist hover:text-ink"
          }`}
          aria-current={item === locale ? "page" : undefined}
        >
          {localeLabels[item]}
        </Link>
      ))}
    </div>
  );
}
