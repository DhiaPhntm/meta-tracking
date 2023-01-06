
const nextConfig = {
  reactStrictMode: true,
  eslint: { dirs: ["src"] },
  compiler: {
    styledComponents: true,
  },
  // Only .tsx files will be registered as routes in the pages folder.
  pageExtensions: ["tsx"],

  webpack(config, { webpack }) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};


module.exports = nextConfig;
