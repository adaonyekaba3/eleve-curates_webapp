import Link from "next/link";

export default function InquirePage() {
  return (
    <main className="section-space editorial-container max-w-3xl">
      <p className="eyebrow">Private Inquiry</p>
      <h1 className="mt-3 font-serif text-4xl md:text-6xl">
        Thoughtfully curated, exceptionally delivered.
      </h1>
      <p className="mt-6 text-muted">
        Every celebration begins with intention. Share your vision and we will
        guide you toward a bespoke planning experience designed around your
        story, standards, and cultural sensibility.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <Link
          href="/start-journey"
          className="inline-block rounded-full bg-ink px-8 py-4 text-center text-[11px] uppercase tracking-[0.24em] text-ivory transition hover:bg-black"
        >
          Start Your Journey
        </Link>
        <Link
          href="/atelier-eleve/intake"
          className="inline-block rounded-full border border-gold/60 bg-transparent px-8 py-4 text-center text-[11px] uppercase tracking-[0.24em] text-ink transition hover:border-gold hover:bg-champagne/40"
        >
          Atelier Élevé — Bespoke styling
        </Link>
      </div>
      <p className="mt-8 max-w-xl text-sm text-muted">
        For tailoring, aso-ebi, bridal looks, and wardrobe styling under our
        Atelier Élevé line, use the bespoke intake so our atelier team can
        respond with the right next steps.
      </p>
    </main>
  );
}
