"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

export default function ArtigosPage() {
  const featuredArticle = {
    title: "Guia Completo: Como Estruturar uma Holding Internacional em 2025",
    excerpt:
      "Descubra as melhores jurisdições, estratégias tributárias e passos práticos para criar sua holding offshore de forma segura e eficiente.",
    category: "Planejamento Patrimonial",
    date: "15 de Janeiro, 2025",
    image: "/modern-office-building-international-business.jpg",
    slug: "guia-holding-internacional-2025",
  };

  const articles = [
    {
      title: "Residência Fiscal no Paraguai: Vantagens e Processo Completo",
      excerpt:
        "Entenda como obter residência fiscal no Paraguai e os benefícios tributários para empresários e investidores brasileiros.",
      category: "Internacionalização",
      date: "10 de Janeiro, 2025",
      image: "/paraguay-asuncion-skyline.jpg",
      slug: "residencia-fiscal-paraguai",
    },
    {
      title: "Criptomoedas e Tributação: O Que Mudou em 2025",
      excerpt:
        "Análise completa das novas regras tributárias para criptomoedas no Brasil e estratégias de compliance para investidores.",
      category: "Cripto & Tributação",
      date: "5 de Janeiro, 2025",
      image: "/cryptocurrency-bitcoin-digital-finance.jpg",
      slug: "criptomoedas-tributacao-2025",
    },
    {
      title: "MSB nos EUA: Como Licenciar Sua Fintech Americana",
      excerpt:
        "Passo a passo para obter licença MSB (Money Services Business) nos Estados Unidos e operar legalmente no mercado americano.",
      category: "Fintechs & Regulação",
      date: "28 de Dezembro, 2024",
      image: "/fintech-usa-financial-technology.jpg",
      slug: "msb-eua-licenca-fintech",
    },
    {
      title: "Proteção Patrimonial: 5 Estratégias Essenciais",
      excerpt:
        "Conheça as principais estratégias jurídicas para proteger seu patrimônio de riscos empresariais e sucessórios.",
      category: "Planejamento Patrimonial",
      date: "20 de Dezembro, 2024",
      image: "/wealth-protection-legal-strategy.jpg",
      slug: "protecao-patrimonial-estrategias",
    },
    {
      title: "Offshore em Dubai: Guia Completo para Brasileiros",
      excerpt:
        "Tudo sobre abrir empresa em Dubai: custos, benefícios fiscais, vistos e processo de abertura bancária nos Emirados Árabes.",
      category: "Internacionalização",
      date: "15 de Dezembro, 2024",
      image: "/dubai-business-skyline-uae.jpg",
      slug: "offshore-dubai-brasileiros",
    },
    {
      title: "Legal Growth: Jurídico Estratégico para Infoprodutores",
      excerpt:
        "Como estruturar juridicamente seu negócio digital, reduzir impostos e escalar com segurança no mercado de infoprodutos.",
      category: "Jurídico Estratégico",
      date: "10 de Dezembro, 2024",
      image: "/digital-business-online-education.jpg",
      slug: "legal-growth-infoprodutores",
    }, 

     // mais paginas carragadas

    {
      title: "Como abrir empresa no Reino Unido (Inglaterra): rápido, sem burocracia e 100% legal",
      excerpt:
        "Tudo sobre abrir empresa na Inglaterra: custos, benefícios fiscais, vistos e processo de abertura bancária no Reino Unido.",
      category: "Internacionalização",
      date: "11 de Novembro, 2025",
      image: "/big-ben.jpg",
      slug: "offshore-dubai-brasileiros",
    },
    {
      title: "Singapura: por que essa é uma das jurisdições offshore mais eficientes para empresas com foco na Ásia",
      excerpt:
        "Singapura não é apenas um polo financeiro, mas um hub global de comércio, tecnologia e inovação. Sua posição estratégica entre China, Índia e Sudeste Asiático torna o país um ponto de conexão essencial para operações que envolvem importação, exportação, licenciamento ou gestão de ativos intangíveis.",
      category: "Internacionalização",
      date: "09 de Outubro, 2025",
      image: "/singapura.jpg",
      slug: "offshore-dubai-brasileiros",
    },
    {
      title: "Como abrir empresa na Irlanda: Do visto ao imposto de 12,5% – Guia Completo",
      excerpt:
        "A Irlanda não é apenas um destino turístico na Europa Ocidental, ela tem um papel central no cenário econômico global. Com um dos impostos corporativos mais baixos da União Europeia, políticas de incentivo à inovação e uma posição estratégica pós-Brexit, o país atrai desde grandes multinacionais e até startups em busca de crescimento internacional. Além disso, a reputação sólida como centro financeiro e tecnológico faz da Irlanda um ponto de entrada confiável para quem deseja expandir negócios e acessar capital europeu.",
      category: "Internacionalização",
      date: "22 de março, 2025",
      image: "/irlanda.jpg",
      slug: "offshore-dubai-brasileiros",
    },
  ];

  const categories = [
    "Todos",
    "Planejamento Patrimonial",
    "Internacionalização",
    "Cripto & Tributação",
    "Fintechs & Regulação",
    "Jurídico Estratégico",
  ];

  return (
    <div className="min-h-screen bg-backgroud text-foregroung">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]" />

        <div className=" relative z-10 px-4">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-balance">
              Artigos e <span className="italic text-zinc-400">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto text-pretty">
              Conteúdo estratégico sobre proteção patrimonial,
              internacionalização, cripto e estruturação de negócios globais
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className=" px-4">
          <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="text-sm text-zinc-400 uppercase tracking-wider">
                Artigo em Destaque
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-16/10 rounded-lg overflow-hidden bg-white/5 border border-border"
              >
                <img
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  <span className="px-3 py-1 bg-white/10 rounded-full">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                  </div>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl leading-tight text-balance">
                  {featuredArticle.title}
                </h2>

                <p className="text-lg text-zinc-400 leading-relaxed text-pretty">
                  {featuredArticle.excerpt}
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-zinc-200"
                >
                  <Link href="/artigos/guia">
                    Ler artigo completo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className=" px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl mb-4 text-balance">
              Últimos artigos
            </h2>
          </motion.div>

          <motion.div
            {...stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {articles.map((article, index) => (
              <motion.article
                key={index}
                {...fadeInUp}
                className="group bg-white/5 border border-border rounded-lg overflow-hidden hover:bg-white/10 transition-all"
              >
                <Link href={`/artigos/artigos-completos`}>
                  <div className="relative aspect-16/10 overflow-hidden bg-white/5">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-zinc-400">
                      <span className="px-2 py-1 bg-white/10 rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl leading-tight group-hover:--ring transition-colors text-balance">
                      {article.title}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 text-pretty">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div {...fadeInUp} className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-foregroung hover:bg-white/10 bg-transparent"
            >
              Carregar mais artigos
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className=" px-4">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-balance">
              Receba insights{" "}
              <span className="italic text-zinc-400">estratégicos</span>
            </h2>
            <p className="text-lg text-zinc-400 text-pretty">
              Assine nossa newsletter e receba conteúdo exclusivo sobre proteção
              patrimonial, internacionalização e estratégias jurídicas
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pt-4">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="h-12 bg-white/5 border-border text-foregroung placeholder:text--chart-1 focus:border-white/30"
              />
              <Button
                size="lg"
                className="bg-white text-black hover:bg-zinc-200 whitespace-nowrap"
              >
                Enviar
              </Button>
            </div>

            <p className="text-xs text--chart-1">
              Enviamos apenas conteúdo de valor. Sem spam. Cancele quando
              quiser.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
