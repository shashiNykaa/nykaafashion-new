/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@nykaa/analytics-sdk', '@nykaa/utils', '@nykaa/network', '@nykaa/logger']);
const env = require('./env')();

// const raw = {
//   PORT: process.env.PORT || 8500,
//   NODE_ENV: process.env.NODE_ENV || 'development',
//   HOST: process.env.HOST || 'http://localhost',
//   ASSET_HOST: process.env.ASSET_HOST || 'http://localhost',
//   API_HOST: process.env.API_HOST || 'http://localhost',
//   API_INTERNAL_HOST: process.env.API_INTERNAL_HOST || 'http://localhost',
//   AD_PLATFORM_HOST: process.env.AD_PLATFORM_HOST || process.env.API_HOST,
//   AWS_BUCKET: process.env.AWS_BUCKET || '',
//   AWS_REGION: process.env.AWS_REGION || '',
//   SKIP_PUBLISH: process.env.SKIP_PUBLISH || 'false',
//   API_CACHE_TTL: process.env.API_CACHE_TTL || 30,
//   SENTRY_DSN: process.env.SENTRY_DSN || '',
//   SENTRY_ENV: process.env.SENTRY_ENV || 'development',
//   DTM_URL:
//     process.env.DTM_URL ||
//     '//assets.adobedtm.com/launch-ENcb0fd9a1b2af497fb038fd52b9e8f736-development.min.js',
//   FIREBASE_APP_MODE: process.env.FIREBASE_APP_MODE || 'development',
//   EXPLORE_PLATFORM_HOST: process.env.EXPLORE_PLATFORM_HOST || '',
//   FITADVISOR_API_HOST: process.env.FITADVISOR_API_HOST || 'https://preprod-api.nykaafashion.com',
//   WITH_SERVICE_WORKER: process.env.WITH_SERVICE_WORKER || 'false',
//   REMOTE_CONFIG:
//     process.env.REMOTE_CONFIG ||
//     'https://preprod-asset.nykaafashion.com/remote-configs/remote-config.json',
//   SENTRY_CSP_DSN: process.env.SENTRY_CSP_DSN || '',
//   AD_PLATFORM_EVENTS_HOST:
//     process.env.AD_PLATFORM_EVENTS_HOST || 'https://nonprod-events.nykaa.com',
//   IMPRESSION_LOG_DOMAIN: process.env.AD_PLATFORM_EVENTS_HOST,
//   PRODUCTION_TESTING: process.env.PRODUCTION_TESTING || 'false',
//   PDP_API_HOST: process.env.PDP_API_HOST || 'https://preprod.nykaa.com',
//   ANALYTICS_ENDPOINT:
//     process.env.ANALYTICS_ENDPOINT || 'https://preprod-retina-api.nykaa.com/v1/events/fashion',
//   CMS_INTERNAL_HOST: process.env.CMS_INTERNAL_HOST || 'https://preprod-cms.nyk00-int.network',
// };
// // Stringify all values so we can feed into Webpack DefinePlugin
// const stringified = {
//   'process.env': Object.keys(raw).reduce((env, key) => {
//     env[key] = JSON.stringify(raw[key]);
//     return env;
//   }, {}),
// };
console.log(env.stringified);
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["adn-static1.nykaa.com"],
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __SERVER__: 'false',
        __BROWSER__: 'true',
      }),
      new webpack.DefinePlugin({'env':'abc'}),
    );

    config.resolve = {
      ...config.resolve,
      fallback: {
        "fs": false,
        "path": false,
        "os": false,
      },
      alias: {
        ...config.resolve.alias,
        zlib: require.resolve('browserify-zlib'),  
        http: false,
        https: false,
      },
    }
    return config
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([withBundleAnalyzer, withTM], nextConfig);
