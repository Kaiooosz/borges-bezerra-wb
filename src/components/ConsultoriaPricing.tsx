"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function ConsultoriaPricing() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <div className="inline-block">
              <span className="text-sm font-medium text-chart-1 uppercase tracking-wider px-4 py-2 rounded-full border border-white/10 bg-white/5">
                Consultoria
              </span>
            </div>
            <h2 className="font-source-serif-pro text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight">
              Agende uma Consultoria
              <br />
              <span className="font-bold">Agora Mesmo!</span>
            </h2>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Holding Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/10 to-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-background backdrop-blur-sm border-2 border-foreground/30 rounded-3xl p-8 md:p-10 hover:border-foreground/50 transition-all duration-300">
                <h3 className="font-source-serif-pro text-3xl md:text-4xl font-bold text-foreground mb-4">
                  HOLDING
                </h3>
                
                <p className="text-chart-01 mb-8 leading-relaxed">
                  Sessão de 2h para planejamento e estruturação de holding familiar e empresarial.
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="font-source-serif-pro text-5xl md:text-6xl font-bold text-foreground">
                      US$ 125
                    </span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-foreground hover:bg-chart-2 text-background font-medium text-lg h-14 rounded-xl transition-all duration-300"
                >
                  Contratar Agora
                </Button>

                <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-chart-1">
                      Análise completa da estrutura atual
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-chart-1">
                      Recomendações personalizadas
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-chart-1">
                      Planejamento tributário inicial
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Offshore Card - Mais Vendido */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group"
            >
              {/* Badge Mais Vendido */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <span className="inline-block bg-foreground text-background text-xs font-bold uppercase tracking-wider px-6 py-2 rounded-full">
                  Mais Vendido
                </span>
              </div>

              <div className="absolute inset-0 bg-linear-to-br from-foreground/20 to-foreground/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-background backdrop-blur-sm border-2 border-foreground/30 rounded-3xl p-8 md:p-10 hover:border-foreground/50 transition-all duration-300">
                <h3 className="font-source-serif-pro text-3xl md:text-4xl font-bold text-foreground mb-4">
                  OFFSHORE
                </h3>
                
                <p className="text-chart-01 mb-8 leading-relaxed">
                  Sessão de 2h para criação e otimização de estruturas offshore internacionais.
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="font-source-serif-pro text-5xl md:text-6xl font-bold text-foreground">
                      US$ 149
                    </span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-foreground hover:bg-chart-2 text-background font-medium text-lg h-14 rounded-xl transition-all duration-300 shadow-lg shadow-foreground/20"
                >
                  Contratar Agora
                </Button>

                <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-chart-1">
                      Análise de jurisdições ideais
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-chart-1">
                      Estruturação internacional completa
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-chart-1">
                      Compliance e otimização fiscal
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-chart-1">
              * Valores em dólares americanos. Consultorias realizadas de forma remota ou presencial.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}