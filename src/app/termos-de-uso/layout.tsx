import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de uso do site da Bezerra Borges Advogados: condições de navegação, propriedade intelectual e regras de utilização do conteúdo.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermosDeUsoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
