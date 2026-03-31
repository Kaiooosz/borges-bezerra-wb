"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield, Globe, TrendingUp, Scale, DollarSign,
  CheckCircle2, AlertTriangle, Building2,
  ArrowRight, ChevronDown, Award, ShieldCheck,
  PiggyBank
} from "lucide-react";
import Image from "next/image";
import OffshoreComplianceCard from "@/components/compliceoffshorecard";

export default function OffshoreExpertPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState("individual");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jurisdictions = [
    {
      name: "Estados Unidos (Delaware/Wyoming)",
      flag: "🇺🇸",
      privacy: "Alta",
      tax: "0% federal para não-residentes",
      setup: "3-5 dias",
      ideal: "Holdings, proteção patrimonial, conta bancária robusta",
      cost: "$2,500 - $5,000",
      benefits: ["Jurisprudência sólida", "Sistema bancário confiável", "Privacidade corporativa", "Facilidade de abertura de contas"]
    },
    {
      name: "Paraguai",
      flag: "🇵🇾",
      privacy: "Muito Alta",
      tax: "10% territorial (renda local apenas)",
      setup: "2-4 semanas",
      ideal: "Residência fiscal, trading, importação/exportação",
      cost: "$3,000 - $6,000",
      benefits: ["Custo de vida baixo", "Residência rápida", "Privacidade bancária", "Sistema tributário territorial"]
    },
    {
      name: "Uruguai",
      flag: "🇺🇾",
      privacy: "Alta",
      tax: "0% sobre renda externa",
      setup: "4-6 semanas",
      ideal: "Residência fiscal premium, contas bancárias sólidas",
      cost: "$4,000 - $8,000",
      benefits: ["Estabilidade política", "Qualidade de vida", "Sigilo bancário forte", "Não tributa renda externa"]
    },
    {
      name: "Nevis",
      flag: "🇰🇳",
      privacy: "Máxima",
      tax: "0% sobre renda externa",
      setup: "1-2 semanas",
      ideal: "Máxima proteção patrimonial, trusts",
      cost: "$5,000 - $10,000",
      benefits: ["Proteção contra credores líder mundial", "Privacidade absoluta", "Sem impostos externos", "Estruturas blindadas"]
    },
    {
      name: "Estônia (e-Residency)",
      flag: "🇪🇪",
      privacy: "Moderada",
      tax: "0% sobre lucros não distribuídos",
      setup: "1-3 semanas",
      ideal: "Negócios digitais, fintechs, cripto",
      cost: "$3,500 - $7,000",
      benefits: ["100% digital", "Acesso ao mercado EU", "Infraestrutura tech", "Reputação forte"]
    },
    {
      name: "Dubai (DMCC/IFZA)",
      flag: "🇦🇪",
      privacy: "Alta",
      tax: "0% imposto corporativo (zonas francas)",
      setup: "2-4 semanas",
      ideal: "Trading, cripto, consultoria internacional",
      cost: "$6,000 - $12,000",
      benefits: ["0% imposto pessoal", "Infraestrutura premium", "Hub internacional", "Visto de residência incluído"]
    }
  ];

  const objections = [
    {
      objection: "Offshore é ilegal ou imoral",
      icon: Scale,
      answer: "Estruturas offshore são legais e utilizadas por empresas globais, investidores e empreendedores há décadas.",
      detail: "Grandes grupos utilizam estruturas internacionais com transparência e compliance, utilizam estruturas internacionais para otimização fiscal. A diferença está em fazer com compliance total, documentação adequada e declaração correta às autoridades. A BBLAW garante que cada estrutura seja totalmente transparente perante a Receita Federal e órgãos reguladores."
    },
    {
      objection: "É muito caro e complexo",
      icon: DollarSign,
      answer: "O custo de não proteger seu patrimônio é infinitamente maior que o investimento em uma estrutura profissional.",
      detail: "Uma offshore bem estruturada pode gerar economia tributária de 15% a 40% ao ano, proteger ativos contra litígios e facilitar sucessão familiar. O investimento inicial se paga em menos de 2 anos na maioria dos casos. Nossa equipe simplifica todo o processo - você não precisa ser expert."
    },
    {
      objection: "Não tenho patrimônio suficiente",
      icon: PiggyBank,
      answer: "Estruturas offshore fazem sentido a partir de $100k em patrimônio ou $20k/mês em faturamento internacional.",
      detail: "Quanto antes você estrutura, mais você protege. Não espere ter milhões para começar a planejar. Empreendedores digitais, traders, consultores e profissionais liberais com renda internacional se beneficiam imensamente de estruturas offshore - independente do tamanho atual do patrimônio."
    },
    {
      objection: "Tenho medo de problemas com a Receita Federal",
      icon: ShieldCheck,
      answer: "Estruturas offshore DECLARADAS são completamente legais e reduzem riscos com o fisco.",
      detail: "O problema não é ter offshore - é não declarar. Nossa metodologia inclui todo o suporte para declaração de bens no exterior, DIRPF, e-Financeira e CBE. Trabalhamos com contadores especializados e garantimos que você esteja 100% em compliance. Ter uma estrutura declarada é mais seguro do que manter tudo no Brasil sem planejamento."
    },
    {
      objection: "Não sei qual jurisdição escolher",
      icon: Globe,
      answer: "Cada cliente tem necessidades únicas. Fazemos uma análise personalizada antes de recomendar qualquer jurisdição.",
      detail: "Não existe melhor jurisdição universal. Analisamos seu perfil, objetivos, tipo de negócio, residência fiscal atual e planos futuros. Só então recomendamos a estrutura ideal. Alguns clientes precisam de 2-3 jurisdições trabalhando em conjunto. Nossa consultoria inicial de $125 já traz esse diagnóstico completo."
    },
    {
      objection: "E se as regras mudarem?",
      icon: AlertTriangle,
      answer: "Estruturas bem feitas são flexíveis e adaptáveis a mudanças regulatórias.",
      detail: "O cenário regulatório sempre evolui (CRS, FATCA, BEPS). Por isso construímos estruturas modulares que podem ser ajustadas. Fornecemos suporte contínuo e atualizações sobre mudanças que impactam sua estrutura. Além disso, diversificação jurisdicional mitiga riscos de mudanças abruptas em um único país."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultoria Estratégica Inicial",
      description: "Análise profunda do seu perfil patrimonial, objetivos e exposição fiscal atual",
      duration: "1-2 horas",
      deliverable: "Diagnóstico completo + Roadmap personalizado"
    },
    {
      number: "02",
      title: "Estruturação da Solução",
      description: "Desenho da arquitetura jurídica ideal com escolha de jurisdições e estruturas societárias",
      duration: "3-5 dias",
      deliverable: "Proposta técnica detalhada com custos e cronograma"
    },
    {
      number: "03",
      title: "Implementação Legal",
      description: "Abertura de empresas, trusts ou holdings com toda documentação necessária",
      duration: "2-6 semanas",
      deliverable: "Empresas ativas + Documentação completa"
    },
    {
      number: "04",
      title: "Abertura Bancária",
      description: "Relacionamento bancário internacional com contas corporativas ou pessoais",
      duration: "2-4 semanas",
      deliverable: "Contas bancárias operacionais"
    },
    {
      number: "05",
      title: "Integração Contábil/Fiscal",
      description: "Setup contábil internacional e compliance com Receita Federal brasileira",
      duration: "1-2 semanas",
      deliverable: "Sistema de compliance completo"
    },
    {
      number: "06",
      title: "Suporte Contínuo",
      description: "Acompanhamento mensal, atualizações regulatórias e ajustes necessários",
      duration: "Ongoing",
      deliverable: "Relatórios mensais + Suporte ilimitado"
    }
  ];

  const packages = [
    {
      name: "STARTER OFFSHORE",
      price: "$3,500",
      ideal: "Empreendedores digitais e profissionais liberais",
      features: [
        "1 empresa em jurisdição selecionada",
        "Suporte para abertura de conta bancária",
        "Declaração DIRPF ano corrente",
        "3 meses de suporte incluído",
        "Documentação apostilada",
        "Consultoria inicial detalhada"
      ],
      highlight: false
    },
    {
      name: "PROFESSIONAL SUITE",
      price: "$8,500",
      ideal: "Empresários com operação internacional consolidada",
      features: [
        "2 empresas em jurisdições complementares",
        "Estrutura holding + operacional",
        "Abertura de 2-3 contas bancárias",
        "Compliance fiscal completo (BR + Exterior)",
        "6 meses de suporte premium",
        "Documentação + Apostilamento",
        "Estratégia de migração patrimonial",
        "Planejamento sucessório básico"
      ],
      highlight: true
    },
    {
      name: "WEALTH PROTECTION",
      price: "$18,000+",
      ideal: "Alto patrimônio e Family Offices",
      features: [
        "Estrutura multi-jurisdicional completa",
        "Trust + Holdings + Operacionais",
        "Múltiplas contas bancárias premium",
        "Private Banking internacional",
        "Residência fiscal em país escolhido",
        "12 meses de suporte concierge",
        "Planejamento sucessório avançado",
        "Proteção contra litígios",
        "Estratégia de cidadania/visto dourado",
        "Reuniões trimestrais de revisão"
      ],
      highlight: false
    }
  ];

  const faqs = [
    {
      q: "Quanto tempo leva para ter uma offshore operacional?",
      a: "O processo completo varia entre 4-8 semanas dependendo da jurisdição e complexidade. A abertura da empresa em si leva 1-3 semanas, mas a abertura bancária pode adicionar 2-4 semanas. Jurisdições como EUA e Estônia são mais rápidas (2-3 semanas total), enquanto Dubai e Uruguai levam 4-6 semanas. Aceleramos ao máximo com nossa rede de parceiros locais."
    },
    {
      q: "Preciso viajar para abrir a offshore?",
      a: "Na maioria dos casos, não. 80% das nossas estruturas são feitas 100% remotamente através de procurações e apostilamento digital. Algumas jurisdições (Dubai, Uruguai) podem exigir visita para abertura de conta bancária premium, mas isso pode ser otimizado em uma viagem estratégica de 3-5 dias que organizamos para você."
    },
    {
      q: "Como fica minha situação com a Receita Federal?",
      a: "Você deve declarar todos os bens no exterior no DIRPF, e-Financeira e CBE. Fornecemos suporte completo para essas declarações através dos nossos contadores especializados. Ter offshore declarada é LEGAL e não aumenta risco de malha fina - pelo contrário, demonstra organização e compliance. O problema é sonegação, não otimização legal."
    },
    {
      q: "Posso usar a offshore para receber pagamentos internacionais?",
      a: "Sim! Essa é uma das principais aplicações. Você pode receber de clientes/parceiros internacionais diretamente na sua offshore, evitando IOF, spreads cambiais abusivos e complexidade de remessas. Depois pode transferir para o Brasil quando necessário, já com planejamento tributário adequado."
    },
    {
      q: "E se eu quiser fechar a estrutura no futuro?",
      a: "Todas as nossas estruturas são reversíveis. Você pode dissolver empresas, encerrar trusts e repatriar recursos seguindo os procedimentos legais. Incluímos essa estratégia de saída no planejamento inicial. Normalmente o processo de encerramento leva 2-4 meses e custa 30-50% do valor da abertura."
    },
    {
      q: "Qual o investimento mínimo que faz sentido?",
      a: "Recomendamos estruturas offshore para: (1) Patrimônio líquido acima de $100k USD, OU (2) Faturamento internacional acima de $20k/mês, OU (3) Necessidade específica de proteção patrimonial. Abaixo disso, os custos podem não se justificar ainda - mas fazemos a análise caso a caso na consultoria."
    },
    {
      q: "Vocês cuidam da contabilidade da offshore?",
      a: "Sim, através da BCONT (nossa empresa de contabilidade internacional). Fornecemos contabilidade completa tanto da estrutura offshore quanto das obrigações no Brasil. Preços variam de $200-800/mês dependendo do volume de transações e complexidade."
    },
    {
      q: "Posso ter uma conta em dólar no meu nome?",
      a: "Sim! Podemos abrir contas bancárias tanto em nome da sua empresa offshore quanto contas pessoais internacionais (para valores mais altos). As melhores opções incluem bancos americanos, europeus (Portugal, Estônia) e nos Emirados Árabes. Contas em USD, EUR, GBP disponíveis."
    }
  ];

  const realCases = [
    {
      profile: "Empresário Digital",
      problem: "Pagava 34% de impostos sobre faturamento internacional de $50k/mês",
      solution: "Estrutura em Delaware + Estônia + conta USD",
      result: "Redução para 12% + proteção patrimonial completa",
      savings: "$132k economizados no primeiro ano"
    },
    {
      profile: "Trader Profissional",
      problem: "Operações cripto sem estrutura, receio de autuação futura",
      solution: "Holding no Paraguai + conta em Dubai",
      result: "100% regularizado + otimização de 40% em impostos",
      savings: "$85k economizados + segurança jurídica total"
    },
    {
      profile: "Família com Patrimônio $2M",
      problem: "Patrimônio exposto a litígios e sem planejamento sucessório",
      solution: "Trust em Nevis + Holdings USA/Uruguai",
      result: "Proteção absoluta + sucessão programada + economia fiscal",
      savings: "Impossível mensurar o valor da proteção obtida"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground tracking-tight">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-foreground z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Premium */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Grid background responsivo ao tema */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center space-y-8 mt-20">
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

          <h1 className="font-source-serif-pro font-light text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.1] text-white py-4">
            Estrutura <span className="font-bold">Offshore</span> <br />
            <span className="italic text-white/40">que realmente funcionam.</span>
          </h1>

          <p className="text-base md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed text-pretty font-light tracking-tight">
            Nossa atuação em Estruturas Offshore oferece o acesso a jurisdições estáveis e moedas fortes,
            funcionando como um pilar fundamental para a proteção patrimonial e diversificação de investimentos
            seguindo o mais alto nível de conformidade internacional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="https://wa.me/5521979901686?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Consultoria ($125)
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="btn-outline"
            >
              Ver Como Funciona
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-medium mb-2">12+</div>
              <div className="text-muted-foreground text-sm">Jurisdições</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-medium mb-2">200+</div>
              <div className="text-muted-foreground text-sm">Estruturas Criadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-medium mb-2">$50M+</div>
              <div className="text-muted-foreground text-sm">Patrimônio Protegido</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-medium mb-2">100%</div>
              <div className="text-muted-foreground text-sm">Compliance Legal</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-foreground/50" />
        </div>
      </section>

      {/* Section: Por Que Offshore */}
      <section className="py-32 border-t border-border bg-leniear-to-b from-black ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-source-serif-pro text-4xl md:text-6xl font-extralight text-white mb-6 leading-[1.1] tracking-tight">
              Por que você precisa de <br />
              <span className="italic ml-4 inline-block">uma estrutura offshore</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Planejamento patrimonial legítimo com conformidade internacional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-muted/20 border border-white/5 hover:bg-white/[0.02] transition-all duration-300 flex flex-col">
              <Shield className="w-10 h-10 text-white mb-8 stroke-[1.5px]" />
              <h3 className="font-source-serif-pro text-2xl md:text-3xl text-white mb-4 tracking-tight">
                Proteção Patrimonial
              </h3>
              <p className="text-base text-white/50 leading-relaxed font-light tracking-tight mb-8">
                Blindagem legal contra processos, bloqueios judiciais e riscos políticos.
                Seus ativos ficam protegidos em jurisdições com forte rule of law.
              </p>
              <ul className="space-y-3 text-sm text-white/40 font-light mt-auto">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white/20 shrink-0 mt-0.5" />
                  <span>Separação patrimonial pessoa física vs empresa</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white/20 shrink-0 mt-0.5" />
                  <span>Proteção contra instabilidade política/econômica</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white/20 shrink-0 mt-0.5" />
                  <span>Mitigação de riscos jurídicos mediante segregação patrimonial lícita e governança.</span>
                </li>
              </ul>
            </div>

            <div className="p-10 bg-muted/20 border border-white/5 hover:bg-white/[0.02] transition-all duration-300 flex flex-col">
              <TrendingUp className="w-10 h-10 text-white mb-8 stroke-[1.5px]" />
              <h3 className="font-source-serif-pro text-2xl md:text-3xl text-white mb-4 tracking-tight">
                Otimização Tributária
              </h3>
              <p className="text-base text-white/50 leading-relaxed font-light tracking-tight mb-8">
                Otimize sua carga tributária de forma legal e transparente, conforme normas aplicáveis.
              </p>
              <ul className="space-y-3 text-sm text-white/40 font-light mt-auto">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white/20 shrink-0 mt-0.5" />
                  <span>Potencial de eficiência tributária avaliado caso a caso, em conformidade.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white/20 shrink-0 mt-0.5" />
                  <span>Diferimento de lucros e reinvestimento eficiente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white/20 shrink-0 mt-0.5" />
                  <span>Tratados internacionais para evitar dupla tributação</span>
                </li>
              </ul>
            </div>

            <div className="p-10 bg-muted/20 border border-white/5 hover:bg-white/[0.02] transition-all duration-300 flex flex-col">
              <Globe className="w-10 h-10 text-white mb-8 stroke-[1.5px]" />
              <h3 className="font-source-serif-pro text-2xl md:text-3xl text-white mb-4 tracking-tight">
                Liberdade Global
              </h3>
              <p className="text-base text-white/50 leading-relaxed font-light tracking-tight mb-8">
                Opere internacionalmente sem barreiras burocráticas. Receba de qualquer país,
                opere em múltiplas moedas e escale sem fronteiras.
              </p>
              <ul className="space-y-3 text-sm text-white/40 font-light mt-auto">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white/20 shrink-0 mt-0.5" />
                  <span>Contas bancárias em USD, EUR, GBP, CHF</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white/20 shrink-0 mt-0.5" />
                  <span>Facilidade para contratos e parcerias internacionais</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white/20 shrink-0 mt-0.5" />
                  <span>Planejamento de residência fiscal estratégica</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-40 mt-42 ">
            <h2 className="font-source-serif-pro text-4xl md:text-6xl font-extralight text-white mb-6 leading-[1.1] tracking-tight">
              Jurisdições exclusivas em <br />
              <span className="italic ml-4 inline-block">cobertura global</span>
            </h2>
          </div>

          {/* <Link href="/" className="flex items-center gap-3">
            <div className="shrink-0">
              <img 
                src="/LogoBranco.svg" 
                alt="BB Logo" 
                className="h-14 w-14 md:h-16 md:w-16"
              />
            </div> 
          </Link> */}

          <div className="mt-42 h-96 bg-muted/30 border border-border rounded-sm flex items-center justify-center">
            <div className="">
              <Image
                src="/image-caribe.jpg"
                alt="caribe"
                width={1200}
                height={600}
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>

          <div className="mt-42 h-96 bg-muted/30 border border-border rounded-sm flex items-center justify-center">
            <div className="">
              <Image
                src="/image-europa.jpg"
                alt="europa"
                width={1200}
                height={600}
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>

          <div className="mt-42 h-96 bg-muted/30 border border-border rounded-sm flex items-center justify-center">
            <div className="">
              <Image
                src="/image-asia.jpg"
                alt="asia"
                width={1200}
                height={600}
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>

          <div className="mt-42 h-96 bg-muted/30 border border-border rounded-sm flex items-center justify-center">
            <div className="">
              <Image
                src="/image-sul-africa.jpg"
                alt="america do sul e africa"
                width={1200}
                height={600}
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Quebrando Objeções */}
      <section className="py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-source-serif-pro text-4xl md:text-6xl font-extralight text-white mb-6 leading-[1.1] tracking-tight">
              Quebrando os mitos sobre <br />
              <span className="italic ml-4 inline-block">estruturas offshore</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vamos endereçar todas as suas preocupações com transparência e dados reais.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {objections.map((obj, i) => (
              <div
                key={i}
                className="p-8 bg-muted/30 border border-border rounded-sm hover:bg-muted/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-muted/30 rounded-sm flex items-center justify-center">
                      <obj.icon className="h-8 w-8 text-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-source-serif-pro text-2xl md:text-3xl text-white mb-3 tracking-tight">{obj.objection}</h3>
                    <p className="text-lg text-white font-medium mb-4 tracking-tight">{obj.answer}</p>
                    <p className="text-muted-foreground leading-relaxed">{obj.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-sm text-center">
            <Award className="h-16 w-16 mx-auto mb-6 text-foreground" />
            <h3 className="text-3xl font-medium mb-4">Adoção de políticas e controles de compliance, com auditoria e atualização contínuas.</h3>
            <p className="text-xl --ring mb-6 max-w-3xl mx-auto">
              Todas as nossas estruturas são 100% declaradas e em conformidade com a legislação brasileira e internacional.
              <span className="text-foreground font-medium">Você não assume riscos legais - apenas otimiza o que é seu por direito.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-muted/30 rounded-none border border-white/20 backdrop-blur-sm">
                <CheckCircle2 className="inline h-5 w-5 mr-2" />
                Declaração DIRPF Completa
              </div>
              <div className="px-6 py-3 bg-muted/30 rounded-none border border-white/20 backdrop-blur-sm">
                <CheckCircle2 className="inline h-5 w-5 mr-2" />
                e-Financeira e CBE
              </div>
              <div className="px-6 py-3 bg-muted/30 rounded-none border border-white/20 backdrop-blur-sm">
                <CheckCircle2 className="inline h-5 w-5 mr-2" />
                CRS/FATCA Compliance
              </div>
            </div>
          </div>
        </div>
      </section>

      <OffshoreComplianceCard />

    </div>
  );
}