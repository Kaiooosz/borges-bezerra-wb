"use client"

import React, { useState, useEffect } from "react"
import { Mail, Phone, Menu, X, Moon, Sun } from "lucide-react"

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }
 
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fecha o menu ao clicar em um link
  const closeMenu = () => setIsMenuOpen(false)

  // Previne scroll quando menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Toggle dark mode
  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-border font-serif">
      <div
        className="fixed top-0 left-0 h-1 bg-muted-foreground z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Top bar with contact info */}
      <div className="border-b border-border">
        <div className="mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-chart-1">
            <a href="tel:+5511943665367" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="h-3 w-3" />
              <span>(11) 94366-5367</span>
            </a>
            <a
              href="mailto:contato@bezerraborges.com.br"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">contato@bezerraborges.com.br</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 z-50">
            <div className="shrink-0">
              <img 
                src="/LogoBranco.svg" 
                alt="BB Logo" 
                className="h-12 w-12 md:h-16 md:w-16"
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
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <a 
              href="https://wa.me/5511943665367" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-all font-semibold text-sm hover:scale-105 duration-300"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex md:hidden items-center gap-3 z-50">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[105px] bg-background/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-4">
          <a 
            href="/" 
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
            onClick={closeMenu}
          >
            Home
          </a>
          
          <a 
            href="/servicos" 
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
            onClick={closeMenu}
          >
            Serviços
          </a> 

          <a 
            href="/sobre-nos" 
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
            onClick={closeMenu}
          >
            Sobre Nós
          </a>

          <a 
            href="/Holding" 
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
            onClick={closeMenu}
          >
            Holding
          </a>
          
          <a 
            href="/offshore" 
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
            onClick={closeMenu}
          >
            Offshore
          </a>

          <a 
            href="/artigos" 
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
            onClick={closeMenu}
          >
            Artigos
          </a>

          <a 
            href="/contact" 
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
            onClick={closeMenu}
          >
            Contato
          </a>

          {/* Mobile CTA Button */}
          <a 
            href="https://wa.me/5511943665367" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all font-semibold text-lg hover:scale-105 duration-300"
            onClick={closeMenu}
          >
            Agendar
          </a>
        </nav>
      </div>
    </header>
  )
}