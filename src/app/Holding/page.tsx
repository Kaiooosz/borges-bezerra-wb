"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Building2, TrendingUp, Users, Lock, FileText } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const WHATSAPP_URL =
  "https://wa.me/5521979901686?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20patrimonial%20com%20a%20Bezerra%20Borges%20Advogados"

const titleStyle = {
  
  letterSpacing: "-0.025em",
  fontSize: "clamp(3rem, 9vw, 8rem)",
}

const secondLineTitleStyle = {
  ...titleStyle,
}

const sectionTitleStyle = {
  
  letterSpacing: "-0.025em",
  fontSize: "clamp(2.5rem, 7vw, 6rem)",
}

const sectionSecondLineStyle = {
  ...sectionTitleStyle,
}

const sectionSeparator = {
  background:
    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(15,35,25,0.5) 0%, transparent 70%)",
}

const benefits = [
  {
    icon: Shield,
    title: "Proteção Patrimonial",
    description:
      "Proteção patrimonial lícita e preventiva contra riscos jurídicos e econômicos.",
  },
  {
    icon: TrendingUp,
    title: "Planejamento Tributário",
    description:
      "Planejamento fiscal estratégico que organiza a carga tributária sobre patrimônio e lucros empresariais conforme o regime aplicável.",
  },
  {
    icon: Users,
    title: "Sucessão Familiar",
    description:
      "Transferência patrimonial estruturada que evita conflitos familiares, custos com inventário e problemas de sucessão.",
  },
  {
    icon: Building2,
    title: "Governança Corporativa",
    description:
      "Estrutura profissional de gestão com separação clara entre patrimônio pessoal e empresarial, facilitando a administração.",
  },
  {
    icon: Lock,
    title: "Privacidade",
    description:
      "Maior discrição sobre o patrimônio familiar através de estruturas societárias adequadas e legalmente constituídas.",
  },
  {
    icon: FileText,
    title: "Flexibilidade Operacional",
    description:
      "Facilita operações internacionais, aquisições e reorganizações societárias com estrutura ágil e bem planejada.",
  },
]

const holdingTypes = [
  {
    title: "Holding Patrimonial",
    description:
      "Focada na gestão e proteção de bens imóveis, investimentos e ativos da família.",
    features: ["Gestão de imóveis", "Proteção de ativos", "Planejamento sucessório"],
  },
  {
    title: "Holding Empresarial",
    description:
      "Controla participações societárias e coordena operações de múltiplas empresas do grupo.",
    features: ["Controle societário", "Governança corporativa", "Estratégia de grupo"],
  },
  {
    title: "Holding Mista",
    description:
      "Combina gestão patrimonial e empresarial em uma única estrutura integrada.",
    features: ["Gestão completa", "Estrutura fiscal coerente", "Flexibilidade operacional"],
  },
  {
    title: "Holding Internacional",
    description:
      "Estrutura no exterior para organização e internacionalização do patrimônio familiar.",
    features: ["Jurisdições adequadas ao caso", "Estrutura fiscal coerente", "Discrição dentro das regras"],
  },
]

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico Patrimonial",
    description:
      "Análise completa do patrimônio familiar, estrutura atual e objetivos de proteção.",
  },
  {
    number: "02",
    title: "Planejamento Estratégico",
    description:
      "Desenvolvimento da estrutura ideal de holding considerando aspectos fiscais, sucessórios e de proteção.",
  },
  {
    number: "03",
    title: "Implementação",
    description:
      "Constituição da holding, transferência de ativos e formalização de toda documentação necessária.",
  },
  {
    number: "04",
    title: "Gestão Contínua",
    description:
      "Suporte permanente para governança, compliance fiscal e ajustes estratégicos conforme necessidade.",
  },
]

const stats = [
  { value: "10+", label: "Anos de atuação" },
  { value: "4", label: "Tipos de estrutura" },
  { value: "360°", label: "Análise integrada" },
]

