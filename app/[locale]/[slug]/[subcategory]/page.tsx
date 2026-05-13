import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { dictionary, isLocale, locales, type Locale } from "@/data/i18n";
import { getCategorySubfolders } from "@/lib/gallery";

type SubcategoryPageProps = {
  params: Promise<{ locale: string; slug: string; subcategory: string }>;
};

const CATEGORY_SLUGS = ["women", "men", "kids"] as const;
type CategorySlug = (typeof CATEGORY_SLUGS)[number];

const CATEGORY_DIR: Record<CategorySlug, string> = {
  women: "kadin",
  men: "erkek",
  kids: "cocuk",
};

function getSubcategories(locale: Locale, slug: CategorySlug) {
  return dictionary[locale].pages[slug].subcategories;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    CATEGORY_SLUGS.flatMap((slug) =>
      getSubcategories(locale, slug).map((sub) => ({ locale, slug, subcategory: sub.slug }))
    )
  );
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

  const subDef = page.subcategories.find((s) => s.slug === subcategory);
  if (!subDef) notFound();

  const categoryDir = CATEGORY_DIR[categorySlug];
  const subfolders = getCategorySubfolders(categoryDir);
  const images = subfolders.find((s) => s.slug === subcategory)?.images ?? [];

  return (
    <>
      {/* Başlık */}
      <section className="border-b border-ink/8 bg-white py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <nav className="mb-4 flex items-center gap-2 text-xs text-ink/45">
            <Link href={`/${activeLocale}`} className="hover:text-ink">Ana Sayfa</Link>
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
                <p className="mt-2 text-sm text-ink/50">{images.length} ürün</p>
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

      <CTASection
        label={dict.cta.label}
        title={page.ctaTitle}
        description={dict.cta.description}
        buttonLabel={dict.common.whatsappCta}
      />
    </>
  );
}
