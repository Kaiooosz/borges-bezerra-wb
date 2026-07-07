import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: {
    default: "Áreas de Atuação",
    template: "%s | BBLAW",
  },
  description:
    "Planejamento patrimonial, internacionalização, cripto e fintechs, jurídico estratégico, legal growth e contencioso estratégico.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
