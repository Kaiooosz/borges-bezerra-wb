"use client"

import { ArrowRight, Mail, Phone } from "lucide-react"

export function Cta() {
  return (
    <section id="contact" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="font-source-serif-pro font-extralight text-4xl md:text-6xl tracking-tight text-white mb-6">
            Pronto para Estruturar Sua Liberdade?
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto text-pretty font-light tracking-tight">
            Agende uma consultoria estratégica e descubra como uma estrutura internacional pode transformar a gestão do seu patrimônio.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:contato@bezerraborges.com.br"
              className="p-8 bg-muted/20 border border-white/5 hover:bg-white/[0.02] transition-colors"
            >
              <Mail className="w-6 h-6 text-white mb-4 mx-auto opacity-50" />
              <h3 className="font-source-serif-pro text-xl text-white mb-2">Email</h3>
              <p className="text-white/40 text-sm font-light">contato@bezerraborges.com.br</p>
            </a>

            <a
              href="https://wa.me/5511982712025?text=Olá!%20Tenho%20interesse%20em%20agendar%20uma%20consultoria%20estratégica%20com%20a%20Bezerra%20Borges%20Advogados%20para%20discutir%20minha%20situação%20patrimonial."
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-muted/20 border border-white/5 hover:bg-white/[0.02] transition-colors"
            >
              <Phone className="w-6 h-6 text-white mb-4 mx-auto opacity-50" />
              <h3 className="font-source-serif-pro text-xl text-white mb-2">WhatsApp</h3>
              <p className="text-white/40 text-sm font-light">+55 11 98271-2025</p>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5511982712025?text=Olá!%20Tenho%20interesse%20em%20agendar%20uma%20consultoria%20estratégica%20com%20a%20Bezerra%20Borges%20Advogados%20para%20discutir%20minha%20situação%20patrimonial."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Consultoria Paga ($125)
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://www.formsbblaw.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Iniciar Projeto
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
