import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../locales/translations';
import { GITHUB_REPO_URL } from '../../data/config';

export const ContributionBanner: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="w-full bg-[#121212] border border-[#262626] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 t-card hover:border-[#38BDF8]/40 hover:shadow-xl hover:shadow-black/50">
      <div className="flex items-start sm:items-center gap-4">
        {/* GitHub circle mark */}
        <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center shrink-0">
          <Github className="w-6 h-6 text-white" />
        </div>

        <div>
          <h2 className="text-base font-semibold text-[#F5F5F5] leading-snug">
            {t.contributeTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1 max-w-2xl leading-relaxed">
            {language === 'pt-BR' ? (
              <>
                Ajude a expandir nossa biblioteca compartilhando referências de qualidade através de Pull Requests no GitHub seguindo as instruções no{' '}
                <Link
                  to="/guide"
                  className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#0C1A30] border border-[#1D4ED8]/40 hover:border-[#38BDF8]/60 text-[#38BDF8] hover:text-[#7DD3FC] font-mono text-xs font-medium shadow-sm t-pill"
                  title="Acessar o guia de contribuição"
                >
                  contributing.md
                </Link>
                .
              </>
            ) : (
              <>
                Help expand our library by sharing quality references through Pull Requests on GitHub following the guidelines in{' '}
                <Link
                  to="/guide"
                  className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#0C1A30] border border-[#1D4ED8]/40 hover:border-[#38BDF8]/60 text-[#38BDF8] hover:text-[#7DD3FC] font-mono text-xs font-medium shadow-sm t-pill"
                  title="View contributing guide"
                >
                  contributing.md
                </Link>
                .
              </>
            )}
          </p>
        </div>
      </div>

      <a
        href={GITHUB_REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#181818] hover:bg-[#222222] border border-[#2E2E2E] hover:border-[#38BDF8]/60 shrink-0 t-button group"
      >
        <Github className="w-4 h-4 text-white" />
        <span>{t.contributeButton}</span>
        <ArrowRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};
