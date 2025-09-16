# TráfegoClaro

Relatórios automáticos de tráfego pago claros e profissionais.

## Sobre o Projeto

TráfegoClaro é uma solução profissional para gestores de tráfego pago, e-commerces, pequenos negócios e agências que precisam de relatórios automatizados de Google Ads e Meta Ads.

### Proposta de Valor

- Gere relatórios de Google Ads e Meta Ads em minutos, sem planilhas
- PDF pronto para apresentação, com KPIs e gráficos essenciais  
- Fluxo simples: conectar → gerar → baixar/enviar

### Funcionalidades

- **Conexão OAuth**: Integração segura com Google Ads e Meta Ads
- **Relatórios PDF**: Documentos profissionais prontos para apresentação
- **KPIs Essenciais**: Investimento, ROAS, CTR, CPA, Clicks, Impressões, Conversões
- **Entrega Automática**: Por e-mail com opção de expansão para WhatsApp
- **Interface Limpa**: Design profissional sem emojis, focado na clareza

## Tecnologias

Este projeto utiliza:

- **React 18** com TypeScript
- **Vite** para build e desenvolvimento
- **React Router DOM** para navegação
- **Tailwind CSS** para estilização
- **Mantine** para componentes UI
- **Shadcn/ui** para componentes base
- **Lucide React** para ícones
- **@tanstack/react-query** para gerenciamento de estado
- **Puppeteer** e **@sparticuz/chromium** para geração de PDF
- **Resend** para envio de e-mails

## Estrutura do Projeto

```
src/
├── components/           # Componentes organizados por estrutura molecular
│   ├── atoms/           # Componentes básicos (button, kpiCard, textInput)
│   ├── molecules/       # Combinações de atoms (hero, pricing, features)
│   ├── organisms/       # Seções complexas (header, footer, reportsTable)
│   ├── templates/       # Layouts de página (landing, connect, dashboard)
│   └── ui/             # Componentes shadcn/ui
├── pages/              # Páginas da aplicação
├── hooks/              # Custom hooks
├── lib/                # Utilitários e configurações
└── types/              # Definições de tipos TypeScript
```

## Instalação e Desenvolvimento

```bash
# Clonar o repositório
git clone <URL_DO_REPOSITORIO>

# Navegar para o diretório
cd ad-report-pro

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run build:dev` - Gera build em modo desenvolvimento
- `npm run lint` - Executa linting do código
- `npm run preview` - Preview do build de produção

## Convenções de Código

### Nomenclatura
- **Arquivos/Pastas**: camelCase (ex.: `reportsTable.tsx`, `kpiCard.tsx`)
- **Componentes**: PascalCase (ex.: `ReportsTable`, `KpiCard`)
- **Hooks**: usePrefix (ex.: `useNav`, `useAdsConnections`)
- **Types**: PascalCase (ex.: `ReportSummary`)

### Estrutura de Componentes
- Organização molecular: atoms → molecules → organisms → templates
- Imports absolutos via `@/*` (configurado no tsconfig)
- Componentes server-side por padrão, `"use client"` apenas quando necessário

### Design System
- Paleta de cores profissional com tons calmos
- Tema claro e escuro suportado
- Shadows suaves e border-radius de 16px
- Tipografia Inter com pesos consistentes
- Sem uso de emojis na interface

## Roadmap

### MVP (Atual)
- [x] Landing page profissional
- [x] Fluxo de checkout (Stripe)
- [x] Conexão OAuth (Google Ads e Meta Ads)
- [x] Geração de relatórios PDF
- [x] Envio por e-mail
- [x] Interface responsiva e acessível

### Próximas Funcionalidades
- [ ] Integração completa com APIs do Google Ads e Meta Ads
- [ ] Banco de dados (Supabase) para histórico
- [ ] Agendamento automático de relatórios
- [ ] Envio via WhatsApp
- [ ] Dashboard de histórico
- [ ] Relatórios personalizáveis

## Licença

Este projeto está sob licença proprietária. Todos os direitos reservados.