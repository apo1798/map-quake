import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';

type Props = {} & ComponentProps<'input'>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ type = 'input', className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={clsx(
          'rounded border border-solid border-gray-600 px-2 py-0.5 text-black',
          className
        )}
        {...props}
      />
    );
  }
);
export default Input;
