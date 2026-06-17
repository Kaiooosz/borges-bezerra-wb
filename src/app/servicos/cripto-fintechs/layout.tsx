import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Cripto, Fintechs e Regulação",
  description:
    "Licenças VASP, MSB e pagamentos, compliance AML/KYC, estruturação de exchanges e tokenização.",
};

export default function CriptoFintechsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
