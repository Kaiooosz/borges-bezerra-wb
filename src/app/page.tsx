import { Header } from "@/components/header"
import { AnimatedHero } from "@/components/animated-hero"
import { ServicesPreview } from "@/components/services-preview"
import { LeadMagnet } from "@/components/lead-magnet"
import { ContactForm } from "@/components/contact-form"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-backgroud">
      <Header />
      <main>
        <AnimatedHero />
        <ServicesPreview />
        <LeadMagnet />
        <ContactForm />
        <FAQ />
      </main>
    </div>
  )
}