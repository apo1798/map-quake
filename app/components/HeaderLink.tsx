import clsx from 'clsx';
import Link from 'next/link';

type Props = {
  href: string;
  text: string;
  display?: 'block' | 'inline-block' | 'inline';
  underline?: boolean;
};

const HeaderLink = ({
  href,
  text,
  display = 'inline',
  underline = true,
}: Props) => {
  return (
    <Link
      href={href}
      className={clsx('relative transition-all hover:text-amber-500', display, {
        'after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-px after:origin-left after:scale-0 after:bg-amber-500 after:duration-300 hover:after:scale-100 ':
          underline,
      })}
    >
      {text}
    </Link>
  );
};
export default HeaderLink;
