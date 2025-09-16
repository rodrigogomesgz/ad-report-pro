"use client";
import { ArrowLeft } from "lucide-react";
import { useNav } from "@/lib/navigation";

interface BackButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export function BackButton({ className = "", children = "Voltar" }: BackButtonProps) {
  const nav = useNav();

  return (
    <button 
      onClick={() => nav.back()} 
      className={`flex items-center text-muted-foreground hover:text-foreground transition-colors ${className}`}
    >
      <ArrowLeft size={20} className="mr-2" />
      {children}
    </button>
  );
}

export default BackButton;
