/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',  // Optimizes for deployment
    async rewrites() {
      return [
        {
          source: '/shop',
          destination: 'https://wonderfabe.printify.me/',
        },
        {
          source: '/shop/:path*',
          destination: 'https://wonderfabe.printify.me/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
