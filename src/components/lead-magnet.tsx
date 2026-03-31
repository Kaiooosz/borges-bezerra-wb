"use client";

import type React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { BookOpen, Check } from "lucide-react";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-24 px-4 bg-muted/20 border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto border border-border">
          <div className="grid md:grid-cols-2">
            {/* Left side */}
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border">
              <BookOpen className="h-7 w-7 text-foreground mb-6 opacity-80" />
              <h2 className="font-source-serif-pro text-3xl sm:text-4xl font-extralight text-white mb-6 tracking-tight leading-tight">
                Guia essencial de estruturas empresariais internacionais
              </h2>
              <ul className="space-y-4">
                {[
                  "Jurisdições estratégicas para seu negócio",
                  "Planejamento tributário internacional",
                  "Proteção patrimonial e privacidade",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-base text-white/50 font-light tracking-tight">
                    <span className="text-white/20">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side - Form */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              {submitted ? (
                <div className="text-center py-8">
                  <Check className="h-8 w-8 text-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-foreground mb-2">Recebido</h3>
                  <p className="text-muted-foreground text-sm">
                    Verifique seu email para baixar o guia.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm font-medium text-white/80 mb-6 uppercase tracking-widest">
                    Receba o guia gratuitamente
                  </p>
                  <Input
                    type="text"
                    placeholder="Nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground rounded-none focus-visible:ring-0 focus-visible:border-foreground"
                  />
                  <Input
                    type="email"
                    placeholder="Seu melhor email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground rounded-none focus-visible:ring-0 focus-visible:border-foreground"
                  />
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Receber guia
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Seus dados estão protegidos e não serão compartilhados.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
