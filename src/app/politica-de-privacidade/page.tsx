"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      <main className="container mx-auto px-4 max-w-4xl">
        {/* Hero */}
        <div className="pt-32 md:pt-40 pb-12">
          <span className="block text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-8">
            Transparência e Governança
          </span>
          <h1
            className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
              
              letterSpacing: "-0.025em",
            }}
          >
            Políticas
          </h1>
          <h1
            className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block mb-6"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
              
              letterSpacing: "-0.025em",
            }}
          >
            Internas.
          </h1>
          <p className="text-[15px] text-muted-foreground font-light max-w-md leading-relaxed">
            Bezerra Borges Advogados — em vigor desde 09 de fevereiro de 2026
          </p>
        </div>

        {/* Signatários */}
        <section className="border-t border-border py-10 mb-12">
          <p className="text-xs font-light uppercase tracking-[0.2em] text-muted-foreground mb-5">
            Responsáveis Institucionais
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground font-light">
            <span>Vinicius Borges de Albuquerque</span>
            <span>Renata Dorta Bezerra</span>
            <span>Micaelle Sampaio Bezerra</span>
            <span>Roberto Bezerra</span>
            <span>Alice Gomes Rayol</span>
            <span>Renan Aparecido Marineli dos Santos</span>
          </div>
        </section>

        {/* Conteúdo */}
        <div className="space-y-14 pb-24">

          <section className="space-y-4">
            <h2 className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}>
              1. Apresentação Institucional
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              O presente documento estabelece as Políticas Internas, as normas de conduta, as diretrizes operacionais e os princípios de governança do Bezerra Borges Advogados, aplicáveis a todos os seus sócios, advogados associados, consultores, colaboradores, parceiros e terceiros que atuem direta ou indiretamente em nome do escritório.
            </p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">Este Manual tem por finalidade:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Assegurar a conformidade legal e ética em todas as atividades desenvolvidas pelo escritório;",
                "Padronizar procedimentos internos, fluxos operacionais e práticas profissionais;",
                "Proteger a reputação institucional, os interesses dos clientes e o patrimônio intelectual do escritório;",
                "Garantir o alinhamento permanente entre a prática profissional, a missão, a visão e os valores institucionais.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                  <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-white/30 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}>
              2. Identidade Institucional
            </h2>

            <div className="space-y-3">
              <h3 className="text-sm font-light uppercase tracking-[0.15em] text-foreground">2.1 Missão</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Prestar serviços jurídicos e estratégicos de elevado padrão técnico, voltados à proteção patrimonial, à estruturação jurídica, ao planejamento tributário e à internacionalização de negócios, assegurando segurança jurídica, eficiência operacional e soluções personalizadas, em estrita observância à legislação brasileira e internacional.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-light uppercase tracking-[0.15em] text-foreground">2.2 Visão</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Ser reconhecido como referência nacional e internacional em engenharia jurídica patrimonial e empresarial, destacando-se pela excelência técnica, ética profissional, inovação estratégica e atuação global integrada.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-light uppercase tracking-[0.15em] text-foreground">2.3 Valores</h3>
              <ul className="space-y-2 pl-4">
                {[
                  "Ética e legalidade absoluta;",
                  "Segurança jurídica e previsibilidade;",
                  "Confidencialidade e proteção de dados;",
                  "Excelência técnica e atualização contínua;",
                  "Transparência nas relações com clientes e parceiros;",
                  "Estratégia, inovação e visão de longo prazo;",
                  "Responsabilidade institucional e reputacional.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                    <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-white/30 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}>
              3. Escopo de Atuação
            </h2>
            <ul className="space-y-2 pl-4">
              {[
                "Planejamento patrimonial e sucessório;",
                "Estruturação de holdings familiares e empresariais;",
                "Planejamento tributário nacional e internacional;",
                "Estruturas offshore e internacionalização de patrimônio;",
                "Direito societário e governança corporativa;",
                "Compliance fiscal, regulatório e empresarial;",
                "Criptoativos, blockchain e ativos digitais;",
                "Consultoria jurídica estratégica para empresários e investidores;",
                "Reorganizações societárias e patrimoniais;",
                "Proteção patrimonial lícita e organização jurídica preventiva.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                  <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-white/30 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}>
              4. Ética e Conduta Profissional
            </h2>
            <div className="space-y-3">
              <h3 className="text-sm font-light uppercase tracking-[0.15em] text-foreground">4.1 Observância às Normas da Advocacia</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">Todos os profissionais vinculados ao escritório devem observar, de forma rigorosa e incondicional:</p>
              <ul className="space-y-2 pl-4">
                {[
                  "O Estatuto da Advocacia e da OAB (Lei nº 8.906/1994);",
                  "O Código de Ética e Disciplina da OAB;",
                  "Os Provimentos, Resoluções e demais normativos do Conselho Federal da OAB;",
                  "A legislação brasileira e internacional aplicável às operações assessoradas.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                    <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-white/30 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}>
              5. Compliance e Conformidade Legal
            </h2>
            <div className="space-y-3">
              <h3 className="text-sm font-light uppercase tracking-[0.15em] text-foreground">5.1 Conformidade Regulatória</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">O Bezerra Borges Advogados adota postura ativa, preventiva e contínua de compliance, especialmente nas operações que envolvam estruturas offshore, planejamento tributário internacional, criptoativos, transferências internacionais de recursos e reorganizações patrimoniais.</p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">Devem ser rigorosamente observadas: legislação PLD/AML, procedimentos KYC, normas FATCA, CRS e BEPS, legislação cambial e tributária brasileira e regras de substância econômica.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-light uppercase tracking-[0.15em] text-foreground">5.2 Vedação a Atos Ilícitos</h3>
              <ul className="space-y-2 pl-4">
                {[
                  "Estruturar ou participar de operações com finalidade ilícita ou fraudulenta;",
                  "Ocultar, dissimular ou lavar bens, direitos ou valores;",
                  "Criar estruturas desprovidas de propósito econômico legítimo;",
                  "Utilizar o escritório para evasão fiscal ou prática de crimes financeiros.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                    <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-white/30 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}>
              6. Proteção de Dados e Confidencialidade
            </h2>
            <div className="space-y-3">
              <h3 className="text-sm font-light uppercase tracking-[0.15em] text-foreground">6.1 LGPD — Lei nº 13.709/2018</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">O escritório cumpre integralmente a Lei Geral de Proteção de Dados, bem como legislações estrangeiras equivalentes, quando aplicáveis. São diretrizes obrigatórias: coleta mínima de dados, utilização exclusiva para as finalidades contratadas, armazenamento seguro e controlado, acesso restrito e eliminação conforme prazos legais.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-light uppercase tracking-[0.15em] text-foreground">6.2 Sigilo Profissional</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">O sigilo profissional é princípio fundamental, absoluto e inegociável. Todos os profissionais assinam Termo de Confidencialidade e mantêm o sigilo mesmo após o encerramento da relação profissional.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}>
              7. Atendimento ao Cliente
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">O atendimento prestado pelo escritório é personalizado, estratégico, claro e fundamentado em análise técnica aprofundada. É vedado criar expectativas irreais, minimizar riscos jurídicos ou omitir informações relevantes ao cliente.</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}>
              8. Contratação e Honorários
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">Todo serviço é formalizado mediante contrato escrito contendo escopo, honorários, prazos, responsabilidades e cláusulas de confidencialidade. Os honorários observam a Tabela da OAB, a complexidade técnica, o risco jurídico e o valor econômico da operação.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}>
              9. Disposições Finais
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              O descumprimento das políticas estabelecidas neste Manual poderá ensejar advertência, suspensão, rescisão contratual, comunicação à OAB e responsabilização civil, administrativa e criminal.
            </p>
            <p className="text-xs text-muted-foreground font-light pt-4 border-t border-border">
              Este Manual entra em vigor aos 09 de fevereiro de 2026. São Paulo: Avenida Paulista, 1636, Conjunto 4, 15° andar — Cerqueira César, São Paulo — SP, 01310-200. www.bezerraborges.com.br
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
