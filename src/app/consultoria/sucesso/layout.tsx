import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Solicitação Recebida",
  robots: { index: false, follow: false },
};

export default function ConsultoriaSucessoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
