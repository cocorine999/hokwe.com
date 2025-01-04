import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  reactStrictMode: true, // Enables React strict mode
  //swcMinify: true, // Uses SWC for faster builds and minification
  images: {
    domains: ["www.hokwe.com"], // Allow images from specific domains
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true, // Redirects /home to /
      },
      {
        source: 'https://hokwe.com/:path*', // Match any path on https://hokwe.com/
        destination: 'https://www.hokwe.com/:path*', // Redirect to https://www.hokwe.com/
        permanent: true, // This is a permanent redirect (301)
      },
    ];
  }
};

export default nextConfig;
