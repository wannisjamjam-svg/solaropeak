import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SolaroPeak – Installateur Solaire Agréé ANRE au Maroc | PME Industrielles",
    template: "%s | SolaroPeak",
  },
  description:
    "SolaroPeak installe des systèmes photovoltaïques industriels pour les PME marocaines. Réduisez votre facture ONEE de 40 à 60%, ROI en 3-5 ans. Agréé ANRE. Dimensionnement, installation clé en main et suivi SAV.",
  keywords: [
    "solaire industriel Maroc",
    "photovoltaïque PME Maroc",
    "installation panneaux solaires Casablanca",
    "ANRE agréé solaire",
    "énergie solaire industrielle",
    "autoconsommation solaire Maroc",
    "réduire facture ONEE",
    "SolaroPeak",
  ],
  authors: [{ name: "SolaroPeak" }],
  creator: "SolaroPeak",
  publisher: "SolaroPeak",
  metadataBase: new URL("https://solaropeak.ma"),
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://solaropeak.ma",
    siteName: "SolaroPeak",
    title: "SolaroPeak – Énergie Solaire pour PME Industrielles au Maroc",
    description:
      "Réduisez votre facture ONEE de 40 à 60% avec une installation solaire industrielle. Agréé ANRE. ROI en 3-5 ans. Financement préférentiel disponible.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SolaroPeak – Énergie Solaire Industrielle au Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SolaroPeak – Solaire Industriel au Maroc",
    description: "Réduisez votre facture ONEE de 40-60%. Agréé ANRE. ROI 3-5 ans.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://solaropeak.ma",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SolaroPeak",
  alternateName: "AlaqPowerSolutions",
  description:
    "Installateur agréé ANRE de systèmes photovoltaïques industriels pour PME marocaines.",
  url: "https://solaropeak.ma",
  telephone: "+212-5XX-XXXXXX",
  email: "contact@solaropeak.ma",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Boulevard Zerktouni",
    addressLocality: "Casablanca",
    addressRegion: "Grand Casablanca",
    postalCode: "20000",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.5731,
    longitude: -7.5898,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/solaropeak",
    "https://www.facebook.com/solaropeak",
  ],
  areaServed: "MA",
  serviceType: "Installation de panneaux solaires photovoltaïques",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
