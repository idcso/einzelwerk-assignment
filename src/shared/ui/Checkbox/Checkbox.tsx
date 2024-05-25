import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { cn } from 'shared/lib/classNames/cn';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = forwardRef(
  (
    { label, className, ...otherProps }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={cn('relative flex items-center gap-4', className)}>
        <input
          {...otherProps}
          ref={ref}
          type="checkbox"
          id="custom_checkbox"
          className="w-6 checked:border-secondary-600 rounded-lg peer h-6 appearance-none border hover:cursor-pointer focus:outline-none"
        />
        <span className="w-4 pointer-events-none absolute left-1 top-1 hidden h-4 bg-[url('/src/shared/assets/icons/checkbox.png')] peer-checked:block"></span>
        <label htmlFor="custom_checkbox" className="text-primary-500 text-base">
          {label}
        </label>
      </div>
    );
  }
);
