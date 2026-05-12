import Image from "next/image";
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
    <div className="grid gap-5 md:grid-cols-2">
      {visibleProducts.map((product) => (
        <article
          key={product.name}
          className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft"
        >
          <div className="relative aspect-[4/3] bg-mist">
            <Image
              src={product.image}
              alt={`${product.name} ${photoNote}`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-ink">{product.name}</h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">{product.description}</p>
            <ul className="mt-4 space-y-2">
              {product.specs.map((spec) => (
                <li key={spec} className="flex gap-2 text-sm text-ink/75">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-thread" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
