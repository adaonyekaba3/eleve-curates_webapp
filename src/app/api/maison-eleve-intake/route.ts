import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  maisonEleveIntakeSchema,
  type MaisonEleveIntakeInput,
} from "@/lib/validations/maison-eleve-intake";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const MAX_IMAGE_FILES = 4;

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function row(label: string, value: string | undefined) {
  const v = value && String(value).trim() !== "" ? escapeHtml(String(value)) : "—";
  return `<tr><td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;color:#b69c78;">${escapeHtml(label)}</td><td style="padding:8px 0;">${v}</td></tr>`;
}

function formDataToPayload(fd: FormData): Record<string, unknown> {
  const str = (k: string) => String(fd.get(k) ?? "").trim();
  const arr = (k: string) => fd.getAll(k).map(String).filter((s) => s.length > 0);

  return {
    fullName: str("fullName"),
    email: str("email"),
    phoneNumber: str("phoneNumber"),
    eventType: str("eventType"),
    eventName: str("eventName"),
    eventDate: str("eventDate"),
    eventLocation: str("eventLocation"),
    serviceRequest: arr("serviceRequest"),
    outfitCount: str("outfitCount"),
    styleVision: str("styleVision"),
    pinterestLink: str("pinterestLink"),
    fabrics: arr("fabrics"),
    preferredColors: str("preferredColors"),
    customMeasurements: str("customMeasurements"),
    standardSize: str("standardSize"),
    fitNotes: str("fitNotes"),
    budgetRange: str("budgetRange"),
    outfitCompleteDate: str("outfitCompleteDate"),
    fittingsAvailable: str("fittingsAvailable"),
    additionalServices: arr("additionalServices"),
    finalNotes: str("finalNotes"),
  };
}

function formatPayloadForWebhook(data: MaisonEleveIntakeInput) {
  return {
    ...data,
    fabrics: data.fabrics ?? [],
    additionalServices: data.additionalServices ?? [],
  };
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        { success: false, message: "Expected multipart form data." },
        { status: 400 }
      );
    }

    const fd = await request.formData();
    const raw = formDataToPayload(fd);

    const fabrics = raw.fabrics as string[];
    const additionalServices = raw.additionalServices as string[];
    raw.fabrics = fabrics.length ? fabrics : undefined;
    raw.additionalServices = additionalServices.length ? additionalServices : undefined;

    const parsed = maisonEleveIntakeSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          issues: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const imageFields = fd.getAll("inspirationImages");
    const attachments: { filename: string; content: Buffer }[] = [];

    for (const entry of imageFields) {
      if (!(entry instanceof File) || entry.size === 0) continue;
      if (attachments.length >= MAX_IMAGE_FILES) break;
      if (entry.size > MAX_IMAGE_BYTES) {
        return NextResponse.json(
          { success: false, message: "Each inspiration image must be 5MB or smaller." },
          { status: 400 }
        );
      }
      const buf = Buffer.from(await entry.arrayBuffer());
      attachments.push({
        filename: entry.name || "inspiration.jpg",
        content: buf,
      });
    }

    const webhookUrl = process.env.MAISON_ELEVE_INTAKE_WEBHOOK_URL;
    let webhookOk = false;
    if (webhookUrl) {
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "maison-eleve-intake",
            ...formatPayloadForWebhook(data),
            inspirationImageCount: attachments.length,
            inspirationImageNames: attachments.map((a) => a.filename),
          }),
        });
        webhookOk = res.ok;
        if (!webhookOk) {
          console.error("Maison Élevé webhook returned", res.status, await res.text());
        }
      } catch (e) {
        console.error("Maison Élevé webhook failed:", e);
      }
    }

    let emailOk = false;
    if (resend) {
      try {
        const rows = [
          row("Full name", data.fullName),
          row("Email", data.email),
          row("Phone", data.phoneNumber),
          row("Event type", data.eventType),
          row("Event name / Bride’s name", data.eventName),
          row("Event date", data.eventDate),
          row("Event location", data.eventLocation),
          row("Services", data.serviceRequest.join(", ")),
          row("Outfits needed", data.outfitCount),
          row("Style vision", data.styleVision),
          row("Pinterest / link", data.pinterestLink),
          row("Fabrics", data.fabrics?.join(", ")),
          row("Preferred colors", data.preferredColors),
          row("Custom measurements", data.customMeasurements === "yes" ? "Yes" : "No"),
          row("Standard size", data.standardSize || undefined),
          row("Fit notes", data.fitNotes),
          row("Budget", data.budgetRange),
          row("Outfit complete by", data.outfitCompleteDate),
          row("Available for fittings", data.fittingsAvailable === "yes" ? "Yes" : "No"),
          row("Additional services", data.additionalServices?.join(", ")),
          row("Final notes", data.finalNotes),
        ].join("");

        await resend.emails.send({
          from: "Élevé Curates <no-reply@elevevents.com>",
          to: "eleve.events.ai@gmail.com",
          subject: "Maison Élevé — New bespoke intake",
          attachments:
            attachments.length > 0
              ? attachments.map((a) => ({
                  filename: a.filename,
                  content: a.content,
                }))
              : undefined,
          html: `
          <div style="font-family:Georgia,serif;color:#1a1a1a;max-width:640px;margin:0 auto;padding:28px;background:#f8f2e8;">
            <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#b69c78;margin:0 0 8px;">Maison Élevé</p>
            <h1 style="font-size:22px;margin:0 0 20px;border-bottom:1px solid #e5dcd0;padding-bottom:14px;">Bespoke intake submission</h1>
            <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.55;">${rows}</table>
            <p style="margin-top:28px;font-size:12px;color:#6b6258;">Submitted via maison-eleve intake on Élevé Curates.</p>
          </div>`,
        });
        emailOk = true;
      } catch (e) {
        console.error("Maison Élevé Resend failed:", e);
      }
    }

    if (!webhookOk && !emailOk) {
      const configured = Boolean(webhookUrl || process.env.RESEND_API_KEY);
      return NextResponse.json(
        {
          success: false,
          message: configured
            ? "We could not deliver your submission. Please try again shortly."
            : "This form is not yet configured on the server.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Intake received" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Maison Élevé intake error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
