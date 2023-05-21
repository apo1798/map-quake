import HeaderLink from '@/app/components/HeaderLink';
import MobileNavbar from '@/app/components/MobileNavbar';
import Link from 'next/link';
import { FaRegMap } from 'react-icons/fa';

export const navItems = [
  { href: '/', text: '地圖首頁' },
  { href: '/1', text: '介紹' },
  { href: '/2', text: '原始碼' },
];

const Header = () => {
  return (
    <div className='relative max-h-11 bg-gray-100 shadow'>
      <header className='flex items-center justify-between px-4 py-1.5 font-medium'>
        <Link href='/' className='flex items-center gap-1 text-xl'>
          <FaRegMap className='h-6 w-6 rotate-180' />
          <h1>MapQuake 地震地圖</h1>
        </Link>

        <nav className='hidden sm:block'>
          <ul className='flex h-full gap-4'>
            {navItems.map((item) => (
              <li key={item.href}>
                <HeaderLink href={item.href} text={item.text} />
              </li>
            ))}
          </ul>
        </nav>
        <MobileNavbar />
      </header>
    </div>
  );
};
export default Header;
