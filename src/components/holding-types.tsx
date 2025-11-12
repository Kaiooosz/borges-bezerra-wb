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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Tipos de Holdings</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto text-pretty">
            Estruturas personalizadas para cada necessidade patrimonial e empresarial
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {holdingTypes.map((type, index) => (
            <div
              key={index}
              className="p-8 bg-white/5 border border-border rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">{type.description}</p>
              <ul className="space-y-2">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 --ring text-sm">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
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
