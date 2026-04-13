import type { Metadata } from "next";
import Link from "next/link";
import { MaisonEleveIntakeForm } from "@/components/maison-eleve-intake-form";

export const metadata: Metadata = {
  title: "Maison Élevé – Bespoke Styling & Tailoring Intake | Élevé Curates",
  description:
    "Begin your bespoke styling and tailoring journey with Maison Élevé, a house of Élevé Curates.",
};

export default function MaisonEleveIntakePage() {
  return (
    <main className="section-space bg-ivory text-ink">
      <div className="editorial-container max-w-3xl">
        <p className="eyebrow">Maison Élevé</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight md:text-6xl">
          Maison Élevé – Bespoke Styling &amp; Tailoring Intake
        </h1>
        <p className="mt-6 font-serif text-2xl leading-tight text-ink md:text-3xl">
          Begin Your Bespoke Experience
        </p>
        <p className="mt-5 max-w-2xl text-muted">
          Thank you for your interest in Maison Élevé. Please complete this form
          to help us understand your vision, style preferences, and event needs.
          Our team will review and follow up with next steps.
        </p>
        <MaisonEleveIntakeForm />
        <p className="mt-16 text-center text-[11px] uppercase tracking-[0.2em] text-muted">
          <Link href="/" className="transition hover:text-ink">
            ← Back to Élevé Curates
          </Link>
        </p>
      </div>
    </main>
  );
}
