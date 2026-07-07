import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Artigos e Conteúdo Jurídico",
  description:
    "Análises sobre internacionalização empresarial, holding patrimonial, sucessão, Lei 14.754, cripto e negócios digitais.",
  alternates: { canonical: "/artigos" },
};

export default function ArtigosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
