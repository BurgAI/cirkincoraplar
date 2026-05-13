import Image from "next/image";
import { PhotoCode } from "@/components/PhotoCode";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  photoCode?: string;
  bullets?: readonly string[];
  whatsappLabel: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  photoCode = "D-01",
  bullets,
  whatsappLabel,
}: PageHeaderProps) {
  return (
    <section className="bg-cotton">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[.95fr_1.05fr] md:items-center md:px-6 md:py-14">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-thread">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-ink/70">{description}</p>
          {bullets ? (
            <ul className="mt-6 grid gap-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm font-medium text-ink/75">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-thread" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-7">
            <WhatsAppButton label={whatsappLabel} />
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft">
          <PhotoCode code={photoCode} />
          <Image
            src={image}
            alt={`${title} ${whatsappLabel}`}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
