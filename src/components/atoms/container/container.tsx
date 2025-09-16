"use client";
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Container({ 
  children, 
  className = "", 
  size = 'xl',
  padding = 'md'
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl', 
    lg: 'max-w-6xl',
    xl: 'max-w-7xl', // 1120px
    full: 'max-w-none'
  };

  const paddingClasses = {
    none: '',
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-6 md:px-8'
  };

  return (
    <div className={`w-full mx-auto ${sizeClasses[size]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
}

export default Container;
