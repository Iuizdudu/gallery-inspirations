import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowUpDown, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { REFERENCES, Reference, getReferencesByCategory } from '../../data/references';
import { CATEGORIES, getCategoryById } from '../../data/categories';
import { ReferenceItem } from '../../components/ReferenceList/ReferenceItem';
import { ContributionBanner } from '../../components/ContributionButton/ContributionBanner';
import { CategoryIcon } from '../../components/Icons/CategoryIcon';
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
          ref.author.toLowerCase().includes(q) ||
          desc.toLowerCase().includes(q) ||
          (catName && catName.toLowerCase().includes(q)) ||
          ref.tags.some((tag) => tag.toLowerCase().includes(q))
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
        {/* Header Hero Section */}
        <section className="space-y-4 pt-2">
          {/* Top Identifier Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs font-medium text-[#A1A1AA]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span className="tracking-wider uppercase text-[11px] font-semibold text-[#F5F5F5]">
              {t.badge}
            </span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-[1.1] max-w-3xl">
            {t.heroTitlePrefix}{' '}
            <span className="text-[#3B82F6] block sm:inline">
              {t.heroTitleHighlight}
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-2xl pt-1">
            {t.heroDescription}
          </p>

          {/* Central Search Input with Ctrl+K shortcut */}
          <div className="pt-4 max-w-2xl">
            <div
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl bg-[#121212] hover:bg-[#161616] border border-[#262626] hover:border-[#3B82F6]/60 cursor-pointer transition-all shadow-sm group"
            >
              <div className="flex items-center gap-3 truncate">
                <Search className="w-4 h-4 text-[#71717A] group-hover:text-[#3B82F6] transition-colors shrink-0" />
                <span className="text-xs sm:text-sm text-[#71717A] truncate">
                  {t.searchPlaceholderMain}
                </span>
              </div>
              <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs text-[#A1A1AA] bg-[#1E1E1E] border border-[#2E2E2E] rounded font-mono">
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
                className="px-3 py-1.5 text-xs bg-[#121212] border border-[#262626] rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#3B82F6] cursor-pointer"
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
                      ? 'bg-[#181818] text-[#3B82F6] font-medium border border-[#262626]'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  {t.sortPopular}
                </button>
                <button
                  onClick={() => setSortBy('alpha')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    sortBy === 'alpha'
                      ? 'bg-[#181818] text-[#3B82F6] font-medium border border-[#262626]'
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
            <div className="w-8 h-0.5 bg-[#3B82F6] rounded-full mb-3" />

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
                  className="px-4 py-2 text-xs text-[#3B82F6] hover:underline"
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
                  className="p-4 rounded-xl bg-[#121212] hover:bg-[#161616] border border-[#262626] hover:border-[#3B82F6]/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-[#181818] text-[#71717A] group-hover:text-[#3B82F6] transition-colors">
                          <CategoryIcon name={category.iconName} className="w-4 h-4" />
                        </span>
                        <span className="text-sm font-semibold text-[#F5F5F5] group-hover:text-[#3B82F6] transition-colors">
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
