import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  whatsappLabel: string;
  primaryHref?: string;
  primaryLabel?: string;
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
  primaryHref = "#products",
  primaryLabel = "Ürünleri İncele",
  secondaryHref,
  secondaryLabel,
}: HeroProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[calc(100svh-88px)] max-w-7xl gap-6 px-4 py-4 md:grid-cols-[0.82fr_1.18fr] md:items-stretch md:px-6 md:py-8">
        <div className="flex flex-col justify-end pb-6 pt-8 md:pb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-thread">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-normal text-ink md:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink/64 md:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-eucalyptus"
            >
              {primaryLabel}
            </Link>
            <WhatsAppButton label={whatsappLabel} variant="light" className="border border-ink/12" />
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/12 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-eucalyptus hover:text-eucalyptus"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
        <div className="relative min-h-[58svh] overflow-hidden rounded-[2rem] bg-mist md:min-h-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 58vw, 100vw"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/55 to-transparent p-5 text-white md:p-7">
            <p className="max-w-[12rem] text-sm font-medium leading-5">New season essentials</p>
            <span className="rounded-full bg-white/88 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
              @cirkin_coraplar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
