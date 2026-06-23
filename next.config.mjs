/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "caipsd.iub.edu.pk" },
    ],
  },
};

export default nextConfig;
