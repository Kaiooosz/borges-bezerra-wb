"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Globe, Building, MapPin, CreditCard, ArrowRight } from "lucide-react";

const jurisdictions = [
  { name: "Estados Unidos", flag: "🇺🇸", benefits: "LLC, C-Corp, conta bancária" },
  { name: "Uruguai", flag: "🇺🇾", benefits: "SA, residência fiscal favorável" },
  { name: "Paraguai", flag: "🇵🇾", benefits: "Residência rápida, baixa tributação" },
  { name: "Dubai", flag: "🇦🇪", benefits: "Free zones, 0% imposto de renda" },
  { name: "Estônia", flag: "🇪🇪", benefits: "E-residency, empresa 100% digital" },
  { name: "Nevis", flag: "🇰🇳", benefits: "Offshore clássico, privacidade" },
];

const features = [
  {
    icon: Building,
    title: "Empresas Offshore",
    subtitle: "Internacionais",
    description: "Abertura e gestão completa de empresas internacionais em jurisdições estratégicas.",
  },
  {
    icon: MapPin,
    title: "Residência Fiscal",
    subtitle: "Internacional",
    description: "Planejamento de mudança de domicílio fiscal para países com menor tributação.",
  },
  {
    icon: Globe,
    title: "Segunda Cidadania",
    subtitle: "e Passaportes",
    description: "Programas de residência e cidadania por investimento em múltiplas jurisdições.",
  },
  {
    icon: CreditCard,
    title: "Contas Bancárias",
    subtitle: "Internacionais",
    description: "Abertura de contas em bancos internacionais para operações globais seguras.",
  },
];

const process = [
  {
    step: "01",
    title: "Análise de Perfil",
    description: "Avaliação do perfil fiscal, patrimonial e objetivos de internacionalização.",
  },
  {
    step: "02",
    title: "Escolha da Jurisdição",
    description: "Seleção da estrutura ideal com base em benefícios fiscais e operacionais.",
  },
  {
    step: "03",
    title: "Constituição",
    description: "Abertura da empresa e documentação bancária com suporte completo.",
  },
  {
    step: "04",
    title: "Manutenção",
    description: "Gestão contínua de compliance, relatórios e renovações anuais.",
  },
];

export default function InternacionalizacaoPage() {
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
              Internacionalização e Offshore
            </span>
            <h1
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block"
              style={{
                fontSize: "clamp(3rem, 9vw, 8rem)",
                
                letterSpacing: "-0.02em",
              }}
            >
              Expanda
            </h1>
            <h1
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block mb-8"
              style={{
                fontSize: "clamp(3rem, 9vw, 8rem)",
                
                letterSpacing: "-0.02em",
              }}
            >
              Globalmente.
            </h1>
            <p className="text-[15px] text-muted-foreground font-light max-w-md leading-relaxed mb-10">
              Expanda seus negócios globalmente com segurança jurídica em mais de 15 jurisdições.
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

      {/* Jurisdictions */}
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
              Presença Global
            </span>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              Principais
            </h2>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              Jurisdições.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {jurisdictions.map((j, i) => (
              <motion.div
                key={j.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-card p-8 hover:bg-white/[0.03] transition-all duration-300"
              >
                <span className="text-2xl mb-4 block">{j.flag}</span>
                <h3
                  className="font-sans font-light uppercase text-foreground mb-2"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", letterSpacing: "-0.01em" }}
                >
                  {j.name}
                </h3>
                <p className="text-[13px] text-muted-foreground font-light leading-relaxed">{j.benefits}</p>
              </motion.div>
            ))}
          </div>
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
              Serviços
            </span>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              O que
            </h2>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              Fazemos.
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
              Metodologia
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
              Vá Além
            </h2>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block mb-8"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.02em" }}
            >
              das Fronteiras.
            </h2>
            <p className="text-[15px] text-muted-foreground font-light max-w-sm mx-auto leading-relaxed mb-10">
              Diagnóstico estratégico com nossos especialistas em internacionalização
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
