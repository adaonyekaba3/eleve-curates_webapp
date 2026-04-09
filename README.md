# Élevé Curates Platform

Production-ready Next.js 14 App Router platform for a transatlantic luxury event planning and creative direction brand.

## Stack

- Next.js 14 + TypeScript
- Tailwind CSS
- Clerk authentication
- PostgreSQL (AWS RDS-ready) via Prisma
- Optional basic RAG retrieval endpoint (`/api/rag`)

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
