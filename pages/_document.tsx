import Document, { Html, Head, Main, NextScript } from 'next/document'
import 'regenerator-runtime/runtime';
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const originalRenderPage = ctx.renderPage
    
    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App: any) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component: any) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        <meta name="description" content="Nykaa Next Application" />
        <link rel="icon" type="png" sizes="512x512" href="https://images-static.nykaa.com/nykdesignstudio-images/pub/media/app-icon-nykaa-fashion-web-512x512.png"/>
        <link href="https://fonts.cdnfonts.com/css/cera-round-pro" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument