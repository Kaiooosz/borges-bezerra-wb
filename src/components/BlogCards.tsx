import React, { useState } from 'react';
import { X } from 'lucide-react';

const BlogCard = ({ image, title, date, author, excerpt, fullContent }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col h-full font-serif">
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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      title: "Onde operar tráfego pago sem o novo imposto de 2026: 6 jurisdições estratégicas",
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
      title: "Como abrir empresa no Reino Unido (Inglaterra): rápido, sem burocracia e 100% legal",
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
    <div className="min-h-screen bg-linear-to-br bg-background py-16 px-13 mt-40 mb-24 font-serif">
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