/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iiitl.ac.in",
        port: "",
        pathname: "/wp-content/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
