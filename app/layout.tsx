import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { contact, identity, meta, rating } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export const viewport: Viewport = {
  themeColor: "#0c0d0f",
};

const contract = `<!--
THESIS: The independent-garage site played straight, refusing both the stock blue-red MOT-banner template and the supercar-hero "performance" pose. User took the standing exit over a rolled trade-counter world.
OWN-WORLD: Graphite near-black ground, hairline rules as the only structure, signal amber rationed to labels, stars, CTA and the phone number. Wide-stretched Archivo caps against plain sentence-case body. Flat depth.
STORY: A driver beside a car that will not start sees a real 4.8 from 102 people, three honest services and an address on the estate, and rings.
FIRST VIEWPORT: 92svh graphite lit by one amber worklamp pool. Rating line, name lockup, location sub-line, tagline, amber call button and ghost directions button. Hairline foot rail carrying the three services and the postcode. Sticky bar holds the number throughout.
FORM: Category standard, the standing exit, user-chosen 17 Aug 2026 over assigned direction 7 (the motor factor trade counter). Craft bar: the user's own showroomdetailing and CJValeting builds. Seed key c9b5631d.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: identity.name,
  telephone: "+447882209735",
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.addressParts.street,
    addressLocality: contact.addressParts.town,
    postalCode: contact.addressParts.postcode,
    addressRegion: contact.addressParts.region,
    addressCountry: contact.addressParts.country,
  },
  // Real figures from the Google Business Profile. No aggregateRating would be
  // published here without them, and no `url` is published until the business
  // has a confirmed domain.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: rating.score,
    reviewCount: rating.count,
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={archivo.variable}>
      <body>
        <span hidden dangerouslySetInnerHTML={{ __html: contract }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
