import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Solicite seu Diagnóstico",
  description:
    "Responda algumas perguntas sobre o seu caso e receba o direcionamento certo para internacionalização, holding, sucessão ou proteção patrimonial.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-40">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
