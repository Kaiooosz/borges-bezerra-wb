"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TeamCarousel from "@/components/TeamCarousel";

const differentials = [
  { title: "Integração real", description: "Entre jurídico, contábil, bancário e tecnológico" },
  { title: "Presença internacional", description: "Atuação em mais de 12 países" },
  { title: "Soluções modulares", description: "Adaptáveis ao momento de cada cliente" },
  { title: "Equipe multidisciplinar", description: "Experiência em estruturas globais" },
  { title: "Linguagem clara", description: "Sem juridiquês, apenas estratégia" },
  { title: "Sigilo e compliance", description: "Em todos os níveis de operação" },
];

const ecosystem = [
  { name: "Legal Growth", description: "Estratégia jurídica e tributária para empresas digitais" },
  { name: "BCont", description: "Contabilidade internacional com foco em cripto e offshore" },
  { name: "SatSails, PagueBit, Crypix e Yuny", description: "Infraestrutura para pagamentos e custódia cripto" },
  { name: "Educação Real", description: "Educação em liberdade, patrimônio e finanças" },
  { name: "Delta Broker", description: "Operações financeiras e cambiais internacionais" },
];

export default function SobreNosPage() {
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
              Sobre o Escritório
            </span>
            <h1
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block"
              style={{
                fontSize: "clamp(3rem, 9vw, 8rem)",
                
                letterSpacing: "-0.02em",
              }}
            >
              Bezerra
            </h1>
            <h1
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block mb-8"
              style={{
                fontSize: "clamp(3rem, 9vw, 8rem)",
                
                letterSpacing: "-0.02em",
              }}
            >
              Borges.
            </h1>
            <p className="text-[15px] text-muted-foreground font-light max-w-md leading-relaxed">
              Firma de advocacia e estratégia internacional especializada em proteção patrimonial, internacionalização e estruturação de negócios globais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Missão */}
      <section className="border-t border-border py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="block text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-6">
              Nossa Missão
            </span>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              Mais do que
            </h2>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              Um Escritório.
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {[
              {
                title: "O que fazemos",
                body: "Transformamos complexidades legais em estruturas estratégicas. Ajudamos pessoas e empresas a operar globalmente com segurança, eficiência e liberdade.",
              },
              {
                title: "Nossa missão",
                body: "Proteger, escalar e libertar o patrimônio e as operações de nossos clientes, utilizando engenharia jurídica inteligente, segura e ética — dentro e fora do Brasil.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-8 md:p-12"
              >
                <h3
                  className="font-sans font-light uppercase text-foreground mb-4"
                  style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", letterSpacing: "-0.01em" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="border-t border-border py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="block text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-6">
              Diferenciais
            </span>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              Por que Escolher
            </h2>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              Bezerra Borges.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {differentials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-card p-8 hover:bg-white/[0.03] transition-all duration-300"
              >
                <h3
                  className="font-sans font-light uppercase text-foreground mb-2"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", letterSpacing: "-0.01em" }}
                >
                  {item.title}
                </h3>
                <p className="text-[13px] text-muted-foreground font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecossistema */}
      <section className="border-t border-border py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="block text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-6">
              Grupo Bezerra Borges
            </span>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              Ecossistema
            </h2>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              Integrado.
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {ecosystem.map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-card p-8 hover:bg-white/[0.03] transition-all duration-300"
              >
                <h3
                  className="font-sans font-light uppercase text-foreground mb-2"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)", letterSpacing: "-0.01em" }}
                >
                  {company.name}
                </h3>
                <p className="text-[13px] text-muted-foreground font-light leading-relaxed">{company.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <TeamCarousel />

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
              Comece Sua
            </h2>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block mb-8"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.02em" }}
            >
              Jornada.
            </h2>
            <p className="text-[15px] text-muted-foreground font-light max-w-sm mx-auto leading-relaxed mb-10">
              Diagnóstico estratégico gratuito com nossos especialistas
            </p>
            <a
              href="https://wa.me/5511982712025?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-12 py-4 font-light text-[11px] uppercase tracking-[0.22em] border border-foreground bg-foreground text-background rounded-full transition-all duration-300 hover:scale-[1.03]"
            >
              Agendar Diagnóstico Gratuito
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
