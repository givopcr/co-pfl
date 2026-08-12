import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <NavbarComponent />

      <main className="flex-1">
        <Outlet />
      </main>

      <FooterComponent />
    </div>
  );
};

export default MainLayout;
