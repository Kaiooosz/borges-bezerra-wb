"use client"

import React, { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((window.scrollY / totalHeight) * 100)
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset"
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/servicos", label: "Serviços" },
    { href: "/sobre-nos", label: "Sobre Nós" },
    { href: "/Holding", label: "Holding" },
    { href: "/offshore", label: "Offshore" },
    { href: "/artigos", label: "Artigos" },
    { href: "/contact", label: "Contato" },
  ]

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[1px] bg-foreground/30 z-[60] transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-6 md:px-10 max-w-7xl">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* Logo — white when over dark hero (not scrolled), theme-adaptive when scrolled */}
            <a href="/" className="flex items-center z-50 shrink-0">
              <img
                src={(!scrolled || isDark) ? "/LogoBranco.svg" : "/Logo preto.svg"}
                alt="Bezerra Borges Advogados"
                className="h-10 md:h-11 w-auto transition-opacity duration-300"
              />
            </a>

            {/* Desktop Navigation — UPPERCASE like landing */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] font-light uppercase tracking-[0.2em] text-muted-foreground/80 hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition-all duration-200 hover:scale-[1.05]"
                style={isDark
                  ? { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }
                  : { background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.15)", color: "rgba(0,0,0,0.6)" }
                }
                aria-label="Alternar tema"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              <a
                href="https://wa.me/5521979901686?text=Olá!%20Tenho%20interesse%20em%20proteção%20patrimonial%20e%20planejamento%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados.%20Gostaria%20de%20agendar%20uma%20consulta%20inicial."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 font-light text-[10px] uppercase tracking-[0.22em] rounded-full transition-all duration-200 hover:scale-[1.02]"
                style={isDark
                  ? { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(10px)" }
                  : { background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.15)", color: "#0a0a0a" }
                }
              >
                Iniciar Agora
              </a>
            </div>

            {/* Mobile actions */}
            <div className="flex md:hidden items-center gap-1 z-50">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition-all duration-200"
                style={isDark
                  ? { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }
                  : { background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.15)", color: "rgba(0,0,0,0.6)" }
                }
                aria-label="Alternar tema"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-light uppercase tracking-[0.3em] text-foreground hover:text-muted-foreground transition-colors duration-200"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/5521979901686?text=Olá!%20Tenho%20interesse%20em%20proteção%20patrimonial%20e%20planejamento%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados.%20Gostaria%20de%20agendar%20uma%20consulta%20inicial."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-10 py-4 font-light text-[10px] uppercase tracking-[0.22em] rounded-full transition-all duration-200"
              style={isDark
                ? { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(10px)" }
                : { background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.15)", color: "#0a0a0a" }
              }
              onClick={closeMenu}
            >
              Iniciar Agora
            </a>
          </div>
        </div>
      )}
    </>
  )
}
