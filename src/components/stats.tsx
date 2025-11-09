"use client"

export function Stats() {
  return (
    <section className="py-20 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-lg">
            <div className="text-5xl font-bold text-white mb-3">10+</div>
            <p className="text-zinc-400">Anos de Experiência</p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-lg">
            <div className="text-5xl font-bold text-white mb-3">500+</div>
            <p className="text-zinc-400">Holdings Estruturadas</p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-lg">
            <div className="text-5xl font-bold text-white mb-3">R$ 2B+</div>
            <p className="text-zinc-400">em Patrimônio Protegido</p>
          </div>
        </div>
      </div>
    </section>
  )
}
