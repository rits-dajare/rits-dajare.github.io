import React from 'react';
import { SEO } from 'src/components';
import { Header, Main } from 'src/components/index/index';

const IndexPage: React.FC = () => (
  <>
    <SEO />
    <Header />
    <Main />
  </>
);

export default IndexPage;
