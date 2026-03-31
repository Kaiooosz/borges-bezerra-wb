"use client"

import { Shield, TrendingUp, Users, Building2, Lock, FileText } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Proteção Patrimonial Efetiva",
    description: "Blindagem lícita contra processos judiciais, credores e instabilidades econômicas através de estruturas societárias seguras."
  },
  {
    icon: TrendingUp,
    title: "Redução Tributária Legal",
    description: "Planejamento fiscal estratégico que pode reduzir significativamente a carga tributária sobre patrimônio e lucros empresariais."
  },
  {
    icon: Users,
    title: "Sucessão Familiar Planejada",
    description: "Transferência patrimonial estruturada que evita conflitos familiares, custos com inventário e problemas de sucessão."
  },
  {
    icon: Building2,
    title: "Governança Corporativa",
    description: "Estrutura profissional de gestão com separação clara entre patrimônio pessoal e empresarial, facilitando a administração."
  },
  {
    icon: Lock,
    title: "Privacidade e Confidencialidade",
    description: "Maior discrição sobre o patrimônio familiar através de estruturas societárias adequadas e legalmente constituídas."
  },
  {
    icon: FileText,
    title: "Flexibilidade Operacional",
    description: "Facilita operações internacionais, aquisições e reorganizações societárias com estrutura ágil e bem planejada."
  }
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-source-serif-pro text-4xl md:text-6xl font-extralight text-foreground mb-6 tracking-tight">
            Vantagens Estratégicas
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light tracking-tight">
            Engenharia jurídica que protege e potencializa seu patrimônio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-6xl mx-auto border border-border">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-10 bg-background hover:bg-white/[0.02] border-border transition-all duration-300 h-full flex flex-col"
            >
              <benefit.icon className="w-8 h-8 text-white mb-8 stroke-[1.5px]" />
              <h3 className="font-sans font-semibold text-lg md:text-xl text-white mb-3 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-white/50 leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
