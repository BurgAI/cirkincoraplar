import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { dictionary, isLocale, locales, type Locale } from "@/data/i18n";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dict = dictionary[locale];

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: [...dict.meta.keywords],
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      locale,
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const activeLocale = locale as Locale;
  const dict = dictionary[activeLocale];

  return (
    <>
      <Header locale={activeLocale} dict={dict} />
      <main>{children}</main>
      <Footer locale={activeLocale} dict={dict} />
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <WhatsAppButton label={dict.common.whatsappCta} className="w-full shadow-soft" />
      </div>
    </>
  );
}
