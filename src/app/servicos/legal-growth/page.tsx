"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Building2, TrendingDown, ShieldOff, Award, ArrowRight } from "lucide-react";

const features = [
  {
    icon: TrendingDown,
    title: "Redução de Impostos",
    subtitle: "Até 90%",
    description: "Estruturas tributárias legais que reduzem drasticamente a carga fiscal para infoprodutores.",
  },
  {
    icon: ShieldOff,
    title: "Blindagem",
    subtitle: "Trabalhista",
    description: "Proteção completa contra riscos trabalhistas com afiliados, parceiros e colaboradores.",
  },
  {
    icon: Building2,
    title: "Proteção",
    subtitle: "de Lançamentos",
    description: "Blindagem jurídica contra reembolsos abusivos, alunos mal-intencionados e disputas.",
  },
  {
    icon: Award,
    title: "Marcas",
    subtitle: "e Produtos",
    description: "Registro e proteção de marcas, nomes, produtos digitais e propriedade intelectual.",
  },
];

const benefits = [
  "Redução de até 90% em impostos",
  "Blindagem trabalhista completa",
  "Proteção contra alunos e reembolsos",
  "Registro de marcas e produtos",
  "Contratos com sócios e parceiros",
  "Estrutura jurídica para escala",
];

const process = [
  {
    step: "01",
    title: "Diagnóstico Digital",
    description: "Análise completa do modelo de negócio digital e identificação de riscos.",
  },
  {
    step: "02",
    title: "Estruturação Fiscal",
    description: "Criação da holding e estrutura tributária otimizada para seu negócio.",
  },
  {
    step: "03",
    title: "Proteção Legal",
    description: "Contratos, marcas e blindagem trabalhista implementados.",
  },
  {
    step: "04",
    title: "Suporte Contínuo",
    description: "Acompanhamento permanente durante crescimento e lançamentos.",
  },
];

export default function LegalGrowthPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(15,35,25,0.5) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-8">
              Legal Growth para Infoprodutores
            </span>
            <h1
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block"
              style={{
                fontSize: "clamp(3rem, 9vw, 8rem)",
                
                letterSpacing: "-0.02em",
              }}
            >
              Cresça com
            </h1>
            <h1
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block mb-8"
              style={{
                fontSize: "clamp(3rem, 9vw, 8rem)",
                
                letterSpacing: "-0.02em",
              }}
            >
              Proteção.
            </h1>
            <p className="text-[15px] text-muted-foreground font-light max-w-md leading-relaxed mb-10">
              Solução jurídica completa para negócios digitais, infoprodutores e grandes lançamentos.
            </p>
            <a
              href="https://wa.me/5511982712025?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 font-light text-[11px] uppercase tracking-[0.22em] border border-foreground bg-foreground text-background rounded-full transition-all duration-300 hover:scale-[1.02]"
            >
              Agendar Diagnóstico
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-24 md:pb-32 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="block text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-6">
              Soluções
            </span>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              Para Seu
            </h2>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              Negócio Digital.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card p-8 md:p-10 hover:bg-white/[0.03] transition-all duration-300"
              >
                <feature.icon className="w-5 h-5 text-white/50 mb-5" />
                <h3
                  className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.01em" }}
                >
                  {feature.title}
                </h3>
                <h3
                  className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight mb-4"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.01em" }}
                >
                  {feature.subtitle}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-24 md:pb-32 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="block text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-6">
              Cobertura
            </span>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              Proteção
            </h2>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              Completa.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-card p-8 hover:bg-white/[0.03] transition-all duration-300 flex items-start gap-3"
              >
                <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-white/35 inline-block" />
                <span className="text-[13px] text-muted-foreground font-light leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="pb-24 md:pb-32 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="block text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-6">
              Processo
            </span>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              Como
            </h2>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              Funciona.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-card p-8 hover:bg-white/[0.03] transition-all duration-300"
              >
                <span
                  className="block font-sans font-light text-foreground/15 mb-5"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
                >
                  {item.step}
                </span>
                <h3
                  className="font-sans font-light uppercase text-foreground mb-3"
                  style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.15rem)", letterSpacing: "-0.01em" }}
                >
                  {item.title}
                </h3>
                <p className="text-[13px] text-muted-foreground font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-8">
              Próximo Passo
            </span>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.02em" }}
            >
              Escale com
            </h2>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block mb-8"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.02em" }}
            >
              Segurança.
            </h2>
            <p className="text-[15px] text-muted-foreground font-light max-w-sm mx-auto leading-relaxed mb-10">
              Diagnóstico jurídico para seu negócio digital com nossos especialistas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511982712025?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-12 py-4 font-light text-[11px] uppercase tracking-[0.22em] border border-foreground bg-foreground text-background rounded-full transition-all duration-300 hover:scale-[1.03]"
              >
                Agendar Diagnóstico
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 font-light text-[11px] uppercase tracking-[0.22em] text-muted-foreground border border-border hover:border-foreground/30 rounded-full transition-all duration-300 hover:text-foreground"
              >
                Ver Outros Serviços
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
