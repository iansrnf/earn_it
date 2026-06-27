/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper, TrendingUp } from "lucide-react";
import { articles, featuredArticle } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Walmart News Trend: Lukas Walton, Chicago Bulls and United Center Investment",
  description:
    "Latest trending news headlines including Walmart heir Lukas Walton's minority investment in the Chicago Bulls, an EarnApp passive-income guide, and July 4 Atlantic weather coverage.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="siteShell">
      <section className="newsHero" aria-labelledby="home-title">
        <div className="newsHeroContent">
          <div className="eyebrow">
            <TrendingUp size={18} />
            Trending News Desk
          </div>
          <h1 id="home-title">Walmart News Trend: Lukas Walton, Chicago Bulls and United Center Investment</h1>
          <p>
            Fast, sourced explainers for rising search topics. Start with the Walmart heir Bulls investment, then browse
            the EarnApp passive-income guide and preserved July 4 Atlantic weather outlook.
          </p>
        </div>
      </section>

      <section className="homeGrid" aria-label="Featured news">
        <Link className="featuredStory" href={`/articles/${featuredArticle.slug}`}>
          <img
            src={featuredArticle.heroImage}
            width={featuredArticle.imageWidth}
            height={featuredArticle.imageHeight}
            alt={featuredArticle.heroAlt}
            decoding="async"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
          <div>
            <span className="sectionKicker">{featuredArticle.category}</span>
            <h2>{featuredArticle.title}</h2>
            <p>{featuredArticle.description}</p>
            <strong>
              Read the article
              <ArrowRight size={18} />
            </strong>
          </div>
        </Link>

        <aside className="headlinePanel" aria-label="News headline list">
          <div className="headlinePanelHeader">
            <Newspaper size={20} />
            <h2>News Headlines</h2>
          </div>
          <div className="headlineList">
            {articles.map((article) => (
              <Link href={`/articles/${article.slug}`} key={article.slug}>
                <span>{article.category}</span>
                <strong>{article.shortTitle}</strong>
                <small>Updated {article.updatedAt}</small>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
