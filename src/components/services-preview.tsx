"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Globe,
  Bitcoin,
  Scale,
  Building2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Planejamento Patrimonial",
    description: "Holdings familiares, trusts e proteção patrimonial lícita",
    href: "/servicos/planejamento-patrimonial",
  },
  {
    icon: Globe,
    title: "Internacionalização",
    description: "Empresas offshore e residência fiscal internacional",
    href: "/servicos/internacionalizacao",
  },
  {
    icon: Bitcoin,
    title: "Cripto & Fintechs",
    description: "Compliance, licenças MSB e estruturação blockchain",
    href: "/servicos/cripto-fintechs",
  },
  {
    icon: Scale,
    title: "Jurídico Estratégico",
    description: "Contratos internacionais e consultoria empresarial",
    href: "/servicos/juridico-estrategico",
  },
  {
    icon: Building2,
    title: "Legal Growth",
    description: "Solução completa para infoprodutores e lançadores",
    href: "/servicos/legal-growth",
  },
  {
    icon: TrendingUp,
    title: "Contencioso Estratégico",
    description: "Defesa patrimonial e litígios empresariais",
    href: "/servicos/contencioso",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="block text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Especialidades
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2
                className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
              >
                <span className="block">Nossas Áreas</span>
                <span className="block">De Atuação.</span>
              </h2>
            </div>
            <p className="text-[15px] text-muted-foreground font-light max-w-xs leading-relaxed md:pb-2">
              Soluções jurídicas integradas para proteção, crescimento e liberdade patrimonial
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link href={service.href} className="block h-full">
                <div className="group p-8 md:p-10 bg-card hover:bg-muted/30 transition-all duration-300 h-full cursor-pointer">
                  <service.icon className="w-7 h-7 text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300" />
                  <h3 className="font-sans font-light uppercase text-foreground text-base md:text-lg mb-2.5 tracking-wide leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-foreground/40 group-hover:text-foreground text-[11px] font-light uppercase tracking-[0.18em] group-hover:translate-x-1.5 transition-all duration-300">
                    <span>Saiba mais</span>
                    <ArrowRight className="ml-1.5 h-3 w-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-start"
        >
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 px-7 py-3 font-light text-[10px] uppercase tracking-[0.22em] rounded-full border border-border transition-all duration-300 hover:scale-[1.02] text-foreground hover:border-foreground/30"
          >
            Ver Todos os Serviços
            <ArrowRight className="h-3 w-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
