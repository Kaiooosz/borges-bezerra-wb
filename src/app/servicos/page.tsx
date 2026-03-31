"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Globe,
  Bitcoin,
  Scale,
  Building2,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Planejamento Patrimonial e Estrutural",
    slug: "planejamento-patrimonial",
    description: "Proteção inteligente do seu patrimônio com estruturas jurídicas sólidas",
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
    title: "Internacionalização e Offshore",
    slug: "internacionalizacao",
    description: "Expanda seus negócios globalmente com segurança jurídica",
    features: [
      "Empresas offshore (EUA, Uruguai, Dubai, Estônia)",
      "Estruturas multilayer integradas",
      "Residência fiscal internacional",
      "Segunda cidadania",
      "Contas bancárias internacionais",
    ],
  },
  {
    icon: Bitcoin,
    title: "Cripto, Fintechs e Regulação",
    slug: "cripto-fintechs",
    description: "Compliance e estruturação para o mercado cripto e fintech",
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
    title: "Jurídico Estratégico Empresarial",
    slug: "juridico-estrategico",
    description: "Consultoria jurídica integrada para crescimento sustentável",
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
    title: "Legal Growth para Infoprodutores",
    slug: "legal-growth",
    description: "Solução jurídica completa para negócios digitais e lançamentos",
    features: [
      "Redução de até 90% em impostos",
      "Blindagem trabalhista completa",
      "Proteção contra alunos e reembolsos",
      "Registro de marcas e produtos",
      "Contratos com sócios e parceiros",
    ],
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: "Contencioso Estratégico",
    slug: "contencioso",
    description: "Defesa patrimonial e resolução de litígios complexos",
    features: [
      "Litígios empresariais e societários",
      "Defesa em crimes econômicos",
      "Atuação em medidas cautelares e defesa patrimonial.",
      "Arbitragem internacional",
      "Causas envolvendo cripto",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground tracking-tight">
      <main>
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden px-4">
          {/* Grid background responsivo ao tema */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="font-source-serif-pro font-light text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-8 md:mb-10 text-balance leading-[1.1]">
                Soluções Jurídicas <br />
                <span className="italic">para</span> <span className="font-bold">Proteger</span>,<br />
                <span className="font-bold">Escalar</span> e <span className="italic text-white/40">Libertar</span>
              </h1>
              <p className="text-base md:text-xl text-white/50 text-pretty max-w-3xl mx-auto font-light tracking-tight">
                Engenharia jurídica inteligente, segura e ética — dentro e fora
                do Brasil
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`group p-8 md:p-10 h-full border border-border hover:border-foreground/30 transition-all duration-300 ${
                      service.highlight ? "bg-muted/30" : "bg-card/50"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                      <div className="p-3 bg-muted/40 rounded-none group-hover:bg-foreground/10 transition-colors">
                        <service.icon className="w-8 h-8 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-source-serif-pro text-2xl md:text-3xl lg:text-4xl text-white mb-4 tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-base md:text-lg text-white/50 leading-relaxed font-light tracking-tight">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-4 text-sm md:text-base text-white/40 font-light"
                        >
                          <CheckCircle2 className="w-5 h-5 text-white/20 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`/servicos/${service.slug}`}
                      className={
                        service.highlight
                          ? "btn-primary w-full"
                          : "btn-outline w-full"
                      }
                    >
                      Saiba Mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-source-serif-pro font-light text-2xl sm:text-3xl md:text-5xl text-foreground mb-4 md:mb-6 px-2">
                Pronto para Proteger seu Patrimônio?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 px-2">
                Agende um diagnóstico estratégico gratuito e descubra como
                podemos ajudar
              </p>
              <a
                href="https://wa.me/5521979901686?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Agendar Diagnóstico Estratégico
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
