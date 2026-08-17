/**
 * Every word and every fact on the site lives here. Nothing may be invented.
 * Each claim notes its source inline:
 *   [google]  the Google Business Profile supplied by the client, 17 Aug 2026
 *   [review]  quoted verbatim from a public Google review on that profile
 *
 * The business has no website, no Facebook page and no directory listing that
 * could be found on 17 Aug 2026. The Google profile is the entire evidence
 * base, so anything absent from it is absent from this file and from the page.
 *
 * Address note: [google] renders the address as "Estate, Hallen Indusrial,
 * Severn Rd, Hallen, Bristol BS10 7SE" — Google's own field order is scrambled
 * and "Industrial" is misspelt on the listing. It is normalised here to
 * "Hallen Industrial Estate, Severn Road, Hallen, Bristol BS10 7SE". The
 * postcode, street and locality are unchanged. Recorded in the README.
 */

export const identity = {
  name: "M&A Auto Service", // [google]
  shortName: "M&A", // for the topbar under 700px
  category: "Mechanic", // [google] business category
} as const;

export const contact = {
  phoneDisplay: "07882 209735", // [google]
  phoneHref: "tel:+447882209735",
  addressLine: "Hallen Industrial Estate, Severn Road, Hallen, Bristol BS10 7SE", // [google], normalised
  addressParts: {
    street: "Hallen Industrial Estate, Severn Road",
    locality: "Hallen",
    town: "Bristol",
    postcode: "BS10 7SE",
    region: "Bristol",
    country: "GB",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=M%26A%20Auto%20Service%2C%20Severn%20Rd%2C%20Hallen%2C%20Bristol%20BS10%207SE",
  mapsLabel: "Open in Google Maps",
  // [google] shows only the current day's closing time ("Open · Closes 9 pm").
  // The full weekly pattern is not published, so the page states the close and
  // sends people to the phone for the specific day. Tracked in the README.
  closingTime: "9pm",
} as const;

export const rating = {
  score: "4.8", // [google]
  scoreValue: 4.8,
  best: 5,
  count: "102", // [google]
  countLabel: "102 Google reviews", // [google]
  label: "Google rating",
} as const;

export const hero = {
  nameLines: ["M&A", "Auto Service"] as string[],
  subLine: "Independent mechanic · Hallen Industrial Estate, Bristol",
  // Every clause below is carried by [google]: the rating, the count, the
  // location, and the fact that the business takes appointments.
  tagline:
    "An independent workshop on the Hallen estate, rated 4.8 by 102 people. Ring and tell us what the car is doing.",
  callCta: "Call 07882 209735",
  secondaryCta: "Where to find us",
  // The quiet index along the foot of the first viewport.
  railItems: ["Diagnostics", "Batteries", "Repairs & servicing"] as string[],
  railLocation: "Hallen · Bristol BS10 7SE",
} as const;

export const services = {
  heading: "What we do",
  // Only the work the evidence supports. Diagnostics and batteries are named
  // in the reviews below; general repairs and servicing is the [google]
  // "Mechanic" category itself. No MOT claim: whether this is a test centre is
  // not published anywhere, and it is a licensed status that cannot be guessed.
  items: [
    {
      title: "Diagnostics",
      body: "Plugged in and the fault traced, so you are told what it actually is before anything gets replaced.",
    },
    {
      title: "Batteries",
      body: "Tested, and replaced when that is what the car needs.",
    },
    {
      title: "Repairs & servicing",
      body: "General mechanical work on the car, booked in over the phone.",
    },
  ],
  footnote: "Something not listed here? Ring and ask.",
} as const;

export const reviews = {
  heading: "What people say",
  // Verbatim from public Google reviews [review]. A third snippet on the
  // profile ("In a dingy crappy back street unit.") is a fragment lifted out of
  // a longer review and reads as an insult without its surrounding sentence, so
  // it is not published. Truncated reviews are omitted, never completed.
  entries: [
    {
      quote:
        "Great service, original battery didn’t work so gave a more expensive one.",
      name: "Dom Pontin",
      source: "Google review",
    },
    {
      quote: "Diagnosed the issue quickly and solved the problem.",
      name: "Dean",
      source: "Google review",
    },
  ],
} as const;

export const location = {
  heading: "Where to find us",
  lead: "The workshop is a unit on Hallen Industrial Estate, off Severn Road.",
  addressLabel: "The unit",
  hoursLabel: "Hours",
  hoursValue: "Until 9pm",
  hoursNote: "Ring to check the day you need.",
  findUsLabel: "Directions",
} as const;

export const booking = {
  heading: "Book the car in",
  lead: "One call sorts it. Tell us what the car is doing and when you can get it to us.",
  phoneLabel: "Call the workshop",
  smallprint: [
    "M&A Auto Service, Hallen Industrial Estate, Severn Road, Hallen, Bristol BS10 7SE.",
  ],
} as const;

export const meta = {
  title: "M&A Auto Service · Mechanic in Hallen, Bristol",
  description:
    "Independent mechanic on Hallen Industrial Estate, Bristol. Diagnostics, batteries, repairs and servicing. Rated 4.8 from 102 Google reviews. Call 07882 209735.",
} as const;

/**
 * Facts the business has never published anywhere that could be verified.
 * They are simply absent from the page — never filled with a placeholder,
 * never guessed. Listed in the README so the owner knows what to send.
 */
export const pending = [
  "Full weekly opening hours (Google publishes only that the doors close at 9pm)",
  "The exact Yocale booking URL (the listing says appointments go through yocale.com but gives no link)",
  "Whether the garage is an MOT test centre",
  "Any service beyond diagnostics, batteries and general repairs and servicing",
  "Prices, labour rates and diagnostic fees",
  "Photographs of the unit, the workshop or the work",
  "A logo asset",
  "An email address",
  "A confirmed domain name",
] as const;
