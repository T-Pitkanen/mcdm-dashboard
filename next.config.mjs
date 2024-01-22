/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  webpack: function (config, options) {
    console.log(options.webpack.version);
    config.experiments = {
      ...config.experiments,
      layers: true,
      topLevelAwait: true,
    };
    return config;
  },
  images: {
    minimumCacheTTL: 0,
    remotePatterns: [],
  },
};

export default nextConfig;
