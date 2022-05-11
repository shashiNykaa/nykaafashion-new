// const fs = require('fs');
// const path = require('path');
// const paths = require('./paths');

// delete require.cache[require.resolve('./paths')];

// if (!process.env.NODE_ENV) {
//   throw new Error(
//     'The process.env.NODE_ENV environment variable is required but was not specified.'
//   );
// }

// // https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
// const dotenvFiles = [
//   `${paths.dotenv}.${process.env.NODE_ENV}.local`,
//   `${paths.dotenv}.${process.env.NODE_ENV}`,
//   process.env.NODE_ENV !== 'test' && `${paths.dotenv}.local`,
//   paths.dotenv,
// ].filter(Boolean);

// dotenvFiles.forEach((dotenvFile) => {
//   if (fs.existsSync(dotenvFile)) {
//     require('dotenv').config({
//       path: dotenvFile,
//     });
//   }
// });

// const appDirectory = fs.realpathSync(process.cwd());
// process.env.NODE_PATH = (process.env.NODE_PATH || '')
//   .split(path.delimiter)
//   .filter((folder) => folder && !path.isAbsolute(folder))
//   .map((folder) => path.resolve(appDirectory, folder))
//   .join(path.delimiter);

module.exports = () => {
  // define env vars you want to use in your client app here.
  // CAREFUL: don't use any secrets like api keys or database passwords as they are exposed publicly!
  const raw = {
    PORT: process.env.PORT || 8500,
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'http://localhost',
    ASSET_HOST: process.env.ASSET_HOST || 'http://localhost',
    API_HOST: process.env.API_HOST || 'http://localhost',
    API_INTERNAL_HOST: process.env.API_INTERNAL_HOST || 'http://localhost',
    AD_PLATFORM_HOST: process.env.AD_PLATFORM_HOST || process.env.API_HOST,
    AWS_BUCKET: process.env.AWS_BUCKET || '',
    AWS_REGION: process.env.AWS_REGION || '',
    SKIP_PUBLISH: process.env.SKIP_PUBLISH || 'false',
    API_CACHE_TTL: process.env.API_CACHE_TTL || 30,
    SENTRY_DSN: process.env.SENTRY_DSN || '',
    SENTRY_ENV: process.env.SENTRY_ENV || 'development',
    DTM_URL:
      process.env.DTM_URL ||
      '//assets.adobedtm.com/launch-ENcb0fd9a1b2af497fb038fd52b9e8f736-development.min.js',
    FIREBASE_APP_MODE: process.env.FIREBASE_APP_MODE || 'development',
    EXPLORE_PLATFORM_HOST: process.env.EXPLORE_PLATFORM_HOST || '',
    FITADVISOR_API_HOST: process.env.FITADVISOR_API_HOST || 'https://preprod-api.nykaafashion.com',
    WITH_SERVICE_WORKER: process.env.WITH_SERVICE_WORKER || 'false',
    REMOTE_CONFIG:
      process.env.REMOTE_CONFIG ||
      'https://preprod-asset.nykaafashion.com/remote-configs/remote-config.json',
    SENTRY_CSP_DSN: process.env.SENTRY_CSP_DSN || '',
    AD_PLATFORM_EVENTS_HOST:
      process.env.AD_PLATFORM_EVENTS_HOST || 'https://nonprod-events.nykaa.com',
    IMPRESSION_LOG_DOMAIN: process.env.AD_PLATFORM_EVENTS_HOST,
    PRODUCTION_TESTING: process.env.PRODUCTION_TESTING || 'false',
    PDP_API_HOST: process.env.PDP_API_HOST || 'https://preprod.nykaa.com',
    ANALYTICS_ENDPOINT:
      process.env.ANALYTICS_ENDPOINT || 'https://preprod-retina-api.nykaa.com/v1/events/fashion',
    CMS_INTERNAL_HOST: process.env.CMS_INTERNAL_HOST || 'https://preprod-cms.nyk00-int.network',
  };
  // Stringify all values so we can feed into Webpack DefinePlugin
  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
  };

  return {
    raw,
    stringified,
  };
};
