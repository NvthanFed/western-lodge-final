import type { Metadata } from "next";
import { League_Spartan, Montserrat } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-league-spartan",
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Western Highway Lodge — Luxury Coastal Retreat | Marabut, Samar",
  description:
    "Experience the serene beauty of Marabut's coastal paradise at Western Highway Lodge. Tropical luxury, oceanfront rooms, rooftop bar, and world-class hospitality in Samar Province, Philippines.",
  keywords: [
    "Western Highway Lodge",
    "Marabut Samar hotel",
    "Philippines boutique hotel",
    "tropical resort Samar",
    "island hopping Marabut",
    "coastal hotel Philippines",
  ],
  openGraph: {
    title: "Western Highway Lodge — Luxury Coastal Retreat",
    description:
      "A sanctuary of tropical luxury on the shores of Samar Province, Philippines.",
    type: "website",
    locale: "en_PH",
    siteName: "Western Highway Lodge",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${montserrat.variable}`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
