import { forwardRef, HTMLProps } from 'react';

type Props = Pick<HTMLProps<HTMLAnchorElement>, 'children' | 'href'>;

export const Anchor = forwardRef<HTMLAnchorElement, Props>(
  ({ children, href }, ref) => (
    <a
      className="text-ritsumei hover:underline focus:underline cursor-pointer"
      href={href}
      ref={ref}
    >
      {children}
    </a>
  )
);

Anchor.displayName = 'Anchor';
