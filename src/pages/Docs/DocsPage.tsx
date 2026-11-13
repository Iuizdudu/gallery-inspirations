import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';
import { useLanguage } from '../../locales/translations';
import { CATEGORIES } from '../../data/categories';
import { REFERENCES } from '../../data/references';

export const DocsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const isPt = language === 'pt-BR';

  const totalCategories = CATEGORIES.length;
  const totalReferences = REFERENCES.length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
      <header className="space-y-3 pb-6 border-b border-[#1E1E1E]">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono text-[#365dff]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{isPt ? 'DOCUMENTAÇÃO' : 'DOCUMENTATION'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5]">
          {t.docsTitle}
        </h1>
        <p className="text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
          {t.docsSubtitle}
        </p>
      </header>

      {/* 1. Philosophy */}
      <section className="space-y-4 text-sm text-[#A1A1AA] leading-relaxed">
        <h2 className="text-xl font-bold text-[#F5F5F5] tracking-tight">
          {isPt
            ? '1. Filosofia: Biblioteca de Conteúdo Textual'
            : '1. Philosophy: Text-First Editorial Archive'}
        </h2>
        <p>
          {isPt
            ? 'O Gallery Inspirations rejeita intencionalmente o modelo de galerias de screenshots e feeds de imagens inflados. Acreditamos que o estudo rigoroso de design e engenharia web reside na compreensão dos padrões arquiteturais, fluxos de interação, ergonomia de componentes e decisões tipográficas.'
            : 'Gallery Inspirations intentionally rejects screenshot-heavy galleries and bloated image feeds. We believe rigorous study of design and web engineering comes from understanding architectural patterns, interaction flows, component ergonomics, and typographic decisions.'}
        </p>
        <p>
          {isPt
            ? 'Ao apresentar referências puramente em formato textual estruturado, eliminamos o ruído visual e priorizamos a leitura focada, velocidade instantânea de carregamento e acesso direto aos websites em produção.'
            : 'By presenting references in a purely structured textual format, we eliminate visual noise and prioritize focused reading, instant loading speed, and direct access to live production websites.'}
        </p>
      </section>

      {/* 2. Curation Criteria */}
      <section className="space-y-4 text-sm text-[#A1A1AA] leading-relaxed">
        <h2 className="text-xl font-bold text-[#F5F5F5] tracking-tight">
          {isPt ? '2. Critérios de Curadoria' : '2. Curation Criteria'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#121212] border border-[#262626] space-y-2">
            <div className="flex items-center gap-2 text-white font-medium">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>{isPt ? 'O que é aceito' : 'What is accepted'}</span>
            </div>
            <ul className="text-xs text-[#71717A] space-y-1 list-disc list-inside">
              {isPt ? (
                <>
                  <li>Ferramentas, utilitários e bibliotecas de código ativas</li>
                  <li>Design systems com documentação pública</li>
                  <li>Websites autorais e landing pages de alto padrão</li>
                  <li>Projetos com inovação tipográfica ou de interação comprovada</li>
                </>
              ) : (
                <>
                  <li>Active tools, utilities, and open-source UI libraries</li>
                  <li>Design systems with clear public documentation</li>
                  <li>Authorial websites and high-craft landing pages</li>
                  <li>Projects showing thoughtful typography or interaction craft</li>
                </>
              )}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#121212] border border-[#262626] space-y-2">
            <div className="flex items-center gap-2 text-white font-medium">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>{isPt ? 'O que é rejeitado' : 'What is rejected'}</span>
            </div>
            <ul className="text-xs text-[#71717A] space-y-1 list-disc list-inside">
              {isPt ? (
                <>
                  <li>Spam, links com paywall agressivo ou popups abusivos</li>
                  <li>Projetos abandonados sem links verificados</li>
                  <li>Cards ou mockups falsos que não representam produtos reais</li>
                  <li>Links gerados por inteligência artificial sem curadoria humana</li>
                </>
              ) : (
                <>
                  <li>Spam, affiliate redirects, aggressive paywalls, or intrusive popups</li>
                  <li>Abandoned projects or broken production links</li>
                  <li>Fake concept shots that do not link to real live products</li>
                  <li>Unverified AI-generated links without human curation</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. AI Reference Prompt */}
      <section className="space-y-4 text-sm text-[#A1A1AA] leading-relaxed">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-5 h-5 text-[#365dff]" />
          <h2 className="text-xl font-bold text-[#F5F5F5] tracking-tight">
            {isPt
              ? '3. AI Reference Prompt (Prompts para Agentes de IA)'
              : '3. AI Reference Prompt'}
          </h2>
        </div>
        <p>
          {isPt
            ? 'Cada página de categoria disponibiliza o botão Copy For AI no cabeçalho. Com um clique, ele gera e copia um prompt completo em inglês (AI Reference Prompt) pronto para ser colado em qualquer agente de IA ou editor assistido.'
            : 'Every category page features a Copy For AI button in its header. With a single click, it generates and copies a complete English AI Reference Prompt ready to paste into any AI coding agent or assistant.'}
        </p>
        <div className="p-4 rounded-xl bg-[#121212] border border-[#262626] space-y-3 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#A1A1AA]">
            <div className="space-y-1">
              <p className="font-medium text-[#F5F5F5]">
                {isPt ? 'Contexto por categoria' : 'Category-aware context'}
              </p>
              <p className="text-[#71717A] leading-relaxed">
                {isPt
                  ? 'Cada categoria gera instruções específicas para seu domínio (ex.: eCommerce, SaaS, Landing Pages, Motion, Navbar) com áreas de análise dedicadas.'
                  : 'Each category tailors task context, analysis areas, and implementation guidance to its specific domain (e.g., eCommerce, SaaS, Landing Pages, Motion, Navbar).'}
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-[#F5F5F5]">
                {isPt ? '100% automático e completo' : 'Fully automatic & complete'}
              </p>
              <p className="text-[#71717A] leading-relaxed">
                {isPt
                  ? 'O prompt reúne automaticamente todas as referências oficiais da categoria (mesmo quando a busca interna está filtrada), sem exigir cadastro manual de prompts pelos contribuidores.'
                  : 'Prompts automatically include every official reference registered in the category (regardless of active search filters), without requiring contributors to write prompts manually.'}
              </p>
            </div>
          </div>
          <div className="pt-2 border-t border-[#1E1E1E] font-mono text-[11px] text-[#71717A]">
            {isPt
              ? 'Estrutura copiada: Context / Task · Mandatory Reference Rules · What to Analyze · Available References · Implementation Guidelines'
              : 'Copied structure: Context / Task · Mandatory Reference Rules · What to Analyze · Available References · Implementation Guidelines'}
          </div>
        </div>
      </section>

      {/* 4. Official Categories Matrix (Dynamic) */}
      <section className="space-y-4 text-sm text-[#A1A1AA] leading-relaxed">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <h2 className="text-xl font-bold text-[#F5F5F5] tracking-tight">
            {isPt
              ? `4. As ${totalCategories} Categorias Oficiais`
              : `4. The ${totalCategories} Official Categories`}
          </h2>
          <span className="text-xs font-mono text-[#71717A] tabular-nums">
            {isPt
              ? `${totalCategories} categorias · ${totalReferences} referências`
              : `${totalCategories} categories · ${totalReferences} references`}
          </span>
        </div>
        <p>
          {isPt
            ? 'O acervo é organizado dinamicamente nas taxonomias abaixo, cobrindo arquitetura visual, produtos digitais, tipografia, motion e engenharia frontend:'
            : 'The archive is dynamically indexed across the taxonomies below, covering visual craft, digital products, typography, motion, and frontend engineering:'}
        </p>
        <div className="p-4 bg-[#121212] border border-[#262626] rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1.5 font-mono text-xs tabular-nums">
            {CATEGORIES.map((cat, idx) => (
              <Link
                key={cat.id}
                to={`/category/${cat.slug}`}
                className="flex items-center gap-2 py-0.5 text-[#A1A1AA] hover:text-[#365dff] transition-colors truncate"
              >
                <span className="text-[#52525B] shrink-0">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <span className="truncate">{isPt ? cat.namePt : cat.nameEn}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Integration Notice */}
      <section className="p-6 rounded-xl bg-[#141414] border border-[#262626] space-y-3">
        <h3 className="text-base font-semibold text-white">
          {isPt ? 'Contribuições via GitHub' : 'Contributing via GitHub'}
        </h3>
        <p className="text-xs text-[#A1A1AA] leading-relaxed">
          {isPt
            ? 'O repositório do Gallery Inspirations é mantido de forma colaborativa através de Pull Requests. Consulte o nosso Guia de Contribuição para formatar novas referências ou propor novas categorias no padrão do catálogo.'
            : 'Gallery Inspirations is maintained collaboratively through GitHub Pull Requests. Check our Contribution Guide to format new references or propose new categories matching the catalog schema.'}
        </p>
        <div className="pt-2">
          <Link
            to="/guide"
            className="text-xs text-[#365dff] hover:text-[#5c7eff] hover:underline inline-flex items-center gap-1 font-medium"
          >
            <span>{isPt ? 'Ver Guia de Contribuição' : 'View Contribution Guide'}</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
