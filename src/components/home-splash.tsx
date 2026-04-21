"use client";

import Image from "next/image";
import { startTransition, useEffect, useLayoutEffect, useState } from "react";

const STORAGE_KEY = "atelier_eleve_home_splash_v1";

type Phase = "checking" | "splash" | "exit" | "done";

export default function HomeSplash() {
  const [phase, setPhase] = useState<Phase>("checking");

  useLayoutEffect(() => {
    let reduced = false;
    try {
      reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      reduced = false;
    }

    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }

    if (seen) {
      startTransition(() => setPhase("done"));
      return;
    }

    startTransition(() => setPhase("splash"));
    document.body.style.overflow = "hidden";

    const holdMs = reduced ? 240 : 1650;
    const exitMs = reduced ? 160 : 520;

    const tExit = window.setTimeout(() => {
      setPhase("exit");
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore private mode */
      }
    }, holdMs);

    const tDone = window.setTimeout(() => {
      document.body.style.overflow = "";
      setPhase("done");
    }, holdMs + exitMs);

    return () => {
      window.clearTimeout(tExit);
      window.clearTimeout(tDone);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase !== "splash" && phase !== "exit") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          /* ignore */
        }
        document.body.style.overflow = "";
        setPhase("done");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase]);

  if (phase === "checking" || phase === "done") return null;

  return (
    <div
      className={`home-splash-layer ${
        phase === "exit" ? "home-splash-layer--exit" : ""
      }`}
      aria-hidden
    >
      <div
        className={`home-splash-logo-wrap ${
          phase === "splash" || phase === "exit"
            ? "home-splash-logo-wrap--in"
            : ""
        }`}
      >
        <Image
          src="/images/atelier-eleve-hero-mark.png"
          alt=""
          width={480}
          height={480}
          priority
          className="h-auto w-[min(72vw,320px)] max-w-full object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.12)] sm:w-[min(55vw,380px)] md:w-[min(42vw,440px)]"
        />
      </div>
    </div>
  );
}
