"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { articles, categories } from "@/data/articles";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function ArtigosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const featuredArticle = articles.find((a) => a.featured) || articles[0];
  const filteredArticles = articles.filter((a) => a.slug !== featuredArticle.slug).filter(
    (a) => selectedCategory === "Todos" || a.category === selectedCategory
  );

  const [visibleCount, setVisibleCount] = useState(9);
  const visibleArticles = filteredArticles.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-zinc-200">

      {/* Hero Section - Segue o padrão do site */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden px-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto text-center space-y-6 relative z-10"
        >
          <h1 className="font-source-serif-pro text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight text-foreground">
            Artigos e <span className="italic text-muted-foreground font-light">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Conteúdo estratégico sobre proteção patrimonial, internacionalização e ativos globais.
          </p>
        </motion.div>
      </section>

      {/* Featured Article Section - Premium Card Dinâmico */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-card rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 border border-border"
          >
            <div className="grid lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 relative h-[400px] lg:h-[600px] overflow-hidden">
                <img
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 dark:bg-black/40" />
              </div>

              <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-card">
                <div className="space-y-6">
                  <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                    Artigo em Destaque
                  </span>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {featuredArticle.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {featuredArticle.readTime}</span>
                  </div>
                  <h2 className="font-source-serif-pro text-4xl md:text-5xl leading-[1.1] text-foreground font-medium">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-zinc-900 dark:bg-white text-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 px-10 h-14 text-base font-semibold shadow-xl transition-all hover:scale-105 active:scale-95"
                  >
                    <Link href={`/artigos/${featuredArticle.slug}`}>
                      Ler artigo completo <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation - Segue o padrão dark/light */}
      <div className="max-w-7xl mx-auto px-4 mb-20 flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-8 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border ${selectedCategory === cat
              ? "bg-zinc-900 dark:bg-zinc-100 border-zinc-900 dark:border-zinc-100 text-zinc-100 dark:text-zinc-900 shadow-lg scale-105"
              : "bg-card border-border text-muted-foreground hover:border-zinc-400 dark:hover:border-zinc-300 shadow-sm"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid - Pattern que você pediu */}
      <section className="pb-32 px-4 text-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {visibleArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-card rounded-[2rem] overflow-hidden transition-all duration-500 border border-border shadow-lg hover:shadow-2xl hover:-translate-y-3"
            >
              <Link href={`/artigos/${article.slug}`} className="relative aspect-[16/10] overflow-hidden block">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              <div className="p-8 pb-10 flex flex-col flex-grow bg-card">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em]">{article.category}</span>
                </div>

                <Link href={`/artigos/${article.slug}`}>
                  <h3 className="font-source-serif-pro text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </Link>

                <p className="mt-4 text-muted-foreground text-sm leading-relaxed line-clamp-3 font-light">
                  {article.excerpt}
                </p>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">{article.date}</span>
                    <span className="text-[8px] text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em] mt-1 font-black">Bezerra Borges</span>
                  </div>

                  <Link
                    href={`/artigos/${article.slug}`}
                    className="flex items-center justify-center w-12 h-12 bg-foreground text-background rounded-full transition-all duration-500 group-hover:scale-110 shadow-xl"
                  >
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < filteredArticles.length && (
          <div className="mt-20">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="rounded-full px-12 h-14 border-border text-muted-foreground hover:bg-foreground hover:text-background transition-all duration-500 shadow-md hover:shadow-xl group"
            >
              Carregar mais Insights
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
