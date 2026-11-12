import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowUpDown, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { REFERENCES, Reference, getReferencesByCategory } from '../../data/references';
import { CATEGORIES, getCategoryById } from '../../data/categories';
import { ReferenceItem } from '../../components/ReferenceList/ReferenceItem';
import { ContributionBanner } from '../../components/ContributionButton/ContributionBanner';
import { CategoryIcon } from '../../components/Icons/CategoryIcon';
import { ParticleText } from '../../components/ParticleText/ParticleText';
import { FlipWords } from '../../components/ui/flip-words';
import { useLanguage } from '../../locales/translations';

interface HomePageProps {
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenSearch }) => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'alpha'>('popular');

  // Filter and sort references
  const filteredReferences = useMemo(() => {
    let result = selectedCategory !== 'all' ? getReferencesByCategory(selectedCategory) : [...REFERENCES];

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((ref) => {
        const cat = getCategoryById(ref.categoryId);
        const catName = language === 'pt-BR' ? cat?.namePt : cat?.nameEn;
        const desc = language === 'pt-BR' ? ref.descriptionPt : ref.descriptionEn;

        return (
          ref.title.toLowerCase().includes(q) ||
          desc.toLowerCase().includes(q) ||
          (catName && catName.toLowerCase().includes(q)) ||
          (ref.author && ref.author.toLowerCase().includes(q)) ||
          (ref.tags && ref.tags.some((tag) => tag.toLowerCase().includes(q)))
        );
      });
    }

    // Sort
    if (sortBy === 'popular') {
      result.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    } else {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy, language]);

  return (
    <div className="relative min-h-screen">
      {/* Ambient Blue Glow at Top Right matching Stitch Mockup */}
      <div className="absolute top-0 right-0 w-[55vw] h-[450px] stitch-ambient-glow pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
        {/* Header Hero Section - Centered design matching reference */}
        <section className="flex flex-col items-center text-center space-y-3.5 pt-2 sm:pt-6 w-full">
          {/* Top Floating Glass Pill Badge with 4-Point Star */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121620]/90 border border-[#252E42] text-xs font-medium text-[#E4E4E7] shadow-lg shadow-black/40 backdrop-blur-md transition-all hover:border-[#365dff]/50">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-white shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
            >
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
            <span className="tracking-tight text-xs sm:text-[13px] text-[#F4F4F5]">
              {t.badge}
            </span>
          </div>

          {/* Monumental Centered Headline with React Bits ParticleText */}
          <div className="w-full max-w-4xl flex flex-col items-center">
            <span className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white block select-none">
              {t.heroTitlePrefix}
            </span>
            <div className="w-full h-[75px] sm:h-[95px] md:h-[115px] relative flex items-center justify-center my-0 sm:my-0.5">
              <ParticleText
                text="Gallery Inspirations"
                particleSize={2.5}
                density={3.4}
                color="#FFFFFF"
                highlightColor="#365dff"
                highlightMode="motion"
                shape="circle"
                intro="gather"
                scatter={80}
                gatherDuration={1100}
                stagger={200}
                clickBurst={true}
                burstStrength={0.9}
                pointerRepel={38}
                repelRadius={105}
                idleDrift={0}
                trigger="mount"
                fontSize="clamp(2.4rem, 6.4vw, 4.8rem)"
                fontWeight={900}
                fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                glow={false}
                className="w-full h-full cursor-pointer"
              />
            </div>
          </div>

          {/* Centered Curated Description with FlipWords */}
          <div className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-3xl mx-auto pt-0.5 select-none overflow-hidden">
            {language === 'pt-BR' ? (
              <span>
                Uma coleção curada dos melhores recursos para designers e desenvolvedores explorarem inspiração, de{' '}
                <FlipWords
                  words={[
                    'landing pages modernas',
                    'componentes de UI',
                    'dashboards elegantes',
                    'sites premiados',
                    'portfólios criativos',
                    'design systems'
                  ]}
                  duration={2800}
                  className="text-white font-semibold drop-shadow-[0_0_12px_rgba(54,93,255,0.35)] !px-1 inline-block"
                />{' '}
                e muito mais.
              </span>
            ) : (
              <span>
                A curated collection of the finest resources for designers and developers to explore inspiration, from{' '}
                <FlipWords
                  words={[
                    'modern landing pages',
                    'UI components',
                    'sleek dashboards',
                    'award-winning sites',
                    'creative portfolios',
                    'design systems'
                  ]}
                  duration={2800}
                  className="text-white font-semibold drop-shadow-[0_0_12px_rgba(54,93,255,0.35)] !px-1 inline-block"
                />{' '}
                and beyond.
              </span>
            )}
          </div>

          {/* Full-width Premium Frosted White Glass Search Capsule with Ctrl+K shortcut */}
          <div className="pt-3 w-full">
            <div
              onClick={onOpenSearch}
              className="relative w-full flex items-center justify-between px-6 sm:px-7 py-4 sm:py-4.5 rounded-full cursor-pointer t-card group overflow-hidden bg-gradient-to-b from-white/[0.12] via-white/[0.08] to-white/[0.05] hover:from-white/[0.18] hover:via-white/[0.12] hover:to-white/[0.08] border border-white/25 hover:border-white/45 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.4),0_0_24px_0_rgba(255,255,255,0.06)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5),inset_0_1px_2px_0_rgba(255,255,255,0.6),0_0_32px_0_rgba(255,255,255,0.12)]"
            >
              {/* Top Glass Specular Reflection Highlight Line */}
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

              <div className="flex items-center gap-3.5 sm:gap-4 truncate">
                <Search className="w-5 h-5 text-white/80 group-hover:text-white transition-colors shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]" />
                <span className="text-sm sm:text-[15px] font-normal text-white/85 group-hover:text-white transition-colors truncate tracking-wide">
                  {t.searchPlaceholderMain}
                </span>
              </div>
              <kbd className="inline-flex items-center px-3 py-1 text-xs text-white bg-white/10 group-hover:bg-white/20 border border-white/25 group-hover:border-white/40 rounded-full font-mono shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] t-pill">
                Ctrl K
              </kbd>
            </div>
          </div>
        </section>

        {/* GitHub Contribution Callout Banner */}
        <section>
          <ContributionBanner />
        </section>

        {/* Catalog Section with Category Filter Tabs & Sorting */}
        <section className="space-y-6 pt-4">
          {/* Controls Bar: Category select, Inline search & Sort */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-4 border-b border-[#1E1E1E]">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-[#71717A] font-medium uppercase tracking-wider">
                {t.filterByCategory}:
              </span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-1.5 text-xs bg-[#121212] border border-[#262626] rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#365dff] cursor-pointer"
              >
                <option value="all">{t.allCategories} ({REFERENCES.length})</option>
                {CATEGORIES.map((cat) => {
                  const count = getReferencesByCategory(cat.id).length;
                  return (
                    <option key={cat.id} value={cat.id}>
                      {language === 'pt-BR' ? cat.namePt : cat.nameEn} ({count})
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex items-center gap-3 justify-end">
              <div className="flex items-center gap-1.5 text-xs text-[#71717A]">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <span>{t.sortBy}:</span>
                <button
                  onClick={() => setSortBy('popular')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    sortBy === 'popular'
                      ? 'bg-[#181818] text-[#365dff] font-medium border border-[#262626]'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  {t.sortPopular}
                </button>
                <button
                  onClick={() => setSortBy('alpha')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    sortBy === 'alpha'
                      ? 'bg-[#181818] text-[#365dff] font-medium border border-[#262626]'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  {t.sortAlphabetical}
                </button>
              </div>
            </div>
          </div>

          {/* Active Section Header */}
          <div className="space-y-1">
            {/* Blue indicator line */}
            <div className="w-8 h-0.5 bg-[#365dff] rounded-full mb-3" />

            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5]">
                {selectedCategory === 'all'
                  ? t.featuredReferencesTitle
                  : language === 'pt-BR'
                  ? CATEGORIES.find((c) => c.id === selectedCategory)?.namePt
                  : CATEGORIES.find((c) => c.id === selectedCategory)?.nameEn}
              </h2>
              <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-[#141414] border border-[#262626] text-[#A1A1AA] tabular-nums">
                {filteredReferences.length}{' '}
                {filteredReferences.length === 1 ? t.referenceCountSingle : t.referencesCount}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#71717A] max-w-2xl pt-1">
              {selectedCategory === 'all'
                ? 'Curadoria de ferramentas, arquivos e bibliotecas selecionadas para inspeção de código e design.'
                : language === 'pt-BR'
                ? CATEGORIES.find((c) => c.id === selectedCategory)?.descriptionPt
                : CATEGORIES.find((c) => c.id === selectedCategory)?.descriptionEn}
            </p>
          </div>

          {/* Text-Only Editorial Reference List */}
          <div className="divide-y divide-[#1E1E1E]">
            {filteredReferences.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <p className="text-sm text-[#71717A]">{t.noReferencesFound}</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 text-xs text-[#365dff] hover:underline"
                >
                  Limpar filtros
                </button>
              </div>
            ) : (
              filteredReferences.map((ref, index) => (
                <ReferenceItem key={ref.id} reference={ref} index={index} />
              ))
            )}
          </div>
        </section>

        {/* Index of All 18 Categories */}
        <section id="categories-index" className="pt-12 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#F5F5F5] tracking-tight">
              {t.exploreCategoriesTitle}
            </h3>
            <p className="text-xs text-[#71717A]">
              Explore todas as categorias catalogadas da biblioteca.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CATEGORIES.map((category) => {
              const count = getReferencesByCategory(category.id).length;
              const catName = language === 'pt-BR' ? category.namePt : category.nameEn;
              const catDesc = language === 'pt-BR' ? category.descriptionPt : category.descriptionEn;

              return (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="p-4 rounded-xl bg-[#121212] hover:bg-[#161616] border border-[#262626] hover:border-[#365dff]/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-[#181818] text-[#71717A] group-hover:text-[#365dff] transition-colors">
                          <CategoryIcon name={category.iconName} className="w-4 h-4" />
                        </span>
                        <span className="text-sm font-semibold text-[#F5F5F5] group-hover:text-[#365dff] transition-colors">
                          {catName}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#71717A] tabular-nums">
                        {count}
                      </span>
                    </div>

                    <p className="text-xs text-[#71717A] line-clamp-2 leading-relaxed">
                      {catDesc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-[#1a1a1a] flex items-center justify-between text-[11px] text-[#A1A1AA] group-hover:text-white">
                    <span>Acessar categoria</span>
                    <span>→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
