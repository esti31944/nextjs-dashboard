import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   /* config options here */
//   cacheComponents: {
//     ppr: 'incremental'
//   }
// };
const nextConfig = {
  experimental: {
    cacheComponents: true,
  },
};

export default nextConfig;
