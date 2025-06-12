import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: false,
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    ENV: process.env.NEXT_PUBLIC_ENV,
    API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  },
};

export default nextConfig;
