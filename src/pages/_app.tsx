import '../styles/index.css';
import type { AppProps } from 'next/app';
import { VFC, useEffect } from 'react';

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', setFillHeight, { passive: true });

    setFillHeight();

    return () => window.removeEventListener('resize', setFillHeight);
  }, []);

  useEffect(() => {
    /* eslint-disable no-irregular-whitespace, no-console */
    console.log(
      `
%cダジャレサークルの中身を見ているのは……

%cだれじゃ!?

%c▼ 探しものはここにあるかも

  - この Web サイトのソース:
    https://github.com/rits-dajare/rits-dajare.github.io
  - ダジャレ判定 / 評価エンジン:
    https://github.com/rits-dajare/DaaS
`,
      '',
      'font-weight: bold; color: #B61F38; font-size: 2.5em',
      ''
    );
    /* eslint-enable no-irregular-whitespace */
  }, []);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
