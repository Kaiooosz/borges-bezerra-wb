import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Internacionalização e Estruturas no Exterior",
  description:
    "Empresas no exterior, residência fiscal internacional, segunda cidadania e contas bancárias internacionais em mais de 15 jurisdições.",
};

export default function InternacionalizacaoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
