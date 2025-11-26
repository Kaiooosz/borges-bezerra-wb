import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Globe, FileText, Users } from "lucide-react";


export default function OffshoreComplianceCard({
  title = "Compliance & Transparência",
  items = [
    { title: "Conformidade", description: "Políticas internas e auditorias periódicas", icon: ShieldCheck },
    { title: "Transparência", description: "Relatórios claros para stakeholders", icon: Globe },
    {
      title: "Declarações (DIRPF, CBE, e-Financeira)",
      description: "Suporte completo para declarações brasileiras",
      icon: FileText,
    },
    { title: "AML / KYC", description: "Procedimentos robustos de prevenção", icon: Users },
    { title: "Cooperação com Autoridades", description: "Compliance e cooperação internacional" },
  ],
  ctaText = "Agende Consultoria ($125)",

}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.36 }}
      className="w-full max-w-lg mx-auto"
    >
      <Card className="rounded-2xl p-6 shadow-2xl dark:shadow-none mb-30">
        <CardHeader className="mb-4">
          <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-4">
          {items.map((it, idx) => {
            const Icon = it.icon || null;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-chart-5 transition-colors"
              >
                <div className="shrink-0">
                  {Icon ? (
                    <div className="w-10 h-10 rounded-xl bg-background dark:bg-foreground flex items-center justify-center">
                      <Icon className="w-5 h-5 text-chart-4 dark:text-background" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-chart-5 dark:text-slate-100">{it.title}</h4>
                  {it.description && (
                    <p className="text-sm text-chart-2 dark:text-chart-2 mt-1">{it.description}</p>
                  )}
                </div>
              </div>
            );
          })}

          <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-chart-2 dark:text-chart-2">Totalmente compatível com normas brasileiras e internacionais.</p>

            <div className="ml-auto">
              {/* Button style follows shadcn/ui conventions. We add a small utility to toggle dark/light-friendly look */}
              <Button
                className="rounded-xl px-5 py-2 text-sm font-semibold bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-chart-3 dark:text-background dark:border-slate-800"
              >
                <a
                      href="https://wa.me/5511943665367"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agendar consultoria ($125)
                    </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}
