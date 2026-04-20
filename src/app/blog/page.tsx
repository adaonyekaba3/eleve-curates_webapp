import Link from "next/link";

export default function BlogIndexPage() {
  return (
    <main className="journal-page min-h-screen fade-in pt-20">
      <section className="journal-shell">
        <p className="journal-label">Journal</p>
        <h1 className="journal-title">Stories of rebuilding, alignment, and vision.</h1>
        <p className="journal-subtitle">
          Personal essays and practical systems from Atelier Élevé.
        </p>

        <div className="journal-divider" />

        <div className="space-y-7">
          {/* <article className="border-b border-black/10 pb-7">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#5e5a52]">Apr 2026</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
              <Link href="/blog/rebuilding-my-life" className="journal-link no-underline hover:underline">
                How I Rebuilt My Life, Identity, and Business After Loss, Layoff, and Learning to Trust Again
              </Link>
            </h2>
            <p className="mt-3 text-[#44423d]">
              A personal reflection on grief, identity, and the journey to rebuild with faith, clarity, and joy.
            </p>
          </article=> */}

          <article className="border-b border-black/10 pb-7">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#5e5a52]">Guide</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
              <Link href="/blog/future-ceo-gpt" className="journal-link no-underline hover:underline">
                How I Built My Future CEO GPT (Step-by-Step)
              </Link>
            </h2>
            <p className="mt-3 text-[#44423d]">
              A practical walkthrough to design your own strategic AI system for daily execution.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
