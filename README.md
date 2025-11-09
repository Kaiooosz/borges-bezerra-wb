# Bezerra Borges Advogados - Website

Site institucional do escritório Bezerra Borges Advogados, especializado em proteção patrimonial, planejamento tributário internacional e estruturas offshore.

## 🏗️ Estrutura do Projeto

```
bezerra-borges-site/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── artigos/           # Página de artigos
│   │   ├── contact/           # Página de contato
│   │   ├── holding/           # Página sobre holdings
│   │   ├── offshore/          # Página sobre estruturas offshore
│   │   ├── servicos/          # Páginas de serviços
│   │   │   ├── contencioso/
│   │   │   ├── cripto-fintechs/
│   │   │   ├── internacionalizacao/
│   │   │   ├── juridico-estrategico/
│   │   │   ├── legal-growth/
│   │   │   └── planejamento-patrimonial/
│   │   └── sobre-nos/         # Página sobre nós
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes de UI (shadcn/ui)
│   │   └── ...               # Componentes específicos do projeto
│   ├── hooks/                # React Hooks customizados
│   ├── lib/                  # Utilitários e helpers
│   ├── styles/               # Estilos globais
│   └── types/                # Definições de tipos TypeScript
│       └── global.d.ts       # Tipos globais do projeto
├── public/                   # Arquivos estáticos
└── AGENTS.md                 # Diretrizes para agentes IA
```

## 🚀 Tecnologias

- **Next.js 16** - Framework React
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **Radix UI** - Componentes acessíveis
- **Framer Motion** - Animações
- **shadcn/ui** - Componentes de UI

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Linter
npm run lint
```

## 📁 Estrutura de Componentes

### Componentes Principais
- `Header` - Cabeçalho com navegação
- `Footer` - Rodapé do site
- `Benefits` - Seção de benefícios
- `Services` - Seção de serviços
- `ContactForm` - Formulário de contato
- `HoldingTypes` - Tipos de holdings

### Componentes de UI
Componentes baseados em shadcn/ui localizados em `src/components/ui/`.

## 🎯 Diretrizes de Desenvolvimento

Este projeto segue as diretrizes definidas em `AGENTS.md` para desenvolvimento e manutenção.

### Principais Regras:
- Trabalho por micro-etapas
- Uma modificação por vez
- Preservar arquitetura existente
- Tipagem TypeScript consistente
- Verificar `src/types/global.d.ts` antes de criar novos tipos

## 📝 Notas

- O projeto utiliza Next.js App Router
- Estilos globais em `src/styles/global.css`
- Tipos globais devem ser definidos em `src/types/global.d.ts`
- Componentes de UI seguem o padrão shadcn/ui

## 🔧 Configuração

O projeto está configurado com:
- TypeScript strict mode
- Path aliases (`@/*` aponta para `./src/*`)
- Tailwind CSS 4 com PostCSS
- Fontes Google (Source Serif 4 e Inter)

