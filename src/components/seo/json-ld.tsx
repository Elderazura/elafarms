import { BRAND_LOGO_WORDMARK, CONTACT_EMAIL, SITE_NAME, SITE_TAGLINE, SITE_URL, socialLinks } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    description: SITE_TAGLINE,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    sameAs: socialLinks.map((s) => s.href).filter((h) => !h.includes("wa.me")),
    logo: `${SITE_URL.replace(/\/$/, "")}${BRAND_LOGO_WORDMARK}`,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
