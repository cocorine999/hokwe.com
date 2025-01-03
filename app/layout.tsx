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
  metadataBase: new URL("https://hokwe.com"),
  title: {
    default: "Hokwe - Simplify Rent Payments and Management",
    template: "%s | Hokwe",
  },
  description: "Hokwe makes rent payments easier and more rewarding. Pay, save, and manage rent with confidence.",
  // Open Graph Tags for Home Page
  openGraph: {
    title: "Hokwe - Simplify Rent Payments and Management",
    description: "Streamline rent payments, manage properties effortlessly, and connect with your rental community.",//"Hokwe makes rent payments easier with automatic billing, loyalty programs, and community access.",
    url: "https://hokwe.com",
    siteName: "Hokwe",
    locale: 'fr_FR',
    images: [
      {
        url: "/illustration1.png", // URL of the image
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
    title: "Hokwe - Simplify Rent Payments and Management",
    description: "Streamline rent payments, manage properties effortlessly, and connect with your rental community.",//"Hokwe simplifies rent payments for tenants and landlords, making transactions seamless and efficient.",
    images: [
      {// Twitter card image
        url: "/illustration1.png", // URL of the image
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
  //viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",

  robots: {
    index: true,
    follow: true,
  },
  keywords: "Hokwe, business, platform, services, management, rent payment, tenant, landlord, rental management, property, real estate, automated payments, rent payments, Hokwe,  HokwePay, rent collections, properties management, tenant solutions, landlord tools",
  creator: "Hokwe Inc Technologies",
  authors: [{ name: "Hokwe Team", url: "https://hokwe.com" }],
  // Additional Meta Tags
  category: "Real Estate", // Example of category meta tag
  classification: "Property Management", // Example of classification meta tag
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  alternates: {
    canonical: "https://hokwe.com",
  }
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
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

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


        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hokwe",
              "legalName":"Hokwe Inc Technologies",
              "@id":"https://www.hokwe.com/",
              "url": "https://www.hokwe.com",
              "logo": "https://www.hokwe.com/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Corine BOCOGA"
              },
              "foundingDate": "2020-05-01",
              "description": "Hokwe is a platform offering services to businesses worldwide.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+229-0162-004-867",
                "contactType": "Customer Service",
              },
              "sameAs": [
                "https://www.instagram.com/hokwe",
                "https://www.linkedin.com/company/hokwepaymentsolutions",
                "https://www.youtube.com/@hokwe4291",
                "https://www.tiktok.com/@hokwe",
                "https://web.facebook.com/hokwepaymentsolutions/",
                "https://x.com/hokwe",
                "https://www.pinterest.com/hokwepaymentsolutions"
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Hokwe",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Godomey",
                "addressLocality": "City",
                "addressRegion": "State",
                "postalCode": "12345",
                "addressCountry": "Country"
              },
              "url": "https://www.hokwe.com",
              "telephone": "+229-0162-004-867",
            }),
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
                  "item": "https://www.hokwe.com/about"
                }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Hokwe?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hokwe is a platform that provides exceptional services for businesses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I sign up for Hokwe?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can sign up on our website by visiting https://www.hokwe.com/signup."
                  }
                }
              ]
            }),
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R1DS7Z1N3B"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R1DS7Z1N3B', {
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
