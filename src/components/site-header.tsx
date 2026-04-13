"use client";

import Link from "next/link";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#about", label: "About" },
  { href: "/inquire", label: "Inquire" },
  { href: "/maison-eleve/intake", label: "Maison Élevé" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const clerkEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  const maison = pathname.startsWith("/maison-eleve");

  return (
    <header
      className={
        maison
          ? "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0908]/92 backdrop-blur"
          : "fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-ivory/90 backdrop-blur"
      }
    >
      <div className="editorial-container flex h-20 items-center justify-between">
        <Link
          href="/"
          className={
            maison
              ? "font-serif text-3xl text-[#f5f0e8] transition hover:text-gold"
              : "font-serif text-3xl"
          }
        >
          Élevé Curates
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                maison
                  ? "text-[11px] uppercase tracking-[0.26em] text-[#b8aea2] transition hover:text-gold"
                  : "text-[11px] uppercase tracking-[0.26em] text-muted transition hover:text-ink"
              }
            >
              {link.label}
            </Link>
          ))}
          {clerkEnabled ? (
            <>
              <Show when="signed-in">
                <Link
                  href="/portal"
                  className={
                    maison
                      ? "text-[11px] uppercase tracking-[0.26em] text-[#b8aea2] transition hover:text-gold"
                      : "text-[11px] uppercase tracking-[0.26em] text-muted transition hover:text-ink"
                  }
                >
                  Client Portal
                </Link>
                <UserButton />
              </Show>
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button
                    type="button"
                    className={
                      maison
                        ? "rounded-full border border-gold/50 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[#f5f0e8] transition hover:bg-gold/15"
                        : "rounded-full border border-gold px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-ink transition hover:bg-champagne"
                    }
                  >
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button
                    type="button"
                    className={
                      maison
                        ? "rounded-full border border-gold/35 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[#ebe4d9] transition hover:bg-white/5"
                        : "rounded-full border border-gold/60 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-ink transition hover:bg-beige"
                    }
                  >
                    Sign Up
                  </button>
                </SignUpButton>
              </Show>
            </>
          ) : (
            <span
              className={
                maison
                  ? "text-[11px] uppercase tracking-[0.26em] text-[#b8aea2]"
                  : "text-[11px] uppercase tracking-[0.26em] text-muted"
              }
            >
              Client Portal
            </span>
          )}
        </nav>

        {pathname !== "/portal" && (
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/maison-eleve/intake"
              className={
                maison
                  ? "rounded-full border border-gold/40 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-gold transition hover:bg-gold/10"
                  : "rounded-full border border-gold/50 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-ink transition hover:bg-champagne/50"
              }
            >
              Maison
            </Link>
            <Link
              href="/inquire"
              className={
                maison
                  ? "rounded-full border border-white/20 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[#f5f0e8] transition hover:bg-white/10"
                  : "rounded-full border border-ink px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-ink transition hover:bg-ink hover:text-ivory"
              }
            >
              Inquire
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
