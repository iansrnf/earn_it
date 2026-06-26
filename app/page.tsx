/* eslint-disable @next/next/no-img-element */
import { AlertTriangle, CalendarDays, ChevronRight, CloudRain, ExternalLink, Radio, ShieldCheck, Waves } from "lucide-react";

const updatedAt = "June 26, 2026";
const heroImageUrl = "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1600&q=80";
const nhcOutlookImageUrl = "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png";

const keyPoints = [
  {
    title: "No Named Storm Signal Yet",
    text: "The National Hurricane Center's current Atlantic outlook says tropical cyclone formation is not expected during the next seven days.",
    icon: ShieldCheck,
  },
  {
    title: "Southeast Rain Risk",
    text: "Holiday-week travel along the Southeast and Atlantic coast should still watch for scattered storms, rough surf, and locally heavy downpours.",
    icon: CloudRain,
  },
  {
    title: "Forecast Can Change Fast",
    text: "July 4 sits near the edge of the official seven-day tropical outlook window, so the most useful plan is to check fresh updates daily.",
    icon: AlertTriangle,
  },
];

const travelImpacts = [
  "Beach plans: watch for rip-current statements and surf advisories before swimming.",
  "Road trips: afternoon storms can slow I-95 and coastal routes from Florida through the Carolinas.",
  "Boating: check local marine forecasts for wind shifts, lightning, and seas before leaving port.",
  "Fireworks: evening storms can delay outdoor events even when the tropics stay quiet.",
];

const officialSources = [
  {
    label: "National Hurricane Center Atlantic Outlook",
    href: "https://www.nhc.noaa.gov/gtwo.php?basin=atlc&fdays=7",
  },
  {
    label: "NHC Tropical Weather Discussion",
    href: "https://www.nhc.noaa.gov/text/MIATWDAT.shtml",
  },
  {
    label: "NOAA Weather Prediction Center",
    href: "https://www.wpc.ncep.noaa.gov/",
  },
  {
    label: "National Weather Service Forecast Search",
    href: "https://www.weather.gov/",
  },
  {
    label: "FOX Weather Tropical Update",
    href: "https://www.foxweather.com/",
  },
];

const relatedTopics = [
  "july 4th atlantic weather",
  "atlantic tropics july 4",
  "southeast holiday rain forecast",
  "atlantic hurricane outlook",
  "july 4 beach weather",
  "national hurricane center update",
];

