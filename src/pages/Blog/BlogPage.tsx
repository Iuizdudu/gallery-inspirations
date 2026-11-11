import React from 'react';
import { Newspaper, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../locales/translations';

export const BlogPage: React.FC = () => {
  const { t } = useLanguage();

  const articles = [
    {
      id: 'por-que-apenas-texto',
      title: 'Por Que um Arquivo de Design em Formato Estritamente Textual?',
      date: 'Novembro 2026',
      readTime: '4 min de leitura',
      author: 'Equipe Editorial',
      excerpt: 'Imagens em galerias criam a ilusão de compreensão instantânea, mas ocultam o código, a responsividade, o comportamento sob zoom e as decisões de acessibilidade.',
    },
    {
      id: 'anatomia-de-uma-landing-page',
      title: 'A Anatomia Oculta das Melhores Landing Pages do Ecossistema',
      date: 'Outubro 2026',
      readTime: '6 min de leitura',
      author: 'Curadoria Inspiration Archive',
      excerpt: 'Uma dissecação estrutural de como Lapa Ninja, LandingHero e SaaSPages organizam blocos de valor, garantindo altas taxas de conversão sem comprometer a elegância.',
    },
    {
      id: 'evolucao-dos-design-systems',
      title: 'Design Systems Abertos: O Que Aprendemos com 50+ Bibliotecas',
      date: 'Setembro 2026',
      readTime: '5 min de leitura',
      author: 'Inspiration Archive Lab',
      excerpt: 'Comparativo sobre como Design Systems modernos lidam com tokens de cores em modo escuro, física de microinterações e hierarquias semânticas.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
      <header className="space-y-3 pb-6 border-b border-[#1E1E1E]">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono text-[#3B82F6]">
          <Newspaper className="w-3.5 h-3.5" />
          <span>CADERNO EDITORIAL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5]">
          {t.blogTitle}
        </h1>
        <p className="text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
          {t.blogSubtitle}
        </p>
      </header>

      <div className="space-y-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="p-6 rounded-xl bg-[#121212] border border-[#262626] hover:border-[#3B82F6]/50 transition-all space-y-3 group"
          >
            <div className="flex items-center gap-2 text-xs text-[#71717A]">
              <span>{article.date}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#A1A1AA]">{article.author}</span>
            </div>

            <h2 className="text-lg font-bold text-[#F5F5F5] group-hover:text-[#3B82F6] transition-colors">
              {article.title}
            </h2>

            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              {article.excerpt}
            </p>

            <div className="pt-2">
              <span className="text-xs font-medium text-[#3B82F6] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Ler ensaio completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
