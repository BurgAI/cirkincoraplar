import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/data/i18n";

type CategoryCardProps = {
  category: {
    title: string;
    description: string;
    href: string;
    image: string;
    imageAlt: string;
    note: string;
  };
  locale: Locale;
};

export function CategoryCard({ category, locale }: CategoryCardProps) {
  return (
    <Link
      href={`/${locale}/${category.href}`}
      className="group overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft transition hover:-translate-y-1 hover:border-eucalyptus/40"
    >
      <div className="relative aspect-[4/3] bg-mist">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-ink">{category.title}</h3>
        <p className="mt-2 text-sm leading-6 text-ink/70">{category.description}</p>
        <p className="mt-4 text-xs font-medium text-eucalyptus">{category.note}</p>
      </div>
    </Link>
  );
}
