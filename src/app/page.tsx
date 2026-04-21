import Image from "next/image";
import Link from "next/link";
import HomeSplash from "@/components/home-splash";

export default function Home() {
  return (
    <main>
      <HomeSplash />
      <section className="relative min-h-[calc(100dvh-5rem)] overflow-hidden border-b border-black/10 bg-gradient-to-b from-[#f7f1e7] to-[#f4ede1]">
        <div className="editorial-container relative z-10 flex min-h-[calc(100dvh-5rem)] flex-col items-center justify-center section-space text-center">
          <div className="hero-home-logo mb-5 md:mb-7">
            <Image
              src="/images/atelier-eleve-hero-mark.png"
              alt="Atelier Élevé"
              width={448}
              height={448}
              sizes="(max-width: 768px) 62vw, 364px"
              className="h-auto w-full object-contain drop-shadow-[0_4px_24px_rgba(24,22,20,0.12)]"
            />
          </div>
          <p className="eyebrow">Atelier Élevé</p>
          <h1 className="editorial-heading mt-5 text-[2.9rem] text-ink md:mt-6 md:text-7xl">
            Every Moment, Elevated.
          </h1>
          <p className="section-lead mx-auto mt-6 max-w-2xl">
            Atelier Élevé curates refined celebrations through thoughtful planning,
            design, and styling.
          </p>
          <div className="mt-10">
            <Link
              href="/inquire"
              className="editorial-button-primary"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="section-space editorial-container">
        <p className="eyebrow">Our Approach</p>
        <h2 className="section-title mt-4 max-w-3xl">
          Our Approach
        </h2>
        <p className="section-lead mt-6 max-w-[62ch]">
          Atelier Élevé is a creative studio dedicated to designing and executing
          meaningful celebrations with clarity, intention, and attention to detail.
          Rooted in excellence and thoughtful service, every element is considered
          and every moment is curated with care.
        </p>
      </section>

      <section id="services" className="section-space border-y border-black/10">
        <div className="editorial-container">
          <p className="eyebrow">Services</p>
          <h2 className="section-title mt-4 max-w-3xl">
            Our Services
          </h2>
          <p className="section-lead mt-5 max-w-[64ch]">
            Atelier Élevé designs and produces refined celebrations across the
            USA, Lagos, and destinations worldwide — blending cultural elegance
            with modern luxury.
          </p>
          <p className="mt-6 text-[12px] uppercase tracking-[0.22em] text-muted">
            USA × Lagos. Available for global travel.
          </p>
          <div className="mt-8">
            <Link href="/services" className="editorial-button-subtle">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space editorial-container text-center" id="inquire">
        <p className="eyebrow">Inquire</p>
        <h2 className="section-title mt-4">Begin Your Experience</h2>
        <p className="section-lead mx-auto mt-5 max-w-[58ch]">
          Share your vision and let Atelier Élevé thoughtfully curate your next
          celebration.
        </p>
        <div className="mt-8">
          <Link
            href="/inquire"
            className="editorial-button-primary"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </main>
  );
}
