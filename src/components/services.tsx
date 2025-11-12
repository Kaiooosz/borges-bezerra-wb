import { Card } from "@/components/ui/card";
import {
  Building2,
  Scale,
  TrendingDown,
  FileCheck,
  Landmark,
  Globe,
  Coins,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Abertura de empresas Offshore",
    description:
      "Estruturação completa de empresas em jurisdições estratégicas para otimização fiscal e proteção patrimonial.",
  },
  {
    icon: Scale,
    title: "Regulamentação de apostas municipais",
    description:
      "Assessoria especializada para conformidade legal de operações de apostas e jogos em âmbito municipal.",
  },
  {
    icon: TrendingDown,
    title: "Redução de carga tributária",
    description:
      "Planejamento tributário estratégico para redução legal da carga fiscal de pessoas físicas e jurídicas.",
  },
  {
    icon: FileCheck,
    title: "Conformidade e regulatório",
    description:
      "Garantia de compliance com legislações nacionais e internacionais, mitigando riscos legais e regulatórios.",
  },
  {
    icon: Landmark,
    title: "Serviços Bancários Internacionais",
    description:
      "Abertura e gestão de contas bancárias internacionais com total sigilo e segurança patrimonial.",
  },
  {
    icon: Globe,
    title: "Consultoria Tributária Internacional",
    description:
      "Assessoria especializada em tributação internacional, tratados e planejamento fiscal global.",
  },
  {
    icon: Coins,
    title: "Criptomoedas, Web3.0 e DeFi",
    description:
      "Consultoria jurídica para operações com criptoativos, tokenização e finanças descentralizadas.",
  },
  {
    icon: Briefcase,
    title: "Abertura de holdings e subsidiárias",
    description:
      "Estruturação de holdings familiares e empresariais para proteção patrimonial e sucessão.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-16 sm:py-20 md:py-24 bg-backgroud">
      <div className="mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foregroung mb-4">
            Nossas especialidades
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Soluções jurídicas completas para internacionalização, proteção
            patrimonial e expansão de negócios
          </p>
        </div>

        {/* Services grid - CENTRALIZADO */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px]">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-zinc-900/50 border border-border hover:bg-zinc-900 hover:border-white/20 transition-all duration-300 h-full group flex flex-col"
                >
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-foregroung group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-serif text-xl text-foregroung mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed grow">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
