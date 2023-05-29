import { memo } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import QuakeCircle from '@/src/components/leaflet/QuakeCircle';
import UserLocation from '@/src/components/leaflet/UserLocation';

const LeafletMap = memo(() => {
  return (
    <section className='w-full grow bg-gray-200'>
      <MapContainer
        center={[25.1, 121.5]}
        zoom={6}
        scrollWheelZoom={true}
        className='h-full'
        worldCopyJump={true}
        placeholder={<p className='w-full'>載入中</p>}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <QuakeCircle />
        <UserLocation />
      </MapContainer>
    </section>
  );
});
export default LeafletMap;
