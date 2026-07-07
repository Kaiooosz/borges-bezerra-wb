"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Como as estruturas offshore podem aumentar a minha privacidade?",
    answer:
      "Estruturas offshore em jurisdições estratégicas oferecem maior confidencialidade através de legislações que protegem a identidade dos beneficiários finais. Além disso, permitem a separação legal entre patrimônio pessoal e empresarial, criando camadas de proteção que dificultam o acesso não autorizado a informações sensíveis.",
  },
  {
    question: "Como a internacionalização pode ajudar meu negócio?",
    answer:
      "A internacionalização oferece diversificação de riscos, acesso a mercados globais, estrutura fiscal coerente com o regime aplicável, proteção cambial e maior credibilidade internacional. Permite também estruturar operações em jurisdições com ambiente regulatório mais favorável e custos operacionais reduzidos.",
  },
  {
    question: "Como funciona o cumprimento de obrigações fiscais em estruturas internacionais?",
    answer:
      "As estruturas são orientadas à conformidade com as legislações brasileiras e internacionais e declaradas conforme as exigências da Receita Federal, incluindo a Declaração de Capitais Brasileiros no Exterior (CBE) e o Imposto de Renda. O planejamento tributário segue a legislação aplicável, com transparência e documentação completa.",
  },
  {
    question: "Quanto tempo leva para abrir uma empresa offshore?",
    answer:
      "O prazo varia conforme a jurisdição escolhida, mas geralmente leva de 2 a 4 semanas. Jurisdições como Ilhas Virgens Britânicas e Panamá podem ser mais rápidas (7–10 dias), enquanto outras como Suíça ou Singapura podem levar até 6 semanas. Cuidamos de todo o processo para você.",
  },
  {
    question: "Quais são os custos envolvidos?",
    answer:
      "Os custos variam conforme a complexidade da estrutura, jurisdição escolhida e serviços necessários. Incluem taxas de constituição, registro, agente residente, manutenção anual e nossos honorários advocatícios. Fornecemos orçamento detalhado e transparente após análise do seu caso.",
  },
  {
    question: "É legal ter uma empresa offshore?",
    answer:
      "Sim, é completamente legal. Empresas offshore são utilizadas por milhões de pessoas e empresas no mundo todo para fins legítimos como internacionalização de negócios, proteção patrimonial e planejamento sucessório. O importante é manter total transparência e conformidade com as obrigações fiscais brasileiras.",
  },
];

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-sans text-base md:text-lg text-foreground font-light group-hover:text-foreground/80 transition-colors duration-200 leading-snug">
          {faq.question}
        </span>
        <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-border text-muted-foreground group-hover:border-foreground/40 transition-all duration-200">
          {open ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[15px] text-muted-foreground font-light leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section className="py-24 md:py-32 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span className="block text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Dúvidas
            </span>
            <div>
              <h2
                className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
              >
                <span className="block">Perguntas</span>
                <span className="block">Frequentes.</span>
              </h2>
            </div>
          </motion.div>

          {/* Custom accordion */}
          <div>
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
