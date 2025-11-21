import React from 'react'
import { Shield, Globe, TrendingUp, Lock, Users, CheckCircle, ArrowRight, Calendar } from 'lucide-react'

export default function GuiaOffshorePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif md-16 mt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 mb-6 text-sm font-semibold bg-primary/10 text-primary rounded-full">
            GUIA COMPLETO 2025
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Como Estruturar uma Holding Internacional & Soluções Offshore Avançadas
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Proteção Patrimonial • Otimização Fiscal • Cripto • Cidadania • Estruturas Corporativas Globais
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://wa.me/5511943665367" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              Agendar Consultoria
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Sumário */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Sumário</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Introdução',
              'O que é uma Holding Internacional',
              'O que é uma Empresa Offshore',
              'Por que 2025 é o melhor momento',
              'Principais benefícios',
              'Para quem é recomendada',
              'Serviços essenciais',
              'Jurisdições estratégicas',
              'Holding vs Offshore',
              'Estratégias com Cripto',
              'Teoria das Bandeiras',
              'Cidadania por Investimento',
              'Passo a passo completo',
              'Compliance e legislação',
              'Nosso método',
              'Conclusão'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">1. Introdução</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Na economia global de 2025, não existe crescimento corporativo ou preservação patrimonial sem uma estratégia internacional. A volatilidade política, o aumento de regulamentações e a elevação da carga tributária tornam a internacionalização um pilar central para negócios digitais, investidores e empresas globais.
            </p>
            <p className="text-foreground font-semibold text-xl">
              Estruturar uma holding internacional ou uma empresa offshore deixou de ser luxo — tornou-se uma ferramenta de proteção, eficiência e sobrevivência estratégica.
            </p>
            <p>
              Este guia apresenta, de forma prática e objetiva, como criar sua estrutura internacional, quais países escolher, como usar cripto com segurança, e como montar um plano fiscal global de forma 100% legal.
            </p>
          </div>
        </div>
      </section>

      {/* O que é Holding */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">2. O que é uma Holding Internacional?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            É uma empresa-mãe sediada em uma jurisdição fiscalmente vantajosa, criada para:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Shield, text: 'Controlar participações societárias' },
              { icon: TrendingUp, text: 'Gerenciar ativos' },
              { icon: Globe, text: 'Organizar expansão internacional' },
              { icon: Lock, text: 'Reduzir carga tributária global' },
              { icon: Users, text: 'Proteger patrimônio familiar/corporativo' }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-muted-foreground pt-2">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-lg font-semibold text-foreground">
              Uma holding internacional funciona como o cofre jurídico onde seu patrimônio vive de forma protegida, privada e eficiente.
            </p>
          </div>
        </div>
      </section>

      {/* O que é Offshore */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">3. O que é uma Empresa Offshore?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Uma offshore é uma empresa registrada em país estrangeiro que oferece:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              'Baixa ou zero tributação',
              'Privacidade corporativa',
              'Processos simplificados',
              'Estabilidade política/financeira',
              'Acesso a mercados globais'
            ].map((benefit, index) => (
              <div key={index} className="p-4 bg-card rounded-lg border border-border text-center">
                <CheckCircle className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm">{benefit}</p>
              </div>
            ))}
          </div>
          <h3 className="text-2xl font-bold mb-4">Benefícios Principais:</h3>
          <ul className="space-y-3">
            {[
              'Redução legal de impostos',
              'Confidencialidade financeira',
              'Custos operacionais muito menores',
              'Proteção patrimonial contra litígios',
              'Dolarização segura do patrimônio'
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Por que 2025 */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">4. Por que 2025 é o Melhor Momento?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Crescimento da economia digital',
              'Bancos globais facilitando contas remotas',
              'Adoção de cripto regulado',
              'Países competindo para atrair negócios',
              'Aumento de tributos no Brasil e UE',
              'Instabilidade política na América Latina'
            ].map((reason, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="font-semibold">{reason}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-primary text-primary-foreground rounded-lg text-center">
            <p className="text-xl font-bold">
              Nunca foi tão necessário — e tão fácil — internacionalizar.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios Estratégicos */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">5. Benefícios Estratégicos de uma Estrutura Offshore</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: '1', title: 'Diversificação Internacional', desc: 'Proteção contra riscos políticos de um único país' },
              { num: '2', title: 'Proteção Patrimonial Avançada', desc: 'Blindagem jurídica contra litígios e credores' },
              { num: '3', title: 'Otimização Tributária', desc: 'Redução legal de impostos em âmbito global' },
              { num: '4', title: 'Confidencialidade', desc: 'Privacidade sobre sócios, ativos e movimentações' },
              { num: '5', title: 'Acesso a Mercados Globais', desc: 'Plataformas e bancos restritos no Brasil' },
              { num: '6', title: 'Compliance Simplificado', desc: 'Regulamentação mais leve e clara' },
              { num: '7', title: 'Eficiência Operacional', desc: 'Processos ágeis e estruturas flexíveis' },
              { num: '8', title: 'Consolidação Patrimonial', desc: 'Imóveis, cripto, participações em uma holding' },
              { num: '9', title: 'Planejamento Sucessório', desc: 'Transição rápida, privada e eficiente' },
              { num: '10', title: 'Flexibilidade Jurídica', desc: 'Regimes contratuais mais favoráveis' }
            ].map((benefit) => (
              <div key={benefit.num} className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {benefit.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é recomendada */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">6. Para Quem é Recomendada uma Offshore?</h2>
          <div className="p-6 bg-primary/10 rounded-lg border border-primary/20 mb-8">
            <p className="text-lg font-semibold">
              📌 Critério inicial: Negócios faturando acima de R$ 500 mil/ano já se beneficiam fortemente.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">Segmentos mais beneficiados:</h3>
          <div className="space-y-6">
            {[
              { 
                title: '1. Negócios Digitais', 
                items: ['Ecommerce internacional', 'Agências', 'SaaS', 'Produtos digitais', 'Infoprodutores'] 
              },
              { 
                title: '2. Profissionais Liberais Internacionais', 
                items: ['Consultores', 'Médicos', 'Advogados', 'Mentores', 'Arquitetos'] 
              },
              { 
                title: '3. Empresas Multinacionais', 
                items: ['Proteção IP', 'Consolidação fiscal', 'Expansão global'] 
              },
              { 
                title: '4. Investidores & Empresários', 
                items: ['Diversificação', 'Proteção de portfólios', 'Gestão global de ativos'] 
              },
              { 
                title: '5. Setores Regulados', 
                items: ['Trading e Forex', 'Derivativos', 'Criptomoedas', 'Apostas e iGaming', 'Cannabis medicinal'] 
              }
            ].map((segment) => (
              <div key={segment.title} className="p-6 bg-card rounded-lg border border-border">
                <h4 className="font-bold text-xl mb-4 text-primary">{segment.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {segment.items.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-muted text-sm rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jurisdições */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">8. Jurisdições Mais Estratégicas para 2025</h2>
          <div className="space-y-6">
            {[
              { 
                num: '1', 
                country: 'Emirados Árabes Unidos (UAE)', 
                benefits: ['Zero imposto para muitos modelos', 'Ótimo para cripto e holdings'] 
              },
              { 
                num: '2', 
                country: 'Estônia', 
                benefits: ['Melhor para empresas digitais', 'Sistema tributário inovador'] 
              },
              { 
                num: '3', 
                country: 'Malta', 
                benefits: ['Forte para cripto e Web3', 'Regulamentação clara'] 
              },
              { 
                num: '4', 
                country: 'Ilhas Virgens Britânicas (BVI)', 
                benefits: ['Confidencialidade', 'Proteção patrimonial'] 
              },
              { 
                num: '5', 
                country: 'Ilhas Cayman', 
                benefits: ['Fundos, cripto e high-net worth'] 
              },
              { 
                num: '6', 
                country: 'Panamá', 
                benefits: ['Forte privacidade', 'Excelente para holdings familiares'] 
              }
            ].map((jurisdiction) => (
              <div key={jurisdiction.num} className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {jurisdiction.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3">{jurisdiction.country}</h3>
                    <ul className="space-y-2">
                      {jurisdiction.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passo a Passo */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">13. Passo a Passo para Criar sua Offshore/Holding</h2>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Diagnóstico Estratégico',
                items: ['Objetivos', 'Riscos', 'Volume financeiro', 'Tipo de negócio']
              },
              {
                step: '2',
                title: 'Seleção da Jurisdição',
                items: ['Tributação', 'Privacidade', 'Burocracia', 'Custo', 'Compatibilidade com cripto']
              },
              {
                step: '3',
                title: 'Estruturação Jurídica',
                items: ['Tipo societário', 'Diretoria', 'Beneficiários', 'Proteção patrimonial']
              },
              {
                step: '4',
                title: 'Implementação Completa',
                items: ['Registro da empresa', 'Compliance', 'KYC / AML', 'Banco', 'Contabilidade internacional']
              },
              {
                step: '5',
                title: 'Suporte Contínuo',
                items: ['Relatórios', 'Manutenção anual', 'Ajustes fiscais', 'Suporte jurídico']
              }
            ].map((phase) => (
              <div key={phase.step} className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {phase.step}
                  </div>
                  <h3 className="font-bold text-2xl pt-2">{phase.title}</h3>
                </div>
                <div className="ml-16 flex flex-wrap gap-2">
                  {phase.items.map((item, idx) => (
                    <span key={idx} className="px-4 py-2 bg-muted rounded-lg text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Agende sua Chamada Estratégica Offshore
          </h2>
          <div className="text-5xl font-bold mb-6">$125</div>
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-semibold mb-4">Inclui:</h3>
            <ul className="space-y-3 text-left">
              {[
                'Estratégia fiscal personalizada',
                'Roadmap de implantação',
                'Análise de jurisdição',
                'Proteção patrimonial',
                'Próximos passos claros',
                '30 minutos com especialista'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <a 
            href="https://wa.me/5511943665367" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-primary-foreground text-primary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg"
          >
            Agendar Agora
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p className="mb-4">
            © 2025 Bezerra Borges Advogados. Todos os direitos reservados.
          </p>
          <p className="text-sm">
            Engenharia jurídica inteligente, segura e ética — dentro e fora do Brasil
          </p>
        </div>
      </footer>
    </div>
  )
}