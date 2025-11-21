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

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-border font-serif">
        <div
          className="fixed top-0 left-0 h-1 bg-muted-foreground z-50 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
        
        {/* Top bar with contact info */}
        <div className="border-b border-border">
          <div className="mx-auto px-4 py-2">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
              <a href="tel:+5511943665367" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="h-3 w-3" />
                <span>(11) 94366-5367</span>
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
                <img 
                  src="/LogoBranco.svg" 
                  alt="BB Logo" 
                  className="h-14 w-14 md:h-20 md:w-20"
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
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-0 bg-popover/95 backdrop-blur-sm z-40"
            onClick={closeMenu}
          />

          {/* Mobile Menu Content */}
          <div className="md:hidden fixed inset-0 top-[105px] z-40 overflow-y-auto bg-popover font-serif">
            <nav className="flex flex-col items-center justify-start min-h-full gap-5 px-4 py-8 pb-20">
              <a 
                href="/" 
                className="text-2xl font-bold text-popover-foreground transition-all duration-300 hover:scale-110"
                style={{ 
                  filter: 'drop-shadow(0 0 15px hsl(var(--popover-foreground) / 0.6)) drop-shadow(0 0 25px hsl(var(--popover-foreground) / 0.4))'
                }}
                onClick={closeMenu}
              >
                Home
              </a>
              
              <a 
                href="/servicos" 
                className="text-2xl font-bold text-popover-foreground transition-all duration-300 hover:scale-110"
                style={{ 
                  filter: 'drop-shadow(0 0 15px hsl(var(--popover-foreground) / 0.6)) drop-shadow(0 0 25px hsl(var(--popover-foreground) / 0.4))'
                }}
                onClick={closeMenu}
              >
                Serviços
              </a> 

              <a 
                href="/sobre-nos" 
                className="text-2xl font-bold text-popover-foreground transition-all duration-300 hover:scale-110"
                style={{ 
                  filter: 'drop-shadow(0 0 15px hsl(var(--popover-foreground) / 0.6)) drop-shadow(0 0 25px hsl(var(--popover-foreground) / 0.4))'
                }}
                onClick={closeMenu}
              >
                Sobre Nós
              </a>

              <a 
                href="/Holding" 
                className="text-2xl font-bold text-popover-foreground transition-all duration-300 hover:scale-110"
                style={{ 
                  filter: 'drop-shadow(0 0 15px hsl(var(--popover-foreground) / 0.6)) drop-shadow(0 0 25px hsl(var(--popover-foreground) / 0.4))'
                }}
                onClick={closeMenu}
              >
                Holding
              </a>
              
              <a 
                href="/offshore" 
                className="text-2xl font-bold text-popover-foreground transition-all duration-300 hover:scale-110"
                style={{ 
                  filter: 'drop-shadow(0 0 15px hsl(var(--popover-foreground) / 0.6)) drop-shadow(0 0 25px hsl(var(--popover-foreground) / 0.4))'
                }}
                onClick={closeMenu}
              >
                Offshore
              </a>

              <a 
                href="/artigos" 
                className="text-2xl font-bold text-popover-foreground transition-all duration-300 hover:scale-110"
                style={{ 
                  filter: 'drop-shadow(0 0 15px hsl(var(--popover-foreground) / 0.6)) drop-shadow(0 0 25px hsl(var(--popover-foreground) / 0.4))'
                }}
                onClick={closeMenu}
              >
                Artigos
              </a>

              <a 
                href="/contact" 
                className="text-2xl font-bold text-popover-foreground transition-all duration-300 hover:scale-110"
                style={{ 
                  filter: 'drop-shadow(0 0 15px hsl(var(--popover-foreground) / 0.6)) drop-shadow(0 0 25px hsl(var(--popover-foreground) / 0.4))'
                }}
                onClick={closeMenu}
              >
                Contato
              </a>

              {/* Mobile CTA Button */}
              <a 
                href="https://wa.me/5511943665367" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 px-10 py-4 bg-popover-foreground text-popover rounded-full hover:opacity-90 transition-all font-bold text-xl hover:scale-110 duration-300 shadow-lg"
                style={{ 
                  filter: 'drop-shadow(0 0 20px hsl(var(--popover-foreground) / 0.5))'
                }}
                onClick={closeMenu}
              >
                Agendar
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  )
}