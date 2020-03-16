import React from 'react';
import { Container } from 'theme-ui';
import Footer from './footer';

const Layout: React.FC = ({ children }) => (
  <Container>
    {children}
    <Footer />
  </Container>
);

export default Layout;