export default function HoldingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      {/* HERO */}
      <section className="relative pt-36 pb-28 md:pt-48 md:pb-40 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-10">
              Bezerra Borges Advogados
            </p>

            <h1 className="font-sans font-light uppercase leading-none heading-gradient">
              <span className="block" style={titleStyle}>
                Holding
              </span>
              <span className="block" style={secondLineTitleStyle}>
                Patrimonial.
              </span>
            </h1>

            <p className="mt-10 text-base font-light text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Estruturação patrimonial e sucessória para empresários e famílias.
              Organizamos holdings, governança, sucessão, contratos familiares e estruturas
              patrimoniais com análise jurídica, tributária e societária integrada.
            </p>

            <div className="mt-12">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-12 py-4 font-light text-[11px] uppercase tracking-[0.22em] rounded-full border border-foreground bg-foreground text-background transition-all duration-300 hover:opacity-80"
              >
                Solicitar Diagnóstico Patrimonial
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-28 md:py-40">
        <div className="absolute inset-0 pointer-events-none" style={sectionSeparator} />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-6">
              Vantagens
            </p>
            <h2 className="font-sans font-light uppercase leading-none heading-gradient">
              <span className="block" style={sectionTitleStyle}>
                Por que criar
              </span>
              <span className="block" style={sectionSecondLineStyle}>
                uma holding?
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card p-8">
                <benefit.icon className="w-5 h-5 text-muted-foreground mb-5" />
                <h3 className="text-sm font-light uppercase tracking-[0.12em] text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[13px] font-light text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="relative py-28 md:py-40">
        <div className="absolute inset-0 pointer-events-none" style={sectionSeparator} />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-6">
              Estruturas
            </p>
            <h2 className="font-sans font-light uppercase leading-none heading-gradient">
              <span className="block" style={sectionTitleStyle}>
                Tipos de
              </span>
              <span className="block" style={sectionSecondLineStyle}>
                Holdings.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {holdingTypes.map((type, index) => (
              <div key={index} className="bg-card p-10">
                <h3 className="text-sm font-light uppercase tracking-[0.12em] text-foreground mb-4">
                  {type.title}
                </h3>
                <p className="text-[13px] font-light text-muted-foreground leading-relaxed mb-6">
                  {type.description}
                </p>
                <ul className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[13px] font-light text-muted-foreground">
                      <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-muted-foreground/40 inline-block" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-28 md:py-40">
        <div className="absolute inset-0 pointer-events-none" style={sectionSeparator} />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-6">
              Metodologia
            </p>
            <h2 className="font-sans font-light uppercase leading-none heading-gradient">
              <span className="block" style={sectionTitleStyle}>
                Processo de
              </span>
              <span className="block" style={sectionSecondLineStyle}>
                Implementação.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-card p-8">
                <span
                  className="block font-sans font-light text-foreground/15 mb-6"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
                >
                  {step.number}
                </span>
                <h3 className="text-sm font-light uppercase tracking-[0.12em] text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-[13px] font-light text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 pointer-events-none" style={sectionSeparator} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card py-8 px-6 text-center">
                  <span
                    className="font-sans font-light text-foreground text-3xl md:text-4xl"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {stat.value}
                  </span>
                  <span className="block text-[10px] font-light uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-28 md:py-40 border-t border-border">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-8">
              Próximo Passo
            </p>

            <h2 className="font-sans font-light uppercase leading-none heading-gradient mb-8">
              <span className="block" style={sectionTitleStyle}>
                Estruture
              </span>
              <span className="block" style={sectionSecondLineStyle}>
                seu patrimônio.
              </span>
            </h2>

            <p className="text-[13px] font-light text-muted-foreground max-w-md mx-auto leading-relaxed mb-12">
              Agende uma consultoria estratégica e descubra como uma holding pode transformar
              a gestão e proteção do seu patrimônio.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-12 py-4 font-light text-[11px] uppercase tracking-[0.22em] rounded-full border border-foreground bg-foreground text-background transition-all duration-300 hover:opacity-80"
            >
              Falar pelo WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
