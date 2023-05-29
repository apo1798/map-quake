'use client';

import MapSettingForm from '@/app/components/MapSettingForm';
import { settingAtom } from '@/src/atom';
import Button from '@/src/components/ui/Button';
import useResize from '@/src/hooks/useResize';
import { Dialog, Transition } from '@headlessui/react';
import { useAtomValue } from 'jotai';
import { Fragment, useState } from 'react';

const MapSettingModal = () => {
  const { startAt, endAt, magnitude, minDepth, maxDepth, userLocation } =
    useAtomValue(settingAtom);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  useResize(closeModal, isOpen);

  return (
    <>
      <h3 className='text-lg'>目前設定</h3>
      <div className='flex flex-wrap items-center gap-x-3 gap-y-1'>
        <div>
          <span className='text-amber-400'>起訖日期</span>：{startAt} - {endAt}
        </div>
        <div>
          <span className='text-amber-400'> 深度區間</span>：{minDepth} -{' '}
          {maxDepth} (km)
        </div>
        <div>
          <span className='text-amber-400'>最小震度</span>：{magnitude}
        </div>
        <div>
          <span className='text-amber-400'>現在位置</span>：
          {userLocation.every((location) => location != null)
            ? `${userLocation[0]?.toFixed(2)} ${userLocation[1]?.toFixed(2)}`
            : '目前尚未定位'}
        </div>
        <div className='ml-auto shrink-0'>
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            開啟設定
          </Button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
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
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-600 px-6 py-4 text-left align-middle text-white shadow-md shadow-gray-700  transition-all'>
                  <MapSettingForm />

                  <div className='text-end'>
                    <Button onClick={closeModal}>完成</Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default MapSettingModal;
