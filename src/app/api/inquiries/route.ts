import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { inquirySchema } from "@/lib/validations/inquiry";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = inquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const user = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
      ? await currentUser()
      : null;
    const inquiry = await db.inquiry.create({
      data: {
        ...parsed.data,
        eventDate: new Date(parsed.data.eventDate),
        clerkUserId: user?.id ?? null,
        phoneNumber: parsed.data.phoneNumber || null,
        referralSource: parsed.data.referralSource || null,
      },
    });

    return NextResponse.json({ ok: true, inquiryId: inquiry.id }, { status: 201 });
  } catch (error) {
    console.error("Failed to submit inquiry", error);
    return NextResponse.json(
      { error: "Unexpected error while submitting inquiry" },
      { status: 500 }
    );
  }
}
