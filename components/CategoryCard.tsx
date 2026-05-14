import Image from "next/image";
import Link from "next/link";
import { PhotoCode } from "@/components/PhotoCode";
import type { Locale } from "@/data/i18n";
import { withBasePath } from "@/lib/utils";

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
  const codeMap: Record<string, string> = {
    "socks#women": "C-01",
    "socks#men": "C-02",
    "socks#kids": "C-03",
    "tote-bags": "C-04",
    socks: "C-01",
    "custom-production": "C-03",
    wholesale: "C-04",
  };

  return (
    <Link
      href={`/${locale}/${category.href}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-mist">
        <PhotoCode code={codeMap[category.href] ?? "C-00"} />
        <Image
          src={withBasePath(category.image)}
          alt={category.imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-5 text-white">
          <h3 className="text-xl font-semibold">{category.title}</h3>
          <p className="mt-1 text-sm leading-5 text-white/76">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}
