import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Earnapp Devices",
  description: "Earnapp device list, usage forecast, and delete tool",
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
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
