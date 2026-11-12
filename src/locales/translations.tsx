import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'pt-BR' | 'en';

export const TRANSLATIONS = {
  'pt-BR': {
    appName: 'Gallery Inspirations',
    badge: 'A melhor coleção de inspiração em design & dev',
    heroTitlePrefix: 'Design & Development',
    heroTitleHighlight: 'Gallery Inspirations',
    heroDescription:
      'Uma coleção curada dos melhores recursos para designers e desenvolvedores explorarem inspiração, de landing pages modernas a componentes de UI e muito mais.',
    
    // Navbar
    navHome: 'Início',
    navDocs: 'Documentação',
    navGuide: 'Guia',
    navChangelog: 'Changelog',
    navContribute: 'Contribuir',
    navContributeShort: 'Contribuir',
    
    // Sidebar
    searchPlaceholderSidebar: 'Buscar inspirações...',
    home: 'Início',
    contentIndex: 'Índice de Conteúdo',
    categoriesSection: 'CATEGORIAS',
    collapseSidebar: 'Recolher Sidebar',
    expandSidebar: 'Expandir Sidebar',
    
    // Search
    searchPlaceholderMain: 'Buscar por inspiração...',
    searchCommandShortcut: 'Ctrl K',
    searchModalTitle: 'Buscar no Arquivo',
    searchModalPlaceholder: 'Digite o nome, tag, autor ou tecnologia...',
    searchModalEmpty: 'Nenhuma referência encontrada com os termos informados.',
    searchRecent: 'Categorias em destaque',
    searchEscHint: 'ESC para fechar',
    searchNavigateHint: '↑↓ para navegar',
    searchSelectHint: 'ENTER para selecionar',
    
    // Contribution Banner
    contributeTitle: 'Contribua com o projeto',
    contributeSubtitle: 'Ajude a expandir nossa biblioteca compartilhando referências de qualidade através de Pull Requests no GitHub.',
    contributeButton: 'Contribuir pelo GitHub',
    
    // Category & Item List
    referencesCount: 'referências',
    referenceCountSingle: 'referência',
    detailsAction: 'Detalhes',
    visitAction: 'Visitar',
    sortBy: 'Ordenar por',
    sortPopular: 'Mais populares',
    sortAlphabetical: 'Ordem alfabética (A–Z)',
    filterByCategory: 'Filtrar por categoria',
    allCategories: 'Todas as categorias',
    noReferencesFound: 'Nenhuma referência encontrada para esta busca.',
    featuredReferencesTitle: 'Referências em Destaque',
    exploreCategoriesTitle: 'Índice de Categorias',
    
    // Reference Details Page
    backToHome: 'Voltar ao início',
    backToCategory: 'Voltar para',
    viewOriginalWebsite: 'Visitar site oficial',
    shareReference: 'Copiar link da referência',
    linkCopied: 'Link copiado!',
    authorLabel: 'Autor / Estúdio',
    categoryLabel: 'Categoria',
    yearLabel: 'Ano de Lançamento',
    popularityLabel: 'Relevância',
    tagsLabel: 'Tags e Tópicos',
    aboutResource: 'Sobre este Recurso',
    relatedReferences: 'Referências Relacionadas',
    openExternalNotice: 'Abre em uma nova aba diretamente no site oficial.',
    
    // Secondary pages
    docsTitle: 'Documentação do Gallery Inspirations',
    docsSubtitle: 'Princípios editoriais, diretrizes de curadoria e arquitetura do repositório.',
    guideTitle: 'Guia de Contribuição',
    guideSubtitle: 'Como propor novas referências através do repositório oficial no GitHub.',
    changelogTitle: 'Histórico de Atualizações',
    changelogSubtitle: 'Acompanhe as versões e inclusões de novas categorias e referências no arquivo.',
    pageNotFoundTitle: 'Página Não Encontrada',
    pageNotFoundSubtitle: 'A rota solicitada não existe ou foi movida no arquivo.',
    returnHome: 'Retornar ao Início',
    
    // Footer
    footerRights: 'Uma biblioteca pública de padrões digitais. Foco estrito em conteúdo editorial textual.',
    footerCuratedBy: 'Curadoria independente e aberta à comunidade.',
  },
  'en': {
    appName: 'Gallery Inspirations',
    badge: 'The ultimate collection of design & dev inspiration',
    heroTitlePrefix: 'Design & Development',
    heroTitleHighlight: 'Gallery Inspirations',
    heroDescription:
      'A curated collection of the best resources for designers and developers to explore inspiration, from modern landing pages to UI components and more.',
    
    // Navbar
    navHome: 'Home',
    navDocs: 'Documentation',
    navGuide: 'Guide',
    navChangelog: 'Changelog',
    navContribute: 'Contribute',
    navContributeShort: 'Contribute',
    
    // Sidebar
    searchPlaceholderSidebar: 'Search inspirations...',
    home: 'Home',
    contentIndex: 'Content Index',
    categoriesSection: 'CATEGORIES',
    collapseSidebar: 'Collapse Sidebar',
    expandSidebar: 'Expand Sidebar',
    
    // Search
    searchPlaceholderMain: 'Search for inspiration...',
    searchCommandShortcut: 'Ctrl K',
    searchModalTitle: 'Search the Archive',
    searchModalPlaceholder: 'Type a title, tag, author, or tech stack...',
    searchModalEmpty: 'No references found matching your search term.',
    searchRecent: 'Featured Categories',
    searchEscHint: 'ESC to close',
    searchNavigateHint: '↑↓ to navigate',
    searchSelectHint: 'ENTER to select',
    
    // Contribution Banner
    contributeTitle: 'Contribute to the project',
    contributeSubtitle: 'Help expand our library by proposing high-quality design references via Pull Requests on GitHub.',
    contributeButton: 'Contribute on GitHub',
    
    // Category & Item List
    referencesCount: 'references',
    referenceCountSingle: 'reference',
    detailsAction: 'Details',
    visitAction: 'Visit',
    sortBy: 'Sort by',
    sortPopular: 'Most Popular',
    sortAlphabetical: 'Alphabetical (A–Z)',
    filterByCategory: 'Filter by category',
    allCategories: 'All Categories',
    noReferencesFound: 'No references found matching this criteria.',
    featuredReferencesTitle: 'Featured References',
    exploreCategoriesTitle: 'Category Index',
    
    // Reference Details Page
    backToHome: 'Back to home',
    backToCategory: 'Back to',
    viewOriginalWebsite: 'Visit official website',
    shareReference: 'Copy reference link',
    linkCopied: 'Link copied!',
    authorLabel: 'Author / Studio',
    categoryLabel: 'Category',
    yearLabel: 'Release Year',
    popularityLabel: 'Relevance',
    tagsLabel: 'Tags & Topics',
    aboutResource: 'About this Resource',
    relatedReferences: 'Related References',
    openExternalNotice: 'Opens in a new tab directly on the official site.',
    
    // Secondary pages
    docsTitle: 'Gallery Inspirations Documentation',
    docsSubtitle: 'Editorial standards, curatorial principles, and repository architecture.',
    guideTitle: 'Contribution Guide',
    guideSubtitle: 'How to propose new references via the official GitHub repository.',
    changelogTitle: 'Changelog & Updates',
    changelogSubtitle: 'Track versions and additions of new categories and references in the archive.',
    pageNotFoundTitle: 'Page Not Found',
    pageNotFoundSubtitle: 'The requested route does not exist or has been relocated.',
    returnHome: 'Return to Home',
    
    // Footer
    footerRights: 'A public library of digital patterns. Strictly focused on textual editorial content.',
    footerCuratedBy: 'Independent curation open to the global community.',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof TRANSLATIONS)['pt-BR'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'inspiration_archive_lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
      if (saved === 'pt-BR' || saved === 'en') return saved;
    } catch {
      // Ignore localStorage errors
    }
    return 'pt-BR';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // Ignore localStorage errors
    }
  };

  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
