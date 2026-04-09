export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 py-10">
      <div className="editorial-container flex flex-col gap-3 text-[11px] uppercase tracking-[0.22em] text-muted md:flex-row md:items-center md:justify-between">
        <p>Élevé Curates</p>
        <p>Boston | Ikoyi, Lagos (serving Victoria Island, Lekki, Banana Island)</p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-ink"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
