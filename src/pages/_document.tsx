import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#B61F38" />
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        </Head>
        <body className="h-full font-sans bg-off-white text-off-back">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
