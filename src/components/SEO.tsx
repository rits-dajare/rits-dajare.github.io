import { NextSeo } from 'next-seo';
import { FC } from 'react';

const SEO: FC<{ title: string; path: string; description: string }> = ({
  title,
  path,
  description,
}) => {
  const url = `https://rits-dajare.github.io${path}`;
  const fullTitle = `${title && `${title} | `}立命館ダジャレサークル`;

  return (
    <NextSeo
      title={fullTitle}
      canonical={url}
      description={description}
      openGraph={{
        type: 'website',
        locale: 'ja_JP',
        url,
        site_name: fullTitle,
        description,
        images: [
          {
            url: 'https://rits-dajare.github.io/ogp.png',
            width: 4096,
            height: 4096,
            alt: '立命館ダジャレサークル',
          },
        ],
      }}
      twitter={{
        handle: '@rits_dajare',
        site: '@rits_dajare',
        cardType: 'summary',
      }}
    />
  );
};

export default SEO;
