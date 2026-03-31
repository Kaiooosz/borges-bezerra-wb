"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Building2, TrendingUp, ArrowRight, Mail, Phone, Users, Lock, FileText } from "lucide-react"
import { Header } from "@/components/header"
import { Download } from 'lucide-react';

export default function HoldingPage() {
  const [scrollProgress, setScrollProgress] = useState(0)

  // Garantir que a página sempre comece no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownload = () => {
    // Cria um link temporário
    const link = document.createElement('a');
    link.href = 'public/BBLAW_AP.pdf';
    link.download = 'Guia_Completo_Offshore.pdf'; // Nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const benefits = [
    {
      icon: Shield,
      title: "Proteção Patrimonial Efetiva",
      description: "Proteção patrimonial lícita e preventiva contra riscos jurídicos e econômicos."
    },
    {
      icon: TrendingUp,
      title: "Planejamento tributário em conformidade com a legislação.",
      description: "Planejamento fiscal estratégico que pode reduzir significativamente a carga tributária sobre patrimônio e lucros empresariais."
    },
    {
      icon: Users,
      title: "Sucessão Familiar Planejada",
      description: "Transferência patrimonial estruturada que evita conflitos familiares, custos com inventário e problemas de sucessão."
    },
    {
      icon: Building2,
      title: "Governança Corporativa",
      description: "Estrutura profissional de gestão com separação clara entre patrimônio pessoal e empresarial, facilitando a administração."
    },
    {
      icon: Lock,
      title: "Privacidade e Confidencialidade",
      description: "Maior discrição sobre o patrimônio familiar através de estruturas societárias adequadas e legalmente constituídas."
    },
    {
      icon: FileText,
      title: "Flexibilidade Operacional",
      description: "Facilita operações internacionais, aquisições e reorganizações societárias com estrutura ágil e bem planejada."
    }
  ]

  const holdingTypes = [
    {
      title: "Holding Patrimonial",
      description: "Focada na gestão e proteção de bens imóveis, investimentos e ativos da família.",
      features: ["Gestão de imóveis", "Proteção de ativos", "Planejamento sucessório"]
    },
    {
      title: "Holding Empresarial",
      description: "Controla participações societárias e coordena operações de múltiplas empresas do grupo.",
      features: ["Controle societário", "Governança corporativa", "Estratégia de grupo"]
    },
    {
      title: "Holding Mista",
      description: "Combina gestão patrimonial e empresarial em uma única estrutura integrada.",
      features: ["Gestão completa", "Eficiência tributária", "Flexibilidade máxima"]
    },
    {
      title: "Holding Internacional",
      description: "Estrutura offshore para proteção e internacionalização do patrimônio familiar.",
      features: ["Jurisdições seguras", "Otimização fiscal", "Privacidade ampliada"]
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Diagnóstico Patrimonial",
      description: "Análise completa do patrimônio familiar, estrutura atual e objetivos de proteção."
    },
    {
      number: "02",
      title: "Planejamento Estratégico",
      description: "Desenvolvimento da estrutura ideal de holding considerando aspectos fiscais, sucessórios e de proteção."
    },
    {
      number: "03",
      title: "Implementação",
      description: "Constituição da holding, transferência de ativos e formalização de toda documentação necessária."
    },
    {
      number: "04",
      title: "Gestão Contínua",
      description: "Suporte permanente para governança, compliance fiscal e ajustes estratégicos conforme necessidade."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground tracking-tight">
      <div
        className="fixed top-0 left-0 h-1 --muted-foregroun z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* HEADER FOI REMOVIDO POIS JÁ ESTÁ NO LAYOUT */}

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Grid background responsivo ao tema */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-12 flex justify-center relative"
            >
              <div className="absolute inset-0 bg-foreground/5 blur-3xl rounded-full scale-150" />
              <img
                src="/LogoBranco.svg"
                alt="Bezerra Borges Logo"
                className="relative z-10 w-24 h-24 md:w-32 md:h-32 object-contain brightness-110"
              />
            </motion.div>

            <h1 className="font-source-serif-pro font-light text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white mb-8 text-balance leading-[1.1]">
              Holdings <span className="italic">Patrimoniais</span> <br />
              <span className="font-bold">Proteja</span> e <span className="italic text-white/40">Multiplique</span>
            </h1>
            <p className="text-base md:text-xl text-white/50 max-w-3xl mx-auto text-pretty leading-relaxed font-light tracking-tight">
              Estruture seu patrimônio e empresas com segurança jurídica, eficiência tributária e planejamento sucessório inteligente. A BBLAW transforma complexidade em estratégia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="https://wa.me/5521979901686?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Agendar Consultoria ($125)
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={handleDownload}
                className="btn-outline"
              >
                Baixar Guia Completo
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-source-serif-pro font-light text-3xl md:text-5xl tracking-tight text-foreground">
                Por que criar uma holding?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mt-2 max-w-xl mx-auto">
              Vantagens estratégicas que transformam a gestão do seu patrimônio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-10 bg-muted/20 border border-white/5 rounded-none hover:bg-white/[0.02] transition-all duration-300 h-full flex flex-col"
              >
                <benefit.icon className="w-8 h-8 text-white mb-8 stroke-[1.5px]" />
                <h3 className="font-source-serif-pro text-2xl lg:text-3xl text-white mb-4 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-base text-white/50 leading-relaxed font-light tracking-tight">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES SECTION */}
      <section id="types" className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-source-serif-pro text-4xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
              Tipos de Holdings
            </h2>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light tracking-tight">
              Estruturas personalizadas para cada necessidade patrimonial e empresarial
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {holdingTypes.map((type, index) => (
              <div
                key={index}
                className="p-8 bg-muted/30 border border-border rounded-sm hover:bg-muted/30 transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-2xl font-medium mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 --ring text-sm">
                      <div className="w-2 h-2 rounded-none bg-white mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-source-serif-pro text-4xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
              Nosso processo de implementação
            </h2>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light tracking-tight">
              Do planejamento à execução, cuidamos de cada detalhe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-8 bg-muted/30 border border-border rounded-sm hover:bg-muted/30 transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-5xl font-medium text-foreground/10 mb-4">{step.number}</div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-muted/30 border border-border rounded-sm hover:bg-muted/30 transition-all duration-300 hover:shadow-lg">
              <div className="text-5xl font-medium text-foreground mb-3">10+</div>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
            <div className="p-8 bg-muted/30 border border-border rounded-sm hover:bg-muted/30 transition-all duration-300 hover:shadow-lg">
              <div className="text-5xl font-medium text-foreground mb-3">500+</div>
              <p className="text-muted-foreground">Holdings Estruturadas</p>
            </div>
            <div className="p-8 bg-muted/30 border border-border rounded-sm hover:bg-muted/30 transition-all duration-300 hover:shadow-lg">
              <div className="text-5xl font-medium text-foreground mb-3">R$ 2B+</div>
              <p className="text-muted-foreground">em Patrimônio Protegido</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-20 md:py-32 border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="font-source-serif-pro text-4xl md:text-6xl font-extralight text-white mb-8 tracking-tight">
              Pronto para Estruturar Sua Holding?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Agende uma consultoria estratégica e descubra como uma holding pode transformar a gestão do seu patrimônio.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <a
                href="mailto:contato@borgesbezerra.com.br"
                className="p-6 bg-muted/30 border border-border rounded-sm hover:bg-muted/30 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Mail className="w-6 h-6 text-foreground mx-auto mb-3" />
                <h3 className="font-medium text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">contato@borgesbezerra.com.br</p>
              </a>

              <a
                href="https://wa.me/5521979901686?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-muted/30 border border-border rounded-sm hover:bg-muted/30 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Phone className="w-6 h-6 text-foreground mx-auto mb-3" />
                <h3 className="font-medium text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted-foreground text-sm py-1">+55 21 97990-1686</p>
              </a>
            </div>

            <a
              href="https://wa.me/5521979901686?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black rounded-none hover:bg-gray-200 transition-all font-semibold hover:scale-110 hover:shadow-xl"
            >
              Agendar Consultoria Paga ($125)
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

