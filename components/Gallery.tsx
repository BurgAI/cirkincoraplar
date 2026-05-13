import Image from "next/image";
import { PhotoCode } from "@/components/PhotoCode";
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
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-thread">
              Instagram native
            </p>
            <h2 className="text-3xl font-medium text-ink md:text-5xl">
              {dict.common.galleryTitle}
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

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {images.map((src, i) => (
            <a
              key={src}
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-[1.5rem] bg-mist${
                i === 0
                  ? " col-span-2 aspect-[2/1] md:col-span-2 md:row-span-2 md:aspect-square"
                  : " aspect-square"
              }`}
            >
              <PhotoCode code={`G-${String(i + 1).padStart(2, "0")}`} />
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
