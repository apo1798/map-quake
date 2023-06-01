'use client';

import { navItems } from '@/src/app/components/Header';
import HeaderLink from '@/src/app/components/HeaderLink';
import useResize from '@/src/hooks/useResize';
import clsx from 'clsx';
import { useState } from 'react';

const MobileNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  useResize(() => {
    setNavOpen(false);
  }, navOpen);

  const baseHamburgerLineStyle =
    'absolute inset-x-1 h-0.5 rounded bg-gray-800 origin-left transition-all dark:bg-white';

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
        className={clsx(
          'dark absolute left-0 right-0 top-full z-[1001] grid origin-top bg-gray-300 shadow-xl transition-all duration-500 dark:bg-zinc-600',
          navOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
          navOpen ? 'border-b border-solid border-white' : ''
        )}
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
                onClick={() => {
                  setNavOpen(false);
                }}
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default MobileNavbar;
