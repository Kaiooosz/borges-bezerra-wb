import { Header } from "@/components/header";
import { AnimatedHero } from "@/components/animated-hero";
import { ServicesPreview } from "@/components/services-preview";
import { LeadMagnet } from "@/components/lead-magnet";
import { ContactForm } from "@/components/contact-form";
import { FAQ } from "@/components/faq";


import YoutubeCard from '@/components/YoutubeCard';
import TeamCarousel from '@/components/TeamCarousel';
import { ConsultoriaPricing } from "@/components/ConsultoriaPricing";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-source-serif-pro"> {/* ← corrigido aqui */}
      <Header />
      <main>
        <AnimatedHero />
        <ServicesPreview />
        <LeadMagnet />
        <FAQ />
        
        {/* Seção do Vídeo */}
        <section className="py-24 bg-background">
          <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-semi-bold text-foreground mb-4 font-source-serif-pro text-center max-w-4xl mx-auto">
  Processo por Trás das Soluções<br className="hidden sm:block" /> que Transformam Negócios
</h2>
            <p className="text-xl text-chart-3 max-w-3xl mx-auto">
              Assista agora o video completo que já transformou a vida de centenas de empresários
            </p>
          </div>

          <YoutubeCard videoId="SEU_ID_DO_VIDEO_AQUI" /> {/* ← troque pelo ID real */}
        </section>
        <ContactForm />
        <TeamCarousel />
        <ConsultoriaPricing/>
      </main>
    </div>
  );
}