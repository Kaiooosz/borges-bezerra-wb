"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Scale,
  CheckCircle2,
  ArrowRight,
  FileText,
  Users,
  TrendingUp,
  Building,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Contratos Internacionais",
    description:
      "Elaboração e revisão de contratos nacionais e internacionais com cláusulas estratégicas",
  },
  {
    icon: Users,
    title: "Acordos Societários",
    description:
      "Estruturação de equity, vesting, buy-sell agreements e governança corporativa",
  },
  {
    icon: TrendingUp,
    title: "Planejamento Tributário",
    description:
      "Consultoria em reorganização societária e otimização fiscal lícita",
  },
  {
    icon: Building,
    title: "Apoio a Startups",
    description:
      "Suporte jurídico completo para startups, fintechs e projetos digitais em crescimento",
  },
];

const solutions = [
  "Contratos de prestação de serviços",
  "Termos de uso e políticas de privacidade",
  "Acordos de confidencialidade (NDA)",
  "Contratos de parceria e joint ventures",
  "Estruturação de rodadas de investimento",
  "Due diligence jurídica",
  "Reorganização societária",
  "Consultoria em M&A",
];

const benefits = [
  "Redução de riscos jurídicos",
  "Contratos blindados e estratégicos",
  "Economia tributária lícita",
  "Estrutura societária eficiente",
  "Proteção em negociações",
  "Crescimento sustentável",
];

export default function JuridicoEstrategicoPage() {
  return (
    <div className="min-h-screen bg-backgroud">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className=" relative z-10 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-foregroung mb-6">
                <Scale className="w-4 h-4" />
                <span>Jurídico Estratégico Empresarial</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foregroung mb-6 text-balance">
                Consultoria jurídica para{" "}
                <span className="font-bold">crescimento sustentável</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Contratos estratégicos, planejamento tributário e estruturação
                societária para empresas que querem escalar com segurança
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                <Link href="/#contato">
                  Agendar Consultoria
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className=" px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 bg-card border-border hover:border-white/30 transition-all duration-300 h-full">
                    <service.icon className="w-12 h-12 text-foregroung mb-6" />
                    <h3 className="font-serif text-2xl text-foregroung mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 md:py-24 bg-white/5">
          <div className=" px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-foregroung mb-12 text-center">
                Soluções Jurídicas Empresariais
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foregroung">{solution}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className=" px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-foregroung mb-12 text-center">
                Por que escolher nosso jurídico estratégico?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foregroung">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-white/5">
          <div className=" px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-foregroung mb-6">
                Escale seu negócio com segurança jurídica
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Agende uma consultoria e descubra como estruturar seu
                crescimento
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-white/90"
                >
                  <Link href="/#contato">
                    Agendar Consultoria
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-foregroung hover:bg-white/10 bg-transparent"
                >
                  <Link href="/servicos">Ver Outros Serviços</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
