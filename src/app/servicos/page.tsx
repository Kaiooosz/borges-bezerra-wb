"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Globe, Bitcoin, Scale, Building2, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Planejamento Patrimonial e Estrutural",
    slug: "planejamento-patrimonial",
    description: "Proteção inteligente do seu patrimônio com estruturas jurídicas sólidas",
    features: [
      "Holdings familiares e empresariais",
      "Blindagem patrimonial lícita",
      "Trusts e foundations internacionais",
      "Proteção de ativos digitais e PI",
      "Estratégias de sucessão",
    ],
  },
  {
    icon: Globe,
    title: "Internacionalização e Offshore",
    slug: "internacionalizacao",
    description: "Expanda seus negócios globalmente com segurança jurídica",
    features: [
      "Empresas offshore (EUA, Uruguai, Dubai, Estônia)",
      "Estruturas multilayer integradas",
      "Residência fiscal internacional",
      "Segunda cidadania",
      "Contas bancárias internacionais",
    ],
  },
  {
    icon: Bitcoin,
    title: "Cripto, Fintechs e Regulação",
    slug: "cripto-fintechs",
    description: "Compliance e estruturação para o mercado cripto e fintech",
    features: [
      "Licenças MSB, VASP e pagamentos",
      "Estruturação de exchanges e wallets",
      "Tokenização e contratos inteligentes",
      "Compliance AML/KYC",
      "Regularização de criptoativos",
    ],
  },
  {
    icon: Scale,
    title: "Jurídico Estratégico Empresarial",
    slug: "juridico-estrategico",
    description: "Consultoria jurídica integrada para crescimento sustentável",
    features: [
      "Contratos nacionais e internacionais",
      "Acordos societários",
      "Planejamento tributário",
      "Reorganização societária",
      "Apoio a startups e scale-ups",
    ],
  },
  {
    icon: Building2,
    title: "Legal Growth para Infoprodutores",
    slug: "legal-growth",
    description: "Solução jurídica completa para negócios digitais e lançamentos",
    features: [
      "Redução de até 90% em impostos",
      "Blindagem trabalhista completa",
      "Proteção contra alunos e reembolsos",
      "Registro de marcas e produtos",
      "Contratos com sócios e parceiros",
    ],
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: "Contencioso Estratégico",
    slug: "contencioso",
    description: "Defesa patrimonial e resolução de litígios complexos",
    features: [
      "Litígios empresariais e societários",
      "Defesa em crimes econômicos",
      "Bloqueios de ativos",
      "Arbitragem internacional",
      "Causas envolvendo cripto",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden px-4">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 text-balance">
                Soluções Jurídicas para <span className="italic text-muted-foreground">Proteger</span>,{" "}
                <span className="font-bold">Escalar</span> e{" "}
                <span className="italic text-muted-foreground">Libertar</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground text-pretty px-2">
                Engenharia jurídica inteligente, segura e ética — dentro e fora do Brasil
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={`group p-6 md:p-8 lg:p-10 h-full border-border hover:border-white/30 transition-all duration-300 ${
                      service.highlight ? "bg-white/5" : "bg-card"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 mb-4 md:mb-6">
                      <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white mb-2 md:mb-3">{service.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-white shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant={service.highlight ? "default" : "outline"}
                      className={
                        service.highlight
                          ? "bg-white text-black hover:bg-white/90 w-full"
                          : "border-white text-white hover:bg-white/10 w-full"
                      }
                    >
                      <Link href={`/servicos/${service.slug}`}>
                        Saiba Mais
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-white mb-4 md:mb-6 px-2">Pronto para Proteger seu Patrimônio?</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 px-2">
                Agende um diagnóstico estratégico gratuito e descubra como podemos ajudar
              </p>
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                <Link href="/#contato">
                  Agendar Diagnóstico Gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
