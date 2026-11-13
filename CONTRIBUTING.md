# Contributing Guide — Gallery Inspirations

Thank you for your interest in contributing to **Gallery Inspirations**! This project is an open-source, community-curated digital catalog gathering premier design and web engineering references.

- **Live Deployment (Vercel):** https://gallery-inspirations.vercel.app/
- **Official Repository (GitHub):** https://github.com/Iuizdudu/gallery-inspirations

---

## 📋 1. How to Propose New References

All references in **Gallery Inspirations** are typed in TypeScript and centralized in:

```
src/data/references.ts
```

### Data Model (`Reference`)

```typescript
export interface Reference {
  id: string;               // Unique slug in kebab-case (e.g. "stripe-press")
  title: string;            // Name of the website, library, or product shown on screen
  categoryId: string;       // Matching category ID (see src/data/categories.ts)
  url: string;              // Canonical HTTPS URL opened on click
  descriptionPt: string;    // Concise editorial description in Portuguese
  descriptionEn: string;    // Concise editorial description in English
  popularity?: number;      // Optional relevance score from 1 to 100 for sorting (default: 80)
  author?: string;          // Optional author/studio (indexed in Ctrl + K search)
  tags?: string[];          // Optional search keywords (indexed in Ctrl + K search)
  year?: number;            // Optional reference year
  featured?: boolean;       // Optional featured flag
}
```

### Practical Example

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

> **About AI Reference Prompt:** You do **not** need to write any prompts manually when adding a reference. Its `title`, `url`, and `descriptionEn` are automatically embedded into the category's **AI Reference Prompt**.

---

## 🗂️ 2. How to Create a New Category

If your reference does not fit any existing category in `src/data/categories.ts`, you can propose a **new category** by following these 3 steps:

### Step 1: Register the category in `src/data/categories.ts`

Add a new object to the `CATEGORIES` array matching the `Category` TypeScript interface:

```typescript
export interface Category {
  id: string;            // Unique kebab-case ID (referenced by categoryId in references.ts)
  slug: string;          // Route slug for /category/:slug (usually identical to id)
  namePt: string;        // Category name in Portuguese (displayed in Sidebar and filters)
  nameEn: string;        // Category name in English
  descriptionPt: string; // Header description on the category page (PT-BR)
  descriptionEn: string; // Header description on the category page (EN)
  iconName: string;      // Icon name mapped in src/components/Icons/CategoryIcon.tsx
  aliases?: string[];    // Optional alternative URL slugs
}
```

#### Example New Category (`src/data/categories.ts`):

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

### Step 2: Configure the icon in `src/components/Icons/CategoryIcon.tsx`

Set `iconName` to any Lucide icon already registered in `src/components/Icons/CategoryIcon.tsx`:

- **Built-in icons:** `Layout`, `Layers`, `Compass`, `Sparkles`, `Box`, `Globe`, `ShoppingCart`, `Smartphone`, `Moon`, `Navigation`, `PanelBottom`, `AlertCircle`, `BarChart3`, `Feather`, `Type`, `Palette`, `PlayCircle`, `Briefcase`, `Presentation`, `Image`, `Paintbrush`, `Shapes`, `PenTool`, `Code2`, `Cpu`, `Archive`, `Coins`, `Megaphone`, `Mail`, `Film`, `LineChart`, `Brush`, `Grid`, `FileText`, `Columns`, `Newspaper`, `Camera`, `Search`, `Component`, `Zap`, `BookOpen`, `Eye`, `Quote`, `TrendingUp`, `Package`, `Contrast`.
- **Need a new icon?** Import the icon from `lucide-react` inside `src/components/Icons/CategoryIcon.tsx` and add a corresponding `case 'IconName':` branch to the `switch` statement. (Unknown names safely fall back to `Folder`.)

### Step 3: Include initial references in `src/data/references.ts`

Every new category should include **at least 1 to 3 valid references** using the matching `categoryId` (e.g., `categoryId: "ai-interfaces"`) so the category is never empty in the Sidebar, index, or **AI Reference Prompt** generator.

### Step 4 (Optional): Customize the AI Reference Prompt profile in `src/utils/aiPromptBuilder.ts`

You do **not** need to write a prompt manually for a new category to support the **Copy For AI** button: the generator automatically builds a contextualized English prompt using the category's `nameEn` and `descriptionEn`.

If you want tailored domain-specific analysis bullet points, you can optionally add an entry to `CATEGORY_PROMPT_PROFILES` inside `src/utils/aiPromptBuilder.ts`:

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

> The Sidebar, Home page, `/category/:slug` route, **Copy For AI** button, and `Ctrl + K` Command Palette dynamically pick up any new entry added to `CATEGORIES`.

---

## 🛠️ 3. Step-by-Step Pull Request Workflow

1. **Fork** this repository to your GitHub account.
2. **Clone** your fork and install dependencies:
   ```bash
   git clone https://github.com/YOUR-USERNAME/gallery-inspirations.git
   cd gallery-inspirations
   npm install
   ```
3. **Create a branch** for your contribution:
   ```bash
   git checkout -b feat/add-new-reference
   # or for a new category:
   git checkout -b feat/new-category-ai-interfaces
   ```
4. **Edit the data files** (`src/data/categories.ts`, `src/components/Icons/CategoryIcon.tsx` if needed, and `src/data/references.ts`).
5. **Verify locally** before committing:
   ```bash
   npm run dev     # Preview at http://localhost:3000
   npm run lint    # TypeScript check (tsc --noEmit)
   npm run build   # Production bundle check
   ```
6. **Commit** your changes:
   ```bash
   git commit -m "feat(catalog): add [Reference Name]"
   # or:
   git commit -m "feat(categories): add [Category Name] category"
   ```
7. **Open a Pull Request** targeting the `main` branch.

---

## ✨ 4. Editorial Quality Standards

- **Working HTTPS Link:** Only live, secure, active production websites.
- **Genuine Craft:** References should demonstrate strong typography, layout clarity, thoughtful UI patterns, or creative engineering.
- **No Paywalls or Affiliates:** The archive remains 100% free, open, and neutral.
- **Bilingual Descriptions:** Always provide both `descriptionPt` and `descriptionEn` so both language modes stay complete (`descriptionEn` also feeds directly into the category's **AI Reference Prompt**).

Thank you for helping build **Gallery Inspirations**! 🚀
