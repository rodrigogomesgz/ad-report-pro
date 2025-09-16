import { Hero } from "@/components/molecules/hero";
import { Features } from "@/components/molecules/features";
import { Pricing } from "@/components/molecules/pricing";
import { Integrations } from "@/components/molecules/integrations";
import { FAQ } from "@/components/molecules/faq";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";
import { Container } from "@/components/atoms/container";
import { Divider } from "@/assets/divider";

export function LandingTemplate() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Container size="xl" padding="lg">
          <Hero />
          <Divider />
          <Features />
          <Divider />
          <Integrations />
          <Divider />
          <Pricing />
          <Divider />
          <FAQ />
        </Container>
      </main>
      <Divider />
      <Footer />
    </div>
  );
}