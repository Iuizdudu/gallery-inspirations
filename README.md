# Gallery Inspirations ✦

<div align="center">
  <img src="/public/assets/aistudio/logo_trimmed.png" alt="Gallery Inspirations" width="360" />
  <p><strong>A melhor coleção de inspiração em design & desenvolvimento web</strong></p>
  <p><em>Uma curadoria editorial e minimalista dos melhores recursos, landing pages, componentes e interfaces para designers e desenvolvedores.</em></p>

  <p>
    <a href="#-principais-recursos">Recursos</a> •
    <a href="#-estrutura-do-projeto">Estrutura</a> •
    <a href="#-como-executar-localmente">Instalação</a> •
    <a href="#-como-contribuir">Contribuir</a> •
    <a href="#-tecnologias">Tecnologias</a>
  </p>
</div>

---

## 🌟 Visão Geral

O **Gallery Inspirations** foi criado para resolver um problema comum em galerias de inspiração convencionais: o excesso de screenshots pesados, ruído visual e páginas intermediárias desnecessárias. 

Nosso foco é a **experiência editorial ágil**:
- Acesso instantâneo com 1 clique direto ao website oficial em produção.
- Design dark mode premium com estética minimalista e efeitos ópticos refinados (*Specular Glass*, *Star Border*, *Particle Text*).
- Mais de 45 categorias e mais de 130 referências reais verificadas.

---

## 🚀 Principais Recursos

- **Acesso Direto e Sem Fricção**: Títulos e botões especulares levam você imediatamente ao website de produção selecionado.
- **Busca Global Instantânea (`Ctrl + K` / `Cmd + K`)**: Command Palette veloz para pesquisar referências por título, tag ou categoria com navegação completa por teclado.
- **Componentes React Bits Interativos**:
  - `SpecularButton`: Botão com reflexo de luz e vidro especular reativo ao movimento do mouse em Canvas 2D de alta performance.
  - `StarBorder`: Botão de contribuição GitHub com estrela viajando suavemente pela borda arredondada e pulso luminoso ao clique.
  - `ParticleText`: Tipografia monumental animada por física de partículas na página inicial.
  - `PillNav`: Barra de navegação unificada em formato de pílula glass com indicador de página ativa.
- **Organização por 45+ Categorias**: De *Landing Pages*, *SaaS*, *Componentes UI*, *Portfólios*, *3D & Three.js*, a *Tipografia*, *Microinterações* e muito mais.
- **100% Bilíngue**: Alternância nativa entre Português (PT-BR) e Inglês (EN).
- **Sidebar Retrátil**: Menu lateral expansível/colapsável com contadores por categoria e navegação rápida.

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Roteamento**: [React Router v7](https://reactrouter.com/)
- **Animações e Efeitos**: [GSAP](https://gsap.com/) + Canvas 2D + Tokens Transitions.dev

---

## 📁 Estrutura do Projeto

```bash
gallery-inspirations/
├── public/
│   └── assets/aistudio/       # Logotipos e marcas visuais otimizadas
├── src/
│   ├── components/
│   │   ├── ContributionButton/# Banner de incentivo à comunidade
│   │   ├── Footer/            # Rodapé editorial com links institucionais
│   │   ├── Icons/             # Ícones dinâmicos de categorias
│   │   ├── Navbar/            # Barra superior com PillNav e seletor de idioma
│   │   ├── ParticleText/      # Título dinâmico animado por partículas
│   │   ├── ReferenceList/     # Listagem minimalista de referências
│   │   ├── Search/            # Command Palette global (Ctrl + K)
│   │   ├── Sidebar/           # Menu lateral persistente e responsivo
│   │   ├── SpecularButton/    # Botão de vidro especular reativo
│   │   └── StarBorder/        # Botão com borda de estrela luminosa
│   ├── data/
│   │   ├── categories.ts      # 45+ categorias oficiais do catálogo
│   │   ├── config.ts          # Configurações globais e link do GitHub
│   │   └── references.ts      # Acervo completo de referências
│   ├── locales/
│   │   └── translations.tsx   # Dicionário de traduções PT-BR / EN
│   ├── pages/
│   │   ├── Blog/              # Caderno editorial
│   │   ├── Category/          # Listagem filtrada por categoria
│   │   ├── Changelog/         # Histórico de versões
│   │   ├── Docs/              # Documentação e filosofia
│   │   ├── Guide/             # Guia interativo de contribuição
│   │   ├── Home/              # Página inicial com busca e destaques
│   │   └── NotFound/          # Página 404 personalizada
│   ├── App.tsx                # Roteamento e layout mestre
│   └── main.tsx               # Ponto de entrada da aplicação
├── CONTRIBUTING.md            # Guia de contribuição (EN/PT)
├── CONTRIBUICAO.md            # Guia de contribuição detalhado em Português
└── README.md                  # Este documento
```

---

## 💻 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- `npm` ou `pnpm`

### Passos de Instalação

1. Clone o repositório:
```bash
git clone https://github.com/luizeduardo98r4/inspiration-archive.git
cd inspiration-archive
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em seu navegador:
```
http://localhost:3000
```

5. Para gerar a build de produção otimizada:
```bash
npm run build
```

---

## 🤝 Como Contribuir

Adoramos receber novas referências de qualidade da comunidade! Todas as adições são feitas de forma aberta e transparente via Pull Requests no GitHub.

Para saber como formatar o código e sugerir uma nova referência, consulte o nosso:
👉 [**Guia de Contribuição (CONTRIBUTING.md)**](./CONTRIBUTING.md) ou [**Guia em Português (CONTRIBUICAO.md)**](./CONTRIBUICAO.md)

---

## 📄 Licença

Este projeto é de código aberto e está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).
