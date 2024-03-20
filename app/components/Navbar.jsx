'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import { useOutsideClick } from '../hooks/useOutsideClick';
const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contacts',
    path: '#contacts',
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const mobileNavSectionRef = useRef(null);
  useOutsideClick(mobileNavSectionRef, () => setNavbarOpen(false));

  return (
    <nav className="fixed mx-auto border-0 md:border border-[#39434b] top-0 left-0 right-0 z-10 bg-slate-950 bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={'/'}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          Portfolio
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 "
            >
              <Bars3Icon className="h-5 w-5 fill-white" />
            </button>
          ) : (
            <button
              className="flex items-center px-3 py-2 border rounded border-slate-200 "
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5 fill-white" />
            </button>
          )}
        </div>
        <div
          className="menu hidden md:block md:w-auto"
          id="navbar"
          ref={mobileNavSectionRef}
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
