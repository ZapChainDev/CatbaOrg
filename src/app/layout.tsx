import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  name: "Catbalogan Fitness Association",
  alternateName: "CFA",
  description:
    "Non-profit community fitness organization in Catbalogan City, Samar, Philippines. Offering expert coaching, fitness education, and wellness programs open to everyone.",
  url: "https://www.catbalogan-fitness.com",
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Catbalogan City",
    addressRegion: "Samar",
    addressCountry: "PH",
    postalCode: "6700",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.7756,
    longitude: 124.8858,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "05:00",
      closes: "22:00",
    },
  ],
  priceRange: "$",
  isAccessibleForFree: false,
  nonprofitStatus: "Nonprofit501c3",
  sameAs: ["https://www.facebook.com/profile.php?id=61580688798000"],
};

export const metadata: Metadata = {
  title: {
    default: "Catbalogan Fitness Association",
    template: "%s | Catbalogan Fitness Association",
  },
  description:
    "Catbalogan Fitness Association — non-profit fitness organization in Catbalogan City, Samar. Expert coaching, fitness education & community wellness programs open to all ages.",
  keywords: [
    "fitness catbalogan",
    "gym catbalogan city",
    "catbalogan fitness association",
    "catbalogan fitness",
    "strength training catbalogan",
    "fitness samar",
    "gym samar philippines",
    "non-profit gym catbalogan",
    "community fitness catbalogan",
    "personal trainer catbalogan",
    "fitness coach catbalogan",
    "health wellness catbalogan city",
    "eastern visayas fitness",
    "beginner gym catbalogan",
    "fitness education philippines",
    "workout catbalogan",
    "catbalogan sports club",
    "gym near me catbalogan",
  ],
  metadataBase: new URL("https://www.catbalogan-fitness.com"),
  alternates: {
    canonical: "https://www.catbalogan-fitness.com",
  },
  authors: [
    {
      name: "Catbalogan Fitness Association",
      url: "https://www.catbalogan-fitness.com",
    },
  ],
  creator: "Catbalogan Fitness Association",
  publisher: "Catbalogan Fitness Association",
  applicationName: "Catbalogan Fitness Association",
  category: "Health & Fitness",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Catbalogan Fitness Association | Learn. Train. Transform.",
    description:
      "Non-profit fitness organization in Catbalogan City, Samar. Expert coaching, fitness education & community wellness programs open to everyone.",
    type: "website",
    url: "https://www.catbalogan-fitness.com",
    locale: "en_PH",
    siteName: "Catbalogan Fitness Association",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Catbalogan Fitness Association – Learn. Train. Transform.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catbalogan Fitness Association | Learn. Train. Transform.",
    description:
      "Non-profit fitness organization in Catbalogan City, Samar. Expert coaching, fitness education & community wellness for all.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  other: {
    "geo.region": "PH-SSA",
    "geo.placename": "Catbalogan City, Samar, Philippines",
    "geo.position": "11.7756;124.8858",
    ICBM: "11.7756, 124.8858",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen bg-zinc-950 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
