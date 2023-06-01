'use client';

import useEarthquakeQuery from '@/src/hooks/useEarthquakeQuery';
import { useMemo } from 'react';

const QuakeData = () => {
  const { data, isLoading, isError } = useEarthquakeQuery();

  const sortedData = useMemo(() => {
    const initialValue = {
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      total: data?.features.length ?? 0,
    };

    if (!data) return initialValue;

    const keys = Object.keys(initialValue).sort((a, b) => +a - +b) as [
      keyof typeof initialValue
    ];

    return data.features.reduce((acc, cur) => {
      const magRange = keys.find((item) => +item > cur.properties.mag);
      if (!magRange) return { ...acc };
      return { ...acc, [magRange]: acc[magRange] + 1 };
    }, initialValue);
  }, [data]);

  if (isLoading)
    return (
      <div
        role='status'
        className='mb-2 animate-pulse space-y-4 border-t border-solid border-amber-400 pt-3'
      >
        <div className='flex items-center gap-2'>
          <div className='h-5 w-5 rounded-full bg-gray-200'></div>
          <div className='h-4 w-2/5 rounded-full bg-gray-200'></div>
        </div>
        <div className='h-4 w-3/5 rounded-full bg-gray-200'></div>
        <div className='h-4 w-3/5 rounded-full bg-gray-200'></div>
        <div className='h-4 w-4/5 rounded-full bg-gray-200'></div>
        <div className='h-4 w-4/5 rounded-full bg-gray-200'></div>
        <div className='h-4 w-2/5 rounded-full bg-gray-200'></div>
        <div className='h-4 w-2/5 rounded-full bg-gray-200'></div>
      </div>
    );
  if (isError) return null;

  const {
    '4': qtyLessThan4,
    '5': qtyLessThan5,
    '6': qtyLessThan6,
    '7': qtyLessThan7,
    total,
  } = sortedData;

  const qtyMoreThan7 =
    total - qtyLessThan4 - qtyLessThan5 - qtyLessThan6 - qtyLessThan7;

  return (
    <section className='border-t border-solid border-amber-400 pt-3'>
      <h3 className='text-lg text-amber-400'>資料統計</h3>
      <table className='w-full max-w-xs'>
        <tbody>
          <tr>
            <td className='border border-solid border-gray-400 px-2 py-1 text-center'>
              震度&lt;4
            </td>
            <td className='border border-solid border-gray-400 px-2 py-1 text-center'>
              {qtyLessThan4}
            </td>
          </tr>
          <tr>
            <td className='border border-solid border-gray-400 px-2 py-1 text-center'>
              震度&lt;5
            </td>
            <td className='border border-solid border-gray-400 px-2 py-1 text-center'>
              {qtyLessThan5}
            </td>
          </tr>
          <tr>
            <td className='border border-solid border-gray-400 px-2 py-1 text-center'>
              震度&lt;6
            </td>
            <td className='border border-solid border-gray-400 px-2 py-1 text-center'>
              {qtyLessThan6}
            </td>
          </tr>
          <tr>
            <td className='border border-solid border-gray-400 px-2 py-1 text-center'>
              震度&lt;7
            </td>
            <td className='border border-solid border-gray-400 px-2 py-1 text-center'>
              {qtyLessThan7}
            </td>
          </tr>
          <tr>
            <td className='border border-solid border-gray-400 px-2 py-1 text-center'>
              震度&gt;7
            </td>
            <td className='border border-solid border-gray-400 px-2 py-1 text-center'>
              {qtyMoreThan7}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th className='border border-solid border-gray-400 px-2 py-1 text-center'>
              總計
            </th>
            <th className='border border-solid border-gray-400 px-2 py-1 text-center'>
              {sortedData.total}筆
            </th>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};
export default QuakeData;
