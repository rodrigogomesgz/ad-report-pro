"use client";
import { ReactNode } from "react";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";
import { Container } from "@/components/atoms/container";
import { BackButton } from "@/components/atoms/backButton";

interface PageTemplateProps {
  children: ReactNode;
  showBackButton?: boolean;
  backButtonText?: string;
  className?: string;
}

export function PageTemplate({ 
  children, 
  showBackButton = true, 
  backButtonText = "Voltar",
  className = ""
}: PageTemplateProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <Header />
      
      <main className="pt-20"> {/* Espaçamento para a navbar fixa */}
        <Container size="xl" padding="lg">
          {showBackButton && (
            <div className="mb-8">
              <BackButton>{backButtonText}</BackButton>
            </div>
          )}
          {children}
        </Container>
      </main>
      
      <Footer />
    </div>
  );
}

export default PageTemplate;
