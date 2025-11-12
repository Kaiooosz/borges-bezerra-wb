"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Globe,
  Puzzle,
  Briefcase,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

// Hero aparece imediatamente sem animação de viewport
const heroFadeIn = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

export default function SobreNosPage() {
  // Garantir que a página sempre comece no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Planejamento Patrimonial e Holdings",
      description:
        "Blindagem lícita, sucessão familiar e redução tributária por meio de holdings nacionais e internacionais.",
      icon: Shield,
    },
    {
      title: "Internacionalização e Estruturas Offshore",
      description:
        "Criação e gestão de empresas em jurisdições seguras (EUA, Paraguai, Uruguai, Nevis, Estônia, Dubai), com abertura bancária e integração fiscal completa.",
      icon: Globe,
    },
    {
      title: "Cripto, Fintechs e Regulação",
      description:
        "Estruturação de corretoras, wallets e fintechs com licenças MSB (EUA), VASP (Europa) e autorizações LATAM, garantindo conformidade regulatória (KYC/AML).",
      icon: Puzzle,
    },
    {
      title: "Jurídico e Tributário Estratégico",
      description:
        "Consultoria fiscal e societária para empresas de crescimento acelerado, com foco em eficiência e governança.",
      icon: Briefcase,
    },
    {
      title: "Contencioso e Defesa Patrimonial",
      description:
        "Defesa em litígios empresariais, bloqueios de ativos e investigações financeiras — no Brasil e no exterior.",
      icon: Lock,
    },
  ];

  const differentials = [
    {
      icon: "",
      title: "Integração real",
      description: "Entre jurídico, contábil, bancário e tecnológico",
    },
    {
      icon: "",
      title: "Presença internacional",
      description: "Atuação em mais de 12 países",
    },
    {
      icon: "",
      title: "Soluções modulares",
      description: "Adaptáveis ao momento de cada cliente",
    },
    {
      icon: "",
      title: "Equipe multidisciplinar",
      description: "Experiência em estruturas globais",
    },
    {
      icon: "",
      title: "Linguagem clara",
      description: "Sem juridiquês, apenas estratégia",
    },
    {
      icon: "",
      title: "Sigilo e compliance",
      description: "Em todos os níveis de operação",
    },
  ];

  const ecosystem = [
    {
      name: "Legal Growth",
      description: "Estratégia jurídica e tributária para empresas digitais",
    },
    {
      name: "BCont",
      description: "Contabilidade internacional com foco em cripto e offshore",
    },
    {
      name: "SatSails, PagueBit, Crypix e Yuny",
      description: "Infraestrutura para pagamentos e custódia cripto",
    },
    {
      name: "Educação Real",
      description: "Educação em liberdade, patrimônio e finanças",
    },
    {
      name: "Delta Broker",
      description: "Operações financeiras e cambiais internacionais",
    },
  ];

  return (
    <div className="min-h-screen bg-backgroud text-foregroung font-serif">
      <Header />

      {/* Hero Section - Aparece imediatamente fixo no topo */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]" />

        <div className="relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-balance">
              Liberdade real exige{" "}
              <span className="italic text-zinc-400">estratégia</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto text-pretty">
              A BBLAW (Bezerra Borges Advocacia) é uma firma de advocacia e
              estratégia internacional especializada em proteção patrimonial,
              internacionalização e estruturação de negócios globais, com forte
              atuação nos ecossistemas cripto, offshore e financeiro digital.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className=" px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-serif text-3xl md:text-5xl text-center text-balance">
              Mais do que um escritório, somos um{" "}
              <span className="italic text-zinc-400">ecossistema</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <motion.div
                {...fadeInUp}
                className="p-8 bg-white/5 border border-border rounded-lg hover:bg-white/10 transition-colors"
              >
                <h3 className="font-serif text-xl mb-4">O que fazemos</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Transformamos complexidades legais em estruturas estratégicas.
                  Ajudamos pessoas e empresas a operar globalmente com
                  segurança, eficiência e liberdade.
                </p>
              </motion.div>

              <motion.div
                {...fadeInUp}
                className="p-8 bg-white/5 border border-border rounded-lg hover:bg-white/10 transition-colors"
              >
                <h3 className="font-serif text-xl mb-4">Nossa missão</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Proteger, escalar e libertar o patrimônio e as operações de
                  nossos clientes, utilizando engenharia jurídica inteligente,
                  segura e ética — dentro e fora do Brasil.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className=" px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl mb-4 text-balance">
              Nossas linhas de atuação
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto text-pretty">
              Soluções completas para proteção patrimonial e crescimento
              internacional
            </p>
          </motion.div>

          <motion.div
            {...stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="p-8 bg-white/5 border border-border rounded-lg hover:bg-white/10 transition-all group"
              >
                <service.icon className="h-10 w-10 mb-4 text-foregroung group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className=" px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl mb-4 text-balance">
              Por que escolher o BBLAW
            </h2>
          </motion.div>

          <motion.div
            {...stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="p-6 bg-white/5 border border-border rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className=" px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-3xl md:text-5xl text-balance">
                Ecossistema BBLAW
              </h2>
              <p className="text-zinc-400 text-lg text-pretty">
                Fazemos parte de um grupo de empresas criadas e assessoradas por
                Vinícius Borges, voltadas à liberdade patrimonial e financeira
              </p>
            </div>

            <motion.div {...stagger} className="space-y-4">
              {ecosystem.map((company, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="p-6 bg-white/5 border border-border rounded-lg hover:bg-white/10 transition-colors"
                >
                  <h3 className="font-serif text-lg mb-2">{company.name}</h3>
                  <p className="text-zinc-400 text-sm">{company.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...fadeInUp} className="text-center pt-8">
              <p className="text-zinc-400 italic">
                Tudo integrado. Tudo pensado para quem quer crescer e se
                proteger com inteligência.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className=" px-4">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-balance">
              Nossa filosofia
            </h2>
            <blockquote className="text-2xl md:text-3xl font-serif italic --ring text-balance">
              "O BBLAW não vende documentos — entrega caminhos."
            </blockquote>
            <p className="text-lg text-zinc-400 text-pretty">
              Cada cliente recebe uma engenharia jurídica feita para durar,
              resistir e escalar. Acreditamos que liberdade patrimonial é um
              direito de quem se planeja — e nós entregamos o mapa para isso.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-zinc-200 mt-8"
            >
              <Link href="/#contato">
                Agendar Diagnóstico Estratégico
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
