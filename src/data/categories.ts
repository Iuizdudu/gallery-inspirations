export interface Category {
  id: string;
  slug: string;
  namePt: string;
  nameEn: string;
  descriptionPt: string;
  descriptionEn: string;
  iconName: string;
}

/**
 * 18 Categorias Oficiais do Inspiration Archive
 * Centralizadas exclusivamente neste arquivo conforme especificação do projeto.
 */
export const CATEGORIES: Category[] = [
  {
    id: "landing-pages",
    slug: "landing-pages",
    namePt: "Landing Pages",
    nameEn: "Landing Pages",
    descriptionPt: "Páginas de apresentação de produtos, serviços e soluções digitais com foco em conversão e clareza de proposta de valor.",
    descriptionEn: "High-converting product, service, and launch presentation pages crafted with clear value propositions.",
    iconName: "Layout",
  },
  {
    id: "saas",
    slug: "saas",
    namePt: "SaaS",
    nameEn: "SaaS",
    descriptionPt: "Páginas de marketing, fluxos de produto e padrões visuais de software como serviço e ferramentas web modernas.",
    descriptionEn: "Marketing pages, product user flows, and visual patterns from world-class software as a service companies.",
    iconName: "Layers",
  },
  {
    id: "ui-ux",
    slug: "ui-ux",
    namePt: "UI & UX",
    nameEn: "UI & UX",
    descriptionPt: "Arquivos de telas reais, fluxos de interação, padrões de usabilidade e arquitetura de informação digital.",
    descriptionEn: "Real application screens, user flows, interaction patterns, and digital information architecture.",
    iconName: "Compass",
  },
  {
    id: "onboarding",
    slug: "onboarding",
    namePt: "Onboarding",
    nameEn: "Onboarding",
    descriptionPt: "Fluxos de boas-vindas, jornadas de primeiro acesso, tutoriais interativos e ativação de novos usuários.",
    descriptionEn: "Welcome flows, first-run user journeys, interactive product tours, and customer activation flows.",
    iconName: "Sparkles",
  },
  {
    id: "componentes",
    slug: "componentes",
    namePt: "Componentes",
    nameEn: "Components",
    descriptionPt: "Bibliotecas de design systems, microcomponentes reativos, padrões atômicos e componentes de interface modernos.",
    descriptionEn: "Design system component galleries, reactive micro-components, atomic UI patterns, and modern code assets.",
    iconName: "Box",
  },
  {
    id: "web",
    slug: "web",
    namePt: "Web",
    nameEn: "Web",
    descriptionPt: "Projetos web inovadores, sites premiados, galerias curatoriais e experimentações digitais contemporâneas.",
    descriptionEn: "Innovative websites, award-winning digital experiences, curated galleries, and contemporary web craft.",
    iconName: "Globe",
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    namePt: "eCommerce",
    nameEn: "eCommerce",
    descriptionPt: "Lojas virtuais, catálogos de produtos, checkout de alta performance e experiências de compra headless.",
    descriptionEn: "High-performance digital storefronts, product catalogs, headless shopping architectures, and checkout design.",
    iconName: "ShoppingCart",
  },
  {
    id: "mobile",
    slug: "mobile",
    namePt: "Mobile",
    nameEn: "Mobile",
    descriptionPt: "Telas de aplicativos iOS e Android, microinterações para telas sensíveis ao toque e padrões de navegação nativa.",
    descriptionEn: "Native iOS and Android application screens, touch micro-interactions, and mobile UX patterns.",
    iconName: "Smartphone",
  },
  {
    id: "modo-escuro",
    slug: "modo-escuro",
    namePt: "Modo Escuro",
    nameEn: "Dark Mode",
    descriptionPt: "Interfaces e websites desenhados exclusivamente com temas escuros, alto contraste e hierarquia sutil.",
    descriptionEn: "Interfaces and web projects meticulously crafted with dark themes, deep contrast, and elegant luminescence.",
    iconName: "Moon",
  },
  {
    id: "navegacao",
    slug: "navegacao",
    namePt: "Navegação",
    nameEn: "Navigation",
    descriptionPt: "Barras de menu (navbars), cabeçalhos flutuantes, menus responsivos e padrões de orientação de páginas.",
    descriptionEn: "Navbar design inspiration, floating headers, responsive menus, command bars, and navigation schemes.",
    iconName: "Navigation",
  },
  {
    id: "rodape",
    slug: "rodape",
    namePt: "Rodapé",
    nameEn: "Footer",
    descriptionPt: "Projetos de rodapés elegantes, estruturas de encerramento de página, links utilitários e notas institucionais.",
    descriptionEn: "Editorial footer patterns, structural page terminations, utility links, and institutional layouts.",
    iconName: "PanelBottom",
  },
  {
    id: "paginas-404",
    slug: "paginas-404",
    namePt: "Páginas 404",
    nameEn: "404 Pages",
    descriptionPt: "Páginas de erro criativas, rotas perdidas bem estruturadas e redirecionamentos amigáveis com personalidade.",
    descriptionEn: "Creative error pages, delightfully lost routes, and thoughtful user recovery navigation.",
    iconName: "AlertCircle",
  },
  {
    id: "dashboards",
    slug: "dashboards",
    namePt: "Dashboards",
    nameEn: "Dashboards",
    descriptionPt: "Painéis de controle analíticos, visualizações de métricas, decks de apresentação e interfaces de gestão de dados.",
    descriptionEn: "Analytics consoles, metric visualizers, presentation decks, data grids, and management workspaces.",
    iconName: "BarChart3",
  },
  {
    id: "branding",
    slug: "branding",
    namePt: "Branding",
    nameEn: "Branding",
    descriptionPt: "Identidades visuais completas, manuais de marca, design de logotipos e sistemas gráficos conceituais.",
    descriptionEn: "Complete brand systems, visual guidelines, logo design archives, and conceptual graphic identities.",
    iconName: "Feather",
  },
  {
    id: "tipografia",
    slug: "tipografia",
    namePt: "Tipografia",
    nameEn: "Typography",
    descriptionPt: "Fontes contemporâneas, emparelhamentos tipográficos, espécimes digitais e uso editorial da tipografia.",
    descriptionEn: "Contemporary font specimens, pairings, editorial typesetting, and web typography showcases.",
    iconName: "Type",
  },
  {
    id: "paletas-de-cores",
    slug: "paletas-de-cores",
    namePt: "Paletas de Cores",
    nameEn: "Color Palettes",
    descriptionPt: "Harmonias cromáticas, gradientes suaves, contrastes acessíveis e ferramentas de geração de paletas para UI.",
    descriptionEn: "Chromatic harmonies, subtle gradients, accessible color contrasts, and color design tools for UI.",
    iconName: "Palette",
  },
  {
    id: "animacoes",
    slug: "animacoes",
    namePt: "Animações",
    nameEn: "Animations",
    descriptionPt: "Motion design, transições de interface, animações orientadas por scroll e coreografias de microinterações.",
    descriptionEn: "Motion design reels, interface transitions, scroll-driven choreographies, and reactive animations.",
    iconName: "PlayCircle",
  },
  {
    id: "portfolios",
    slug: "portfolios",
    namePt: "Portfólios",
    nameEn: "Portfolios",
    descriptionPt: "Portfólios excepcionais de designers, desenvolvedores, estúdios criativos e arquivos biográficos digitais.",
    descriptionEn: "Outstanding personal portfolios of digital designers, engineers, creative studios, and biographical archives.",
    iconName: "Briefcase",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.id === id);
}
