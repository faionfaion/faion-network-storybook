import { ReactNode, forwardRef, ButtonHTMLAttributes } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'link' | 'destructive';
  size?: 'small' | 'medium' | 'large' | 'icon';
  fullWidth?: boolean;
  children: ReactNode;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children,
  disabled = false,
  className = '',
  type = 'button',
  ...props
}, ref) => {
  const sizeClass = size !== 'medium' ? `fn-button--${size}` : '';
  const fullWidthClass = fullWidth ? 'fn-button--full' : '';

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={`fn-button fn-button--${variant} ${sizeClass} ${fullWidthClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
