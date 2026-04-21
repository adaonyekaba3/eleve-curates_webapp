import Link from "next/link";

type Package = {
  title: string;
  description: string;
  investment: string;
  includes: string[];
  team: string;
  ctaLabel: string;
  ctaHref: string;
};

const weddingPackages: Package[] = [
  {
    title: "Luxury Weddings — Full Planning",
    description:
      "For the couple who has a vision but needs a trusted hand to bring it to life. With full support starting at least 12 months before ‘I do.’",
    investment: "Starting at $10,000",
    includes: [
      "Planning sessions tailored to your needs",
      "Direct access to your planner for easy communication",
      "Thoughtful budget planning and management",
      "3 site visits",
      "Venue scouting, selection, and booking support",
      "Trusted vendor recommendations, hiring & coordination",
      "Final vendor meetings & contract reviews",
      "Personalized wedding design that brings your vision to life",
      "Ceremony rehearsal coordination",
      "Support for out-of-town guest needs",
      "Full wedding day management",
      "Custom timeline and detailed day-of documents",
      "Access to your private client portal + digital planning tools",
    ],
    team: "1 Lead Planner | 1 Event Coordinator | 1 Assistant | 1 Bridal Assistant",
    ctaLabel: "Book Now",
    ctaHref: "/start-journey",
  },
  {
    title: "Partial Planning",
    description:
      "For the couple planning their own wedding, but wants expert support to execute it flawlessly, beginning 8–10 months before the big day.",
    investment: "Starting at $7,000",
    includes: [
      "Ongoing, direct communication and support",
      "Budget guidance and assistance",
      "Vendor coordination & meeting attendance for up to 2 vendors",
      "Ceremony rehearsal coordination",
      "10 hours of event management",
      "Customized wedding timeline & detailed logistics",
      "Customized mood board",
      "Access to client portal + digital planning tools",
      "Dedicated point of contact on the wedding day",
      "2 site visits",
      "Vendor sourcing and booking if applicable (client must have at least 3 vendors booked prior)",
    ],
    team: "1 Lead Planner | 1 Event Coordinator | 1 Assistant",
    ctaLabel: "Book Now",
    ctaHref: "/start-journey",
  },
  {
    title: "Day-Of Coordination",
    description:
      "For the couple curating their own day, but seeking expert execution. We step in 6 weeks out to ensure a seamless, stress-free celebration.",
    investment: "Starting at $3,500",
    includes: [
      "Direct, priority communication access",
      "Final vendor coordination & meeting attendance",
      "2 site visits",
      "Contract review for peace of mind",
      "Ceremony rehearsal management",
      "Expert day-of coordination & event flow",
      "Custom wedding timeline & detail documents",
      "Access to client portal + digital planning tools",
      "Designated point of contact on the wedding day",
      "10 hours of wedding coverage",
    ],
    team: "1 Lead Planner | 1 Event Coordinator | 1 Assistant",
    ctaLabel: "Book Now",
    ctaHref: "/start-journey",
  },
  {
    title: "Atelier Élevé Bridal Experience — Bachelorette & Pre-Wedding Events",
    description:
      "For couples planning their wedding with Atelier Élevé who want expertly curated pre-wedding experiences to welcome and celebrate with guests.",
    investment: "Starting at $800 – $1,000",
    includes: [
      "Planning sessions tailored to your needs",
      "Direct access to your planner",
      "Budget planning and management",
      "2 site visits",
      "Venue sourcing and booking support",
      "Vendor recommendations and coordination",
      "Final vendor meetings & reviews",
      "Personalized event design",
      "Guest experience support",
      "Full event day management",
      "Custom timeline and documentation",
      "Client portal + digital planning tools",
    ],
    team: "1 Lead Planner | 1 Event Coordinator | 1 Assistant",
    ctaLabel: "Book Now",
    ctaHref: "/start-journey",
  },
];

const privateEventsPackage: Package = {
  title: "Full-Service Event Planning",
  description:
    "For those who have a vision but need a trusted hand to bring it to life.",
  investment: "Starting at $2,000",
  includes: [
    "Planning sessions tailored to your needs",
    "Direct communication with your planner",
    "Budget planning and management",
    "2 site visits",
    "Venue sourcing and booking support",
    "Vendor sourcing and coordination",
    "Contract reviews",
    "Custom event design",
    "Guest experience planning",
    "Full event day management",
    "Timeline and logistics documentation",
    "Client portal access",
  ],
  team: "1 Lead Planner | 1 Event Coordinator | 1 Assistant",
  ctaLabel: "Book Now",
  ctaHref: "/start-journey",
};

const digitalExperienceTiers = [
  {
    name: "Essential",
    price: "$300–$500",
    details:
      "Core event communication setup, guest-facing digital touchpoints, and day-of distribution tools.",
  },
  {
    name: "Signature",
    price: "$600–$1,000",
    details:
      "Expanded design-forward digital suite with custom guest communications, planning workflows, and schedule tools.",
  },
  {
    name: "Full",
    price: "$1,000–$1,500+",
    details:
      "Comprehensive digital ecosystem integrating pre-event, event-day, and post-event coordination experiences.",
  },
];

