import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hokwe - Simplifying Rent Payments",
  description: "Hokwe simplifies rent payments for tenants and landlords, making transactions seamless and efficient.",

  // Open Graph Tags for Home Page
  openGraph: {
    title: "Hokwe - Simplifying Rent Payments",
    description: "Hokwe simplifies rent payments for tenants and landlords, making transactions seamless and efficient.",
    url: "https://www.hokwe.com",
    siteName: "Hokwe",
    images: [
      {
        url: "https://www.hokwe.com/og-image.jpg", // URL of the image
        width: 1200,
        height: 630,
        alt: "Hokwe Rent Payment Service",
      },
    ],
    type: "website",
  },

  // Twitter Card Tags for Home Page
  twitter: {
    card: "summary_large_image",
    title: "Hokwe - Simplifying Rent Payments",
    description: "Hokwe simplifies rent payments for tenants and landlords, making transactions seamless and efficient.",
    images: [
      {// Twitter card image
        url: "https://www.hokwe.com/og-image.jpg", // URL of the image
        width: 1200,
        height: 630,
        alt: 'Hokwe homepage image showcasing features',
      },
    ],
    site: "Hokwe",
  },
  facebook: {
    appId: '12345678', // Replace with your Facebook App ID
  },
  viewport: "",
  robots: {
    index: true,
    follow: true,
  },
  keywords: "rent payment, tenant, landlord, rental management, property, real estate, automated payments",
  creator: "Hokwe Inc Technologies",
  authors: [{ name: "Hokwe Team", url: "https://www.hokwe.com" }],
  // Additional Meta Tags
  category: "Real Estate", // Example of category meta tag
  classification: "Property Management", // Example of classification meta tag
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <title>Hokwe</title>
        <meta name="description" content="Hokwe simplifies rent payments for tenants and landlords." />
        {/* Add other SEO-related meta tags here */}
        {/* Schema Markup for structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hokwe",
              "url": "https://www.hokwe.com",
              "logo": "https://www.hokwe.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-123-4567",
                "contactType": "Customer Service",
              },
            }),
          }}
        ></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WH3ZBHSY25"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WH3ZBHSY25', {
              page_path: window.location.pathname,
            });
          `,
          }}
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
