# Home de Belo Horizonte

Criar uma segunda porta de entrada do site voltada para Minas Gerais, sem mexer na home de São Paulo.

## Como vai funcionar

- Quem abre o site pela primeira vez continua vendo a janela "Onde está a sua família?" (São Paulo ou Minas Gerais), que já existe hoje.
- Ao escolher Minas Gerais, a pessoa é levada para uma página própria em `/belo-horizonte`.
- Quem escolhe São Paulo continua na home atual, exatamente como está hoje.
- A escolha fica guardada: em visitas seguintes a pessoa vai direto para a versão dela.
- Um link discreto no rodapé permite trocar de região a qualquer momento.

## Google Ads de São Paulo

Não atrapalha. Os anúncios de São Paulo apontam para a home principal, e ela segue sendo de São Paulo, com o mesmo texto e o mesmo WhatsApp. Para evitar qualquer atrito com quem chega de anúncio:

- Quem entra por um link de anúncio (endereço com `gclid`/`utm`) é tratado como São Paulo e não vê a janela de escolha.
- A página de BH tem endereço próprio, então dá para criar campanhas separadas para Minas apontando direto para `/belo-horizonte`, sem misturar métricas.

## O que a página de BH terá

Mesma identidade visual e mesmos serviços da home atual, com:

- Primeira dobra falando de Belo Horizonte.
- Bairros atendidos: Lourdes, Funcionários, Savassi, Santo Agostinho, Santo Antônio, Serra e Sion.
- Todos os botões de WhatsApp com o número e a mensagem de Minas Gerais.
- Bloco de contato local de BH.
- Depoimentos de famílias mineiras.
- Textos e título de busca voltados para "cuidador de idosos em Belo Horizonte".

### Informações que preciso de você

Para os dois últimos itens, só entram no ar quando você me passar:

1. Endereço e telefone de contato em BH (se não houver endereço físico, uso só o WhatsApp).
2. Depoimentos de clientes mineiros (nome e texto).

Enquanto não chegarem, monto a página com bairros, textos e WhatsApp de Minas, e reaproveito os depoimentos atuais.

## Detalhes técnicos

- Nova rota `/belo-horizonte` em `App.tsx`, com página `src/pages/BeloHorizonte.tsx` reaproveitando as seções existentes e componentes próprios para hero, bairros e contato de BH.
- `src/lib/region.ts`: ao escolher MG, gravar no localStorage e navegar para `/belo-horizonte`; ao escolher SP, ir para `/`.
- `RegionGate.tsx`: não exibir o modal quando a URL tiver `gclid`/`utm_source`, nem quando a rota já for `/belo-horizonte`; manter a reescrita de links WhatsApp para o número MG.
- Metadados próprios via Helmet (title, description, canonical) e JSON-LD `HealthcareService` com `areaServed` em Belo Horizonte e bairros.
- Incluir `/belo-horizonte` em `public/sitemap.xml`.
