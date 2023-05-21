'use client';
import NoSsr from '@/src/helper/NoSsr';
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('@/src/components/LeafletMap'), {
  ssr: false,
});

const page = () => {
  return (
    <main className='flex w-full grow items-center px-4'>
      <section className='grow overflow-hidden rounded-s-md shadow-lg'>
        <LeafletMap />
      </section>
    </main>
  );
};
export default page;
