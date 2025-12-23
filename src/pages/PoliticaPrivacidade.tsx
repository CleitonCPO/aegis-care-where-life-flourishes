import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PoliticaPrivacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Aegis Care</title>
        <meta 
          name="description" 
          content="Política de Privacidade da Aegis Care conforme a LGPD. Saiba como coletamos, armazenamos e protegemos seus dados pessoais."
        />
        <link rel="canonical" href="https://aegiscare.com.br/politica-privacidade" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar ao Início
              </Link>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
                Política de Privacidade
              </h1>

              <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
                <p className="text-lg text-muted-foreground mb-8">
                  Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                </p>

                <p>
                  A Aegis Care valoriza a privacidade de seus usuários e está comprometida com a proteção de seus dados pessoais. Esta Política de Privacidade foi elaborada em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD) e descreve como coletamos, utilizamos, armazenamos e protegemos suas informações.
                </p>

                <h2>1. Dados que Coletamos</h2>
                
                <h3>1.1 Dados fornecidos por você</h3>
                <p>Podemos coletar as seguintes informações quando você entra em contato conosco:</p>
                <ul>
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Número de telefone</li>
                  <li>Mensagens enviadas através de formulários de contato</li>
                </ul>

                <h3>1.2 Dados coletados automaticamente</h3>
                <p>Ao navegar em nosso site, podemos coletar automaticamente:</p>
                <ul>
                  <li>Endereço IP</li>
                  <li>Tipo de navegador e dispositivo</li>
                  <li>Páginas visitadas e tempo de permanência</li>
                  <li>Data e hora do acesso</li>
                </ul>

                <h2>2. Finalidade da Coleta</h2>
                <p>Utilizamos seus dados pessoais para:</p>
                <ul>
                  <li>Responder às suas solicitações e dúvidas</li>
                  <li>Fornecer informações sobre nossos serviços de cuidado domiciliar</li>
                  <li>Melhorar a experiência de navegação em nosso site</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                  <li>Enviar comunicações relevantes, mediante seu consentimento</li>
                </ul>

                <h2>3. Base Legal para Tratamento</h2>
                <p>O tratamento de seus dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD:</p>
                <ul>
                  <li><strong>Consentimento:</strong> quando você fornece seus dados voluntariamente</li>
                  <li><strong>Legítimo interesse:</strong> para melhorar nossos serviços e comunicação</li>
                  <li><strong>Cumprimento de obrigação legal:</strong> quando exigido por lei</li>
                  <li><strong>Execução de contrato:</strong> para prestação de nossos serviços</li>
                </ul>

                <h2>4. Compartilhamento de Dados</h2>
                <p>
                  A Aegis Care não comercializa seus dados pessoais. Podemos compartilhar informações apenas nas seguintes situações:
                </p>
                <ul>
                  <li>Com prestadores de serviços que auxiliam em nossas operações, sob obrigação de confidencialidade</li>
                  <li>Quando exigido por lei ou ordem judicial</li>
                  <li>Para proteger direitos, propriedade ou segurança da Aegis Care e de terceiros</li>
                </ul>

                <h2>5. Armazenamento e Segurança</h2>
                <p>
                  Seus dados são armazenados em servidores seguros, protegidos por medidas técnicas e administrativas adequadas, incluindo:
                </p>
                <ul>
                  <li>Criptografia de dados em trânsito e em repouso</li>
                  <li>Controle de acesso restrito</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Backups regulares</li>
                </ul>
                <p>
                  Os dados são mantidos apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados ou conforme exigido por lei.
                </p>

                <h2>6. Seus Direitos</h2>
                <p>De acordo com a LGPD, você tem os seguintes direitos:</p>
                <ul>
                  <li><strong>Acesso:</strong> solicitar informações sobre seus dados pessoais</li>
                  <li><strong>Correção:</strong> solicitar a correção de dados incompletos ou incorretos</li>
                  <li><strong>Anonimização ou exclusão:</strong> solicitar a anonimização ou exclusão de dados desnecessários</li>
                  <li><strong>Portabilidade:</strong> solicitar a transferência de seus dados para outro fornecedor</li>
                  <li><strong>Revogação do consentimento:</strong> revogar seu consentimento a qualquer momento</li>
                  <li><strong>Informação:</strong> ser informado sobre com quem seus dados foram compartilhados</li>
                </ul>

                <h2>7. Cookies</h2>
                <p>
                  Nosso site pode utilizar cookies para melhorar sua experiência de navegação. Cookies são pequenos arquivos de texto armazenados em seu dispositivo que nos ajudam a entender como você utiliza nosso site.
                </p>
                <p>
                  Você pode configurar seu navegador para recusar cookies, embora isso possa afetar algumas funcionalidades do site.
                </p>

                <h2>8. Alterações nesta Política</h2>
                <p>
                  Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você a revise regularmente para estar informado sobre como protegemos seus dados.
                </p>

                <h2>9. Contato</h2>
                <p>
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco:
                </p>
                <ul>
                  <li><strong>E-mail:</strong> contato@aegiscare.com.br</li>
                  <li><strong>Telefone:</strong> (11) 92006-7183</li>
                </ul>
                <p>
                  A Aegis Care se compromete a responder às suas solicitações no prazo estabelecido pela legislação vigente.
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PoliticaPrivacidade;
