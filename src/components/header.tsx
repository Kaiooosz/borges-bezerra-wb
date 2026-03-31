"use client"

import React, { useState, useEffect } from "react"
import { Mail, Phone, Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-border font-sans">
        <div
          className="fixed top-0 left-0 h-1 bg-muted-foreground z-50 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Top bar with contact info */}
        <div className="border-b border-border">
          <div className="mx-auto px-4 py-2">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
              <a href="tel:+5521979901686" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="h-3 w-3" />
                <span>+55 21 97990-1686</span>
              </a>
              <a
                href="mailto:contato@bezerraborges.com.br"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-3 w-3" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>

              <a href="/servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Serviços
              </a>

              <a href="/sobre-nos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sobre Nós
              </a>

              <a href="/Holding" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Holding
              </a>

              <a href="/offshore" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Offshore
              </a>

              <a href="/artigos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Artigos
              </a>

              <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </a>
            </nav>

            {/* Desktop CTA and Theme Toggle */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-muted rounded-sm transition-colors"
                aria-label="Toggle theme"
              >
                {mounted ? (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />) : <div className="h-5 w-5" />}
              </button>

              <a
                href="https://www.formsbblaw.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !py-2 !px-5 text-xs"
              >
                Iniciar Projeto
              </a>

              <a
                href="https://wa.me/5521979901686?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2 !px-5 text-xs"
              >
                Agendar
              </a>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="flex md:hidden items-center gap-3 z-50">
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-muted rounded-sm transition-colors"
                aria-label="Toggle theme"
              >
                {mounted ? (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />) : <div className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-muted rounded-sm transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-0 bg-popover/95 backdrop-blur-sm z-40"
            onClick={closeMenu}
          />

          {/* Mobile Menu Content */}
          <div className="md:hidden fixed inset-0 top-[105px] z-40 overflow-y-auto bg-popover font-sans">
            <nav className="flex flex-col items-center justify-start min-h-full gap-5 px-4 py-8 pb-20">
              <a
                href="/"
                className="text-3xl font-source-serif-pro text-white tracking-tight transition-colors duration-200 hover:opacity-60"
                onClick={closeMenu}
              >
                Home
              </a>

              <a
                href="/servicos"
                className="text-3xl font-source-serif-pro text-white tracking-tight transition-colors duration-200 hover:opacity-60"
                onClick={closeMenu}
              >
                Serviços
              </a>

              <a
                href="/sobre-nos"
                className="text-3xl font-source-serif-pro text-white tracking-tight transition-colors duration-200 hover:opacity-60"
                onClick={closeMenu}
              >
                Sobre Nós
              </a>

              <a
                href="/Holding"
                className="text-3xl font-source-serif-pro text-white tracking-tight transition-colors duration-200 hover:opacity-60"
                onClick={closeMenu}
              >
                Holding
              </a>

              <a
                href="/offshore"
                className="text-3xl font-source-serif-pro text-white tracking-tight transition-colors duration-200 hover:opacity-60"
                onClick={closeMenu}
              >
                Offshore
              </a>

              <a
                href="/artigos"
                className="text-2xl font-light text-popover-foreground tracking-tight transition-colors duration-200 hover:opacity-60"
                onClick={closeMenu}
              >
                Artigos
              </a>

              <a
                href="/contact"
                className="text-3xl font-source-serif-pro text-white tracking-tight transition-colors duration-200 hover:opacity-60"
                onClick={closeMenu}
              >
                Contato
              </a>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col gap-3 mt-8 w-full max-w-xs mx-auto">
                <a
                  href="https://www.formsbblaw.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-popover-foreground text-popover-foreground rounded-none hover:bg-popover-foreground hover:text-popover transition-colors font-medium text-base text-center"
                  onClick={closeMenu}
                >
                  Iniciar Projeto
                </a>

                <a
                  href="https://wa.me/5521979901686?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-popover-foreground text-popover rounded-none hover:opacity-80 transition-opacity font-medium text-base text-center"
                  onClick={closeMenu}
                >
                  Agendar
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}