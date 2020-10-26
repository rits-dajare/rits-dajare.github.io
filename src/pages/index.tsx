import { NextPage } from 'next';
import Link from 'next/link';

import {
  Anchor,
  Footer,
  Heading,
  Hero,
  Layout,
  Paragraph,
  SEO,
} from '../components';

const IndexPage: NextPage = () => (
  <>
    <SEO
      title=""
      description="立命館ダジャレサークル公式 Web サイト"
      path="/"
    />
    <header className="max-w-2xl mx-auto">
      <Hero />
    </header>
    <Layout hasHeader={false} fullHeight={false}>
      <section>
        <p className="text-center my-10">
          <a
            className="inline-block bg-ritsumei text-white py-3 px-8 rounded-sm hover:shadow-lg duration-200 transition-shadow"
            href="/judge"
          >
            ダジャレを判定する！
          </a>
        </p>
      </section>
      <Heading>立命館ダジャレサークルって何？</Heading>
      <Paragraph>
        立命館ダジャレサークルは、「面白いダジャレ」とはなにかを研究し、ダジャレを創作する団体です。
      </Paragraph>
      <Heading>どんな人が在籍しているの？</Heading>
      <Paragraph>
        立命館ダジャレサークルは他大学生も所属するインカレサークルで、主に立命館大学生が在籍しています。
      </Paragraph>
      <Heading>どんな活動をしているの？</Heading>
      <Paragraph>
        チャットサービス「Slack」の会内ワークスペース（グループ）にて、各自が創作したダジャレを発表しています。
      </Paragraph>
      <Paragraph>
        また、ダジャレを
        <Link href="https://twitter.com/rits_dajare" passHref>
          <Anchor>公式 Twitter アカウント</Anchor>
        </Link>
        にて発信をしています。
      </Paragraph>
      <Heading>入部したい！</Heading>
      <Paragraph>
        歓迎します！
        <Link href="https://twitter.com/rits_dajare" passHref>
          <Anchor>公式 Twitter アカウント</Anchor>
        </Link>
        のDMへどうぞ！
      </Paragraph>
    </Layout>
  </>
);

export default IndexPage;
