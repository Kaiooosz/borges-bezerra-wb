"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  Gavel,
  AlertTriangle,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Gavel,
    title: "Litígios Empresariais",
    description:
      "Defesa em disputas societárias, bancárias e contratuais com estratégia agressiva",
  },
  {
    icon: AlertTriangle,
    title: "Crimes Econômicos",
    description:
      "Defesa em inquéritos e investigações financeiras, lavagem de dinheiro e evasão fiscal",
  },
  {
    icon: Shield,
    title: "Bloqueios de Ativos",
    description:
      "Desbloqueio de contas, criptomoedas e ativos judicialmente bloqueados",
  },
  {
    icon: FileText,
    title: "Arbitragem Internacional",
    description:
      "Resolução de conflitos internacionais através de arbitragem e mediação",
  },
];

const expertise = [
  "Defesa em processos criminais econômicos",
  "Desbloqueio de ativos digitais e cripto",
  "Litígios societários e contratuais",
  "Defesa em investigações da Receita Federal",
  "Processos envolvendo exchanges e fintechs",
  "Arbitragem comercial internacional",
  "Recuperação de ativos no exterior",
  "Defesa preventiva e estratégica",
];

const approach = [
  {
    title: "Análise Estratégica",
    description:
      "Avaliação completa do caso e identificação da melhor estratégia de defesa",
  },
  {
    title: "Defesa Agressiva",
    description:
      "Atuação proativa e combativa para proteger seus direitos e patrimônio",
  },
  {
    title: "Soluções Criativas",
    description:
      "Uso de teses inovadoras e precedentes favoráveis para reverter situações adversas",
  },
  {
    title: "Acompanhamento Total",
    description:
      "Suporte completo em todas as instâncias até a resolução definitiva",
  },
];

export default function ContenciosoPage() {
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
                <TrendingUp className="w-4 h-4" />
                <span>Contencioso Estratégico</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 text-balance">
                Defesa patrimonial{" "}
                <span className="font-bold">agressiva e estratégica</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Atuação especializada em litígios empresariais, crimes
                econômicos e defesa de ativos digitais
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                <Link href="/#contato">
                  Solicitar Defesa Urgente
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
                    <service.icon className="w-12 h-12 text-white mb-6" />
                    <h3 className="font-serif text-2xl text-white mb-3">
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

        {/* Expertise Section */}
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
                Nossa Expertise em Contencioso
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 md:py-24">
          <div className=" px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
                Nossa Abordagem
              </h2>
              <p className="text-xl text-muted-foreground">
                Estratégia comprovada para defesa patrimonial
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {approach.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card border-border h-full">
                    <div className="text-4xl font-serif text-white/20 mb-4">
                      0{index + 1}
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
                Proteja seu patrimônio agora
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Entre em contato para uma análise estratégica do seu caso
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-white/90"
                >
                  <Link href="/#contato">
                    Solicitar Atendimento Urgente
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

      <Footer />
    </div>
  );
}
