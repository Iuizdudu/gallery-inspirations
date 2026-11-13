import { Category } from '../data/categories';
import { Reference, getReferencesByCategory } from '../data/references';

interface CategoryPromptProfile {
  projectContext: string;
  focusSummary: string;
  analysisAreas: string[];
}

const CATEGORY_PROMPT_PROFILES: Record<string, CategoryPromptProfile> = {
  landing: {
    projectContext: 'a high-converting Landing Page',
    focusSummary:
      'hero value propositions, above-the-fold clarity, social proof placement, conversion rhythm, CTA prominence, visual hierarchy, layouts, typography, and interaction patterns',
    analysisAreas: [
      'Hero composition and value-proposition clarity',
      'Section pacing, narrative flow, and conversion hierarchy',
      'Primary CTA placement, contrast, and visual weight',
      'Social proof, product showcases, and pricing/feature framing',
      'Typography scale, spacing discipline, and responsive breakpoints',
    ],
  },
  saas: {
    projectContext: 'a modern SaaS product and marketing experience',
    focusSummary:
      'product storytelling, feature communication, UI screenshots/previews, onboarding cues, pricing matrices, visual hierarchy, layouts, typography, and interaction patterns',
    analysisAreas: [
      'Product positioning and interactive UI showcase framing',
      'Feature breakdowns, bento/comparison layouts, and pricing tables',
      'Navigation structure across product, docs, and conversion paths',
      'Design system consistency, typography, and dark/light contrast',
      'Trust signals, workflow clarity, and responsive behavior',
    ],
  },
  'ui-ux': {
    projectContext: 'a UI & UX product interface',
    focusSummary:
      'screen flows, usability ergonomics, information architecture, component density, micro-interactions, visual hierarchy, layouts, typography, and interaction patterns',
    analysisAreas: [
      'Screen structure, spatial hierarchy, and task flow clarity',
      'Control ergonomics, affordances, and feedback states',
      'Information density balance and scannability',
      'Component consistency and semantic state signaling',
      'Cross-device responsiveness and accessibility',
    ],
  },
  onboarding: {
    projectContext: 'a user Onboarding and first-run experience',
    focusSummary:
      'welcome flows, progressive disclosure, step-by-step guidance, activation triggers, empty states, visual hierarchy, layouts, typography, and interaction patterns',
    analysisAreas: [
      'First-impression welcome framing and reduced cognitive load',
      'Progressive disclosure across multi-step setup flows',
      'Progress indicators, checklists, and clear next-step CTAs',
      'Interactive tooltips, empty-state guidance, and validation feedback',
      'Seamless transition from onboarding into the core workspace',
    ],
  },
  component: {
    projectContext: 'a reusable UI Components system',
    focusSummary:
      'component anatomy, interactive states, API ergonomics, micro-interactions, spacing tokens, visual hierarchy, layouts, typography, and accessibility patterns',
    analysisAreas: [
      'Atomic component anatomy, padding ratios, and border/surface depth',
      'Hover, focus-visible, active, disabled, and loading states',
      'Composable structure and variant consistency',
      'Motion micro-interactions and keyboard navigation',
      'Contrast ratios and semantic markup',
    ],
  },
  web: {
    projectContext: 'a contemporary Web experience',
    focusSummary:
      'editorial composition, art direction, spatial pacing, interactive storytelling, visual hierarchy, layouts, typography, and modern interaction patterns',
    analysisAreas: [
      'Overall page composition, grid discipline, and negative space',
      'Editorial typography pairings and expressive scale contrast',
      'Color balance, surface textures, and focal anchors',
      'Scroll rhythm, transitions, and responsive layout adaptation',
    ],
  },
  ecommerce: {
    projectContext: 'an eCommerce storefront and shopping experience',
    focusSummary:
      'product presentation, shopping experiences, product catalogs, navigation patterns, checkout flows, visual hierarchy, layouts, typography, and interaction patterns',
    analysisAreas: [
      'Product presentation, imagery framing, and variant selection',
      'Catalog browsing, collection filtering, and search ergonomics',
      'Storefront navigation, merchandising hierarchy, and cart drawers',
      'Checkout clarity, trust cues, and frictionless conversion flows',
      'Typography, spacing rhythm, and mobile shopping ergonomics',
    ],
  },
  mobile: {
    projectContext: 'a Mobile application interface',
    focusSummary:
      'thumb-zone navigation, touch targets, native gesture patterns, compact screen hierarchy, visual rhythm, layouts, typography, and interaction patterns',
    analysisAreas: [
      'Thumb-friendly navigation bars, bottom sheets, and tap targets',
      'Vertical information hierarchy on compact viewports',
      'Touch feedback, swipe gestures, and state transitions',
      'Legible mobile typography and generous touch spacing',
    ],
  },
  dark: {
    projectContext: 'a Dark Mode interface',
    focusSummary:
      'dark surface elevation, subtle hairline borders, luminance contrast, restrained accent lighting, visual hierarchy, layouts, typography, and interaction patterns',
    analysisAreas: [
      'Layered dark surface contrast without harsh pure-black flattening',
      'Hairline border definition and restrained glow accents',
      'Optical compensation for light text on dark backgrounds',
      'WCAG contrast across primary, muted, and interactive states',
    ],
  },
  navbar: {
    projectContext: 'a Navbar and Navigation architecture',
    focusSummary:
      'navigation hierarchy, header layout, active-state indicators, responsive menu behavior, command/search triggers, visual hierarchy, typography, and interaction patterns',
    analysisAreas: [
      'Horizontal zone alignment, spacing balance, and link conciseness',
      'Active route indicators, hover feedback, and dropdown ergonomics',
      'Mobile drawer/collapse patterns and sticky header footprint',
      'Integration of primary CTAs, search triggers, and utility controls',
    ],
  },
  '404': {
    projectContext: 'a 404 Error and Route Recovery page',
    focusSummary:
      'error clarity, recovery navigation, brand personality, playful or editorial restraint, visual hierarchy, layouts, typography, and interaction patterns',
    analysisAreas: [
      'Immediate error clarity paired with clear recovery actions',
      'Visual personality without sacrificing navigation back home',
      'Typography scale, whitespace balance, and responsive framing',
    ],
  },
  footer: {
    projectContext: 'a Website Footer architecture',
    focusSummary:
      'link taxonomy, multi-column rhythm, brand lockups, utility links, legal clarity, visual hierarchy, layouts, typography, and interaction patterns',
    analysisAreas: [
      'Column grouping, scannable link hierarchy, and mobile stacking',
      'Integration of brand identity, primary CTA, and legal metadata',
      'Hairline dividers, spacing discipline, and contrast balance',
    ],
  },
  deck: {
    projectContext: 'a Presentation Deck and visual storytelling system',
    focusSummary:
      'slide pacing, headline-to-visual balance, typographic scale, data framing, visual hierarchy, layouts, and editorial composition',
    analysisAreas: [
      'One-idea-per-slide clarity and visual focal anchors',
      'Typographic contrast between display statements and supporting copy',
      'Grid alignment, chart/diagram legibility, and narrative rhythm',
    ],
  },
  og: {
    projectContext: 'OpenGraph (OG) preview image design',
    focusSummary:
      'thumbnail legibility at small scales, focal typography, brand recognition, balanced framing, color contrast, and visual hierarchy',
    analysisAreas: [
      'Instant readability at social feed dimensions (1200x630)',
      'Typography weight, concise messaging, and brand signature placement',
      'High-contrast foreground/background separation',
    ],
  },
  arts: {
    projectContext: 'an Arts & Culture digital showcase',
    focusSummary:
      'curatorial pacing, gallery framing, expressive typography, media presentation, visual hierarchy, layouts, and interaction patterns',
    analysisAreas: [
      'Museum-grade negative space and restrained UI chrome around artwork',
      'Editorial typography, captions, and curatorial storytelling',
      'Smooth browsing flows and respectful visual contrast',
    ],
  },
  logo: {
    projectContext: 'Logo Design and brand symbol exploration',
    focusSummary:
      'geometric reduction, silhouette balance, scalability across sizes, negative space, visual identity, and mark construction',
    analysisAreas: [
      'Recognizability at favicon (16px) and hero scales alike',
      'Geometric precision, optical balance, and stroke weight harmony',
      'Pairing between symbol marks and wordmark typography',
    ],
  },
  design: {
    projectContext: 'a Design-focused product and curatorial interface',
    focusSummary:
      'aesthetic craft, editorial polish, practical workflows, visual hierarchy, layouts, typography, color discipline, and interaction patterns',
    analysisAreas: [
      'Editorial precision, layout rhythm, and typographic polish',
      'Intentional color distribution and surface contrast',
      'Clean UI controls and distraction-free browsing ergonomics',
    ],
  },
  development: {
    projectContext: 'a Developer Tooling and Engineering interface',
    focusSummary:
      'technical clarity, keyboard-first ergonomics, code/data legibility, dense utility workflows, visual hierarchy, layouts, typography, and interaction patterns',
    analysisAreas: [
      'Fast scanability of technical controls, inputs, and outputs',
      'Monospace precision, tabular alignment, and keyboard shortcuts',
      'Clean dark/light syntax framing and zero decorative clutter',
    ],
  },
  interface: {
    projectContext: 'a specialized Interface & HUD system',
    focusSummary:
      'instrument precision, telemetry legibility, spatial framing, crisp state indicators, visual hierarchy, layouts, typography, and interaction patterns',
    analysisAreas: [
      'High-legibility instrument hierarchy and crisp hairline framing',
      'Restrained telemetry indicators and tabular numeric alignment',
      'Responsive control density and clear operational states',
    ],
  },
  portfolio: {
    projectContext: 'a Personal or Studio Portfolio',
    focusSummary:
      'case-study storytelling, project presentation, personal voice, typographic personality, visual hierarchy, layouts, and interaction patterns',
    analysisAreas: [
      'Distinctive hero introduction and immediate work discoverability',
      'Case study structure, project thumbnails, and concise editorial copy',
      'Contact/conversion pathways and smooth transition pacing',
    ],
  },
  archive: {
    projectContext: 'a Digital Historical Archive and index',
    focusSummary:
      'chronological indexing, archival metadata, long-term readability, searchability, visual hierarchy, layouts, and typographic rigor',
    analysisAreas: [
      'Catalog structure, accession indexing, and clean metadata rows',
      'Long-form reading measure, contrast, and citation clarity',
      'Fast filtering and chronological browsing ergonomics',
    ],
  },
  web3: {
    projectContext: 'a Web3 and decentralized protocol interface',
    focusSummary:
      'wallet/action clarity, protocol storytelling, technical trust cues, modern dark aesthetics, visual hierarchy, layouts, typography, and interaction patterns',
    analysisAreas: [
      'Clear presentation of complex protocol workflows and states',
      'High-contrast surfaces, crisp typography, and restrained accents',
      'Transaction feedback, status clarity, and navigation simplicity',
    ],
  },
  font: {
    projectContext: 'a Typography & Font Specimen experience',
    focusSummary:
      'typeface pairing, scale hierarchies, optical weights, specimen interactivity, leading/tracking rhythm, and editorial layout composition',
    analysisAreas: [
      'Expressive display-to-body font pairings and type scale ratios',
      'Live specimen testing, glyph clarity, and weight contrast',
      'Line measure, leading, and clean typographic whitespace',
    ],
  },
  advertising: {
    projectContext: 'an Advertising and Campaign landing showcase',
    focusSummary:
      'visual punch, campaign storytelling, headline hooks, conversion clarity, visual hierarchy, layouts, typography, and motion cues',
    analysisAreas: [
      'Immediate visual hook and concise persuasive messaging',
      'High-contrast callouts, media framing, and CTA placement',
      'Consistent campaign identity across sections',
    ],
  },
  email: {
    projectContext: 'a responsive Email Design and newsletter template',
    focusSummary:
      'single-column clarity, scannable sections, concise copy blocks, CTA visibility, typography, and cross-client layout resilience',
    analysisAreas: [
      'Clean 600px reading structure and generous vertical spacing',
      'Clear headline-to-CTA visual flow and dark/light readability',
      'Minimalist header/footer framing and accessible contrast',
    ],
  },
  motion: {
    projectContext: 'a Motion Design and interactive animation experience',
    focusSummary:
      'choreography timing, easing curves, scroll-driven transitions, micro-interaction physics, visual hierarchy, layouts, and reduced-motion accessibility',
    analysisAreas: [
      'Purposeful entry, hover, and state-transition choreography',
      'Compositor-friendly animation performance and natural easing curves',
      'Balance between dynamic motion and content readability',
      'Respect for prefers-reduced-motion accessibility settings',
    ],
  },
  'data-visualisation': {
    projectContext: 'a Data Visualization and analytical storytelling view',
    focusSummary:
      'chart selection, data-to-ink ratio, colorblind-safe encodings, axis/tooltip clarity, tabular numerals, visual hierarchy, and layout balance',
    analysisAreas: [
      'Appropriate chart forms for the underlying comparison or trend',
      'Crisp axis labeling, legend clarity, and interactive tooltips',
      'Accessible chromatic differentiation paired with explicit labels',
      'Balanced integration of summary metrics and visual plots',
    ],
  },
  illustration: {
    projectContext: 'an Illustration-led digital interface',
    focusSummary:
      'custom visual style consistency, figure-ground separation, UI integration, color harmony, visual hierarchy, and layout spacing',
    analysisAreas: [
      'Cohesive illustration language harmonized with UI typography',
      'Clear focal separation between artwork and interactive controls',
      'Responsive scaling without obscuring core text or actions',
    ],
  },
  'graphic-design': {
    projectContext: 'a Graphic Design showcase and editorial composition',
    focusSummary:
      'grid tension, typographic scale, poster-like rhythm, chromatic contrast, visual hierarchy, and modern layout experimentation',
    analysisAreas: [
      'Asymmetric or Swiss-grid structure and spatial tension',
      'Bold type scale contrasts and disciplined color accents',
      'Editorial framing that preserves readability and navigation',
    ],
  },
  branding: {
    projectContext: 'a Branding and Visual Identity system',
    focusSummary:
      'brand guidelines presentation, color/type token systems, tone-of-voice cohesion, logo usage, visual hierarchy, and layout structure',
    analysisAreas: [
      'Cohesive system rules across typography, color, and iconography',
      'Clear visual hierarchy showcasing brand applications',
      'Consistent personality carried through every UI surface',
    ],
  },
  poster: {
    projectContext: 'a Poster-inspired visual layout and composition',
    focusSummary:
      'display typography, dramatic scale hierarchy, geometric balance, focal contrast, and expressive grid composition',
    analysisAreas: [
      'Commanding display headlines and disciplined negative space',
      'Visual rhythm across asymmetric blocks and typographic anchors',
      'Color restraint paired with high-impact focal elements',
    ],
  },
  layout: {
    projectContext: 'a Modular Layout & Bento Grid architecture',
    focusSummary:
      'bento grid proportions, asymmetric column rhythm, gap consistency, responsive reflow, visual hierarchy, and card discipline',
    analysisAreas: [
      'Consistent outer padding, inner grid gaps, and nested border radii',
      'Visual focal anchoring so grid cells do not compete equally',
      'Clean responsive collapse from multi-column desktop to mobile',
    ],
  },
  color: {
    projectContext: 'a Color System and Palette architecture',
    focusSummary:
      '60-30-10 color balance, surface-to-text contrast, semantic state colors, neutral sophistication, and visual hierarchy',
    analysisAreas: [
      'Restrained neutral canvas paired with intentional accent placement',
      'WCAG AA/AAA contrast across text, surfaces, and borders',
      'Semantic clarity pairing color cues with icons or labels',
    ],
  },
  newsletter: {
    projectContext: 'a Digital Newsletter and publication experience',
    focusSummary:
      'editorial cadence, subscription conversion, issue archive scannability, reading comfort, visual hierarchy, and typography',
    analysisAreas: [
      'Clear value proposition and frictionless subscribe flow',
      'Readable issue archive with clean dates, summaries, and typography',
      'Distraction-free editorial layout and balanced whitespace',
    ],
  },
  photography: {
    projectContext: 'a Photography gallery and visual curation interface',
    focusSummary:
      'image-first framing, aspect-ratio integrity, subtle contrast scrims, minimal UI chrome, visual hierarchy, and layout rhythm',
    analysisAreas: [
      'Generous gallery spacing letting photography lead visually',
      'Readable overlay captions via measured gradient scrims',
      'Smooth grid cadence and clean lightbox/detail transitions',
    ],
  },
  search: {
    projectContext: 'a Visual Search and Discovery interface',
    focusSummary:
      'query ergonomics, instant filtering, result scannability, command palettes, empty states, visual hierarchy, and interaction patterns',
    analysisAreas: [
      'Prominent search input ergonomics and keyboard navigation',
      'Fast result scanning, highlighting, and filter refinement',
      'Helpful zero-state and no-results recovery paths',
    ],
  },
  'ui-library': {
    projectContext: 'an Interactive UI Library and component showcase',
    focusSummary:
      'live component previews, interactive state controls, code-to-visual clarity, micro-interactions, visual hierarchy, and accessibility',
    analysisAreas: [
      'Clean component preview framing with realistic interactive states',
      'Polished hover, focus, and transition micro-interactions',
      'Consistent design tokens, spacing math, and dark/light polish',
    ],
  },
  'more-extreme': {
    projectContext: 'an Ultra-Minimalist web interface',
    focusSummary:
      'radical subtraction, typographic purity, raw whitespace, strict content focus, visual hierarchy, and subtle interaction cues',
    analysisAreas: [
      'Elimination of decorative chrome in favor of pure content',
      'Micro-precision in alignment, borders, and typographic weight',
      'Quiet yet unmistakable interactive affordances',
    ],
  },
  book: {
    projectContext: 'a Curated Book & Reading resource library',
    focusSummary:
      'editorial indexing, cover/title framing, concise synopses, reading-list filtering, visual hierarchy, and typography',
    analysisAreas: [
      'Structured catalog rows or cards with clear author/topic metadata',
      'Comfortable editorial typography and balanced whitespace',
      'Intuitive browsing by theme and recommendation context',
    ],
  },
  accessibility: {
    projectContext: 'an Accessible (A11Y) web interface',
    focusSummary:
      'WCAG contrast compliance, keyboard focus indicators, semantic landmarks, screen-reader clarity, reduced-motion safety, and inclusive ergonomics',
    analysisAreas: [
      'Visible focus-visible rings and logical tab order across all controls',
      'Non-color state signaling pairing icons/text with status hues',
      'Minimum 44px touch targets, ARIA live feedback, and contrast ratios',
    ],
  },
  copywriting: {
    projectContext: 'a Copywriting and Conversion Messaging interface',
    focusSummary:
      'headline clarity, microcopy precision, value-driven CTAs, scannable sections, editorial hierarchy, and typography',
    analysisAreas: [
      'Punchy, jargon-free headlines paired with clear supporting copy',
      'Action-oriented button labels and helpful form/empty-state microcopy',
      'Visual pacing that gives persuasive copy room to breathe',
    ],
  },
  marketing: {
    projectContext: 'a Growth & Marketing experience',
    focusSummary:
      'conversion storytelling, proof adjacency, benefit framing, clear CTAs, visual hierarchy, layouts, typography, and interaction patterns',
    analysisAreas: [
      'Immediate clarity of product benefits and measurable proof',
      'Structured funnels from awareness sections to conversion actions',
      'Crisp visual rhythm and trustworthy editorial design',
    ],
  },
  boilerplate: {
    projectContext: 'a Production Boilerplate & Starter architecture',
    focusSummary:
      'developer clarity, feature matrix organization, clean demo framing, documentation links, visual hierarchy, and layout precision',
    analysisAreas: [
      'Clear presentation of included stack, modules, and architecture',
      'Fast pathways to live preview, docs, and repository setup',
      'Clean technical typography and scannable feature sections',
    ],
  },
  background: {
    projectContext: 'ambient Backgrounds, Gradients & Surface treatments',
    focusSummary:
      'subtle atmospheric depth, foreground legibility, gradient smoothness, contrast preservation, and restrained visual accents',
    analysisAreas: [
      'Subtle ambient depth that enhances without competing with foreground text',
      'Smooth gradient/mesh transitions avoiding harsh banding',
      'Maintained WCAG contrast across layered UI cards and typography',
    ],
  },
  dashboards: {
    projectContext: 'an Analytics & Management Dashboard',
    focusSummary:
      'metric hierarchy, data visualization clarity, filtering workflows, tabular numerals, workspace navigation, visual hierarchy, layouts, typography, and interaction patterns',
    analysisAreas: [
      'KPI summary hierarchy and scannable analytical charts/tables',
      'Sidebar/header navigation, search filters, and density control',
      'Tabular numeral alignment and clear positive/negative state indicators',
      'Responsive grid adaptation without horizontal overflow',
    ],
  },
};

