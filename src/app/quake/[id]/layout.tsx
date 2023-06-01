import { ReactNode } from 'react';

type Props = { children: ReactNode };
const layout = ({ children }: Props) => {
  return (
    <main className='container flex min-h-[calc(100svh-40px)]  min-h-[calc(100vh-40px)] flex-col justify-center pl-8 dark:text-white'>
      {children}
    </main>
  );
};
export default layout;
