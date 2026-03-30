"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const bullets = [
  "Jurisdições estratégicas para seu negócio",
  "Planejamento tributário internacional",
  "Proteção patrimonial e privacidade",
  "Estruturas offshore e holdings",
];

export function LeadMagnet() {
  return (
    <section className="py-24 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="block text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-6">
            Material Gratuito
          </span>
          <div>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                
                letterSpacing: "-0.025em",
              }}
            >
              Guia Estratégico
            </h2>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                
                letterSpacing: "-0.025em",
              }}
            >
              Internacional.
            </h2>
          </div>
        </motion.div>

        {/* Card grid — mesma estrutura do services */}
        <div className="grid lg:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">

          {/* Left — descrição */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 md:p-12"
          >
            <p className="text-[15px] text-muted-foreground font-light leading-relaxed mb-10 max-w-sm">
              Estruturas empresariais internacionais explicadas com clareza — do planejamento à execução.
            </p>
            <ul className="space-y-4">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                  <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-muted-foreground/40 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — ações */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card p-8 md:p-12 flex flex-col justify-between gap-8"
          >
            <div>
              <h3
                className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight mb-2"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                 
                  letterSpacing: "-0.02em",
                }}
              >
                Bezerra Borges
              </h3>
              <h3
                className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                 
                  letterSpacing: "-0.02em",
                }}
              >
                Advogados.
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="/BBLAW-AP.pdf"
                download="Bezerra-Borges-Guia-Estrategico.pdf"
                className="inline-flex items-center justify-center gap-2 w-full py-4 font-light text-[11px] uppercase tracking-[0.22em] rounded-full border border-foreground bg-foreground text-background transition-all duration-300 hover:opacity-80 hover:scale-[1.02]"
              >
                Baixar guia gratuito
                <ArrowRight className="h-3 w-3" />
              </a>

              <a
                href="https://wa.me/5511982712025?text=Olá,%20gostaria%20de%20receber%20o%20guia%20estratégico%20da%20Bezerra%20Borges%20Advogados"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 font-light text-[11px] uppercase tracking-[0.22em] text-muted-foreground rounded-full border border-border transition-all duration-300 hover:text-foreground hover:border-foreground/30 hover:scale-[1.02]"
              >
                Consultar com especialista
                <ArrowUpRight className="h-3 w-3" />
              </a>

              <p className="text-[10px] text-muted-foreground text-center font-light pt-1 uppercase tracking-[0.15em]">
                Conteúdo exclusivo — sem compromisso
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
