"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, TrendingUp, Globe, ChevronDown } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WorldMapSection } from "@/components/world-map-section";

const WHATSAPP =
  "https://wa.me/5521979901686?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria%20offshore%20com%20a%20Bezerra%20Borges%20Advogados";

const titleStyle = {
  
  letterSpacing: "-0.025em",
};

const dimTitleStyle = {
  ...titleStyle,
};

const heroPillStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.18)",
  backdropFilter: "blur(12px)",
};

// ─── Data ──────────────────────────────────────────────────────────────────

const whyCards = [
  {
    Icon: Shield,
    title: "Proteção Patrimonial",
    bullets: [
      "Blindagem legal contra bloqueios judiciais",
      "Separação patrimonial pessoa física vs empresa",
      "Mitigação de riscos com segregação lícita",
    ],
  },
  {
    Icon: TrendingUp,
    title: "Otimização Tributária",
    bullets: [
      "Eficiência fiscal legal e transparente",
      "Diferimento de lucros e reinvestimento eficiente",
      "Tratados internacionais contra dupla tributação",
    ],
  },
  {
    Icon: Globe,
    title: "Liberdade Global",
    bullets: [
      "Contas bancárias em USD, EUR e GBP",
      "Facilidade para contratos internacionais",
      "Planejamento de residência fiscal estratégica",
    ],
  },
];

const jurisdictions = [
  {
    country: "EUA",
    subtitle: "Delaware / Wyoming",
    tax: "0% federal não-residentes",
    setup: "Setup: 3–5 dias",
    price: "$2.500 – $5.000",
    bullets: [
      "Jurisprudência sólida e banking confiável",
      "Privacidade corporativa robusta",
      "Facilidade de abertura de contas",
    ],
  },
  {
    country: "Paraguai",
    subtitle: "Sistema territorial",
    tax: "10% territorial",
    setup: "Setup: 2–4 semanas",
    price: "$3.000 – $6.000",
    bullets: [
      "Residência fiscal rápida",
      "Privacidade bancária elevada",
      "Ideal para trading e importação",
    ],
  },
  {
    country: "Uruguai",
    subtitle: "Renda externa isenta",
    tax: "0% renda externa",
    setup: "Setup: 4–6 semanas",
    price: "$4.000 – $8.000",
    bullets: [
      "Estabilidade política e qualidade de vida",
      "Sigilo bancário forte",
      "Não tributa renda de fonte externa",
    ],
  },
  {
    country: "Nevis",
    subtitle: "Máxima proteção",
    tax: "0% sobre renda externa",
    setup: "Setup: 1–2 semanas",
    price: "$5.000 – $10.000",
    bullets: [
      "Proteção contra credores líder mundial",
      "Privacidade absoluta",
      "Estruturas blindadas e trusts",
    ],
  },
  {
    country: "Estônia",
    subtitle: "e-Residency digital",
    tax: "0% lucros não distribuídos",
    setup: "Setup: 1–3 semanas",
    price: "$3.500 – $7.000",
    bullets: [
      "100% digital, acesso ao mercado EU",
      "Infraestrutura tech de ponta",
      "Ideal para negócios digitais e cripto",
    ],
  },
  {
    country: "Dubai",
    subtitle: "DMCC / Zonas Francas",
    tax: "0% zonas francas",
    setup: "Setup: 2–4 semanas",
    price: "$6.000 – $12.000",
    bullets: [
      "Hub internacional premium",
      "0% imposto pessoal",
      "Infraestrutura de classe mundial",
    ],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Consultoria Inicial",
    desc: "Análise do perfil patrimonial, objetivos e exposição fiscal atual.",
  },
  {
    num: "02",
    title: "Estruturação",
    desc: "Desenho da arquitetura jurídica ideal com escolha de jurisdições.",
  },
  {
    num: "03",
    title: "Implementação Legal",
    desc: "Abertura de empresas, trusts ou holdings com documentação completa.",
  },
  {
    num: "04",
    title: "Abertura Bancária",
    desc: "Relacionamento bancário internacional com contas corporativas.",
  },
  {
    num: "05",
    title: "Compliance",
    desc: "Setup contábil internacional e compliance com a Receita Federal.",
  },
  {
    num: "06",
    title: "Suporte Contínuo",
    desc: "Acompanhamento mensal, atualizações regulatórias e ajustes.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$3.500",
    featured: false,
    bullets: [
      "1 empresa em jurisdição selecionada",
      "Suporte para abertura de conta bancária",
      "Declaração DIRPF ano corrente",
      "3 meses de suporte incluído",
      "Documentação apostilada",
    ],
  },
  {
    name: "Professional Suite",
    price: "$8.500",
    featured: true,
    bullets: [
      "2 empresas em jurisdições complementares",
      "Estrutura holding + operacional",
      "Abertura de 2–3 contas bancárias",
      "Compliance fiscal completo (BR + Exterior)",
      "6 meses de suporte premium",
      "Estratégia de migração patrimonial",
      "Planejamento sucessório básico",
    ],
  },
  {
    name: "Wealth Protection",
    price: "$18.000+",
    featured: false,
    bullets: [
      "Estrutura multi-jurisdicional completa",
      "Trust + Holdings + Operacionais",
      "Múltiplas contas bancárias premium",
      "Residência fiscal em país escolhido",
      "12 meses de suporte concierge",
      "Planejamento sucessório avançado",
    ],
  },
];

