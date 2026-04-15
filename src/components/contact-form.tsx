"use client";

import type React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";


export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
      alert("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contato" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">

          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">

            {/* Left — Info */}
            <div className="md:col-span-2 space-y-6">
              <span className="block text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                Contato
              </span>
              <div>
                <h2
                  className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
                  style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                >
                  Comece Sua
                </h2>
                <h2
                  className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
                  style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                >
                  Jornada.
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Conte sobre o seu caso e nossa equipe entrará em contato com a solução ideal para você.
              </p>
              <div className="space-y-3 pt-2">
                <div className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">WhatsApp</span><br />
                  +55 11 98271-2025
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Email</span><br />
                  contato@bezerraborges.com.br
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-5">
                    <Send className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="font-sans font-light uppercase text-xl text-foreground mb-2 tracking-wide">
                    Mensagem enviada!
                  </h3>
                  <p className="text-muted-foreground">Entraremos em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Nome completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 h-11"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 h-11"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Telefone / WhatsApp *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 h-11"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Seu caso *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 resize-none"
                      placeholder="Conte-nos sobre seu caso, objetivos e como podemos ajudar..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 font-light text-[10px] uppercase tracking-[0.22em] rounded-full border border-foreground bg-foreground text-background transition-all duration-300 hover:opacity-80 hover:scale-[1.02]"
                    >
                      {loading ? "Enviando..." : "Enviar mensagem"}
                      {!loading && <Send className="h-3 w-3" />}
                    </button>
                    <a
                      href="https://wa.me/5511982712025?text=Olá!%20Tenho%20interesse%20em%20falar%20diretamente%20com%20a%20Bezerra%20Borges%20Advogados%20sobre%20meu%20caso.%20Podemos%20conversar%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 font-light text-[10px] uppercase tracking-[0.22em] rounded-full border border-border text-foreground transition-all duration-300 hover:border-foreground/40 hover:scale-[1.02]"
                    >
                      WhatsApp direto
                    </a>
                  </div>

                  <p className="text-xs text-muted-foreground text-center pt-1">
                    Ao enviar, você concorda com nossa política de privacidade (LGPD)
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
