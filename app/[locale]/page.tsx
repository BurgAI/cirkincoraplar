import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryCard } from "@/components/CategoryCard";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { dictionary, isLocale, type Locale } from "@/data/i18n";
import { siteConfig } from "@/data/siteConfig";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const activeLocale = locale as Locale;
  const dict = dictionary[activeLocale];

  return (
    <>
      <Hero
        eyebrow={dict.common.manufacturer}
        title={dict.home.heroTitle}
        description={dict.home.heroDescription}
        image="/images/placeholder-socks.svg"
        imageAlt={dict.categories[0].imageAlt}
        whatsappLabel={dict.common.whatsappCta}
        secondaryHref={`/${activeLocale}/custom-production`}
        secondaryLabel={dict.home.heroSecondary}
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle
            eyebrow={dict.home.categoriesEyebrow}
            title={dict.home.categoriesTitle}
            description={dict.home.categoriesDescription}
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dict.categories.map((category) => (
              <CategoryCard key={category.href} category={category} locale={activeLocale} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-14 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[.9fr_1.1fr] md:items-start md:px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-flax">
              {dict.home.marketEyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-normal text-white md:text-4xl">
              {dict.home.marketTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70 md:text-lg">
              {dict.home.marketDescription}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {dict.marketCategories.map((group) => (
              <div key={group.title} className="rounded-3xl bg-white p-6 text-ink shadow-soft">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <div className="mt-5 grid gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-ink/10 bg-cotton px-4 py-3 text-sm font-semibold"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <SectionTitle
            eyebrow={dict.home.whyEyebrow}
            title={dict.home.whyTitle}
            description={dict.home.whyDescription}
          />
          <div className="grid gap-4">
            {dict.trustPoints.map((point) => (
              <div key={point} className="rounded-3xl bg-white p-5 shadow-soft">
                <p className="text-base font-semibold text-ink">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle
            eyebrow={dict.home.capabilitiesEyebrow}
            title={dict.home.capabilitiesTitle}
            description={dict.home.capabilitiesDescription}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {dict.capabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-3xl border border-ink/10 bg-white p-5 text-sm font-semibold leading-6 text-ink shadow-soft"
              >
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cotton py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1fr_.9fr] md:items-center md:px-6">
          <SectionTitle
            eyebrow={dict.home.socialEyebrow}
            title={dict.home.socialTitle}
            description={dict.home.socialDescription}
          />
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <p className="text-lg font-semibold text-ink">@cirkin_coraplar</p>
            <p className="mt-3 text-sm leading-6 text-ink/70">{dict.home.socialCard}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition hover:border-thread hover:text-thread"
              >
                {dict.common.instagram}
              </a>
              <WhatsAppButton label={dict.common.whatsappShort} />
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

      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-ink/55 md:px-6">
          <Link href={`/${activeLocale}/about`} className="font-semibold text-eucalyptus hover:text-ink">
            Milotreading
          </Link>{" "}
          {dict.home.exportNote}
        </div>
      </section>
    </>
  );
}
