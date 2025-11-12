"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MessageSquare, Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your form service
    console.log("Contact form submission:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contato" className="py-24 px-4 bg--background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex p-4 rounded-lg bg--background mb-6">
              <MessageSquare className="h-8 w-8 text-foregroung" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foregroung mb-4 tracking-tight">
              Comece sua jornada sem fronteiras
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              Conte mais sobre o seu negócio e entraremos em contato
            </p>
          </div>

          {/* Form */}
          <Card className="bg-zinc-900/50 border-border p-6 md:p-8 lg:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex p-4 rounded-full bg-green-500/10 mb-4">
                  <Send className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl text-foregroung mb-2">Mensagem enviada!</h3>
                <p className="text--chart-4">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text--chart-4 mb-2"
                    >
                      Nome completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-backgroud/50 border-border text-foregroung placeholder:text-zinc-600 focus:border-white/30"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text--chart-4 mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-backgroud/50 border-border text-foregroung placeholder:text-zinc-600 focus:border-white/30"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text--chart-4 mb-2"
                  >
                    Telefone / WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-backgroud/50 border-border text-foregroung placeholder:text-zinc-600 focus:border-white/30"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text--chart-4 mb-2"
                  >
                    O seu caso *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-backgroud/50 border-border text-foregroung placeholder:text-zinc-600 focus:border-white/30 resize-none"
                    placeholder="Conte-nos sobre seu caso, objetivos e como podemos ajudar..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-white text-black hover:bg-zinc-200"
                    size="lg"
                  >
                    Enviar mensagem
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    asChild
                    variant="outline"
                    className="flex-1 border-white/20 text-foregroung hover:bg-white/10 bg-transparent"
                    size="lg"
                  >
                    <a
                      href="https://wa.me/5511943665367"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp direto
                    </a>
                  </Button>
                </div>

                <p className="text-xs text-zinc-600 text-center">
                  Ao enviar, você concorda com nossa política de privacidade e
                  proteção de dados (LGPD)
                </p>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
