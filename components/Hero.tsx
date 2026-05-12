import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  whatsappLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Hero({
  eyebrow = "Manufacturer",
  title,
  description,
  image,
  imageAlt,
  whatsappLabel,
  secondaryHref = "/tr/custom-production",
  secondaryLabel = "Custom production",
}: HeroProps) {
  return (
    <section className="bg-cotton">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.02fr_.98fr] md:items-center md:px-6 md:py-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-thread">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-normal text-ink md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">{description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton label={whatsappLabel} />
            <a
              href={secondaryHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-eucalyptus hover:text-eucalyptus"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
