import React from 'react';
import Helmet from 'react-helmet';
import { useAnyImage, useSiteBuildTime, useSiteMetadata } from 'src/hooks';
import { DeepPartial, DeepReadonly } from 'utility-types';

type Props = Readonly<
  Partial<{
    title: string;
    description: string;
    pathname: string;
    image: string;
  }>
>;

type JsonLdConfigProps = DeepReadonly<
  DeepPartial<{
    '@context': string;
    '@type': string;
    inLanguage: string;
    url: string;
    headline: string;
    name: string;
    alternateName: string;
    description: string;
    author: {
      '@type': string;
      name: string;
      sameas: string;
      url: string;
      image: {
        '@type': string;
        url: string;
        width: number;
        height: number;
      };
    }[];
    publisher: {
      '@type': string;
      name: string;
      description: string;
      logo: {
        '@type': string;
        url: string;
        width: number;
        height: number;
      };
    };
    image:
      | {
          '@type': string;
          url: string;
        }
      | string;
    itemListElement: [
      {
        '@type': string;
        position: number;
        item: {
          '@id': string;
          name: string;
          image: string;
        };
      }
    ];
    datePublished: string;
    dateModified: string;
    potentialAction: {};
    mainEntityOfPage: {
      '@type': string;
      '@id': string;
    };
  }>
>[];

const SEO: React.FC<Props> = ({
  title = '',
  description = '',
  pathname = '',
  image = ''
}) => {
  const metadata = useSiteMetadata() || {};
  const buildTime = useSiteBuildTime();
  const icon = useAnyImage('icon.png');
  const banner = useAnyImage('banner.png');

  const seo = {
    title: title || metadata.title,
    description: description || metadata.description,
    url: `${metadata.url}${pathname || ``}`,
    image: `${metadata.url}${image || banner?.src}`
  };

  // JSON+LD configurations
  const jsonLdAuthor = [
    {
      '@type': 'Person',
      name: metadata.author,
      description: metadata.description,
      image: {
        '@type': 'ImageObject',
        url: icon?.src,
        width: 60,
        height: 60
      },
      url: metadata.url
    },
    {
      '@type': 'thing',
      name: metadata.author,
      sameas: metadata.title,
      url: metadata.url,
      image: {
        '@type': 'ImageObject',
        url: banner?.src,
        width: 60,
        height: 60
      }
    }
  ];

  const publisher = {
    '@type': 'Organization',
    name: metadata.author,
    description: metadata.description,
    logo: {
      '@type': 'ImageObject',
      url: icon?.src,
      width: 60,
      height: 60
    }
  };

  const jsonLdConfigs: JsonLdConfigProps = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      inLanguage: 'ja',
      url: metadata.title,
      name: title,
      alternateName: seo.title,
      image: seo.image,
      description: seo.description,
      author: jsonLdAuthor,
      publisher
    }
  ];

  if (pathname !== '/') {
    jsonLdConfigs.push({
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': seo.url,
            name: seo.title,
            image: seo.image
          }
        }
      ]
    });

    jsonLdConfigs.push({
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      url: seo.url,
      name: title,
      alternateName: seo.title,
      headline: title,
      image: {
        '@type': 'ImageObject',
        url: seo.image
      },
      description,
      datePublished: buildTime,
      dateModified: buildTime,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': seo.url
      },
      author: jsonLdAuthor,
      publisher
    });
  }

  return (
    <Helmet
      title={title}
      defaultTitle={metadata.title}
      titleTemplate={`%s | ${metadata.title}`}
    >
      <html lang="ja" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover, shrink-to-fit=no"
      />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={metadata.author} />
      <script type="application/ld+json">
        {JSON.stringify(jsonLdConfigs)}
      </script>
    </Helmet>
  );
};

export default SEO;
