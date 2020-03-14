import { graphql, useStaticQuery } from 'gatsby';
import { DeepPartial, DeepReadonly } from 'utility-types';

type Props = DeepReadonly<{
  site: DeepPartial<{
    siteMetadata: {
      title: string;
      description: string;
      shortName: string;
      author: string;
      url: string;
    };
  }>;
}>;

/**
 * ex. const {siteTitle, siteUrl} = useSiteMetadata();
 */
export default (): Props['site']['siteMetadata'] => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          shortName
          author
          url
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
