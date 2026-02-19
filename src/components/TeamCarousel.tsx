'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useRef, useState } from 'react';

// Sub-componente com fallback para imagens quebradas
function TeamCard({ member }: { member: { name: string; role: string; image: string } }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex-none w-72 snap-center group">
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:shadow-3xl group-hover:-translate-y-4">
        <div className="relative h-96 overflow-hidden bg-gray-800">
          {imgError ? (
            // Fallback elegante quando a imagem não existe/falha
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
              <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-gray-400" />
              </div>
            </div>
          ) : (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              unoptimized
              onError={() => setImgError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="p-6 text-center relative -mt-16">
          <div className="bg-black/80 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-foreground mb-1">
              {member.name}
            </h3>
            <p className="text-chart-4 text-sm font-medium">
              {member.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const team = [
    { name: 'Dr. Vinicius', role: 'Sócio Fundador', image: '/vinicius.jpg' },
    { name: 'Dr. Boaz', role: 'Sócio Fundador', image: '/boaz.jpg' },
    { name: 'Dr. Fabiano', role: 'Closer Sênior e Advogado', image: '/fabiano.jpg' },
    { name: 'Dra. Alice', role: 'Head de Offshore', image: '/alice.jpg' },
    { name: 'Dra. Clara', role: 'Business Partner', image: '/clara.jpg' },
    { name: 'Dra. Micaelle', role: 'Consultora Internacional', image: '/micaelle.jpg' },
    { name: 'Dr. Roberto', role: 'Gestão Patrimonial', image: '/roberto.jpg' },
    { name: 'Dra. Mariana', role: 'Planejamento Sucessório', image: '/mariana.jpg' },
    { name: 'Dr. Allan', role: 'Planejamento Sucessório', image: '/allan.jpg' },
    { name: 'Dr. Kaio', role: 'CRO', image: '/kaio.jpg' },
    { name: 'Dr. Tomas', role: 'RP e Closer Sênior', image: '/tomas.jpg' },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nosso Time de Especialistas
          </h2>
          <p className="text-xl text-chart-4 max-w-3xl mx-auto">
            Mais de 15 anos de experiência combinada em estruturas jurídicas internacionais
          </p>
        </div>

        <div className="relative">
          {/* Botões (mobile escondido, desktop visível) */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-foreground p-3 rounded-full transition-all hidden md:flex items-center justify-center"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-foreground p-3 rounded-full transition-all hidden md:flex items-center justify-center"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Carrossel */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...team, ...team].map((member, index) => (
              <TeamCard key={`${member.name}-${index}`} member={member} />
            ))}
          </div>
        </div>

        {/* Indicador mobile: arraste */}
        <p className="text-center text-sm mt-8 md:hidden text-gray-400">
          Deslize para ver mais →
        </p>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}