"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showHeroLogo, setShowHeroLogo] = useState(true);

  const services = [
    {
      title: "Full-Service Wedding Planning",
      body: "Complete end-to-end planning for destination and city weddings, shaped with precision and emotional depth.",
    },
    {
      title: "Event Design & Creative Direction",
      body: "Concept-led styling, visual storytelling, and immersive design language tailored to your narrative.",
    },
    {
      title: "Private & Corporate Events",
      body: "Elegant milestones and executive events orchestrated with discretion, polish, and world-class service.",
    },
    {
      title: "Bespoke Styling & Cultural Detailing",
      body: "Nigerian cultural elegance woven into elevated contemporary styling that feels deeply personal.",
    },
    {
      title: "Vendor Sourcing (USA ↔ Nigeria)",
      body: "Curated sourcing across trusted transatlantic partners to ensure seamless luxury execution.",
    },
  ];

  const portfolioImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1400&q=80",
  ];

  return (
    <main>
      <section className="relative h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
        <div className="absolute inset-0 z-0 bg-hero-overlay" />

        {showHeroLogo ? (
          <div className="pointer-events-none absolute left-1/2 top-[14%] z-10 w-[180px] -translate-x-1/2 sm:w-[230px] md:w-[300px] lg:w-[420px] xl:w-[500px]">
            <Image
              src="/images/eleve-logo-gold.png"
              alt="Élevé Curates gold logo"
              width={520}
              height={180}
              priority
              onError={() => setShowHeroLogo(false)}
              className="h-auto w-full opacity-[0.7] brightness-110 drop-shadow-[0_0_14px_rgba(227,196,145,0.18)] animate-[heroLogoFade_1.4s_ease-out_forwards]"
            />
          </div>
        ) : null}

        <div className="editorial-container relative z-20 flex h-full flex-col items-center justify-center text-center text-ivory fade-in">
          <p className="eyebrow text-ivory/80">Boston | Ikoyi, Lagos</p>
          <h1 className="editorial-heading mt-4 max-w-5xl text-5xl md:text-7xl">
            Luxury, curated with intention.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ivory/90 md:text-lg">
            Transatlantic event planning and bespoke styling across Boston and
            Ikoyi, Lagos.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/inquire"
              className="rounded-full bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-ivory transition hover:bg-black"
            >
              Inquire Privately
            </Link>
            <Link
              href="/start-journey"
              className="rounded-full border border-ivory/80 bg-transparent px-8 py-3 text-[11px] uppercase tracking-[0.24em] text-ivory transition hover:bg-ivory/15"
            >
              Start Your Journey
            </Link>
            <Link
              href="/maison-eleve/intake"
              className="text-[10px] uppercase tracking-[0.28em] text-ivory/75 transition hover:text-ivory"
            >
              Maison Élevé — Bespoke styling &amp; tailoring
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="section-space editorial-container">
        <p className="eyebrow">About</p>
        <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-tight md:text-6xl">
          A culturally fluent luxury brand rooted between Boston and Ikoyi,
          Lagos.
        </h2>
        <p className="mt-6 max-w-3xl text-muted">
          Élevé Curates is a transatlantic planning and creative direction
          studio serving discerning clients across Boston, Ikoyi, Victoria
          Island, Lekki, and Banana Island. We design emotionally resonant
          celebrations that merge global editorial refinement with Nigerian
          cultural elegance.
        </p>
      </section>

      <section id="services" className="section-space border-y border-black/10">
        <div className="editorial-container">
          <p className="eyebrow">Our Offerings</p>
          <h2 className="font-serif mt-4 max-w-4xl text-4xl md:text-6xl">
            Elevated services for modern luxury clients.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-sm border border-gold/30 bg-beige/30 p-6"
              >
                <h3 className="font-serif text-3xl">{service.title}</h3>
                <p className="mt-3 text-sm text-muted">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-space editorial-container">
        <p className="eyebrow">Portfolio</p>
        <h2 className="font-serif mt-4 max-w-4xl text-4xl md:text-6xl">
          Editorial moments in fashion, florals, and Nigerian cultural beauty.
        </h2>
        <div className="mt-10 grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-4">
          <div
            className="md:col-span-2 md:row-span-2 bg-cover bg-center shadow-soft"
            style={{ backgroundImage: `url(${portfolioImages[0]})` }}
          />
          <div
            className="bg-cover bg-center md:row-span-2"
            style={{ backgroundImage: `url(${portfolioImages[1]})` }}
          />
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${portfolioImages[2]})` }}
          />
          <div
            className="bg-cover bg-center md:col-span-2"
            style={{ backgroundImage: `url(${portfolioImages[3]})` }}
          />
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${portfolioImages[4]})` }}
          />
        </div>
      </section>

      <section className="section-space editorial-container text-center" id="inquire">
        <p className="eyebrow">Inquire</p>
        <h2 className="font-serif mt-4 text-4xl md:text-6xl">Begin Your Experience</h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted">
          We accept a limited number of clients to ensure each experience is
          thoughtfully executed.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/start-journey"
            className="inline-block rounded-full bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-ivory transition hover:bg-black"
          >
            Start Your Journey
          </Link>
          <Link
            href="/maison-eleve/intake"
            className="inline-block rounded-full border border-gold/50 px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-ink transition hover:border-gold hover:bg-champagne/50"
          >
            Maison Élevé intake
          </Link>
        </div>
      </section>
    </main>
  );
}
