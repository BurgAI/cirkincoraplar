import Image from "next/image";
import { PhotoCode } from "@/components/PhotoCode";
import type { Dictionary } from "@/data/i18n";

type ToteCollectionsProps = {
  content: Dictionary["pages"]["toteBags"];
};

export function ToteCollections({ content }: ToteCollectionsProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-thread">
              {content.collectionEyebrow}
            </p>
            <h2 className="text-4xl font-medium leading-tight text-ink md:text-6xl">
              {content.collectionTitle}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-ink/62 md:justify-self-end md:text-right">
            {content.collectionDescription}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-6">
          {content.collections.map((collection, index) => (
            <article
              key={collection.title}
              className={`group ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
            >
              <div
                className={`relative overflow-hidden rounded-[2rem] bg-mist ${
                  index < 2 ? "aspect-[4/5] md:aspect-[5/4]" : "aspect-[4/5]"
                }`}
              >
                <PhotoCode code={`T-${String(index + 1).padStart(2, "0")}`} />
                <Image
                  src={collection.image}
                  alt={collection.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes={index < 2 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/72 to-transparent p-5 text-white md:p-7">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {collection.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-medium">{collection.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/78">
                    {collection.description}
                  </p>
                </div>
              </div>
              <div className="px-1 pt-4">
                <p className="text-sm font-semibold text-ink">{collection.rule}</p>
                <p className="mt-1 text-sm leading-6 text-ink/56">{collection.note}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {content.purchaseRules.map((rule) => (
            <div key={rule.title} className="rounded-[1.5rem] bg-cotton p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-thread">
                {rule.label}
              </p>
              <h3 className="mt-3 text-2xl font-medium text-ink">{rule.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/62">{rule.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
