"use client"

const holdingTypes = [
  {
    title: "Holding Patrimonial",
    description: "Focada na gestão e proteção de bens imóveis, investimentos e ativos da família.",
    features: ["Gestão de imóveis", "Proteção de ativos", "Planejamento sucessório"]
  },
  {
    title: "Holding Empresarial",
    description: "Controla participações societárias e coordena operações de múltiplas empresas do grupo.",
    features: ["Controle societário", "Governança corporativa", "Estratégia de grupo"]
  },
  {
    title: "Holding Mista",
    description: "Combina gestão patrimonial e empresarial em uma única estrutura integrada.",
    features: ["Gestão completa", "Eficiência tributária", "Flexibilidade máxima"]
  },
  {
    title: "Holding Internacional",
    description: "Estrutura offshore para proteção e internacionalização do patrimônio familiar.",
    features: ["Jurisdições seguras", "Otimização fiscal", "Privacidade ampliada"]
  }
]

export function HoldingTypes() {
  return (
    <section id="types" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-tight bg-gradient-to-r from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent mb-4">
            Tipos de Holdings
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Estruturas personalizadas para cada necessidade patrimonial e empresarial
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border max-w-5xl mx-auto">
          {holdingTypes.map((type, index) => (
            <div
              key={index}
              className="p-8 bg-background hover:bg-muted/30 transition-colors duration-300"
            >
              <h3 className="font-source-serif-pro text-xl font-light mb-3 tracking-tight">{type.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{type.description}</p>
              <ul className="space-y-2">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="text-foreground/40 mt-0.5">—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
