import { FC } from 'react';

export const Heading: FC<{ headingLevel?: 1 | 2 | 3 | 4 | 5 }> = ({
  children,
  headingLevel = 2,
}) => {
  const TagName = `h${headingLevel}` as const;

  return (
    <TagName className="border-b-2 border-ritsumei dark:border-current text-2xl font-bold mt-4 mb-2">
      {children}
    </TagName>
  );
};
