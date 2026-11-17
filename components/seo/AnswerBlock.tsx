/**
 * Extractable AEO lead-answer block.
 * Direct Q → A under H2/H3 for AI citation and featured-snippet parsing.
 */

type AnswerItem = {
  question: string;
  answer: string;
};

type AnswerBlockProps = {
  title?: string;
  items: AnswerItem[];
  className?: string;
};

export default function AnswerBlock({
  title = "Quick answers",
  items,
  className = "",
}: AnswerBlockProps) {
  if (!items.length) return null;

  return (
    <section
      className={`aeo-answers mx-auto max-w-4xl ${className}`}
      aria-labelledby="aeo-answers-heading"
      data-aeo="lead-answers"
    >
      <h2
        id="aeo-answers-heading"
        className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl"
      >
        {title}
      </h2>
      <div className="space-y-6">
        {items.map((item) => (
          <article key={item.question} className="border-l-4 border-[#1e4fd6] pl-5">
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              {item.question}
            </h3>
            <p className="text-base leading-relaxed text-slate-700">
              {item.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
