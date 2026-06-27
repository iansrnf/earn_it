/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, ChevronRight, ExternalLink, Radio } from "lucide-react";
import { articles, getArticle } from "@/lib/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    keywords: article.relatedTopics,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.publishedAt,
      images: [
        {
          url: article.heroImage,
          width: article.imageWidth,
          height: article.imageHeight,
          alt: article.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.heroImage],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: "Trending News Desk",
    },
    image: article.heroImage,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://iansr.online/articles/${article.slug}`,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://iansr.online/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: article.shortTitle,
        item: `https://iansr.online/articles/${article.slug}`,
      },
    ],
  };

  return (
    <main className={`siteShell ${article.theme === "earnapp" ? "earnappTheme" : ""}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero" aria-labelledby="page-title">
        <img
          className="heroImage"
          src={article.heroImage}
          width={article.imageWidth}
          height={article.imageHeight}
          alt={article.heroAlt}
          decoding="async"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />
        <div className="heroOverlay" />
        <div className="heroContent">
          <Link href="/" className="backLink">
            <ArrowLeft size={17} />
            Headlines
          </Link>
          <div className="eyebrow">
            <Radio size={18} />
            {article.eyebrow}
          </div>
          <h1 id="page-title">{article.title}</h1>
          <p>{article.lead}</p>
          <div className="heroActions">
            <a href={`#${article.sections[0]?.id ?? "summary"}`} className="primaryAction">
              {article.primaryCta}
              <ChevronRight size={18} />
            </a>
            <a href="#sources" className="secondaryAction">
              {article.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <nav className="quickNav" aria-label="Article sections">
        {article.sections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            {section.kicker}
          </a>
        ))}
        <a href="#impacts">Fast Facts</a>
        <a href="#faq">FAQ</a>
        <a href="#sources">Sources</a>
      </nav>

      <article className="articleGrid">
        {article.sections.map((section, index) => (
          <section className={index === 0 ? "leadPanel" : "contentSection"} id={section.id} key={section.id}>
            <div>
              <span className="sectionKicker">{index === 0 ? `Updated ${article.updatedAt}` : section.kicker}</span>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {index === 0 ? (
              <div className="winnerCard">
                <CalendarDays size={42} />
                <span>{article.category}</span>
                <strong>{article.updatedAt}</strong>
                <small>{article.description}</small>
              </div>
            ) : null}
          </section>
        ))}

        {article.externalImage ? (
          <section className="standingsWrap" aria-label={article.externalImage.title}>
            <div className="weatherMap">
              <div>
                <span className="sectionKicker">External Image</span>
                <h2>{article.externalImage.title}</h2>
                <p>{article.externalImage.description}</p>
              </div>
              <img
                src={article.externalImage.src}
                width={article.externalImage.width}
                height={article.externalImage.height}
                alt={article.externalImage.alt}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          </section>
        ) : null}

        <section className="insightGrid" aria-label={`${article.shortTitle} key points`}>
          {article.keyPoints.map((point) => {
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
          <span className="sectionKicker">Fast Facts</span>
          <h2>{article.impactTitle}</h2>
          {article.promotedLink ? (
            <a className="promoCard" href={article.promotedLink.href} target="_blank" rel="noreferrer">
              <span>{article.promotedLink.label}</span>
              <strong>{article.promotedLink.href}</strong>
              <small>{article.promotedLink.disclosure}</small>
            </a>
          ) : null}
          <div className="resultList">
            {article.impacts.map((impact) => (
              <div className="resultItem" key={impact}>
                <CalendarDays size={18} />
                <strong>{impact}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="contentSection">
          <span className="sectionKicker">Reference Topics</span>
          <h2>Related Search Topics</h2>
          <div className="keywordCloud">
            {article.relatedTopics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </section>

        <section className="contentSection" id="faq">
          <span className="sectionKicker">FAQ</span>
          <h2>Quick Answers</h2>
          {article.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>

        <section className="contentSection" id="sources">
          <span className="sectionKicker">External Links</span>
          <h2>Sources and Further Reading</h2>
          <p className="trustNotice">
            This independent article summarizes public reports and official source material. Use the linked sources for
            direct statements and the latest updates.
          </p>
          <div className="sourceList">
            {article.sources.map((source) => (
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
