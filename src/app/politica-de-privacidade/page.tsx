import React from "react";

export default function PrivacyPolicyPage() {
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
                            POLÍTICAS INTERNAS
                        </h1>
                        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground font-source-serif-pro tracking-wide uppercase">
                            BEZERRA BORGES ADVOGADOS
                        </h2>
                    </div>

                    <section className="space-y-4 text-sm md:text-base text-center border-b pb-8">
                        <p className="font-semibold">Políticas Internas - BBLaw</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto pt-4">
                            <div className="space-y-1">
                                <p>Wellingthon Boaz Bezerra</p>
                                <p>Vinicius Borges de Albuquerque</p>
                                <p>Renata Dorta Bezerra</p>
                            </div>
                            <div className="space-y-1">
                                <p>Micaelle Sampaio Bezerra</p>
                                <p>Mariana Messias da Fonseca</p>
                                <p>Roberto Bezerra</p>
                            </div>
                        </div>
                        <div className="pt-4">
                            <p>Alice Gomes Rayol</p>
                            <p>Renan Aparecido Marineli dos Santos</p>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-source-serif-pro">1. APRESENTAÇÃO INSTITUCIONAL</h3>
                            <p className="leading-relaxed">
                                O presente documento estabelece as Políticas Internas, as normas de conduta, as diretrizes operacionais e os princípios de governança do Bezerra Borges Advogados, aplicáveis a todos os seus sócios, advogados associados, consultores, colaboradores, parceiros e terceiros que atuem direta ou indiretamente em nome do escritório.
                            </p>
                            <p className="leading-relaxed">Este Manual tem por finalidade:</p>
                            <ul className="list-none space-y-2 pl-4">
                                <li>I. assegurar a conformidade legal e ética em todas as atividades desenvolvidas pelo escritório;</li>
                                <li>II. padronizar procedimentos internos, fluxos operacionais e práticas profissionais;</li>
                                <li>III. proteger a reputação institucional, os interesses dos clientes e o patrimônio intelectual do escritório;</li>
                                <li>IV. garantir o alinhamento permanente entre a prática profissional, a missão, a visão e os valores institucionais.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-source-serif-pro">2. IDENTIDADE INSTITUCIONAL</h3>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold">2.1 Missão</h4>
                                <p className="leading-relaxed">
                                    Prestar serviços jurídicos e estratégicos de elevado padrão técnico, voltados à proteção patrimonial, à estruturação jurídica, ao planejamento tributário e à internacionalização de negócios, assegurando segurança jurídica, eficiência operacional e soluções personalizadas, em estrita observância à legislação brasileira e internacional.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold">2.2 Visão</h4>
                                <p className="leading-relaxed">
                                    Ser reconhecido como referência nacional e internacional em engenharia jurídica patrimonial e empresarial, destacando-se pela excelência técnica, ética profissional, inovação estratégica e atuação global integrada.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold">2.3 Valores</h4>
                                <p className="leading-relaxed">Constituem valores institucionais do Bezerra Borges Advogados:</p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li>I. ética e legalidade absoluta;</li>
                                    <li>II. segurança jurídica e previsibilidade;</li>
                                    <li>III. confidencialidade e proteção de dados;</li>
                                    <li>IV. excelência técnica e atualização contínua;</li>
                                    <li>V. transparência nas relações com clientes e parceiros;</li>
                                    <li>VI. estratégia, inovação e visão de longo prazo;</li>
                                    <li>VII. responsabilidade institucional e reputacional.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-source-serif-pro">3. ESCOPO DE ATUAÇÃO DO ESCRITÓRIO</h3>
                            <p className="leading-relaxed">
                                As políticas previstas neste Manual aplicam-se a todas as áreas de atuação do Bezerra Borges Advogados, incluindo, sem se limitar a:
                            </p>
                            <ul className="list-none space-y-2 pl-4">
                                <li>I. planejamento patrimonial e sucessório;</li>
                                <li>II. estruturação de holdings familiares e empresariais;</li>
                                <li>III. planejamento tributário nacional e internacional;</li>
                                <li>IV. estruturas offshore e internacionalização de patrimônio;</li>
                                <li>V. direito societário e governança corporativa;</li>
                                <li>VI. compliance fiscal, regulatório e empresarial;</li>
                                <li>VII. criptoativos, blockchain e ativos digitais;</li>
                                <li>VIII. consultoria jurídica estratégica para empresários e investidores;</li>
                                <li>IX. reorganizações societárias e patrimoniais;</li>
                                <li>X. proteção patrimonial lícita e blindagem jurídica preventiva.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-source-serif-pro">4. POLÍTICA DE ÉTICA E CONDUTA PROFISSIONAL</h3>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold">4.1 Observância às Normas da Advocacia</h4>
                                <p className="leading-relaxed">Todos os profissionais vinculados ao escritório devem observar, de forma rigorosa e incondicional:</p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li>I. o Estatuto da Advocacia e da OAB (Lei nº 8.906/1994);</li>
                                    <li>II. o Código de Ética e Disciplina da OAB;</li>
                                    <li>III. os Provimentos, Resoluções e demais normativos do Conselho Federal da OAB;</li>
                                    <li>IV. a legislação brasileira e internacional aplicável às operações assessoradas.</li>
                                </ul>
                                <p className="leading-relaxed mt-4">É expressamente vedada qualquer prática que configure:</p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li>I. captação irregular de clientela;</li>
                                    <li>II. promessa ou garantia de resultados;</li>
                                    <li>III. publicidade em desacordo com as normas éticas da advocacia;</li>
                                    <li>IV. exercício ilegal da advocacia;</li>
                                    <li>V. atuação profissional em desconformidade com princípios éticos ou legais.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-source-serif-pro">5. POLÍTICA DE COMPLIANCE E CONFORMIDADE LEGAL</h3>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold">5.1 Conformidade Regulatória</h4>
                                <p className="leading-relaxed">
                                    O Bezerra Borges Advogados adota postura ativa, preventiva e contínua de compliance, especialmente nas operações que envolvam:
                                </p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li>I. estruturas offshore;</li>
                                    <li>II. planejamento tributário internacional;</li>
                                    <li>III. criptoativos e ativos digitais;</li>
                                    <li>IV. transferências internacionais de recursos;</li>
                                    <li>V. holdings e reorganizações patrimoniais.</li>
                                </ul>
                                <p className="leading-relaxed mt-4">Devem ser rigorosamente observadas, entre outras normas aplicáveis:</p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li>I. legislação e regulamentos de prevenção à lavagem de dinheiro e financiamento ao terrorismo (PLD/AML);</li>
                                    <li>II. procedimentos de Know Your Client (KYC);</li>
                                    <li>III. normas e acordos internacionais, tais como FATCA, CRS e BEPS;</li>
                                    <li>IV. legislação cambial e tributária brasileira;</li>
                                    <li>V. regras de substância econômica e propósito negocial.</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold">5.2 Vedação a Atos Ilícitos</h4>
                                <p className="leading-relaxed">É expressamente proibido ao escritório e a seus profissionais:</p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li>I. estruturar ou participar de operações com finalidade ilícita ou fraudulenta;</li>
                                    <li>II. ocultar, dissimular ou lavar bens, direitos ou valores;</li>
                                    <li>III. criar estruturas desprovidas de propósito econômico legítimo;</li>
                                    <li>IV. utilizar o escritório, direta ou indiretamente, para evasão fiscal ou prática de crimes financeiros.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-source-serif-pro">6. POLÍTICA DE PROTEÇÃO DE DADOS E CONFIDENCIALIDADE</h3>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold">6.1 Proteção de Dados Pessoais</h4>
                                <p className="leading-relaxed">
                                    O escritório cumpre integralmente a Lei nº 13.709/2018, bem como legislações estrangeiras equivalentes, quando aplicáveis.
                                </p>
                                <p className="leading-relaxed">São diretrizes obrigatórias:</p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li>I. coleta mínima de dados estritamente necessários à prestação dos serviços;</li>
                                    <li>II. utilização dos dados exclusivamente para as finalidades contratadas;</li>
                                    <li>III. armazenamento seguro, controlado e rastreável das informações;</li>
                                    <li>IV. acesso restrito aos dados por profissionais devidamente autorizados;</li>
                                    <li>V. eliminação dos dados conforme prazos legais, regulatórios ou contratuais.</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold">6.2 Sigilo Profissional</h4>
                                <p className="leading-relaxed">O sigilo profissional é princípio fundamental, absoluto e inegociável.</p>
                                <p className="leading-relaxed">Todos os profissionais devem:</p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li>I. assinar Termo de Confidencialidade;</li>
                                    <li>II. manter o sigilo mesmo após o encerramento da relação profissional;</li>
                                    <li>III. abster-se de discutir casos ou informações sensíveis em ambientes não controlados;</li>
                                    <li>IV. proteger documentos e informações, tanto em meio físico quanto digital.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-source-serif-pro">7. POLÍTICA DE ATENDIMENTO AO CLIENTE</h3>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold">7.1 Padrão de Atendimento</h4>
                                <p className="leading-relaxed">O atendimento prestado pelo escritório deve ser:</p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li>I. personalizado;</li>
                                    <li>II. estratégico;</li>
                                    <li>III. claro e objetivo;</li>
                                    <li>IV. fundamentado em análise técnica aprofundada.</li>
                                </ul>
                                <p className="leading-relaxed mt-4">É vedado aos profissionais:</p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li>I. criar expectativas irreais ou infundadas;</li>
                                    <li>II. minimizar ou omitir riscos jurídicos, tributários ou regulatórios;</li>
                                    <li>III. deixar de prestar informações relevantes ao cliente.</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold">7.2 Comunicação</h4>
                                <p className="leading-relaxed">A comunicação com clientes deve observar os seguintes critérios:</p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li>I. utilização preferencial de canais institucionais;</li>
                                    <li>II. elaboração de relatórios claros, precisos e devidamente documentados;</li>
                                    <li>III. registro interno das orientações estratégicas relevantes;</li>
                                    <li>IV. uso de linguagem acessível, sem prejuízo do rigor técnico-jurídico.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-source-serif-pro">8. POLÍTICA DE CONTRATAÇÃO E HONORÁRIOS</h3>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold">8.1 Formalização Contratual</h4>
                                <p className="leading-relaxed">
                                    Todo serviço prestado pelo escritório deverá ser formalizado mediante contrato escrito, contendo, no mínimo:
                                </p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li>I. definição clara do escopo dos serviços;</li>
                                    <li>II. estipulação de honorários;</li>
                                    <li>III. prazos e responsabilidades das partes;</li>
                                    <li>IV. cláusulas de confidencialidade e compliance.</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold">8.2 Honorários Advocatícios</h4>
                                <p className="leading-relaxed">A fixação de honorários observará:</p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li>I. a Tabela de Honorários da OAB;</li>
                                    <li>II. a complexidade técnica do serviço;</li>
                                    <li>III. o risco jurídico envolvido;</li>
                                    <li>IV. o valor econômico da operação;</li>
                                    <li>V. o tempo e a expertise demandados.</li>
                                </ul>
                                <p className="leading-relaxed mt-4">
                                    É vedada a cobrança de honorários sem contrato formal ou em desacordo com os parâmetros éticos.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-source-serif-pro">9. POLÍTICA DE GOVERNANÇA INTERNA</h3>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold">9.1 Organização e Responsabilidades</h4>
                                <p className="leading-relaxed">A governança interna do escritório observará:</p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li>I. definição clara de papéis e responsabilidades entre sócios, advogados e colaboradores;</li>
                                    <li>II. segregação de funções críticas;</li>
                                    <li>III. registro formal de decisões estratégicas relevantes;</li>
                                    <li>IV. revisão periódica de procedimentos internos.</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold">9.2 Auditoria e Revisão</h4>
                                <p className="leading-relaxed">O escritório realizará:</p>
                                <ul className="list-none space-y-2 pl-4">
                                    <li>I. auditorias internas periódicas;</li>
                                    <li>II. atualização deste Manual em razão de alterações legislativas ou regulatórias;</li>
                                    <li>III. revisão contínua das estruturas e práticas adotadas.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-source-serif-pro">10. POLÍTICA DE TREINAMENTO E ATUALIZAÇÃO</h3>
                            <p className="leading-relaxed">O Bezerra Borges Advogados incentiva e exige:</p>
                            <ul className="list-none space-y-2 pl-4">
                                <li>I. atualização técnica contínua de seus profissionais;</li>
                                <li>II. estudo permanente da legislação nacional e internacional;</li>
                                <li>III. participação em treinamentos de compliance, LGPD e ética profissional;</li>
                                <li>IV. desenvolvimento de visão estratégica e de negócios.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-source-serif-pro">11. DISPOSIÇÕES FINAIS</h3>
                            <p className="leading-relaxed">
                                O descumprimento das políticas e diretrizes estabelecidas neste Manual poderá ensejar, conforme o caso:
                            </p>
                            <ul className="list-none space-y-2 pl-4">
                                <li>I. advertência;</li>
                                <li>II. suspensão;</li>
                                <li>III. rescisão contratual;</li>
                                <li>IV. comunicação aos órgãos competentes, inclusive à OAB, quando aplicável;</li>
                                <li>V. responsabilização civil, administrativa e criminal.</li>
                            </ul>
                            <p className="text-muted-foreground mt-8 text-center italic">
                                Este Manual entra em vigor aos 09 de fevereiro de 2026.
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
