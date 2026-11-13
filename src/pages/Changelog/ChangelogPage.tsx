import React from 'react';
import { History } from 'lucide-react';
import { useLanguage } from '../../locales/translations';

interface ChangelogRelease {
  version: string;
  datePt: string;
  dateEn: string;
  titlePt: string;
  titleEn: string;
  summaryPt: string;
  summaryEn: string;
  changesPt: string[];
  changesEn: string[];
}

const RELEASES: ChangelogRelease[] = [
  {
    version: 'v1.2.0',
    datePt: 'Novembro 2026',
    dateEn: 'November 2026',
    titlePt: 'AI Reference Prompt & Expansão para 45 Categorias',
    titleEn: 'AI Reference Prompt & Expansion to 45 Categories',
    summaryPt:
      'Lançamento do gerador automático de prompts contextualizados para agentes de IA em todas as categorias, além da ampliação do acervo curado e refinamentos de navegação.',
    summaryEn:
      'Launched the automatic contextualized AI prompt generator across category pages, expanded the curated taxonomy to 45 categories, and refined navigation interactions.',
    changesPt: [
      'Botão Copy For AI nas páginas de categoria para copiar prompts completos e estruturados em inglês (AI Reference Prompt) com um clique',
      'Perfis de análise contextualizados por domínio (eCommerce, SaaS, Landing Pages, Motion, Navbar, Dashboards e mais) com geração automática para novas categorias',
      'Inclusão automática de todas as referências oficiais da categoria no prompt, independente de filtros de busca aplicados na tela',
      'Expansão do catálogo para 45 categorias curadas e mais de 130 referências reais em produção',
      'Refinamentos na navbar mobile e atualização bilíngue completa nas páginas de Documentação, Guia e Changelog',
    ],
    changesEn: [
      'Added the Copy For AI button on category pages to copy structured, ready-to-use English AI Reference Prompts in one click',
      'Built domain-tailored analysis profiles across all categories (eCommerce, SaaS, Landing Pages, Motion, Navbar, Dashboards, etc.) with automatic fallback for new categories',
      'Guaranteed inclusion of all official category references in generated prompts regardless of active inline search filters',
      'Expanded the archive to 45 curated categories and 130+ verified production websites',
      'Polished mobile navbar controls and added full PT-BR / EN bilingual parity across Documentation, Guide, and Changelog pages',
    ],
  },
  {
    version: 'v1.0.0',
    datePt: 'Novembro 2026',
    dateEn: 'November 2026',
    titlePt: 'Lançamento Inicial do Gallery Inspirations',
    titleEn: 'Initial Launch of Gallery Inspirations',
    summaryPt:
      'Reestruturação completa da biblioteca com categorias oficiais, modo escuro nativo, Command Palette global e catálogo textual sem ruído visual.',
    summaryEn:
      'Full library architecture featuring structured categories, native dark mode, global Command Palette search, and a distraction-free textual catalog.',
    changesPt: [
      'Implementação inicial das categorias oficiais de design e desenvolvimento',
      'Acervo inicial com dezenas de referências reais verificadas',
      'Busca global instantânea no atalho Ctrl + K com navegação por teclado',
      'Suporte bilíngue integrado (Português do Brasil e Inglês)',
      'Páginas de detalhes técnicos estilo documentação editorial',
      'Fluxo de contribuição centralizado no GitHub sem cadastros ou uploads',
    ],
    changesEn: [
      'Initial taxonomy of design and web engineering categories',
      'Curated seed archive of verified production references',
      'Instant global search via Ctrl + K with full keyboard navigation',
      'Built-in bilingual support (Brazilian Portuguese and English)',
      'Editorial documentation-style technical detail views for references',
      'GitHub-centered open-source contribution workflow with zero signups',
    ],
  },
  {
    version: 'v0.9.0-beta',
    datePt: 'Outubro 2026',
    dateEn: 'October 2026',
    titlePt: 'Validação da Arquitetura Textual',
    titleEn: 'Text-First Architecture Validation',
    summaryPt:
      'Definição do modelo editorial puramente textual, eliminando thumbnails, galerias de imagens pesadas e cards decorativos.',
    summaryEn:
      'Defined the text-first editorial format, eliminating heavy screenshot thumbnails and decorative visual clutter.',
    changesPt: [
      'Padronização da paleta monocromática escura com acento em azul elétrico #365dff',
      'Hierarquia tipográfica limpa com números tabulares para índices e contadores',
      'Barra de navegação suspensa em formato de pílula centralizada',
    ],
    changesEn: [
      'Standardized dark monochrome palette with #365dff electric blue accents',
      'Established clean typographic hierarchy with tabular numerals across indices and counts',
      'Introduced the floating pill navigation bar layout',
    ],
  },
];

export const ChangelogPage: React.FC = () => {
  const { language, t } = useLanguage();
  const isPt = language === 'pt-BR';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
      <header className="space-y-3 pb-6 border-b border-[#1E1E1E]">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono text-[#365dff]">
          <History className="w-3.5 h-3.5" />
          <span>CHANGELOG</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5]">
          {t.changelogTitle}
        </h1>
        <p className="text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
          {t.changelogSubtitle}
        </p>
      </header>

      <div className="space-y-8">
        {RELEASES.map((rel) => {
          const changes = isPt ? rel.changesPt : rel.changesEn;
          return (
            <article
              key={rel.version}
              className="p-6 rounded-xl bg-[#121212] border border-[#262626] space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1E1E1E] pb-3">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-semibold bg-[#365dff]/20 text-[#365dff] border border-[#365dff]/30">
                    {rel.version}
                  </span>
                  <h2 className="text-base font-semibold text-[#F5F5F5]">
                    {isPt ? rel.titlePt : rel.titleEn}
                  </h2>
                </div>
                <span className="text-xs text-[#71717A] font-mono shrink-0">
                  {isPt ? rel.datePt : rel.dateEn}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                {isPt ? rel.summaryPt : rel.summaryEn}
              </p>

              <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
                {changes.map((change, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#365dff] font-bold select-none">•</span>
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
};
