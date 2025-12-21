import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogArticles } from "@/data/blogArticles";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  // Schema.org Blog structured data
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Aegis Care - Cuidado Domiciliar para Idosos",
    "description": "Artigos e orientações sobre cuidado domiciliar, saúde do idoso, bem-estar na terceira idade e dicas para famílias.",
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
      "author": {
        "@type": "Organization",
        "name": article.author
      }
    }))
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
        <title>Blog - Aegis Care | Artigos sobre Cuidado Domiciliar para Idosos</title>
        <meta name="description" content="Leia artigos especializados sobre cuidado domiciliar, saúde do idoso, bem-estar na terceira idade e dicas práticas para famílias. Conteúdo confiável da Aegis Care." />
        <meta name="keywords" content="cuidado domiciliar, idoso, terceira idade, cuidador, saúde idoso, bem-estar, envelhecimento ativo" />
        <link rel="canonical" href="https://aegiscare.com.br/blog" />
        <meta property="og:title" content="Blog Aegis Care - Cuidado Domiciliar para Idosos" />
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
          {/* Hero Section */}
          <section className="py-16 bg-cream">
            <div className="container mx-auto px-4">
              <header className="text-center max-w-3xl mx-auto">
                <span className="inline-block text-secondary font-medium tracking-wide uppercase text-sm mb-4">
                  Blog Aegis Care
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                  Conhecimento para um Cuidado Melhor
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Artigos especializados sobre cuidado domiciliar, saúde do idoso e orientações para famílias que buscam o melhor para seus entes queridos.
                </p>
              </header>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogArticles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-card rounded-xl shadow-card overflow-hidden group hover:shadow-elevated transition-shadow duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-primary-foreground font-display text-2xl px-6 text-center">
                        {article.category}
                      </span>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(article.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h2 className="font-display text-xl text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
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
                          Ler mais
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
                Precisa de Ajuda com o Cuidado do seu Familiar?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Nossa equipe está pronta para oferecer orientação personalizada e um cuidado humanizado para seu ente querido.
              </p>
              <a
                href="https://wa.me/5511920067183"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-4 rounded-lg font-medium hover:shadow-elevated transition-all"
              >
                Fale Conosco
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
