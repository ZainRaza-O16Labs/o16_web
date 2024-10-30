module.exports = {
  // Custom webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Modify webpack config here
    return config;
  },
  images: {
    domains: [
      "o16-labs.com",
      "o16labs.com",
      "blog.216-225-204-173.plesk.page",
      "blog.o16labs.com",
    ],
  },
  env: {
    siteKey: "6Lc5zTIqAAAAABw79xnTt1OZA1NCs3KXj-uB3Dmu",
  },
  // Customizing Next.js behavior
  images: {
    domains: [
      "o16-labs.com",
      "o16labs.com",
      "blog.216-225-204-173.plesk.page",
      "blog.o16labs.com",
      "mobirise.com",
      "i.pinimg.com",
      "encrypted-tbn0.gstatic.com",
      "picsum.photos",
    ], // List of domains for optimized image loading
  },

  redirects: async () => [
    {
      source: "/:path*",
      has: [{ type: "host", value: "o16labs.com" }],
      destination: "https://www.o16labs.com/:path*",
      permanent: true,
    },
  ],
};
