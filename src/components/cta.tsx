"use client"

import { ArrowRight, Mail, Phone } from "lucide-react"

export function Cta() {
  return (
    <section id="contact" className="py-20 md:py-32 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            Pronto para Estruturar Sua Holding?
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-pretty">
            Agende uma consultoria estratégica e descubra como uma holding pode transformar a gestão do seu patrimônio.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:contato@bezerraborges.com.br"
              className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Mail className="w-6 h-6 text-white mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">Email</h3>
              <p className="text-zinc-400 text-sm">contato@bezerraborges.com.br</p>
            </a>

            <a
              href="tel:+5511943665367"
              className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Phone className="w-6 h-6 text-white mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">Telefone</h3>
              <p className="text-zinc-400 text-sm">+55 (11) 94366-5367</p>
            </a>
          </div>

          <button className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all font-semibold hover:scale-110 hover:shadow-xl">
            Agendar Consultoria Paga ($125)
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
