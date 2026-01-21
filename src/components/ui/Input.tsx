import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';
import './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  inputSize?: 'small' | 'default' | 'large';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  error = false,
  inputSize = 'default',
  className = '',
  ...props
}, ref) => {
  const sizeClass = inputSize !== 'default' ? `fn-input--${inputSize}` : '';
  const errorClass = error ? 'fn-input--error' : '';

  return (
    <input
      ref={ref}
      className={`fn-input ${sizeClass} ${errorClass} ${className}`.trim()}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  resize?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  error = false,
  resize = true,
  className = '',
  ...props
}, ref) => {
  const errorClass = error ? 'fn-textarea--error' : '';
  const resizeClass = !resize ? 'fn-textarea--no-resize' : '';

  return (
    <textarea
      ref={ref}
      className={`fn-textarea ${errorClass} ${resizeClass} ${className}`.trim()}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

// Input with icon wrapper
export interface InputWithIconProps extends InputProps {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export const InputWithIcon = forwardRef<HTMLInputElement, InputWithIconProps>(({
  iconLeft,
  iconRight,
  className = '',
  ...props
}, ref) => {
  const wrapperClass = [
    'fn-input-wrapper',
    iconLeft ? 'fn-input-wrapper--icon-left' : '',
    iconRight ? 'fn-input-wrapper--icon-right' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClass}>
      {iconLeft && <span className="fn-input-icon fn-input-icon--left">{iconLeft}</span>}
      <Input ref={ref} className={className} {...props} />
      {iconRight && <span className="fn-input-icon fn-input-icon--right">{iconRight}</span>}
    </div>
  );
});

InputWithIcon.displayName = 'InputWithIcon';

// Form field wrapper with label and error
export interface FormFieldProps {
  label?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

export const FormField = ({
  label,
  required = false,
  hint,
  error,
  children,
  className = '',
}: FormFieldProps) => {
  return (
    <div className={`fn-form-field ${className}`.trim()}>
      {label && (
        <label className={`fn-form-label ${required ? 'fn-form-label--required' : ''}`}>
          {label}
        </label>
      )}
      {children}
      {hint && !error && <span className="fn-form-hint">{hint}</span>}
      {error && <span className="fn-form-error">{error}</span>}
    </div>
  );
};

FormField.displayName = 'FormField';
