/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/steven-tey/precedent",
        permanent: false,
      },
    ];
  },
  env: {
    YOUTUBE_API: "AIzaSyAJ90bVapOoUQlovGxbGLK2P7borpUWfWg"
  },
};

module.exports = nextConfig;
