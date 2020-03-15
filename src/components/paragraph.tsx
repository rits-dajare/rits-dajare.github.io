import React from 'react';
import { Text } from 'theme-ui';

type Props = { className?: string };

const Paragraph: React.FC<Props> = ({ children, className }) => (
  <Text as="p" variant="paragraph" className={className}>
    {children}
  </Text>
);

export default Paragraph;
