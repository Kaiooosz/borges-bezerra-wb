"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "15+", label: "Jurisdições" },
  { value: "12+", label: "Países Ativos" },
  { value: "R$122M+", label: "Patrimônio Protegido" },
  { value: "2017", label: "No Mercado" },
];

export function WorldMapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Vídeo: entra suave, permanece travado no meio do scroll, sai no fim
  const mapOpacity = useTransform(scrollYProgress, [0, 0.12, 0.82, 1], [0, 0.70, 0.70, 0]);
  const mapScale   = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.0, 0.96]);

  // Conteúdo: surge enquanto usuário está no centro da seção
  const contentOpacity = useTransform(scrollYProgress, [0.12, 0.28, 0.75, 0.92], [0, 1, 1, 0]);
  const contentY       = useTransform(scrollYProgress, [0.12, 0.35], [40, 0]);

  // Halo de luz central atrás do texto
  const glowOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.78, 0.92], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative h-[220vh]">

      {/* ── STICKY FRAME — trava o vídeo enquanto o usuário scrolla ── */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

        {/* Vídeo mapa mundi */}
        <motion.div
          style={{ scale: mapScale, opacity: mapOpacity }}
          className="absolute inset-0 will-change-transform"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/mapamundi.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Degradê nas bordas — funde com o fundo */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, transparent 20%, transparent 80%, var(--background) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(ellipse 85% 105% at 50% 50%, transparent 30%, var(--background) 95%)",
          }}
        />

        {/* Halo branco atrás do texto */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center"
        >
          <div
            style={{
              width: "700px",
              height: "450px",
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
        </motion.div>

        {/* ── CONTEÚDO CENTRAL ── */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-30 text-center px-4 max-w-5xl mx-auto"
        >
          <span
            className="block text-[11px] font-light uppercase tracking-[0.28em] mb-8"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Presença Global
          </span>

          <h2
            className="font-sans font-light uppercase text-white leading-[0.9] tracking-tight block"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 6rem)",
              letterSpacing: "-0.025em",
              textShadow:
                "0 0 120px rgba(255,255,255,0.18), 0 0 40px rgba(255,255,255,0.08), 0 2px 6px rgba(0,0,0,0.95)",
            }}
          >
            Operamos Onde
          </h2>
          <h2
            className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block mb-12"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 6rem)",
              letterSpacing: "-0.025em",
             
            }}
          >
            Você Precisa.
          </h2>

          {/* Stats bar */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              gap: "1px",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="py-6 px-5 flex flex-col items-center"
                style={{ background: "rgba(7,13,10,0.85)", backdropFilter: "blur(16px)" }}
              >
                <span
                  className="font-sans font-light text-white text-2xl md:text-3xl tabular"
                  style={{
                    letterSpacing: "-0.02em",
                   
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[9px] font-light uppercase tracking-[0.2em] mt-1"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
