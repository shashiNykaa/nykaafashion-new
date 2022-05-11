import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from 'next/dynamic';
import { MainLayout } from "../components";
import { Context as ResponsiveContext } from "react-responsive";
const AnalyticsInitialize = dynamic(
  () => import('../components/common/intializeAnalytics'),
  { ssr: false }
)
function MyApp({ Component, pageProps, deviceWidth }: AppProps & any) {
  return (
    <ResponsiveContext.Provider value={{ width: deviceWidth }}>
      <MainLayout>
        <AnalyticsInitialize />
        <Component {...pageProps} />
      </MainLayout>
    </ResponsiveContext.Provider>
  );
}

MyApp.getInitialProps = async ({ctx} :any) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  // const appProps = await App.getInitialProps(appContext);
  // console.log('appcintenct', ctx);
  const userAgent = ctx.req.headers['user-agent'];
  const isMobile = Boolean(userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  )),
  deviceWidth = isMobile ? 767 : 1200;
  return { deviceWidth }
}

export default MyApp;
