import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogArticles, getAllCategories } from "@/data/blogArticles";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const categories = getAllCategories();

  // Schema.org Blog structured data with BreadcrumbList
  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "name": "Blog Aegis Care",
        "description": "Artigos especializados sobre cuidado domiciliar, cuidado ao idoso em casa, envelhecimento saudável, segurança clínica e assistência domiciliar.",
        "url": "https://aegiscare.com.br/blog",
        "publisher": {
          "@type": "Organization",
          "name": "Aegis Care",
          "logo": {
            "@type": "ImageObject",
            "url": "https://aegiscare.com.br/logo.png"
          }
        },
        "blogPost": blogArticles.map(article => ({
          "@type": "BlogPosting",
          "headline": article.title,
          "description": article.excerpt,
          "datePublished": article.publishedAt,
          "url": `https://aegiscare.com.br/blog/${article.slug}`,
          "author": {
            "@type": "Organization",
            "name": article.author
          }
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
          }
        ]
      }
    ]
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog Aegis Care | Artigos sobre Cuidado Domiciliar para Idosos</title>
        <meta name="description" content="Artigos especializados sobre cuidado domiciliar, cuidado ao idoso em casa, envelhecimento saudável, segurança clínica e assistência domiciliar. Conteúdo confiável da Aegis Care." />
        <meta name="keywords" content="cuidado domiciliar, cuidado ao idoso em casa, envelhecimento saudável, segurança clínica, assistência domiciliar, cuidador de idosos" />
        <link rel="canonical" href="https://aegiscare.com.br/blog" />
        <meta property="og:title" content="Blog Aegis Care | Cuidado Domiciliar para Idosos" />
        <meta property="og:description" content="Artigos especializados sobre cuidado domiciliar e saúde do idoso." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aegiscare.com.br/blog" />
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
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
              <li className="text-foreground font-medium">Blog</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <section className="py-16 bg-cream">
            <div className="container mx-auto px-4">
              <header className="text-center max-w-3xl mx-auto">
                <span className="inline-block text-secondary font-medium tracking-wide uppercase text-sm mb-4">
                  Blog Aegis Care
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                  Cuidado Domiciliar para Idosos
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Artigos especializados sobre cuidado ao idoso em casa, envelhecimento saudável, segurança clínica e assistência domiciliar para famílias que buscam o melhor para seus entes queridos.
                </p>
              </header>

              {/* Category Tags */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {categories.map(category => (
                  <span
                    key={category}
                    className="px-4 py-2 bg-card rounded-full text-sm text-muted-foreground"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="sr-only">Artigos sobre Cuidado Domiciliar</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {blogArticles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-card rounded-xl shadow-card overflow-hidden group hover:shadow-elevated transition-shadow duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={`Ilustração sobre ${article.title.toLowerCase()}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2 text-left">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3 text-left leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {article.author}
                        </span>
                        
                        <Link
                          to={`/blog/${article.slug}`}
                          className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
                        >
                          Ler artigo
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Link back to Home */}
              <div className="mt-12 text-center">
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  ← Voltar para a página inicial da Aegis Care
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
                Precisa de Cuidado Domiciliar para seu Familiar?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Nossa equipe está pronta para oferecer assistência domiciliar personalizada e um cuidado humanizado para seu ente querido.
              </p>
              <a
                href="https://wa.me/5511920067183"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-4 rounded-lg font-medium hover:shadow-elevated transition-all"
              >
                Fale Conosco pelo WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
