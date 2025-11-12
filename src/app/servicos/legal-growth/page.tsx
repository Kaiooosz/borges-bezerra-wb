"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  TrendingDown,
  Shield,
  Users,
  Copyright,
  Handshake,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

const pillars = [
  {
    icon: TrendingDown,
    title: "Relacionamento com o Governo",
    subtitle: "Redução de Impostos",
    description:
      "Reduzir despesas para aumentar a margem e liberar verba para crescimento",
    benefit: "Economia de até 90% em impostos",
  },
  {
    icon: Shield,
    title: "Relacionamento com o Time",
    subtitle: "Blindagem Trabalhista",
    description:
      "Formalizar toda a equipe para prevenir riscos e garantir engajamento",
    benefit: "Zero processos trabalhistas",
  },
  {
    icon: Users,
    title: "Relacionamento com Clientes",
    subtitle: "Segurança com Alunos",
    description: "Formalizar contratos e termos de uso para proteger a empresa",
    benefit: "Proteção contra reembolsos indevidos",
  },
  {
    icon: Copyright,
    title: "Relacionamento com Concorrentes",
    subtitle: "Direitos Autorais",
    description:
      "Registrar marcas, produtos e CLPs para criar barreiras e prevenir plágios",
    benefit: "Propriedade intelectual protegida",
  },
  {
    icon: Handshake,
    title: "Relacionamento com Sócios",
    subtitle: "Segurança Contratual",
    description: "Formalizar acordos societários e alinhar expectativas",
    benefit: "Harmonia e clareza nas parcerias",
  },
];

const problems = [
  "21% de Simples Nacional em cada venda",
  "Violação de direitos autorais por concorrentes",
  "Alunos pedindo reembolso fora do prazo",
  "Conflitos societários sem acordo claro",
  "Processos trabalhistas de 'freelas PJ'",
];

const deliverables = [
  "Manual do Cliente explicando toda a assessoria",
  "Parecer tributário + POP orientativo para o contador",
  "Todos os contratos trabalhistas do time",
  "Contratos com prestadores de serviço (PJ)",
  "Termos de uso e contratos de adesão para os cursos",
  "Registro de produtos no ISBN e Biblioteca Nacional",
  "Até 4 marcas registradas",
  "Suporte via Telegram",
  "Seguro jurídico — 30% de desconto em ações sob tabela OAB",
];

export default function LegalGrowthPage() {
  return (
    <div className="min-h-screen bg-backgroud">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]" />

          <div className=" relative z-10 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm text-foregroung mb-6">
                Exclusivo para Infoprodutores e Lançadores
              </div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foregroung mb-6 text-balance">
                Do que adianta faturar{" "}
                <span className="font-bold">7 dígitos</span> se você está
                pagando{" "}
                <span className="italic text-muted-foreground">
                  6 só de impostos
                </span>
                ?
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Blindamos todas as 5 áreas da sua Empresa de Lançamentos e
                aumentamos o seu lucro sem precisar investir mais em tráfego
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-white/90"
                >
                  <Link href="/#contato">
                    Aplicar para Diagnóstico
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                + R$ 122.440.036,00 economizados • Vagas limitadas
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 md:py-24 bg-white/5">
          <div className=" px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-foregroung mb-8 text-center">
                O Problema Real
              </h2>

              <Card className="p-8 md:p-10 bg-card border-border mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-foregroung mb-4">
                      Simples Nacional
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      2000 vendas de R$ 997 (≈ R$ 2 milhões)
                    </p>
                    <div className="space-y-2 text-red-400">
                      <p>21% de Simples Nacional</p>
                      <p>Direitos Trabalhistas</p>
                    </div>
                    <p className="text-2xl font-bold text-red-400 mt-6">
                      R$ 418.740 de imposto
                    </p>
                  </div>

                  <div className="border-l-2 border-white/20 pl-8">
                    <h3 className="text-xl font-bold text-foregroung mb-4">
                      Com Legal Growth
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Mesmas 2000 vendas
                    </p>
                    <div className="space-y-2 text-green-400">
                      <p>1,2% de Imposto de Renda</p>
                      <p>1,08% de CSLL</p>
                      <p>0% de ISS, ICMS, PIS, COFINS</p>
                    </div>
                    <p className="text-2xl font-bold text-green-400 mt-6">
                      R$ 45.463 de imposto
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20 text-center">
                  <p className="text-3xl font-bold text-foregroung">
                    Economia de R$ 373.276,80
                  </p>
                  <p className="text-xl text-green-400 mt-2">
                    ou 89,14% dos seus gastos atuais
                  </p>
                </div>
              </Card>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foregroung flex items-center gap-2">
                  Além dos impostos, você enfrenta:
                </h3>
                <ul className="space-y-3">
                  {problems.map((problem) => (
                    <li
                      key={problem}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5 Pillars Section */}
        <section className="py-16 md:py-24">
          <div className=" px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-foregroung mb-4">
                Os 5 Pilares do Legal Growth
              </h2>
              <p className="text-xl text-muted-foreground">
                A única solução jurídica completa para infoprodutores
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
                >
                  <Card className="p-8 h-full bg-card border-border hover:border-white/30 transition-all duration-300">
                    <pillar.icon className="w-12 h-12 text-foregroung mb-6" />
                    <h3 className="font-serif text-xl text-foregroung mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-green-400 mb-4 font-semibold">
                      {pillar.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {pillar.description}
                    </p>
                    <p className="text-foregroung font-semibold">{pillar.benefit}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
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
                O que você vai receber
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {deliverables.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foregroung">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32">
          <div className=" px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-foregroung mb-6">
                Até 90% menos impostos e muito mais segurança jurídica
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Clique no botão abaixo para que nosso time de advogados possa te
                ajudar
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                <Link href="/#contato">
                  Aplicar para Receber um Diagnóstico
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
