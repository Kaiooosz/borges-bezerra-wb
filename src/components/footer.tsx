import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Logo */}
          <div className="flex items-start justify-start">
            <a href="/" className="inline-block z-50">
              <img
                src="/Logo preto.svg"
                alt="BB Logo"
                className="h-14 w-14 md:h-20 md:w-20 dark:hidden"
              />
              <img
                src="/LogoBranco.svg"
                alt="BB Logo"
                className="h-14 w-14 md:h-20 md:w-20 hidden dark:block"
              />
            </a>
          </div>

          {/* Navegação */}
          <div className="">
            <h3 className="font-source-serif-pro text-lg text-white mb-6 uppercase tracking-widest">Navegação</h3>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors font-light tracking-tight">Home</Link>
              <Link href="/servicos" className="text-sm text-white/50 hover:text-white transition-colors font-light tracking-tight">Serviços</Link>
              <Link href="/offshore" className="text-sm text-white/50 hover:text-white transition-colors font-light tracking-tight">Offshore</Link>
              <Link href="/sobre-nos" className="text-sm text-white/50 hover:text-white transition-colors font-light tracking-tight">Sobre Nós</Link>
              <Link href="/artigos" className="text-sm text-white/50 hover:text-white transition-colors font-light tracking-tight">Artigos</Link>
              <Link href="/contact" className="text-sm text-white/50 hover:text-white transition-colors font-light tracking-tight">Contato</Link>
            </nav>
          </div>

          {/* Especialidades */}
          <div className="">
            <h3 className="font-source-serif-pro text-lg text-white mb-6 uppercase tracking-widest">Especialidades</h3>
            <nav className="flex flex-col gap-4">
              <Link href="/servicos/internacionalizacao" className="text-sm text-white/50 hover:text-white transition-colors font-light tracking-tight">Empresas Offshore</Link>
              <Link href="/servicos/juridico-estrategico" className="text-sm text-white/50 hover:text-white transition-colors font-light tracking-tight">Planejamento Tributário</Link>
              <Link href="/servicos/internacionalizacao" className="text-sm text-white/50 hover:text-white transition-colors font-light tracking-tight">Contas Internacionais</Link>
              <Link href="/servicos/cripto-fintechs" className="text-sm text-white/50 hover:text-white transition-colors font-light tracking-tight">Criptomoedas & Web3</Link>
              <Link href="/servicos/planejamento-patrimonial" className="text-sm text-white/50 hover:text-white transition-colors font-light tracking-tight">Holdings Patrimoniais</Link>
            </nav>
          </div>

          {/* Contato */}
          <div className="">
            <h3 className="font-source-serif-pro text-lg text-white mb-6 uppercase tracking-widest">Contato</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-foreground mt-1 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Av. Paulista, 1636 Conj 4, 15º andar<br />
                  Cerqueira César, São Paulo-SP
                </p>
              </div>
              <a
                href="tel:+5521979901686"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4 text-foreground" />
                <span>+55 21 97990-1686</span>
              </a>
              <a
                href="mailto:contato@bezerraborges.com.br"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4 text-foreground" />
                <span>contato@bezerraborges.com.br</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground border-t border-border/50 pt-2 mt-2">
                <Clock className="h-4 w-4 text-foreground" />
                <span>Seg-Sex 9h-18h</span>
              </div>
              <a
                href="https://www.instagram.com/bezerraeborges?igsh=MXFucGVpMG56bXZqYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-4 w-4 text-foreground" />
                <span>@bezerraeborges</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 Bezerra Borges Advogados.
              </p>
              <div className="hidden sm:block w-px h-4 bg-border"></div>
              <p className="text-sm text-white/30 italic font-light">
                Transformando complexidades em oportunidades
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/politica-de-privacidade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacidade
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Termos
              </Link>
              <Link href="/politica-de-cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
