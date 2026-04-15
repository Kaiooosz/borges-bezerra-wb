"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, FileText, Users, ArrowRight } from "lucide-react";

const defaultItems = [
  {
    title: "Conformidade",
    description: "Políticas internas e auditorias periódicas",
    icon: ShieldCheck,
  },
  {
    title: "Transparência",
    description: "Relatórios claros para stakeholders",
    icon: Globe,
  },
  {
    title: "Declarações (DIRPF, CBE, e-Financeira)",
    description: "Suporte completo para declarações brasileiras",
    icon: FileText,
  },
  {
    title: "AML / KYC",
    description: "Procedimentos robustos de prevenção",
    icon: Users,
  },
  {
    title: "Cooperação com Autoridades",
    description: "Compliance e cooperação internacional",
    icon: ShieldCheck,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, type: "tween" as const },
  },
};

export default function OffshoreComplianceCard({
  title = "Compliance & Transparência",
  items = defaultItems,
}: {
  title?: string;
  items?: typeof defaultItems;
}) {
  return (
    <section className="py-16 px-4 border-t border-border">
      <div className="max-w-2xl mx-auto">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              Estrutura Legal
            </p>
            <h2 className="font-source-serif-pro text-3xl font-light tracking-tight text-foreground">
              {title}
            </h2>
          </motion.div>

          {/* Items */}
          <motion.div
            variants={containerVariants}
            className="border-t border-border"
          >
            {items.map((it, idx) => {
              const Icon = it.icon || ShieldCheck;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-5 py-5 border-b border-border group"
                >
                  {/* Number */}
                  <span className="text-xs font-medium text-muted-foreground tabular-nums w-5 shrink-0 mt-0.5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-foreground" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-foreground leading-snug">
                      {it.title}
                    </h4>
                    {it.description && (
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {it.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
          >
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
              Totalmente compatível com normas brasileiras e internacionais.
            </p>
            <a
              href="https://wa.me/5511982712025?text=Olá!%20Tenho%20interesse%20em%20soluções%20offshore%20e%20internacionalização%20com%20a%20Bezerra%20Borges%20Advogados.%20Gostaria%20de%20uma%20análise%20da%20minha%20estrutura."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity whitespace-nowrap group"
            >
              Agendar consultoria
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
}
