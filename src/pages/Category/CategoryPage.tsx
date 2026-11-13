import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search, ArrowUpDown, ChevronRight } from 'lucide-react';
import { getCategoryBySlug, CATEGORIES } from '../../data/categories';
import { getReferencesByCategory, Reference } from '../../data/references';
import { ReferenceItem } from '../../components/ReferenceList/ReferenceItem';
import { CategoryIcon } from '../../components/Icons/CategoryIcon';
import { AiPromptButton } from '../../components/AiPromptButton/AiPromptButton';
import { useLanguage } from '../../locales/translations';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'alpha'>('popular');

  const category = getCategoryBySlug(slug || '');

  const categoryName = category
    ? language === 'pt-BR'
      ? category.namePt
      : category.nameEn
    : '';

  const categoryDesc = category
    ? language === 'pt-BR'
      ? category.descriptionPt
      : category.descriptionEn
    : '';

  // Get references and apply search & sort
  const filteredReferences = useMemo(() => {
    if (!category) return [];

    let refs = getReferencesByCategory(category.id);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      refs = refs.filter(
        (ref) =>
          ref.title.toLowerCase().includes(q) ||
          (language === 'pt-BR' ? ref.descriptionPt : ref.descriptionEn).toLowerCase().includes(q) ||
          (ref.author && ref.author.toLowerCase().includes(q)) ||
          (ref.tags && ref.tags.some((tag) => tag.toLowerCase().includes(q)))
      );
    }

    if (sortBy === 'popular') {
      refs.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    } else {
      refs.sort((a, b) => a.title.localeCompare(b.title));
    }

    return refs;
  }, [category, searchQuery, sortBy, language]);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-[#F5F5F5]">Categoria não encontrada</h1>
        <p className="text-sm text-[#71717A]">
          A categoria &quot;{slug}&quot; não consta no arquivo oficial.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181818] border border-[#262626] text-xs text-[#365dff] hover:bg-[#222222]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.backToHome}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#71717A]">
        <Link to="/" className="hover:text-[#F5F5F5] transition-colors">
          {t.home}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#A1A1AA]">{categoryName}</span>
      </nav>

      {/* Category Header */}
      <header className="pb-6 border-b border-[#1E1E1E]">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-3 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="p-2 rounded-lg bg-[#141414] border border-[#262626] text-[#365dff] shrink-0">
                <CategoryIcon name={category.iconName} className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F5]">
                  {categoryName}
                </h1>
                <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-[#141414] border border-[#262626] text-[#A1A1AA] tabular-nums">
                  {filteredReferences.length}{' '}
                  {filteredReferences.length === 1 ? t.referenceCountSingle : t.referencesCount}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
              {categoryDesc}
            </p>
          </div>

          <div className="shrink-0 sm:pt-0.5">
            <AiPromptButton category={category} />
          </div>
        </div>
      </header>

      {/* Search and Sort Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search inside this category */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Buscar em ${categoryName}...`}
            className="w-full pl-9 pr-4 py-2 text-xs bg-[#121212] border border-[#262626] rounded-lg text-[#F5F5F5] placeholder-[#71717A] focus:outline-none focus:border-[#365dff]"
          />
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-2 text-xs text-[#71717A] self-end sm:self-auto">
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

      {/* References Textual List */}
      <main className="divide-y divide-[#1E1E1E]">
        {filteredReferences.length === 0 ? (
          <div className="py-20 text-center space-y-3">
            <p className="text-sm text-[#71717A]">{t.noReferencesFound}</p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#365dff] hover:underline"
              >
                Limpar busca
              </button>
            )}
          </div>
        ) : (
          filteredReferences.map((ref, index) => (
            <ReferenceItem key={ref.id} reference={ref} index={index} />
          ))
        )}
      </main>
    </div>
  );
};
