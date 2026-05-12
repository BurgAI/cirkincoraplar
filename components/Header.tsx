import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Dictionary, Locale } from "@/data/i18n";
import { siteConfig } from "@/data/siteConfig";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Header({ locale, dict }: HeaderProps) {
  const navigation = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.socks, href: `/${locale}/socks` },
    { label: dict.nav.toteBags, href: `/${locale}/tote-bags` },
    { label: dict.nav.customProduction, href: `/${locale}/custom-production` },
    { label: dict.nav.wholesale, href: `/${locale}/wholesale` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-2xl border border-ink/10 bg-white">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              fill
              className="object-cover"
              sizes="40px"
            />
          </span>
          <span>
            <span className="block text-base font-semibold leading-tight text-ink">
              {siteConfig.name}
            </span>
            <span className="block text-xs text-ink/55">{dict.common.manufacturer}</span>
          </span>
        </Link>
        <div className="flex items-center gap-3 overflow-x-auto pb-1 md:overflow-visible md:pb-0">
          <nav className="flex min-w-max items-center gap-1" aria-label={dict.common.menuLabel}>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-ink/70 transition hover:bg-mist hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher locale={locale} />
          <WhatsAppButton label={dict.common.quote} className="hidden md:inline-flex" />
        </div>
      </div>
    </header>
  );
}
