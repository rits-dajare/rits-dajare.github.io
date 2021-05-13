import { VFC } from 'react';

import { Heading } from '../components/Heading';
import { Layout } from '../components/Layout';

const NotFoundPage: VFC = () => (
  <Layout>
    <Heading>404</Heading>
    <p>ページが見つかりません。</p>
  </Layout>
);

export default NotFoundPage;
