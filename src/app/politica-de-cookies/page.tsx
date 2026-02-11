import React from "react";
import Link from "next/link";

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <main className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
                <div className="space-y-8">
                    <div className="pt-24 md:pt-32 pb-8 text-center space-y-6">
                        <div className="flex justify-center mb-6">
                            {/* Logo preta para tema claro */}
                            <img
                                src="/Logo preto.svg"
                                alt="BB Logo"
                                className="h-24 w-24 md:h-32 md:w-32 dark:hidden"
                            />
                            {/* Logo branca para tema escuro */}
                            <img
                                src="/LogoBranco.svg"
                                alt="BB Logo"
                                className="h-24 w-24 md:h-32 md:w-32 hidden dark:block"
                            />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold font-source-serif-pro tracking-tight">
                            POLÍTICA DE COOKIES
                        </h1>
                        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground font-source-serif-pro tracking-wide uppercase">
                            BEZERRA BORGES ADVOGADOS
                        </h2>
                    </div>

                    <section className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-source-serif-pro">1. O QUE SÃO COOKIES?</h3>
                            <p className="leading-relaxed">
                                Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo (computador, tablet ou celular) quando você visita um site. Eles são amplamente utilizados para fazer com que os sites funcionem, ou funcionem de maneira mais eficiente, bem como para fornecer informações aos proprietários do site.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-source-serif-pro">2. COMO UTILIZAMOS OS COOKIES</h3>
                            <p className="leading-relaxed">
                                O Bezerra Borges Advogados utiliza cookies para melhorar a sua experiência de navegação, analisar o tráfego do site e personalizar o conteúdo. Utilizamos os seguintes tipos de cookies:
                            </p>
                            <ul className="list-disc space-y-2 pl-6">
                                <li>
                                    <strong>Cookies Essenciais:</strong> Necessários para o funcionamento do site. Sem eles, algumas funcionalidades podem não estar disponíveis.
                                </li>
                                <li>
                                    <strong>Cookies de Desempenho e Análise:</strong> Coletam informações sobre como os visitantes utilizam o site, permitindo-nos melhorar a sua estrutura e conteúdo.
                                </li>
                                <li>
                                    <strong>Cookies Funcionais:</strong> Permitem que o site se lembre de suas escolhas (como nome de usuário, idioma ou região) e ofereça recursos aprimorados.
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-source-serif-pro">3. GERENCIAMENTO DE COOKIES</h3>
                            <p className="leading-relaxed">
                                Você pode controlar e/ou excluir cookies conforme desejar. A maioria dos navegadores aceita cookies automaticamente, mas você pode modificar as configurações do seu navegador para recusar cookies, se preferir. No entanto, isso pode impedir que você aproveite ao máximo o site.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-source-serif-pro">4. MAIS INFORMAÇÕES</h3>
                            <p className="leading-relaxed">
                                Para mais informações sobre como tratamos seus dados pessoais, consulte nossa{" "}
                                <Link href="/politica-de-privacidade" className="text-primary hover:underline font-semibold">
                                    Política de Privacidade e Proteção de Dados
                                </Link>.
                            </p>
                        </div>

                        <div className="space-y-4 pt-8">
                            <p className="text-sm text-center italic">
                                Esta Política de Cookies é parte integrante das nossas Políticas Internas e de Privacidade.
                            </p>
                        </div>
                    </section>

                    <footer className="pt-12 text-center text-sm text-muted-foreground border-t">
                        <p>São Paulo: Avenida Paulista, 1636, Conjunto 4, 15 andar - Cerqueira César, São Paulo - SP, 01310-200</p>
                        <p>www.boazbezerra.com.br</p>
                    </footer>
                </div>
            </main>
        </div>
    );
}
