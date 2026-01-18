/** @type {import('next').NextConfig} */
// next.config.mjs

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  serverExternalPackages: ["mongoose"],
};

export default nextConfig;
