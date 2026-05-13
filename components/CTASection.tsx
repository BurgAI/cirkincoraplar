import { WhatsAppButton } from "@/components/WhatsAppButton";

type CTASectionProps = {
  label: string;
  title: string;
  description: string;
  buttonLabel: string;
};

export function CTASection({ label, title, description, buttonLabel }: CTASectionProps) {
  return (
    <section className="bg-ink py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-6">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-flax">
            {label}
          </p>
          <h2 className="max-w-3xl text-4xl font-medium leading-tight md:text-6xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/64">{description}</p>
        </div>
        <WhatsAppButton label={buttonLabel} variant="light" className="md:justify-self-end" />
      </div>
    </section>
  );
}
