import { Hero } from "@/components/molecules/hero";
import { Features } from "@/components/molecules/features";
import { Pricing } from "@/components/molecules/pricing";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";

export function LandingTemplate() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}