import { WhatsAppButton } from "@/components/WhatsAppButton";

type CTASectionProps = {
  label: string;
  title: string;
  description: string;
  buttonLabel: string;
};

export function CTASection({ label, title, description, buttonLabel }: CTASectionProps) {
  return (
    <section className="bg-eucalyptus py-14 text-white md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-6">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
            {label}
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">{description}</p>
        </div>
        <WhatsAppButton label={buttonLabel} variant="light" className="md:justify-self-end" />
      </div>
    </section>
  );
}
