/* eslint-disable @next/next/no-img-element */
import { CalendarDays, ChevronRight, ExternalLink, Goal, ShieldCheck, Sparkles, Trophy } from "lucide-react";

const updatedAt = "June 26, 2026";
const heroImageUrl = "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1600&q=80";

const groupTable = [
  {
    rank: 1,
    team: "United States",
    short: "USA",
    flag: "https://flagcdn.com/w160/us.png",
    played: 3,
    won: 2,
    drawn: 0,
    lost: 1,
    goalsFor: 8,
    goalsAgainst: 4,
    goalDifference: "+4",
    points: 6,
    form: ["W", "W", "L"],
    status: "Qualified for the round of 32",
  },
  {
    rank: 2,
    team: "Australia",
    short: "AUS",
    flag: "https://flagcdn.com/w160/au.png",
    played: 3,
    won: 1,
    drawn: 1,
    lost: 1,
    goalsFor: 2,
    goalsAgainst: 2,
    goalDifference: "0",
    points: 4,
    form: ["W", "L", "D"],
    status: "Qualified for the round of 32",
  },
  {
    rank: 3,
    team: "Paraguay",
    short: "PAR",
    flag: "https://flagcdn.com/w160/py.png",
    played: 3,
    won: 1,
    drawn: 1,
    lost: 1,
    goalsFor: 2,
    goalsAgainst: 4,
    goalDifference: "-2",
    points: 4,
    form: ["L", "W", "D"],
    status: "Third-place qualification watch",
  },
  {
    rank: 4,
    team: "Turkiye",
    short: "TUR",
    flag: "https://flagcdn.com/w160/tr.png",
    played: 3,
    won: 1,
    drawn: 0,
    lost: 2,
    goalsFor: 3,
    goalsAgainst: 5,
    goalDifference: "-2",
    points: 3,
    form: ["L", "L", "W"],
    status: "Eliminated from Group D",
  },
];

const fixtures = [
  "United States 4-1 Paraguay",
  "Australia 2-0 Turkiye",
  "United States 2-0 Australia",
  "Paraguay 1-0 Turkiye",
  "Turkiye 3-2 United States",
  "Paraguay 0-0 Australia",
];

const sources = [
  {
    label: "FIFA World Cup 26 official hub",
    href: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026",
  },
  {
    label: "FIFA match centre",
    href: "https://www.fifa.com/en/match-centre",
  },
  {
    label: "Sky Sports World Cup tables",
    href: "https://www.skysports.com/world-cup-table",
  },
  {
    label: "Yahoo Sports World Cup standings",
    href: "https://sports.yahoo.com/soccer/world-cup/standings/",
  },
];

const relatedKeywords = [
  "fifa world cup 2026 group d qualifiers table",
  "world cup group d standings",
  "fifa standings 2026",
  "world cup bracket",
  "world cup group standings",
  "fifa world cup standings",
];

