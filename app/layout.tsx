import type { Metadata, Viewport } from "next";
import "./globals.css";

const heroImageUrl = "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1600&q=80";

export const metadata: Metadata = {
  title: {
    default: "FIFA World Cup 2026 Group D Table: Standings, Results and Points",
    template: "%s | World Cup Group D Standings",
  },
  description:
    "Updated FIFA World Cup 2026 Group D table with USA, Australia, Paraguay, Turkiye standings, results, points, goal difference, qualification notes, and official source links.",
  applicationName: "World Cup Group D Standings",
  authors: [{ name: "World Cup Standings Desk" }],
  category: "sports",
  keywords: [
    "fifa world cup 2026 group d table",
    "world cup group d standings",
    "world cup 2026 group d results",
    "fifa standings 2026",
    "world cup bracket",
    "fifa world cup standings",
  ],
  openGraph: {
    title: "FIFA World Cup 2026 Group D Table and Standings",
    description: "Group D standings, results, qualification picture, and analysis for the 2026 FIFA World Cup.",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: heroImageUrl,
        width: 1600,
        height: 900,
        alt: "Floodlit football stadium with a green pitch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIFA World Cup 2026 Group D Table",
    description: "Updated Group D table, results, points, and goal difference.",
    images: [heroImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    monetag: "49552a352ef9432b970e0059ce002458",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17203a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://flagcdn.com" />
        <link rel="preconnect" href="https://quge5.com" />
        <link rel="dns-prefetch" href="https://3nbf4.com" />
        <link rel="preload" as="image" href={heroImageUrl} fetchPriority="high" />
        <script
          src="https://quge5.com/88/tag.min.js"
          data-zone="253585"
          async
          data-cfasync="false"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('serviceWorker'in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){});});}",
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
