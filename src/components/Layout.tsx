import { FC } from 'react';

import Footer from './Footer';
import Header from './Header';

const Layout: FC<{
  hasHeader?: boolean;
  hasFooter?: boolean;
  fullHeight?: boolean;
}> = ({ children, hasHeader = true, hasFooter = true, fullHeight = true }) => (
  <div
    className={`max-w-2xl mx-auto flex flex-col px-3 ${
      fullHeight ? 'min-h-screen' : ''
    }`}
  >
    {hasHeader && <Header />}
    <main className="flex-grow">{children}</main>
    {hasFooter && <Footer />}
  </div>
);

export default Layout;
