import { HTMLAttributes } from 'react';
import { cn } from 'shared/lib/classNames/cn';

interface FormErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  errorMessage: string | undefined;
}

const defaultStyle = 'text-regular text-error mt-1';

export const FormErrorMessage = ({
  className,
  errorMessage,
  ...otherProps
}: FormErrorMessageProps) => {
  return (
    <p className={cn(defaultStyle, className)} {...otherProps}>
      {errorMessage}
    </p>
  );
};
