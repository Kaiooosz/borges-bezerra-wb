import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Jurídico Estratégico Empresarial",
  description:
    "Contratos nacionais e internacionais, acordos societários, reorganização societária e apoio a startups e scale-ups.",
};

export default function JuridicoEstrategicoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
