import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pl-PL">
        <Head>
          <link href="fonts/fonts.css" rel="stylesheet" />
          <meta
            name="description"
            content="Pod Sufitem to szkoła akrobatyki powietrznej zlokalizowana w samym centrum warszawskiej Pragi Północ"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
