// app/home/page.tsx
import Head from 'next/head';/* 
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hokwe | Home",
    description: "Welcome to Hokwe, the leading platform for rent payment solutions.",
  }; */

export default function AboutUs() {

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>About Us | Hokwe - Simplify Rent Payments and Management</title>
        <meta
          name="description"
          content="Hokwe helps tenants and landlords streamline rent payments, manage properties, and foster better interactions. Join the community today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="About Us | Hokwe - Simplify Rent Payments and Management" />
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
      </Head>

      <main>
        <section className="hero">
          <h1>About Hokwe</h1>
          <p>Simplify rent payments, manage properties, and join a thriving rental community.</p>
        </section>

      </main>

      <footer>
        <p>&copy; 2025 Hokwe - All Rights Reserved</p>
      </footer>
    </>
  );
}