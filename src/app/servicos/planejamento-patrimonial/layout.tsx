import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Planejamento Patrimonial e Sucessório",
  description:
    "Holdings, trusts, proteção patrimonial lícita e estratégias de sucessão com estrutura jurídica, tributária e societária integrada.",
  alternates: { canonical: "/servicos/planejamento-patrimonial" },
};

export default function PlanejamentoPatrimonialLayout({ children }: { children: React.ReactNode }) {
  return children;
}
