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
    "url": "https://www.hokwe.com",
    "logo": "/logo.png",
    "name": "Hokwe",
    "description": "Simplify rent payments and manage rentals with Hokwe.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.hokwe.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const searchStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hokwe",
    "url": "https://www.hokwe.com",
    "logo": "https://www.hokwe.com/logo.png",
    "founder": {
      "@type": "Person",
      "name": "Corine BOCOGA"
    },
    "foundingDate": "2020-05-01",
    "description": "Hokwe is a platform offering services to businesses worldwide.",
    "sameAs": [
      "https://www.instagram.com/hokwe",
      "https://www.linkedin.com/company/hokwepaymentsolutions",
      "https://www.youtube.com/@hokwe4291",
      "https://www.tiktok.com/@hokwe",
      "https://web.facebook.com/hokwepaymentsolutions/",
      "https://x.com/hokwe",
      "https://www.pinterest.com/hokwepaymentsolutions"
    ]
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
        <meta property="og:url" content="https://www.hokwe.com" />
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
        <meta name="keywords" content="Hokwe, hokwe, business, platform, services, management, rent payment, tenant, landlord, rental management, property, real estate, automated payments, rent payments, Hokwe,  HokwePay, rent collections, properties management, tenant solutions, landlord tools"/>
        <meta name="author" content="Hokwe Team" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.hokwe.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(searchStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.hokwe.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://www.hokwe.com/company"
                }
              ]
            }),
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
