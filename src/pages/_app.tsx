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
      'color: #2A2928',
      'font-weight: bold; color: #B61F38; font-size: 2.5em',
      ''
    );

    console.log(
      `きさま！　見ているなッ！
%c
　　　　　　　　　　　　　　　　　　　　　　ﾄ､
　　　　　　　　　　　　　　　　　　　　　/ | |
　　　　　　　　　　　 ミ￣｀ヽ､,,ﾉ'''ノ'''/ ,/ﾉニ＝'
　　　　　　　　.＿ミ'　　　　| ﾄ､､　,,ノ ,//,,ノ,ﾆ''_ノj_,,
　　　　　　　ﾐ : : : : 　　　　|〉｀l ）|/,,/ /　/三／彡'　　　＿
　　　　　　　ミ::::::∠＿ミ--ﾉ　,,_,,彡_,ｲ_ノ￣ミ､ T　_,,ｨY彳⌒
　　　　　　　｀l､_ト-‐''⌒三く {::::::::<三/ﾊＶミ＿ Lｲﾉ／
　　　　　　 ＿ノ / rj ｎ ,,;ｴ !:::::::::::: ヾ´ ﾉハ　　ﾉ::∠　　＿
　　　　　　 ＜二_ﾉ/ ﾄ'j 彡 l:::::::::::::::　　r'|,,ｲヽ:::::-､ ﾞi /.......ﾞl
　　　　　　　 ヽ--'ノ ト|ニ-､::::::::::::::::　 j　　Vﾄ､:::::::|,/ ::::::: ﾉ
　　　　　　　　ﾞﾗ＿ﾉ.|/ / ,､ ＼::::::::::　/:::＼,,-┴‐'_ハ＿_/
　　　　　　　　　　　 { 「　 V┴ﾍ:::::::::/:::::／ ＿,-//､＿_,,ト､_
　　　　　　　　　　　　Vヽ:　｀ヽ└,､'::::／r∠　 く .{::::::::::: |┐.ﾞl
　　　　　　　　　　　　 ゝ､＿__.}_,-ﾉ_:::|_/ノ　ヽ 　＼ﾞー-ｲ,,l_　|｀ヽ
　　　　　　　　　 ,-─ｪ| {::::::,,-l／::::|::∠､: : :: ﾉ--､　　 /　　.ﾊ:::::|
　　　　　　　　／::／ハヽ__//:::::::::／: : ::}__,ｨ'､＿ﾉ　　/./｀V　.|::::|
　　　　　　_∠_／:::::::::::::,フｲ /　l´: : ::／|　|　|::::ヽ 　 {_ﾞ=ノ ／|:::}､
　　　　_∠　　|／::::::::／/　 |　　｀ーｲハ.l-ﾄ､ハ::::|／ ／ ,,ｲ |_|:/ﾉ
　　 ／　　　　|::::::::::/ /::::::,⊥＿__　|　 ﾊヽヽ|:::::rﾆ､イ ／:::| l　|Y
　 /　　 ,,-‐'':::｀ーｲ /_,,／/:::　　　ヽV::::::ﾊヽ＼{__ﾉ‐'´::::::::,ト|_j´
　j::::::::/::::::::::::::::::://|:::::::::::ﾉナ-､＿＿}::::::::::|.|:::::::::::￣￣￣|,L/
/　　/::::::::::::::::／: 〈〈::::::∠__}＿＿}:::::::∧:::::::||:::::::::::::::::::三」ﾞｰ'
ヽー'--､＿／|::::::::|.|:| {＿__}＿＿_::::::|＿:::::::||::::::::::::三＞ﾉ´
　　　　　　　 {三三|||:::::::::::}:::::::::::::::::::|　 ﾄ::::::ヾ､三三ﾉ　|
    `,
      'font-size: 0.75em; font-family: monospace; line-height: 1'
    );
    /* eslint-enable no-irregular-whitespace */
  }, []);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
