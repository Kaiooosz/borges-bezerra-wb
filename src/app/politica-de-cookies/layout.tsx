import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies da Bezerra Borges Advogados: quais cookies utilizamos, suas finalidades e como gerenciar suas preferências de navegação.",
  alternates: { canonical: "/politica-de-cookies" },
};

export default function PoliticaDeCookiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
