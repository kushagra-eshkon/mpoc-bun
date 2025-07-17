import { Card, Counter } from "@mpoc/ui"
import { Metadata } from "next"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "ISRO Chandrayaan Missions – News Card",
  description:
    "ISRO approves Chandrayaan‑5 with JAXA rover, aiming for next-gen lunar exploration.",

  metadataBase: new URL("https://chandrayaan5.vercel.app"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "ISRO Chandrayaan‑5 Lunar Rover Mission",
    description:
      "India approves Chandrayaan‑5 with JAXA — a collaborative next-gen rover mission targeting advanced lunar exploration.",
    url: "https://chandrayaan5.vercel.app",
    siteName: "Chandrayaan Missions",
    images: [
      {
        url: "https://chandrayaan5.vercel.app/chandrayaan-5.jpg",
        width: 1200,
        height: 630,
        alt: "Chandrayaan‑5 rover concept image",
      },
    ],
    locale: "en_IN",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "ISRO Approves Chandrayaan‑5 Lunar Mission",
    description:
      "ISRO announces Chandrayaan‑5 — a next-generation rover in collaboration with Japan’s JAXA.",
    images: ["https://chandrayaan5.vercel.app/chandrayaan-5.jpg"],
    site: "@isro",
    creator: "@isro",
  },

  category: "science",
  keywords: [
    "ISRO",
    "Chandrayaan 5",
    "Lunar Mission",
    "JAXA",
    "India Moon Mission",
    "ISRO News",
    "Chandrayaan News",
  ],
  authors: [{ name: "ISRO", url: "https://www.isro.gov.in" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "ISRO Announces Chandrayaan‑5 Lunar Rover Mission",
    description:
      "India approves Chandrayaan‑5, a lunar rover mission in collaboration with JAXA, targeting enhanced Moon exploration.",
    image: "https://chandrayaan5.vercel.app/chandrayaan-5.jpg",
    datePublished: "2025-03-18",
    author: {
      "@type": "Organization",
      name: "ISRO",
      url: "https://www.isro.gov.in",
    },
    publisher: {
      "@type": "Organization",
      name: "ISRO",
      logo: {
        "@type": "ImageObject",
        url: "https://chandrayaan5.vercel.app/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://chandrayaan5.vercel.app",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <main
        style={{
          padding: "2rem",
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        <Card />
        <Counter />
      </main>
    </>
  )
}
