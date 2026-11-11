import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../locales/translations';

export const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto px-4 py-28 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-[#141414] border border-[#262626] mx-auto flex items-center justify-center text-[#3B82F6]">
        <AlertCircle className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono text-[#71717A] uppercase tracking-widest">
          ERRO 404
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-[#F5F5F5]">
          {t.pageNotFoundTitle}
        </h1>
        <p className="text-sm text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
          {t.pageNotFoundSubtitle}
        </p>
      </div>

      <div className="pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold shadow-lg shadow-[#3B82F6]/20 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.returnHome}</span>
        </Link>
      </div>
    </div>
  );
};
