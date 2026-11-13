# Guia de Contribuição — Gallery Inspirations

Obrigado pelo interesse em contribuir com o **Gallery Inspirations**! Este projeto é uma biblioteca digital colaborativa, de código aberto, focada em reunir as melhores referências de design e engenharia web.

- **Site em Produção (Vercel):** https://gallery-inspirations.vercel.app/
- **Repositório Oficial (GitHub):** https://github.com/Iuizdudu/gallery-inspirations

---

## 📋 1. Como Propor Novas Referências

Todo o catálogo de referências do Gallery Inspirations é tipado em TypeScript e centralizado no arquivo:

```
src/data/references.ts
```

### Modelo de Dados (`Reference`)

Os campos obrigatórios exibidos na interface e opcionais de indexação/busca são:

```typescript
export interface Reference {
  id: string;               // Identificador único em kebab-case (ex: "stripe-press")
  title: string;            // Nome do site, biblioteca ou produto exibido na lista
  categoryId: string;       // ID da categoria correspondente (ver src/data/categories.ts)
  url: string;              // URL canônica HTTPS aberta ao clicar
  descriptionPt: string;    // Descrição editorial concisa em Português
  descriptionEn: string;    // Descrição editorial concisa em Inglês
  popularity?: number;      // Opcional: relevância de 1 a 100 para ordenação (padrão: 80)
  author?: string;          // Opcional: autor/estúdio (ajuda na busca global Ctrl + K)
  tags?: string[];          // Opcional: palavras-chave para busca global (Ctrl + K)
  year?: number;            // Opcional: ano de referência
  featured?: boolean;       // Opcional: marca como destaque no catálogo
}
```

### Exemplo Prático de Nova Referência

```typescript
{
  id: "stripe-press",
  title: "Stripe Press",
  categoryId: "landing",
  url: "https://press.stripe.com/",
  descriptionPt: "Publicações sobre ideias, inovação e progresso econômico com direção de arte e tipografia editorial de excelência.",
  descriptionEn: "Publications on ideas, innovation, and economic progress with world-class art direction and editorial typography.",
  popularity: 96,
}
```

> **Sobre o AI Reference Prompt:** Você **não** precisa escrever prompts manualmente ao adicionar uma nova referência. O título, a `url` e a `descriptionEn` cadastrados aqui são incluídos automaticamente no **AI Reference Prompt** da categoria correspondente.

---

## 🗂️ 2. Como Criar uma Nova Categoria

Caso a sua referência não se encaixe em nenhuma das categorias existentes em `src/data/categories.ts`, você pode propor a criação de uma **nova categoria** seguindo estes 3 passos:

### Passo 1: Registrar a categoria em `src/data/categories.ts`

Adicione um novo objeto no array `CATEGORIES` respeitando a interface `Category`:

```typescript
export interface Category {
  id: string;            // Identificador único em kebab-case (usado como categoryId nas referências)
  slug: string;          // Slug da rota /category/:slug (normalmente igual ao id)
  namePt: string;        // Nome da categoria em Português (exibido na Sidebar e filtros)
  nameEn: string;        // Nome da categoria em Inglês
  descriptionPt: string; // Descrição exibida no cabeçalho da página da categoria (PT-BR)
  descriptionEn: string; // Descrição exibida no cabeçalho da página da categoria (EN)
  iconName: string;      // Nome do ícone mapeado em src/components/Icons/CategoryIcon.tsx
  aliases?: string[];    // Opcional: slugs alternativos para compatibilidade de URL
}
```

#### Exemplo de Nova Categoria (`src/data/categories.ts`):

```typescript
{
  id: "ai-interfaces",
  slug: "ai-interfaces",
  namePt: "Interfaces de IA",
  nameEn: "AI Interfaces",
  descriptionPt: "Padrões de interface, fluxos conversacionais, prompts e experiências visuais para produtos com inteligência artificial.",
  descriptionEn: "Interface patterns, conversational flows, prompt UIs, and visual experiences for AI-powered products.",
  iconName: "Cpu",
},
```

### Passo 2: Configurar o ícone em `src/components/Icons/CategoryIcon.tsx`

O campo `iconName` deve corresponder a um dos ícones já importados do `lucide-react` em `src/components/Icons/CategoryIcon.tsx`:

