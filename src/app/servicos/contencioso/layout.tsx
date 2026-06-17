import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Contencioso Estratégico",
  description:
    "Litígios empresariais e societários, defesa patrimonial, medidas cautelares e arbitragem internacional.",
};

export default function ContenciosoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
