import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  reactStrictMode: true, // Enables React strict mode
  //swcMinify: true, // Uses SWC for faster builds and minification
  images: {
    domains: ["www.hokwe.com"], // Allow images from specific domains
  }/* ,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true, // Redirects /home to /
      }
    ];
  } */
};

export default nextConfig;
