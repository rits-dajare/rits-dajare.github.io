import '../styles/index.css';
import type { AppProps } from 'next/app';
import { FC } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

export default MyApp;
