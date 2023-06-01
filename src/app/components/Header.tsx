import HeaderLink from '@/src/app/components/HeaderLink';
import MobileNavbar from '@/src/app/components/MobileNavbar';
import ToggleDarkModeButton from '@/src/app/components/ToggleDarkModeButton';
import NoSsr from '@/src/helper/NoSsr';
import Link from 'next/link';
import { FaRegMap } from 'react-icons/fa';

export const navItems = [
  { href: '/', text: '地圖首頁' },
  { href: '/about', text: '介紹' },
  { href: 'https://github.com/apo1798/map-quake', text: '原始碼' },
];

const Header = () => {
  return (
    <div className='relative max-h-11 bg-gray-100 shadow dark:bg-neutral-700 dark:text-gray-100'>
      <header className='flex items-center justify-between px-4 py-1.5 font-medium'>
        <Link href='/' className='flex items-center gap-1 text-xl'>
          <FaRegMap className='h-6 w-6 rotate-180' />
          <h2>MapQuake 地震地圖</h2>
        </Link>
        <div className='item-center flex gap-4'>
          <nav className='hidden sm:block'>
            <ul className='flex h-full gap-4'>
              {navItems.map((item) => (
                <li key={item.href}>
                  <HeaderLink href={item.href} text={item.text} />
                </li>
              ))}
            </ul>
          </nav>
          <NoSsr>
            <ToggleDarkModeButton />
          </NoSsr>
          <MobileNavbar />
        </div>
      </header>
    </div>
  );
};
export default Header;
