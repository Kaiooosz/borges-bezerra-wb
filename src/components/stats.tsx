"use client"

const metrics = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "500+", label: "Holdings Estruturadas" },
  { value: "R$ 2B+", label: "em Patrimônio Protegido" },
]

export function Stats() {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {metrics.map((m, i) => (
            <div key={i} className="p-12 bg-background text-center hover:bg-muted/30 transition-colors duration-300">
              <div className="font-source-serif-pro text-4xl md:text-6xl font-light mb-2 tracking-tight">
                {m.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
