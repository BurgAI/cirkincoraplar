import { StructuredData } from "@/components/StructuredData";
import { buildFAQSchema } from "@/lib/seo";

type FAQSectionProps = {
  eyebrow: string;
  title: string;
  items: readonly {
    question: string;
    answer: string;
  }[];
};

export function FAQSection({ eyebrow, title, items }: FAQSectionProps) {
  const faqSchema = buildFAQSchema(items);

  return (
    <section className="bg-mist py-16 md:py-24">
      <StructuredData data={faqSchema} />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[0.82fr_1.18fr] md:px-6">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-thread">
            {eyebrow}
          </p>
          <h2 className="text-4xl font-medium leading-tight text-ink md:text-5xl">{title}</h2>
        </div>
        <div className="grid gap-3">
          {items.map((item) => (
            <div key={item.question} className="rounded-[1.5rem] bg-white p-6 shadow-soft">
              <h3 className="text-base font-semibold text-ink">{item.question}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/62">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
