import React from 'react';
import { css } from 'theme-ui';
import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from './link';

export type SNS = 'twitter';

const SNSName = {
  twitter: 'Twitter'
} as const;

const SNSIcon = {
  twitter: faTwitter
} as const;

const getShareURL = (text: string, sns: SNS): string => {
  const encodedText = encodeURIComponent(text);

  switch (sns) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?text=${encodedText}`;
    default:
      return '';
  }
};

type Props = { text: string; className?: string; sns: SNS };

const Component: React.FC<Props> = ({ text, children, className, sns }) => (
  <Link className={className} to={getShareURL(text, sns)}>
    <FontAwesomeIcon icon={SNSIcon[sns]} />
    &nbsp;
    {children ?? `Share with ${SNSName[sns]}`}
  </Link>
);

const ShareButton = styled(Component)`
  ${(props): SerializedStyles =>
    css({ variant: 'buttons.share', bg: props.sns })(props.theme)}
`;

export default ShareButton;
