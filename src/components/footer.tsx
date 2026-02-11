import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg--chart-5 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 z-50">
            <div className="shrink-0">
              {/* Logo preta para tema claro */}
              <img
                src="/Logo preto.svg"
                alt="BB Logo"
                className="h-14 w-14 md:h-20 md:w-20 dark:hidden"
              />
              {/* Logo branca para tema escuro */}
              <img
                src="/LogoBranco.svg"
                alt="BB Logo"
                className="h-14 w-14 md:h-20 md:w-20 hidden dark:block"
              />
            </div>
          </a>

          {/* Navegação */}
          <div className="p-6 border border-border rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Navegação</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-zinc-400 hover:text-foreground transition-colors">Home</Link>
              <Link href="/servicos" className="text-sm text-zinc-400 hover:text-foreground transition-colors">Serviços</Link>
              <Link href="/offshore" className="text-sm text-zinc-400 hover:text-foreground transition-colors">Offshore</Link>
              <Link href="/sobre-nos" className="text-sm text-zinc-400 hover:text-foreground transition-colors">Sobre Nós</Link>
              <Link href="/artigos" className="text-sm text-zinc-400 hover:text-foreground transition-colors">Artigos</Link>
              <Link href="/contact" className="text-sm text-zinc-400 hover:text-foreground transition-colors">Contato</Link>
            </nav>
          </div>

          {/* Especialidades */}
          <div className="p-6 border border-border rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Especialidades</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/servicos/empresas-offshore" className="text-sm text-zinc-400 hover:text-foreground transition-colors">Empresas Offshore</Link>
              <Link href="/servicos/planejamento-tributario" className="text-sm text-zinc-400 hover:text-foreground transition-colors">Planejamento Tributário</Link>
              <Link href="/servicos/contas-internacionais" className="text-sm text-zinc-400 hover:text-foreground transition-colors">Contas Internacionais</Link>
              <Link href="/servicos/criptomoedas-web3" className="text-sm text-zinc-400 hover:text-foreground transition-colors">Criptomoedas & Web3</Link>
              <Link href="/servicos/holdings-patrimoniais" className="text-sm text-zinc-400 hover:text-foreground transition-colors">Holdings Patrimoniais</Link>
            </nav>
          </div>

          {/* Contato em quadrado */}
          <div className="p-6 border border-border rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Contato</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text--chart-1 mt-1 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Av. Paulista, 1636 Conj 4, 15º andar<br />
                  Cerqueira César, São Paulo-SP
                </p>
              </div>
              <a
                href="tel:+5511982712025"
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4 text--chart-1" />
                <span>+55 11 98271-2025</span>
              </a>
              <a
                href="mailto:contato@bezerraborges.com.br"
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4 text--chart-1" />
                <span>contato@bezerraborges.com.br</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <Clock className="h-4 w-4 text--chart-1" />
                <span>Seg-Sex 9h-18h</span>
              </div>
              <a
                href="https://www.instagram.com/bezerraeborges?igsh=MXFucGVpMG56bXZqYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-foreground transition-colors"
              >
                <Instagram className="h-4 w-4 text--chart-1" />
                <span>@bezerraeborges</span>
              </a>
            </div>
          </div>
        </div>

        {/* Frase final */}
        <p className="text-sm text--chart-1 leading-relaxed italic mb-6">
          Transformamos complexidades em oportunidades
        </p>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-600">
              © 2025 Bezerra Borges Advogados. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/politica-de-privacidade" className="text-sm text-zinc-600 hover:text-foreground transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-sm text-zinc-600 hover:text-foreground transition-colors">
                Termos de Uso
              </Link>
              <Link href="/politica-de-cookies" className="text-sm text-zinc-600 hover:text-foreground transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
