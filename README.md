# M&A Auto Service

Single-page site for M&A Auto Service, an independent mechanic on Hallen
Industrial Estate, Severn Road, Hallen, Bristol BS10 7SE.

Next.js 16 (App Router) · React 19 · TypeScript · deploys to Vercel.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## How the content works

Every word and every fact on the page lives in [`content/site.ts`](content/site.ts).
`app/page.tsx` contains no strings. Each claim in `site.ts` carries an inline
comment naming its source.

**Nothing may be invented.** The business has no website, no Facebook page and
no directory listing that could be found on 17 August 2026, so its Google
Business Profile is the entire evidence base. Anything the profile does not say
is absent from the page rather than guessed at.

Two consequences worth knowing before editing:

- **Services** are limited to diagnostics, batteries, and general repairs and
  servicing. Diagnostics and batteries are named in the two published reviews;
  repairs and servicing is the profile's own "Mechanic" category. There is no
  MOT claim anywhere, because whether this is a licensed test centre is not
  published and cannot be guessed.
- **Reviews** are verbatim. A third snippet on the profile ("In a dingy crappy
  back street unit.") is a fragment cut out of a longer review and reads as an
  insult without its surrounding sentence, so it is not published. Truncated
  reviews are omitted, never completed.

## Facts the owner still needs to supply

These are tracked in the `pending` export in `content/site.ts` and are simply
absent from the rendered page. No placeholders, no "call to confirm" filler.

| Missing | Effect on the page |
| --- | --- |
| Full weekly opening hours | Only "Until 9pm" is shown, with "ring to check the day you need". Google publishes just the one closing time. |
| The exact Yocale booking URL | The profile says appointments go through yocale.com but gives no link, so there is no "Book online" button. The phone is the only call to action. |
| Whether the garage is an MOT test centre | No MOT is mentioned anywhere on the page. |
| Any service beyond the three listed | The services list stays at three, with "Something not listed here? Ring and ask." |
| Prices, labour rates, diagnostic fees | No prices anywhere. |
| Photographs of the unit, workshop or work | The hero is lit rather than photographed. No stock imagery was used. |
| A logo | The favicon and wordmark are set from the name in type. |
| An email address | Phone only. |
| A confirmed domain | No `url` in the structured data until there is a real domain. |

## Structured data

`app/layout.tsx` emits `AutoRepair` JSON-LD with the real name, phone and
address. `aggregateRating` carries the genuine 4.8 from 102 Google reviews. No
`url` is published until the business has a confirmed domain.

## Address note

The Google listing renders the address as "Estate, Hallen Indusrial, Severn Rd,
Hallen, Bristol BS10 7SE". Google's own field order is scrambled there and
"Industrial" is misspelt on the listing. It is normalised throughout this site
to "Hallen Industrial Estate, Severn Road, Hallen, Bristol BS10 7SE". Street,
locality and postcode are unchanged.

## Design

The visual direction and how it was chosen are recorded in
[`.impeccable/direction-roll.md`](.impeccable/direction-roll.md). Durable product
truth is in [`PRODUCT.md`](PRODUCT.md); the design system as built is in
[`DESIGN.md`](DESIGN.md).
