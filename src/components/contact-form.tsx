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

  const webhookURL =
    "https://bblaw.bitrix24.com.br/rest/37/gexzxip6uycclp7j/crm.lead.add.json?NAME%3DformData.name%252C%2520%252F%252F%2520Nome%2520do%2520contato%26PHONE%3D%2520%255B%257B%2520VALUE%253A%2520formData.phone%252C%2520VALUE_TYPE%253A%2520%2522WORK%2522%2520%257D%255D%252C%2520%252F%252F%2520Telefone%26EMAIL%3D%255B%257B%2520VALUE%253A%2520formData.email%252C%2520VALUE_TYPE%253A%2520%2522WORK%2522%2520%257D%255D%252C%2520%252F%252F%2520E-mail%26COMMENTS%3DformData.message%252C%2520%252F%252F%2520Coment%25C3%25A1rios";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            TITLE: formData.name,
            NAME: formData.name,
            EMAIL: [{ VALUE: formData.email, VALUE_TYPE: "WORK" }],
            PHONE: [{ VALUE: formData.phone, VALUE_TYPE: "WORK" }],
            COMMENTS: formData.message,
            SOURCE_DESCRIPTION: "Formulário de contato do site institucional",
          },
          params: { REGISTER_SONET_EVENT: "Y" },
        }),
      });

      const data = await response.json();

      if (data.result) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
      }
    } catch (error) {
      alert("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setLoading(false);
    }
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
    <section id="contato" className="py-24 px-4 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="font-source-serif-pro text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight">
              Comece sua jornada sem fronteiras
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Conte mais sobre o seu negócio e entraremos em contato.
            </p>
          </div>

          {submitted ? (
            <div className="py-16 border border-border text-center">
              <Send className="h-8 w-8 text-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium text-foreground mb-2">
                Mensagem enviada
              </h3>
              <p className="text-muted-foreground text-sm">Entraremos em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-foreground mb-2">
                    Nome completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground rounded-none focus-visible:ring-0 focus-visible:border-foreground"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground rounded-none focus-visible:ring-0 focus-visible:border-foreground"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-foreground mb-2">
                  Telefone / WhatsApp *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground rounded-none focus-visible:ring-0 focus-visible:border-foreground"
                  placeholder="(21) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-foreground mb-2">
                  O seu caso *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground rounded-none focus-visible:ring-0 focus-visible:border-foreground resize-none"
                  placeholder="Conte-nos sobre seu caso, objetivos e como podemos ajudar..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium text-sm transition-opacity hover:opacity-80 disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Enviar mensagem"}
                  {!loading && <Send className="h-4 w-4" />}
                </button>
                <a
                  href="https://wa.me/5521979901686?text=Olá,%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20com%20a%20Bezerra%20Borges%20Advogados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium text-sm transition-colors hover:bg-muted/30"
                >
                  WhatsApp direto
                </a>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda com nossa política de privacidade e proteção de dados (LGPD)
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
