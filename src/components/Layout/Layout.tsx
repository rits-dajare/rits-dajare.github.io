import { FC } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { Navigation } from './Navigation';

export const Layout: FC<{
  headerChild?: JSX.Element;
}> = ({ children, headerChild = <Navigation /> }) => (
  <div className="max-w-2xl mx-auto flex flex-col min-h-screen">
    <Header>{headerChild}</Header>
    <main className="flex-grow px-3">{children}</main>
    <Footer />
  </div>
);
