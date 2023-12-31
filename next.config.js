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
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
