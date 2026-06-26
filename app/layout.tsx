import type { Metadata, Viewport } from "next";
import "./globals.css";

const heroImageUrl = "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1600&q=80";

export const metadata: Metadata = {
  metadataBase: new URL("https://iansr.online"),
  title: {
    default: "July 4th Atlantic Weather Outlook: Tropics, Southeast Rain and Holiday Forecast",
    template: "%s | July 4 Atlantic Weather",
  },
  description:
    "Updated July 4th Atlantic weather outlook with the latest National Hurricane Center tropical update, Southeast rain risk, beach impacts, and official forecast links.",
  alternates: {
    canonical: "/",
  },
  applicationName: "July 4 Atlantic Weather Outlook",
  authors: [{ name: "Atlantic Weather Desk" }],
  category: "weather",
  keywords: [
    "july 4th atlantic weather",
    "july 4 atlantic weather",
    "july 4 tropical weather outlook",
    "atlantic weather july 4",
    "southeast july 4 weather",
    "atlantic hurricane outlook july 4",
  ],
  openGraph: {
    title: "July 4th Atlantic Weather Outlook",
    description: "Latest Atlantic tropics status, Southeast rain risk, and holiday beach-weather planning notes.",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: heroImageUrl,
        width: 1600,
        height: 900,
        alt: "Storm clouds over the ocean",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "July 4th Atlantic Weather Outlook",
    description: "Updated Atlantic tropical outlook, Southeast rain risk, and holiday forecast notes.",
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
