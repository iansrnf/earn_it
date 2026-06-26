import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 Group D Qualifiers Table, Standings and Results",
  description:
    "Updated FIFA World Cup 2026 Group D table with USA, Australia, Paraguay, Turkiye standings, results, points, goal difference, qualification notes, and sources.",
  keywords: [
    "fifa world cup 2026 group d qualifiers table",
    "world cup group d standings",
    "fifa standings 2026",
    "world cup bracket",
    "fifa world cup standings",
  ],
  openGraph: {
    title: "FIFA World Cup 2026 Group D Table and Standings",
    description: "Group D standings, results, qualification picture, and analysis for the 2026 FIFA World Cup.",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Floodlit football stadium with a green pitch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIFA World Cup 2026 Group D Qualifiers Table",
    description: "Updated Group D table, results, points, and goal difference.",
    images: ["https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1600&q=80"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