const faqs = [
  {
    q: "Offshore é legal? Como fica minha situação com a Receita Federal?",
    a: "Estruturas offshore são completamente legais e amplamente utilizadas por empresas e investidores globais. Você deve declarar os bens no exterior no DIRPF, e-Financeira e CBE. Fornecemos suporte completo para essas declarações. O problema é sonegação — não a otimização fiscal legítima.",
  },
  {
    q: "Quanto tempo leva para ter uma offshore operacional?",
    a: "O processo varia entre 4–8 semanas dependendo da jurisdição. A abertura da empresa leva 1–3 semanas; a abertura bancária pode adicionar 2–4 semanas. Jurisdições como EUA e Estônia são mais rápidas (2–3 semanas total), enquanto Dubai e Uruguai levam 4–6 semanas.",
  },
  {
    q: "Preciso viajar para abrir a estrutura?",
    a: "Na maioria dos casos, não. 80% das nossas estruturas são feitas 100% remotamente através de procurações e apostilamento digital. Algumas jurisdições podem exigir visita para abertura de conta bancária premium, mas isso pode ser otimizado em uma viagem estratégica de 3–5 dias.",
  },
  {
    q: "Qual o investimento mínimo que faz sentido para estruturar uma offshore?",
    a: "Recomendamos para: patrimônio líquido acima de $100k USD, faturamento internacional acima de $20k/mês, ou necessidade específica de proteção patrimonial. Fazemos análise caso a caso na consultoria inicial.",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────

function GlassPill({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 px-7 py-3 font-light text-[11px] uppercase tracking-[0.22em] text-foreground border border-foreground/20 bg-foreground/5 rounded-full transition-opacity hover:opacity-80 ${className}`}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-4">
      {children}
    </p>
  );
}

function Bullet() {
  return (
    <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-muted-foreground/40 inline-block" />
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function OffshorePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ── Hero ── */}
      <section className="dark-section relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Atmospheric background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.04) 0%, transparent 70%), #0a0a0a",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Bezerra Borges — Direito Internacional</SectionLabel>

            <h1
              className="font-sans font-light uppercase heading-gradient"
              style={{
                fontSize: "clamp(3rem, 9vw, 8rem)",
                ...titleStyle,
                lineHeight: 1.05,
              }}
            >
              Estruturas
            </h1>
            <h1
              className="font-sans font-light uppercase heading-gradient"
              style={{
                fontSize: "clamp(3rem, 9vw, 8rem)",
                ...dimTitleStyle,
                lineHeight: 1.05,
              }}
            >
              Offshore.
            </h1>

            <p className="mt-8 text-base font-light text-white/55 max-w-xl mx-auto leading-relaxed">
              Proteção patrimonial e liberdade financeira com conformidade
              internacional total.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <GlassPill href={WHATSAPP}>Agendar Consultoria</GlassPill>
              <GlassPill href="#jurisdicoes">Ver Jurisdições</GlassPill>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
          <ChevronDown className="w-5 h-5 text-white" />
        </div>
      </section>

      {/* ── Por que offshore ── */}
      <section className="py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Por que offshore</SectionLabel>
          <h2
            className="font-sans font-light uppercase heading-gradient mb-14"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              ...titleStyle,
              lineHeight: 1.08,
            }}
          >
            Fundamentos
            <br />
            <span style={dimTitleStyle}>Estratégicos.</span>
          </h2>

          {/* gap-px grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {whyCards.map(({ Icon, title, bullets }) => (
              <div key={title} className="bg-card p-8 flex flex-col gap-5">
                <Icon className="w-5 h-5 text-muted-foreground mb-5" />
                <h3 className="font-sans font-light text-base uppercase tracking-wide text-foreground">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm font-light text-muted-foreground leading-relaxed">
                      <Bullet />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── World Map ── */}
      <WorldMapSection />

      {/* ── Jurisdições ── */}
      <section id="jurisdicoes" className="py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Jurisdições disponíveis</SectionLabel>
          <h2
            className="font-sans font-light uppercase heading-gradient mb-14"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              ...titleStyle,
              lineHeight: 1.08,
            }}
          >
            Onde Estruturar
            <br />
            <span style={dimTitleStyle}>Seu Patrimônio.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {jurisdictions.map((j) => (
              <div key={j.country} className="bg-card p-8 flex flex-col gap-4">
                <div>
                  <p
                    className="font-sans font-light uppercase"
                    style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", ...titleStyle }}
                  >
                    {j.country}
                  </p>
                  <p className="text-[11px] font-light uppercase tracking-[0.22em] text-muted-foreground mt-1">
                    {j.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-1">
                  <span className="text-[10px] font-light uppercase tracking-[0.2em] text-muted-foreground border border-border rounded-full px-3 py-1">
                    {j.tax}
                  </span>
                  <span className="text-[10px] font-light uppercase tracking-[0.2em] text-muted-foreground border border-border rounded-full px-3 py-1">
                    {j.setup}
                  </span>
                </div>

                <p className="text-[11px] font-light uppercase tracking-[0.18em] text-muted-foreground mt-1">
                  A partir de{" "}
                  <span className="text-foreground">{j.price}</span>
                </p>

                <ul className="space-y-2 mt-2">
                  {j.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm font-light text-muted-foreground leading-relaxed">
                      <Bullet />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Processo ── */}
      <section className="py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Como funciona</SectionLabel>
          <h2
            className="font-sans font-light uppercase heading-gradient mb-14"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              ...titleStyle,
              lineHeight: 1.08,
            }}
          >
            Do Diagnóstico
            <br />
            <span style={dimTitleStyle}>À Operação.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {processSteps.map((s) => (
              <div key={s.num} className="bg-card p-8 flex flex-col gap-4">
                <p className="text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground/60">
                  {s.num}
                </p>
                <h3 className="font-sans font-light text-sm uppercase tracking-wide text-foreground">
                  {s.title}
                </h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Planos ── */}
      <section className="py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Investimento</SectionLabel>
          <h2
            className="font-sans font-light uppercase heading-gradient mb-14"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              ...titleStyle,
              lineHeight: 1.08,
            }}
          >
            Escolha Seu
            <br />
            <span style={dimTitleStyle}>Pacote.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {plans.map((p) => (
              <div
                key={p.name}
                className="flex flex-col gap-6 p-8"
                style={{
                  background: p.featured
                    ? "var(--accent)"
                    : "var(--card)",
                }}
              >
                <div>
                  <p className="text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-2">
                    {p.name}
                  </p>
                  <p
                    className="font-sans font-light"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", ...titleStyle }}
                  >
                    {p.price}
                  </p>
                </div>

                <ul className="space-y-3 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm font-light text-muted-foreground leading-relaxed">
                      <Bullet />
                      {b}
                    </li>
                  ))}
                </ul>

                <GlassPill href={WHATSAPP} className="self-start">
                  Contratar Agora
                </GlassPill>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel>Perguntas frequentes</SectionLabel>
          <h2
            className="font-sans font-light uppercase heading-gradient mb-14"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              ...titleStyle,
              lineHeight: 1.08,
            }}
          >
            Dúvidas
            <br />
            <span style={dimTitleStyle}>Comuns.</span>
          </h2>

          <div className="flex flex-col gap-px bg-border rounded-2xl overflow-hidden">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                >
                  <span className="text-sm font-light text-foreground/80 leading-relaxed">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="w-4 h-4 text-muted-foreground/50 shrink-0 transition-transform duration-300"
                    style={{
                      transform:
                        openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-6 text-sm font-light text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-28 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Próximo passo</SectionLabel>
          <h2
            className="font-sans font-light uppercase heading-gradient mb-4"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              ...titleStyle,
              lineHeight: 1.08,
            }}
          >
            Proteja Seu
          </h2>
          <h2
            className="font-sans font-light uppercase heading-gradient mb-10"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              ...dimTitleStyle,
              lineHeight: 1.08,
            }}
          >
            Patrimônio.
          </h2>
          <GlassPill href={WHATSAPP}>Falar com um Especialista</GlassPill>
        </div>
      </section>

      <Footer />
    </div>
  );
}
