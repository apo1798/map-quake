'use client';

import { darkModeAtom } from '@/src/atom';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleDarkModeButton = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  useEffect(() => {
    const html = document.querySelector('html');
    if (!html) return;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <div className='group flex items-center'>
      <button
        type='button'
        onClick={() => {
          setDarkMode((state) => !state);
        }}
        className='inline-flex'
        title='Toggle Color Scheme'
      >
        {darkMode ? (
          <FaMoon className='fill-amber-400 group-hover:animate-bounce' />
        ) : (
          <FaSun className='fill-amber-500 group-hover:animate-bounce' />
        )}
      </button>
    </div>
  );
};
export default ToggleDarkModeButton;
