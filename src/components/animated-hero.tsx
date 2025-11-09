"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AnimatedHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative z-10 px-4 py-32">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          {/* Animated Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-square"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            >
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Animac%CC%A7a%CC%83o%20logo-rkyssQp7IxgG0wZMm1WolGyZRoYVF1.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>

          {/* Animated Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 md:space-y-6"
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight text-balance px-4">
              Transformamos{" "}
              <span className="italic text-muted-foreground">
                complexidades
              </span>
              <br />
              em <span className="font-bold">oportunidades</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
              Proteção patrimonial, internacionalização e estruturação de
              negócios com estratégia jurídica inteligente
            </p>
          </motion.div>

          {/* Animated CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90 text-base w-full sm:w-auto"
            >
              <Link href="#contato">
                Agendar Diagnóstico
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-base bg-transparent w-full sm:w-auto"
            >
              <Link href="/servicos">Conhecer Serviços</Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 pt-8 text-xs sm:text-sm text-muted-foreground px-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
              <span>Atuação em 12+ países</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
              <span>R$ 122M+ economizados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
              <span className="text-center sm:text-left">
                Especialistas em cripto desde 2017
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
