import { InquiryForm } from "@/components/inquiry-form";

export default function StartJourneyPage() {
  return (
    <main className="section-space">
      <section className="editorial-container max-w-3xl">
        <p className="eyebrow">Atelier Élevé</p>
        <h1 className="font-serif mt-3 text-4xl leading-tight md:text-6xl">
          Start Your Journey with Atelier Élevé
        </h1>
        <p className="section-lead mt-5 max-w-2xl">
          We would be honored to thoughtfully plan and design your upcoming
          celebration. Share a few details below, and our team will be in touch.
        </p>
        <InquiryForm />
      </section>
    </main>
  );
}
