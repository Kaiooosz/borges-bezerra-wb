import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Legal Growth para Infoprodutores e Negócios Digitais",
  description:
    "Estrutura tributária conforme o regime aplicável, contratos, marcas e organização de riscos para infoprodutores e grandes lançamentos.",
};

export default function LegalGrowthLayout({ children }: { children: React.ReactNode }) {
  return children;
}
