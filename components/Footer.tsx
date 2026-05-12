import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Dictionary, Locale } from "@/data/i18n";
import { siteConfig } from "@/data/siteConfig";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: FooterProps) {
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
    <footer className="bg-ink py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1fr_1fr_auto] md:px-6">
        <div>
          <h2 className="text-xl font-semibold">{siteConfig.name}</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
            {dict.meta.description} {dict.home.exportNote}
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm" aria-label={dict.common.footerMenuLabel}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/70 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-3">
          <WhatsAppButton label={dict.common.whatsappCta} variant="light" />
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="block text-sm font-medium text-white/70 hover:text-white"
          >
            Instagram: @cirkin_coraplar
          </a>
        </div>
      </div>
    </footer>
  );
}
