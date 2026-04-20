import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 py-10">
      <div className="editorial-container flex flex-col gap-4 text-[11px] uppercase tracking-[0.22em] text-muted md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-8 md:gap-y-3">
        <p>Atelier Élevé</p>
        <p>Boston | Ikoyi, Lagos (serving Victoria Island, Lekki, Banana Island)</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/atelier-eleve/intake" className="transition hover:text-ink">
            Atelier Élevé intake
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="transition hover:text-ink"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
