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
    <main className="min-h-[calc(100vh-5rem)] bg-[#0a0908] pb-24 pt-8 text-[#ebe4d9] md:pb-32 md:pt-12">
      <div className="editorial-container max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.38em] text-gold/90">
          Élevé Curates · Maison Élevé
        </p>
        <h1 className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-[#faf6f0] md:text-5xl">
          Maison Élevé – Bespoke Styling &amp; Tailoring Intake
        </h1>
        <p className="mt-8 font-serif text-2xl text-[#f0ebe3] md:text-3xl">
          Begin Your Bespoke Experience
        </p>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#b8aea2]">
          Thank you for your interest in Maison Élevé. Please complete this form
          to help us understand your vision, style preferences, and event needs.
          Our team will review and follow up with next steps.
        </p>
        <MaisonEleveIntakeForm />
        <p className="mt-16 text-center text-[11px] uppercase tracking-[0.2em] text-white/35">
          <Link href="/" className="text-gold/80 transition hover:text-gold">
            ← Back to Élevé Curates
          </Link>
        </p>
      </div>
    </main>
  );
}
