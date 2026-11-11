import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ExternalLink,
  ChevronRight,
  ArrowLeft,
  Copy,
  Check,
  Tag,
  Calendar,
  Sparkles,
  User,
  Folder,
  ArrowRight,
} from 'lucide-react';
import { getReferenceById, getReferencesByCategory } from '../../data/references';
import { getCategoryById } from '../../data/categories';
import { useLanguage } from '../../locales/translations';
import SpecularButton from '../../components/SpecularButton/SpecularButton';

export const ReferenceDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const reference = getReferenceById(id || '');
  const category = reference ? getCategoryById(reference.categoryId) : undefined;

  const categoryName = category
    ? language === 'pt-BR'
      ? category.namePt
      : category.nameEn
    : '';

  const description = reference
    ? language === 'pt-BR'
      ? reference.descriptionPt
      : reference.descriptionEn
    : '';

  const detailedReview = reference
    ? language === 'pt-BR'
      ? reference.detailedReviewPt || reference.descriptionPt
      : reference.detailedReviewEn || reference.descriptionEn
    : '';

  // Related references from same category
  const relatedReferences = React.useMemo(() => {
    if (!reference) return [];
    return getReferencesByCategory(reference.categoryId)
      .filter((r) => r.id !== reference.id)
      .slice(0, 3);
  }, [reference]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!reference) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="text-2xl font-bold text-[#F5F5F5]">{t.pageNotFoundTitle}</h1>
        <p className="text-sm text-[#71717A]">{t.pageNotFoundSubtitle}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181818] border border-[#262626] text-xs text-[#3B82F6]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.backToHome}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#71717A] flex-wrap">
        <Link to="/" className="hover:text-[#F5F5F5] transition-colors">
          {t.home}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        {category && (
          <>
            <Link
              to={`/category/${category.slug}`}
              className="hover:text-[#F5F5F5] transition-colors"
            >
              {categoryName}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        )}
        <span className="text-[#A1A1AA] truncate">{reference.title}</span>
      </nav>

      {/* Main Header */}
      <header className="space-y-4 pb-8 border-b border-[#1E1E1E]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-[#3B82F6] font-mono">
              <span>{categoryName}</span>
              {reference.year && (
                <>
                  <span aria-hidden="true" className="text-[#71717A]">·</span>
                  <span className="text-[#71717A]">{reference.year}</span>
                </>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5]">
              {reference.title}
            </h1>
          </div>

          {/* Action Buttons: Visit External Site & Copy Link */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-[#141414] hover:bg-[#1A1A1A] border border-[#262626] text-[#A1A1AA] hover:text-white transition-colors"
              title="Copiar URL desta referência"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span>{t.linkCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t.shareReference}</span>
                </>
              )}
            </button>

            <SpecularButton
              as="a"
              href={reference.url}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              radius={10}
              tint="#38BDF8"
              tintOpacity={0.12}
              textColor="#ffffff"
              lineColor="#60A5FA"
              baseColor="#1E3A8A"
              intensity={1.2}
              idleIntensity={0.4}
              shineSize={14}
              shineFade={36}
              thickness={1.4}
              glow={1}
              followMouse={true}
              proximity={260}
              className="!px-4 !py-2 text-xs font-semibold shadow-lg shadow-blue-500/15 group"
            >
              <span>{t.viewOriginalWebsite}</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </SpecularButton>
          </div>
        </div>

        <p className="text-base text-[#A1A1AA] leading-relaxed max-w-2xl pt-2">
          {description}
        </p>
      </header>

      {/* Technical Spec Sheet & Metadata Grid (Fumadocs/Editorial style) */}
      <section className="bg-[#121212] border border-[#262626] rounded-xl p-6">
        <h2 className="text-xs font-semibold tracking-wider text-[#71717A] uppercase mb-4">
          Especificações do Recurso
        </h2>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          <div>
            <dt className="text-[#71717A] mb-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              <span>{t.authorLabel}</span>
            </dt>
            <dd className="font-medium text-[#F5F5F5]">{reference.author}</dd>
          </div>

          <div>
            <dt className="text-[#71717A] mb-1 flex items-center gap-1.5">
              <Folder className="w-3.5 h-3.5" />
              <span>{t.categoryLabel}</span>
            </dt>
            <dd className="font-medium text-[#3B82F6]">
              {category ? (
                <Link to={`/category/${category.slug}`} className="hover:underline">
                  {categoryName}
                </Link>
              ) : (
                '—'
              )}
            </dd>
          </div>

          <div>
            <dt className="text-[#71717A] mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.yearLabel}</span>
            </dt>
            <dd className="font-medium text-[#F5F5F5] font-mono">
              {reference.year || '2025'}
            </dd>
          </div>

          <div>
            <dt className="text-[#71717A] mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>{t.popularityLabel}</span>
            </dt>
            <dd className="font-medium text-[#F5F5F5] font-mono tabular-nums">
              {reference.popularity ? `${reference.popularity}/100` : 'Curado'}
            </dd>
          </div>
        </dl>

        {/* Tags */}
        <div className="mt-6 pt-4 border-t border-[#1E1E1E]">
          <span className="text-[11px] text-[#71717A] block mb-2">{t.tagsLabel}:</span>
          <div className="flex items-center gap-2 flex-wrap">
            {reference.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-md bg-[#181818] border border-[#262626] text-[#A1A1AA]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Curatorial Review Section */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[#F5F5F5] tracking-tight">
          {t.aboutResource}
        </h2>
        <div className="prose prose-invert max-w-none text-sm text-[#A1A1AA] leading-relaxed space-y-4 bg-[#0F0F0F] border border-[#1E1E1E] p-6 rounded-xl">
          <p>{detailedReview}</p>
          <div className="p-4 bg-[#141414] border border-[#222222] rounded-lg text-xs text-[#71717A] flex items-center justify-between">
            <span>{t.openExternalNotice}</span>
            <a
              href={reference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] hover:underline font-mono inline-flex items-center gap-1"
            >
              <span>{reference.url}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Related References in Same Category */}
      {relatedReferences.length > 0 && (
        <section className="space-y-4 pt-4 border-t border-[#1E1E1E]">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#F5F5F5]">
              {t.relatedReferences}
            </h3>
            {category && (
              <Link
                to={`/category/${category.slug}`}
                className="text-xs text-[#3B82F6] hover:underline inline-flex items-center gap-1"
              >
                <span>Ver todas em {categoryName}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedReferences.map((rel) => (
              <Link
                key={rel.id}
                to={`/reference/${rel.id}`}
                className="p-4 rounded-xl bg-[#121212] hover:bg-[#161616] border border-[#262626] hover:border-[#3B82F6]/50 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-1.5">
                  <span className="font-semibold text-sm text-[#F5F5F5] group-hover:text-[#3B82F6] transition-colors">
                    {rel.title}
                  </span>
                  <p className="text-xs text-[#71717A] line-clamp-2">
                    {language === 'pt-BR' ? rel.descriptionPt : rel.descriptionEn}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#1A1A1A] text-[11px] text-[#A1A1AA] flex items-center justify-between">
                  <span>{rel.author}</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
