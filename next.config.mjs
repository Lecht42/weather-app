// next.config.mjs

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'randomuser.me' },
      { protocol: 'http', hostname: 'openweathermap.org' },
    ],
  },
};

export default nextConfig;
