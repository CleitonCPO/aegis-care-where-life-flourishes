import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Share2, Home, MessageCircle, BookOpen, Award } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticleBySlug, getRelatedArticles, blogArticles } from "@/data/blogArticles";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

// References for EEAT
const references = [
  {
    name: "Organização Mundial da Saúde (OMS)",
    url: "https://www.who.int/pt",
    description: "Diretrizes sobre envelhecimento saudável e cuidados de longa duração"
  },
  {
    name: "Ministério da Saúde - Brasil",
    url: "https://www.gov.br/saude/pt-br",
    description: "Políticas públicas de saúde do idoso"
  },
  {
    name: "Sociedade Brasileira de Geriatria e Gerontologia (SBGG)",
    url: "https://sbgg.org.br",
    description: "Referência em geriatria e gerontologia no Brasil"
  }
];

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const relatedArticles = slug ? getRelatedArticles(slug, 2) : [];

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

  // Schema.org Article structured data with BreadcrumbList and Author
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": article.title,
        "description": article.excerpt,
        "image": `https://aegiscare.com.br${article.image}`,
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
        "wordCount": article.content.split(/\s+/).length,
        "keywords": ["cuidado domiciliar", "cuidado ao idoso em casa", "envelhecimento saudável", "segurança clínica", "assistência domiciliar", article.category.toLowerCase()],
        "citation": references.map(ref => ({
          "@type": "Organization",
          "name": ref.name,
          "url": ref.url
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://aegiscare.com.br"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://aegiscare.com.br/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": `https://aegiscare.com.br/blog/${article.slug}`
          }
        ]
      }
    ]
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
        <meta name="keywords" content={`${article.category}, cuidado domiciliar, cuidado ao idoso em casa, envelhecimento saudável, segurança clínica, assistência domiciliar, Aegis Care`} />
        <link rel="canonical" href={`https://aegiscare.com.br/blog/${article.slug}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://aegiscare.com.br/blog/${article.slug}`} />
        <meta property="og:image" content={`https://aegiscare.com.br${article.image}`} />
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
          {/* Breadcrumb Navigation */}
          <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors flex items-center gap-1">
                  <Home className="w-4 h-4" />
                  Início
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/blog" className="hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium truncate max-w-[200px]">
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Article Hero Image */}
          <div className="w-full h-64 md:h-96 overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              width={1200}
              height={384}
            />
          </div>

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
              <div className="max-w-3xl mx-auto">
                {/* Article body with proper typography */}
                <div className="prose prose-lg max-w-none
                  prose-headings:font-display prose-headings:text-foreground
                  prose-h1:text-3xl prose-h1:md:text-4xl prose-h1:mt-0 prose-h1:mb-10 prose-h1:leading-tight prose-h1:text-center
                  prose-h2:text-2xl prose-h2:md:text-[1.75rem] prose-h2:mt-12 prose-h2:mb-5 prose-h2:leading-snug prose-h2:font-bold prose-h2:text-navy
                  prose-h3:text-lg prose-h3:md:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:leading-snug prose-h3:text-foreground prose-h3:font-semibold
                  prose-h4:text-base prose-h4:md:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:font-semibold
                  prose-p:text-muted-foreground prose-p:text-base prose-p:md:text-[1.0625rem] prose-p:leading-[1.8] prose-p:mb-5 prose-p:text-justify prose-p:hyphens-auto
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-li:text-muted-foreground prose-li:text-base prose-li:md:text-[1.0625rem] prose-li:leading-[1.8] prose-li:mb-2
                  prose-ul:my-5 prose-ul:pl-6 prose-ul:list-disc prose-ul:space-y-1
                  prose-ol:my-5 prose-ol:pl-6 prose-ol:list-decimal prose-ol:space-y-1
                  prose-a:text-link hover:prose-a:text-link-hover prose-a:font-medium prose-a:underline prose-a:underline-offset-2
                  prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:my-8
                  prose-hr:my-12 prose-hr:border-border/50
                  prose-em:text-foreground/80
                  prose-table:my-8 prose-table:w-full prose-table:border-collapse
                  prose-thead:bg-primary/10 prose-thead:text-foreground
                  prose-th:border prose-th:border-border prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold
                  prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-3 prose-td:text-muted-foreground
                  prose-tr:even:bg-muted/30
                  [&>*:first-child]:mt-0">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
                </div>

                {/* Authorship and Technical Review */}
                <div className="mt-12 p-6 bg-cream rounded-xl border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        Revisão Técnica
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Este conteúdo foi elaborado pela <strong className="text-foreground">Equipe Aegis Care</strong>, 
                        com base em experiência profissional em cuidado domiciliar e supervisão de enfermeiros especializados 
                        em geriatria e gerontologia.
                      </p>
                    </div>
                  </div>
                </div>

                {/* References Section - EEAT */}
                <div className="mt-8 p-6 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-5 h-5 text-secondary" />
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Referências
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {references.map((ref, index) => (
                      <li key={index} className="text-sm">
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-secondary/80 font-medium underline underline-offset-2"
                        >
                          {ref.name}
                        </a>
                        <span className="text-muted-foreground">: {ref.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Internal Links to Related Content */}
                <div className="mt-8 p-6 bg-cream rounded-xl">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    Continue lendo sobre cuidado domiciliar
                  </h3>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                    {blogArticles
                      .filter(a => a.slug !== article.slug)
                      .slice(0, 3)
                      .map(relatedArticle => (
                        <Link
                          key={relatedArticle.id}
                          to={`/blog/${relatedArticle.slug}`}
                          className="text-sm text-secondary hover:text-secondary/80 underline underline-offset-2"
                        >
                          {relatedArticle.title.length > 50 
                            ? relatedArticle.title.substring(0, 50) + '...' 
                            : relatedArticle.title}
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Discrete CTA */}
                <div className="mt-8 p-6 border border-border rounded-xl bg-card">
                  <p className="text-muted-foreground mb-4">
                    Precisa de orientação especializada sobre cuidado domiciliar para seu familiar?
                  </p>
                  <a
                    href="https://wa.me/5511920067183"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-secondary font-medium hover:text-secondary/80 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Fale com a Aegis Care pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Related Articles - Silo Architecture */}
          {relatedArticles.length > 0 && (
            <section className="py-12 bg-cream">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8 text-left">
                    Artigos Relacionados
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {relatedArticles.map((relatedArticle) => (
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

                  {/* Link back to Home */}
                  <div className="mt-8 text-center">
                    <Link
                      to="/"
                      className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                    >
                      ← Voltar para a página inicial da Aegis Care
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogArticle;
