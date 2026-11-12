# Guia de Contribuição — Gallery Inspirations ✦

Obrigado pelo interesse em contribuir com o **Gallery Inspirations**! Este projeto é uma biblioteca digital colaborativa, de código aberto, focada em reunir as melhores referências de design e engenharia web do mundo.

## 📋 Como Propor Novas Referências

Todo o catálogo do Gallery Inspirations é gerenciado através de código tipado em TypeScript, centralizado no arquivo:
```
src/data/references.ts
```

### 1. Modelo Simplificado de Dados

Para tornar o processo rápido, direto e sem burocracia, **apenas os campos que realmente são exibidos na tela são exigidos**:

```typescript
export interface Reference {
  id: string;               // Identificador único em kebab-case (ex: "lapa-ninja")
  title: string;            // Nome do site ou ferramenta (exibido no card)
  categoryId: string;       // ID da categoria correspondente (ver src/data/categories.ts)
  url: string;              // URL direta HTTPS (aberta no clique)
  descriptionPt: string;    // Descrição editorial em Português (exibida no card)
  descriptionEn: string;    // Descrição editorial em Inglês (exibida no card)
  popularity?: number;      // Relevância opcional de 1 a 100 para ordenação
}
```

> **Atenção:** Campos como autor, tags, ano de lançamento ou reviews detalhados foram propositalmente removidos da interface para manter o catálogo 100% minimalista e veloz. **Você não precisa preenchê-los!**

### Exemplo Prático de Nova Referência:

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

## 🛠️ Passo a Passo para Contribuir

1. **Faça um Fork** deste repositório para a sua conta no GitHub.
2. **Crie uma branch** para suas alterações:
   ```bash
   git checkout -b feature/adicionar-nome-da-referencia
   ```
3. **Adicione a referência** ao array `REFERENCES` em `src/data/references.ts`.
4. **Escolha uma categoria existente** em `src/data/categories.ts` (ex: `landing`, `saas`, `ui-ux`, `navbar`, `component`, `portfolio`, etc.).
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
- **Descrições Concisas:** Textos descritivos focados em valor prático e decisões visuais.

Agradecemos profundamente cada contribuição! 🚀
