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
  description: "Hokwe makes rent payments easier and more rewarding. Pay, save, and manage rent with confidence.",
  // Open Graph Tags for Home Page
  openGraph: {
    title: "Hokwe - Simplify Rent Payments",
    description: "Hokwe makes rent payments easier with automatic billing, loyalty programs, and community access.",
    url: "https://hokwe.com",
    siteName: "Hokwe",
    images: [
      {
        url: "https://www.hokwe.com/og-image.jpg", // URL of the image
        width: 1200,
        height: 630,
        alt: "Hokwe Rent Collection Service & Rent Payment App",
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
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",

  robots: {
    index: true,
    follow: true,
  },
  keywords: "rent payment, tenant, landlord, rental management, property, real estate, automated payments, rent payments, Hokwe,  HokwePay, rent collections, rent management, tenant solutions, landlord tools",
  creator: "Hokwe Inc Technologies",
  authors: [{ name: "Hokwe Team", url: "https://hokwe.com" }],
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

      <head>{/* 
        <title>Hokwe</title>
        <meta name="description" content="Hokwe simplifies rent payments for tenants and landlords." />
        <link rel="canonical" href="https://hokwe.com" /> */}

        {/* Add other SEO-related meta tags here */}
        {/* Schema Markup for structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Hokwe",
              "description": "Simplifying rent payments and property management.",
              "url": "https://hokwe.com"
            }),
          }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hokwe",
              "url": "https://hokwe.com",
              "logo": "https://www.hokwe.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-123-4567",
                "contactType": "Customer Service",
              },
            }),
          }}
        ></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W3HR2631WF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W3HR2631WF', {
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
