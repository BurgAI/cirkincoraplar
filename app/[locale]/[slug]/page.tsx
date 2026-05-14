import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { LocationMap } from "@/components/LocationMap";
import { PageHeader } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { SubcategoryGrid } from "@/components/SubcategoryGrid";
import { ToteCollections } from "@/components/ToteCollections";
import { getCategoryDir, getLocalizedSubcategories } from "@/data/categoryCatalog";
import {
  dictionary,
  isLocale,
  isPageSlug,
  locales,
  pageSlugs,
  type Locale,
  type PageSlug,
} from "@/data/i18n";
import { getCategorySubfolders, getPreferredCategoryImage } from "@/lib/gallery";
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

  if (pageSlug === "women" || pageSlug === "men" || pageSlug === "kids") {
    const categoryDir = getCategoryDir(pageSlug);
    const content =
      pageSlug === "women"
        ? dict.pages.women
        : pageSlug === "men"
        ? dict.pages.men
          : dict.pages.kids;
    const headerImage =
      pageSlug === "women"
        ? getPreferredCategoryImage("kadin", ["k-01", "k-04", "k-03"], content.image)
        : pageSlug === "men"
          ? getPreferredCategoryImage("erkek", ["e-01", "e-02", "e-06"], content.image)
          : getPreferredCategoryImage("cocuk", ["c-01", "c-02", "c-03"], content.image);

    const subfolders = getCategorySubfolders(categoryDir);
    const subcategories = getLocalizedSubcategories(
      activeLocale,
      pageSlug,
      subfolders.map((subfolder) => subfolder.slug),
    );
    const imageMap: Record<string, string[]> = {};
    for (const sf of subfolders) {
      imageMap[sf.slug] = sf.images;
    }

    return (
      <>
        <PageHeader {...content} image={headerImage} whatsappLabel={dict.common.whatsappCta} />
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SubcategoryGrid
              subcategories={subcategories}
              imageMap={imageMap}
              basePath={`/${activeLocale}/${pageSlug}`}
              texts={{
                viewCollection: dict.common.viewCollection,
                comingSoon: dict.common.comingSoon,
                itemCount: (n) => dict.common.itemCount.replace("{n}", String(n)),
              }}
            />
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

  if (pageSlug === "socks") {
    const content = dict.pages.socks;
    const headerImage = getPreferredCategoryImage("kadin", ["bamboo", "en-yeniler", "diz-ustu"], content.image);
    const socksProducts = dict.products.map((product) => {
      if (product.category !== "socks") return product;
      if (product.name === "Desenli Çorap") {
        return {
          ...product,
          image: getPreferredCategoryImage("kadin", ["renkli-corap", "en-yeniler", "bamboo"], product.image),
        };
      }
      if (product.name === "Logo Çorap") {
        return {
          ...product,
          image: getPreferredCategoryImage("erkek", ["desenli-corap", "bambu-corap", "sneaker-corap"], product.image),
        };
      }
      return product;
    });

    return (
      <>
        <PageHeader {...content} image={headerImage} whatsappLabel={dict.common.whatsappCta} />
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle
              eyebrow={content.sectionEyebrow}
              title={content.sectionTitle}
              description={content.sectionDescription}
            />
            <div className="mt-8">
              <ProductGrid
                products={socksProducts}
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
    const toteHero = getPreferredCategoryImage(
      "bez-canta",
      ["baskili-bez-canta", "ozel-tasarim-bez-canta"],
      content.image,
    );
    const toteCollections = content.collections.map((collection, index) => ({
      ...collection,
      image: getPreferredCategoryImage(
        "bez-canta",
        index % 2 === 0
          ? ["baskili-bez-canta", "ozel-tasarim-bez-canta"]
          : ["ozel-tasarim-bez-canta", "baskili-bez-canta"],
        collection.image,
      ),
    }));
    const toteContent = {
      ...content,
      image: toteHero,
      collections: toteCollections,
    };

    return (
      <>
        <PageHeader {...toteContent} whatsappLabel={dict.common.whatsappCta} />
        <ToteCollections content={toteContent} />
        <FAQSection
          eyebrow={toteContent.faqEyebrow}
          title={toteContent.faqTitle}
          items={toteContent.faq}
        />
        <CTASection
          label={dict.cta.label}
          title={toteContent.ctaTitle}
          description={dict.cta.description}
          buttonLabel={dict.common.whatsappCta}
        />
      </>
    );
  }

  if (pageSlug === "custom-production") {
    const content = dict.pages.customProduction;
    const headerImage = getPreferredCategoryImage(
      "bez-canta",
      ["ozel-tasarim-bez-canta", "baskili-bez-canta"],
      content.image,
    );

    return (
      <>
        <PageHeader {...content} image={headerImage} whatsappLabel={dict.common.whatsappCta} />
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle
              eyebrow={content.sectionEyebrow}
              title={content.sectionTitle}
              description={content.sectionDescription}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {content.productionRules.map((rule) => (
                <div key={rule.title} className="rounded-[1.5rem] bg-cotton p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-thread">
                    {rule.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-medium text-ink">{rule.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/62">{rule.description}</p>
                </div>
              ))}
            </div>
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
        <FAQSection
          eyebrow={content.faqEyebrow}
          title={content.faqTitle}
          items={content.faq}
        />
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
    const headerImage = getPreferredCategoryImage(
      "erkek",
      ["bambu-corap", "desenli-corap", "kislik-corap"],
      content.image,
    );

    return (
      <>
        <PageHeader {...content} image={headerImage} whatsappLabel={dict.common.whatsappCta} />
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
              <div className="mt-5">
                <LocationMap openLabel={dict.common.open} expandLabel={dict.common.expand} />
              </div>
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
