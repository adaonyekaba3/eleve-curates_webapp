import { NextResponse } from "next/server";
import { Resend } from "resend";
import { sql } from "@/lib/db";
import { inquirySchema } from "@/lib/validations/inquiry";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = inquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Validation failed", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const {
      fullName,
      email,
      phoneNumber,
      eventType,
      eventDate,
      eventLocation,
      estimatedGuestCount,
      budgetRange,
      referralSource,
      eventDescription,
    } = parsed.data;

    // 1. Save to database (primary — must succeed)
    await sql`
      INSERT INTO inquiries (
        full_name, email, phone, event_type, event_date,
        event_location, guest_count, budget_range, referral_source,
        event_description
      ) VALUES (
        ${fullName}, ${email}, ${phoneNumber || null}, ${eventType}, ${eventDate},
        ${eventLocation}, ${estimatedGuestCount}, ${budgetRange}, ${referralSource || null},
        ${eventDescription}
      )
    `;

    // 2. Send email notification (non-blocking — do not fail the request)
    try {
      await resend.emails.send({
        from: "Élevé Curates <onboarding@resend.dev>",
        to: "adaobi@elevecurates.com",
        subject: "New Inquiry — Élevé Curates",
        html: `
          <div style="font-family: Georgia, serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="font-size: 20px; margin-bottom: 24px; border-bottom: 1px solid #e5e5e5; padding-bottom: 12px;">
              New Inquiry Received
            </h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 15px; line-height: 1.6;">
              <tr><td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top;">Name</td><td style="padding: 6px 0;">${fullName}</td></tr>
              <tr><td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top;">Email</td><td style="padding: 6px 0;">${email}</td></tr>
              <tr><td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top;">Phone</td><td style="padding: 6px 0;">${phoneNumber || "—"}</td></tr>
              <tr><td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top;">Event Type</td><td style="padding: 6px 0;">${eventType}</td></tr>
              <tr><td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top;">Event Date</td><td style="padding: 6px 0;">${eventDate}</td></tr>
              <tr><td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top;">Location</td><td style="padding: 6px 0;">${eventLocation}</td></tr>
              <tr><td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top;">Guest Count</td><td style="padding: 6px 0;">${estimatedGuestCount}</td></tr>
              <tr><td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top;">Budget</td><td style="padding: 6px 0;">${budgetRange}</td></tr>
              <tr><td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top;">Referral Source</td><td style="padding: 6px 0;">${referralSource || "—"}</td></tr>
              <tr><td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top;">Description</td><td style="padding: 6px 0;">${eventDescription}</td></tr>
            </table>
            <p style="margin-top: 24px; font-size: 13px; color: #888;">
              This inquiry was submitted via the Élevé Curates website.
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
    }

    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to submit inquiry:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
