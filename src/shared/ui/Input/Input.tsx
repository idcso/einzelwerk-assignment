import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { cn } from 'shared/lib/classNames/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const defaultStyle =
  'border-primary-200 bg-input h-16 rounded  border px-5 outline-none font-medium w-full';

export const Input = forwardRef(
  (
    { className, ...otherProps }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        ref={ref}
        {...otherProps}
        className={cn(defaultStyle, className)}
      />
    );
  }
);
