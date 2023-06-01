import { getEarthquakeById } from '@/src/api/earthquake';
import Link from 'next/link';

type Props = {
  params: { id: string };
};
const QuakePage = async ({ params }: Props) => {
  const data = await getEarthquakeById({ eventid: params.id });

  if (!data) return <div>?????</div>;

  return (
    <div className='space-y-4'>
      <h1 className='text-3xl text-amber-400'>地震資料</h1>
      <ul className='text-lg'>
        <li>地震ID: {data.id}</li>
        <li>地點：{data.properties.place}</li>
        <li>時間：{new Date(data.properties.time).toLocaleString()}</li>
        <li>警戒：{data.properties.alert || '無'}</li>
        <li>海嘯：{data.properties.tsunami}</li>
      </ul>
      <table className='w-full max-w-[10rem]'>
        <tbody>
          <tr>
            <th className='border border-solid border-gray-400 px-2 py-1 text-center'>
              緯度
            </th>
            <td className='border border-solid border-gray-400 px-2 py-1 text-center'>
              {data.geometry.coordinates[0]}
            </td>
          </tr>
          <tr>
            <th className='border border-solid border-gray-400 px-2 py-1 text-center'>
              經度
            </th>
            <td className='border border-solid border-gray-400 px-2 py-1 text-center'>
              {data.geometry.coordinates[1]}
            </td>
          </tr>
          <tr>
            <th className='border border-solid border-gray-400 px-2 py-1 text-center'>
              深度
            </th>
            <td className='border border-solid border-gray-400 px-2 py-1 text-center'>
              {data.geometry.coordinates[2]}
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <Link
          href={data.properties.url}
          target='_blank'
          rel='noopner noreferrer'
          className='text-blue-400 hover:text-blue-600 dark:hover:text-blue-300'
        >
          USGS 資料連結
        </Link>
      </p>
    </div>
  );
};
export default QuakePage;

export const revalidate = false;
