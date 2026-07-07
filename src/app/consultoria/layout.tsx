import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Consultoria Jurídica Estratégica",
  description:
    "Consultoria jurídica estratégica com diagnóstico do seu caso: internacionalização, holding, sucessão, cripto e proteção patrimonial para empresários.",
  alternates: { canonical: "/consultoria" },
};

export default function ConsultoriaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
