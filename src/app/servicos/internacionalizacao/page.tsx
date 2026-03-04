"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Globe,
  CheckCircle2,
  ArrowRight,
  Building,
  MapPin,
  Briefcase,
  CreditCard,
} from "lucide-react";

const jurisdictions = [
  {
    name: "Estados Unidos",
    flag: "🇺🇸",
    benefits: "LLC, C-Corp, conta bancária",
  },
  { name: "Uruguai", flag: "🇺🇾", benefits: "SA, residência fiscal favorável" },
  {
    name: "Paraguai",
    flag: "🇵🇾",
    benefits: "Residência rápida, baixa tributação",
  },
  { name: "Dubai", flag: "🇦🇪", benefits: "Free zones, 0% imposto de renda" },
  {
    name: "Estônia",
    flag: "🇪🇪",
    benefits: "E-residency, empresa 100% digital",
  },
  { name: "Nevis", flag: "🇰🇳", benefits: "Offshore clássico, privacidade" },
];

const features = [
  {
    icon: Building,
    title: "Empresas Offshore",
    description:
      "Abertura e gestão completa de empresas internacionais em jurisdições estratégicas",
  },
  {
    icon: MapPin,
    title: "Residência Fiscal",
    description:
      "Planejamento e obtenção de residência fiscal internacional com otimização tributária",
  },
  {
    icon: Briefcase,
    title: "Estruturas Multilayer",
    description:
      "Arquitetura corporativa internacional com integração fiscal e cambial",
  },
  {
    icon: CreditCard,
    title: "Contas Internacionais",
    description: "Abertura de contas bancárias e payment processors globais",
  },
];

const benefits = [
  "Redução legal da carga tributária",
  "Diversificação geográfica de ativos",
  "Acesso a mercados internacionais",
  "Proteção cambial e política",
  "Privacidade e confidencialidade",
  "Facilitação de negócios globais",
  "Segunda cidadania estratégica",
  "Estruturas para negócios digitais",
];

export default function InternacionalizacaoPage() {
  return (
    <div className="min-h-screen bg-background">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-foreground mb-6">
                <Globe className="w-4 h-4" />
                <span>Internacionalização e Offshore</span>
              </div>
              <h1 className="font-source-serif-pro text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 text-balance">
                Expanda seus negócios{" "}
                <span className="font-bold">globalmente</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Estruturas offshore inteligentes, residência fiscal estratégica
                e acesso aos melhores mercados do mundo
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                <Link href="/#contato">
                  Iniciar Internacionalização
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Jurisdictions Section */}
        <section className="py-16 md:py-24">
          <div className=" px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-source-serif-pro text-3xl md:text-5xl text-foreground mb-4">
                Jurisdições Estratégicas
              </h2>
              <p className="text-xl text-muted-foreground">
                Atuamos em 12+ países com expertise comprovada
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {jurisdictions.map((jurisdiction, index) => (
                <motion.div
                  key={jurisdiction.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card border-border hover:border-white/30 transition-all duration-300 h-full">
                    <div className="text-4xl mb-4">{jurisdiction.flag}</div>
                    <h3 className="font-source-serif-pro text-xl text-foreground mb-2">
                      {jurisdiction.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {jurisdiction.benefits}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white/5">
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
                  <Card className="p-8 bg-card border-border h-full">
                    <feature.icon className="w-12 h-12 text-foreground mb-6" />
                    <h3 className="font-source-serif-pro text-2xl text-foreground mb-3">
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
        <section className="py-16 md:py-24">
          <div className=" px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-source-serif-pro text-3xl md:text-5xl text-foreground mb-12 text-center">
                Vantagens da Internacionalização
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
                    <span className="text-foreground">{benefit}</span>
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
              <h2 className="font-source-serif-pro text-3xl md:text-5xl text-foreground mb-6">
                Pronto para se internacionalizar?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Agende uma consultoria e descubra as melhores jurisdições para
                seu perfil
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
                  className="border-white text-foreground hover:bg-white/10 bg-transparent"
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
