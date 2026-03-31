"use client"

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico Patrimonial",
    description: "Análise completa do patrimônio familiar, estrutura atual e objetivos de proteção."
  },
  {
    number: "02",
    title: "Planejamento Estratégico",
    description: "Desenvolvimento da estrutura ideal de holding considerando aspectos fiscais, sucessórios e de proteção."
  },
  {
    number: "03",
    title: "Implementação",
    description: "Constituição da holding, transferência de ativos e formalização de toda documentação necessária."
  },
  {
    number: "04",
    title: "Gestão Contínua",
    description: "Suporte permanente para governança, compliance fiscal e ajustes estratégicos conforme necessidade."
  }
]

export function ProcessSteps() {
  return (
    <section id="process" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-tight bg-gradient-to-r from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent mb-4">
            Nosso Caminho
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Do planejamento à execução, cuidamos de cada detalhe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-6xl mx-auto border border-border">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 bg-background hover:bg-muted/30 transition-colors duration-300"
            >
              <div className="text-6xl font-light text-foreground/8 mb-4 leading-none">{step.number}</div>
              <h3 className="text-base font-medium mb-3 tracking-tight">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
