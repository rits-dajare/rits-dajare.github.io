import Img from 'gatsby-image';
import React from 'react';
import { useAnyImage } from 'src/hooks';

const AnyImage: React.FC<{ filename: string }> = ({ filename }) => {
  const fluid = useAnyImage(filename);

  return <Img fluid={fluid} />;
};

export default AnyImage;
