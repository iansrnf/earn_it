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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
