import { loadStripe, Stripe } from '@stripe/stripe-js';

interface StripeConfig {
  publishableKey: string;
  priceId: string;
  couponId: string;
}

class StripeService {
  private stripe: Stripe | null = null;
  private config: StripeConfig | null = null;

  constructor() {
    this.initializeConfig();
  }

  private initializeConfig() {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID;
    const couponId = process.env.NEXT_PUBLIC_STRIPE_COUPON_ID;

    if (publishableKey && priceId) {
      this.config = {
        publishableKey,
        priceId,
        couponId: couponId || 'FREE_TRIAL_100' // Cupom padrão para 100% de desconto
      };

      this.initializeStripe();
    }
  }

  private async initializeStripe() {
    if (this.config?.publishableKey) {
      this.stripe = await loadStripe(this.config.publishableKey);
    }
  }

  async createCheckoutSession(customerEmail?: string, couponCode?: string): Promise<{ sessionId: string; url: string }> {
    if (!this.stripe || !this.config) {
      throw new Error('Stripe not configured. Please check your environment variables.');
    }

    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: this.config.priceId,
          customerEmail,
          couponCode: couponCode || this.config.couponId, // Usar cupom de 100% por padrão
          successUrl: `${window.location.origin}/checkout/success`,
          cancelUrl: `${window.location.origin}/checkout/cancel`,
        }),
      });

      const session = await response.json();

      if (session.error) {
        throw new Error(session.error);
      }

      return {
        sessionId: session.sessionId,
        url: session.url
      };

    } catch (error) {
      console.error('Error creating checkout session:', error);
      throw new Error(`Failed to create checkout session: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async redirectToCheckout(customerEmail?: string, couponCode?: string): Promise<void> {
    try {
      const { url } = await this.createCheckoutSession(customerEmail, couponCode);
      
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Error redirecting to checkout:', error);
      throw error;
    }
  }

  // Método para aplicar cupom de 100% de desconto
  async applyFreeTrialCoupon(): Promise<void> {
    await this.redirectToCheckout(undefined, 'FREE_TRIAL_100');
  }

  // Método para verificar se o Stripe está configurado
  isConfigured(): boolean {
    return this.stripe !== null && this.config !== null;
  }

  // Método para obter o cupom padrão
  getDefaultCoupon(): string {
    return this.config?.couponId || 'FREE_TRIAL_100';
  }
}

export const stripeService = new StripeService();
export default StripeService;
