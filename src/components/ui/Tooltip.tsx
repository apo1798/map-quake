import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = { target: HTMLElement; children: ReactNode };

const Tooltip = ({ target, children }: Props) => {
  const targetRect = target.getBoundingClientRect();

  const childrenRef = useRef<HTMLDivElement | null>(null);
  const [tooltipRect, setTooltipRect] = useState<DOMRect | null>(null);

  useLayoutEffect(() => {
    if (!childrenRef.current) return;
    setTooltipRect(childrenRef.current.getBoundingClientRect());
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;
  if (target != null && tooltipRect != null) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipRect.height;
    if (tooltipY < 0) {
      tooltipY = targetRect.bottom;
    }
    if (targetRect.left + tooltipRect.width > window.innerWidth) {
      tooltipX = tooltipX - (tooltipRect.width - targetRect.width);
    }
  }

  return (
    <>
      {createPortal(
        <div
          style={{
            pointerEvents: 'none',
            transform: `translate3d(${tooltipX}px, ${tooltipY}px, 0)`,
          }}
          className='pointer-events-none absolute left-0 top-0 z-[2000] shadow-xl'
        >
          <div ref={childrenRef}>{children}</div>
        </div>,
        document.body
      )}
    </>
  );
};
export default Tooltip;
