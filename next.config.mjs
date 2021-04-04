/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  output: 'export',
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/blog",
      destination: "/blog/index.html",
    },
  ],
};

export default nextConfig;
