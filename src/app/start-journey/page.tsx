import { InquiryForm } from "@/components/inquiry-form";

export default function StartJourneyPage() {
  return (
    <main className="section-space">
      <section className="editorial-container max-w-3xl">
        <p className="eyebrow">By application only</p>
        <h1 className="font-serif mt-3 text-4xl leading-tight md:text-6xl">
          Start Your Journey with Élevé Curates
        </h1>
        <p className="mt-5 max-w-2xl text-muted">
          We would be honored to curate your upcoming celebration. Please share
          a few details below, and our team will be in touch.
        </p>
        <InquiryForm />
      </section>
    </main>
  );
}
