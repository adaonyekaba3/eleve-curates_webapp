# Atelier Élevé — Creative Event Studio Platform

A modern, editorial-style website and digital platform for **Atelier Élevé**, a creative studio for refined celebrations and bespoke styling, operating between Boston (USA) and Ikoyi, Lagos (Nigeria), serving Victoria Island, Lekki, Banana Island, and surrounding areas.

## Overview

Atelier Élevé focuses on:

* Weddings and signature celebrations
* Event planning and coordination
* Event design and styling
* Bespoke personal styling and cultural detail

This project is the brand’s digital experience — designed to feel calm, intentional, and editorial while guiding visitors toward inquiry.

## Goals

* A premium, minimal web experience
* Clear paths to inquiry and intake
* A scalable foundation for client tools and automation

## Tech Stack

* **Next.js** (App Router)
* **TypeScript**
* **Tailwind CSS**
* **Clerk** (authentication)
* **Neon** (PostgreSQL, where configured)
* **Resend** (transactional email, where configured)

## Design Principles

* Generous whitespace and strong hierarchy
* Neutral palette (ivory, champagne, ink, soft gold)
* Serif display type with clean sans-serif body copy
* Subtle motion and restrained ornament

## Brand positioning

Atelier Élevé serves clients in:

* Boston, USA
* Ikoyi, Lagos (and Victoria Island, Lekki, Banana Island)

Blending cultural depth with a refined, contemporary editorial tone.

## Features

* Editorial homepage with hero, services, and CTAs
* **Start Your Journey** inquiry flow (`/start-journey`)
* Atelier bespoke intake (`/atelier-eleve/intake`)
* Journal / blog content
* Responsive, mobile-first layout

## Future enhancements

* Deeper client portal and contract workflows
* Inquiry management and notifications
* AI assistant (RAG-based FAQ context)

## Status

Active development focused on brand experience and conversion.

## Philosophy

Intention, stewardship, and quiet confidence — reflected in both the events we design and the digital experience we present.

## Contact

**Atelier Élevé**  
Boston | Ikoyi, Lagos

---

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment variables (see `.env.example` if present in your branch).

3. Add Clerk, database, and Resend values as needed for local features.

4. Run locally:

```bash
npm run dev
```

## Domain Migration (`www.atelier-eleve.com`)

For clean production canonical URLs, set:

```bash
NEXT_PUBLIC_SITE_URL=https://www.atelier-eleve.com
```

in your Vercel **Production** environment variables.

Then complete platform steps:

- In Vercel project **Settings → Domains**, add:
  - `www.atelier-eleve.com`
  - `atelier-eleve.com`
- Set `www.atelier-eleve.com` as primary (if you want `www` canonical).
- Add/keep `elevevents.com` and configure a **308 redirect** to:
  - `https://www.atelier-eleve.com/:splat`
- In Clerk dashboard, add:
  - `https://www.atelier-eleve.com`
  - `https://atelier-eleve.com` (if used)
  - keep `elevevents.com` entries until redirects are fully validated.

Notes:

- Homepage CTA links use relative paths (`/inquire`, `/atelier-eleve/intake`) to remain domain-agnostic.
- Transactional email sender is intentionally still `no-reply@elevevents.com` until the new domain is verified in Resend.

## Key routes

- `/` — Homepage
- `/start-journey` — Inquiry form
- `/inquire` — Inquiry entry and links
- `/atelier-eleve/intake` — Bespoke styling intake
- `/blog` — Journal index
- `/portal` — Authenticated client area (Clerk)
- `/api/inquiry` — Inquiry API
- `/api/maison-eleve-intake` — Atelier intake API
- `/api/rag` — FAQ retrieval for assistant context
