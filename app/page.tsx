import {
  booking,
  contact,
  hero,
  identity,
  location,
  rating,
  reviews,
  services,
} from "@/content/site";

const STAR_PATH =
  "M8 0.6l2.06 4.75 5.14.46-3.88 3.4 1.15 5.03L8 11.6l-4.47 2.64 1.15-5.03L.8 5.81l5.14-.46L8 .6z";

/**
 * Five stars filled to the real score, so 4.8 shows four solid and one
 * four-fifths full rather than a rounded-up row of five.
 */
function Stars() {
  return (
    <span className="stars" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.min(Math.max(rating.scoreValue - i, 0), 1);
        const id = `star-fill-${i}`;
        return (
          <svg
            key={i}
            className="starIcon"
            viewBox="0 0 16 16"
            role="presentation"
          >
            <defs>
              <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
                <stop offset={fill} stopColor="var(--signal-amber)" />
                <stop offset={fill} stopColor="var(--hairline-strong)" />
              </linearGradient>
            </defs>
            <path d={STAR_PATH} fill={`url(#${id})`} />
          </svg>
        );
      })}
    </span>
  );
}

export default function Page() {
  return (
    <>
      <header className="topbar">
        <div className="container topbarInner">
          <a className="brandMark" href="#top">
            <span className="brandMarkFull">{identity.name}</span>
            <span className="brandMarkShort">{identity.shortName}</span>
          </a>
          <a className="btn btnPrimary btnSmall" href={contact.phoneHref}>
            {contact.phoneDisplay}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroLight" />

          <div className="heroInner">
            <div className="container heroGrid">
              <div>
                <h1 className="heroName rise rise-1">
                  {hero.nameLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h1>

                <p className="heroSub rise rise-2">{hero.subLine}</p>
                <p className="heroTagline rise rise-2">{hero.tagline}</p>

                <div className="heroActions rise rise-3">
                  <a className="btn btnPrimary" href={contact.phoneHref}>
                    {hero.callCta}
                  </a>
                  <a className="btn btnGhost" href="#find-us">
                    {hero.secondaryCta}
                  </a>
                </div>
              </div>

              {/*
                The sibling sites put a photograph in this frame. There is none
                here, so the frame holds the facts instead. Nothing in it is
                asserted for the first time.
              */}
              <div className="heroPlate rise rise-4">
                <p className="heroPlateHead">{hero.plateHeading}</p>

                <dl>
                  <div className="heroPlateRow">
                    <dt>{hero.plateRatingLabel}</dt>
                    <dd className="heroRating">
                      <Stars />
                      <span className="ratingScore">{rating.score}</span>
                      <span className="visuallyHidden">
                        {` out of ${rating.best} on Google, `}
                      </span>
                      <span className="ratingTick" aria-hidden="true" />
                      <span className="ratingCount">{rating.countLabel}</span>
                    </dd>
                  </div>

                  {/*
                    Both rows are repeated in full in "Where to find us". On a
                    phone they stand down so the foot rail keeps its place in
                    the first viewport; nothing is lost, only reordered.
                  */}
                  <div className="heroPlateRow heroPlateRowDeferred">
                    <dt>{hero.plateHoursLabel}</dt>
                    <dd>{location.hoursValue}</dd>
                  </div>

                  <div className="heroPlateRow heroPlateRowDeferred">
                    <dt>{hero.plateWhereLabel}</dt>
                    <dd>{contact.addressLine}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="heroRail rise rise-5">
            <div className="container heroRailInner">
              {hero.railItems.map((item) => (
                <span className="heroRailItem" key={item}>
                  {item}
                </span>
              ))}
              <span className="heroRailLocation">{hero.railLocation}</span>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <h2 className="sectionHead">{services.heading}</h2>
            <div className="sectionBody">
              <div className="serviceList">
                {services.items.map((item) => (
                  <article className="serviceRow" key={item.title}>
                    <h3 className="serviceTitle">{item.title}</h3>
                    <p className="serviceBody">{item.body}</p>
                  </article>
                ))}
              </div>
              <p className="serviceFootnote">{services.footnote}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="sectionHead">{reviews.heading}</h2>
            <div className="sectionBody">
              <div className="reviewGrid">
                {reviews.entries.map((entry) => (
                  <figure className="reviewCard" key={entry.name}>
                    <blockquote className="reviewQuote">
                      {entry.quote}
                    </blockquote>
                    <figcaption className="reviewAttrib">
                      <span className="reviewName">{entry.name}</span>
                      <span className="reviewSource">{entry.source}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="find-us">
          <div className="container">
            <h2 className="sectionHead">{location.heading}</h2>
            <div className="sectionBody">
              <p className="locationLead">{location.lead}</p>
              <dl className="locationGrid">
                <div className="locationCell">
                  <dt>{location.addressLabel}</dt>
                  <dd>{contact.addressLine}</dd>
                </div>
                <div className="locationCell">
                  <dt>{location.hoursLabel}</dt>
                  <dd>
                    <span className="locationHours">
                      {location.hoursValue}
                    </span>
                    <span className="locationHoursNote">
                      {location.hoursNote}
                    </span>
                  </dd>
                </div>
                <div className="locationCell">
                  <dt>{location.findUsLabel}</dt>
                  <dd>
                    <a
                      className="textLink"
                      href={contact.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {contact.mapsLabel}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="booking">
          <div className="container">
            <h2 className="sectionHead">{booking.heading}</h2>
            <p className="bookingLead">{booking.lead}</p>
            <a className="bookingPhone" href={contact.phoneHref}>
              {contact.phoneDisplay}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          {booking.smallprint.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </footer>
    </>
  );
}
