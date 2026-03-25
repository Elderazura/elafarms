import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist_Mono, Poppins } from "next/font/google";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import { AppProviders } from "@/components/providers/app-providers";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BRAND_LOGO_MARK, CONTACT_EMAIL, SITE_NAME, SITE_TAGLINE, SITE_URL, seoKeywords } from "@/lib/site";
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

const base = SITE_URL.replace(/\/$/, "");
const ogImage = `${base}/brand/farm-variation-1.png`;

export const viewport: Viewport = {
  themeColor: "#3d5a3e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Hydroponic greens, herbs & berries grown in Riyadh. Less water, more flavour, zero boring corporate salads. Rooted in science, grown with soul.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: base }],
  creator: SITE_NAME,
  keywords: seoKeywords,
  category: "food",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_SA",
    url: base,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Local hydroponic produce for Saudi Arabia — leafy greens, herbs & berries. Fresh, cheeky, and seriously good.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Ela Future Farms indoor vertical farm with LED grow lights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: "Desert-grown greens & berries. Science in the roots, joy in the leaves.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: BRAND_LOGO_MARK,
    apple: BRAND_LOGO_MARK,
  },
  other: {
    "contact:email": CONTACT_EMAIL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${cormorant.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="relative min-h-full flex flex-col bg-background font-sans">
        <OrganizationJsonLd />
        <AppProviders>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
