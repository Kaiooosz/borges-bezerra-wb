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
    <section id="process" className="py-20 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Nosso processo de implementação</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto text-pretty">
            Do planejamento à execução, cuidamos de cada detalhe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-5xl font-bold text-white/10 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
