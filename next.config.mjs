/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3400",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
