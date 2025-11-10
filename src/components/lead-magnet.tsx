"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { BookOpen, Download } from "lucide-react";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your email service
    console.log("Lead magnet submission:", { name, email });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-24 px-4 bg-zinc-950">
      <div className="container mx-auto">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-zinc-900 to-black border-white/10 p-6 md:p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Content */}
            <div>
              <div className="inline-flex p-4 rounded-lg bg-white/5 mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
                Guia essencial de estruturas empresariais internacionais
              </h2>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6">
                Baixe gratuitamente nosso ebook completo sobre como estruturar
                empresas offshore, proteger patrimônio e expandir negócios
                globalmente.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Jurisdições estratégicas para seu negócio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Planejamento tributário internacional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Proteção patrimonial e privacidade</span>
                </li>
              </ul>
            </div>

            {/* Right side - Form */}
            <div>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex p-4 rounded-full bg-green-500/10 mb-4">
                    <Download className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl text-white mb-2">Obrigado!</h3>
                  <p className="text-zinc-400">
                    Verifique seu email para baixar o ebook.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Seu nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-black/50 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/30"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Seu melhor email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-black/50 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/30"
                    />
                  </div>
                  {/* <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-zinc-200"
                    size="lg"
                  >
                    Baixar ebook gratuito
                    <Download className="ml-2 h-4 w-4" />
                  </Button> */}
                  <p className="text-xs text-zinc-600 text-center">
                    Seus dados estão protegidos e não serão compartilhados
                  </p>
                </form>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
