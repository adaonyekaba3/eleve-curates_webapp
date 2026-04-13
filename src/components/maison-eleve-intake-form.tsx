"use client";

import { FormEvent, useState } from "react";
import {
  maisonAdditionalServiceOptions,
  maisonBudgetRanges,
  maisonEventTypes,
  maisonFabricOptions,
  maisonOutfitCounts,
  maisonServiceOptions,
} from "@/lib/validations/maison-eleve-intake";

const input =
  "mt-2 w-full rounded-md border border-white/10 bg-black/35 px-4 py-3.5 text-[15px] leading-relaxed text-[#f5f0e8] shadow-inner shadow-black/20 placeholder:text-white/35 focus:border-gold/45 focus:outline-none focus:ring-1 focus:ring-gold/25";
const label =
  "block text-[10px] font-medium uppercase tracking-[0.26em] text-gold/95";
const sectionTitle =
  "font-serif text-xl tracking-tight text-[#f8f4ec] md:text-2xl";
const sectionNum =
  "mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/35 text-[11px] font-medium text-gold";
const sectionWrap =
  "rounded-lg border border-white/[0.08] bg-white/[0.03] p-6 md:p-8";
const checkRow =
  "flex cursor-pointer items-start gap-3 rounded-md border border-transparent px-1 py-2 transition hover:border-white/10 hover:bg-white/[0.04]";
const checkInput =
  "mt-1 h-4 w-4 shrink-0 rounded border-white/25 bg-black/40 text-gold focus:ring-gold/40";

function formatServerError(payload: unknown): string {
  if (!payload || typeof payload !== "object") {
    return "Please review your details and try again.";
  }
  const j = payload as {
    message?: string;
    issues?: { fieldErrors?: Record<string, string[]>; formErrors?: string[] };
  };
  const fe = j.issues?.fieldErrors;
  if (fe && typeof fe === "object") {
    const lines = Object.entries(fe).flatMap(([key, msgs]) =>
      (msgs ?? []).map((m) => `${key}: ${m}`)
    );
    if (lines.length) return lines.join(" ");
  }
  const formErr = j.issues?.formErrors;
  if (formErr?.length) return formErr.join(" ");
  if (j.message) return j.message;
  return "Please review your details and try again.";
}

