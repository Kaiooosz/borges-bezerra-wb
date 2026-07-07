"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

const plans = [
  {
    id: "introdutorio",
    productId: "prod_UDRN5K9P9Caz7T",
    badge: "INTRODUTÓRIO",
    title: "Consulta com Contador",
    price: "US$ 100",
    description: "Sessão de 30 min para tirar dúvidas com o especialista contábil offshore.",
    features: [
      "Tire dúvidas pontuais",
      "Análise rápida de viabilidade",
      "Valor 100% reembolsável ao fechar plano de abertura",
    ],
    featured: false,
  },
  {
    id: "estrategico",
    productId: "prod_UDRNVJp9NTuhrU",
    badge: "ESTRATÉGICO",
    title: "Estratégia Offshore",
    price: "US$ 119",
    description: "Sessão de 1h para a criação e execução de estratégia offshore personalizada.",
    features: [
      "Planejamento jurisdicional completo",
      "Estruturação societária avançada",
      "Definição de fluxos financeiros",
      "Valor 100% reembolsável ao fechar plano de abertura",
    ],
    featured: false,
  },
  {
    id: "brasil",
    productId: "prod_UDRLAUzEIEB211",
    badge: "MAIS VENDIDO",
    title: "Estratégia Brasil",
    price: "US$ 149",
    description: "Sessão de 2h para elaborar estratégia tributária e de proteção jurídica no Brasil, conforme o regime aplicável.",
    features: [
      "Planejamento de proteção patrimonial no Brasil",
      "Estrutura fiscal nacional coerente",
      "Integração com offshore",
      "Valor 100% reembolsável ao fechar plano de abertura",
    ],
    featured: true,
  },
];

export function ConsultoriaPricing() {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handleCheckout(productId: string, planId: string) {
    trackEvent("begin_checkout", { plan: planId });
    setLoadingId(planId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Erro ao iniciar pagamento. Tente novamente.");
      }
    } catch {
      alert("Erro de conexão. Tente novamente.");
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container px-4 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="block text-[11px] font-light uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Consultoria
          </span>
          <div>
            <h2
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)",  letterSpacing: "-0.025em" }}
            >
              <span className="block">Agende Agora</span>
              <span className="block">Sua Consultoria.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="p-8 h-full flex flex-col bg-card"
                style={plan.featured ? { boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)" } : undefined}
              >

                <div className="flex items-center justify-between mb-4">
                  <span className="block text-[9px] font-light uppercase tracking-[0.25em] text-muted-foreground">
                    {plan.badge}
                  </span>
                  {plan.featured && (
                    <span className="text-[8px] font-light uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.7)" }}>
                      Recomendado
                    </span>
                  )}
                </div>

                <h3 className="font-sans font-light text-foreground text-xl mb-4 leading-snug">
                  {plan.title}
                </h3>

                <div className="mb-4">
                  <span className="block text-[9px] font-light uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    A partir de
                  </span>
                  <span className="font-sans text-4xl md:text-5xl font-light text-foreground tabular" style={{ letterSpacing: "-0.02em" }}>
                    {plan.price}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-3.5 h-3.5 text-foreground/50 shrink-0 mt-0.5" />
                      <span className="text-[13px] text-muted-foreground font-light leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    onClick={() => handleCheckout(plan.productId, plan.id)}
                    disabled={loadingId === plan.id}
                    className="flex w-full items-center justify-center py-3.5 font-light text-[10px] uppercase tracking-[0.22em] rounded-full transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={
                      plan.featured
                        ? { background: "rgba(255,255,255,0.92)", color: "#0a0a0a", border: "1px solid rgba(255,255,255,0.9)" }
                        : { background: "rgba(255,255,255,0.06)", color: "white", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(12px)" }
                    }
                  >
                    {loadingId === plan.id ? "Aguarde..." : "Contratar Agora"}
                  </button>
                  <p className="text-[9px] text-muted-foreground text-center font-light mt-3 uppercase tracking-[0.15em]">
                    Valor 100% reembolsável no serviço final
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <p className="text-xs text-muted-foreground font-light">
            * Valores em dólares americanos. Consultorias realizadas de forma remota ou presencial.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
