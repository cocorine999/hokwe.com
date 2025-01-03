import type { Metadata } from "next";
import Head from 'next/head';

/* export const metadata: Metadata = {
  title: "Hokwe - Simplify Rent Payments and Management",
  description:
    "Hokwe helps tenants and landlords streamline rent payments, manage properties, and foster better interactions. Join the community today!",
  keywords: ["rent payment", "property management", "tenants", "landlords", "Hokwe"],
  openGraph: {
    title: "Hokwe - Simplify Rent Payments and Management",
    description:
      "Streamline rent payments, manage properties effortlessly, and connect with your rental community.",
    url: "https://hokwe.com",
    type: "website",
    images: [
      {
        url: "/illustration1.png",
        width: 1200,
        height: 630,
        alt: "Hokwe Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hokwe - Simplify Rent Payments and Management",
    description:
      "Streamline rent payments, manage properties effortlessly, and connect with your rental community.",
    images: [
      {
        url: "/illustration1.png", // URL of the image
        width: 1200,
        height: 630,
        alt: "Hokwe Rent Collection Service & Rent Payment App",
      },
    ],
  },
  alternates: {
    canonical: "https://hokwe.com",
  },
}; */

/* export async function generateMetadata() {
  const siteData = await fetchSiteData(); // Fetch dynamic data if needed

  return {
    title: siteData.title || 'Hokwe - Simplify Rent Payments and Management',

    description:
      siteData.description ||
      'Hokwe helps tenants and landlords streamline rent payments, manage properties, and foster better interactions. Join the community today!',
    openGraph: {
      url: siteData.url || 'https://hokwe.com',
      title: siteData.title || 'Hokwe - Simplify Rent Payments',

      
      description: siteData.description || 'Streamline rent payments, manage properties effortlessly, and connect with your rental community.',,
      images: [
        {
          url: siteData.image || '/illustration1-2.png',
          width: 800,
          height: 600,
          alt: 'Hokwe Homepage Preview',
        },
      ],
    },
  };
} */


export default function Home() {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://hokwe.com",
    "logo": "/logo.png",
    "name": "Hokwe",
    "description": "Simplify rent payments and manage rentals with Hokwe.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://hokwe.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Hokwe - Simplify Rent Payments and Management</title>
        <meta
          name="description"
          content="Hokwe helps tenants and landlords streamline rent payments, manage properties, and foster better interactions. Join the community today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Hokwe - Simplify Rent Payments and Management" />
        <meta
          property="og:description"
          content="Streamline rent payments, manage properties effortlessly, and connect with your rental community."
        />
        <meta property="og:url" content="https://hokwe.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/illustration1.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hokwe - Simplify Rent Payments and Management" />
        <meta
          name="twitter:description"
          content="Streamline rent payments, manage properties effortlessly, and connect with your rental community."
        />
        <meta name="twitter:image" content="/illustration1.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://hokwe.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Hokwe",
              "url": "https://hokwe.com",
              "description":
                "Hokwe helps tenants and landlords streamline rent payments, manage properties, and foster better interactions.",
              "publisher": {
                "@type": "Organization",
                "name": "Hokwe",
              },
            }),
          }}
        />
      </Head>

      <main>
        <section>
          <h1>Welcome to Hokwe</h1>
          <p>Simplify rent payments, manage properties, and join a thriving rental community.</p>
          <button>Get Started</button>
        </section>
      </main>
    </>
  );
}
