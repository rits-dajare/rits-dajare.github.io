const siteMetadata = {
  title: '立命館ダジャレサークル',
  description: '立命館ダジャレサークルのWebサイトです',
  shortName: 'RDC',
  author: '@rits_dajare',
  siteUrl: 'https://rits-dajare.github.io/'
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-root-import',
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400,
              quality: 90,
              linkImagesToOriginal: true
            }
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        siteUrl: siteMetadata.siteUrl
      }
    },
    'gatsby-plugin-advanced-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        openAnalyzer: false
      }
    },
    // gatsby-plugin-manifest should be described before gatsby-plugin-offline
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        /* eslint-disable @typescript-eslint/camelcase */
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        description: siteMetadata.description,
        Scope: '/',
        start_url: '/?utm_source=homescreen',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: './src/images/icon.svg'
        /* eslint-enable */
      }
    },
    'gatsby-plugin-offline'
  ]
};
