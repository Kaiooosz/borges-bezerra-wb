'use client';

import Image from 'next/image';
import { MouseEvent } from 'react';

interface YoutubeCardProps {
  videoId: string;
  title?: string;
  description?: string;
}

export default function YoutubeCard({
  videoId,
  title = 'Guia essencial de estruturas jurídicas offshore',
  description = 'Aprenda tudo sobre holdings, trusts e empresas offshore de forma prática e segura com quem já estruturou mais de R$ 2 bilhões em ativos.',
}: YoutubeCardProps) {
  const openFullscreenVideo = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/watch?v=w019MzRosmk?autoplay=1&fs=1&rel=0&modestbranding=1&mute=0`;
    iframe.allow = 'autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100vw';
    iframe.style.height = '100vh';
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999';
    iframe.style.background = '#000';

    document.body.innerHTML = '';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.body.appendChild(iframe);

    setTimeout(() => {
      if (iframe.requestFullscreen) iframe.requestFullscreen();
      else if ((iframe as any).webkitRequestFullscreen) (iframe as any).webkitRequestFullscreen();
      else if ((iframe as any).msRequestFullscreen) (iframe as any).msRequestFullscreen();
    }, 600);
  };

  return (
    <div className="relative max-w-md mx-auto my-12 bg-background rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-3">
      {/* Thumbnail com Play */}
      <div
        onClick={openFullscreenVideo}
        className="relative overflow-hidden cursor-pointer group"
      >
        <Image
          src={`https://img.youtube.com/vi/watch?v=w019MzRosmk/maxresdefault.jpg`}
          alt="Símbolo fundo preto.png"
          width={840}
          height={473}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />

        {/* Botão Play grande e bonito */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm transition-all group-hover:scale-125 group-hover:bg-black/70">
            <svg className="w-12 h-12 text-foreground ml-1" viewBox="0 0 68 68" fill="none">
              <path d="M26 22 L26 46 L48 34 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      {/* Texto abaixo */}
      <div className="p-6 text-foreground">
        <h3 className="text-2xl font-semibold leading-tight mb-3">
          {title}
        </h3>
        <p className="text-chart-3 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}