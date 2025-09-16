import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      priceId, 
      customerEmail, 
      couponCode, 
      successUrl, 
      cancelUrl 
    } = req.body;

    if (!priceId) {
      return res.status(400).json({ error: 'Price ID is required' });
    }

    // Configuração da sessão de checkout
    const sessionConfig: Stripe.Checkout.SessionCreateParams = {
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl || `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/cancel`,
      allow_promotion_codes: true,
    };

    // Adicionar email do cliente se fornecido
    if (customerEmail) {
      sessionConfig.customer_email = customerEmail;
    }

    // Aplicar cupom se fornecido
    if (couponCode) {
      // Verificar se o cupom existe
      try {
        const coupon = await stripe.coupons.retrieve(couponCode);
        
        // Se o cupom for de 100% de desconto, criar uma sessão especial
        if (coupon.percent_off === 100) {
          // Para cupom de 100%, criar uma sessão de teste sem cobrança
          sessionConfig.payment_method_types = [];
          sessionConfig.subscription_data = {
            trial_period_days: 7, // 7 dias de teste grátis
          };
        } else {
          // Para outros cupons, aplicar normalmente
          sessionConfig.discounts = [
            {
              coupon: couponCode,
            },
          ];
        }
      } catch (couponError) {
        console.warn(`Coupon ${couponCode} not found, proceeding without discount`);
      }
    }

    // Criar a sessão de checkout
    const session = await stripe.checkout.sessions.create(sessionConfig);

    return res.status(200).json({
      sessionId: session.id,
      url: session.url,
    });

  } catch (error) {
    console.error('Error creating checkout session:', error);
    return res.status(500).json({ 
      error: 'Failed to create checkout session',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
