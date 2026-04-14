"use client";

import { useEffect, useState } from "react";

export function JournalProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const nextProgress = scrollHeight <= 0 ? 0 : (scrollTop / scrollHeight) * 100;
      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="journal-progress-track" aria-hidden="true">
      <div className="journal-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
