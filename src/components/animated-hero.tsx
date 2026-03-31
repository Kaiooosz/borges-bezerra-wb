"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AnimatedHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Grid background — extremamente sutil como no print */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none" />

      <div className="container relative z-10 px-6 py-20 md:py-32">
        <div className="flex flex-col items-center text-center gap-10 md:gap-14">

          {/* Logo Oficial — com animação suave e fundo aprimorado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-foreground/5 blur-3xl rounded-full scale-150" />
            <img
              src="/LogoBranco.svg"
              alt="Bezerra Borges Logo"
              className="relative z-10 w-24 h-24 md:w-32 md:h-32 object-contain brightness-110"
            />
          </motion.div>

          {/* Headline — Exatamente como no print: serif, light, quebras específicas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-5xl"
          >
            <h1 className="font-source-serif-pro font-extralight tracking-tight text-white leading-[1.05] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              Transformamos<br />
              <span className="italic">complexidades</span><br />
              em oportunidades
            </h1>

            <p className="mt-8 text-sm sm:text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed tracking-tight font-light">
              Atuamos como seu aliado na proteção e no crescimento patrimonial. Com
              operações em mais de 12 países, desenvolvemos estruturas legais de alto
              rendimento em planejamento patrimonial.
            </p>
          </motion.div>

          {/* CTA Buttons — Estilo Kast refinado */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
          >
            <a
              href="https://wa.me/5521979901686?text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico%20com%20a%20Bezerra%20Borges%20Advogados"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2
                         px-8 py-4 bg-white text-black
                         border border-white
                         font-medium text-sm tracking-widest uppercase
                         hover:bg-transparent hover:text-white
                         transition-all duration-300 w-full sm:w-auto"
            >
              Agendar Diagnóstico
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://www.formsbblaw.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2
                         px-8 py-4 border border-white/20 text-white bg-transparent
                         font-medium text-sm tracking-widest uppercase
                         hover:border-white hover:bg-white hover:text-black
                         transition-all duration-300 w-full sm:w-auto"
            >
              Iniciar Projeto
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - mais minimalista */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-light">Explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-linear-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
