"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      <main className="container mx-auto px-4 max-w-4xl">
        {/* Hero */}
        <div className="pt-32 md:pt-40 pb-12">
          <span className="block text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground mb-8">
            Uso do Site
          </span>
          <h1
            className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
              
              letterSpacing: "-0.025em",
            }}
          >
            Termos
          </h1>
          <h1
            className="font-sans font-light uppercase heading-gradient leading-[0.9] tracking-tight block mb-6"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
              
              letterSpacing: "-0.025em",
            }}
          >
            de Uso.
          </h1>
          <p className="text-[15px] text-muted-foreground font-light max-w-md leading-relaxed">
            Última atualização: 09 de fevereiro de 2026
          </p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-14 pb-24">

          <section className="space-y-4">
            <h2
              className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}
            >
              1. Identificação
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              O presente site é de propriedade e operação do <strong className="text-foreground font-light">Bezerra Borges Advogados</strong>, sociedade de advogados inscrita na Ordem dos Advogados do Brasil — Seccional de São Paulo, com sede na Avenida Paulista, 1636, Conjunto 4, 15° andar, Cerqueira César, São Paulo — SP, CEP 01310-200.
            </p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Responsáveis legais: <strong className="text-foreground font-light">Vinicius Borges de Albuquerque</strong> e <strong className="text-foreground font-light">Renata Dorta Bezerra</strong>, sócios fundadores.
            </p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Contato: contato@bezerraborges.com.br | +55 21 97990-1686
            </p>
          </section>

          <section className="space-y-4">
            <h2
              className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}
            >
              2. Aceitação dos Termos
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Ao acessar e utilizar este site, o usuário declara ter lido, compreendido e aceito integralmente os presentes Termos de Uso. O acesso continuado ao site após alterações destes Termos configura aceitação automática das modificações realizadas.
            </p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Caso não concorde com qualquer disposição destes Termos, o usuário deverá cessar imediatamente o uso do site.
            </p>
          </section>

          <section className="space-y-4">
            <h2
              className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}
            >
              3. Natureza das Informações
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              O conteúdo disponibilizado neste site tem caráter exclusivamente <strong className="text-foreground font-light">informativo e educacional</strong>. Nenhuma informação publicada constitui aconselhamento jurídico, consultoria tributária, recomendação de investimentos ou serviço jurídico profissional.
            </p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              A prestação de serviços jurídicos profissionais pelo Bezerra Borges Advogados somente se configura mediante celebração de contrato formal de prestação de serviços, devidamente assinado pelas partes, nos termos do Estatuto da Advocacia (Lei nº 8.906/1994) e do Código de Ética e Disciplina da OAB.
            </p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              <strong className="text-foreground font-light">Vedação expressa:</strong> É vedada, nos termos do Código de Ética da OAB, qualquer interpretação das informações deste site como garantia de resultados, promessa de êxito ou captação irregular de clientela.
            </p>
          </section>

          <section className="space-y-4">
            <h2
              className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}
            >
              4. Propriedade Intelectual
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Todo o conteúdo deste site — incluindo textos, logotipos, marcas, imagens, vídeos, layouts, código-fonte, artigos e materiais educativos — é de titularidade exclusiva do Bezerra Borges Advogados ou de seus licenciantes, sendo protegido pelas leis de propriedade intelectual vigentes, em especial pela Lei nº 9.610/1998 (Lei de Direitos Autorais) e pela Lei nº 9.279/1996 (Lei de Propriedade Industrial).
            </p>
            <ul className="space-y-2 pl-4">
              {[
                "É vedada a reprodução, cópia, distribuição ou modificação de qualquer conteúdo sem autorização prévia e expressa do escritório;",
                "A marca \"Bezerra Borges Advogados\" e os logotipos associados são de uso exclusivo do escritório;",
                "O uso não autorizado poderá ensejar responsabilização civil e criminal.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                  <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-white/30 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2
              className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}
            >
              5. Coleta e Uso de Dados Pessoais
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              O tratamento de dados pessoais coletados por este site é regido pela <strong className="text-foreground font-light">Lei nº 13.709/2018 (LGPD)</strong>. Os dados fornecidos pelos usuários por meio dos formulários de contato (nome, e-mail, telefone e informações sobre o caso) são utilizados exclusivamente para fins de atendimento e retorno ao interessado.
            </p>
            <ul className="space-y-2 pl-4">
              {[
                "Base legal de tratamento: execução de contrato pré-contratual e legítimo interesse (art. 7º, V e IX, LGPD);",
                "Os dados não são compartilhados com terceiros sem consentimento, salvo obrigação legal;",
                "O usuário pode solicitar acesso, correção, portabilidade ou exclusão de seus dados a qualquer momento pelo e-mail contato@bezerraborges.com.br;",
                "Os dados são armazenados em ambiente seguro e eliminados conforme prazos legais.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                  <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-white/30 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2
              className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}
            >
              6. Cookies e Tecnologias de Rastreamento
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Este site pode utilizar cookies e tecnologias similares para finalidades de análise de tráfego, melhoria da experiência do usuário e mensuração de desempenho de campanhas. Ao continuar navegando, o usuário consente com o uso dessas tecnologias nos termos da LGPD.
            </p>
          </section>

          <section className="space-y-4">
            <h2
              className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}
            >
              7. Limitação de Responsabilidade
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              O Bezerra Borges Advogados não se responsabiliza por:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                "Decisões tomadas com base exclusivamente nas informações disponibilizadas neste site, sem a contratação formal de serviços jurídicos;",
                "Interrupções, falhas técnicas ou indisponibilidade temporária do site;",
                "Conteúdo de sites de terceiros eventualmente linkados a partir deste domínio;",
                "Danos diretos, indiretos ou consequentes decorrentes do uso ou impossibilidade de uso do site.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                  <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-white/30 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2
              className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}
            >
              8. Conduta do Usuário
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">É vedado ao usuário:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Utilizar o site para fins ilícitos, fraudulentos ou que violem direitos de terceiros;",
                "Realizar scraping, mineração de dados ou reprodução automatizada do conteúdo;",
                "Transmitir vírus, malwares ou qualquer código malicioso;",
                "Tentar acessar áreas restritas ou sistemas internos do escritório sem autorização.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                  <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-white/30 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2
              className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}
            >
              9. Legislação Aplicável e Foro
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Os presentes Termos de Uso são regidos e interpretados de acordo com a legislação da República Federativa do Brasil. Fica eleito o foro da <strong className="text-foreground font-light">Comarca de São Paulo — SP</strong> para dirimir quaisquer controvérsias decorrentes deste instrumento, renunciando as partes a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section className="space-y-4">
            <h2
              className="font-sans font-light uppercase text-foreground text-xl tracking-[0.05em]"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.07), 0 2px 6px rgba(0,0,0,0.8)" }}
            >
              10. Alterações
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              O Bezerra Borges Advogados reserva-se o direito de alterar estes Termos a qualquer tempo, mediante publicação da versão atualizada neste endereço. Recomenda-se a leitura periódica deste documento.
            </p>
            <p className="text-xs text-muted-foreground font-light pt-6 border-t border-border">
              Bezerra Borges Advogados — Avenida Paulista, 1636, Conjunto 4, 15° andar, Cerqueira César, São Paulo — SP, CEP 01310-200 — www.bezerraborges.com.br — contato@bezerraborges.com.br
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
