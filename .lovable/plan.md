# Remodelagem Visual Premium — Aegis Care

Elevar a percepção visual mantendo 100% da arquitetura, navegação, páginas e conteúdo operacional atuais. Foco em sofisticação editorial, respiro visual, calmaria e humanidade.

## 1. Identidade Visual

**Novo logo SVG**
- Vetorizar o logotipo anexado (escudo com casa/folhas + "aegis CARE") em SVG de alta qualidade.
- Salvar em `src/assets/logo-aegis-care.svg`.
- Substituir nas referências do `Header`, `Footer` e favicon onde aplicável.

**Paleta (atualizada em `src/index.css` e `tailwind.config.ts`)**
- Teal escuro `#172A50` → primary
- Teal médio `#14537C` / `#1F7087` → secondary / accents
- Teal claro `#3BA6AA` → highlights
- Off-white `#FAF8F4`, bege suave `#EFE9DE`, cinza elegante, preto suave `#1A1A1A`
- Dourado champagne `#C8A96B` — usado apenas em linhas finas, divisores e detalhes premium (botões secundários sutis, underline de links, separadores)

**Tipografia única editorial**
- Substituir o par Lora + Source Sans 3 por uma única família elegante: **Inter Tight** (ou alternativa: Söhne-like via `Inter` com tracking ajustado) com pesos 300/400/500/600 para títulos amplos e leitura confortável.
- Hierarquia: H1 light grande com tracking negativo, H2 médio, body 400 com leading generoso, eyebrows uppercase com letter-spacing.

## 2. Sistema de Design (sem reescrever components/ui)

Atualizar tokens em `src/index.css`:
- `--background`, `--foreground`, `--primary`, `--secondary`, `--accent`, `--muted`, `--gold`, `--cream`
- Gradientes premium suaves (`--gradient-hero`, `--gradient-soft`)
- Sombras refinadas (`--shadow-soft`, `--shadow-elevated` mais discretas)
- Border radius mais sutil (0.5rem padrão, 1rem para cards grandes)

Atualizar `tailwind.config.ts` com a nova fonte única e keyframes adicionais (`fade-up`, `reveal`).

## 3. Reformulação por Página (mantendo seções existentes)

**Home (`HeroSection`, `AboutSection`, `ServicesSection`, `WhyUsSection`, `MissionSection`, `FounderSection`, `TestimonialsSection`, `FAQSection`, `ContactSection`)**
- Hero: imagem cinematográfica nova, overlay sutil, headline em peso light com muito respiro, CTA refinado, indicador de scroll discreto.
- Reduzir densidade visual de cada seção (menos cards, mais espaço em branco, layouts assimétricos editoriais).
- Adicionar reveal on scroll (Intersection Observer + classes `animate-fade-up`).

**Quem Somos** — narrativa em colunas largas, citações destacadas, imagem editorial full-bleed.

**Serviços** — substituir o texto pelos blocos exatos fornecidos pelo usuário (Cuidado Domiciliar, Enfermagem Domiciliar, Acompanhamento Hospitalar, Pós-Alta Hospitalar) + caixa final "O cuidado começa pela compreensão da história de cada pessoa". Layout em seções alternadas (zigzag) com imagem + texto, sem cards densos.

**Diferenciais** (seção `WhyUsSection`) — lista refinada com numeração editorial e linhas douradas finas.

**FAQ** — manter perguntas/respostas; redesenhar accordion com tipografia maior, divisores dourados sutis, fundo off-white.

**Blog & BlogArticle** — layout editorial tipo revista: capa hero, tipografia serifa-like via Inter Tight display, leading generoso, max-width estreito para leitura.

**Contato** — layout split sereno com imagem acolhedora + canais de contato (WhatsApp, telefone, email) em tipografia ampla.

**Fundador** — página de autoridade premium: retrato grande, citação em destaque, trajetória em tópicos elegantes, sem autopromoção.

## 4. Animações
- `fade-up`, `fade-in`, `reveal-line` via Tailwind keyframes + Intersection Observer leve.
- Hover refinado em links (underline dourado animado).
- Transições de página suaves (já existe com framer-motion).
- Nenhum efeito chamativo.

## 5. Imagens
- Gerar novas imagens premium (idosos com dignidade, ambientes residenciais acolhedores, cuidado humano genuíno) para:
  - Hero Home
  - Quem Somos
  - 4 imagens de Serviços
  - Contato
  - Fundador (manter foto real existente do Cleiton)
- Estilo: cinematográfico, luz natural quente, sem aparência de IA, sem texto em inglês.

## Detalhes Técnicos

Arquivos a editar/criar:
- `src/assets/logo-aegis-care.svg` (novo)
- `src/index.css` (tokens, fonts, animações)
- `tailwind.config.ts` (fontFamily, cores gold, keyframes)
- `index.html` (preload da nova fonte, favicon)
- `src/components/Header.tsx`, `Footer.tsx` (novo logo)
- `src/components/HeroSection.tsx`, `AboutSection.tsx`, `ServicesSection.tsx`, `WhyUsSection.tsx`, `MissionSection.tsx`, `FounderSection.tsx`, `TestimonialsSection.tsx`, `FAQSection.tsx`, `ContactSection.tsx`
- `src/pages/QuemSomos.tsx`, `Servicos.tsx`, `Fundador.tsx`, `Blog.tsx`, `BlogArticle.tsx`
- Novas imagens em `src/assets/`

Não alterado: rotas (`src/App.tsx`), dados do blog, edge functions, schemas Supabase, componentes `ui/*`, lógica de WhatsApp, analytics.

## Escopo Excluído
- Nenhuma página nova, seção nova ou mudança de navegação.
- Nenhum conteúdo institucional inventado.
- Nenhuma alteração de funcionalidades, formulários, backend.

Aprovação necessária antes de implementar — devido ao escopo grande (15+ arquivos, geração de imagens, vetorização do logo), confirme para eu prosseguir em lote.