'use client';

import AsidePanel from '@/app/components/AsidePanel';
import LoadingSpinner from '@/src/components/ui/LoadingSpinner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(
  () => import('@/src/components/leaflet/LeafletMap'),
  {
    ssr: false,
    loading: () => (
      <div className='grid h-full w-full place-content-center place-items-center text-2xl dark:text-white'>
        <div className='flex items-center gap-x-2'>
          載入地圖中
          <LoadingSpinner width='w-6' />
        </div>
      </div>
    ),
  }
);

const queryClient = new QueryClient();

const IndexPage = () => {
  return (
    <main className='h-[calc(100svh-40px)] w-full grow flex-col overflow-hidden rounded-md px-1.5 py-4 sm:flex-row sm:px-4'>
      <div className='flex h-full flex-col overflow-hidden rounded-md border border-solid border-gray-300 shadow-2xl dark:shadow-gray-500 md:flex-row'>
        <QueryClientProvider client={queryClient}>
          <LeafletMap />
          <AsidePanel />
        </QueryClientProvider>
      </div>
    </main>
  );
};
export default IndexPage;
