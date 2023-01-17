
const nextConfig = {
  reactStrictMode: true,
  eslint: { dirs: ["src"] },
  compiler: {
    styledComponents: true,
  },
  // Only .tsx files will be registered as routes in the pages folder.
  pageExtensions: ["tsx"],

  i18n: {
    locales: ['default', 'en-GB', 'en-IN', 'hi-IN', 'bn-IN', 'gu-IN'],
    defaultLocale: 'default',
    localeDetection: false,
  },

  webpack(config, { webpack }) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};


module.exports = nextConfig;
