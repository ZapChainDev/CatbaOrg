import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Catbalogan Fitness Academy",
    template: "%s | Catbalogan Fitness Academy",
  },
  description:
    "Catbalogan Fitness Academy is a non-profit community fitness organization dedicated to promoting health and wellness for everyone in Catbalogan City.",
  keywords: [
    "fitness",
    "gym",
    "training",
    "catbalogan",
    "fitness education",
    "strength training",
    "conditioning",
    "samar",
    "philippines",
  ],
  openGraph: {
    title: "Catbalogan Fitness Academy",
    description:
      "Learn. Train. Transform. Fitness education meets expert coaching in Catbalogan City.",
    type: "website",
    locale: "en_PH",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
