"use client";

import { motion } from "framer-motion";
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
import TeamCarousel from "@/components/TeamCarousel";

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
        "Atuação em litígios empresariais e financeiros com foco em conformidade e cooperação internacional.",
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
    <div className="min-h-screen bg-background text-foreground tracking-tight">

      {/* Hero Section - Aparece imediatamente fixo no topo */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Grid background responsivo ao tema */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

        <div className="relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-source-serif-pro font-light text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight text-white text-balance mb-8">
              Liberdade real exige <br />
              <span className="italic">estratégia</span>
            </h1>
            <p className="text-base md:text-xl text-white/50 max-w-3xl mx-auto text-pretty leading-relaxed font-light tracking-tight">
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
            <h2 className="font-source-serif-pro font-light text-3xl md:text-5xl lg:text-6xl text-center text-white text-balance leading-tight">
              Mais do que um escritório, <br />
              somos um <span className="italic">ecossistema</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <motion.div
                {...fadeInUp}
                className="p-10 bg-muted/20 border border-white/5 hover:bg-white/[0.02] transition-colors flex flex-col"
              >
                <h3 className="font-source-serif-pro text-2xl md:text-3xl text-white mb-6 tracking-tight">O que fazemos</h3>
                <p className="text-base text-white/50 leading-relaxed font-light tracking-tight">
                  Transformamos complexidades legais em estruturas estratégicas.
                  Ajudamos pessoas e empresas a operar globalmente com
                  segurança, eficiência e liberdade.
                </p>
              </motion.div>

              <motion.div
                {...fadeInUp}
                className="p-10 bg-muted/20 border border-white/5 hover:bg-white/[0.02] transition-colors flex flex-col"
              >
                <h3 className="font-source-serif-pro text-2xl md:text-3xl text-white mb-6 tracking-tight">Nossa missão</h3>
                <p className="text-base text-white/50 leading-relaxed font-light tracking-tight">
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
          <motion.div {...fadeInUp} className="text-center mb-16 md:mb-24">
            <h2 className="font-source-serif-pro text-4xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
              Nossas linhas de atuação
            </h2>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light tracking-tight">
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
                className="p-10 bg-muted/20 border border-white/5 hover:bg-white/[0.02] transition-all flex flex-col"
              >
                <service.icon className="w-10 h-10 text-white mb-8 stroke-[1.5px]" />
                <h3 className="font-source-serif-pro text-2xl md:text-3xl text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-base text-white/50 leading-relaxed font-light tracking-tight">
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
          <motion.div {...fadeInUp} className="text-center mb-16 md:mb-24">
            <h2 className="font-source-serif-pro text-4xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
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
                className="p-6 bg-muted/30 border border-border rounded-sm hover:bg-muted/30 transition-colors text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-source-serif-pro text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className=" px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="font-source-serif-pro text-4xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
                Ecossistema BBLAW
              </h2>
              <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto font-light tracking-tight">
                Fazemos parte de um grupo de empresas criadas e assessoradas por
                Vinícius Borges, voltadas à liberdade patrimonial e financeira
              </p>
            </div>

            <motion.div {...stagger} className="grid sm:grid-cols-2 gap-6 lg:gap-8 pt-12">
              {ecosystem.map((company, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="p-10 bg-muted/20 border border-white/5 hover:bg-white/[0.02] transition-colors flex flex-col"
                >
                  <h3 className="font-source-serif-pro text-2xl text-white mb-4 tracking-tight">{company.name}</h3>
                  <p className="text-base text-white/50 font-light tracking-tight">{company.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...fadeInUp} className="text-center pt-8">
              <p className="text-muted-foreground italic">
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
            className="max-w-4xl mx-auto text-center space-y-12"
          >
            <h2 className="font-source-serif-pro text-4xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
              Nossa filosofia
            </h2>
            <blockquote className="text-3xl md:text-5xl font-source-serif-pro italic text-white/80 text-balance leading-tight">
              "O BBLAW não vende documentos — entrega caminhos."
            </blockquote>
            <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto text-pretty font-light tracking-tight">
              Cada cliente recebe uma engenharia jurídica feita para durar,
              resistir e escalar. Acreditamos que liberdade patrimonial é um
              direito de quem se planeja — e nós entregamos o mapa para isso.
            </p>
            <a
              href="https://wa.me/5521979901686?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Agendar Diagnóstico Estratégico
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
        <TeamCarousel />
      </section>
    </div>
  );
}
