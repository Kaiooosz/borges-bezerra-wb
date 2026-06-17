import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Holding Patrimonial, Sucessória e Governança",
  description:
    "Estruturação patrimonial e sucessória para empresários e famílias: holdings, governança, sucessão e contratos familiares com análise jurídica, tributária e societária integrada.",
};

export default function HoldingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
