"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Calendar, CheckCircle } from "lucide-react";

// Substitua pelo link público de agendamento do Google Calendar
// Crie em: Google Calendar → Criar → Compromisso → Configurar página de agendamento
const GOOGLE_CALENDAR_BOOKING_URL = "https://calendar.google.com/calendar/u/0/r";

const TIPOS_CONSULTORIA = [
  "Planejamento Patrimonial",
  "Jurídico Estratégico Empresarial",
  "Internacionalização",
  "Cripto & Fintechs",
  "Contencioso",
  "Legal Growth",
  "Holding",
  "Offshore",
  "Outro",
];

type Step = "form" | "success";

export default function ConsultoriaPage() {
  const [step, setStep] = useState<Step>("form");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tipo: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/consultoria", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setStep("success");
      } else {
        alert("Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(15,35,25,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-8">
              Agende sua consultoria
            </span>
            <h1
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)", letterSpacing: "-0.02em" }}
            >
              Consultoria
            </h1>
            <h1
              className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block mb-8"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)", letterSpacing: "-0.02em" }}
            >
              Estratégica.
            </h1>
            <p className="text-[15px] text-muted-foreground font-light max-w-md leading-relaxed">
              Preencha o formulário e agende sua sessão diretamente na nossa agenda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form / Success */}
      <section className="pb-32 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto pt-24">
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">

              {step === "form" && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nome + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="block text-xs font-medium text-muted-foreground uppercase tracking-wider"
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
                          className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 h-11"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-muted-foreground uppercase tracking-wider"
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
                          className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 h-11"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    {/* Telefone + Tipo */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="phone"
                          className="block text-xs font-medium text-muted-foreground uppercase tracking-wider"
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
                          className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 h-11"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="tipo"
                          className="block text-xs font-medium text-muted-foreground uppercase tracking-wider"
                        >
                          Tipo de consultoria *
                        </label>
                        <select
                          id="tipo"
                          name="tipo"
                          value={formData.tipo}
                          onChange={handleChange}
                          required
                          className="w-full h-11 rounded-md border border-border bg-card px-3 text-sm text-foreground focus:outline-none focus:border-foreground/40 transition-colors"
                        >
                          <option value="" disabled>
                            Selecione...
                          </option>
                          {TIPOS_CONSULTORIA.map((tipo) => (
                            <option key={tipo} value={tipo}>
                              {tipo}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Descrição */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium text-muted-foreground uppercase tracking-wider"
                      >
                        Descrição do seu caso *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 resize-none"
                        placeholder="Descreva o que você precisa e seus objetivos..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 font-light text-[10px] uppercase tracking-[0.22em] rounded-full border border-foreground bg-foreground text-background transition-all duration-300 hover:opacity-80 hover:scale-[1.02] disabled:opacity-50"
                    >
                      {loading ? "Enviando..." : "Enviar e agendar"}
                      {!loading && <Send className="h-3 w-3" />}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ao enviar, você concorda com nossa política de privacidade (LGPD)
                    </p>
                  </form>
                </motion.div>
              )}

              {step === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-16"
                >
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-6 w-6 text-foreground" />
                  </div>
                  <h2
                    className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight mb-4"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                  >
                    Solicitação
                  </h2>
                  <h2
                    className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight mb-6"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                  >
                    Recebida.
                  </h2>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xs mx-auto mb-10">
                    Suas informações foram registradas. Agora escolha um horário disponível
                    na nossa agenda para confirmar a sessão.
                  </p>
                  <a
                    href={GOOGLE_CALENDAR_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-10 py-4 font-light text-[11px] uppercase tracking-[0.22em] border border-foreground bg-foreground text-background rounded-full transition-all duration-300 hover:opacity-80 hover:scale-[1.02]"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    Agendar na nossa agenda
                  </a>
                  <p className="mt-6 text-xs text-muted-foreground">
                    Entraremos em contato para confirmar o pagamento e a sessão.
                  </p>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
