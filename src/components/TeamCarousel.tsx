'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useRef, useState } from 'react';

function stripTitle(name: string) {
  return name.replace(/^Dr[a]?\.\s*/i, '').trim();
}

function TeamCard({ member, index }: { member: { name: string; role: string; image: string }; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex-none w-64 snap-center group cursor-pointer">
      <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)]">
        {/* Imagem ou fallback */}
        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-zinc-800 to-zinc-900">
            <div className="w-20 h-20 rounded-full bg-zinc-700 flex items-center justify-center">
              <User className="w-10 h-10 text-zinc-400" />
            </div>
          </div>
        ) : (
          <Image
            src={member.image}
            alt={stripTitle(member.name)}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            priority={index < 4}
            sizes="(max-width: 768px) 100vw, 256px"
            onError={() => setImgError(true)}
          />
        )}

        {/* Gradiente refinado — garante legibilidade e profundidade */}
        <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent" />

        {/* Texto fitado sobre a foto com tipografia premium */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white tracking-tight leading-none mb-1">
            {stripTitle(member.name)}
          </h3>
          <p className="text-[10px] text-white/60 font-semibold tracking-[0.1em] uppercase">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TeamCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -290, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 290, behavior: 'smooth' });
    }
  };

  const team = [
    { name: 'Vinicius', role: 'Sócio Fundador', image: '/vinicius.jpg' },
    { name: 'Fabiano', role: 'Closer Sênior e Advogado', image: '/fabiano.png' },
    { name: 'Alice', role: 'Head de Offshore', image: '/alice.jpg' },
    { name: 'Clara', role: 'Business Partner', image: '/clara.jpg' },
    { name: 'Micaelle', role: 'Consultora Internacional', image: '/micaelle.jpg' },
    { name: 'Roberto', role: 'Gestão Patrimonial', image: '/roberto.jpg' },
    { name: 'Allan', role: 'Planejamento Sucessório', image: '/allan.jpg' },
    { name: 'Kaio', role: 'CRO', image: '/kaio.jpg' },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nosso Time de Especialistas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 15 anos de experiência combinada em estruturas jurídicas internacionais
          </p>
        </div>

        <div className="relative">
          {/* Botões nav (só desktop) */}
          <button
            onClick={scrollLeft}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -left-4 z-10 bg-black/40 backdrop-blur-md hover:bg-black/60 text-white p-3 rounded-full transition-all hidden md:flex items-center justify-center border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Próximo"
            className="absolute right-0 top-1/2 -translate-y-1/2 -right-4 z-10 bg-black/40 backdrop-blur-md hover:bg-black/60 text-white p-3 rounded-full transition-all hidden md:flex items-center justify-center border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carrossel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...team, ...team].map((member, index) => (
              <TeamCard key={`${member.name}-${index}`} member={member} index={index % team.length} />
            ))}
          </div>
        </div>

        {/* Indicador mobile */}
        <p className="text-center text-sm mt-6 md:hidden text-muted-foreground">
          Deslize para ver mais →
        </p>
      </div>

      <style>{`
        div[style*="scrollbarWidth"]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}