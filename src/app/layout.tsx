import type React from "react";
import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/global.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif-pro",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bezerraborges.com.br"),
  title: {
    default: "BBLAW | Estratégia Jurídica Empresarial, Patrimonial e Internacional",
    template: "%s | BBLAW",
  },
  description:
    "Escritório com atuação em direito empresarial, tributário, societário, internacional, patrimonial, sucessório, cripto, fintechs e negócios digitais.",
  keywords:
    "direito empresarial, internacionalização empresarial, estruturação internacional, planejamento patrimonial, holding patrimonial, planejamento sucessório, governança familiar, direito tributário, cripto, fintech, negócios digitais, Lei 14.754",
  openGraph: {
    title: "BBLAW | Estratégia Jurídica Empresarial, Patrimonial e Internacional",
    description:
      "Estratégia jurídica para empresários, famílias e negócios digitais em decisões complexas.",
    type: "website",
  },
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Bezerra Borges Advogados",
  alternateName: "BBLAW",
  url: "https://www.bezerraborges.com.br",
  description:
    "Escritório com atuação em direito empresarial, tributário, societário, internacional, patrimonial, sucessório, cripto, fintechs e negócios digitais.",
  email: "contato@bezerraborges.com.br",
  telephone: "+55-21-97990-1686",
  areaServed: "BR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Paulista, 1636, Conj. 4, 15º andar — Cerqueira César",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/bezerraeborges"],
  knowsAbout: [
    "Internacionalização empresarial",
    "Holding patrimonial",
    "Planejamento sucessório",
    "Direito tributário",
    "Cripto e fintechs",
    "Lei 14.754",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${sourceSerif.variable} ${inter.variable} font-sans antialiased relative`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17998581237"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17998581237');
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
