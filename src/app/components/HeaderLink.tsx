'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

type Props = {
  href: string;
  text: string;
  display?: 'block' | 'inline-block' | 'inline';
  underline?: boolean;
} & ComponentProps<typeof Link>;

const HeaderLink = ({
  href,
  text,
  display = 'inline',
  underline = true,
  ...rest
}: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        'relative transition-all hover:text-amber-500',
        display,
        {
          'after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-px after:origin-left after:scale-0 after:bg-amber-500 after:duration-300 hover:after:scale-100 ':
            underline,
        },
        { 'text-orange-500': pathname === href }
      )}
      {...rest}
    >
      {text}
    </Link>
  );
};
export default HeaderLink;
