"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type FeaturedJurisdiction = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  href: string;
  highlights: string[];
};

type StandardJurisdiction = {
  id: string;
  name: string;
  image: string;
  href: string;
};

const featured: FeaturedJurisdiction[] = [
  {
    id: "dubai",
    name: "DUBAI",
    tagline: "Internacionalização do Negócio",
    image: "/dubai-business-skyline-uae.jpg",
    href: "/servicos/internacionalizacao",
    highlights: [
      "Regime fiscal favorável a empresas",
      "Residência fiscal estratégica",
      "Abertura ágil com governança definida",
      "Acesso ao mercado do Oriente Médio",
      "Discrição patrimonial dentro das regras",
    ],
  },
  {
    id: "estados-unidos",
    name: "ESTADOS UNIDOS",
    tagline: "Proteção Jurídica e Organização Patrimonial",
    image: "/new-york-usa.jpg",
    href: "/servicos/internacionalizacao",
    highlights: [
      "LLC com tributação pass-through",
      "Credibilidade internacional",
      "Acesso ao mercado americano",
      "Estrutura ideal para fintechs",
      "Organização de ativos digitais",
    ],
  },
  {
    id: "singapura",
    name: "SINGAPURA",
    tagline: "Hub Financeiro e Regulação de Excelência",
    image: "/cityscape-singapore.jpg",
    href: "/servicos/internacionalizacao",
    highlights: [
      "Tributação sobre lucros territoriais",
      "Ambiente regulatório previsível",
      "Gateway para mercados asiáticos",
      "Alta reputação internacional",
      "Ideal para empresas de tecnologia",
    ],
  },
  {
    id: "caribe",
    name: "ILHA CAYMAN",
    tagline: "Confidencialidade e Estrutura Offshore",
    image: "/caribe-capital.jpg",
    href: "/servicos/internacionalizacao",
    highlights: [
      "Confidencialidade patrimonial",
      "Estrutura holding eficiente",
      "Custos operacionais reduzidos",
      "Regime sem ganho de capital local",
      "Abertura em poucos dias",
    ],
  },
];

const standard: StandardJurisdiction[] = [
  { id: "paraguai", name: "PARAGUAI", image: "/paraguai.jpg", href: "/servicos/internacionalizacao" },
  { id: "europa", name: "EUROPA", image: "/paris-eiffel-europa.jpg", href: "/servicos/internacionalizacao" },
  { id: "london", name: "REINO UNIDO", image: "/big-ben.jpg", href: "/servicos/internacionalizacao" },
  { id: "africa", name: "ÁFRICA DO SUL", image: "/africa-savanna-animals.jpg", href: "/servicos/internacionalizacao" },
  { id: "asia", name: "ARÁBIA SAUDITA", image: "/riyadh-arabia-saudita.jpg", href: "/servicos/internacionalizacao" },
];

const consultarURL = "https://wa.me/5521979901686?text=Olá!%20Tenho%20interesse%20em%20internacionalização%20e%20jurisdições%20offshore%20com%20a%20Bezerra%20Borges%20Advogados.%20Gostaria%20de%20uma%20análise%20do%20meu%20caso.";

export function JurisdictionCards() {
  return (
    <section id="jurisdicoes-grade" className="relative pt-40 pb-40 md:pt-52 md:pb-52 bg-black overflow-hidden">
      {/* Fade from page background into black */}
      <div className="absolute inset-x-0 top-0 h-56 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, var(--background) 0%, rgba(0,0,0,0) 100%)" }} />
      {/* Fade back to page background at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-56 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, var(--background) 0%, rgba(0,0,0,0) 100%)" }} />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="block text-[11px] font-medium uppercase tracking-[0.25em] text-white/40 mb-6">
            15+ Jurisdições
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-2">
            <div>
              <h2
                className="font-sans font-light uppercase leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
              >
                <span className="block text-white">Onde Estruturamos</span>
                <span
                  className="block heading-gradient"
                  style={{ color: "rgba(255,255,255,0.24)" }}
                >
                  Seu Patrimônio.
                </span>
              </h2>
            </div>
            <p className="text-[14px] text-white/40 font-light max-w-xs leading-relaxed md:pb-2">
              Operamos em mais de 15 países com estratégias sob medida para cada perfil e objetivo patrimonial
            </p>
          </div>
        </motion.div>

        {/* Featured Cards — 4 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {featured.map((j, index) => (
            <motion.div
              key={j.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="relative h-[480px] rounded-lg overflow-hidden group cursor-pointer border border-white/8">

                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${j.image})` }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

                {/* Explorar link */}
                <a
                  href={j.href}
                  className="absolute top-4 right-4 flex items-center gap-1 text-xs text-white/50 hover:text-white transition-colors duration-200 z-10"
                >
                  Explorar
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">

                  <h3 className="text-2xl font-bold text-white mb-1 tracking-wide">
                    {j.name}
                  </h3>

                  <p className="text-xs text-white/60 font-light mb-5 leading-relaxed">
                    {j.tagline}
                  </p>

                  {/* Highlights */}
                  <div className="mb-5">
                    <span className="block text-[10px] uppercase tracking-widest text-white/40 font-light mb-2">
                      Destaques Estratégicos
                    </span>
                    <ul className="space-y-1">
                      {j.highlights.map((h) => (
                        <li key={h} className="text-xs text-white/70 font-light flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href={consultarURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold uppercase tracking-widest rounded-lg transition-all duration-200"
                  >
                    Avaliar meu caso
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Standard Cards — 5 colunas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {standard.map((j, index) => (
            <motion.div
              key={j.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="relative h-[240px] rounded-lg overflow-hidden group cursor-pointer border border-white/8">

                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${j.image})` }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-sm font-bold text-white mb-3 tracking-wide">
                    {j.name}
                  </h3>
                  <a
                    href={consultarURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-[10px] font-semibold uppercase tracking-widest rounded-lg transition-all duration-200"
                  >
                    Avaliar meu caso
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href={consultarURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 font-light text-[10px] uppercase tracking-[0.22em] rounded-full transition-all duration-300 hover:scale-[1.02]"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "white", backdropFilter: "blur(12px)" }}
          >
            Descobrir a jurisdição ideal
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

