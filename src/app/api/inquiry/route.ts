import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { inquirySchema } from "@/lib/validations/inquiry";

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
