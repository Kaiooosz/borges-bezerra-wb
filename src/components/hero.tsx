"use client"

import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-border">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.88_0_0_/_0.4)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.88_0_0_/_0.4)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none dark:opacity-10" />

      <div className="relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="mb-12 flex justify-center [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-48 w-auto opacity-90"
            >
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Animac%CC%A7a%CC%83o%20logo-fj6CGOTzhzrRYqVrNCXk6nZpFllLH3.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none bg-gradient-to-r from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent py-4">
            Holdings Patrimoniais e Empresariais:{" "}
            <span className="italic">Proteja e Multiplique</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Estruture seu patrimônio e empresas com segurança jurídica, eficiência tributária e planejamento sucessório inteligente. A BBLAW transforma complexidade em estratégia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://wa.me/5521979901686?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium hover:opacity-80 transition-opacity duration-200"
            >
              Agendar Consultoria Paga ($125)
              <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/servicos"
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-medium hover:bg-muted/30 transition-colors duration-200"
            >
              Conhecer Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}