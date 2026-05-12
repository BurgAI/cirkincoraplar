import Image from "next/image";
import { getGalleryImages } from "@/lib/gallery";
import { siteConfig } from "@/data/siteConfig";
import type { Dictionary } from "@/data/i18n";

type GalleryProps = {
  dict: Dictionary;
};

export function Gallery({ dict }: GalleryProps) {
  const images = getGalleryImages();
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  if (images.length === 0) return null;

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-thread">
              {dict.home.socialEyebrow}
            </p>
            <h2 className="text-3xl font-semibold text-ink md:text-4xl">
              {dict.home.socialTitle}
            </h2>
          </div>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden shrink-0 text-sm font-semibold text-eucalyptus hover:underline sm:block"
          >
            @cirkin_coraplar →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {images.map((src, i) => (
            <a
              key={src}
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-2xl bg-mist${
                i === 0
                  ? " col-span-2 aspect-[2/1] md:col-span-1 md:aspect-square"
                  : " aspect-square"
              }`}
            >
              <Image
                src={`${base}${src}`}
                alt={`Çirkin Çoraplar ürün fotoğrafı ${i + 1}`}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </a>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-eucalyptus hover:underline"
          >
            @cirkin_coraplar →
          </a>
        </div>
      </div>
    </section>
  );
}
