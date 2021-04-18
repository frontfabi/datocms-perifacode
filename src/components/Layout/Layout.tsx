import React, { ReactNode } from 'react';
import { Header, NavProps } from '../.'

interface LayoutProps extends NavProps{
  children: ReactNode
}
const Layout: React.FC<LayoutProps> = ({ navList, siteTitle, children }) => (
  <div className="Layout">
    <Header navList={navList} siteTitle={siteTitle || `Title`} />
    {children}
  </div>
);

export default Layout;
