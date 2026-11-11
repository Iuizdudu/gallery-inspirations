import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, ShieldAlert, Sparkles, Terminal } from 'lucide-react';
import { useLanguage } from '../../locales/translations';
import { GITHUB_REPO_URL } from '../../data/config';

export const DocsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
      <header className="space-y-3 pb-6 border-b border-[#1E1E1E]">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono text-[#3B82F6]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>DOCUMENTAÇÃO</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5]">
          {t.docsTitle}
        </h1>
        <p className="text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
          {t.docsSubtitle}
        </p>
      </header>

      {/* Philosophy */}
      <section className="space-y-4 text-sm text-[#A1A1AA] leading-relaxed">
        <h2 className="text-xl font-bold text-[#F5F5F5] tracking-tight">
          1. Filosofia: Biblioteca de Conteúdo Textual
        </h2>
        <p>
          O Inspiration Archive rejeita intencionalmente o modelo de galerias de screenshots e feeds de imagens inflados. Acreditamos que o estudo rigoroso de design e engenharia web reside na compreensão dos padrões arquiteturais, fluxos de interação, ergonomia de componentes e decisões tipográficas.
        </p>
        <p>
          Ao apresentar referências puramente em formato textual estruturado, eliminamos o ruído visual e priorizamos a leitura focada, velocidade instantânea de carregamento e acesso direto aos websites em produção.
        </p>
      </section>

      {/* Taxonomy & Criteria */}
      <section className="space-y-4 text-sm text-[#A1A1AA] leading-relaxed">
        <h2 className="text-xl font-bold text-[#F5F5F5] tracking-tight">
          2. Critérios de Curadoria
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#121212] border border-[#262626] space-y-2">
            <div className="flex items-center gap-2 text-white font-medium">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>O que é aceito</span>
            </div>
            <ul className="text-xs text-[#71717A] space-y-1 list-disc list-inside">
              <li>Ferramentas, utilitários e bibliotecas de código ativas</li>
              <li>Design systems com documentação pública</li>
              <li>Websites autorais e landing pages de alto padrão</li>
              <li>Projetos com inovação tipográfica ou de interação comprovada</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#121212] border border-[#262626] space-y-2">
            <div className="flex items-center gap-2 text-white font-medium">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>O que é rejeitado</span>
            </div>
            <ul className="text-xs text-[#71717A] space-y-1 list-disc list-inside">
              <li>Spam, links com paywall agressivo ou popups abusivos</li>
              <li>Projetos abandonados sem links verificados</li>
              <li>Cards ou mockups falsos que não representam produtos reais</li>
              <li>Links gerados por inteligência artificial sem curadoria humana</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 18 Categories Matrix */}
      <section className="space-y-4 text-sm text-[#A1A1AA] leading-relaxed">
        <h2 className="text-xl font-bold text-[#F5F5F5] tracking-tight">
          3. As 18 Categorias Oficiais
        </h2>
        <p>
          O repositório é indexado de forma fixa em 18 taxonomias essenciais cobrindo todo o ciclo de vida digital:
        </p>
        <div className="p-4 bg-[#121212] border border-[#262626] rounded-xl font-mono text-xs text-[#A1A1AA] space-y-1">
          <p>01. Landing Pages · 02. SaaS · 03. UI &amp; UX · 04. Onboarding</p>
          <p>05. Componentes · 06. Web · 07. eCommerce · 08. Mobile</p>
          <p>09. Modo Escuro · 10. Navegação · 11. Rodapé · 12. Páginas 404</p>
          <p>13. Dashboards · 14. Branding · 15. Tipografia · 16. Paletas de Cores</p>
          <p>17. Animações · 18. Portfólios</p>
        </div>
      </section>

      {/* GitHub Integration Notice */}
      <section className="p-6 rounded-xl bg-[#141414] border border-[#262626] space-y-3">
        <h3 className="text-base font-semibold text-white">Contribuições via GitHub</h3>
        <p className="text-xs text-[#A1A1AA]">
          O repositório do Inspiration Archive é mantido de forma colaborativa através de Pull Requests. Consulte o nosso Guia de Contribuição para formatar seus dados no padrão do catálogo.
        </p>
        <div className="pt-2">
          <Link
            to="/guide"
            className="text-xs text-[#3B82F6] hover:underline inline-flex items-center gap-1 font-medium"
          >
            <span>Ver Guia de Contribuição</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