function YesNoRadios({
  name,
  legend,
  required: req,
}: {
  name: string;
  legend: string;
  required?: boolean;
}) {
  return (
    <fieldset className="mt-2">
      <legend className={label}>{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-3">
        {(["yes", "no"] as const).map((v) => (
          <label
            key={v}
            className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-black/30 px-5 py-2.5 text-sm text-[#ebe4d9] transition hover:border-gold/40 has-[:checked]:border-gold/50 has-[:checked]:bg-gold/10"
          >
            <input
              type="radio"
              name={name}
              value={v}
              required={req}
              className="h-3.5 w-3.5 border-white/30 text-gold focus:ring-gold/30"
            />
            {v === "yes" ? "Yes" : "No"}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function MaisonEleveIntakeForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");
  const [serviceError, setServiceError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    setServiceError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.getAll("serviceRequest").length === 0) {
      setServiceError("Please select at least one service.");
      return;
    }

    setStatus("loading");
    let res: Response;
    try {
      res = await fetch("/api/maison-eleve-intake", {
        method: "POST",
        body: fd,
      });
    } catch {
      setStatus("error");
      setMessage(
        "We could not reach the server. Check your connection and try again."
      );
      return;
    }

    const rawBody = await res.text();
    let parsed: unknown;
    try {
      parsed = rawBody ? JSON.parse(rawBody) : {};
    } catch {
      if (res.ok) {
        setStatus("success");
        setMessage(
          "Thank you for your inquiry. Our team will review your submission and respond within 24–48 hours."
        );
        form.reset();
      } else {
        setStatus("error");
        setMessage(
          "Something went wrong. Please try again or contact us directly."
        );
      }
      return;
    }

    if (!res.ok) {
      setStatus("error");
      setMessage(formatServerError(parsed));
      return;
    }

    const success = parsed as { notified?: boolean };
    setStatus("success");
    let thanks =
      "Thank you for your inquiry. Our team will review your submission and respond within 24–48 hours.";
    if (success.notified === false) {
      thanks +=
        " If you do not hear from us within 48 hours, please reach out through the main Inquire page.";
    }
    setMessage(thanks);
    form.reset();
  }

  if (status === "success") {
    return (
      <div
        className="mt-12 rounded-lg border border-gold/25 bg-gold/[0.06] px-6 py-10 text-center md:px-10"
        role="status"
      >
        <p className="font-serif text-2xl text-[#f8f4ec] md:text-3xl">
          Begin Your Bespoke Experience
        </p>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#d8cfc2]">
          {message}
        </p>
      </div>
    );
  }

  return (
    <form className="mt-12 space-y-12 md:space-y-14" onSubmit={handleSubmit}>
      {/* Section 1 */}
      <section className={sectionWrap}>
        <div className="flex flex-col gap-1 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className={sectionNum}>1</span>
            <h2 className={`mt-3 ${sectionTitle}`}>Client information</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <label className="md:col-span-2">
            <span className={label}>
              Full name <span className="text-gold">*</span>
            </span>
            <input name="fullName" required autoComplete="name" className={input} />
          </label>
          <label>
            <span className={label}>
              Email address <span className="text-gold">*</span>
            </span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className={input}
            />
          </label>
          <label>
            <span className={label}>
              Phone number <span className="text-gold">*</span>
            </span>
            <input
              name="phoneNumber"
              type="tel"
              required
              autoComplete="tel"
              minLength={5}
              className={input}
            />
          </label>
        </div>
      </section>

      {/* Section 2 */}
      <section className={sectionWrap}>
        <div className="border-b border-white/10 pb-5">
          <span className={sectionNum}>2</span>
          <h2 className={`mt-3 ${sectionTitle}`}>Event details</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <label className="md:col-span-2">
            <span className={label}>
              Event type <span className="text-gold">*</span>
            </span>
            <select name="eventType" required className={input}>
              <option value="">Select event type</option>
              {maisonEventTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <label className="md:col-span-2">
            <span className={label}>Event name / Bride&apos;s name</span>
            <input name="eventName" className={input} />
          </label>
          <label>
            <span className={label}>Event date</span>
            <input name="eventDate" type="date" className={input} />
          </label>
          <label>
            <span className={label}>Event location</span>
            <input name="eventLocation" className={input} />
          </label>
        </div>
      </section>

      {/* Section 3 */}
      <section className={sectionWrap}>
        <div className="border-b border-white/10 pb-5">
          <span className={sectionNum}>3</span>
          <h2 className={`mt-3 ${sectionTitle}`}>Service request</h2>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <span className={label}>
              What are you looking for? <span className="text-gold">*</span>
            </span>
            <div className="mt-3 grid gap-1 sm:grid-cols-2">
              {maisonServiceOptions.map((opt) => (
                <label key={opt} className={checkRow}>
                  <input
                    type="checkbox"
                    name="serviceRequest"
                    value={opt}
                    className={checkInput}
                  />
                  <span className="text-[15px] leading-snug text-[#e8e0d5]">
                    {opt}
                  </span>
                </label>
              ))}
            </div>
            {serviceError ? (
              <p className="mt-2 text-sm text-amber-200/90" role="alert">
                {serviceError}
              </p>
            ) : null}
          </div>
          <label>
            <span className={label}>
              Number of outfits needed <span className="text-gold">*</span>
            </span>
            <select name="outfitCount" required className={input}>
              <option value="">Select</option>
              {maisonOutfitCounts.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      {/* Section 4 */}
      <section className={sectionWrap}>
        <div className="border-b border-white/10 pb-5">
          <span className={sectionNum}>4</span>
          <h2 className={`mt-3 ${sectionTitle}`}>Style vision</h2>
        </div>
        <div className="mt-8 space-y-6">
          <label>
            <span className={label}>Describe your desired look</span>
            <textarea name="styleVision" rows={5} className={`${input} resize-y`} />
          </label>
          <div className="grid gap-6 md:grid-cols-2">
            <label>
              <span className={label}>Inspiration images</span>
              <input
                name="inspirationImages"
                type="file"
                accept="image/*"
                multiple
                className={`${input} cursor-pointer file:mr-4 file:rounded file:border-0 file:bg-gold/20 file:px-3 file:py-1.5 file:text-xs file:uppercase file:tracking-wider file:text-[#f5f0e8]`}
              />
              <p className="mt-2 text-xs leading-relaxed text-white/45">
                Up to 4 images, 5MB each.
              </p>
            </label>
            <label>
              <span className={label}>Or paste a Pinterest / mood board link</span>
              <input
                name="pinterestLink"
                type="text"
                inputMode="url"
                autoComplete="off"
                placeholder="https://…"
                className={input}
              />
            </label>
          </div>
          <div>
            <span className={label}>Preferred fabrics</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {maisonFabricOptions.map((f) => (
                <label
                  key={f}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-[#e8e0d5] has-[:checked]:border-gold/45 has-[:checked]:bg-gold/10"
                >
                  <input
                    type="checkbox"
                    name="fabrics"
                    value={f}
                    className={checkInput}
                  />
                  {f}
                </label>
              ))}
            </div>
          </div>
          <label>
            <span className={label}>Preferred colors</span>
            <input
              name="preferredColors"
              placeholder="e.g. champagne, emerald, ivory"
              className={input}
            />
          </label>
        </div>
      </section>

      {/* Section 5 */}
      <section className={sectionWrap}>
        <div className="border-b border-white/10 pb-5">
          <span className={sectionNum}>5</span>
          <h2 className={`mt-3 ${sectionTitle}`}>Sizing &amp; fit</h2>
        </div>
        <div className="mt-8 space-y-6">
          <YesNoRadios
            name="customMeasurements"
            legend="Do you need custom measurements?"
            required
          />
          <label>
            <span className={label}>Standard size</span>
            <select name="standardSize" className={input}>
              <option value="">Select if applicable</option>
              {(["XS", "S", "M", "L", "XL", "XXL"] as const).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span className={label}>Additional notes on fit</span>
            <textarea name="fitNotes" rows={4} className={`${input} resize-y`} />
          </label>
        </div>
      </section>

      {/* Section 6 */}
      <section className={sectionWrap}>
        <div className="border-b border-white/10 pb-5">
          <span className={sectionNum}>6</span>
          <h2 className={`mt-3 ${sectionTitle}`}>Budget range</h2>
        </div>
        <label className="mt-8 block">
          <span className={label}>
            Budget range <span className="text-gold">*</span>
          </span>
          <select name="budgetRange" required className={input}>
            <option value="">Select budget range</option>
            {maisonBudgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
      </section>

      {/* Section 7 */}
      <section className={sectionWrap}>
        <div className="border-b border-white/10 pb-5">
          <span className={sectionNum}>7</span>
          <h2 className={`mt-3 ${sectionTitle}`}>Timeline</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <label className="md:col-span-2">
            <span className={label}>When do you need your outfit completed?</span>
            <input name="outfitCompleteDate" type="date" className={input} />
          </label>
          <div className="md:col-span-2">
            <YesNoRadios
              name="fittingsAvailable"
              legend="Are you available for fittings?"
              required
            />
          </div>
        </div>
      </section>

      {/* Section 8 */}
      <section className={sectionWrap}>
        <div className="border-b border-white/10 pb-5">
          <span className={sectionNum}>8</span>
          <h2 className={`mt-3 ${sectionTitle}`}>Additional services</h2>
        </div>
        <div className="mt-8 grid gap-1 sm:grid-cols-2">
          {maisonAdditionalServiceOptions.map((opt) => (
            <label key={opt} className={checkRow}>
              <input
                type="checkbox"
                name="additionalServices"
                value={opt}
                className={checkInput}
              />
              <span className="text-[15px] text-[#e8e0d5]">{opt}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Section 9 */}
      <section className={sectionWrap}>
        <div className="border-b border-white/10 pb-5">
          <span className={sectionNum}>9</span>
          <h2 className={`mt-3 ${sectionTitle}`}>Final notes</h2>
        </div>
        <label className="mt-8 block">
          <span className={label}>Anything else you&apos;d like us to know?</span>
          <textarea name="finalNotes" rows={5} className={`${input} resize-y`} />
        </label>
      </section>

      <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-gradient-to-r from-gold/90 to-[#c4a574] px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink shadow-soft transition hover:from-gold hover:to-gold disabled:opacity-60"
        >
          {status === "loading" ? "Submitting…" : "Begin My Bespoke Experience"}
        </button>
        <p className="text-center text-xs leading-relaxed text-white/40 sm:text-left">
          Fields marked * are required. By submitting, you agree to be contacted
          regarding your request.
        </p>
      </div>

      {status === "error" && message ? (
        <p className="text-sm text-amber-200/95" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
