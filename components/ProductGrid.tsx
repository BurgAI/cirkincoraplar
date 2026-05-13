import Image from "next/image";
import { PhotoCode } from "@/components/PhotoCode";
import type { Dictionary } from "@/data/i18n";

type ProductGridProps = {
  products: Dictionary["products"];
  category?: "socks" | "tote-bags";
  photoNote: string;
};

export function ProductGrid({ products, category, photoNote }: ProductGridProps) {
  const visibleProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {visibleProducts.map((product, index) => (
        <article
          key={product.name}
          className="group overflow-hidden bg-white"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-mist">
            <PhotoCode code={`P-${String(index + 1).padStart(2, "0")}`} />
            <Image
              src={product.image}
              alt={`${product.name} ${photoNote}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="px-1 pt-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-ink">{product.name}</h3>
              <span className="shrink-0 rounded-full bg-cotton px-3 py-1 text-xs font-semibold text-ink/65">
                {product.specs[0]}
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-ink/58">{product.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
