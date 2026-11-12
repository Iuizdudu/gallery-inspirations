# Guia de Contribuição — Gallery Inspirations ✦

Obrigado por ajudar a comunidade a manter e expandir o **Gallery Inspirations**! Este projeto é uma biblioteca digital colaborativa, de código aberto, focada em reunir as melhores referências de design e engenharia web do mundo.

---

## 📋 Como Propor Novas Referências

Todo o catálogo do Gallery Inspirations é gerenciado através de código tipado em TypeScript, centralizado no arquivo:
```
src/data/references.ts
```

### 1. Modelo de Dados de uma Referência

Toda nova referência adicionada deve seguir o formato da interface `Reference`:

```typescript
export interface Reference {
  id: string;               // Identificador único em kebab-case (ex: "lapa-ninja")
  title: string;            // Nome do site, estúdio ou ferramenta
  categoryId: string;       // ID da categoria correspondente (ver src/data/categories.ts)
  url: string;              // URL canônica HTTPS direta
  author: string;           // Nome do criador, estúdio ou empresa
  authorUrl?: string;       // URL do portfólio/site do autor (opcional)
  descriptionPt: string;    // Descrição editorial concisa em Português
  descriptionEn: string;    // Descrição editorial concisa em Inglês
  tags: string[];           // 3 a 5 tags representativas (ex: ["Landing Pages", "UI", "SaaS"])
  year?: number;            // Ano de lançamento (opcional)
  isFeatured?: boolean;     // Se deve ter destaque prioritário (opcional)
  popularity?: number;      // Relevância de 1 a 100 (opcional)
}
```

### Exemplo Prático de Nova Referência:

```typescript
{
  id: "linear-app",
  title: "Linear",
  categoryId: "saas",
  url: "https://linear.app",
  author: "Linear Orbit, Inc.",
  descriptionPt: "O padrão-ouro em design de ferramentas de produtividade, microinterações e velocidade.",
  descriptionEn: "The gold standard in productivity tool design, micro-interactions, and high performance.",
  tags: ["SaaS", "Produtividade", "Dark Mode", "Craft"],
  year: 2026,
  popularity: 98,
}
```

---

## 🛠️ Passo a Passo para Contribuir

1. **Faça um Fork** deste repositório para a sua conta no GitHub.
2. **Crie uma branch** para suas alterações:
   ```bash
   git checkout -b feature/adicionar-nome-da-referencia
   ```
3. **Adicione a referência** ao array `REFERENCES` em `src/data/references.ts`.
4. **Verifique se a categoria existe** em `src/data/categories.ts`. (O catálogo já conta com mais de 45 categorias oficiais pré-cadastradas).
5. **Teste a compilação localmente**:
   ```bash
   npm run build
   ```
6. **Realize o Commit** de forma padronizada:
   ```bash
   git commit -m "feat(catalog): adicionar referência [Nome da Referência]"
   ```
7. **Abra um Pull Request (PR)** para a branch principal (`main`) no repositório oficial.

---

## ✨ Critérios de Aprovação

Para manter a alta qualidade do catálogo:
- **Design Excepcional:** A referência deve se destacar por tipografia apurada, layout inovador, microinterações fluidas ou engenharia criativa.
- **URL Canônica e Estável:** Apenas links seguros (`https://`) e websites ativos em produção.
- **Sem Links de Afiliados ou Spam:** O repositório é 100% neutro, educacional e gratuito.
- **Descrições Concisas:** Textos descritivos focados em valor técnico e decisões visuais.

Agradecemos profundamente cada contribuição! 🚀
