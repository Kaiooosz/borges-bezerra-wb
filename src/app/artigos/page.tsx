"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { articles, categories } from "@/data/articles";

export default function ArtigosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const featuredArticle = articles.find((a) => a.featured) || articles[0];
  const filteredArticles = articles
    .filter((a) => a.slug !== featuredArticle.slug)
    .filter((a) => selectedCategory === "Todos" || a.category === selectedCategory);

  const [visibleCount, setVisibleCount] = useState(9);
  const visibleArticles = filteredArticles.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      {/* Hero */}
      <section className="dark-section pt-32 md:pt-40 pb-16 md:pb-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(15,35,25,0.45) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-8">
              Publicações
            </span>
            <h1
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block"
              style={{
                fontSize: "clamp(3rem, 9vw, 8rem)",
                
                letterSpacing: "-0.02em",
              }}
            >
              Artigos e
            </h1>
            <h1
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block mb-8"
              style={{
                fontSize: "clamp(3rem, 9vw, 8rem)",
                
                letterSpacing: "-0.02em",
              }}
            >
              Insights.
            </h1>
            <p className="text-[15px] text-muted-foreground font-light max-w-md leading-relaxed">
              Conteúdo estratégico sobre proteção patrimonial, internacionalização e ativos globais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
              {/* Image */}
              <Link href={`/artigos/${featuredArticle.slug}`} className="block relative h-[320px] lg:h-[480px] overflow-hidden bg-card group">
                <img
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </Link>

              {/* Content */}
              <div className="bg-card p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="block text-[9px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-6">
                    Artigo em Destaque
                  </span>
                  <div className="flex items-center gap-4 text-[11px] text-muted-foreground font-light mb-5">
                    <span>{featuredArticle.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featuredArticle.readTime}</span>
                  </div>
                  <h2
                    className="font-sans font-light text-foreground leading-tight mb-5"
                    style={{
                      fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                     
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {featuredArticle.title}
                  </h2>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <Link
                  href={`/artigos/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 font-light text-[10px] uppercase tracking-[0.22em] text-white rounded-full transition-all duration-300 hover:scale-[1.02] self-start"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  Ler artigo
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className="px-5 py-2 font-light text-[10px] uppercase tracking-[0.2em] rounded-full transition-all duration-200"
            style={
              selectedCategory === cat
                ? { background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "white", backdropFilter: "blur(8px)" }
                : { background: "transparent", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.45)" }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {visibleArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card group hover:bg-white/[0.03] transition-all duration-300"
              >
                <Link href={`/artigos/${article.slug}`} className="block">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] font-light uppercase tracking-[0.2em] text-muted-foreground">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-[9px] font-light text-muted-foreground">
                        <Clock className="w-2.5 h-2.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3
                      className="font-sans font-light text-foreground leading-snug mb-3 line-clamp-2"
                      style={{
                        fontSize: "clamp(1rem, 2vw, 1.35rem)",
                       
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {article.title}
                    </h3>

                    <p className="text-[13px] text-muted-foreground font-light leading-relaxed line-clamp-2 mb-5">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-[10px] font-light text-muted-foreground uppercase tracking-[0.15em]">
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] font-light text-foreground/50 group-hover:text-foreground transition-colors duration-200 uppercase tracking-[0.15em]">
                        Ler
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {visibleCount < filteredArticles.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="inline-flex items-center gap-2 px-10 py-3.5 font-light text-[10px] uppercase tracking-[0.22em] text-foreground rounded-full transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "rgba(128,128,128,0.08)",
                  border: "1px solid rgba(128,128,128,0.2)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Carregar mais
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
