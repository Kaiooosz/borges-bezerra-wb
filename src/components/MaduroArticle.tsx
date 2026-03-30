import React from 'react';
import { Calendar, Clock, Share2, Bookmark, ArrowLeft } from 'lucide-react';

export default function MaduroArticle() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        {/* <div className="max-w-7xl mx-auto px-4 py-6">
          <a href="/artigos" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar para artigos</span>
          </a>
        </div> */}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-20 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-8 text-sm text-zinc-400">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
              Cripto & Tributação
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>05 de janeiro de 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>15 min de leitura</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-normal mb-6 md:mb-8 leading-tight text-balance">
            O Tesouro de Maduro: Como um Ditador Estruturou (ou Tentou Estruturar) a Blindagem de US$ 60 Bilhões utilizando Bitcoin
          </h1>

          {/* Author & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-b border-white/10 py-4 md:py-6 mb-8 md:mb-12">
            <div>
              <p className="text-sm text-zinc-400 mb-1">Por</p>
              <p className="text-base md:text-lg">Vinicius Borges, Bezerra Borges Advocacia</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors border border-white/10">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors border border-white/10">
                <Bookmark className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 mb-12 md:mb-20">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-white/5 border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200&h=675&fit=crop" 
            alt="Bitcoin e Venezuela" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/80 to-transparent p-4 md:p-6">
            <p className="text-xs md:text-sm text-zinc-300 italic">
              Alex Saab abraça Nicolás Maduro em seu retorno a Caracas em dezembro de 2023. Com Maduro agora sob custódia dos EUA, Saab pode deter as chaves da fortuna oculta da Venezuela.
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 pb-20">
        {/* Introduction */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-sans text-2xl md:text-4xl font-normal mb-6 md:mb-8">
            Introdução: A Captura e a Pergunta de US$ 60 Bilhões
          </h2>
          <div className="space-y-6 text-zinc-300 leading-relaxed text-base md:text-lg">
            <p>
              Nas primeiras horas de 03 de janeiro de 2026, uma operação sigilosa das forças especiais norte-americanas resultou na captura de Nicolás Maduro em Caracas. O evento, uma das mais dramáticas intervenções dos EUA na América Latina desde a invasão do Panamá em 1989, foi celebrado em Washington como um golpe decisivo contra o narcotráfico e a tirania. Contudo, enquanto Maduro era transportado para Nova York para enfrentar acusações federais, uma pergunta muito mais complexa e urgente ecoava nos corredores da inteligência global: Onde está o dinheiro?
            </p>
            <p>
              Por anos, o regime de Maduro pilhou sistematicamente a Venezuela, desviando bilhões em receitas de petróleo, ouro e outros ativos estatais. Fontes com conhecimento direto da operação, detalhadas em uma investigação do projeto Whale Hunting, afirmam que uma parcela substancial dessa fortuna foi metodicamente convertida em criptomoedas, notadamente Bitcoin. A estimativa, ainda não confirmada por análise on-chain mas baseada em inteligência humana (HUMINT), aponta para um tesouro digital que pode chegar a US$ 60 bilhões, o equivalente a cerca de 600.000 BTC ou 3% de todo o suprimento global da moeda.
            </p>
            <p>
              Se confirmada, essa fortuna faria do regime venezuelano uma superpotência secreta de Bitcoin, com um dos maiores portfólios de criptoativos do planeta. O homem que supostamente orquestrou essa arquitetura financeira sombria, mantendo o regime vivo sob o peso de sanções esmagadoras, não estava no navio com Maduro. Seu nome é Alex Saab, e ele pode ser a única pessoa com as chaves para esse império digital.
            </p>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-sans text-2xl md:text-4xl font-normal mb-6 md:mb-8">
            A Arquitetura Jurídica das Sombras
          </h2>
          
          <h3 className="font-sans text-xl md:text-2xl font-normal mb-4 md:mb-6">
            O Arquiteto: Alex Saab, o Agente Duplo
          </h3>
          <div className="space-y-6 text-zinc-300 leading-relaxed text-base md:text-lg mb-10 md:mb-12">
            <p>
              Nascido na Colômbia, Alex Saab ascendeu de empresário têxtil a principal facilitador financeiro de Maduro. Introduzido ao círculo de poder pela falecida senadora colombiana Piedad Córdoba, Saab se tornou o homem de confiança para as operações mais sensíveis do regime. Ele orquestrou desde esquemas de importação superfaturada, como no programa de habitação "Gran Mision Vivienda Venezuela", até a manipulação do programa de alimentos subsidiados (CLAP), usando uma teia de empresas de fachada em Hong Kong, Turquia e Emirados Árabes Unidos.
            </p>
            <p>
              Sua importância foi formalizada em abril de 2018, quando Maduro o nomeou "Enviado Especial", conferindo-lhe imunidade diplomática e amplos poderes. A reviravolta, no entanto, é digna de um thriller de espionagem: documentos judiciais norte-americanos revelaram que, desde 2016, Saab atuava como informante da DEA (Drug Enforcement Administration), a agência antidrogas dos EUA.
            </p>
            <p>
              Preso em Cabo Verde em 2020 e extraditado para os EUA, Saab foi libertado em dezembro de 2023 em uma troca de prisioneiros, retornando a Caracas como herói e sendo nomeado Ministro da Indústria e Produção Nacional. Ele estava, mais uma vez, no centro nevrálgico da sobrevivência econômica do regime — até a captura de Maduro.
            </p>
          </div>

          <h3 className="font-sans text-xl md:text-2xl font-normal mb-4 md:mb-6">
            O Mensageiro: David Nicolas Rubio Gonzalez
          </h3>
          <div className="space-y-6 text-zinc-300 leading-relaxed text-base md:text-lg">
            <p>
              Se Saab era o cérebro, a operação precisava de mãos confiáveis para o trabalho físico. Fontes da inteligência apontam para David Nicolas Rubio Gonzalez, filho de Álvaro Pulido (sócio de longa data de Saab), como um dos principais "mensageiros" do ouro. Enquanto seu pai foi indiciado criminalmente, David foi apenas sancionado pelo Tesouro dos EUA em 2019, uma assimetria que sugere um papel complexo, talvez de cooperação ou de menor relevância estratégica para os investigadores.
            </p>
            <p>
              Sua função, segundo as fontes, era transportar fisicamente barras de ouro na rota República Dominicana → Venezuela → Turquia → Dubai, recebendo cerca de US$ 1 milhão por viagem. Ele representa a ponte física entre o ativo tangível (ouro) e sua conversão no mundo digital.
            </p>
          </div>
        </section>

        {/* The 4-Step Scheme */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-sans text-2xl md:text-4xl font-normal mb-6 md:mb-8">
            O Esquema de Blindagem Financeira: As 4 Etapas
          </h2>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 md:p-8 mb-8 md:mb-10">
            <div className="space-y-6 md:space-y-8">
              {/* Step 1 */}
              <div className="border-l-2 border-white/20 pl-4 md:pl-6">
                <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  1. Extração Ilegal e Exportação em Massa
                </h4>
                <p className="text-zinc-300 mb-2 text-sm md:text-base">
                  <span className="font-semibold">Ação:</span> O ouro é extraído na região do Arco Minero del Orinoco e processado pela estatal CVG Minerven.
                </p>
                <p className="text-zinc-300 mb-3 text-sm md:text-base">
                  <span className="font-semibold">Resultado:</span> Somente em 2018, 73,2 toneladas de ouro (equivalentes a US$ 2,7 bilhões) foram retiradas do país.
                </p>
                <p className="text-xs md:text-sm text-zinc-400">
                  Ativo: Ouro | Local: Venezuela
                </p>
              </div>

              {/* Step 2 */}
              <div className="border-l-2 border-white/20 pl-4 md:pl-6">
                <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  2. Refinamento em Mercados Alternativos
                </h4>
                <p className="text-zinc-300 mb-2 text-sm md:text-base">
                  <span className="font-semibold">Ação:</span> O ouro segue para refinarias e centros comerciais fora do radar ocidental.
                </p>
                <p className="text-zinc-300 mb-3 text-sm md:text-base">
                  <span className="font-semibold">Resultado:</span> Conversão do metal em moeda forte (Dólares e Euros).
                </p>
                <p className="text-xs md:text-sm text-zinc-400">
                  Ativo: Ouro, Dólares, Euros | Local: Turquia, Emirados Árabes Unidos, Irã
                </p>
              </div>

              {/* Step 3 */}
              <div className="border-l-2 border-white/20 pl-4 md:pl-6">
                <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  3. Lavagem de Lucros via Criptomoedas
                </h4>
                <p className="text-zinc-300 mb-2 text-sm md:text-base">
                  <span className="font-semibold">Ação:</span> Os lucros da venda do ouro são utilizados na aquisição de Bitcoin e outras criptomoedas.
                </p>
                <p className="text-zinc-300 mb-3 text-sm md:text-base">
                  <span className="font-semibold">Ferramenta:</span> Utilização de brokers Over-the-Counter (OTC), que atuam fora do sistema bancário tradicional.
                </p>
                <p className="text-xs md:text-sm text-zinc-400">
                  Ativo: Bitcoin (BTC), Tether (USDT) | Local: Turquia, Emirados Árabes Unidos
                </p>
              </div>

              {/* Step 4 */}
              <div className="border-l-2 border-white/20 pl-4 md:pl-6">
                <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  4. Ocultação e Armazenamento Inviolável
                </h4>
                <p className="text-zinc-300 mb-2 text-sm md:text-base">
                  <span className="font-semibold">Ação:</span> Os criptoativos são processados por "mixers" – serviços que embaralham transações para obliterar o rastro de origem.
                </p>
                <p className="text-zinc-300 mb-3 text-sm md:text-base">
                  <span className="font-semibold">Segurança:</span> O capital digital é armazenado em "cold wallets" (dispositivos físicos offline), cujas chaves de acesso são confiadas a um círculo interno ultrassecreto.
                </p>
                <p className="text-xs md:text-sm text-zinc-400">
                  Ativo: Bitcoin (BTC) | Local: Desconhecido
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-zinc-300 leading-relaxed text-base md:text-lg">
            <p>
              Uma das operações mais audaciosas foi o swap ouro-por-gasolina com o Irã em abril de 2020. Nove toneladas de ouro venezuelano foram trocadas por 1,5 milhão de barris de gasolina, em uma operação coordenada pela Força Quds do IRGC e pelo Hezbollah, segundo vazamentos da seguradora Lloyd's.
            </p>
            <p>
              Além do ouro, o regime passou a usar criptomoedas para transacionar petróleo. O escândalo "PDVSA-Cripto" revelou que, em dezembro de 2025, 80% da receita de petróleo da Venezuela era recebida em Tether (USDT), um stablecoin pareado ao dólar. Estima-se que mais de US$ 20 bilhões em petróleo tenham saído do país sem que o pagamento chegasse aos cofres da estatal, sendo desviado para carteiras privadas.
            </p>
          </div>
        </section>

        {/* Brazilian Paradox */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-sans text-2xl md:text-4xl font-normal mb-6 md:mb-8">
            O Paradoxo Brasileiro: Quando a Justiça Consegue (e Não Consegue)
          </h2>
          
          <h3 className="font-sans text-xl md:text-2xl font-normal mb-4 md:mb-6">
            Sucesso no Sistema Tradicional
          </h3>
          <div className="space-y-6 text-zinc-300 leading-relaxed text-base md:text-lg mb-10 md:mb-12">
            <p>
              <span className="font-semibold">Lava Jato (Suíça):</span> A Operação Lava Jato é o maior exemplo de sucesso na recuperação de ativos desviados para o exterior. Através de intensa cooperação jurídica internacional entre o Ministério Público Federal (MPF) e autoridades suíças, foi possível repatriar bilhões de reais. Até 2019, mais de R$ 1,1 bilhão já havia retornado ao Brasil, com outros R$ 2,8 bilhões ainda bloqueados em contas na Suíça.
            </p>
            <p>
              <span className="font-semibold">Operação Cripto Car (2025):</span> Em dezembro de 2025, uma ação conjunta entre o MJSP e as Polícias Civis de GO e SP bloqueou R$ 3,5 milhões em bitcoins. O sucesso se deu porque os valores foram rastreados e bloqueados enquanto ainda estavam em corretoras (exchanges), antes de serem pulverizados para carteiras privadas.
            </p>
          </div>

          <h3 className="font-sans text-xl md:text-2xl font-normal mb-4 md:mb-6">
            Fracasso na Autocustódia
          </h3>
          <div className="space-y-6 text-zinc-300 leading-relaxed text-base md:text-lg mb-8 md:mb-10">
            <p>
              <span className="font-semibold">Faraó dos Bitcoins:</span> Em contraste direto, o caso de Glaidson Acácio dos Santos, o "Faraó dos Bitcoins", expõe a impotência do Estado diante da autocustódia. Preso na Operação Kryptos em 2021, Glaidson deixou para trás um notebook, hoje guardado na sede da Polícia Federal no Rio de Janeiro. Dentro dele, uma carteira de criptomoedas (Dash) com um saldo estimado em R$ 400 milhões.
            </p>
            <p>
              A PF não consegue acessar os fundos. Glaidson se recusa a fornecer a senha, mesmo com a oferta de um acordo de redução de pena. Sua resposta a um delegado resume o impasse:
            </p>
            <blockquote className="border-l-2 border-white/20 pl-4 md:pl-6 italic text-lg md:text-xl my-6 md:my-8 text-zinc-200">
              "É a minha aposentadoria, doutor."
            </blockquote>
            <p>
              Enquanto isso, sua esposa, Mirelis Zerpa, foragida, conseguiu sacar remotamente cerca de R$ 1 bilhão em criptomoedas logo após a prisão do marido, demonstrando a agilidade e a natureza sem fronteiras desses ativos.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left p-3 md:p-4 font-semibold border-b border-white/10">Cenário de Ativos</th>
                    <th className="text-left p-3 md:p-4 font-semibold border-b border-white/10">Eficácia da Justiça</th>
                    <th className="text-left p-3 md:p-4 font-semibold border-b border-white/10">Exemplo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3 md:p-4">Ativos em Bancos (Exterior)</td>
                    <td className="p-3 md:p-4 font-semibold">Alta (com cooperação)</td>
                    <td className="p-3 md:p-4">Lava Jato (Suíça)</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3 md:p-4">Cripto em Exchanges (Brasil)</td>
                    <td className="p-3 md:p-4 font-semibold">Média a Alta</td>
                    <td className="p-3 md:p-4">Operação Cripto Car</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3 md:p-4">Cripto em Autocustódia</td>
                    <td className="p-3 md:p-4 font-semibold">Nula (sem cooperação)</td>
                    <td className="p-3 md:p-4">Faraó dos Bitcoins</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3 md:p-4">Cripto Transferido p/ Exterior</td>
                    <td className="p-3 md:p-4 font-semibold">Muito Baixa</td>
                    <td className="p-3 md:p-4">Esposa de Glaidson</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-sans text-2xl md:text-4xl font-normal mb-6 md:mb-8">
            Conclusão: A Nova Fronteira da Soberania e do Risco
          </h2>
          <div className="space-y-6 text-zinc-300 leading-relaxed text-base md:text-lg">
            <p>
              A captura de Nicolás Maduro pode ter encerrado um capítulo da história venezuelana, mas abriu um novo e complexo debate sobre a natureza do poder e da riqueza no século XXI. A arquitetura financeira supostamente criada por Alex Saab não é apenas um esquema de lavagem de dinheiro em escala épica; é um estudo de caso sobre os limites do sistema financeiro tradicional e a ascensão de uma alternativa descentralizada e resistente à censura.
            </p>
            <p>
              Para indivíduos e empresas com patrimônio lícito, a história serve como um alerta e uma lição. A mesma ferramenta que um ditador usa para fins nefastos pode, em um contexto de instabilidade política ou insegurança jurídica, representar uma forma legítima de proteção e preservação de capital. A autocustódia de ativos digitais é uma faca de dois gumes: oferece soberania sem precedentes, mas também responsabilidade absoluta.
            </p>
            <p>
              O paradoxo brasileiro, ilustrado pelo sucesso na Lava Jato e pelo fracasso no caso do "Faraó dos Bitcoins", demonstra que estamos em um ponto de inflexão. O Estado ainda detém imenso poder sobre o sistema financeiro tradicional, mas seu alcance encontra um muro na fronteira da criptografia e da autocustódia.
            </p>
            <p className="text-lg md:text-xl font-semibold">
              As perguntas que ficam são as mesmas para Washington e para Brasília: Onde está o dinheiro? E, mais importante, quem realmente detém as chaves?
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 md:p-6 mb-12 md:mb-16">
          <p className="text-xs md:text-sm text-zinc-400 italic leading-relaxed">
            <span className="font-semibold not-italic">Aviso Legal:</span> Este artigo tem caráter informativo e não constitui aconselhamento jurídico. A estruturação de patrimônio, especialmente envolvendo ativos digitais e jurisdições internacionais, é uma matéria de alta complexidade que exige análise individualizada por profissionais qualificados. O escritório Bezerra Borges Advocacia possui expertise para analisar seu caso e propor as melhores soluções, sempre dentro dos limites da legalidade.
          </p>
        </div>

        {/* References */}
        <section className="border-t border-white/10 pt-8 md:pt-10 mb-12 md:mb-16">
          <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Referências</h3>
          <ol className="space-y-2 md:space-y-3 text-xs md:text-sm text-zinc-400 leading-relaxed">
            <li>[1] Hope, B., & Preve, C. (2026). The $60 Billion Question: Is Venezuela Secretly A Bitcoin Superpower? Whale Hunting / ZeroHedge.</li>
            <li>[2] U.S. Department of the Treasury. (2019). Treasury Disrupts Corruption Network Stealing from Venezuela's Food Program.</li>
            <li>[3] Iran International. (2020). Leaked Documents Show How Iran Gets Gold From Venezuela In Return For Gasoline.</li>
            <li>[4] Reuters. (2023). Venezuela's PDVSA struggles to shift to crypto payments for oil.</li>
            <li>[5] G1. (2019). Suíça devolveu mais de R$ 1,1 bilhão ao Brasil em investigações da Lava Jato.</li>
            <li>[6] O Globo. (2023). Computador de 'Faraó dos Bitcoins' apreendido na PF guarda R$ 400 milhões em criptomoedas.</li>
            <li>[7] Superior Tribunal de Justiça (STJ). (2025). Terceira Turma admite envio de ofício às corretoras para encontrar e penhorar criptomoedas do devedor.</li>
            <li>[8] Ministério da Justiça e Segurança Pública. (2025). Cooperação entre o MJSP e as Polícias Civis de GO e de SP bloqueia quase R$ 3,5 milhões em bitcoins na Operação Cripto Car.</li>
          </ol>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-6">
          <a href="/artigos" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar para artigos</span>
          </a>
        </div> 
        
      </article>

      {/* Footer Spacing */}
      <div className="h-20"></div>
    </div>
  );
}