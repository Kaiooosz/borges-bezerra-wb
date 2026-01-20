import React, { useState } from 'react';
import { X } from 'lucide-react';

const BlogCard = ({ image, title, date, author, excerpt, fullContent }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col h-full font-source-serif-pro">
        {/* Imagem */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Conteúdo */}
        <div className="p-6 flex flex-col grow">
          <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-3 hover:text-primary transition-colors">
            {title}
          </h3>
 
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 grow">
            {excerpt}
          </p>

          {/* Footer do Card */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="text-xs text-muted-foreground">
              <p>{date}</p>
              <p className="font-semibold text-foreground">Por: {author}</p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-2 bg-chart-4 text-black rounded-full hover:bg-chart-2 transition-all font-semibold text-sm hover:scale-105 shadow-md"
            >
              Ver Mais
            </button>
          </div>
        </div>
      </div>

      {/* Modal da Matéria Completa */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-background rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
            {/* Header do Modal */}
            <div className="sticky top-0 bg-chart-5 border-b border-border px-8 py-6 flex items-center justify-between rounded-t-3xl">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{date}</p>
                <p className="text-sm font-semibold text-foreground">Por: {author}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-foreground" />
              </button>
            </div>

            {/* Imagem Principal */}
            <div className="relative h-96 overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Conteúdo da Matéria */}
            <div className="px-8 py-8">
              <h1 className="text-4xl font-bold text-foreground mb-6">
                {title}
              </h1>

              <div className="prose prose-lg max-w-none text-chart-3 leading-relaxed">
                {fullContent}
              </div>

              {/* Botão Fechar no Final */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 bg-chart-4 text-white rounded-full hover:bg-chart-2 transition-all font-semibold"
                >
                  Fechar Matéria
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

// Exemplo de uso com múltiplos cards
export default function BlogCards() {
  const posts = [
    {
      image: 'https://investidorsardinha.r7.com/wp-content/uploads/2021/08/planejamento-patrimonial-importancia-e-como-fazer-2.jpg',
      title: "O Guia Definitivo do Planejamento Patrimonial em 2026: Proteção Além das Fronteiras Brasileiras",
      excerpt: "Com a consolidação das novas regras tributárias e o cenário de maior fiscalização sobre grandes patrimônios em 2026, o conceito de 'deixar para depois' tornou-se um risco financeiro insustentável...",
      date: "20/01/2026",
      author: "Bezerra Borges",
      fullContent: (
        <>
          <p className="mb-4">
            Com a consolidação das novas regras tributárias e o cenário de maior fiscalização sobre grandes patrimônios em 2026, o conceito de "deixar para depois" tornou-se um risco financeiro insustentável. Para o empresário brasileiro, proteger o que foi construído exige hoje mais do que uma estrutura local; exige uma estratégia de jurisdição global.
          </p>
          <p className="mb-4">
            Na Bezerra Borges, acreditamos que o planejamento patrimonial não é apenas sobre herança, mas sobre a perenidade da sua liberdade financeira.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">1. O Fim da Era da Reatividade</h2>
          <p className="mb-4">
            Até pouco tempo, muitos investidores buscavam o planejamento apenas diante de uma crise ou de um processo de sucessão iminente. Em 2026, a realidade mudou. Com o aumento progressivo das alíquotas de impostos sobre transmissão (ITCMD) e a maior transparência fiscal internacional, a antecipação tornou-se a ferramenta mais eficaz de economia.
          </p>
          <p className="mb-4">
            Estruturar o patrimônio hoje significa garantir que a carga tributária não consuma décadas de trabalho em um único evento sucessório.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">2. A Holding Internacional como Escudo de Proteção</h2>
          <p className="mb-4">
            Para quem possui ativos digitais, investimentos em moeda estrangeira ou operações globais, a Holding Internacional (Offshore) continua sendo o "padrão ouro".
          </p>
          <p className="mb-4">
            <strong>Segregação de Riscos:</strong> Isola o seu patrimônio pessoal de eventuais instabilidades jurídicas ou econômicas no Brasil.
          </p>
          <p className="mb-4">
            <strong>Diferimento Tributário:</strong> Permite que os ganhos de capital sejam reinvestidos dentro da própria estrutura, otimizando o crescimento composto sem a mordida imediata do fisco.
          </p>
          <p className="mb-4">
            <strong>Flexibilidade:</strong> Jurisdições como Dubai, Delaware ou Ilhas Virgens Britânicas oferecem ambientes regulatórios que respeitam a vontade do titular, facilitando a sucessão sem a burocracia do inventário brasileiro.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Planejamento Sucessório: Evitando o Inventário</h2>
          <p className="mb-4">
            O inventário judicial no Brasil é lento, caro e emocionalmente desgastante. Um planejamento patrimonial bem executado utiliza instrumentos como:
          </p>
          <p className="mb-4">
            <strong>Doação com Reserva de Usufruto:</strong> Mantém o controle dos bens com os patriarcas enquanto transfere a nua-propriedade.
          </p>
          <p className="mb-4">
            <strong>Cláusulas de Inalienabilidade e Incomunicabilidade:</strong> Garantem que o patrimônio não saia da linhagem familiar em caso de divórcios ou dívidas dos herdeiros.
          </p>
          <p className="mb-4">
            <strong>Acordos de Sócios:</strong> Definem regras claras de gestão para empresas familiares, evitando que disputas pessoais destruam o negócio.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">4. O Papel dos Ativos Digitais e Criptoativos</h2>
          <p className="mb-4">
            Em 2026, não se pode falar de patrimônio sem mencionar a custódia de criptoativos. A integração desses ativos ao planejamento sucessório é um dos maiores desafios jurídicos atuais. Como garantir que seus herdeiros tenham acesso às chaves privadas de forma legal e segura? A estruturação correta evita que esses ativos fiquem em "limbo" jurídico e tecnológico.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusão: O Patrimônio é seu, a estratégia é nossa.</h2>
          <p className="mb-4">
            O planejamento patrimonial moderno é multidisciplinar. Ele une o direito de família, o direito tributário e a visão de negócios internacionais. Na Bezerra Borges, nossa missão é desenhar a estrutura que permita a você focar no crescimento, sabendo que a base está protegida.
          </p>
          <p className="mb-4">
            Não deixe sua segurança jurídica ao acaso.
          </p>
        </>
      )
    },
    {
      image: 'https://www.contabeis.com.br/assets/img/news/a_6266_bffa67e3385cb95c2bd8c0a76d82c150.jpg',
      title: "Criptoativos e Sucessão: Como Proteger sua Riqueza Digital em 2026",
      excerpt: "As criptomoedas e os ativos tokenizados deixaram de ser 'investimentos alternativos' para se tornarem pilares centrais do patrimônio de empresários e investidores globais...",
      date: "18/01/2026",
      author: "Bezerra Borges",
      fullContent: (
        <>
          <p className="mb-4">
            Em 2026, as criptomoedas e os ativos tokenizados deixaram de ser "investimentos alternativos" para se tornarem pilares centrais do patrimônio de empresários e investidores globais. No entanto, a mesma descentralização que oferece liberdade traz um desafio jurídico crítico: como garantir que sua riqueza digital não se perca no caso de uma sucessão ou disputa judicial?
          </p>
          <p className="mb-4">
            Na Bezerra Borges, estruturamos soluções que integram o universo cripto ao planejamento patrimonial clássico, garantindo segurança jurídica sem abrir mão da soberania financeira.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">1. O Dilema das Chaves Privadas: Herança ou Perda?</h2>
          <p className="mb-4">
            O maior risco do investidor de cripto não é a volatilidade, mas a perda de acesso. Sem um planejamento adequado, seus ativos podem ficar inacessíveis para seus herdeiros para sempre.
          </p>
          <p className="mb-4">
            <strong>Protocolos de Acesso:</strong> Não basta deixar as chaves anotadas; é necessário criar um protocolo de custódia que combine segurança técnica (multi-sig ou dispositivos de backup) com validade jurídica.
          </p>
          <p className="mb-4">
            <strong>Testamento Digital:</strong> Como inserir as seed phrases ou o acesso a cold wallets em um inventário de forma que não exponha a segurança dos ativos enquanto você estiver vivo?
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">2. A Tributação de Cripto em 2026: Brasil vs. Exterior</h2>
          <p className="mb-4">
            Com a consolidação da legislação que equiparou ativos digitais no exterior a investimentos financeiros tradicionais para fins de tributação, a estratégia de "buy and hold" na pessoa física tornou-se mais onerosa.
          </p>
          <p className="mb-4">
            <strong>Offshores para Cripto:</strong> Estruturar a custódia de seus ativos digitais por meio de uma empresa em jurisdições favoráveis (como Ilhas Cayman ou Bahamas) pode oferecer um diferimento tributário significativo, permitindo que o rebalanceamento de portfólio ocorra sem a incidência imediata de imposto de renda sobre cada ganho de capital.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Proteção Patrimonial e Blindagem Digital</h2>
          <p className="mb-4">
            Criptoativos são frequentemente vistos como "impenhoráveis" para penhora, mas a realidade em 2026 é de maior rastreabilidade pelas autoridades.
          </p>
          <p className="mb-4">
            <strong>Segregação Jurídica:</strong> Integrar suas criptomoedas a uma Holding Patrimonial ou a um Trust internacional oferece uma camada adicional de proteção contra bloqueios judiciais locais e garante que o patrimônio esteja blindado contra riscos operacionais de suas empresas no Brasil.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Tokenização de Ativos Reais (RWA)</h2>
          <p className="mb-4">
            O planejamento patrimonial moderno agora inclui imóveis e participações societárias tokenizadas. Gerir esses ativos exige uma visão híbrida: o conhecimento do registro de imóveis tradicional somado à expertise em contratos inteligentes (smart contracts).
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">O Desafio da Conformidade (Compliance)</h2>
          <p className="mb-4">
            A Receita Federal e os órgãos internacionais intensificaram o cruzamento de dados. O planejamento patrimonial eficaz em 2026 não se baseia em ocultar ativos, mas em estruturá-los de forma inteligente.
          </p>
          <p className="mb-4">
            Ter um portfólio cripto declarado e organizado dentro de uma estrutura internacional não apenas reduz sua carga tributária legalmente, mas também facilita processos de saída definitiva do país ou obtenção de vistos de investidor (como nos EUA ou Emirados Árabes).
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusão: O Futuro do seu Legado é Digital</h2>
          <p className="mb-4">
            Se você possui uma parcela relevante do seu patrimônio em Bitcoin, Ethereum ou Stablecoins, o momento de formalizar sua sucessão e proteção é agora. A tecnologia avança rápido, mas as leis de sucessão e tributação estão alcançando o mundo digital.
          </p>
          <p className="mb-4">
            Sua estratégia de proteção patrimonial está atualizada para a era Web3?
          </p>
        </>
      )
    },
    {
      image: 'https://mckadvogados.adv.br/wp-content/uploads/2021/03/holding-familiar-2.jpg',
      title: "Janeiro de 2026 registra recorde na abertura de holdings internacionais por brasileiros",
      excerpt: "O primeiro mês de 2026 começou com uma movimentação atípica nos escritórios de advocacia focados em planejamento patrimonial e internacionalização...",
      date: "15/01/2026",
      author: "Bezerra Borges",
      fullContent: (
        <>
          <p className="mb-4">
            O primeiro mês de 2026 começou com uma movimentação atípica nos escritórios de advocacia focados em planejamento patrimonial e internacionalização. O motivo é a entrada em vigor das novas leis estaduais que regulamentaram a progressividade do ITCMD (Imposto sobre Transmissão Causa Mortis e Doação), aprovada na esteira da Reforma Tributária.
          </p>
          <p className="mb-4">
            Com alíquotas que agora podem chegar a 12% ou 16% em estados que antes mantinham patamares fixos de 4%, famílias de alto patrimônio e empresários do setor digital estão liderando uma "corrida de saída" para jurisdições como Dubai, Paraguai e Ilhas Cayman.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">O Fim da Alíquota Fixa e o Impacto no Caixa das Famílias</h2>
          <p className="mb-4">
            Até 2025, muitos estados brasileiros operavam com taxas moderadas e lineares. No entanto, o cenário de 2026 impõe uma cobrança escalonada: quanto maior o patrimônio, maior a fatia abocanhada pelo Estado.
          </p>
          <p className="mb-4">
            "O que estamos observando não é apenas uma tentativa de pagar menos imposto, mas uma busca por sobrevivência patrimonial", afirma o corpo jurídico da Bezerra Borges. "Em um inventário de uma família com R$ 50 milhões em ativos, a diferença entre a regra antiga e a nova pode significar uma perda imediata de milhões de reais em liquidez, muitas vezes forçando a venda de bens para pagar o próprio imposto."
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Criptoativos no Radar da Receita</h2>
          <p className="mb-4">
            Outro fator que impulsionou o noticiário econômico neste início de ano foi a integração total dos sistemas da Receita Federal com o protocolo CARF (Crypto-Asset Reporting Framework) da OCDE.
          </p>
          <p className="mb-4">
            Agora, a rastreabilidade de ativos digitais em exchanges internacionais tornou-se quase instantânea. Isso eliminou a "zona cinzenta" onde muitos investidores mantinham seus ativos, transformando a estruturação de Holdings Offshore na única via legal e eficiente para quem deseja manter a privacidade e o diferimento tributário de seus lucros em cripto.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">A Ascensão de Dubai e Paraguai</h2>
          <p className="mb-4">
            Os dados de janeiro mostram que o fluxo de capitais brasileiros não está indo apenas para os EUA.
          </p>
          <p className="mb-4">
            Dubai consolidou-se como o hub preferencial para nômades digitais e infoprodutores, devido à isenção de imposto de renda para indivíduos e empresas que operam fora dos Emirados.
          </p>
          <p className="mb-4">
            Paraguai tem atraído produtores rurais e empresários do setor de serviços que buscam a residência fiscal estratégica para reduzir a carga tributária sobre dividendos globais.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">O que esperar para o restante de 2026?</h2>
          <p className="mb-4">
            Analistas preveem que o volume de processos de Saída Definitiva do País atinja o pico no primeiro semestre. A tendência é que o Planejamento Patrimonial deixe de ser visto como um "luxo de bilionários" e passe a ser uma necessidade básica para qualquer empresário com patrimônio superior a R$ 5 milhões.
          </p>
          <p className="mb-4">
            Para especialistas da Bezerra Borges, o recado do mercado é claro: o custo da inércia nunca foi tão alto. A segurança jurídica, agora, é encontrada na diversificação geográfica e na descorrelação com o risco jurisdicional brasileiro.
          </p>
        </>
      )
    },
    {
      image: 'https://www.pontotel.com.br/local/wp-content/uploads/2024/12/impostos-cobrados-no-brasil.webp',
      title: "Empresários buscam reorganização societária após fim da isenção de dividendos em 2026",
      excerpt: "O cenário empresarial brasileiro enfrenta, neste início de 2026, uma das maiores transformações tributárias das últimas décadas...",
      date: "12/01/2026",
      author: "Bezerra Borges",
      fullContent: (
        <>
          <p className="mb-4">
            O cenário empresarial brasileiro enfrenta, neste início de 2026, uma das maiores transformações tributárias das últimas décadas. Com a entrada em vigor da Lei 15.270/2025, o Brasil encerrou oficialmente a era da isenção total sobre a distribuição de lucros e dividendos, estabelecendo uma nova alíquota de 10% para retiradas que superem os limites estabelecidos pela nova tabela progressiva.
          </p>
          <p className="mb-4">
            A medida, que faz parte do pacote de ajuste fiscal e reforma da renda, tem gerado uma onda de consultas a escritórios especializados em planejamento patrimonial, como o Bezerra Borges, por parte de sócios de empresas de médio e grande porte.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">O "Pedágio" nos Dividendos</h2>
          <p className="mb-4">
            Diferente do modelo anterior, onde o lucro já tributado na empresa chegava limpo ao sócio, a nova regra impõe uma retenção na fonte. Para empresários que recebem mais de R$ 50 mil mensais em dividendos de uma única fonte, a mordida de 10% passou a ser automática desde 1º de janeiro.
          </p>
          <p className="mb-4">
            "O impacto é imediato no fluxo de caixa pessoal do empresário. Muitos que utilizavam a distribuição de lucros como principal forma de remuneração agora estão tendo que recalcular o custo da sua estrutura", afirma a equipe de estratégia jurídica da Bezerra Borges.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">A Fuga para a Internacionalização</h2>
          <p className="mb-4">
            A mudança na tributação doméstica acionou um sinal de alerta para quem possui excedente de capital. Em 2026, a busca por estruturas offshore e holdings internacionais deixou de ser uma estratégia de nicho para se tornar uma necessidade de eficiência.
          </p>
          <p className="mb-4">
            Ao manter lucros em jurisdições com tratados de não bitributação ou em zonas de baixa fiscalização (como os Emirados Árabes ou certas estruturas no Reino Unido), investidores buscam o diferimento tributário: a capacidade de reinvestir o lucro global sem a incidência imediata dos 10% brasileiros, tributando apenas o que é efetivamente repatriado para consumo pessoal.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Reajuste do IRPF e a "Nova Pejotização"</h2>
          <p className="mb-4">
            Embora a Lei 15.270 tenha ampliado a isenção para quem ganha até R$ 5 mil, a pressão sobre os profissionais de alta renda (o topo da pirâmide) aumentou.
          </p>
          <p className="mb-4">
            <strong>Teto do ITCMD:</strong> Além dos dividendos, a progressividade obrigatória do imposto sobre herança nos estados brasileiros já atinge o teto de 8% em diversas regiões, encarecendo a sucessão patrimonial.
          </p>
          <p className="mb-4">
            <strong>Planejamento de Saída:</strong> Analistas observam um aumento de 35% nos pedidos de consultoria para "Saída Definitiva do País" neste primeiro trimestre, com empresários buscando residência fiscal em países com sistemas tributários mais simples, como o Paraguai.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">O Papel do Planejamento em 2026</h2>
          <p className="mb-4">
            Para especialistas, o ano de 2026 marca o fim do "planejamento amador". Estruturas societárias que funcionavam bem até 2024 agora são consideradas ineficientes ou até perigosas sob o novo rigor fiscal.
          </p>
          <p className="mb-4">
            "O empresário que não revisou seu contrato social e sua estrutura de holding nos últimos 12 meses está, literalmente, perdendo dinheiro para o fisco a cada fechamento de mês", conclui o relatório de mercado da Bezerra Borges.
          </p>
        </>
      )
    },
    {
      image: 'https://especialistaemsi.com.br/wp-content/uploads/2025/12/a-arte-da-invisibilidade-de-digital-proteja-seus-dados-com-estrategias-imprescindiveis.jpeg',
      title: 'A "Grande Migração Patrimonial" de 2026 e o Fim da Invisibilidade Digital',
      excerpt: "O mercado financeiro e os principais escritórios de advocacia de elite do Brasil registram em janeiro de 2026 um movimento sem precedentes na história econômica recente do país...",
      date: "10/01/2026",
      author: "Bezerra Borges",
      fullContent: (
        <>
          <p className="mb-4">
            O mercado financeiro e os principais escritórios de advocacia de elite do Brasil, como o Bezerra Borges, registram em janeiro de 2026 um movimento sem precedentes na história econômica recente do país. O fenômeno, apelidado por especialistas como a "Grande Migração Patrimonial", é a resposta direta à entrada em vigor do novo arcabouço tributário que redefine as regras para heranças, dividendos e ativos digitais.
          </p>
          <p className="mb-4">
            Se 2025 foi o ano das discussões legislativas, 2026 é o ano da realidade no caixa. Com o fim da isenção de dividendos e o cerco fechado da Receita Federal aos criptoativos, a estruturação de Holdings Internacionais deixou de ser um diferencial competitivo para se tornar o único porto seguro para a preservação de legados familiares.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">1. O "Tsunami" do ITCMD: Estados abandonam alíquotas fixas</h2>
          <p className="mb-4">
            A mudança mais sentida pelas famílias de alto patrimônio neste mês é a progressividade obrigatória do ITCMD (Imposto sobre Herança e Doações). Até o final de 2025, muitos estados brasileiros mantinham alíquotas lineares de 4%. Em 2026, a realidade é outra: o imposto agora escala conforme o valor do patrimônio, atingindo o teto de 8% (e em alguns casos, discutindo-se alíquotas de até 12% em propostas de emenda).
          </p>
          <p className="mb-4">
            Além do aumento da taxa, o critério de avaliação mudou. "O Fisco não aceita mais o valor histórico de aquisição. A regra agora é o valor de mercado", explica o corpo jurídico da Bezerra Borges. "Um imóvel comprado há 20 anos por R$ 1 milhão, que hoje vale R$ 10 milhões, será tributado sobre o valor atual, o que pode inviabilizar a liquidez dos herdeiros e forçar a venda do bem apenas para pagar o imposto."
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Dividendos: A mordida de 10% no topo da pirâmide</h2>
          <p className="mb-4">
            A partir de 1º de janeiro de 2026, a distribuição de lucros e dividendos acima de R$ 50 mil mensais por CNPJ passou a ser tributada em 10% na fonte. Para empresários que utilizam a empresa como veículo de acúmulo de riqueza, o impacto é severo.
          </p>
          <p className="mb-4">
            Estrategistas patrimoniais observam que essa mudança está impulsionando a revisão de acordos de sócios e a criação de estruturas de diferimento tributário fora do Brasil. Ao centralizar investimentos em uma holding no exterior, o empresário consegue reinvestir o lucro global sem a incidência imediata do imposto doméstico, tributando apenas o que é repatriado para o seu consumo pessoal no Brasil.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Criptoativos: O fim da era do "radar desligado"</h2>
          <p className="mb-4">
            Para o investidor de ativos digitais, 2026 marca o início da vigência do CARF (Crypto-Asset Reporting Framework) da OCDE. Na prática, a Receita Federal brasileira agora recebe informações automáticas de mais de 100 jurisdições sobre a custódia de criptoativos de residentes no Brasil.
          </p>
          <p className="mb-4">
            A implementação da DeCripto (Declaração de Criptoativos via e-CAC), prevista para operação total em julho de 2026, centraliza todas as movimentações. "A estratégia de manter cripto 'escondido' em exchanges internacionais acabou. O investidor inteligente agora busca o compliance preventivo: declarar e estruturar esses ativos dentro de uma holding offshore para aproveitar a eficiência tributária legal, evitando multas que podem superar 75% do valor do ativo", alerta o escritório.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">4. O Triângulo de Ouro: Dubai, Paraguai e Reino Unido</h2>
          <p className="mb-4">
            A busca por jurisdições estratégicas redesenhou o mapa da riqueza brasileira em 2026:
          </p>
          <p className="mb-4">
            <strong>Dubai:</strong> Continua sendo o destino favorito para a abertura de holdings devido à burocracia zero e isenção de impostos sobre ganhos de capital internacionais.
          </p>
          <p className="mb-4">
            <strong>Reino Unido:</strong> Atraindo empresários de tecnologia e infoprodutores pela segurança jurídica e facilidade de acesso ao sistema bancário europeu pós-Brexit.
          </p>
          <p className="mb-4">
            <strong>Paraguai:</strong> Consolidado como a principal opção para quem busca a Saída Definitiva parcial ou total, mantendo proximidade com o Brasil, mas com um sistema tributário territorial muito mais leve.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusão: O Custo da Inércia</h2>
          <p className="mb-4">
            O relatório de tendências da Bezerra Borges para 2026 aponta que o atraso em tomar uma decisão de planejamento pode custar caro. O cenário é de transparência total e tributação progressiva. A segurança patrimonial hoje não está em "esconder", mas em governança.
          </p>
          <p className="mb-4">
            "Em 2026, o planejamento patrimonial não é sobre sonegar, é sobre escolher em qual sistema jurídico você quer que seu patrimônio viva. Aqueles que permaneceram exclusivamente no sistema brasileiro estão vendo seu legado ser diluído pela inflação tributária", conclui a análise.
          </p>
        </>
      )
    },
    {
      image: 'https://archivos.formosa.gob.ar/media/uploads/imagenes_noticias/imagen_noticia_1589428311-0.jpg',
      title: "Por que o Paraguai se tornou o 'Hub' da Riqueza Brasileira em 2026?",
      excerpt: "Enquanto as capitais brasileiras ainda processam os impactos da nova tributação, a capital paraguaia vive um cenário de euforia econômica...",
      date: "08/01/2026",
      author: "Bezerra Borges",
      fullContent: (
        <>
          <p className="mb-4">
            Enquanto as capitais brasileiras ainda processam os impactos da nova tributação sobre dividendos e as alíquotas progressivas do ITCMD, a capital paraguaia vive um cenário de euforia econômica. Janeiro de 2026 marca um recorde histórico: o número de brasileiros que solicitaram a Residência Fiscal no Paraguai cresceu 40% em relação ao mesmo período do ano passado, consolidando o país vizinho não apenas como um destino turístico, mas como o principal refúgio estratégico para o empresariado nacional.
          </p>
          <p className="mb-4">
            O fenômeno, que vem sendo chamado de "O Despertar do Tigre Guarani", é impulsionado por uma combinação rara de estabilidade macroeconômica e agressividade fiscal. Para os especialistas da Bezerra Borges, o Paraguai deixou de ser uma alternativa secundária para se tornar o pilar central de muitos planejamentos patrimoniais de alta renda.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">A Regra dos "10-10-10": O Contraste com o Custo Brasil</h2>
          <p className="mb-4">
            O grande motor dessa migração é a simplicidade do sistema tributário paraguaio. Enquanto o Brasil discute novas camadas de impostos sobre consumo e renda em 2026, o Paraguai mantém sua famosa estrutura baseada em três pilares:
          </p>
          <p className="mb-4">
            10% de Imposto de Renda (IRE/IRP);
          </p>
          <p className="mb-4">
            10% de IVA (Imposto sobre Valor Agregado);
          </p>
          <p className="mb-4">
            10% de Imposto sobre Dividendos.
          </p>
          <p className="mb-4">
            Mais do que as alíquotas baixas, o que atrai o investidor é o Princípio da Territorialidade. No Paraguai, rendimentos obtidos fora do país são, via de regra, isentos ou subtributados para residentes fiscais. Isso significa que um empresário digital ou um investidor de criptoativos pode gerir sua riqueza global a partir de Assunção com uma eficiência financeira impossível de ser replicada em solo brasileiro sob as novas regras de 2026.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">A "Lei da Maquila" e a Expansão Industrial</h2>
          <p className="mb-4">
            Não são apenas indivíduos que estão cruzando a fronteira. O setor industrial brasileiro registrou em 2025 o maior volume de abertura de filiais no Paraguai via Lei de Maquila. Este regime permite que empresas brasileiras importem máquinas e insumos com isenção de impostos, processem os produtos no Paraguai pagando apenas 1% de tributo sobre o valor agregado e reexportem para o Brasil ou para o mundo.
          </p>
          <p className="mb-4">
            A fundação da Cebras-PY (Câmara de Empresários Brasileiros no Paraguai) em dezembro de 2025 é o símbolo máximo dessa integração. A entidade já nasce com centenas de membros buscando segurança jurídica e logística para fugir do "Custo Brasil".
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">O Boom Imobiliário em Santa Teresa e Nova Assunção</h2>
          <p className="mb-4">
            Quem caminha pelo eixo corporativo da Avenida Santa Teresa, em Assunção, sente o impacto direto desse fluxo de capitais. O mercado imobiliário paraguaio, precificado em dólar, tornou-se o destino preferencial para a diversificação de portfólio.
          </p>
          <p className="mb-4">
            <strong>Rentabilidade:</strong> Aluguéis residenciais de alto padrão em bairros como Villa Morra oferecem yields superiores aos das capitais brasileiras.
          </p>
          <p className="mb-4">
            <strong>Nova Assunção:</strong> O projeto da ponte "Héroes del Chaco" transformou a região de Nova Assunção no novo eldorado imobiliário, com condomínios fechados sendo vendidos quase exclusivamente para brasileiros em busca de uma "segunda residência" segura.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Facilidade de Residência: O Fator Decisivo</h2>
          <p className="mb-4">
            Um dos pontos que mais pesam na balança, segundo o escritório Bezerra Borges, é a ausência da obrigatoriedade de permanência física mínima de 183 dias para manter a residência fiscal paraguaia.
          </p>
          <p className="mb-4">
            "Diferente de outros países, o Paraguai permite que o empresário obtenha a cédula de identidade e o RUC (número fiscal) com relativa agilidade, exigindo apenas uma visita a cada dois ou três anos para manter o status de residente permanente. É o 'Plano B' perfeito para quem quer manter negócios no Brasil, mas proteger sua residência fiscal", afirma a equipe jurídica.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusão: Uma Questão de Estratégia, não de Distância</h2>
          <p className="mb-4">
            O Paraguai em 2026 não é mais o país do comércio de fronteira; é uma plataforma de internacionalização de baixo custo e alta segurança. Com o Brasil apertando o cerco sobre a alta renda, o vizinho oferece o que o capital mais valoriza: previsibilidade.
          </p>
          <p className="mb-4">
            O empresário que ainda enxerga o Paraguai sob o prisma da década de 90 está perdendo a maior janela de oportunidade de proteção patrimonial da América do Sul.
          </p>
          <p className="mb-4 font-bold">
            Como a Bezerra Borges pode te ajudar?
          </p>
          <p className="mb-4">
            O processo de internacionalização via Paraguai exige precisão para evitar conflitos com a Receita Federal do Brasil. Nós cuidamos desde a Declaração de Saída Definitiva até a estruturação da sua Holding Paraguaia.
          </p>
          <p className="mb-4">
            Gostaria de agendar uma reunião de diagnóstico para entender se o Paraguai é o destino ideal para o seu perfil patrimonial em 2026?
          </p>
        </>
      )
    },
    {
      image: '/irlanda.jpg',
      title: "Estratégias legais de estruturação internacional diante do novo imposto de 2026.",
      excerpt: "Descubra as melhores jurisdições para operar seu negócio digital sem o impacto do novo imposto de 2026...",
      date: "05/11/2025",
      author: "Bezerra Borges",
      fullContent: (
        <>
          <p className="mb-4">
            Com as mudanças tributárias previstas para 2026, muitos empresários digitais estão buscando alternativas estratégicas para proteger seus negócios e otimizar a carga tributária de forma legal.
          </p>
          <p className="mb-4">
            Neste artigo completo, vamos explorar 6 jurisdições privilegiadas que oferecem benefícios fiscais significativos para operações de tráfego pago e marketing digital.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Dubai - Emirados Árabes Unidos</h2>
          <p className="mb-4">
            Dubai se destaca como um dos principais centros financeiros globais, oferecendo 0% de imposto sobre rendimentos para empresas estabelecidas em suas zonas francas...
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Estônia - União Europeia</h2>
          <p className="mb-4">
            A Estônia revolucionou o empreendedorismo digital com seu programa de e-Residency, permitindo que empresários de qualquer lugar do mundo estabeleçam empresas 100% digitais...
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Portugal - Regime NHR</h2>
          <p className="mb-4">
            O Regime de Residentes Não Habituais oferece benefícios fiscais significativos para profissionais qualificados e empresários...
          </p>
          <p className="mb-4">
            Continue lendo para descobrir as outras 3 jurisdições estratégicas e como implementar essa estrutura no seu negócio de forma 100% legal.
          </p>
        </>
      )
    },
    {
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
      title: "Como abrir empresa no Reino Unido (Inglaterra): com segurança jurídica e conformidade regulatória.",
      excerpt: "Guia completo para estabelecer sua empresa no Reino Unido de forma rápida e totalmente legal...",
      date: "30/10/2025",
      author: "Bezerra Borges",
      fullContent: (
        <>
          <p className="mb-4">
            Abrir uma empresa no Reino Unido é um dos processos mais simples e eficientes da Europa, podendo ser concluído em apenas 24 horas.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Por que escolher o Reino Unido?</h2>
          <p className="mb-4">
            O Reino Unido oferece estabilidade jurídica, acesso ao mercado europeu e internacional, sistema tributário favorável e processo de abertura 100% online.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Passo a passo completo</h2>
          <p className="mb-4">
            1. Escolha do tipo de empresa (Limited Company é a mais comum)<br/>
            2. Registro na Companies House<br/>
            3. Obtenção do número de identificação fiscal<br/>
            4. Abertura de conta bancária empresarial
          </p>
          <p className="mb-4">
            Nossa equipe especializada pode conduzir todo o processo para você, garantindo que tudo seja feito corretamente desde o início.
          </p>
        </>
      )
    },
    {
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
      title: "Empresário brasileiro que levou sua empresa e sua família para Dubai revela bastidores da internacionalização",
      excerpt: "Conheça a história inspiradora de um empresário brasileiro que transformou sua vida com a internacionalização...",
      date: "28/10/2025",
      author: "Bezerra Borges",
      fullContent: (
        <>
          <p className="mb-4">
            Em entrevista exclusiva ao podcast da Bezerra Borges, o empresário João Silva revela os desafios, conquistas e aprendizados de sua jornada de internacionalização.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">O Início da Jornada</h2>
          <p className="mb-4">
            "Tudo começou quando percebi que meu negócio estava sendo sufocado pela alta carga tributária brasileira. Foi quando decidi explorar alternativas legais para proteger meu patrimônio e expandir globalmente."
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Por que Dubai?</h2>
          <p className="mb-4">
            Dubai ofereceu a combinação perfeita: 0% de imposto de renda pessoal, infraestrutura de classe mundial, segurança e qualidade de vida excepcional para a família.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Resultados</h2>
          <p className="mb-4">
            Após 2 anos em Dubai, a empresa cresceu 300%, a carga tributária reduziu drasticamente e a qualidade de vida da família melhorou significativamente.
          </p>
          <p className="mb-4">
            Assista ao episódio completo do podcast para conhecer todos os detalhes dessa transformação inspiradora.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br bg-background py-16 px-13 mt-40 mb-24 font-source-serif-pro">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-foreground">
          Últimos Posts
        </h1>
        <p className="text-center text-chart-2 mb-12 max-w-2xl mx-auto">
          Fique por dentro das últimas novidades sobre estruturação internacional, offshores e proteção patrimonial
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}