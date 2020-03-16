import React from 'react';
import { Container } from 'theme-ui';
import styled from '@emotion/styled';

const Component: React.FC<{ className?: string }> = ({
  children,
  className
}) => <Container className={className}>{children}</Container>;

const Layout = styled(Component)``;

export default Layout;
