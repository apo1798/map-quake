import { settingAtom } from '@/src/atom';
import { useAtomValue } from 'jotai';
import L from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { FaWalking } from 'react-icons/fa';
import { Popup, Marker } from 'react-leaflet';

const UserDivIcon = L.divIcon({
  html: renderToStaticMarkup(
    <FaWalking className='rounded-full border border-solid border-orange-400 bg-white fill-gray-500 p-1 text-3xl text-orange-400 opacity-100 dark:bg-neutral-700 dark:fill-white' />
  ),
  iconSize: [30, 30],
  className: '',
});

const UserLocation = () => {
  const { userLocation } = useAtomValue(settingAtom);

  const userHasLocation = userLocation.every(
    (location) => location !== undefined
  );

  if (!userHasLocation) return null;

  return (
    <Marker
      position={{ lat: userLocation[0]!, lng: userLocation[1]! }}
      icon={UserDivIcon}
    >
      <Popup className='mb-7'>
        現在的定位座標
        <br />
        {`${userLocation[0]?.toFixed(2)}, ${userLocation[1]?.toFixed(2)}`}
      </Popup>
    </Marker>
  );
};
export default UserLocation;
