import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como as estruturas offshore podem aumentar a minha privacidade?",
    answer:
      "Estruturas offshore em jurisdições estratégicas oferecem maior confidencialidade através de legislações que protegem a identidade dos beneficiários finais. Além disso, permitem a separação legal entre patrimônio pessoal e empresarial, criando camadas de proteção que dificultam o acesso não autorizado a informações sensíveis.",
  },
  {
    question: "Como a internacionalização pode ajudar meu negócio?",
    answer:
      "A internacionalização oferece diversificação de riscos, acesso a mercados globais, otimização tributária legal, proteção cambial e maior credibilidade internacional. Permite também estruturar operações em jurisdições com ambiente regulatório mais favorável e custos operacionais reduzidos.",
  },
  {
    question:
      "Como funciona o cumprimento de obrigações fiscais em estruturas internacionais?",
    answer:
      "Mantemos total conformidade com as legislações brasileiras e internacionais. Todas as estruturas são declaradas conforme exigências da Receita Federal, incluindo Declaração de Capitais Brasileiros no Exterior (CBE) e Imposto de Renda. Nosso planejamento tributário é 100% legal e transparente.",
  },
  {
    question: "Quanto tempo leva para abrir uma empresa offshore?",
    answer:
      "O prazo varia conforme a jurisdição escolhida, mas geralmente leva de 2 a 4 semanas. Jurisdições como Ilhas Virgens Britânicas e Panamá podem ser mais rápidas (7–10 dias), enquanto outras como Suíça ou Singapura podem levar até 6 semanas. Cuidamos de todo o processo.",
  },
  {
    question: "Quais são os custos envolvidos?",
    answer:
      "Os custos variam conforme a complexidade da estrutura, jurisdição escolhida e serviços necessários. Incluem taxas de constituição, registro, agente residente, manutenção anual e honorários advocatícios. Fornecemos orçamento detalhado e transparente após análise do seu caso.",
  },
  {
    question: "É legal ter uma empresa offshore?",
    answer:
      "Sim, é completamente legal. Empresas offshore são utilizadas por milhões de pessoas e empresas no mundo todo para fins legítimos como internacionalização de negócios, proteção patrimonial e planejamento sucessório. O importante é manter total transparência e conformidade com as obrigações fiscais.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 px-4 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-source-serif-pro text-4xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
              Perguntas frequentes
            </h2>
            <p className="text-lg md:text-xl text-white/50 font-light tracking-tight max-w-2xl mx-auto">
              Respostas para as dúvidas mais comuns sobre nossos serviços
            </p>
          </div>

          <Accordion type="single" collapsible className="divide-y divide-border border-t border-b border-border">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none"
              >
                <AccordionTrigger className="text-left text-white py-8 text-lg md:text-xl font-source-serif-pro hover:no-underline tracking-tight">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 leading-relaxed pb-8 text-base font-light tracking-tight max-w-2xl">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
