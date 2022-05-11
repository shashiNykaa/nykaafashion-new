import AnalyticsSDK from "@nykaa/analytics-sdk";

const AnalyticsInitialize = () => {
console.log('initialized ANALYTICS');
  const sdk = new AnalyticsSDK({
    analyticsEndpoint: process.env.ANALYTICS_ENDPOINT,
    environment: 'preprod',
    vertical: "nykaafashion",
    platform: 'dweb',
    customerId: '123',
    appVersion: '0.0.1',
  });

  return null;
};

export default AnalyticsInitialize;
