
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Calendar, Clock, Share2, Linkedin, Twitter, Mail, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
        alternates: { canonical: `/artigos/${article.slug}` },
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [article.image],
        },
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    const shareUrl = `https://www.bezerraborges.com.br/artigos/${article.slug}`;
    const shareText = `${article.title}`;

    // Always fill exactly 3 cards: same category first, then fill from other categories
    const sameCategory = articles.filter(
        (a) => a.category === article.category && a.slug !== article.slug
    );
    const otherCategory = articles.filter(
        (a) => a.category !== article.category && a.slug !== article.slug
    );
    const relatedArticles = [
        ...sameCategory,
        ...otherCategory,
    ].slice(0, 3);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Header />

            {/* Hero */}
            <div className="relative min-h-[70vh] w-full overflow-hidden flex flex-col">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image || '/placeholder.svg'})` }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.5) 0%, rgba(5,5,5,0.85) 100%)" }} />

                <div className="relative flex-1 max-w-5xl mx-auto px-6 flex flex-col justify-end pb-16 md:pb-24 w-full">
                    <div className="space-y-5">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-[9px] font-light uppercase tracking-[0.22em] px-3 py-1.5 rounded-full"
                                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.85)" }}>
                                {article.category}
                            </span>
                            <div className="flex items-center gap-1.5 text-[11px] font-light text-white/50">
                                <Calendar className="h-3 w-3" />
                                <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] font-light text-white/50">
                                <Clock className="h-3 w-3" />
                                <span>{article.readTime}</span>
                            </div>
                        </div>

                        <h1 className="font-sans font-light text-white leading-tight max-w-3xl"
                            style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.02em", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
                            {article.title}
                        </h1>

                        {article.excerpt && (
                            <p className="text-[15px] font-light text-white/50 max-w-2xl leading-relaxed">
                                {article.excerpt}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Back link */}
            <div className="max-w-5xl mx-auto px-6 pt-10">
                <Link href="/artigos"
                    className="inline-flex items-center gap-2 text-[11px] font-light uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors duration-200">
                    <ArrowLeft className="h-3 w-3" />
                    Todos os artigos
                </Link>
            </div>

            {/* Article Body */}
            <section className="bg-background">
            <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
                <div
                    className="article-prose prose prose-lg max-w-none
                    prose-headings:font-sans prose-headings:font-light prose-headings:uppercase prose-headings:tracking-tight
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:font-light
                    prose-strong:text-foreground prose-strong:font-light
                    prose-a:text-foreground prose-a:no-underline hover:prose-a:opacity-70
                    prose-blockquote:border-l-border prose-blockquote:text-muted-foreground prose-blockquote:font-light prose-blockquote:not-italic
                    prose-li:text-muted-foreground prose-li:font-light
                    dark:prose-headings:text-white dark:prose-p:text-white/60 dark:prose-strong:text-white dark:prose-li:text-white/60"
                    dangerouslySetInnerHTML={{ __html: article.content || '<p>Conteúdo não disponível.</p>' }}
                />

                {/* Share */}
                <div className="border-t border-border pt-10 mt-12">
                    <span className="block text-[11px] font-light uppercase tracking-[0.22em] text-muted-foreground mb-6 text-center">
                        Compartilhe
                    </span>
                    <div className="flex justify-center gap-3">
                        {[
                            { href: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, label: "WhatsApp", icon: Share2 },
                            { href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, label: "LinkedIn", icon: Linkedin },
                            { href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, label: "Twitter", icon: Twitter },
                            { href: `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}`, label: "Email", icon: Mail },
                        ].map(({ href, label, icon: Icon }) => (
                            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                className="p-3 rounded-full transition-all duration-200 hover:scale-[1.05]"
                                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                                aria-label={`Compartilhar no ${label}`}>
                                <Icon className="h-4 w-4 text-muted-foreground" />
                            </a>
                        ))}
                    </div>
                </div>
            </article>
            </section>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="bg-background py-24 border-t border-border px-4">
                    <div className="max-w-7xl mx-auto">
                        <span className="block text-[11px] font-light uppercase tracking-[0.25em] text-muted-foreground mb-6">
                            Continue Lendo
                        </span>
                        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
                            {relatedArticles.map((related) => (
                                <Link key={related.slug} href={`/artigos/${related.slug}`} className="block">
                                    <div className="group bg-card h-full p-6 transition-colors duration-300 hover:bg-muted/20">
                                        <div className="aspect-video overflow-hidden rounded-lg mb-5">
                                            <img
                                                src={related.image || "/placeholder.svg"}
                                                alt={related.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                            />
                                        </div>
                                        <span className="text-[9px] font-light uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                                            {related.category}
                                        </span>
                                        <h3 className="font-sans font-light text-foreground text-base leading-snug mb-3">
                                            {related.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground font-light line-clamp-2 mb-4">{related.excerpt}</p>
                                        <span className="inline-flex items-center gap-1.5 text-[11px] font-light uppercase tracking-[0.18em] text-foreground/50 group-hover:text-foreground transition-colors duration-200">
                                            Ler artigo <ArrowRight className="h-3 w-3" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
}
