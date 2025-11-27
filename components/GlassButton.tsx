'use client';

import { ReactNode } from 'react';
import styles from './home/styles/GlassButton.module.css';

interface GlassButtonProps {
  bg?: string;
  title?: string;
  disabled?: boolean;
  size?: 'small' | 'normal' | 'large';
  padding?: string;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const buttonSizes: Record<string, string> = {
  small: ' h-[42px] min-w-[35px] text-sm',
  normal: ' h-[50px] min-w-[35px] text-lg',
  large: ' h-[65px] min-w-[35px] text-2xl font-semibold'
};

const buttonSpacing: Record<string, string> = {
  small: ' px-1 gap-x-1',
  normal: ' px-2 gap-x-2',
  large: ' px-5 gap-x-3'
};

export default function GlassButton({ 
  bg = 'bg-primary-600',
  title = '',
  disabled = false,
  size = 'normal',
  padding = '8',
  children,
  icon,
  className = '',
  type = 'button'
}: GlassButtonProps) {
  const buttonSizeClass = buttonSizes[size] || buttonSizes['normal'];
  const buttonSpacingClass = buttonSpacing[size] || buttonSpacing['normal'];
  const bgClass = bg.includes('bg-') ? bg : 'bg-' + bg;
  
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.glassButton} ${buttonSizeClass} ${className}`}
      title={title}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      <span
        className={`${styles.glassButtonContent} text-white ${buttonSpacingClass}`}
        style={{ paddingInline: `${padding}px !important` }}
      >
        {icon && (
          <span className="flex [&>svg]:my-auto [&>svg]:inline">
            {icon}
          </span>
        )}
        {children && (
          <span className="m-auto">
            {children}
          </span>
        )}
      </span>
      <span className={`${styles.glassButtonBg} ${bgClass} ${disabled ? 'opacity-50' : ''}`}></span>
    </button>
  );
}

