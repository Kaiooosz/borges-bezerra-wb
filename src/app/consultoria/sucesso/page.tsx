"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const WHATSAPP_NUMBER = "5521979901686";

function SucessoContent() {
  const searchParams = useSearchParams();
  const produto = searchParams.get("produto") || "consultoria";
  const [countdown, setCountdown] = useState(5);

  const whatsappMessage = encodeURIComponent(
    `Olá! Acabei de realizar o pagamento da ${produto} pela Bezerra Borges Advogados. Segue o comprovante em anexo.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = whatsappUrl;
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, whatsappUrl]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      <section className="flex items-center justify-center min-h-[80vh] px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-7 w-7 text-foreground" />
          </div>

          <span className="block text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-6">
            Pagamento confirmado
          </span>

          <h1
            className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight mb-2"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", letterSpacing: "-0.02em" }}
          >
            Obrigado
          </h1>
          <h1
            className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", letterSpacing: "-0.02em" }}
          >
            pela confiança.
          </h1>

          <p className="text-[14px] text-muted-foreground font-light leading-relaxed mb-10">
            Seu pagamento foi recebido com sucesso. Agora envie o comprovante
            via WhatsApp para confirmarmos o agendamento da sua sessão.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 font-light text-[11px] uppercase tracking-[0.22em] bg-foreground text-background rounded-full transition-all duration-300 hover:opacity-80 hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            Enviar comprovante no WhatsApp
          </a>

          <p className="mt-6 text-[11px] text-muted-foreground font-light">
            Redirecionando automaticamente em {countdown}s...
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default function ConsultoriaSucessoPage() {
  return (
    <Suspense>
      <SucessoContent />
    </Suspense>
  );
}
