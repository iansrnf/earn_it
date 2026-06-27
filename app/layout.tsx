import type { Metadata, Viewport } from "next";
import "./globals.css";

const heroImageUrl = "https://commons.wikimedia.org/wiki/Special:Redirect/file/United%20Center%20060716.jpg?width=1600";

export const metadata: Metadata = {
  metadataBase: new URL("https://iansr.online"),
  title: {
    default: "Trending News: Walmart Heir Lukas Walton, Chicago Bulls and United Center",
    template: "%s | Trending News Desk",
  },
  description:
    "Trending news explainers with source links, including Walmart heir Lukas Walton's Chicago Bulls and United Center minority investment plus July 4 Atlantic weather coverage.",
  alternates: {
    canonical: "/",
  },
  applicationName: "Trending News Desk",
  authors: [{ name: "Trending News Desk" }],
  category: "news",
  keywords: [
    "walmart",
    "lukas walton",
    "walmart heir",
    "chicago bulls",
    "united center",
    "july 4th atlantic weather",
  ],
  openGraph: {
    title: "Trending News: Walmart Heir Lukas Walton and Chicago Bulls Investment",
    description: "Source-linked headline list and explainers for rising Walmart and weather search topics.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: heroImageUrl,
        width: 1600,
        height: 900,
        alt: "United Center exterior in Chicago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trending News: Walmart Heir Lukas Walton and Chicago Bulls Investment",
    description: "Source-linked headline list and explainers for rising search topics.",
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
        <link rel="preconnect" href="https://commons.wikimedia.org" />
        <link rel="preconnect" href="https://www.nhc.noaa.gov" />
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
