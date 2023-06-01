import MapSettingForm from '@/src/app/components/MapSettingForm';
import MapSettingModal from '@/src/app/components/MapSettingModal';
import QuakeData from '@/src/app/components/QuakeData';

const AsidePanel = () => {
  return (
    <div className='ml-auto mt-auto flex items-center overflow-auto bg-gray-600 px-3 py-4 text-white md:mt-0 md:basis-72'>
      {/* mobile version */}
      <div className='block md:hidden'>
        <MapSettingModal />
      </div>

      {/* desktop version */}
      <div className='hidden w-full md:block'>
        <MapSettingForm />
        <QuakeData />
      </div>
    </div>
  );
};
export default AsidePanel;
