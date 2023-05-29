import Tooltip from '@/src/components/ui/Tooltip';
import clsx from 'clsx';
import { ReactNode, useRef, useState } from 'react';
import { FaInfo } from 'react-icons/fa';

type Props = {
  text?: string;
  icon?: ReactNode;
};

const IconTooltip = ({
  text = 'tooltip',
  icon = <FaInfo className='fill-slate-600 text-xs' />,
}: Props) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [showTooltip, setShowToolTip] = useState(false);

  return (
    <>
      <div className='group relative'>
        <div
          tabIndex={1}
          className='inline-flex items-center justify-center rounded-full bg-orange-300 p-1 outline-none focus:shadow-black'
          ref={targetRef}
          onPointerEnter={() => {
            setShowToolTip(true);
          }}
          onPointerLeave={() => {
            setShowToolTip(false);
          }}
        >
          {icon}
        </div>
        {targetRef.current != null && showTooltip && (
          <Tooltip target={targetRef.current}>
            <div
              className={clsx(
                'bottom-full max-w-[10rem] select-none rounded border border-solid border-gray-300 bg-orange-400 px-3 py-2 text-base leading-none text-white shadow-lg'
              )}
            >
              {text}
            </div>
          </Tooltip>
        )}
      </div>
    </>
  );
};
export default IconTooltip;