function getCategoryPromptProfile(category: Category): CategoryPromptProfile {
  const existing = CATEGORY_PROMPT_PROFILES[category.id];
  if (existing) {
    return existing;
  }

  return {
    projectContext: `a ${category.nameEn} project`,
    focusSummary: `${category.nameEn.toLowerCase()} patterns, visual hierarchy, layout composition, typography, spacing, and interaction patterns`,
    analysisAreas: [
      `Core structural patterns specific to ${category.nameEn}`,
      'Visual hierarchy, typography scale, and contrast balance',
      'Layout spacing, responsive behavior, and interactive states',
    ],
  };
}

function normalizeReferenceUrl(url: string): string {
  return url.trim().toLowerCase().replace(/\/+$/, '');
}

/**
 * Retrieves all registered references for a category without duplicates.
 */
export function getDeduplicatedCategoryReferences(categoryId: string): Reference[] {
  const rawReferences = getReferencesByCategory(categoryId);
  const seenIds = new Set<string>();
  const seenUrls = new Set<string>();
  const uniqueReferences: Reference[] = [];

  for (const ref of rawReferences) {
    const cleanUrl = ref.url?.trim();
    if (!cleanUrl) continue;

    const normalizedUrl = normalizeReferenceUrl(cleanUrl);
    if (seenIds.has(ref.id) || seenUrls.has(normalizedUrl)) {
      continue;
    }

    seenIds.add(ref.id);
    seenUrls.add(normalizedUrl);
    uniqueReferences.push(ref);
  }

  return uniqueReferences;
}