const vendorPartners = [
  "Photography",
  "Videography",
  "Floral Design",
  "Venue Design & Decor Installations",
  "Lighting & Production",
  "Catering & Cake Artistry",
  "Entertainment (DJ, Live Band, MC)",
  "Beauty & Glam Team",
  "Bridal Styling & Tailoring",
  "Stationery & Signage",
  "Rentals & Tablescape Styling",
  "Content Creation & Social Coverage",
  "Guest Concierge & Hospitality",
  "Transportation & Guest Logistics",
];

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article className="service-card">
      <h3 className="font-serif text-[1.72rem] leading-[1.15] md:text-[1.95rem]">
        {pkg.title}
      </h3>
      <p className="mt-4 max-w-[62ch] text-[15px] leading-7 text-muted">
        {pkg.description}
      </p>
      <p className="mt-5">
        <span className="service-label">Investment</span>
        <span className="service-value">{pkg.investment}</span>
      </p>
      <ul className="mt-5 space-y-2 text-[14px] leading-7 text-ink/90 md:text-[15px]">
        {pkg.includes.map((inclusion) => (
          <li key={inclusion} className="flex gap-2">
            <span className="mt-[2px] text-gold">•</span>
            <span>{inclusion}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 space-y-3 border-t border-black/10 pt-5">
        <p>
          <span className="service-label">Team</span>
          <span className="service-value normal-case tracking-normal">
            {pkg.team}
          </span>
        </p>
      </div>
      <div className="mt-6">
        <Link href={pkg.ctaHref} className="editorial-button-subtle">
          {pkg.ctaLabel}
        </Link>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <section className="section-space border-b border-black/10">
        <div className="editorial-container">
          <p className="eyebrow">Services</p>
          <h1 className="section-title mt-4 max-w-4xl">
            Refined planning and design experiences for milestone celebrations.
          </h1>
          <p className="section-lead mt-6 max-w-[72ch]">
            Atelier Élevé delivers high-touch planning and production with
            clarity, discretion, and precision for clients across the USA,
            Lagos, and destinations worldwide.
          </p>
          <p className="mt-6 text-[12px] uppercase tracking-[0.22em] text-muted">
            USA × Lagos. Available for global travel.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="editorial-container">
          <p className="eyebrow">Core Services</p>
          <h2 className="section-title mt-4 max-w-3xl">Luxury Weddings</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {weddingPackages.map((pkg) => (
              <PackageCard key={pkg.title} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-black/10">
        <div className="editorial-container">
          <p className="eyebrow">General Event Planning</p>
          <h2 className="section-title mt-4 max-w-3xl">
            Private Celebrations & Events
          </h2>
          <div className="mt-10">
            <PackageCard pkg={privateEventsPackage} />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="editorial-container">
          <p className="eyebrow">Digital Services</p>
          <h2 className="section-title mt-4 max-w-4xl">
            Event Digital Experience Suite — Atelier Élevé
          </h2>
          <p className="section-lead mt-6 max-w-[72ch]">
            Atelier Élevé designs seamless digital experiences that support and
            elevate your event — from guest communication to on-site coordination.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {digitalExperienceTiers.map((tier) => (
              <article key={tier.name} className="service-card">
                <h3 className="font-serif text-3xl leading-tight">{tier.name}</h3>
                <p className="mt-4">
                  <span className="service-label">Investment</span>
                  <span className="service-value">{tier.price}</span>
                </p>
                <p className="mt-5 text-[15px] leading-7 text-muted">
                  {tier.details}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-black/10">
        <div className="editorial-container">
          <p className="eyebrow">Curated Ecosystem</p>
          <h2 className="section-title mt-4 max-w-4xl">
            Preferred Vendor Partners & Enhancements
          </h2>
          <p className="section-lead mt-6 max-w-[72ch]">
            Through our curated partner network, we align each event with trusted
            specialists selected for quality, reliability, and design alignment.
            Partner pricing varies based on scope, location, and production level.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {vendorPartners.map((vendor) => (
              <article
                key={vendor}
                className="rounded-sm border border-gold/25 bg-beige/20 px-4 py-3 text-[12px] uppercase tracking-[0.16em] text-ink"
              >
                {vendor}
              </article>
            ))}
          </div>
          <p className="mt-6 text-[13px] leading-7 text-muted">
            Pricing note: final partner costs are quoted per event based on
            availability, deliverables, and destination logistics.
          </p>
        </div>
      </section>

      <section className="section-space editorial-container text-center">
        <p className="eyebrow">Final Step</p>
        <h2 className="section-title mt-4">Begin Your Event Experience</h2>
        <div className="mt-8">
          <Link href="/start-journey" className="editorial-button-primary">
            Inquire Now
          </Link>
        </div>
      </section>
    </main>
  );
}
