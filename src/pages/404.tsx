import { FC } from 'react';

import { Heading, Layout } from '../components';

const NotFoundPage: FC = () => (
  <Layout>
    <Heading>404</Heading>
    <p>ページが見つかりません。</p>
  </Layout>
);

export default NotFoundPage;
