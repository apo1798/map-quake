import { settingAtom } from '@/src/atom';
import Button from '@/src/components/ui/Button';
import LoadingSpinner from '@/src/components/ui/LoadingSpinner';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';

const GetLocationButton = () => {
  const [settings, setSettings] = useAtom(settingAtom);
  const [isLoading, setIsLoading] = useState(false);
  const { userLocation } = settings;

  const hasLocation = userLocation.some((location) => location != null);

  const locateUser = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        setSettings((state) => ({
          ...state,
          userLocation: [latitude, longitude],
        }));
        setIsLoading(false);
      },
      (err) => {
        console.log(err);
        setSettings((state) => ({
          ...state,
          userLocation: [25.04, 121.511944],
        }));
        setIsLoading(false);
      }
    );
  };

  if (!hasLocation)
    return (
      <>
        <p>現在還沒有你的座標，按下按鈕定位吧！</p>
        <Button onClick={locateUser} disabled={isLoading}>
          <FaLocationArrow />
          定位
          {isLoading && <LoadingSpinner width='w-4' fillColor='fill-black' />}
        </Button>
      </>
    );

  return (
    <div className='space-y-2'>
      <table className='w-full max-w-xs'>
        <thead>
          <tr>
            <th className='border border-solid border-gray-100 bg-gray-700 px-2 py-1 text-center text-gray-200'>
              緯度
            </th>
            <th className='border border-solid border-gray-100 bg-gray-700 px-2 py-1 text-center text-gray-200'>
              經度
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-solid border-gray-400 px-2 py-1 text-center'>
              {userLocation[0]?.toFixed(2)}
            </td>
            <td className='border border-solid border-gray-400 px-2 py-1 text-center'>
              {userLocation[1]?.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default GetLocationButton;
