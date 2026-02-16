
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import { Header } from '@/components/header';
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);
    if (!article) return { title: 'Artigo não encontrado' };

    return {
        title: `${article.title} - Bezerra Borges`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [article.image],
        },
    };
}

// ... (imports remain)

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    const shareUrl = `https://www.bezerraborges.com.br/artigos/${article.slug}`;
    const shareText = `Artigo interessante: ${article.title}`;

    const relatedArticles = articles
        .filter((a) => a.category === article.category && a.slug !== article.slug)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-background text-foreground font-source-serif-pro pt-40 md:pt-48">
            {/* Hero Section with Background Image */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden rounded-b-[3rem] shadow-2xl">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 active:scale-100 transition-transform duration-1000"
                    style={{ backgroundImage: `url(${article.image || '/placeholder.svg'})` }}
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

                <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-end pb-12 md:pb-20">
                    <div className="max-w-4xl space-y-6 animate-fadeInUp">
                        <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-zinc-200">
                            <span className="px-4 py-1.5 bg-foreground text-background font-bold rounded-full backdrop-blur-md">
                                {article.category}
                            </span>
                            <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                                <Calendar className="h-4 w-4" />
                                <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                                <Clock className="h-4 w-4" />
                                <span>{article.readTime}</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white text-balance drop-shadow-lg">
                            {article.title}
                        </h1>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 md:py-24">
                {/* Content */}
                <div
                    className="prose prose-lg dark:prose-invert max-w-none 
                    prose-headings:font-source-serif-pro prose-headings:font-bold prose-p:text-zinc-600 dark:prose-p:text-zinc-300 prose-p:leading-relaxed
                    prose-strong:text-zinc-900 dark:prose-strong:text-white prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-primary prose-blockquote:bg-zinc-100 dark:prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg"
                    dangerouslySetInnerHTML={{ __html: article.content || '<p>Conteúdo não disponível.</p>' }}
                />

                {/* Share Section */}
                <div className="border-t border-border pt-10 mt-10">
                    <h3 className="text-lg font-semibold mb-6 text-center text-zinc-400 uppercase tracking-widest text-sm">Compartilhe este artigo</h3>
                    <div className="flex justify-center gap-6">
                        <a
                            href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/5 rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:-translate-y-1"
                            aria-label="Compartilhar no WhatsApp"
                        >
                            <Share2 className="h-6 w-6" />
                        </a>
                        <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/5 rounded-full hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:-translate-y-1"
                            aria-label="Compartilhar no LinkedIn"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/5 rounded-full hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 hover:-translate-y-1"
                            aria-label="Compartilhar no Twitter"
                        >
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a
                            href={`mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}`}
                            className="p-4 bg-white/5 rounded-full hover:bg-zinc-200 hover:text-black transition-all duration-300 hover:-translate-y-1"
                            aria-label="Compartilhar por Email"
                        >
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </article>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="py-24 border-t border-border bg-black/20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-source-serif-pro">
                            Continue Lendo
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedArticles.map((related) => (
                                <Link key={related.slug} href={`/artigos/${related.slug}`} className="group block bg-background rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={related.image || "/placeholder.svg"}
                                            alt={related.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 space-y-3">
                                        <span className="text-xs font-semibold text-chart-4 uppercase tracking-wider">{related.category}</span>
                                        <h3 className="text-xl font-bold font-source-serif-pro group-hover:text-chart-4 transition-colors leading-tight">
                                            {related.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm line-clamp-2">{related.excerpt}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Newsletter */}
            <section className="py-24 px-4 bg-linear-to-b from-transparent to-black/40">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="font-source-serif-pro text-3xl md:text-5xl text-balance">
                        Receba insights <span className="italic text-zinc-400">estratégicos</span>
                    </h2>
                    <p className="text-lg text-zinc-400 text-pretty max-w-2xl mx-auto">
                        Assine nossa newsletter e receba conteúdo exclusivo sobre proteção
                        patrimonial, internacionalização e estratégias jurídicas diretamente no seu e-mail.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pt-4 relative">
                        <Input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            className="h-14 bg-white/5 border-white/10 text-foreground placeholder:text-zinc-500 focus:border-chart-4 rounded-full px-6"
                        />
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-zinc-200 h-14 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                            Inscrever-se
                        </Button>
                    </div>

                    <p className="text-xs text-zinc-500">
                        Enviamos apenas conteúdo de valor. Sem spam. Cancele quando quiser.
                    </p>
                </div>
            </section>
        </div>
    );
}
