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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Por que criar uma holding?</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto text-pretty">
            Vantagens estratégicas que transformam a gestão do seu patrimônio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 bg-white/5 border border-border rounded-lg hover:bg-white/10 transition-all duration-300 group hover:shadow-xl hover:scale-105"
            >
              <benefit.icon className="h-10 w-10 mb-4 text-foregroung group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
