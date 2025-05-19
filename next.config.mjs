/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'serviciopagina.upea.bo'
      }
    ]
  }
};

export default nextConfig;
