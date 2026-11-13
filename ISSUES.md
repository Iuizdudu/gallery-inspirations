<div align="center">

  <img src="./public/favicon.svg" alt="Gallery Inspirations" width="56" height="56" />
  <h1>Roadmap &amp; Issues — Gallery Inspirations</h1>
  <p>Propostas de novas funcionalidades, melhorias de experiência e tarefas abertas para contribuição da comunidade.</p>

  <a href="https://github.com/Iuizdudu/gallery-inspirations/issues">
    <img alt="GitHub Issues" src="https://img.shields.io/badge/GITHUB-ISSUES-365dff?style=for-the-badge&logo=github&logoColor=white">
  </a>
  <a href="https://gallery-inspirations.vercel.app/">
    <img alt="Deploy Vercel" src="https://img.shields.io/badge/APP-ONLINE%20NA%20VERCEL-000000?style=for-the-badge&logo=vercel&logoColor=white">
  </a>

</div>

---

## Como usar este arquivo

Este documento centraliza ideias de evolução do **Gallery Inspirations** estruturadas no formato de **Issues**. Se você quiser implementar alguma das propostas abaixo:

1. Acesse a aba [**Issues**](https://github.com/Iuizdudu/gallery-inspirations/issues) no repositório oficial e verifique se já existe uma discussão aberta.
2. Comente na issue informando que pretende trabalhar nela para evitar trabalho duplicado.
3. Siga o guia em [`CONTRIBUICAO.md`](./CONTRIBUICAO.md) (ou [`CONTRIBUTING.md`](./CONTRIBUTING.md)) para criar sua branch e enviar o Pull Request.

---

## Issue #01 — Copiar Prompt da Categoria para Agentes de IA

> **Status:** Aberta para contribuição · **Prioridade:** Alta · **Labels:** `enhancement`, `ai-workflow`, `good first issue`

### Contexto / Problema

O **Gallery Inspirations** organiza mais de 45 categorias curadas (`Landing Pages`, `SaaS`, `Dashboards`, `Modo Escuro`, `Navbars`, `Componentes`, etc.) com links e descrições editoriais de sites reais de alta qualidade.

Atualmente, quando um desenvolvedor ou designer quer instruir um **agente de IA** (como Cursor, Claude, ChatGPT, Windsurf, v0 ou Lovable) a se inspirar nos sites de uma categoria específica da lista, ele precisa abrir e copiar manualmente cada título, URL e descrição um por um.

### Solução Proposta

Adicionar uma funcionalidade de **"Copiar Prompt para IA"** dentro de cada categoria (e opcionalmente nos resultados filtrados) para gerar e copiar para a área de transferência um prompt completo e estruturado contendo os sites daquela categoria.

#### Comportamento Esperado

1. Na página de categoria (`src/pages/Category/CategoryPage.tsx`), exibir um botão discreto no cabeçalho ao lado do contador de referências:
   - PT-BR: `Copiar Prompt para IA`
   - EN: `Copy AI Agent Prompt`
2. Ao clicar no botão, montar automaticamente um prompt em texto puro/Markdown com:
   - O nome e o objetivo editorial da categoria selecionada;
   - A lista completa (ou filtrada) das referências daquela categoria (`Título`, `URL oficial` e `Descrição`);
   - Instruções claras para o agente de IA analisar os padrões visuais, tipografia, espaçamento, hierarquia e microinterações dessas referências antes de projetar ou codificar a interface;
   - Idioma do prompt acompanhando automaticamente a seleção `pt-BR` / `en` de `useLanguage()`.
3. Exibir feedback visual temporário após a cópia (ex.: `Prompt copiado!` com ícone de check por 2 segundos).

#### Exemplo do Prompt Gerado

```markdown
Atue como um Designer de Produto Sênior e Engenheiro Frontend.
Quero criar uma interface para a categoria "Landing Pages" utilizando como referência estética, estrutural e de microinterações os seguintes sites curados no Gallery Inspirations:

1. Lapa Ninja — https://www.lapa.ninja/
   Galeria com centenas de landing pages reais focadas em conversão, design limpo e SaaS.
2. SaaSPages — https://saaspages.xyz/
   Coleção de blocos, seções de pricing, heróis e provas sociais das melhores landing pages SaaS.
3. Godly — https://godly.website/
   Curadoria de websites com forte direção de arte, movimento fluido e tipografia marcante.
...

Instruções para o agente:
- Extraia os padrões de hierarquia tipográfica, espaçamento, contraste e ritmo visual dessas referências.
- Evite layouts genéricos; priorize clareza de proposta de valor, microinterações sutis e responsividade.
- Proponha a estrutura de seções e implemente o código mantendo acessibilidade e performance.
```

### Checklist Técnico Sugerido

- [ ] Criar utilitário `src/utils/promptBuilder.ts` com a função `buildCategoryPrompt(category, references, language)`.
- [ ] Adicionar chaves de tradução (`copyAiPrompt`, `aiPromptCopied`) em `src/locales/translations.tsx`.
- [ ] Integrar o botão de cópia via `navigator.clipboard.writeText(...)` em `src/pages/Category/CategoryPage.tsx`.
- [ ] (Opcional) Permitir escolher entre copiar o prompt com **todas as referências** ou **top 10 por popularidade** quando a categoria for extensa.
- [ ] Validar com `npm run lint` e `npm run build`.

### Critérios de Aceite

- O botão copia o prompt em 1 clique sem recarregar a página.
- Todos os links e nomes da categoria aparecem corretamente no texto copiado.
- Funciona tanto em `PT-BR` quanto em `EN`.
- Mantém o visual minimalista e escuro do catálogo (`#121212`, `#262626`, destaque `#365dff`).

---

## Issue #02 — Exportar Lista da Categoria em Markdown ou JSON

> **Status:** Proposta · **Prioridade:** Média · **Labels:** `enhancement`, `dx`

### Descrição

Permitir que usuários exportem as referências de uma categoria específica em `.md` (lista pronta para documentação/Notion/Obsidian) ou `.json` para reutilização em ferramentas internas de times de design e engenharia.

### Tarefas Sugeridas

- [ ] Adicionar função de exportação para Markdown (`- [Título](url) — descrição`) e JSON estruturado.
- [ ] Incluir ação discreta no menu da página de categoria sem poluir a listagem editorial.

---

## Issue #03 — Filtro por Tags e Busca Interna na Página de Categoria

> **Status:** Proposta · **Prioridade:** Média · **Labels:** `enhancement`, `ux`

### Descrição

Categorias maiores já contam com dezenas de referências. Adicionar uma barra rápida de filtragem por `tags` (ex.: `minimal`, `motion`, `typography`, `open-source`) dentro de `/category/:slug` ajuda a refinar ainda mais a pesquisa sem precisar sair da categoria atual.

### Tarefas Sugeridas

- [ ] Extrair dinamicamente as tags mais frequentes da categoria aberta.
- [ ] Permitir selecionar uma tag para filtrar as referências mantendo a ordenação (`Mais populares` / `A–Z`).

---

## Issue #04 — Sugestão de Novas Referências e Categorias

> **Status:** Contínua · **Labels:** `curation`, `community`

### Descrição

Quer sugerir um site incrível ou propor uma nova categoria para o catálogo? Antes de abrir uma PR, confira se a referência:

- Está online, ativa e com acesso público direto;
- Não está duplicada em `src/data/references.ts`;
- Possui descrição editorial concisa e objetiva em Português e Inglês.

---

## Template para Abrir uma Nova Issue

Copie e preencha o modelo abaixo ao abrir uma nova issue em [github.com/Iuizdudu/gallery-inspirations/issues](https://github.com/Iuizdudu/gallery-inspirations/issues):

```markdown
### Tipo de Issue
- [ ] Nova funcionalidade (Feature)
- [ ] Correção de bug (Bug)
- [ ] Sugestão de categoria / referência
- [ ] Melhoria de documentação

### Descrição
Explique claramente o problema que você encontrou ou a funcionalidade que gostaria de adicionar.

### Comportamento Esperado
Descreva passo a passo como a interface ou o fluxo deveria funcionar.

### Contexto Adicional
Prints, viewport (desktop/mobile) ou referências relacionadas, se aplicável.
```
