"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export function AnimatedHero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Logo — visible from first frame, fades as curtains open
  const logoScale   = useTransform(scrollYProgress, [0, 0.50], [1.0, 1.06]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.40, 0.58], [0.22, 0.22, 0]);

  // Curtain panels slide apart on scroll
  const leftX  = useTransform(scrollYProgress, [0.10, 0.55], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0.10, 0.55], ["0%",  "100%"]);

  // Revealed content fades in after curtains open
  const contentOpacity = useTransform(scrollYProgress, [0.38, 0.62], [0, 1]);
  const contentY       = useTransform(scrollYProgress, [0.38, 0.62], [36, 0]);

  // Scroll indicator fades out as curtains begin opening
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.08, 0.18], [1, 1, 0]);

  return (
    <div ref={ref} className="relative h-[200vh]">
      {/* Sticky viewport frame — always dark, dark-section forces white headings */}
      <div
        className="dark-section sticky top-0 h-screen overflow-hidden flex items-center justify-center"
        style={{ background: "#070d0a" }}
      >
        {/* Brand logo — left half, slides left with curtain */}
        <motion.div
          style={{ x: leftX, scale: logoScale, opacity: logoOpacity, clipPath: "inset(0 50% 0 0)" }}
          className="absolute inset-0 flex items-center justify-center will-change-transform z-[22]"
          aria-hidden="true"
        >
          <img
            src="/LogoBranco.svg"
            alt=""
            className="w-[420px] max-w-[60vw] object-contain select-none pointer-events-none"
          />
        </motion.div>

        {/* Brand logo — right half, slides right with curtain */}
        <motion.div
          style={{ x: rightX, scale: logoScale, opacity: logoOpacity, clipPath: "inset(0 0 0 50%)" }}
          className="absolute inset-0 flex items-center justify-center will-change-transform z-[22]"
          aria-hidden="true"
        >
          <img
            src="/LogoBranco.svg"
            alt=""
            className="w-[420px] max-w-[60vw] object-contain select-none pointer-events-none"
          />
        </motion.div>

        {/* Atmospheric radial gradient */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 40%, rgba(10,20,15,0.45) 0%, rgba(5,10,8,0.88) 55%, #020603 100%)",
          }}
        />

        {/* LEFT CURTAIN */}
        <motion.div
          style={{ x: leftX }}
          className="absolute inset-y-0 left-0 w-1/2 z-[20] will-change-transform"
          aria-hidden="true"
        >
          <div className="w-full h-full" style={{ background: "#070d0a" }} />
        </motion.div>

        {/* RIGHT CURTAIN */}
        <motion.div
          style={{ x: rightX }}
          className="absolute inset-y-0 right-0 w-1/2 z-[20] will-change-transform"
          aria-hidden="true"
        >
          <div className="w-full h-full" style={{ background: "#070d0a" }} />
        </motion.div>

        {/* Revealed content — above logo */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-[30] container px-4 will-change-transform"
        >
          <div className="flex flex-col items-center text-center">
            <h1
              className="font-sans font-light uppercase heading-gradient leading-[0.88] tracking-tight block"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.8rem)", letterSpacing: "-0.03em" }}
            >
              Inteligência Jurídica
            </h1>
            <h1
              className="font-sans font-light uppercase heading-gradient leading-[0.88] tracking-tight block"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.8rem)", letterSpacing: "-0.03em" }}
            >
              que transforma complexidades
            </h1>
            <h1
              className="font-sans font-light uppercase heading-gradient leading-[0.88] tracking-tight block"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.8rem)", letterSpacing: "-0.03em" }}
            >
              em oportunidades.
            </h1>

            <p
              className="text-[15px] sm:text-base font-light max-w-md mx-auto leading-relaxed mb-10 mt-5 px-4"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Atuamos na interseção entre empresa, patrimônio, contratos, tributação,
              regulação e internacionalização, desenhando caminhos jurídicos para
              operações que exigem mais do que soluções padronizadas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center px-10 py-4 font-light text-[11px] uppercase tracking-[0.22em] text-white rounded-full transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(12px)",
                }}
              >
                Conhecer áreas de atuação
              </Link>
              <a
                href="https://wa.me/5521979901686?text=Olá!%20Gostaria%20de%20falar%20com%20a%20equipe%20da%20Bezerra%20Borges%20Advogados%20sobre%20o%20meu%20caso."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 font-light text-[11px] uppercase tracking-[0.22em] rounded-full transition-all duration-300 hover:scale-[1.03]"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                Falar com a equipe
              </a>
            </div>

            <div
              className="w-full max-w-2xl pt-8 grid grid-cols-3 gap-4 text-center px-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {[
                { value: "12+", label: "Países" },
                { value: "6", label: "Áreas de atuação" },
                { value: "2017", label: "No Mercado" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-sans font-light text-white text-xl md:text-2xl tabular tracking-tight"
                    style={{ textShadow: "0 0 30px rgba(255,255,255,0.1)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[10px] font-light uppercase tracking-widest mt-0.5"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom fade — blends into page background below hero */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 pointer-events-none z-[35]"
          style={{ background: "linear-gradient(to bottom, transparent 0%, var(--background) 100%)" }}
        />

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[25]"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-5 h-9 rounded-full flex items-start justify-center p-1.5"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="w-0.5 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
