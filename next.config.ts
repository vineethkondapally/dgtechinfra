import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    // Redirect to canonical URL with trailing slash
    {
      source: '/:path((?!_next|favicon.svg|robots.txt|sitemap.xml|google.*|public).*)',
      destination: '/:path/',
      permanent: false,
    },
  ],
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Canonical-URL',
          value: 'https://dgtechinfra.com',
        },
        {
          key: 'Link',
          value: '<https://dgtechinfra.com>; rel="canonical"',
        },
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, stale-while-revalidate=86400',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
      ],
    },
    {
      source: '/sitemap.xml',
      headers: [
        {
          key: 'Content-Type',
          value: 'application/xml',
        },
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, stale-while-revalidate=86400',
        },
      ],
    },
    {
      source: '/robots.txt',
      headers: [
        {
          key: 'Content-Type',
          value: 'text/plain',
        },
        {
          key: 'Cache-Control',
          value: 'public, max-age=86400',
        },
      ],
    },
  ],
};

export default nextConfig;
