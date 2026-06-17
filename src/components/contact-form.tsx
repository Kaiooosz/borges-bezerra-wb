"use client";

import type React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const OBJETIVOS = [
  "Internacionalização empresarial",
  "Holding e sucessão",
  "Paraguai",
  "Cripto e fintech",
  "Proteção patrimonial",
  "Outro",
];

const FATURAMENTO = [
  "Até R$ 50 mil/mês",
  "R$ 50 mil – 200 mil/mês",
  "R$ 200 mil – 1 mi/mês",
  "Acima de R$ 1 mi/mês",
];

const MARGEM = [
  "Não sei / não controlo",
  "Até 20%",
  "20% – 40%",
  "Acima de 40%",
];

const PATRIMONIO = [
  "Até R$ 500 mil",
  "R$ 500 mil – 2 mi",
  "R$ 2 mi – 10 mi",
  "Acima de R$ 10 mi",
];

const ESTRUTURA_EXTERIOR = [
  "Ainda não tenho",
  "Tenho empresa no exterior",
  "Tenho conta no exterior",
  "Tenho empresa e conta",
];

const RECEITA_INTERNACIONAL = [
  "Não recebo do exterior",
  "Recebo eventualmente",
  "Recebo de forma recorrente",
];

const URGENCIA = [
  "Imediata",
  "Nos próximos 1–3 meses",
  "Apenas pesquisando",
];

const selectClass =
  "w-full bg-card border border-border text-foreground rounded-md h-11 px-3 text-sm focus:outline-none focus:border-foreground/40 appearance-none";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  objetivo: "",
  faturamento: "",
  margem: "",
  patrimonio: "",
  estruturaExterior: "",
  receitaInternacional: "",
  urgencia: "",
  message: "",
};

function Field({
  id,
  label,
  options,
  value,
  onChange,
  required,
}: {
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label} {required && "*"}
      </label>
      <select id={id} name={id} value={value} onChange={onChange} required={required} className={selectClass}>
        <option value="" disabled>
          Selecione
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export function ContactForm() {
  const [formData, setFormData] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "qualificacao" }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData(EMPTY);
        setTimeout(() => setSubmitted(false), 6000);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
                Diagnóstico
              </span>
              <div>
                <h2
                  className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
                  style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                >
                  Solicite Seu
                </h2>
                <h2
                  className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
                  style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                >
                  Diagnóstico.
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Responda algumas perguntas sobre o seu caso. Com base no seu perfil,
                direcionamos a análise certa e retornamos com os próximos passos concretos.
              </p>
              <div className="space-y-3 pt-2">
                <div className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">WhatsApp</span><br />
                  +55 21 97990-1686
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
                    Solicitação recebida
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Nossa equipe vai analisar o seu perfil e entrar em contato pelo WhatsApp ou
                    email informado com os próximos passos do diagnóstico.
                  </p>
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

                  <Field
                    id="objetivo"
                    label="Objetivo principal"
                    options={OBJETIVOS}
                    value={formData.objetivo}
                    onChange={handleChange}
                    required
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      id="faturamento"
                      label="Faturamento mensal"
                      options={FATURAMENTO}
                      value={formData.faturamento}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      id="margem"
                      label="Margem do negócio"
                      options={MARGEM}
                      value={formData.margem}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      id="patrimonio"
                      label="Patrimônio aproximado"
                      options={PATRIMONIO}
                      value={formData.patrimonio}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      id="estruturaExterior"
                      label="Estrutura no exterior"
                      options={ESTRUTURA_EXTERIOR}
                      value={formData.estruturaExterior}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      id="receitaInternacional"
                      label="Receita internacional"
                      options={RECEITA_INTERNACIONAL}
                      value={formData.receitaInternacional}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      id="urgencia"
                      label="Urgência"
                      options={URGENCIA}
                      value={formData.urgencia}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Contexto adicional
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 resize-none"
                      placeholder="Conte brevemente o que motiva a busca por uma estrutura agora (opcional)..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 font-light text-[10px] uppercase tracking-[0.22em] rounded-full border border-foreground bg-foreground text-background transition-all duration-300 hover:opacity-80 hover:scale-[1.02]"
                    >
                      {loading ? "Enviando..." : "Solicitar diagnóstico"}
                      {!loading && <Send className="h-3 w-3" />}
                    </button>
                    <a
                      href="https://wa.me/5521979901686?text=Olá!%20Tenho%20interesse%20em%20falar%20diretamente%20com%20a%20Bezerra%20Borges%20Advogados%20sobre%20meu%20caso.%20Podemos%20conversar%3F"
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
