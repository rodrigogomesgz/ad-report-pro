# Configuração de Variáveis de Ambiente

Para usar as integrações reais com Google Ads, Meta Ads e Stripe, você precisa configurar as seguintes variáveis de ambiente:

## Google Ads API

1. Acesse o [Google Ads API Center](https://ads.google.com/home/tools/api-center/)
2. Crie um projeto e obtenha as credenciais
3. Configure as variáveis:

```env
NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID=your_google_ads_client_id
NEXT_PUBLIC_GOOGLE_ADS_CLIENT_SECRET=your_google_ads_client_secret
NEXT_PUBLIC_GOOGLE_ADS_DEVELOPER_TOKEN=your_google_ads_developer_token
NEXT_PUBLIC_GOOGLE_ADS_LOGIN_CUSTOMER_ID=your_login_customer_id
NEXT_PUBLIC_GOOGLE_ADS_REDIRECT_URI=http://localhost:3000/oauth/google
```

## Meta Ads API

1. Acesse o [Facebook Developers](https://developers.facebook.com/)
2. Crie um app e configure o Facebook Login
3. Configure as variáveis:

```env
NEXT_PUBLIC_META_ADS_APP_ID=your_meta_ads_app_id
NEXT_PUBLIC_META_ADS_APP_SECRET=your_meta_ads_app_secret
NEXT_PUBLIC_META_ADS_REDIRECT_URI=http://localhost:3000/oauth/meta
```

## Stripe

1. Acesse o [Stripe Dashboard](https://dashboard.stripe.com/)
2. Crie produtos e preços
3. Configure as variáveis:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PRICE_ID=price_your_stripe_price_id
NEXT_PUBLIC_STRIPE_COUPON_ID=FREE_TRIAL_100
```

## App

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Cupom de 100% de Desconto

O sistema está configurado para usar um cupom de 100% de desconto por padrão (`FREE_TRIAL_100`). Para configurar:

1. No Stripe Dashboard, vá para "Produtos" > "Cupons"
2. Crie um cupom com 100% de desconto
3. Use o ID do cupom na variável `NEXT_PUBLIC_STRIPE_COUPON_ID`

## Modo de Desenvolvimento

Se as variáveis não estiverem configuradas, o sistema usará dados mock para demonstração.
