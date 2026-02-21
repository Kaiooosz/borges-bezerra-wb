'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useRef, useState } from 'react';

function stripTitle(name: string) {
  return name.replace(/^Dr[a]?\.\s*/i, '').trim();
}

function TeamCard({ member }: { member: { name: string; role: string; image: string } }) {
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
            unoptimized
            onError={() => setImgError(true)}
          />
        )}

        {/* Gradiente sempre escuro no fundo — garante legibilidade em qualquer tema */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

        {/* Texto fixo sobre a foto */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-lg font-bold text-white leading-tight">
            {stripTitle(member.name)}
          </h3>
          <p className="text-xs text-white/70 mt-0.5 font-medium tracking-wide uppercase">
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
    { name: 'Boaz', role: 'Sócio Fundador', image: '/boaz.jpg' },
    { name: 'Fabiano', role: 'Closer Sênior e Advogado', image: '/fabiano.jpg' },
    { name: 'Alice', role: 'Head de Offshore', image: '/alice.jpg' },
    { name: 'Clara', role: 'Business Partner', image: '/clara.jpg' },
    { name: 'Micaelle', role: 'Consultora Internacional', image: '/micaelle.jpg' },
    { name: 'Roberto', role: 'Gestão Patrimonial', image: '/roberto.jpg' },
    { name: 'Allan', role: 'Planejamento Sucessório', image: '/allan.jpg' },
    { name: 'Kaio', role: 'CRO', image: '/kaio.jpg' },
    { name: 'Tomas', role: 'RP e Closer Sênior', image: '/tomas.jpg' },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur-md hover:bg-black/60 text-white p-3 rounded-full transition-all hidden md:flex items-center justify-center border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Próximo"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur-md hover:bg-black/60 text-white p-3 rounded-full transition-all hidden md:flex items-center justify-center border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carrossel */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...team, ...team].map((member, index) => (
              <TeamCard key={`${member.name}-${index}`} member={member} />
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