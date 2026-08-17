# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 App Router, React 19, TypeScript, deployed on Vercel. Chosen by the user in the init round (the same house pattern approved on six previous small-business sites). All copy and every fact lives in a typed `content/site.ts`; `app/page.tsx` contains no strings.

## Users

Car owners in north Bristol and the surrounding villages (Hallen, Avonmouth, Henbury, Severn Beach, Pilning, Almondsbury) whose car has a problem right now, or who need routine servicing. They arrive on a phone, usually from a Google search or the Google Business Profile, and their job is to decide within seconds whether this garage is trustworthy and then to make contact. A second group is local trade and van drivers on the Hallen and Avonmouth industrial estates who need a nearby garage they can walk back from.

The decision is made on the phone, in a hurry, often with an unwell car. The single successful outcome of the site is a phone call placed.

## Product Purpose

M&A Auto Service is an independent mechanic operating from Hallen Industrial Estate in Bristol. The business has no website and no web presence at all; its entire online identity is a Google Business Profile carrying a 4.8 rating from 102 reviews. This site exists to give that reputation somewhere to land, and to convert a Google listing view into a phone call.

Success is a call to 07882 209735. Everything else on the page serves that.

## Positioning

An independent, owner-run workshop on an industrial estate, judged by 102 people at 4.8 stars, competing against the chains (Halfords, Kwik Fit, IN'n'OUT) that surround Bristol. The differentiator is not price or facilities but the thing the reviews actually say: the problem gets diagnosed quickly and solved, and the customer is dealt with straight. One review records the garage supplying a *more expensive* battery at no evident penalty to the customer when the first one failed.

The premises are a back-street industrial unit, not a showroom. The positioning must not pretend otherwise. Honest workshop, not a franchise forecourt.

## Operating Context

- Trades from a unit on Hallen Industrial Estate, Severn Road, Hallen, Bristol BS10 7SE.
- Open late by garage standards: the Google listing shows the day's closing time as 9pm. Full weekly opening hours are not known.
- Appointments are handled through Yocale (yocale.com) per the Google listing. The exact booking URL is not known, so the site must not link to it.
- Contact is by mobile: 07882 209735.
- Customers find the business through Google, so the page must agree with the Google Business Profile on name, address, phone and hours, and must carry LocalBusiness structured data.

## Capabilities and Constraints

Confirmed by the Google Business Profile:

- Category: mechanic.
- Rating 4.8 from 102 Google reviews (captured 17 August 2026).
- Address, phone and the 9pm closing time as listed above.

Evidenced by customer reviews, and the only services the site may claim (user decision, init round):

- Diagnostics, from Dean's review: "Diagnosed the issue quickly and solved the problem."
- Batteries, from Dom Pontin's review: "Great service, original battery didn't work so gave a more expensive one."
- General repairs and servicing, as implied by the "Mechanic" category.

**Explicitly undecided. None of the following may be invented or implied anywhere on the page:**

- Whether the garage is an MOT test centre. No MOT claim of any kind.
- Any other named service: brakes, clutches, tyres, exhausts, air-con, suspension, cambelts, welding, recovery, courtesy cars, warranties, collection and delivery.
- Prices, labour rates, diagnostic fees.
- Opening hours for any individual day. Only the 9pm close is known, and it is only known for the day the listing was captured.
- The exact Yocale booking URL.
- Whether the business is a limited company, its trading history, staff count, owner names, or accreditations (RAC/AA/Good Garage Scheme/Trust My Garage).
- Vehicle makes specialised in, or whether it handles diesel, hybrid or EV work.

## Brand Commitments

- Name is rendered **M&A Auto Service**, exactly as on the Google listing.
- No logo exists. Any mark must be built from the name in type, not drawn as an invented emblem.
- The voice is the workshop's, not a marketing department's: plain, direct, unembellished. No "passion for automotive excellence", no "state-of-the-art facility", no superlatives the reviews do not support.

## Evidence on Hand

**Real and usable:**

- Google rating: 4.8 from 102 reviews.
- Two complete verbatim review quotes:
  - Dom Pontin: "Great service, original battery didn't work so gave a more expensive one."
  - Dean: "Diagnosed the issue quickly and solved the problem."

**Deliberately excluded:**

- A third review snippet, "In a dingy crappy back street unit." by Bubba Smith, is a fragment lifted out of a longer review and reads as an insult without its surrounding sentence. It is not published.

**Absent, and must not be fabricated:**

- Photographs of the premises, the workshop, staff, or any vehicle. The user confirmed there are none, and stock imagery was explicitly rejected. The design must carry itself without photography.
- A logo.
- Any review text beyond the two quotes above.

## Product Principles

1. **The call is the product.** Every screen state keeps 07882 209735 one tap away. Nothing competes with it.
2. **Nothing on the page may be invented.** A fact either has a source recorded in `content/site.ts` or it does not appear. Gaps are left as gaps, not filled with plausible garage copy.
3. **The reputation is the argument.** 4.8 from 102 real people is the strongest asset the business has; the page is built around it rather than around claims the business has never made.
4. **Honest about the premises.** An industrial unit presented as an industrial unit. No forecourt gloss.
5. **Phone-first, thumb-first.** Built for a person standing next to a car that will not start.

## Accessibility & Inclusion

No product-specific requirement was established. The site meets WCAG AA contrast, supports keyboard navigation, respects `prefers-reduced-motion`, and uses tap targets of at least 44px, on the general grounds that the audience is on phones in poor conditions.
