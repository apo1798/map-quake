import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';

type Props = { intent?: 'primary' } & ComponentProps<'button'>;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ intent = 'primary', type = 'button', className, ...props }, ref) => {
    const baseClassName = clsx({
      'inline-flex items-center justify-center gap-2 rounded  bg-orange-300 px-2 py-1 text-black transition-all duration-200 hover:bg-orange-400 hover:text-white disabled:cursor-not-allowed disabled:bg-orange-500':
        intent === 'primary',
    });

    return (
      <button
        ref={ref}
        type={type}
        className={clsx(baseClassName, className)}
        {...props}
      />
    );
  }
);
export default Button;
