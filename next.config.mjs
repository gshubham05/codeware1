/** @type {import('next').NextConfig} */
// next.config.mjs

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Add your Cloudinary domain here
  },
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
};

export default nextConfig;
