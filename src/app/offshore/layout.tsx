import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Internacionalização Empresarial e Estruturas no Exterior",
  description:
    "Diagnóstico de internacionalização para negócios digitais e patrimoniais: empresa, conta, contratos, tributação, residência fiscal, patrimônio e sucessão.",
  alternates: { canonical: "/offshore" },
};

export default function OffshoreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
