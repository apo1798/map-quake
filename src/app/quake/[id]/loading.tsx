import LoadingSpinner from '@/src/components/ui/LoadingSpinner';

const Loading = () => {
  return (
    <div className='flex items-center gap-2 text-2xl'>
      <p>載入中</p>
      <LoadingSpinner width='w-6' />
    </div>
  );
};
export default Loading;
