import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

type SubcategoryDef = {
  slug: string;
  label: string;
};

type SubcategoryGridProps = {
  subcategories: readonly SubcategoryDef[];
  imageMap: Record<string, string[]>;
};

const b = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function SubcategoryGrid({ subcategories, imageMap }: SubcategoryGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {subcategories.map(({ slug, label }) => {
        const images = imageMap[slug] ?? [];
        const firstImage = images[0] ?? null;
        const whatsappMsg = encodeURIComponent(
          `Merhaba, ${label} çorapları hakkında bilgi almak istiyorum.`
        );
        const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${whatsappMsg}`;

        return (
          <a
            key={slug}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[2rem] bg-mist transition hover:shadow-lg"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              {firstImage ? (
                <Image
                  src={`${b}${firstImage}`}
                  alt={`${label} ürün fotoğrafı`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-mist to-cotton">
                  <span className="text-4xl opacity-20">🧦</span>
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-ink">{label}</h3>
              {images.length > 0 && (
                <p className="mt-1 text-xs text-ink/50">{images.length} ürün</p>
              )}
              <p className="mt-3 text-xs font-medium text-thread">WhatsApp ile teklif al →</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
