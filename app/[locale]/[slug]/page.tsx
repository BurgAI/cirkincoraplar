import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionTitle } from "@/components/SectionTitle";
import {
  dictionary,
  isLocale,
  isPageSlug,
  locales,
  pageSlugs,
  type Locale,
  type PageSlug,
} from "@/data/i18n";
import { siteConfig } from "@/data/siteConfig";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type LocalizedPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => pageSlugs.map((slug) => ({ locale, slug })));
}

export default async function LocalizedPage({ params }: LocalizedPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !isPageSlug(slug)) {
    notFound();
  }

  const activeLocale = locale as Locale;
  const pageSlug = slug as PageSlug;
  const dict = dictionary[activeLocale];

  if (pageSlug === "socks") {
    const content = dict.pages.socks;

    return (
      <>
        <PageHeader {...content} whatsappLabel={dict.common.whatsappCta} />
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle
              eyebrow={content.sectionEyebrow}
              title={content.sectionTitle}
              description={content.sectionDescription}
            />
            <div className="mt-8">
              <ProductGrid
                products={dict.products}
                category="socks"
                photoNote={dict.common.photoNote}
              />
            </div>
          </div>
        </section>
        <CTASection
          label={dict.cta.label}
          title={content.ctaTitle}
          description={dict.cta.description}
          buttonLabel={dict.common.whatsappCta}
        />
      </>
    );
  }

  if (pageSlug === "tote-bags") {
    const content = dict.pages.toteBags;

    return (
      <>
        <PageHeader {...content} whatsappLabel={dict.common.whatsappCta} />
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle
              eyebrow={content.sectionEyebrow}
              title={content.sectionTitle}
              description={content.sectionDescription}
            />
            <div className="mt-8">
              <ProductGrid
                products={dict.products}
                category="tote-bags"
                photoNote={dict.common.photoNote}
              />
            </div>
          </div>
        </section>
        <CTASection
          label={dict.cta.label}
          title={content.ctaTitle}
          description={dict.cta.description}
          buttonLabel={dict.common.whatsappCta}
        />
      </>
    );
  }

  if (pageSlug === "custom-production") {
    const content = dict.pages.customProduction;

    return (
      <>
        <PageHeader {...content} whatsappLabel={dict.common.whatsappCta} />
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle
              eyebrow={content.sectionEyebrow}
              title={content.sectionTitle}
              description={content.sectionDescription}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {content.steps.map((step, index) => (
                <div key={step} className="rounded-3xl border border-ink/10 bg-white p-5 shadow-soft">
                  <p className="text-sm font-semibold text-thread">0{index + 1}</p>
                  <p className="mt-4 text-sm font-medium leading-6 text-ink">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTASection
          label={dict.cta.label}
          title={content.ctaTitle}
          description={dict.cta.description}
          buttonLabel={dict.common.whatsappCta}
        />
      </>
    );
  }

  if (pageSlug === "wholesale") {
    const content = dict.pages.wholesale;

    return (
      <>
        <PageHeader {...content} whatsappLabel={dict.common.whatsappCta} />
        <section className="bg-mist py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[.9fr_1.1fr] md:items-start md:px-6">
            <SectionTitle
              eyebrow={content.sectionEyebrow}
              title={content.sectionTitle}
              description={content.sectionDescription}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {content.items.map((item) => (
                <div key={item} className="rounded-3xl bg-white p-5 text-sm font-semibold text-ink shadow-soft">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTASection
          label={dict.cta.label}
          title={content.ctaTitle}
          description={dict.cta.description}
          buttonLabel={dict.common.whatsappCta}
        />
      </>
    );
  }

  if (pageSlug === "about") {
    const content = dict.pages.about;

    return (
      <>
        <section className="bg-cotton py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-thread">
              {content.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {content.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink/70">{content.description}</p>
          </div>
        </section>
        <section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
            <SectionTitle
              eyebrow={content.sectionEyebrow}
              title={content.sectionTitle}
              description={content.sectionDescription}
            />
            <div className="rounded-3xl bg-mist p-6">
              <h2 className="text-2xl font-semibold text-ink">{siteConfig.exportBrand}</h2>
              <p className="mt-4 text-sm leading-6 text-ink/70">{content.exportText}</p>
            </div>
          </div>
        </section>
        <CTASection
          label={dict.cta.label}
          title={content.ctaTitle}
          description={dict.cta.description}
          buttonLabel={dict.common.whatsappCta}
        />
      </>
    );
  }

  const content = dict.pages.contact;

  return (
    <>
      <section className="bg-cotton py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-ink">{content.whatsapp}</h2>
              <p className="mt-3 text-sm text-ink/70">{siteConfig.whatsappNumber}</p>
              <div className="mt-5">
                <WhatsAppButton label={dict.common.whatsappCta} />
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-ink">{content.instagram}</h2>
              <p className="mt-3 text-sm text-ink/70">@cirkin_coraplar</p>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition hover:border-thread hover:text-thread"
              >
                {dict.common.instagram}
              </a>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-ink">{content.location}</h2>
              <p className="mt-3 text-sm text-ink/70">{content.locationText}</p>
              <p className="mt-5 text-sm leading-6 text-ink/60">{content.locationNote}</p>
            </div>
          </div>
        </div>
      </section>
      <CTASection
        label={dict.cta.label}
        title={dict.cta.title}
        description={dict.cta.description}
        buttonLabel={dict.common.whatsappCta}
      />
    </>
  );
}
