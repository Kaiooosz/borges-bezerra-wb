import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Quem é a Bezerra Borges Advogados: atuação em direito empresarial, patrimonial e internacional, equipe e método de trabalho.",
  alternates: { canonical: "/sobre-nos" },
};

export default function SobreNosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
