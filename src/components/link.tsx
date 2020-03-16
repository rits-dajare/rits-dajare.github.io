import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import styled from '@emotion/styled';
import { css } from 'theme-ui';
import React from 'react';
import { useSiteMetadata } from 'src/hooks';
import { useLocation } from '@reach/router';

type Props = Omit<GatsbyLinkProps<unknown>, 'ref'>;

const Component: React.FC<Props> = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  const metadata = useSiteMetadata();
  const location = useLocation();

  const origin =
    location.href !== undefined
      ? location
      : new URL(
          `${metadata?.siteUrl}${location.pathname}${location.search}${location.hash}`
        );

  const url = new URL(to, origin.href);

  if (
    url.hostname === origin.hostname && // internal
    url.pathname !== origin.pathname // not same page
  ) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <a href={to} {...other}>
      {children}
    </a>
  );
};

const Link = styled(Component)(css({ variant: 'styles.a' }));

export default Link;
