import React from 'react';
import { History, Sparkles, Tag } from 'lucide-react';
import { useLanguage } from '../../locales/translations';

export const ChangelogPage: React.FC = () => {
  const { t } = useLanguage();

  const releases = [
    {
      version: 'v1.0.0',
      date: 'Novembro 2026',
      title: 'Lançamento Inicial do Inspiration Archive',
      summary: 'Reestruturação completa da biblioteca com 18 categorias oficiais, modo escuro nativo, Command Palette global e catálogo textual sem ruído visual.',
      changes: [
        'Implementação de 18 categorias oficiais de design e desenvolvimento',
        'Acervo com dezenas de referências reais verificadas',
        'Busca global instantânea no atalho Ctrl + K com navegação por teclado',
        'Suporte bilíngue integrado (Português do Brasil e Inglês)',
        'Páginas de detalhes técnicos estilo documentação editorial (Fumadocs)',
        'Fluxo de contribuição centralizado no GitHub sem cadastros ou uploads',
      ],
    },
    {
      version: 'v0.9.0-beta',
      date: 'Outubro 2026',
      title: 'Validação da Arquitetura Textual',
      summary: 'Definição do modelo editorial puramente textual, eliminando thumbnails, galerias de imagens pesadas e cards decorativos.',
      changes: [
        'Padronização da paleta monocromática com acento em azul elétrico #3B82F6',
        'Hierarquia tipográfica em Geist e Inter com números tabulares',
        'Barra de navegação suspensa em formato de pílula central',
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
      <header className="space-y-3 pb-6 border-b border-[#1E1E1E]">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono text-[#3B82F6]">
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

      <div className="space-y-10">
        {releases.map((rel) => (
          <article
            key={rel.version}
            className="p-6 rounded-xl bg-[#121212] border border-[#262626] space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1E1E1E] pb-3">
              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded text-xs font-mono font-semibold bg-[#3B82F6]/20 text-[#3B82F6] border border-[#3B82F6]/30">
                  {rel.version}
                </span>
                <h2 className="text-base font-semibold text-[#F5F5F5]">
                  {rel.title}
                </h2>
              </div>
              <span className="text-xs text-[#71717A] font-mono">
                {rel.date}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              {rel.summary}
            </p>

            <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
              {rel.changes.map((change, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#3B82F6] font-bold select-none">•</span>
                  <span>{change}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};
