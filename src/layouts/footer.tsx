import React from 'react';
import { Box, css } from 'theme-ui';
import styled from '@emotion/styled';
import useSiteBuildTime from 'src/hooks/use-site-buildtime';

const Component: React.FC<{ className?: string; buildYear: number }> = ({
  className,
  buildYear,
}) => (
  <Box as="footer" className={className}>
    {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
    Copyright © {buildYear.toString(10)} 立命館ダジャレサークル
  </Box>
);

const StyledComponent = styled(Component)`
  ${css({ padding: 4, color: 'muted' })}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  const buildTime = useSiteBuildTime();

  const buildYear = (buildTime === undefined
    ? new Date()
    : new Date(buildTime)
  ).getFullYear();

  return <StyledComponent buildYear={buildYear} className={className} />;
};

export default Footer;
