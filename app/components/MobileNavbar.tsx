'use client';

import { navItems } from '@/app/components/Header';
import HeaderLink from '@/app/components/HeaderLink';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const MobileNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const closeNav = () => {
      if (window.innerWidth < 640 || navOpen === false) return;
      setNavOpen(false);
    };

    window.addEventListener('resize', closeNav);
    return () => {
      window.removeEventListener('resize', closeNav);
    };
  }, [navOpen]);

  const baseHamburgerLineStyle =
    'absolute inset-x-1 h-0.5 rounded bg-gray-800 origin-left transition-all';

  return (
    <>
      <button
        onClick={() => {
          setNavOpen((state) => !state);
        }}
        className='relative h-7 w-8 self-center sm:hidden'
      >
        <span
          className={clsx(baseHamburgerLineStyle, 'top-1/4 duration-700', {
            'inset-x-1.5 -translate-y-px translate-x-1/4 rotate-45': navOpen,
          })}
        ></span>
        <span
          className={clsx(baseHamburgerLineStyle, 'top-2/4 duration-500', {
            'opacity-0': navOpen,
            'opacity-100': !navOpen,
          })}
        ></span>
        <span
          className={clsx(baseHamburgerLineStyle, 'top-3/4 duration-700', {
            'inset-x-1.5 -translate-y-px translate-x-1/4 -rotate-45': navOpen,
          })}
        ></span>
      </button>

      <nav
        className={`absolute left-0 right-0 top-full z-[1001] grid origin-top bg-gray-300 shadow transition-all duration-500 ${
          navOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <ul className='space-y-3 overflow-hidden pl-4'>
          {navItems.map((item) => (
            <li
              key={item.href}
              className='w-full text-center first:pt-3 last:pb-3.5'
            >
              <HeaderLink
                href={item.href}
                text={item.text}
                display='block'
                underline={false}
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default MobileNavbar;
