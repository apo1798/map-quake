'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import QuakePage from '@/src/app/quake/[id]/page';

type Props = {
  params: { id: string };
};

const page = ({ params }: Props) => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as='div' className='relative z-[1100]' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-800 bg-opacity-30 backdrop-blur-[1px]' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded bg-zinc-600 px-6 py-4 text-left align-middle text-white shadow-md shadow-gray-700  transition-all'>
                <QuakePage params={params} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default page;
