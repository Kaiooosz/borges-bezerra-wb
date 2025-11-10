"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Bitcoin,
  CheckCircle2,
  ArrowRight,
  Shield,
  FileCheck,
  Coins,
  Network,
} from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Licenças e Regulação",
    description:
      "MSB (EUA), VASP (Europa), licenças de pagamento (Paraguai, LATAM) e compliance completo",
  },
  {
    icon: Network,
    title: "Estruturação de Exchanges",
    description:
      "Modelagem jurídica de corretoras, wallets, OTCs e plataformas de negociação",
  },
  {
    icon: Coins,
    title: "Tokenização e Blockchain",
    description:
      "ICO/ITO, DAOs, stablecoins, NFTs e contratos inteligentes com segurança jurídica",
  },
  {
    icon: Shield,
    title: "Compliance AML/KYC",
    description:
      "Implementação de políticas de prevenção à lavagem de dinheiro e identificação de clientes",
  },
];

const solutions = [
  "Regularização de criptoativos não declarados",
  "Estruturação de fintechs e startups cripto",
  "Obtenção de licenças MSB e VASP",
  "Compliance para exchanges e OTCs",
  "Contratos para projetos DeFi",
  "Assessoria em tokenização de ativos",
  "Defesa em investigações envolvendo cripto",
  "Planejamento tributário para holders",
];

const expertise = [
  {
    year: "2017",
    title: "Início da atuação em cripto",
    description: "Pioneiros no mercado brasileiro",
  },
  {
    year: "50+",
    title: "Projetos cripto estruturados",
    description: "Exchanges, wallets e fintechs",
  },
  {
    year: "12",
    title: "Países com licenças obtidas",
    description: "EUA, Europa e LATAM",
  },
  {
    year: "100%",
    title: "Taxa de aprovação",
    description: "Em licenciamentos MSB",
  },
];

export default function CriptoFintechsPage() {
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
                <Bitcoin className="w-4 h-4" />
                <span>Cripto, Fintechs e Regulação</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 text-balance">
                Compliance e estruturação para o{" "}
                <span className="font-bold">mercado cripto</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Especialistas em regulação cripto desde 2017. Licenças,
                compliance e estruturação jurídica para exchanges, fintechs e
                projetos blockchain
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                <Link href="/#contato">
                  Estruturar Meu Projeto Cripto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
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
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
                Nossa Expertise em Cripto
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card border-border text-center h-full">
                    <div className="text-4xl font-serif text-white mb-3">
                      {item.year}
                    </div>
                    <h3 className="font-serif text-lg text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
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
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-12 text-center">
                Soluções Completas para Cripto
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
                    <span className="text-white">{solution}</span>
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
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
                Regularize e estruture seu projeto cripto
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Agende uma consultoria especializada e opere com segurança
                jurídica
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
