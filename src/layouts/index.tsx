import React from 'react';
import { Box } from 'theme-ui';
import styled from '@emotion/styled';

const Component: React.FC<{ className?: string }> = ({
  children,
  className
}) => <Box className={className}>{children}</Box>;

const Layout = styled(Component)`
  width: 100vh;
  max-width: 100%;
  margin: 0 auto;
`;

export default Layout;
