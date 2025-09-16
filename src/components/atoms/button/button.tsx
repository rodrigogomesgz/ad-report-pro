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
  loading?: boolean;
};

const variantStyles = {
  default: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm",
  hero: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md font-semibold",
  outline: "border border-border bg-background hover:bg-muted/50 hover:text-foreground",
  secondary: "bg-muted text-muted-foreground hover:bg-muted/80",
  ghost: "hover:bg-muted/50 hover:text-foreground",
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
  loading = false,
  disabled,
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
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
      ) : (
        children
      )}
    </button>
  );
}