import type { Metadata } from "next";
import { Cormorant_Garamond, Geist_Mono, Poppins } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import { GrainOverlay } from "@/components/GrainOverlay";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ela Future Farms",
    template: "%s | Ela Future Farms",
  },
  description:
    "Rooted in Science. Grown with Soul. AI-powered hydroponic fresh produce — leafy greens, herbs, and berries grown in Saudi Arabia.",
  metadataBase: new URL("https://www.theela.farm"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${cormorant.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="relative min-h-full flex flex-col bg-background font-sans">
        <AppProviders>
          <GrainOverlay />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
