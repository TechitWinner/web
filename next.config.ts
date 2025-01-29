import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.techit.win',
        port: '',
        search: '',
      },
    ],
  }
};

export default nextConfig;
