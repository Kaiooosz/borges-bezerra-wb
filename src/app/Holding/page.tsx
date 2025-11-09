"use client"

import React, { useState, useEffect } from "react"
import { Shield, Building2, TrendingUp, ArrowRight, Mail, Phone, Users, Lock, FileText } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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

  const benefits = [
    {
      icon: Shield,
      title: "Proteção Patrimonial Efetiva",
      description: "Blindagem lícita contra processos judiciais, credores e instabilidades econômicas através de estruturas societárias seguras."
    },
    {
      icon: TrendingUp,
      title: "Redução Tributária Legal",
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
    <div className="min-h-screen bg-black text-white font-serif">
      <div
        className="fixed top-0 left-0 h-1 bg-white/30 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="mb-12 flex justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-48 w-auto opacity-90 drop-shadow-2xl"
              >
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Animac%CC%A7a%CC%83o%20logo-fj6CGOTzhzrRYqVrNCXk6nZpFllLH3.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Holdings Patrimoniais e Empresariais: <span className="italic text-zinc-400">Proteja e Multiplique</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto text-pretty">
              Estruture seu patrimônio e empresas com segurança jurídica, eficiência tributária e planejamento sucessório inteligente. A BBLAW transforma complexidade em estratégia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="group px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all font-semibold flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl duration-300">
                Agendar Consultoria Paga ($125)
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all font-semibold hover:scale-105 duration-300">
                Baixar Guia Completo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="py-20 md:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Por que criar uma holding?</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto text-pretty">
              Vantagens estratégicas que transformam a gestão do seu patrimônio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group hover:shadow-xl hover:scale-105"
              >
                <benefit.icon className="h-10 w-10 mb-4 text-white group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES SECTION */}
      <section id="types" className="py-20 md:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Tipos de Holdings</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto text-pretty">
              Estruturas personalizadas para cada necessidade patrimonial e empresarial
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {holdingTypes.map((type, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm">
                      <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
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
      <section id="process" className="py-20 md:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Nosso processo de implementação</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto text-pretty">
              Do planejamento à execução, cuidamos de cada detalhe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-8 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-5xl font-bold text-white/10 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 md:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-lg">
              <div className="text-5xl font-bold text-white mb-3">10+</div>
              <p className="text-zinc-400">Anos de Experiência</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-lg">
              <div className="text-5xl font-bold text-white mb-3">500+</div>
              <p className="text-zinc-400">Holdings Estruturadas</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-lg">
              <div className="text-5xl font-bold text-white mb-3">R$ 2B+</div>
              <p className="text-zinc-400">em Patrimônio Protegido</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-20 md:py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Pronto para Estruturar Sua Holding?
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-pretty">
              Agende uma consultoria estratégica e descubra como uma holding pode transformar a gestão do seu patrimônio.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <a
                href="mailto:contato@borgesbezerra.com.br"
                className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Mail className="w-6 h-6 text-white mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Email</h3>
                <p className="text-zinc-400 text-sm">contato@borgesbezerra.com.br</p>
              </a>

              <a
                href="tel:+5511999999999"
                className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Phone className="w-6 h-6 text-white mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Telefone</h3>
                <p className="text-zinc-400 text-sm">+55 (11) 99999-9999</p>
              </a>
            </div>

            <button className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all font-semibold hover:scale-110 hover:shadow-xl">
              Agendar Consultoria Paga ($125)
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