export default function Home() {
  const champion = groupTable[0];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "FIFA World Cup 2026 Group D Qualifiers Table, Standings and Results",
    description:
      "Updated Group D table for the 2026 FIFA World Cup with points, goal difference, fixtures, qualification picture, and analysis.",
    datePublished: "2026-06-26",
    dateModified: "2026-06-26",
    author: {
      "@type": "Organization",
      name: "World Cup Standings Desk",
    },
    image: heroImageUrl,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who leads FIFA World Cup 2026 Group D?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The United States leads Group D with six points after three matches.",
        },
      },
      {
        "@type": "Question",
        name: "Which teams qualified from World Cup 2026 Group D?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The United States and Australia finished in the top two qualification positions in Group D.",
        },
      },
      {
        "@type": "Question",
        name: "Why is Australia above Paraguay in Group D?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Australia and Paraguay both finished on four points, but Australia had the stronger overall goal difference.",
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
        name: "World Cup 2026",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Group D Standings",
      },
    ],
  };

  const tableJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "FIFA World Cup 2026 Group D Table",
    description: "Group D standings table with teams, points, goals, goal difference, and qualification status.",
    temporalCoverage: "2026",
    variableMeasured: ["points", "played", "won", "drawn", "lost", "goalsFor", "goalsAgainst", "goalDifference"],
  };

  return (
    <main className="siteShell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tableJsonLd) }} />

      <section className="hero" aria-labelledby="page-title">
        <img
          className="heroImage"
          src={heroImageUrl}
          width="1600"
          height="900"
          alt="Floodlit football stadium with a green pitch"
          decoding="async"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />
        <div className="heroOverlay" />
        <div className="heroContent">
          <div className="eyebrow">
            <Trophy size={18} />
            FIFA World Cup 2026 Group D
          </div>
          <h1 id="page-title">FIFA World Cup 2026 Group D Qualifiers Table, Standings and Results</h1>
          <p>
            The live search trend is clear: fans want the Group D table fast. Here is the current standings snapshot,
            match-by-match story, and what the results mean for the knockout bracket.
          </p>
          <div className="heroActions">
            <a href="#table" className="primaryAction">
              View Table
              <ChevronRight size={18} />
            </a>
            <a href="#results" className="secondaryAction">
              Match Results
            </a>
          </div>
        </div>
      </section>

      <nav className="quickNav" aria-label="Article sections">
        {["Table", "Results", "Analysis", "FAQ", "Sources"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>

      <article className="articleGrid">
        <section className="leadPanel" id="table">
          <div>
            <span className="sectionKicker">Updated {updatedAt}</span>
            <h2>Group D Standings Table</h2>
            <p>
              The United States won Group D on six points. Australia took second place on four points, edging Paraguay
              by goal difference after their final-day draw. Turkiye finished fourth despite beating the group winner in
              a high-scoring finale.
            </p>
          </div>
          <div className="winnerCard">
            <img
              src={champion.flag}
              width="160"
              height="120"
              alt="United States flag"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <span>Group Winner</span>
            <strong>{champion.team}</strong>
            <small>{champion.points} points, {champion.goalDifference} goal difference</small>
          </div>
        </section>

        <section className="standingsWrap" aria-label="World Cup Group D standings">
          <div className="tableScroll">
            <table className="standingsTable">
              <caption>FIFA World Cup 2026 Group D standings after three matches</caption>
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Team</th>
                  <th>P</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>GF</th>
                  <th>GA</th>
                  <th>GD</th>
                  <th>Pts</th>
                  <th>Form</th>
                </tr>
              </thead>
              <tbody>
                {groupTable.map((team) => (
                  <tr key={team.short}>
                    <td>
                      <span className={`rankBadge ${team.rank < 3 ? "qualified" : ""}`}>{team.rank}</span>
                    </td>
                    <td>
                      <div className="teamCell">
                        <img
                          src={team.flag}
                          width="160"
                          height="120"
                          alt={`${team.team} flag`}
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <strong>{team.team}</strong>
                          <span>{team.status}</span>
                        </div>
                      </div>
                    </td>
                    <td>{team.played}</td>
                    <td>{team.won}</td>
                    <td>{team.drawn}</td>
                    <td>{team.lost}</td>
                    <td>{team.goalsFor}</td>
                    <td>{team.goalsAgainst}</td>
                    <td>{team.goalDifference}</td>
                    <td className="pointsCell">{team.points}</td>
                    <td>
                      <div className="formDots" aria-label={`${team.team} form ${team.form.join(", ")}`}>
                        {team.form.map((result, index) => (
                          <span className={result.toLowerCase()} key={`${team.short}-${result}-${index}`}>
                            {result}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="insightGrid" aria-label="Group D key insights">
          <article>
            <ShieldCheck size={24} />
            <h3>Top Two Are Clear</h3>
            <p>USA and Australia occupy the automatic qualification places from Group D.</p>
          </article>
          <article>
            <Goal size={24} />
            <h3>Goal Difference Decided Second</h3>
            <p>Australia and Paraguay both reached four points, but Australia stayed above on goal difference.</p>
          </article>
          <article>
            <Sparkles size={24} />
            <h3>Turkiye Changed the Ending</h3>
            <p>Turkiye beat the United States 3-2, but earlier defeats left them short of the knockout picture.</p>
          </article>
        </section>

        <section className="contentSection" id="results">
          <span className="sectionKicker">Scores</span>
          <h2>Group D Results</h2>
          <div className="resultList">
            {fixtures.map((fixture) => (
              <div className="resultItem" key={fixture}>
                <CalendarDays size={18} />
                <strong>{fixture}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="contentSection" id="analysis">
          <span className="sectionKicker">Analysis</span>
          <h2>What the Table Means</h2>
          <p>
            Group D became a clean example of why World Cup tables are more than points alone. The United States had the
            most explosive attack in the group with eight goals, giving them enough margin to survive a final-match
            defeat. Australia did not score heavily, but the 2-0 win over Turkiye and the 0-0 draw with Paraguay were
            enough to protect second place.
          </p>
          <p>
            Paraguay stayed alive through defensive control after the opening loss, yet the heavy defeat to the United
            States damaged their goal difference. Turkiye had the group&apos;s most dramatic final result, but three points
            from three matches usually leaves too much scoreboard math to survive.
          </p>
        </section>

        <section className="contentSection">
          <span className="sectionKicker">Search Intent</span>
          <h2>Related Searches Fans Are Using</h2>
          <div className="keywordCloud">
            {relatedKeywords.map((keyword) => (
              <a key={keyword} href={`https://www.google.com/search?q=${encodeURIComponent(keyword)}`} target="_blank" rel="noreferrer">
                {keyword}
              </a>
            ))}
          </div>
        </section>

        <section className="contentSection" id="faq">
          <span className="sectionKicker">FAQ</span>
          <h2>Quick Answers</h2>
          <details>
            <summary>Who won World Cup 2026 Group D?</summary>
            <p>The United States finished first in Group D with six points.</p>
          </details>
          <details>
            <summary>Why is Australia second above Paraguay?</summary>
            <p>Australia and Paraguay both had four points, but Australia finished with a better overall goal difference.</p>
          </details>
          <details>
            <summary>Is this a World Cup bracket or a group table?</summary>
            <p>
              This page focuses on the Group D table. The result feeds into the knockout bracket once the round of 32
              matchups are confirmed.
            </p>
          </details>
        </section>

        <section className="contentSection" id="sources">
          <span className="sectionKicker">External Links</span>
          <h2>Sources and Further Reading</h2>
          <div className="sourceList">
            {sources.map((source) => (
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