/**
 * Dynamically builds a contextualized English AI design reference prompt
 * tailored to the category and its exclusive reference websites.
 * Returns null if the category has zero registered references.
 */
export function buildCategoryAiPrompt(
  category: Category,
  references: Reference[]
): string | null {
  if (!category || references.length === 0) {
    return null;
  }

  const profile = getCategoryPromptProfile(category);
  const categoryName = category.nameEn || category.namePt;
  const categoryDescription = category.descriptionEn?.trim();

  const referenceLines = references
    .map((ref, index) => {
      const desc = ref.descriptionEn?.trim();
      const baseLine = `${index + 1}. ${ref.title} — ${ref.url.trim()}`;
      return desc ? `${baseLine}\n   ${desc}` : baseLine;
    })
    .join('\n');

  const analysisBullets = profile.analysisAreas
    .map((area) => `- ${area}.`)
    .join('\n');

  return [
    `# ${categoryName} — AI Design Reference Instructions`,
    '',
    '## Context / Task',
    '',
    `You are working on ${profile.projectContext}.${categoryDescription ? ` Category focus: ${categoryDescription}` : ''}`,
    `Your task is to analyze and use the websites provided below as your exclusive external design reference sources for this ${categoryName} work.`,
    '',
    '## Mandatory Reference Rules',
    '',
    '- The websites provided in this prompt are your ONLY authorized external design reference sources.',
    '- You MUST explore and analyze the websites provided below before making design decisions.',
    '- You MUST use the provided websites as the exclusive sources of external design inspiration.',
    '- DO NOT search for, access, or use any other websites, design galleries, templates, or external inspiration sources.',
    '- DO NOT introduce additional reference sources based on your own knowledge.',
    "- You may independently explore the provided websites and select the references that are most relevant to the current project's requirements.",
    '- You are NOT required to use every available reference.',
    '- If a website is inaccessible, do not silently replace it with another source.',
    '',
    '## What to Analyze',
    '',
    `Focus on ${profile.focusSummary}:`,
    '',
    analysisBullets,
    '',
    '## Available References',
    '',
    referenceLines,
    '',
    '## Implementation Guidelines',
    '',
    '- Use the selected references to guide the visual and functional direction of the implementation.',
    "- Adapt relevant ideas to the existing project's architecture, technologies, requirements, and visual identity.",
    '- Preserve the existing architecture, tech stack, visual system, and already-implemented features; avoid unnecessary structural changes.',
    '- Do not reproduce any website literally.',
    '- The provided websites are your exclusive authorized sources of external design inspiration.',
  ].join('\n');
}

/**
 * Copies text to clipboard using the modern Clipboard API with a safe DOM fallback
 * for iframe or permission-restricted browser contexts.
 */
export async function copyTextToClipboard(text: string): Promise<boolean> {
  if (!text) return false;

  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to execCommand fallback if Clipboard API is blocked in iframe
    }
  }

  if (typeof document === 'undefined') {
    return false;
  }

  let textarea: HTMLTextAreaElement | null = null;
  try {
    textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    textarea.style.left = '-9999px';
    textarea.style.opacity = '0';

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    const copied = document.execCommand('copy');
    return Boolean(copied);
  } catch {
    return false;
  } finally {
    if (textarea && textarea.parentNode) {
      textarea.parentNode.removeChild(textarea);
    }
  }
}
