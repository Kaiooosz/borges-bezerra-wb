"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
    description: "Holdings familiares, trusts e blindagem patrimonial lícita",
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
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4 px-2">
            Nossas Especialidades
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Soluções jurídicas integradas para proteção, crescimento e
            liberdade!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 mx-auto max-w-6xl">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <Card className="group p-6 md:p-8 bg-card border-border hover:border-white/30 transition-all duration-300 h-full cursor-pointer">
                  <service.icon className="w-10 h-10 md:w-12 md:h-12 text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-2 md:mb-3 group-hover:text-white/90">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 md:mt-6 flex items-center text-white group-hover:translate-x-2 transition-transform">
                    <span className="text-sm">Saiba mais</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent"
          >
            <Link href="/servicos">
              Ver Todos os Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
