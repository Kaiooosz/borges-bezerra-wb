import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 pt-16 pb-10 max-w-7xl">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-5">
            <a href="/" className="inline-block">
              <img
                src="/Logo preto.svg"
                alt="Bezerra Borges Advogados"
                className="h-12 w-auto dark:hidden"
              />
              <img
                src="/LogoBranco.svg"
                alt="Bezerra Borges Advogados"
                className="h-12 w-auto hidden dark:block"
              />
            </a>
            <p className="text-sm text-muted-foreground italic leading-relaxed max-w-[200px]">
              Transformamos complexidades em oportunidades
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-5">
              Navegação
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/servicos", label: "Serviços" },
                { href: "/offshore", label: "Offshore" },
                { href: "/sobre-nos", label: "Sobre Nós" },
                { href: "/artigos", label: "Artigos" },
                { href: "/contact", label: "Contato" },
              ].map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Especialidades */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-5">
              Especialidades
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/servicos/internacionalizacao", label: "Empresas Offshore" },
                { href: "/servicos/juridico-estrategico", label: "Planejamento Tributário" },
                { href: "/servicos/internacionalizacao", label: "Contas Internacionais" },
                { href: "/servicos/cripto-fintechs", label: "Criptomoedas & Web3" },
                { href: "/servicos/planejamento-patrimonial", label: "Holdings Patrimoniais" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-5">
              Contato
            </h3>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Av. Paulista, 1636 Conj 4, 15º andar<br />
                  Cerqueira César, São Paulo-SP
                </p>
              </div>
              <a
                href="tel:+5511982712025"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>+55 11 98271-2025</span>
              </a>
              <a
                href="mailto:contato@bezerraborges.com.br"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>contato@bezerraborges.com.br</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0" />
                <span>Seg–Sex, 9h–18h</span>
              </div>
              <a
                href="https://www.instagram.com/bezerraeborges?igsh=MXFucGVpMG56bXZqYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Instagram className="h-4 w-4 shrink-0" />
                <span>@bezerraeborges</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Bezerra Borges Advogados. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/politica-de-privacidade" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
              Termos de Uso
            </Link>
            <Link href="/politica-de-cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
