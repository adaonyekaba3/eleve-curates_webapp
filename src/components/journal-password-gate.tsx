"use client";

import { FormEvent, useMemo, useState } from "react";

type JournalPasswordGateProps = {
  storageKey: string;
  title?: string;
  prompt?: string;
  children: React.ReactNode;
};

export function JournalPasswordGate({
  storageKey,
  title = "Journal Access",
  prompt = "Enter password to access journal",
  children,
}: JournalPasswordGateProps) {
  const configuredPassword = useMemo(() => {
    const raw = process.env.NEXT_PUBLIC_JOURNAL_PASSWORD ?? "eleve-journal";
    return raw.trim().replace(/^["']|["']$/g, "").toLowerCase();
  }, []);
  const [isUnlocked, setIsUnlocked] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return sessionStorage.getItem(storageKey) === "unlocked";
  });
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextValue = password.trim().replace(/^["']|["']$/g, "").toLowerCase();

    if (nextValue === configuredPassword) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem(storageKey, "unlocked");
      }
      setIsUnlocked(true);
      setError("");
      return;
    }

    setError("Incorrect password. Please try again.");
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <section className="journal-page min-h-screen fade-in px-4 pt-20">
      <div className="journal-shell rounded-sm border border-black/10 bg-white/80 p-8 md:p-12">
        <p className="journal-label">Journal</p>
        <h1 className="journal-title text-3xl md:text-4xl">{title}</h1>
        <p className="journal-subtitle not-italic">{prompt}</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-3">
          <label htmlFor="journal-password" className="block text-sm text-[#4d4a43]">
            Password
          </label>
          <input
            id="journal-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-sm border border-black/20 bg-white px-4 py-3 text-sm focus:border-black focus:outline-none"
            autoComplete="off"
            required
          />
          {error ? <p className="text-sm text-red-700">{error}</p> : null}
          <button
            type="submit"
            className="inline-flex rounded-full bg-black px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-[#f8f5ef] transition hover:bg-[#1f1f1f]"
          >
            Unlock Journal
          </button>
        </form>
      </div>
    </section>
  );
}
