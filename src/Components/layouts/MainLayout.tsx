
import React from 'react';
import SideNavbar from '../SideNavBar';
import Navbar from '../NavBar';


interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <SideNavbar />
      <div className="flex-1 w-full sm:ml-50 md:ml-64 transition-all duration-300">
        <Navbar />
        <main className="p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;