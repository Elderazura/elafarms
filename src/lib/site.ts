/** Site-wide constants: URLs, socials, SEO. Update when domains or handles go live. */

export const SITE_NAME = "Ela Future Farms";
export const SITE_TAGLINE = "Rooted in Science. Grown with Soul.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.theela.farm";

/** Official logo assets (PNG only) — wordmark for header/footer; mark for favicon & compact UI */
export const BRAND_LOGO_WORDMARK = "/brand/ela1-03.png";
export const BRAND_LOGO_MARK = "/brand/ela1-01.png";

/** Native pixel size of both PNGs (same canvas) — use for CSS aspect-ratio so logos never stretch */
export const BRAND_LOGO_PNG_WIDTH = 1755;
export const BRAND_LOGO_PNG_HEIGHT = 1241;
export const CONTACT_EMAIL = "hello@theela.farm";

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/theelafarm",
    handle: "@theelafarm",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@theelafarm",
    handle: "@theelafarm",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ela-future-farms",
    handle: "Ela Future Farms",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/966500000000",
    handle: "Message us",
  },
] as const;

/** Greater Riyadh bbox — swap for exact farm embed from Google/Maps when ready */
export const MAP_EMBED_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=46.4%2C24.4%2C47.05%2C25.05&layer=mapnik";

export const seoKeywords = [
  "hydroponic farm Saudi Arabia",
  "vertical farming Riyadh",
  "local leafy greens KSA",
  "Ela Future Farms",
  "Vision 2030 agriculture",
  "Saudi food security",
  "controlled environment agriculture KSA",
  "sustainable produce Riyadh",
  "strawberries hydroponic Saudi",
];
