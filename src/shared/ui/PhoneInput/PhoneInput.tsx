import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import ReactInputMask from 'react-input-mask';
import { cn } from 'shared/lib/classNames/cn';

interface PhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const defaultStyle =
  'border-primary-200 bg-input h-16 rounded border px-5 outline-none font-medium w-full';

export const PhoneInput = forwardRef(
  (
    { className, ...props }: PhoneInputProps,
    ref: ForwardedRef<ReactInputMask>
  ) => {
    return (
      <ReactInputMask
        mask="+7 999 999 99-99"
        maskChar=""
        ref={ref}
        {...props}
        className={cn(defaultStyle, className)}
      />
    );
  }
);