- **Ícones já disponíveis:** `Layout`, `Layers`, `Compass`, `Sparkles`, `Box`, `Globe`, `ShoppingCart`, `Smartphone`, `Moon`, `Navigation`, `PanelBottom`, `AlertCircle`, `BarChart3`, `Feather`, `Type`, `Palette`, `PlayCircle`, `Briefcase`, `Presentation`, `Image`, `Paintbrush`, `Shapes`, `PenTool`, `Code2`, `Cpu`, `Archive`, `Coins`, `Megaphone`, `Mail`, `Film`, `LineChart`, `Brush`, `Grid`, `FileText`, `Columns`, `Newspaper`, `Camera`, `Search`, `Component`, `Zap`, `BookOpen`, `Eye`, `Quote`, `TrendingUp`, `Package`, `Contrast`.
- **Quer usar um ícone diferente?** Importe o ícone desejado de `lucide-react` em `src/components/Icons/CategoryIcon.tsx` e adicione o respectivo `case 'NomeDoIcone':` no `switch`. (Caso o nome não seja encontrado, o componente usa `Folder` como fallback.)

### Passo 3: Adicionar referências iniciais em `src/data/references.ts`

Toda nova categoria deve vir acompanhada de **pelo menos 1 a 3 referências válidas** vinculadas pelo mesmo `categoryId` (ex.: `categoryId: "ai-interfaces"`), para que a categoria não apareça vazia na navegação lateral, na busca e no gerador de **AI Reference Prompt**.

### Passo 4 (Opcional): Personalizar o perfil do AI Reference Prompt em `src/utils/aiPromptBuilder.ts`

Você **não precisa escrever nenhum prompt manualmente** para que a nova categoria funcione com o botão **Copy For AI**: o gerador cria automaticamente um prompt contextualizado em inglês a partir de `nameEn` e `descriptionEn` da categoria.

Caso deseje refinar ainda mais o contexto e os pontos de análise específicos do domínio, adicione opcionalmente uma entrada em `CATEGORY_PROMPT_PROFILES` dentro de `src/utils/aiPromptBuilder.ts`:

```typescript
"ai-interfaces": {
  projectContext: "an AI-powered interface and conversational product experience",
  focusSummary:
    "prompt ergonomics, streaming states, citation patterns, layout clarity, visual hierarchy, typography, and interaction patterns",
  analysisAreas: [
    "Prompt composer ergonomics and multi-turn readability",
    "Streaming indicators, citations, and transparent system feedback",
    "Balanced workspace layout between controls and generated output",
  ],
},
```

> A Sidebar, a página inicial, a página `/category/:slug`, o botão **Copy For AI** e o Command Palette (`Ctrl + K`) carregam automaticamente novas categorias adicionadas ao array `CATEGORIES`.

---

## 🛠️ 3. Passo a Passo para Enviar seu Pull Request

1. **Faça um Fork** deste repositório para a sua conta no GitHub.
2. **Clone** o seu fork e instale as dependências:
   ```bash
   git clone https://github.com/SEU-USUARIO/gallery-inspirations.git
   cd gallery-inspirations
   npm install
   ```
3. **Crie uma branch** descritiva para suas alterações:
   ```bash
   git checkout -b feat/adicionar-referencia
   # ou para nova categoria:
   git checkout -b feat/nova-categoria-ai-interfaces
   ```
4. **Edite os arquivos** necessários (`src/data/categories.ts`, `src/components/Icons/CategoryIcon.tsx` se aplicável, e `src/data/references.ts`).
5. **Teste localmente** antes de commitar:
   ```bash
   npm run dev     # Visualizar em http://localhost:3000
   npm run lint    # Verificar tipos TypeScript (tsc --noEmit)
   npm run build   # Validar build de produção
   ```
6. **Faça o Commit** seguindo o padrão convencional:
   ```bash
   git commit -m "feat(catalog): adicionar referência [Nome]"
   # ou:
   git commit -m "feat(categories): adicionar categoria [Nome]"
   ```
7. **Envie para o seu Fork e abra um Pull Request (PR)** para a branch `main` no repositório oficial.

---

## ✨ 4. Critérios de Aprovação

Para manter a alta qualidade editorial do catálogo:
- **Design e Engenharia de Alto Nível:** A referência deve se destacar por tipografia apurada, layout sólido, microinterações fluidas ou utilidade prática comprovada.
- **URL Canônica e Ativa:** Apenas links diretos em produção (`https://`) e sem redirecionamentos quebrados.
- **Sem Links de Afiliados ou Spam:** O repositório é 100% neutro, gratuito e aberto à comunidade.
- **Descrições Bilíngues Claras:** Forneça `descriptionPt` e `descriptionEn` objetivos para manter a consistência entre Português e Inglês (o campo `descriptionEn` também alimenta diretamente o **AI Reference Prompt** da categoria).

Obrigado por ajudar a construir o **Gallery Inspirations**! 🚀
