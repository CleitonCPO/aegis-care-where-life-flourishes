import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticleBySlug, getRecentArticles } from "@/data/blogArticles";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const recentArticles = getRecentArticles(3).filter(a => a.slug !== slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  // Schema.org Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.publishedAt,
    "dateModified": article.publishedAt,
    "author": {
      "@type": "Organization",
      "name": article.author,
      "url": "https://aegiscare.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Aegis Care",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aegiscare.com.br/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://aegiscare.com.br/blog/${article.slug}`
    },
    "articleSection": article.category,
    "wordCount": article.content.split(/\s+/).length
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <>
      <Helmet>
        <title>{article.title} | Blog Aegis Care</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={`${article.category}, cuidado domiciliar, idoso, terceira idade, Aegis Care`} />
        <link rel="canonical" href={`https://aegiscare.com.br/blog/${article.slug}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://aegiscare.com.br/blog/${article.slug}`} />
        <meta property="article:published_time" content={article.publishedAt} />
        <meta property="article:author" content={article.author} />
        <meta property="article:section" content={article.category} />
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          {/* Article Header */}
          <header className="py-12 bg-cream">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao Blog
                </Link>
                
                <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {article.category}
                </span>
                
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                  {article.title}
                </h1>
                
                <p className="text-muted-foreground text-lg md:text-xl mb-8">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(article.publishedAt)}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {article.readTime} de leitura
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleShare}
                    className="gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    Compartilhar
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-secondary hover:prose-a:text-secondary/80">
                  <ReactMarkdown>{article.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {recentArticles.length > 0 && (
            <section className="py-12 bg-cream">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
                    Artigos Relacionados
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {recentArticles.slice(0, 2).map((relatedArticle) => (
                      <Link
                        key={relatedArticle.id}
                        to={`/blog/${relatedArticle.slug}`}
                        className="bg-card p-6 rounded-lg shadow-soft hover:shadow-card transition-shadow group"
                      >
                        <span className="text-sm text-secondary font-medium">
                          {relatedArticle.category}
                        </span>
                        <h3 className="font-display text-lg text-foreground mt-2 group-hover:text-secondary transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-8 md:p-12 text-center">
                <h2 className="font-display text-2xl md:text-3xl text-primary-foreground mb-4">
                  Precisa de Orientação Personalizada?
                </h2>
                <p className="text-primary-foreground/80 mb-6">
                  Nossa equipe está pronta para ajudar sua família a encontrar a melhor solução de cuidado.
                </p>
                <a
                  href="https://wa.me/5511920067183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg font-medium hover:shadow-elevated transition-all"
                >
                  Fale com a Aegis Care
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogArticle;
