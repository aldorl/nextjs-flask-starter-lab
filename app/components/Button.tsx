import React, { forwardRef, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'; // define your variants here
  size?: 'normal' | 'large'; // define your sizes here
  pill?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            type = 'button',
            className,
            variant = 'primary',
            size = 'normal',
            pill,
            disabled = false,
            ...props
        }, ref
    ) => (
        <button
            ref={ref}
            disabled={disabled}
            type={type}
            className={`${className} ${variant} ${size} ${pill ? 'pill' : ''} ${disabled ? 'bg-gray-300 hover:bg-gray-500 cursor-not-allowed' : 'active:bg-button-active'}`}
            {...props}
        >
            {children}
        </button>
    ));

export default Button;
