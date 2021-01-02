import { VFC } from 'react';

import { Heading, Layout } from '../components';

const NotFoundPage: VFC = () => (
  <Layout>
    <Heading>404</Heading>
    <p>ページが見つかりません。</p>
  </Layout>
);

export default NotFoundPage;