export default function Home() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "July 4th Atlantic Weather Outlook: Tropics, Southeast Rain and Holiday Forecast",
    description:
      "Current July 4th Atlantic weather outlook covering the National Hurricane Center tropical update, Southeast rain risk, beach impacts, and official forecast sources.",
    datePublished: "2026-06-26",
    dateModified: "2026-06-26",
    author: {
      "@type": "Organization",
      name: "Atlantic Weather Desk",
    },
    image: heroImageUrl,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is there a tropical storm expected in the Atlantic for July 4th?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As of June 26, 2026, the National Hurricane Center says tropical cyclone formation is not expected in the Atlantic during the next seven days. July 4 is near the edge of that window, so travelers should keep checking official updates.",
        },
      },
      {
        "@type": "Question",
        name: "Will the Southeast have rain around July 4th?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Southeast and Atlantic coast often see scattered afternoon storms in early July. Local forecasts from the National Weather Service are the best source for city-specific timing.",
        },
      },
      {
        "@type": "Question",
        name: "Where should I check for official July 4 Atlantic weather updates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use the National Hurricane Center for tropical outlooks and the National Weather Service for local forecasts, watches, warnings, marine forecasts, and beach hazards.",
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Weather",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "July 4 Atlantic Weather",
      },
    ],
  };

  return (
    <main className="siteShell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero" aria-labelledby="page-title">
        <img
          className="heroImage"
          src={heroImageUrl}
          width="1600"
          height="900"
          alt="Storm clouds over the ocean"
          decoding="async"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />
        <div className="heroOverlay" />
        <div className="heroContent">
          <div className="eyebrow">
            <Radio size={18} />
            Atlantic Weather Outlook
          </div>
          <h1 id="page-title">July 4th Atlantic Weather Outlook: Tropics, Southeast Rain and Holiday Forecast</h1>
          <p>
            A practical holiday-weather guide for the Atlantic basin, Southeast coast, beach trips, boating plans, and
            Independence Day events.
          </p>
          <div className="heroActions">
            <a href="#outlook" className="primaryAction">
              Read Outlook
              <ChevronRight size={18} />
            </a>
            <a href="#sources" className="secondaryAction">
              Official Sources
            </a>
          </div>
        </div>
      </section>

      <nav className="quickNav" aria-label="Article sections">
        {["Outlook", "Tropics", "Impacts", "FAQ", "Sources"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>

      <article className="articleGrid">
        <section className="leadPanel" id="outlook">
          <div>
            <span className="sectionKicker">Updated {updatedAt}</span>
            <h2>What the July 4th Atlantic Weather Signal Shows Now</h2>
            <p>
              The cleanest current takeaway is cautious but not alarming: the National Hurricane Center does not expect
              tropical cyclone formation in the Atlantic during the next seven days. That keeps the near-term tropical
              signal low, but July 4 holiday planning should still account for the Southeast&apos;s normal summer pattern
              of pop-up thunderstorms, humid air, beach hazards, and fast-changing coastal conditions.
            </p>
          </div>
          <div className="winnerCard">
            <Waves size={42} />
            <span>Current Atlantic Tropics</span>
            <strong>Quiet Near Term</strong>
            <small>NHC: no tropical cyclone formation expected within seven days</small>
          </div>
        </section>

        <section className="standingsWrap" id="tropics" aria-label="National Hurricane Center Atlantic outlook map">
          <div className="weatherMap">
            <div>
              <span className="sectionKicker">Tropical Outlook</span>
              <h2>Latest NHC Atlantic Map</h2>
              <p>
                This external map is loaded directly from the National Hurricane Center. It updates independently when
                NHC refreshes the seven-day Atlantic tropical outlook.
              </p>
            </div>
            <img
              src={nhcOutlookImageUrl}
              width="900"
              height="675"
              alt="National Hurricane Center seven-day Atlantic tropical weather outlook map"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        <section className="insightGrid" aria-label="July 4 Atlantic weather key points">
          {keyPoints.map((point) => {
            const Icon = point.icon;

            return (
              <article key={point.title}>
                <Icon size={24} />
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            );
          })}
        </section>

        <section className="contentSection" id="impacts">
          <span className="sectionKicker">Holiday Impacts</span>
          <h2>What Travelers Should Watch Before July 4</h2>
          <div className="resultList">
            {travelImpacts.map((impact) => (
              <div className="resultItem" key={impact}>
                <CalendarDays size={18} />
                <strong>{impact}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="contentSection">
          <span className="sectionKicker">Forecast Context</span>
          <h2>Why the Forecast Can Still Change</h2>
          <p>
            Early July is part of Atlantic hurricane season, but every tropical setup depends on short-term details:
            upper-level winds, Saharan dust, sea-surface temperatures, and whether a weak disturbance can organize near
            the coast or over open water. A quiet seven-day outlook is useful, but it should not be treated as a full
            holiday-week guarantee for every beach, port, or outdoor event.
          </p>
          <p>
            For practical planning, separate the tropical question from the day-to-day weather question. Even without a
            named storm, coastal thunderstorms can create lightning delays, heavy rain, rip currents, and rough boating
            windows. Local National Weather Service forecasts become more important as July 4 gets closer.
          </p>
        </section>

        <section className="contentSection">
          <span className="sectionKicker">Reference Topics</span>
          <h2>Related Weather Topics</h2>
          <div className="keywordCloud">
            {relatedTopics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </section>

        <section className="contentSection" id="faq">
          <span className="sectionKicker">FAQ</span>
          <h2>Quick Answers</h2>
          <details>
            <summary>Is there a hurricane threat for July 4th?</summary>
            <p>
              As of June 26, 2026, the National Hurricane Center does not expect Atlantic tropical cyclone formation
              during the next seven days. Keep checking because July 4 is close to the edge of that forecast window.
            </p>
          </details>
          <details>
            <summary>Could the Southeast still have stormy weather?</summary>
            <p>
              Yes. Scattered showers and thunderstorms are common in early July, especially during the afternoon and
              evening near the coast.
            </p>
          </details>
          <details>
            <summary>What should beach visitors check first?</summary>
            <p>
              Check your local National Weather Service forecast, beach hazard statements, rip-current risk, marine
              forecast, and any local event updates.
            </p>
          </details>
        </section>

        <section className="contentSection" id="sources">
          <span className="sectionKicker">External Links</span>
          <h2>Official Sources and Further Reading</h2>
          <p className="trustNotice">
            This independent weather article is for planning and reference only. Always follow National Weather Service,
            National Hurricane Center, emergency-management, and local official guidance for safety decisions.
          </p>
          <div className="sourceList">
            {officialSources.map((source) => (
              <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>
                {source.label}
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
