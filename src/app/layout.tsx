import type React from "react";
import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "@/styles/global.css";
import { ThemeProvider } from "@/components/theme-provider";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",  
});

export const metadata: Metadata = {
  title: "Bezerra Borges Advogados | Proteção Patrimonial e Offshore",
  description:
    "Escritório especializado em abertura de empresas offshore, planejamento tributário internacional, proteção patrimonial e consultoria para criptomoedas. Transformamos complexidades em oportunidades.",
  keywords:
    "offshore, empresa offshore, planejamento tributário, proteção patrimonial, consultoria internacional, criptomoedas, holdings, conta internacional",
  openGraph: {
    title: "Bezerra Borges Advogados | Proteção Patrimonial e Offshore",
    description:
      "Transformamos complexidades em oportunidades. Acesso global para indivíduos e negócios.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={`${sourceSerif.variable} ${inter.variable} font-sans antialiased`}
      >
<ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header />
        {children}
        <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
