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
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-source-serif-pro text-4xl sm:text-5xl md:text-6xl font-extralight text-foreground mb-6 tracking-tight">
            Nossas Especialidades
          </h2>
          <p className="text-lg sm:text-xl text-white/50 max-w-2xl font-light tracking-tight">
            Soluções jurídicas integradas para proteção, crescimento e liberdade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link href={service.href} className="block group h-full">
                <div className="p-10 bg-background hover:bg-white/[0.02] border-border transition-all duration-300 h-full flex flex-col">
                  <service.icon className="w-8 h-8 text-white mb-8 stroke-[1.5px]" />
                  <h3 className="font-sans font-semibold text-lg md:text-xl text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/50 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                  <div className="mt-auto flex items-center text-white/40 text-sm font-light group-hover:text-white transition-colors duration-200">
                    <span>Saiba mais</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
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
        >
          <Link
            href="/servicos"
            className="btn-outline"
          >
            Ver Todos os Serviços
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
