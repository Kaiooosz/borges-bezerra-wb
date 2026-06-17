import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Sobre a BBLAW",
  description:
    "Quem é a Bezerra Borges Advogados: atuação em direito empresarial, patrimonial e internacional, equipe e método de trabalho.",
};

export default function SobreNosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
