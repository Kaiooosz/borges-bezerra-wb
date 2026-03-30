import { Header } from "@/components/header";
import { AnimatedHero } from "@/components/animated-hero";
import { ServicesPreview } from "@/components/services-preview";
import { JurisdictionCards } from "@/components/jurisdiction-cards";
import { LeadMagnet } from "@/components/lead-magnet";
import { ContactForm } from "@/components/contact-form";
import { FAQ } from "@/components/faq";
import TeamCarousel from '@/components/TeamCarousel';
import { ConsultoriaPricing } from "@/components/ConsultoriaPricing";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <AnimatedHero />
        <ServicesPreview />
        <JurisdictionCards />
        <LeadMagnet />
        <ContactForm />
        <TeamCarousel />
        <ConsultoriaPricing />
        <FAQ />
      </main>
    </div>
  );
}