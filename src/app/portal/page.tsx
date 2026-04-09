import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { sql } from "@/lib/db";

export default async function PortalPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const inquiries = await sql`
    SELECT * FROM inquiries WHERE email = ${userId}
    ORDER BY created_at DESC
  `;

  return (
    <main className="section-space editorial-container">
      <p className="eyebrow">Client Portal</p>
      <h1 className="mt-4 font-serif text-4xl md:text-6xl">
        Your Experience Dashboard
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        This portal is structured for future contracts, invoices, mood boards,
        and vendor communication. Today, you can securely review your submitted
        inquiries.
      </p>

      <div className="mt-10 space-y-4">
        {inquiries.length === 0 ? (
          <p className="rounded-sm border border-black/10 bg-beige/25 p-5 text-muted">
            No inquiries found yet. Submit your details via Start Your Journey.
          </p>
        ) : (
          inquiries.map((inquiry) => (
            <article
              key={inquiry.id}
              className="rounded-sm border border-black/10 bg-beige/25 p-6"
            >
              <h2 className="font-serif text-3xl">{inquiry.event_type}</h2>
              <p className="mt-2 text-sm text-muted">
                {inquiry.event_location} | {inquiry.event_date}
              </p>
              <p className="mt-2 text-sm text-muted">
                Guest Count: {inquiry.guest_count} | Budget:{" "}
                {inquiry.budget_range}
              </p>
              <p className="mt-4 text-sm text-muted">{inquiry.event_description}</p>
            </article>
          ))
        )}
      </div>
    </main>
  );
}
