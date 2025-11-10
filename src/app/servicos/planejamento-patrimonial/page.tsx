"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  Building2,
  FileText,
  Globe2,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Holdings Familiares e Empresariais",
    description:
      "Estruturação de holdings nacionais e internacionais para proteção e eficiência tributária",
  },
  {
    icon: Shield,
    title: "Blindagem Patrimonial Lícita",
    description:
      "Estratégias legais de proteção contra riscos empresariais e sucessórios",
  },
  {
    icon: Globe2,
    title: "Trusts e Foundations",
    description:
      "Criação de estruturas internacionais em jurisdições seguras e estáveis",
  },
  {
    icon: FileText,
    title: "Proteção de Ativos Digitais",
    description:
      "Segurança jurídica para marcas, propriedade intelectual, royalties e contratos",
  },
];

const benefits = [
  "Redução legal da carga tributária",
  "Proteção contra credores e litígios",
  "Planejamento sucessório eficiente",
  "Segregação de riscos empresariais",
  "Privacidade e confidencialidade",
  "Estruturas personalizadas e escaláveis",
];

const process = [
  {
    step: "01",
    title: "Diagnóstico Patrimonial",
    description:
      "Análise completa do cenário atual e identificação de riscos e oportunidades",
  },
  {
    step: "02",
    title: "Estratégia Personalizada",
    description:
      "Desenvolvimento de plano sob medida com estruturas jurídicas adequadas",
  },
  {
    step: "03",
    title: "Implementação",
    description:
      "Execução completa com suporte jurídico, contábil e operacional",
  },
  {
    step: "04",
    title: "Acompanhamento",
    description:
      "Monitoramento contínuo e ajustes conforme mudanças legais e patrimoniais",
  },
];

export default function PlanejamentoPatrimonialPage() {
  return (
    <div className="min-h-screen bg-black">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-white mb-6">
                <Shield className="w-4 h-4" />
                <span>Planejamento Patrimonial e Estrutural</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 text-balance">
                Proteja seu patrimônio com{" "}
                <span className="font-bold">inteligência jurídica</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Estruturas sólidas e estratégicas para blindagem patrimonial,
                sucessão familiar e eficiência tributária
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                <Link href="/#contato">
                  Agendar Diagnóstico Patrimonial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className=" px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 bg-card border-border hover:border-white/30 transition-all duration-300 h-full">
                    <feature.icon className="w-12 h-12 text-white mb-6" />
                    <h3 className="font-serif text-2xl text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-white/5">
          <div className=" px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-12 text-center">
                Benefícios do Planejamento Patrimonial
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className=" px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
                Como Funciona
              </h2>
              <p className="text-xl text-muted-foreground">
                Processo estruturado para máxima segurança e eficiência
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card border-border h-full">
                    <div className="text-5xl font-serif text-white/20 mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-serif text-xl text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
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
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
                Proteja seu patrimônio hoje
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Agende um diagnóstico patrimonial estratégico e descubra como
                blindar seus ativos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-white/90"
                >
                  <Link href="/#contato">
                    Agendar Diagnóstico
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
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
