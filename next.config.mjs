// next.config.mjs

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "http", hostname: "openweathermap.org" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/persons",
        permanent: true,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
