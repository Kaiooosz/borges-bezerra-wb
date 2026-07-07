import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade da Bezerra Borges Advogados: como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaDePrivacidadeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
