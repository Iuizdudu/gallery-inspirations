import React from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../locales/translations';
import { GITHUB_REPO_URL } from '../../data/config';

export const ContributionBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#121212] border border-[#262626] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-[#333333]">
      <div className="flex items-start sm:items-center gap-4">
        {/* GitHub circle mark */}
        <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center shrink-0">
          <Github className="w-6 h-6 text-white" />
        </div>

        <div>
          <h2 className="text-base font-semibold text-[#F5F5F5] leading-snug">
            {t.contributeTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1 max-w-xl">
            {t.contributeSubtitle}
          </p>
        </div>
      </div>

      <a
        href={GITHUB_REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#181818] hover:bg-[#222222] border border-[#2E2E2E] hover:border-[#3B82F6]/60 transition-all duration-150 shrink-0 group"
      >
        <Github className="w-4 h-4 text-white" />
        <span>{t.contributeButton}</span>
        <ArrowRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
      </a>
    </div>
  );
};
