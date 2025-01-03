/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://hokwe.com', // Replace with your deployed site URL
    generateRobotsTxt: true, // Generates a robots.txt file
    changefreq: 'daily', // Frequency of content changes
    priority: 0.7, // Default priority for URLs
    sitemapSize: 5000, // Optional: Set max number of URLs per sitemap
    outDir: './public',       // Directory to output the generated files  
  };
  