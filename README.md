# Élevé Curates — Luxury Event Planning Platform

A modern, editorial-style luxury website and digital platform for Élevé Curates — a transatlantic event planning and creative direction brand operating between Boston (USA) and Ikoyi, Lagos (Nigeria), serving Victoria Island, Lekki, Banana Island, and surrounding premium areas.

## ✨ Overview

Élevé Curates is a high-end event planning company specializing in:

* Luxury weddings
* Private celebrations
* Corporate events
* Bespoke styling and cultural detailing

This project represents the brand’s digital experience — designed to feel like a luxury editorial publication while seamlessly converting visitors into high-value client inquiries.

---

## 🎯 Goals

* Create a premium, editorial web experience inspired by luxury fashion and wedding brands
* Establish a strong digital presence to attract high-end clientele
* Provide a seamless inquiry flow for prospective clients
* Build a scalable foundation for future client management and automation

---

## 🛠️ Tech Stack (V1)

* **Next.js 14 (App Router)**
* **TypeScript**
* **Tailwind CSS**

---

## 🎨 Design Principles

* Minimal, elegant, and high-end
* Neutral tones (ivory, champagne, black)
* Editorial layout inspired by Vogue Weddings
* Warm, emotional storytelling (not cold corporate design)
* Strong visual hierarchy with immersive imagery
* Subtle animations and refined interactions

---

## 🌍 Brand Positioning

Élevé Curates operates between:

* Boston, USA
* Ikoyi, Lagos (serving Victoria Island, Lekki, Banana Island)

Blending Nigerian cultural elegance with modern global luxury.

---

## 🚀 Features (V1)

* Luxury editorial homepage with hero section
* “Start Your Journey” dedicated inquiry experience
* Structured service offerings
* Portfolio gallery (editorial grid layout)
* Responsive, mobile-first design
* Clean and scalable component architecture

---

## 🔮 Future Enhancements (V2)

* Authentication (Clerk)
* Database integration (AWS RDS)
* Client portal dashboard
* Inquiry management system
* AI-powered assistant (RAG-based)

---

## 📌 Status

🚧 Version 1 — In Development
Focused on frontend experience and inquiry conversion.

---

## 🤍 Philosophy

This is not just a website.

It is a curated digital experience designed to reflect:

* intention
* cultural depth
* quiet luxury

---

## 📬 Contact

For inquiries and collaborations:
Élevé Curates
Boston | Ikoyi, Lagos

---

## 🕊️ Note

This project is part of the foundational build for a luxury, transatlantic event planning brand — combining design, technology, and storytelling to create meaningful experiences.


## Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment variables:

```bash
cp .env.example .env.local
```

3. Add real Clerk and PostgreSQL values in `.env.local`.

4. Generate Prisma client and run migration:

```bash
npm run prisma:generate
npm run prisma:migrate
```

5. Run locally:

```bash
npm run dev
```

## Key Routes

- `/` - Editorial brand website
- `/start-journey` - Database-backed inquiry form
- `/portal` - Authenticated client dashboard
- `/api/inquiries` - Inquiry API endpoint
- `/api/rag` - Retrieval endpoint for FAQ context