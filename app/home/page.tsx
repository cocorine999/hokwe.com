// app/home/page.tsx
import Head from 'next/head';/* 
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hokwe | Home",
    description: "Welcome to Hokwe, the leading platform for rent payment solutions.",
  }; */

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
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <main>
        <section className="hero">
          <h1>Welcome to Hokwe</h1>
          <p>Simplify rent payments, manage properties, and join a thriving rental community.</p>
          <button>Get Started</button>
        </section>

        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Easy rent payments</li>
            <li>Property management tools</li>
            <li>Community engagement</li>
            <li>Loyalty rewards for on-time payments</li>
          </ul>
        </section>

        <section className="cta">
          <h2>Join the Hokwe community today!</h2>
          <button>Sign Up</button>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Hokwe - All Rights Reserved</p>
      </footer>
    </>
  );
}
