"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setStatus("error");
      setMessage("Please review your details and try again.");
      return;
    }

    setStatus("success");
    setMessage("Thank you. Your private inquiry has been received.");
    event.currentTarget.reset();
  }

  return (
    <form className="mt-10 grid gap-4" onSubmit={handleSubmit}>
      <label className="text-xs uppercase tracking-[0.2em] text-muted">
        Full Name
        <input
          name="fullName"
          required
          className="mt-2 w-full border border-black/15 bg-ivory px-4 py-3"
        />
      </label>
      <label className="text-xs uppercase tracking-[0.2em] text-muted">
        Email Address
        <input
          name="email"
          type="email"
          required
          className="mt-2 w-full border border-black/15 bg-ivory px-4 py-3"
        />
      </label>
      <label className="text-xs uppercase tracking-[0.2em] text-muted">
        Phone Number (optional)
        <input
          name="phoneNumber"
          className="mt-2 w-full border border-black/15 bg-ivory px-4 py-3"
        />
      </label>
      <label className="text-xs uppercase tracking-[0.2em] text-muted">
        Event Type
        <select
          name="eventType"
          required
          className="mt-2 w-full border border-black/15 bg-ivory px-4 py-3"
        >
          <option value="">Select event type</option>
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Corporate</option>
          <option>Private Event</option>
          <option>Other</option>
        </select>
      </label>
      <label className="text-xs uppercase tracking-[0.2em] text-muted">
        Event Date
        <input
          name="eventDate"
          type="date"
          required
          className="mt-2 w-full border border-black/15 bg-ivory px-4 py-3"
        />
      </label>
      <label className="text-xs uppercase tracking-[0.2em] text-muted">
        Event Location
        <input
          name="eventLocation"
          required
          className="mt-2 w-full border border-black/15 bg-ivory px-4 py-3"
        />
      </label>
      <label className="text-xs uppercase tracking-[0.2em] text-muted">
        Estimated Guest Count
        <input
          name="estimatedGuestCount"
          type="number"
          min={1}
          required
          className="mt-2 w-full border border-black/15 bg-ivory px-4 py-3"
        />
      </label>
      <label className="text-xs uppercase tracking-[0.2em] text-muted">
        Budget Range
        <select
          name="budgetRange"
          required
          className="mt-2 w-full border border-black/15 bg-ivory px-4 py-3"
        >
          <option value="">Select budget range</option>
          <option>$2K-$5K</option>
          <option>$5K-$10K</option>
          <option>$10K+</option>
        </select>
      </label>
      <label className="text-xs uppercase tracking-[0.2em] text-muted">
        Referral Source
        <input
          name="referralSource"
          className="mt-2 w-full border border-black/15 bg-ivory px-4 py-3"
        />
      </label>
      <label className="text-xs uppercase tracking-[0.2em] text-muted">
        Event Description
        <textarea
          name="eventDescription"
          rows={6}
          required
          className="mt-2 w-full border border-black/15 bg-ivory px-4 py-3"
        />
      </label>
      <button
        type="submit"
        className="mt-3 w-fit rounded-full bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-ivory transition hover:bg-black disabled:opacity-70"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting..." : "Submit Inquiry"}
      </button>

      <p className="text-sm text-muted">
        We accept a limited number of clients to ensure each experience is
        thoughtfully executed.
      </p>
      {message ? (
        <p
          className={`text-sm ${status === "success" ? "text-green-700" : "text-red-700"}`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
