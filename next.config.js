/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '1337',
            }
        ]
    },
    async rewrites() {
        return [
          {
            source: '/strapi-media/:path*',
            destination: 'http://127.0.0.1:1337/uploads/:path*' // Proxy to Strapi Uploads to bypass iframe block
          }
        ]
    }
};

module.exports = nextConfig;
