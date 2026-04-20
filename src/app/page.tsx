import Link from "next/link";
type Service = {
  title: string;
  description: string;
  inclusions: string[];
  startingInvestment: string;
  bestFor: string;
  cta?: {
    label: string;
    href: string;
  };
};

const services: Service[] = [
  {
    title: "Event Planning & Coordination",
    description:
      "Comprehensive planning and seamless coordination designed to ensure every detail is executed with precision.",
    inclusions: [
      "Full-service planning or month-of coordination",
      "Vendor sourcing & management",
      "Budget oversight",
      "Timeline creation & execution",
    ],
    startingInvestment: "$1,500 - $5,000+",
    bestFor: "Clients seeking structured guidance and seamless execution",
  },
  {
    title: "Event Design & Styling",
    description:
      "A cohesive visual direction where every detail is intentionally designed to create a refined event experience.",
    inclusions: [
      "Mood board & creative direction",
      "Backdrop & installation design",
      "Tablescape styling",
      "Floral design (faux + fresh)",
    ],
    startingInvestment: "$1,000 - $4,000+",
    bestFor: "Clients who value a cohesive and well-designed aesthetic",
  },
  {
    title: "Weddings & Signature Celebrations",
    description:
      "Celebrations designed to honor meaningful moments with care and intentional execution.",
    inclusions: [
      "Weddings (traditional & white)",
      "Bridal showers & milestone celebrations",
    ],
    startingInvestment: "$2,500 - $10,000+",
    bestFor: "Clients planning milestone or once-in-a-lifetime events",
  },
  {
    title: "Let's Bach! - The Atelier Élevé Experience",
    description:
      "Pre-wedding celebrations designed for the bride, groom, and their closest circle, combining thoughtful planning, styling, and seamless execution.",
    inclusions: [
      "Bachelorette and bachelor event planning",
      "Group experience design",
      "Decor styling and setup",
      "Timeline coordination",
    ],
    startingInvestment: "$1,200 - $3,500+",
    bestFor: "Bridal parties and friends planning curated pre-wedding experiences",
  },
  {
    title: "Proposal Experiences",
    description:
      "Intimate and thoughtfully planned proposal experiences designed to create a meaningful and memorable moment.",
    inclusions: [
      "Proposal concept design",
      "Location scouting",
      "Decor styling",
      "On-site coordination",
    ],
    startingInvestment: "$800 - $2,500+",
    bestFor: "Clients planning intentional and memorable proposals",
  },
  {
    title: "Honeymoon Experiences",
    description:
      "Curated post-celebration experiences designed with thoughtful detail and seamless coordination.",
    inclusions: [
      "Travel aesthetic & itinerary curation",
      "Romantic setup coordination",
      "Experience design",
    ],
    startingInvestment: "$1,000+",
    bestFor: "Couples seeking a personalized honeymoon experience",
  },
  {
    title: "Bespoke Personal Styling",
    description:
      "Personal styling designed to align your presence with the tone and aesthetic of your event.",
    inclusions: [
      "Event outfit curation",
      "Bridal & celebrant styling",
      "Photoshoot styling",
    ],
    startingInvestment: "$250 - $1,000+",
    bestFor: "Clients who want a cohesive and refined personal presentation",
    cta: {
      label: "Inquire for Styling",
      href: "https://elevevents.com/atelier-eleve/intake",
    },
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-black/10 bg-gradient-to-b from-[#f7f1e7] to-[#f4ede1]">
        <div className="editorial-container section-space relative text-center">
          <p className="eyebrow">Atelier Élevé</p>
          <h1 className="editorial-heading mt-6 text-[2.9rem] md:text-7xl">
            Every Moment, Elevated.
          </h1>
          <p className="section-lead mx-auto mt-6 max-w-2xl">
            Atelier Élevé curates refined celebrations through thoughtful planning,
            design, and styling.
          </p>
          <div className="mt-10">
            <Link
              href="https://elevevents.com/atelier-eleve/inquire"
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
            Atelier Élevé Services
          </h2>
          <p className="section-lead mt-5 max-w-[64ch]">
            Thoughtfully curated services designed to support every stage of your
            celebration.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3 className="font-serif text-[1.72rem] leading-[1.15] md:text-[1.95rem]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-[58ch] text-[15px] leading-7 text-muted">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2 text-[14px] leading-7 text-ink/90 md:text-[15px]">
                  {service.inclusions.map((inclusion) => (
                    <li key={inclusion} className="flex gap-2">
                      <span className="mt-[2px] text-gold">•</span>
                      <span>{inclusion}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-3 border-t border-black/10 pt-5">
                  <p>
                    <span className="service-label">Starting Investment</span>
                    <span className="service-value">{service.startingInvestment}</span>
                  </p>
                  <p>
                    <span className="service-label">Best For</span>
                    <span className="service-value normal-case tracking-normal">
                      {service.bestFor}
                    </span>
                  </p>
                </div>

                {service.cta ? (
                  <div className="mt-6">
                    <Link href={service.cta.href} className="editorial-button-subtle">
                      {service.cta.label}
                    </Link>
                  </div>
                ) : null}
              </article>
            ))}
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
            href="https://elevevents.com/atelier-eleve/inquire"
            className="editorial-button-primary"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </main>
  );
}
