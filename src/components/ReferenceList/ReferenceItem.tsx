import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Reference } from '../../data/references';
import { useLanguage } from '../../locales/translations';
import SpecularButton from '../SpecularButton/SpecularButton';

interface ReferenceItemProps {
  reference: Reference;
  index: number;
}

export const ReferenceItem: React.FC<ReferenceItemProps> = ({ reference, index }) => {
  const { language, t } = useLanguage();
  const description = language === 'pt-BR' ? reference.descriptionPt : reference.descriptionEn;

  // Format index as 01., 02., etc.
  const formattedIndex = String(index + 1).padStart(2, '0') + '.';

  return (
    <article className="py-5 sm:py-6 border-b border-[#1E1E1E] t-row-item hover:bg-[#121212]/50 px-3 sm:px-4 rounded-xl group">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left Side: Number, Title, Description, Author & Category */}
        <div className="flex items-start gap-4 sm:gap-6 flex-1 min-w-0">
          {/* Index Number */}
          <span className="text-sm sm:text-base font-mono text-[#71717A] pt-0.5 select-none shrink-0 tabular-nums">
            {formattedIndex}
          </span>

          <div className="flex-1 min-w-0">
            {/* Title with direct external link */}
            <div className="flex items-center gap-2 flex-wrap">
              <a
                href={reference.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-semibold text-[#38BDF8] hover:text-[#93C5FD] transition-colors inline-flex items-center gap-1.5 group/link"
                title={`${t.visitAction} ${reference.title}`}
              >
                <span>{reference.title}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1.5 leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>

        {/* Right Side: Direct Specular Visit Button */}
        <div className="flex items-center gap-2 text-xs font-medium shrink-0 pl-10 sm:pl-0">
            <SpecularButton
              as="a"
              href={reference.url}
              target="_blank"
              rel="noopener noreferrer"
              size="xs"
              radius={8}
              tint="#ffffff"
              tintOpacity={0.05}
              textColor="#D4D4D8"
              lineColor="#38BDF8"
              baseColor="#3F3F46"
              intensity={1}
              idleIntensity={0.25}
              shineSize={14}
              shineFade={32}
              thickness={1.1}
              glow={0.7}
              followMouse={true}
              proximity={180}
              title={`${t.visitAction} ${reference.title}`}
              className="!py-1.5 !px-3 text-xs font-medium hover:text-white"
            >
              <span>{t.visitAction}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </SpecularButton>
          </div>
        </div>
      </article>
  );
};
