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

export const metadata: Metadata = {
  metadataBase: new URL("https://elevevents.com"),
  title: "Élevé Curates | Luxury Event Planning",
  description:
    "Transatlantic luxury event planning and bespoke styling across Boston and Ikoyi, Lagos.",
  openGraph: {
    title: "Élevé Curates | Luxury Event Planning",
    description:
      "Transatlantic luxury event planning and bespoke styling across Boston and Ikoyi, Lagos.",
    url: "https://elevevents.com",
    siteName: "Élevé Curates",
    images: [
      {
        url: "/images/eleve-logo-gold.png",
        width: 1200,
        height: 630,
        alt: "Élevé Curates Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Élevé Curates | Luxury Event Planning",
    description:
      "Transatlantic luxury event planning and bespoke styling across Boston and Ikoyi, Lagos.",
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
