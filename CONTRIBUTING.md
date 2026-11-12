# Contributing Guide — Gallery Inspirations

Thank you for your interest in contributing to **Gallery Inspirations**! This project is an open-source, community-curated digital catalog gathering premier design and web development references.

---

## ⚙️ Setting Up Your GitHub Repository URL

The repository URL used by the **Contribute** buttons throughout the app is defined in:
```typescript
src/data/config.ts
```
```typescript
export const GITHUB_REPO_URL = "https://github.com/luizeduardo98r4/gallery-inspirations";
```
> **Tip:** You can replace this URL with your exact GitHub username and repository name anytime.

---

## 📋 How to Propose New References

All references in **Gallery Inspirations** are typed in TypeScript and centralized in:
```
src/data/references.ts
```

### 1. Minimal Data Model

To keep contributions fast and simple, **only fields that are actually displayed on screen** are required:

```typescript
export interface Reference {
  id: string;               // Unique slug in kebab-case (e.g. "lapa-ninja")
  title: string;            // Name of the website or product (displayed on card)
  categoryId: string;       // Matching category ID (see src/data/categories.ts)
  url: string;              // Canonical HTTPS URL (opened on click)
  descriptionPt: string;    // Brief description in Portuguese (displayed on card)
  descriptionEn: string;    // Brief description in English (displayed on card)
  popularity?: number;      // Optional relevance score from 1 to 100 (for sorting)
}
```

> **Note:** Fields like author, authorUrl, year, and tags have been removed from the UI to ensure maximum minimalism and speed. You do **not** need to provide them!

### Practical Example:

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

---

## 🛠️ Step-by-Step Contribution Flow

1. **Fork** this repository to your GitHub account.
2. **Create a branch** for your addition:
   ```bash
   git checkout -b feature/add-new-reference
   ```
3. **Add your reference** into the `REFERENCES` array in `src/data/references.ts`.
4. **Choose an existing category ID** from `src/data/categories.ts` (e.g. `landing`, `saas`, `ui-ux`, `navbar`, `component`, `portfolio`, etc.).
5. **Test the build** locally to ensure types compile cleanly:
   ```bash
   npm run build
   ```
6. **Commit** your changes:
   ```bash
   git commit -m "feat(catalog): add [Reference Name]"
   ```
7. **Open a Pull Request** to the `main` branch.

---

## ✨ Editorial Quality Standards

- **Working HTTPS Link:** Only live, secure, working production websites.
- **Genuine Craft:** The reference should exhibit exceptional typography, UI layout, microinteractions, or creative engineering.
- **No Paywalls or Affiliates:** We keep the archive 100% free and neutral.

Thank you for helping build the cleanest web inspiration directory! 🚀
