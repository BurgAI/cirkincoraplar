import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CategoryCard } from "@/components/CategoryCard";
import { CTASection } from "@/components/CTASection";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { PhotoCode } from "@/components/PhotoCode";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { dictionary, isLocale, type Locale } from "@/data/i18n";
import { instagramMedia } from "@/data/media";

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
        eyebrow="Çirkin Çoraplar Studio"
        title={dict.home.heroTitle}
        description={dict.home.heroDescription}
        image={instagramMedia.socks.pilates}
        imageAlt={dict.categories[0].imageAlt}
        whatsappLabel={dict.common.whatsappCta}
        primaryHref="#products"
        primaryLabel="Ürünleri İncele"
      />

      <section id="products" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Shop the edit"
            title="Günlük stil için seçilmiş ürünler"
            description="Çorap, bez çanta ve özel üretim seçenekleri. Kısa, net, görsel odaklı."
          />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dict.categories.map((category) => (
              <CategoryCard key={category.href} category={category} locale={activeLocale} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cotton py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:items-end">
            <SectionTitle
              eyebrow="Bestsellers preview"
              title="Instagram’da sevilen modeller"
              description="Sepet, varyasyon, kampanya ve çok satanlar bölümleri için hazır ürün mimarisi."
            />
            <p className="text-sm leading-6 text-ink/55 md:justify-self-end md:text-right">
              Renk, beden, baskı ve adet varyasyonları sonraki ürün kataloğuna bağlanabilir.
            </p>
          </div>
          <div className="mt-9">
            <ProductGrid products={dict.products} photoNote={dict.common.photoNote} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-[1.1fr_.9fr] md:px-6">
          <div className="relative min-h-[540px] overflow-hidden rounded-[2rem] bg-mist">
            <PhotoCode code="L-01" />
            <Image
              src={instagramMedia.tote.custom}
              alt="Modern kullanım için bez çanta"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 55vw, 100vw"
            />
          </div>
          <div className="grid gap-5">
            <div className="flex flex-col justify-end rounded-[2rem] bg-ink p-7 text-white md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-flax">
                Tote bag studio
              </p>
              <h2 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">
                Kafe, butik ve günlük şehir hayatı için.
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/64">
                Minimal baskı, doğal kumaş hissi, Instagram’a uygun ürün hikayesi.
              </p>
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-[2rem] bg-mist">
              <PhotoCode code="L-02" />
              <Image
                src={instagramMedia.tote.school}
                alt="Lifestyle bez çanta fotoğrafı"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-[.9fr_1.1fr] md:items-center">
            <SectionTitle
              eyebrow="Built for growth"
              title="Bugünün vitrini, yarının e-ticaret altyapısı"
              description="Kategori, ürün, görsel ve teklif akışı şimdiden ölçeklenebilir şekilde ayrıldı."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {["Sepet sistemi", "Ürün varyasyonları", "Çok satanlar", "Kampanyalar", "Çoklu dil", "WhatsApp teklif akışı"].map((item) => (
                <div key={item} className="rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-ink shadow-soft">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Gallery dict={dict} />

      <CTASection
        label={dict.cta.label}
        title={dict.cta.title}
        description={dict.cta.description}
        buttonLabel={dict.common.whatsappCta}
      />

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 text-sm text-ink/55 md:px-6">
          <Link href={`/${activeLocale}/about`} className="font-semibold text-eucalyptus hover:text-ink">
            Milotreading
          </Link>{" "}
          {dict.home.exportNote}
        </div>
      </section>
    </>
  );
}
