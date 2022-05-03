import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "../components";
import { Context as ResponsiveContext } from "react-responsive";

function MyApp({ Component, pageProps, deviceWidth }: AppProps) {
  return (
    <ResponsiveContext.Provider value={{ width: deviceWidth }}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ResponsiveContext.Provider>
  );
}

MyApp.getInitialProps = async ({ctx}) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  // const appProps = await App.getInitialProps(appContext);
  console.log('appcintenct', ctx);
  const userAgent = ctx.req.headers['user-agent'];
  const isMobile = Boolean(userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  )),
  deviceWidth = isMobile ? 767 : 1200;
  return { deviceWidth }
}

export default MyApp;
