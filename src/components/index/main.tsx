import React from 'react';
import styled from '@emotion/styled';
import { Box, Heading, css } from 'theme-ui';
import { Timeline } from 'react-twitter-widgets';
import Link from '../link';
import Paragraph from '../paragraph';

type Props = { className?: string };

const Component: React.FC<Props> = ({ className }) => (
  <Box as="main" id="main" className={className}>
    <Link to="/judge" className="go-to-judge">
      ダジャレを判定する！
    </Link>

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
      <Link to="https://twitter.com/rits_dajare">公式 Twitter アカウント</Link>
      にて発信をしています。
    </Paragraph>
    <Heading>入部したい！</Heading>
    <Paragraph>
      歓迎します！
      <Link to="https://twitter.com/rits_dajare">公式 Twitter アカウント</Link>
      のDMへどうぞ！
    </Paragraph>

    <Heading>部員のダジャレが見たい</Heading>
    <div className="tweets">
      <Timeline
        dataSource={{ sourceType: 'profile', screenName: 'rits_dajare' }}
        options={{ height: 600 }}
      />
    </div>
  </Box>
);

const Main = styled(Component)`
  ${css({ marginY: 4 })};
  display: flex;
  flex-direction: column;

  .go-to-judge {
    margin: auto;
    text-decoration: none;
    ${css({ variant: 'buttons.hero', backgroundColor: 'primary', marginY: 3 })}

    &:hover {
      opacity: 1;
    }
  }

  .tweets {
    max-width: 600px;
    margin: 0 auto;
  }
`;

export default Main;
