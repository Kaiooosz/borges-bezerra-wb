"use client"

import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="mb-12 flex justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-48 w-auto opacity-90 drop-shadow-2xl"
            >
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Animac%CC%A7a%CC%83o%20logo-fj6CGOTzhzrRYqVrNCXk6nZpFllLH3.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
            Holdings Patrimoniais e Empresariais: <span className="italic text-zinc-400">Proteja e Multiplique</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto text-pretty">
            Estruture seu patrimônio e empresas com segurança jurídica, eficiência tributária e planejamento sucessório inteligente. A BBLAW transforma complexidade em estratégia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="group px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all font-semibold flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl duration-300">
              Agendar Consultoria Paga ($125)
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-foregroung rounded-full hover:bg-white/10 transition-all font-semibold hover:scale-105 duration-300">
              Baixar Guia Completo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}