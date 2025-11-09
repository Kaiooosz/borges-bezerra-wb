"use client"

import React, { useState, useEffect } from "react"
import Link from 'next/link'
import { Mail, Phone } from "lucide-react"

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div
        className="fixed top-0 left-0 h-1 bg-white/30 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      {/* Top bar with contact info */}
      <div className="border-b border-white/10">
        <div className="mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm text-zinc-400">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a href="tel:+5511943665367" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-3 w-3" />
                <span>(11) 94366-5367</span>
              </a>
              <a
                href="mailto:contato@bezerraborges.com.br"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-3 w-3" />
                <span className="hidden sm:inline">contato@bezerraborges.com.br</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <img 
                src="/LogoBranco.svg" 
                alt="BB Logo" 
                className="h-14 w-14 md:h-16 md:w-16"
              />
            </div> 
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-zinc-300 hover:text-white transition-colors">
              Home
            </Link>
            
            <Link href="/servicos" className="text-sm text-zinc-300 hover:text-white transition-colors">
              Serviços
            </Link> 

            <Link href="/sobre-nos" className="text-sm text-zinc-300 hover:text-white transition-colors">
              Sobre Nós
            </Link>

            <Link href="/Holding" className="text-sm text-zinc-300 hover:text-white transition-colors">
              Holding
            </Link>
            
            <Link href="/offshore" className="text-sm text-zinc-300 hover:text-white transition-colors">
              Offshore
            </Link>

            <Link href="/contact" className="text-sm text-zinc-300 hover:text-white transition-colors">
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <a 
            href="https://wa.me/5511943665367" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-all font-semibold text-sm hover:scale-105 duration-300"
          >
            Agendar
          </a>
        </div>
      </div>
    </header>
  )
}