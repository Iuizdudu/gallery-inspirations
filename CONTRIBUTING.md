# Guia de Contribuição — Gallery Inspirations

Agradecemos o interesse em contribuir com o **Gallery Inspirations**! Este projeto é uma biblioteca digital colaborativa, de código aberto, focada em reunir referências de excelência em design e desenvolvimento web.

---

## 📋 Como Propor Novas Referências

O catálogo é estruturado em TypeScript e centralizado no arquivo:
```
src/data/references.ts
```

### 1. Modelo de Dados de uma Referência

Toda nova referência adicionada deve seguir a interface TypeScript `Reference`:

```typescript
export interface Reference {
  id: string;               // Identificador único (kebab-case)
  title: string;            // Nome do site, biblioteca ou produto
  categoryId: string;       // ID da categoria correspondente (ver src/data/categories.ts)
  url: string;              // URL canônica oficial
  author: string;           // Criador, estúdio ou empresa
  authorUrl?: string;       // URL do autor ou perfil oficial
  descriptionPt: string;    // Descrição editorial em português
  descriptionEn: string;    // Descrição editorial em inglês
  tags: string[];           // Palavras-chave relevantes
  year?: number;            // Ano de lançamento ou publicação
  isFeatured?: boolean;     // Destaque na página principal
  popularity?: number;      // Escala de 1 a 100
}
```

---

## 🛠️ Passo a Passo para Contribuir

1. **Faça um Fork** deste repositório para o seu perfil no GitHub.
2. **Crie uma branch** para sua alteração:
   ```bash
   git checkout -b feature/nova-referencia-nome
   ```
3. **Edite o arquivo** `src/data/references.ts` adicionando a nova referência no array `REFERENCES`.
4. **Verifique se a categoria existe** em `src/data/categories.ts`. Se for uma nova categoria, cadastre-a no array `CATEGORIES`.
5. **Teste a compilação localmente**:
   ```bash
   npm run build
   ```
6. **Faça o Commit** das suas alterações com uma mensagem clara:
   ```bash
   git commit -m "feat(catalog): adicionar referência [Nome da Referência]"
   ```
7. **Abra um Pull Request (PR)** apontando para a branch principal (`main`).

---

## ✨ Critérios Editoriais de Qualidade

- **Originalidade e Valor:** A referência deve oferecer valor prático, inspiração estética refinada ou utilidade técnica evidente.
- **Links Válidos:** Somente URLs ativas com HTTPS são aceitas.
- **Sem Spam ou Links de Afiliados:** Proibições estritas a promoções enganosas e paywalls ocultos.
- **Biblioteca de Conteúdo:** O projeto foca em curadoria editorial textual rápida, sem poluição de capturas de tela desnecessárias.

Obrigado por ajudar a comunidade a construir o melhor acervo de referências da web!
