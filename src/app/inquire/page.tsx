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
      <Link
        href="/start-journey"
        className="mt-8 inline-block rounded-full bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-ivory transition hover:bg-black"
      >
        Start Your Journey
      </Link>
    </main>
  );
}
