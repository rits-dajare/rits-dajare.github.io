import '../styles/index.css';
import type { AppProps } from 'next/app';
import { FC, useEffect } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', setFillHeight, { passive: true });

    setFillHeight();

    return () => window.removeEventListener('resize', setFillHeight);
  }, []);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
