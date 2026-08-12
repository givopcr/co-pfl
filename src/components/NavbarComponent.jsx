import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  const navLinkClass = ({ isActive }) =>
    `font-semibold transition-colors duration-200 ${
      isActive ? 'text-sky-700' : 'text-slate-700 hover:text-sky-600'
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-sky-500 font-bold text-sky-600">
            PCR
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-extrabold uppercase tracking-tight text-sky-900">
              Politeknik Caltex Riau
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Empowering Creative Minds
            </span>
          </div>
        </NavLink>

        <div className="flex items-center gap-6 md:gap-8">
          <NavLink to="/" end className={navLinkClass}>
            Beranda
          </NavLink>
          <NavLink to="/prodi" className={navLinkClass}>
            Program Studi
          </NavLink>
          <NavLink to="/tentang" className={navLinkClass}>
            Tentang
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
