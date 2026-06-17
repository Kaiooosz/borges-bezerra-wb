"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Shield, Globe, Bitcoin, Scale, Building2, TrendingUp, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Planejamento Patrimonial",
    subtitle: "e Estrutural",
    slug: "planejamento-patrimonial",
    description: "Proteção inteligente do seu patrimônio com estruturas jurídicas sólidas e estratégias sob medida.",
    features: [
      "Holdings familiares e empresariais",
      "Proteção patrimonial lícita",
      "Trusts e foundations internacionais",
      "Proteção de ativos digitais e PI",
      "Estratégias de sucessão",
    ],
  },
  {
    icon: Globe,
    title: "Internacionalização",
    subtitle: "e Offshore",
    slug: "internacionalizacao",
    description: "Expanda seus negócios globalmente com segurança jurídica em mais de 15 jurisdições.",
    features: [
      "Empresas offshore — EUA, Dubai, Estônia",
      "Estruturas multilayer integradas",
      "Residência fiscal internacional",
      "Segunda cidadania",
      "Contas bancárias internacionais",
    ],
  },
  {
    icon: Bitcoin,
    title: "Cripto, Fintechs",
    subtitle: "e Regulação",
    slug: "cripto-fintechs",
    description: "Compliance e estruturação completa para o mercado cripto, fintech e blockchain.",
    features: [
      "Licenças MSB, VASP e pagamentos",
      "Estruturação de exchanges e wallets",
      "Tokenização e contratos inteligentes",
      "Compliance AML/KYC",
      "Regularização de criptoativos",
    ],
  },
  {
    icon: Scale,
    title: "Jurídico Estratégico",
    subtitle: "Empresarial",
    slug: "juridico-estrategico",
    description: "Consultoria jurídica integrada para crescimento sustentável e expansão segura.",
    features: [
      "Contratos nacionais e internacionais",
      "Acordos societários",
      "Planejamento tributário",
      "Reorganização societária",
      "Apoio a startups e scale-ups",
    ],
  },
  {
    icon: Building2,
    title: "Legal Growth",
    subtitle: "para Infoprodutores",
    slug: "legal-growth",
    description: "Solução jurídica completa para negócios digitais, infoprodutores e grandes lançamentos.",
    features: [
      "Estrutura tributária conforme o regime aplicável",
      "Organização de riscos trabalhistas",
      "Proteção contra alunos e reembolsos",
      "Registro de marcas e produtos",
      "Contratos com sócios e parceiros",
    ],
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: "Contencioso",
    subtitle: "Estratégico",
    slug: "contencioso",
    description: "Defesa patrimonial e resolução de litígios complexos nacionais e internacionais.",
    features: [
      "Litígios empresariais e societários",
      "Defesa em crimes econômicos",
      "Medidas cautelares e defesa patrimonial",
      "Arbitragem internacional",
      "Causas envolvendo cripto",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden px-4">
          {/* Fundo atmosférico — sem grade */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(15,35,25,0.5) 0%, transparent 70%)",
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <span className="block text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-8">
                Especialidades
              </span>
              <h1
                className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block"
                style={{
                  fontSize: "clamp(3rem, 9vw, 8rem)",
                  
                  letterSpacing: "-0.02em",
                }}
              >
                Soluções
              </h1>
              <h1
                className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block mb-8"
                style={{
                  fontSize: "clamp(3rem, 9vw, 8rem)",
                  
                  letterSpacing: "-0.02em",
                }}
              >
                Jurídicas.
              </h1>
              <p className="text-[15px] text-muted-foreground font-light max-w-md leading-relaxed">
                Engenharia jurídica inteligente, segura e ética — dentro e fora do Brasil
              </p>
            </motion.div>
          </div>
        </section>

        {/* Grid de serviços */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  <div className="group p-8 md:p-10 h-full bg-card transition-all duration-300 hover:bg-white/[0.03]">
                    {/* Ícone + título */}
                    <div className="mb-7">
                      <service.icon className="w-5 h-5 text-white/50 mb-5" />
                      <h3
                        className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
                        style={{
                          fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                         
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {service.title}
                      </h3>
                      <h3
                        className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
                        style={{
                          fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                         
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {service.subtitle}
                      </h3>
                    </div>

                    {/* Descrição */}
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-[13px] text-muted-foreground font-light">
                          <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-muted-foreground/40 inline-block" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA pill */}
                    <Link
                      href={`/servicos/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 font-light text-[10px] uppercase tracking-[0.22em] border border-foreground bg-foreground text-background rounded-full transition-all duration-300 hover:scale-[1.02]"
                    >
                      Saiba Mais
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-24 md:py-32 px-4 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="block text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-8">
                Próximo Passo
              </span>
              <h2
                className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  
                  letterSpacing: "-0.02em",
                }}
              >
                Proteja Seu
              </h2>
              <h2
                className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block mb-8"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  
                  letterSpacing: "-0.02em",
                }}
              >
                Patrimônio.
              </h2>
              <p className="text-[15px] text-muted-foreground font-light max-w-sm mx-auto leading-relaxed mb-10">
                Diagnóstico estratégico com nossos especialistas
              </p>
              <a
                href="https://wa.me/5521979901686?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-12 py-4 font-light text-[11px] uppercase tracking-[0.22em] border border-foreground bg-foreground text-background rounded-full transition-all duration-300 hover:scale-[1.03]"
              >
                Agendar Diagnóstico Estratégico
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
