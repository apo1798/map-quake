'use client';

import { settingAtom } from '@/src/atom';
import Input from '@/src/components/ui/Input';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { IconType } from 'react-icons';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRulerVertical,
  FaWaveSquare,
} from 'react-icons/fa';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo, useRef, useState } from 'react';
import LoadingSpinner from '@/src/components/ui/LoadingSpinner';
import IconTooltip from '@/src/components/ui/IconTooltip';
import GetLocationButton from '@/src/app/components/GetLocationButton';
import useEarthquakeQuery from '@/src/hooks/useEarthquakeQuery';

const now = new Date();

const settingValidationSchema = z
  .object({
    startAt: z.coerce.date(),
    endAt: z.coerce.date().max(now, '請選擇過去日期'),
    magnitude: z.string(),
    minDepth: z.coerce
      .number({ invalid_type_error: '請輸入數字' })
      .min(-100, '請輸入大於-100的數')
      .max(1000, '請輸入小於1000的數'),
    maxDepth: z.coerce
      .number({ invalid_type_error: '請輸入數字' })
      .min(-100, '請輸入大於-100的數')
      .max(1000, '請輸入小於1000的數'),
  })
  .refine(
    (obj) => new Date(obj.endAt).getTime() >= new Date(obj.startAt).getTime(),
    {
      message: '開始日期不得晚於結束日期',
      path: ['endAt'],
    }
  )
  .refine(
    (obj) =>
      new Date(obj.endAt).getTime() - new Date(obj.startAt).getTime() <=
      366 * 24 * 60 * 60 * 1000,
    {
      message: '起訖範圍須在365天內',
      path: ['endAt'],
    }
  );

const MapSettingForm = () => {
  const debouneRef = useRef<number | null>(null);
  const [form, setForm] = useAtom(settingAtom);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isValidating },
    getValues,
    trigger,
  } = useForm({
    values: form,
    resolver: zodResolver(settingValidationSchema),
    mode: 'onChange',
  });

  const formData = useMemo(() => getValues(), [JSON.stringify(getValues())]);

  const { isLoading, isError } = useEarthquakeQuery();

  const handleFormSubmit = (data: typeof form) => {
    setForm((state) => ({
      ...state,
      ...data,
    }));
  };

  useEffect(() => {
    trigger();
    if (!isValid || isValidating) return;

    if (debouneRef.current != null) {
      clearTimeout(debouneRef.current);
    }

    debouneRef.current = window.setTimeout(() => {
      if (Object.keys(form).some((key) => !(key in formData))) return;
      handleFormSubmit(formData as Required<typeof formData>);
    }, 1000);

    return () => {
      if (debouneRef.current != null) {
        clearTimeout(debouneRef.current);
      }
    };
  }, [isValid, isValidating, formData]);

  return (
    <form
      className='flex flex-col flex-wrap justify-start gap-x-4 gap-y-6 overflow-auto pb-3 md:flex-nowrap md:justify-center md:gap-5 md:gap-y-2'
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className='flex w-full items-center gap-1'>
        <h2 className='text-2xl'>地震設定</h2>
        {isLoading && <LoadingSpinner textColor='text-gray-200' width='w-6' />}
        {isError && (
          <p className='self-end text-sm font-semibold text-red-400'>
            API目前無回應。請縮小時間範圍、或稍後再試
          </p>
        )}
      </div>

      <div className='flex flex-col gap-1'>
        <SettingHeading Icon={FaCalendarAlt} text='UTC 時間' />
        <div className='flex flex-wrap gap-2 md:flex-col'>
          <div className='flex items-center gap-2'>
            <div>從</div>
            <Input
              type='date'
              id='startAt'
              max={now.toISOString().split('T')[0]}
              {...register('startAt')}
            />
          </div>
          <div className='flex items-center gap-2'>
            <div>至</div>
            <Input
              type='date'
              id='endAt'
              max={now.toISOString().split('T')[0]}
              {...register('endAt')}
            />
          </div>
          {errors.endAt && (
            <p className='text-red-400'>{errors.endAt.message}</p>
          )}
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <SettingHeading Icon={FaWaveSquare} text='最小震度' />
        <div className='grow'>
          <select
            className='h-full rounded px-2 py-1 text-black'
            {...register('magnitude')}
          >
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
          </select>
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <SettingHeading
          Icon={FaRulerVertical}
          text='地震深度(km)'
          Tooltip={<IconTooltip text='請輸入介於 -100 至 1000 的整數' />}
        />
        <div className='flex gap-2 md:flex-col'>
          <div className='flex items-center gap-2'>
            <div>從</div>
            <Input
              type='text'
              id='min-depth'
              className='w-20'
              {...register('minDepth')}
            />
          </div>
          {errors.minDepth && (
            <p className='text-red-400'>{errors.minDepth.message}</p>
          )}
          <div className='flex items-center gap-2'>
            <div>至</div>
            <Input
              type='text'
              id='max-depth'
              className='w-20'
              {...register('maxDepth')}
            />
          </div>
          {errors.maxDepth && (
            <p className='text-red-400'>{errors.maxDepth.message}</p>
          )}
        </div>
      </div>

      <div className='flex flex-col gap-1 md:flex'>
        <SettingHeading Icon={FaMapMarkerAlt} text='現在位置' />
        <GetLocationButton />
      </div>
    </form>
  );
};
export default MapSettingForm;

const SettingHeading = ({
  Icon,
  text,
  Tooltip,
}: {
  Icon: IconType;
  text: string;
  Tooltip?: JSX.Element;
}) => {
  return (
    <div className='flex items-center gap-2'>
      <Icon className='text-xl' />
      <div className='text-xl text-amber-400'>{text}</div>
      {Tooltip && Tooltip}
    </div>
  );
};
