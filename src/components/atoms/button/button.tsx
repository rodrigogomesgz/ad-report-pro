"use client";
import * as React from "react";
import { Button as MantineButton } from "@mantine/core";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "hero" | "outline" | "secondary" | "ghost" | "destructive";
type ButtonSize = "sm" | "md" | "lg";

type Props = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const variantStyles = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  hero: "bg-gradient-hero text-white hover:opacity-90 shadow-medium font-semibold",
  outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
};

const sizeStyles = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-8 text-base",
};

export function Button({ 
  variant = "default", 
  size = "md", 
  children, 
  className,
  ...props 
}: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}