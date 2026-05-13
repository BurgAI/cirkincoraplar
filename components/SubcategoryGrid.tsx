import Image from "next/image";
import Link from "next/link";

type SubcategoryDef = {
  slug: string;
  label: string;
};

type SubcategoryGridProps = {
  subcategories: readonly SubcategoryDef[];
  imageMap: Record<string, string[]>;
  basePath: string;
  texts: {
    viewCollection: string;
    comingSoon: string;
    itemCount: (n: number) => string;
  };
};

const b = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function SubcategoryGrid({ subcategories, imageMap, basePath, texts }: SubcategoryGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {subcategories.map(({ slug, label }) => {
        const images = imageMap[slug] ?? [];
        const firstImage = images[0] ?? null;
        const previewImages = images.slice(0, 4);

        return (
          <Link
            key={slug}
            href={`${basePath}/${slug}`}
            className="group overflow-hidden rounded-[2rem] bg-mist transition hover:shadow-lg"
          >
            {/* Fotoğraf önizlemesi */}
            <div className="relative aspect-square w-full overflow-hidden">
              {firstImage ? (
                previewImages.length >= 4 ? (
                  <div className="grid h-full w-full grid-cols-2 gap-0.5">
                    {previewImages.map((src, i) => (
                      <div key={i} className="relative overflow-hidden">
                        <Image
                          src={`${b}${src}`}
                          alt={`${label} ${i + 1}`}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(min-width: 1024px) 17vw, (min-width: 640px) 25vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Image
                    src={`${b}${firstImage}`}
                    alt={`${label} ürün fotoğrafı`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                )
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-mist to-cotton">
                  <span className="text-5xl opacity-10">🧦</span>
                </div>
              )}
            </div>

            {/* Bilgi alanı */}
            <div className="p-5">
              <h3 className="text-base font-semibold text-ink">{label}</h3>
              <p className="mt-1 text-xs text-ink/45">
                {images.length > 0 ? texts.itemCount(images.length) : texts.comingSoon}
              </p>
              <p className="mt-3 text-xs font-medium text-thread">{texts.viewCollection}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
