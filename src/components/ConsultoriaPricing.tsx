"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    title: "HOLDING",
    price: "US$ 125",
    description: "Sessão de 2h para planejamento e estruturação de holding familiar e empresarial.",
    features: [
      "Análise completa da estrutura atual",
      "Recomendações personalizadas",
      "Planejamento tributário inicial",
    ],
    badge: null,
    href: "https://wa.me/5521979901686?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados",
  },
  {
    title: "OFFSHORE",
    price: "US$ 149",
    description: "Sessão de 2h para criação e otimização de estruturas offshore internacionais.",
    features: [
      "Análise de jurisdições ideais",
      "Estruturação internacional completa",
      "Compliance e otimização fiscal",
    ],
    badge: "Mais Vendido",
    href: "https://wa.me/5521979901686?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados",
  },
];

export function ConsultoriaPricing() {
  return (
    <section className="relative py-24 bg-background border-t border-border">
      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 space-y-4"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Consultoria</p>
            <h2 className="font-source-serif-pro font-light text-4xl sm:text-5xl md:text-7xl leading-tight tracking-tight text-white mb-6">
              Agende uma consultoria <br />
              <span className="italic text-white/40">agora mesmo</span>
            </h2>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative bg-background p-8 md:p-10 hover:bg-muted/20 transition-colors duration-300"
              >
                {plan.badge && (
                  <span className="absolute top-6 right-6 text-xs font-medium uppercase tracking-widest border border-foreground/30 px-3 py-1 text-foreground/60">
                    {plan.badge}
                  </span>
                )}

                <h3 className="font-source-serif-pro text-2xl md:text-3xl text-white mb-4 tracking-tight">
                  {plan.title}
                </h3>

                <p className="text-base text-white/50 mb-8 leading-relaxed font-light tracking-tight">
                  {plan.description}
                </p>

                <div className="mb-10">
                  <span className="font-source-serif-pro text-5xl md:text-6xl text-white tracking-tighter">
                    {plan.price}
                  </span>
                </div>

                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full mb-10"
                >
                  Contratar Agora
                  <ArrowRight className="h-4 w-4" />
                </a>

                <div className="pt-6 border-t border-border space-y-3">
                  {plan.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-sm text-white/50 font-light tracking-tight">
                      <Check className="w-5 h-5 text-white/20 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <p className="text-xs text-muted-foreground">
              * Valores em dólares americanos. Consultorias realizadas de forma remota ou presencial.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}