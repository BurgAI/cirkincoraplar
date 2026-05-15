import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { SectionTitle } from "@/components/SectionTitle";
import { StructuredData } from "@/components/StructuredData";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { dictionary, isLocale, locales, type Locale } from "@/data/i18n";
import { getAllSubcategorySlugs, getCategoryDir, getLocalizedSubcategories } from "@/data/categoryCatalog";
import { getCategorySubfolders } from "@/lib/gallery";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";

type SubcategoryPageProps = {
  params: Promise<{ locale: string; slug: string; subcategory: string }>;
};

const CATEGORY_SLUGS = ["women", "men", "kids"] as const;
type CategorySlug = (typeof CATEGORY_SLUGS)[number];

const CATEGORY_DIR: Record<CategorySlug, string> = {
  women: getCategoryDir("women"),
  men: getCategoryDir("men"),
  kids: getCategoryDir("kids"),
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    CATEGORY_SLUGS.flatMap((slug) =>
      getAllSubcategorySlugs(slug).map((subcategory) => ({
        locale,
        slug,
        subcategory,
      }))
    )
  );
}

export async function generateMetadata({ params }: SubcategoryPageProps): Promise<Metadata> {
  const { locale, slug, subcategory } = await params;

  if (!isLocale(locale) || !CATEGORY_SLUGS.includes(slug as CategorySlug)) {
    return {};
  }

  const activeLocale = locale as Locale;
  const categorySlug = slug as CategorySlug;
  const dict = dictionary[activeLocale];
  const page = dict.pages[categorySlug];
  const subDef = getLocalizedSubcategories(
    activeLocale,
    categorySlug,
    getAllSubcategorySlugs(categorySlug),
  ).find((item) => item.slug === subcategory);

  if (!subDef) {
    return {};
  }

  const images = getCategorySubfolders(CATEGORY_DIR[categorySlug]).find((item) => item.slug === subcategory)?.images ?? [];
  const title = `${subDef.label} | ${page.title} | ${siteConfig.name}`;
  const description =
    activeLocale === "tr"
      ? `${subDef.label} alt kategorisindeki ürün görsellerini inceleyin. ${images.length} adet görsel ile ${page.title.toLowerCase()} koleksiyonuna ulaşın.`
      : activeLocale === "en"
        ? `Browse ${images.length} product images in the ${subDef.label} subcategory of our ${page.title} collection.`
        : `Sehen Sie ${images.length} Produktbilder in der Unterkategorie ${subDef.label} unserer ${page.title}-Kollektion an.`;

  return buildPageMetadata({
    locale: activeLocale,
    path: `${slug}/${subcategory}`,
    title,
    description,
    keywords: [...dict.meta.keywords, page.title, subDef.label],
    image: images[0] ?? siteConfig.logo,
  });
}

export default async function SubcategoryPage({ params }: SubcategoryPageProps) {
  const { locale, slug, subcategory } = await params;

  if (!isLocale(locale) || !CATEGORY_SLUGS.includes(slug as CategorySlug)) {
    notFound();
  }

  const activeLocale = locale as Locale;
  const categorySlug = slug as CategorySlug;
  const dict = dictionary[activeLocale];
  const page = dict.pages[categorySlug];
  const localizedSubcategories = getLocalizedSubcategories(
    activeLocale,
    categorySlug,
    getAllSubcategorySlugs(categorySlug),
  );

  const subDef = localizedSubcategories.find((s) => s.slug === subcategory);
  if (!subDef) notFound();

  const categoryDir = CATEGORY_DIR[categorySlug];
  const subfolders = getCategorySubfolders(categoryDir);
  const images = subfolders.find((s) => s.slug === subcategory)?.images ?? [];
  const structuredData = [
    buildBreadcrumbSchema([
      { name: dict.nav.home, path: `/${activeLocale}` },
      { name: page.title, path: `/${activeLocale}/${slug}` },
      { name: subDef.label, path: `/${activeLocale}/${slug}/${subcategory}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: subDef.label,
      description: page.description,
      inLanguage: activeLocale,
    },
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      {/* Başlık */}
      <section className="border-b border-ink/8 bg-white py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <nav className="mb-4 flex items-center gap-2 text-xs text-ink/45">
            <Link href={`/${activeLocale}`} className="hover:text-ink">{dict.nav.home}</Link>
            <span>/</span>
            <Link href={`/${activeLocale}/${slug}`} className="hover:text-ink">{page.title}</Link>
            <span>/</span>
            <span className="text-ink">{subDef.label}</span>
          </nav>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-thread">
                {page.eyebrow}
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-ink md:text-4xl">{subDef.label}</h1>
              {images.length > 0 && (
                <p className="mt-2 text-sm text-ink/50">{dict.common.itemCount.replace("{n}", String(images.length))}</p>
              )}
            </div>
            <WhatsAppButton label={dict.common.whatsappCta} />
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <PhotoGallery images={images} label={subDef.label} />
        </div>
      </section>
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[.9fr_1.1fr] md:px-6">
          <SectionTitle
            eyebrow={page.eyebrow}
            title={subDef.label}
            description={page.description}
          />
          <div className="space-y-5 text-sm leading-7 text-ink/68">
            <p>
              {activeLocale === "tr"
                ? `${subDef.label} alt kategori sayfası, ilgili ürün görsellerini tek başlık altında toplar. Bu yapı hem kullanıcıların aradığı modeli daha hızlı bulmasına hem de arama motorlarının sayfanın konusunu daha net anlamasına yardımcı olur.`
                : activeLocale === "en"
                  ? `The ${subDef.label} subcategory page groups the relevant product images under a single topic. This helps users find the right model faster and gives search engines clearer topical context.`
                  : `Die Unterkategorieseite ${subDef.label} bündelt die passenden Produktbilder unter einem klaren Thema. So finden Nutzer schneller das richtige Modell und Suchmaschinen verstehen den Seitenfokus besser.`}
            </p>
            <p>
              {activeLocale === "tr"
                ? `Bu alt koleksiyon için adet, üretim tipi veya toptan sipariş planı gerekiyorsa ilgili kategori sayfasına dönebilir ya da doğrudan iletişim sayfasından teklif isteyebilirsiniz.`
                : activeLocale === "en"
                  ? `If you need quantity planning, production details, or wholesale information for this subcollection, you can return to the parent category or request a quote from the contact page.`
                  : `Wenn Sie für diese Unterkollektion Mengenplanung, Produktionsdetails oder Großhandelsinformationen benötigen, können Sie zur Hauptkategorie zurückkehren oder direkt über die Kontaktseite ein Angebot anfragen.`}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href={`/${activeLocale}/${slug}`} className="text-sm font-semibold text-thread hover:text-ink">
                {page.title}
              </Link>
              <Link href={`/${activeLocale}/contact`} className="text-sm font-semibold text-thread hover:text-ink">
                {dict.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        label={dict.cta.label}
        title={page.ctaTitle}
        description={dict.cta.description}
        buttonLabel={dict.common.whatsappCta}
      />
    </>
  );
}
