import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.atelier-eleve.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [{ url: "/images/atelier-eleve-hero-mark.png", type: "image/png" }],
    apple: [{ url: "/images/atelier-eleve-hero-mark.png", type: "image/png" }],
  },
  title: "Atelier Élevé | Refined Event Studio",
  description:
    "Atelier Élevé curates refined celebrations through thoughtful planning, design, and styling.",
  openGraph: {
    title: "Atelier Élevé | Refined Event Studio",
    description:
      "Atelier Élevé curates refined celebrations through thoughtful planning, design, and styling.",
    url: "/",
    siteName: "Atelier Élevé",
    images: [
      {
        url: "/images/eleve-logo-gold.png",
        width: 1200,
        height: 630,
        alt: "Atelier Élevé Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Élevé | Refined Event Studio",
    description:
      "Atelier Élevé curates refined celebrations through thoughtful planning, design, and styling.",
    images: ["/images/eleve-logo-gold.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      <body className="font-sans">
        <ClerkProvider>
          <SiteHeader />
          <div className="pt-20">{children}</div>
          <SiteFooter />
        </ClerkProvider>
      </body>
    </html>
  );
}
