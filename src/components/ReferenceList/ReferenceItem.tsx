import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Reference } from '../../data/references';
import { getCategoryById } from '../../data/categories';
import { useLanguage } from '../../locales/translations';

interface ReferenceItemProps {
  reference: Reference;
  index: number;
}

export const ReferenceItem: React.FC<ReferenceItemProps> = ({ reference, index }) => {
  const { language, t } = useLanguage();
  const category = getCategoryById(reference.categoryId);
  const categoryName = language === 'pt-BR' ? category?.namePt : category?.nameEn;
  const description = language === 'pt-BR' ? reference.descriptionPt : reference.descriptionEn;

  // Format index as 01., 02., etc.
  const formattedIndex = String(index + 1).padStart(2, '0') + '.';

  return (
    <article className="py-5 sm:py-6 border-b border-[#1E1E1E] transition-colors group">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left Side: Number, Title, Description, Author & Category */}
        <div className="flex items-start gap-4 sm:gap-6 flex-1 min-w-0">
          {/* Index Number */}
          <span className="text-sm sm:text-base font-mono text-[#71717A] pt-0.5 select-none shrink-0 tabular-nums">
            {formattedIndex}
          </span>

          <div className="flex-1 min-w-0">
            {/* Title with link */}
            <div className="flex items-center gap-2 flex-wrap">
              <Link
                to={`/reference/${reference.id}`}
                className="text-base sm:text-lg font-semibold text-[#3B82F6] hover:text-[#60A5FA] transition-colors inline-flex items-center gap-1.5"
              >
                <span>{reference.title}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1.5 leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Author and Category Meta */}
            <div className="flex items-center gap-2 mt-2 text-xs text-[#71717A] flex-wrap">
              <span className="text-[#A1A1AA]">{reference.author}</span>
              <span aria-hidden="true">·</span>
              {category && (
                <Link
                  to={`/category/${category.slug}`}
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  {categoryName}
                </Link>
              )}
              {reference.year && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{reference.year}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Tags and Quick Action Links */}
        <div className="flex flex-wrap md:flex-col lg:flex-row items-start md:items-end lg:items-center gap-3 sm:gap-4 shrink-0 pl-10 md:pl-0">
          {/* Tags */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {reference.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] rounded-md bg-[#161616] border border-[#262626] text-[#A1A1AA]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 text-xs font-medium">
            <Link
              to={`/reference/${reference.id}`}
              className="inline-flex items-center gap-1 text-[#3B82F6] hover:text-[#60A5FA] transition-colors py-1"
            >
              <span>{t.detailsAction}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={reference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#A1A1AA] hover:text-white transition-colors py-1"
              title={`${t.visitAction} ${reference.title}`}
            >
              <span>{t.visitAction}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
