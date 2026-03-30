import React from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Header />
            <main className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
                <div className="space-y-8">
                    <div className="pt-24 md:pt-32 pb-8 text-center space-y-6">
                        <h1 className="font-sans font-light uppercase heading-gradient tracking-tight"
                            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.025em" }}>
                            Política de Cookies
                        </h1>
                        <p className="text-[11px] font-light uppercase tracking-[0.28em] text-muted-foreground">
                            Bezerra Borges Advogados
                        </p>
                    </div>

                    <section className="space-y-10">
                        <div className="space-y-3">
                            <h3 className="font-sans font-light uppercase text-foreground tracking-wide text-sm">1. O que são Cookies?</h3>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita um site. Eles são amplamente utilizados para fazer com que os sites funcionem de maneira eficiente e para fornecer informações aos proprietários do site.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-sans font-light uppercase text-foreground tracking-wide text-sm">2. Como utilizamos os Cookies</h3>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                O Bezerra Borges Advogados utiliza cookies para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar o conteúdo. Utilizamos os seguintes tipos:
                            </p>
                            <ul className="space-y-2 pl-4">
                                {["Cookies Essenciais — Necessários para o funcionamento do site.",
                                  "Cookies de Desempenho — Coletam informações sobre como os visitantes utilizam o site.",
                                  "Cookies Funcionais — Permitem que o site se lembre de suas escolhas."].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                                        <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-muted-foreground/40 inline-block" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-sans font-light uppercase text-foreground tracking-wide text-sm">3. Gerenciamento de Cookies</h3>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                Você pode controlar e/ou excluir cookies conforme desejar. A maioria dos navegadores aceita cookies automaticamente, mas você pode modificar as configurações para recusá-los.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-sans font-light uppercase text-foreground tracking-wide text-sm">4. Mais Informações</h3>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                Para mais informações sobre como tratamos seus dados pessoais, consulte nossa{" "}
                                <Link href="/politica-de-privacidade" className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity">
                                    Política de Privacidade
                                </Link>.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
