import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowUpRight, Search, Sparkles, BookOpen, Mail, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../locales/translations';
import { GITHUB_REPO_URL, APP_CONFIG } from '../../data/config';
import { RainbowButton } from '../RainbowButton/RainbowButton';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const handleOpenSearch = () => {
    // Trigger global Ctrl+K search event
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
  };

  const isPt = language === 'pt-BR';

  const navLinks = isPt
    ? [
        { num: '01', label: 'Início', path: '/' },
        { num: '02', label: 'Guia de Contribuição', path: '/guide' },
        { num: '03', label: 'Documentação', path: '/docs' },
        { num: '04', label: 'Changelog', path: '/changelog' },
      ]
    : [
        { num: '01', label: 'Home', path: '/' },
        { num: '02', label: 'Contribution Guide', path: '/guide' },
        { num: '03', label: 'Documentation', path: '/docs' },
        { num: '04', label: 'Changelog', path: '/changelog' },
      ];

  const categoryLinks = isPt
    ? [
        { label: 'Landing Pages', path: '/category/landing' },
        { label: 'Componentes UI', path: '/category/component' },
        { label: 'SaaS & Produtos', path: '/category/saas' },
        { label: 'Modo Escuro', path: '/category/dark-mode' },
        { label: 'Navegação (Navbars)', path: '/category/navbar' },
      ]
    : [
        { label: 'Landing Pages', path: '/category/landing' },
        { label: 'UI Components', path: '/category/component' },
        { label: 'SaaS & Products', path: '/category/saas' },
        { label: 'Dark Mode', path: '/category/dark-mode' },
        { label: 'Navigation & Menus', path: '/category/navbar' },
      ];

  return (
    <footer className="relative mt-24 border-t border-white/[0.08] bg-[#050505] text-[#A1A1AA] overflow-hidden select-none">
      {/* Background Subtle Giant Watermark (inspired by DevStart reference) */}
      <div 
        className="absolute inset-x-0 bottom-0 pointer-events-none select-none flex justify-center items-end opacity-[0.025] overflow-hidden leading-none z-0"
        aria-hidden="true"
      >
        <span className="text-[12vw] sm:text-[14vw] font-black uppercase tracking-tighter text-white whitespace-nowrap translate-y-1/4">
          INSPIRATIONS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.06]">
          {/* Col 1: Brand, Punchy Headline & CTA (inspired by Firsight reference) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo Badge */}
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#365dff] to-[#60A5FA] flex items-center justify-center text-white shadow-lg shadow-[#365dff]/25 group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>
              <span className="font-bold text-lg text-white tracking-tight group-hover:text-white transition-colors">
                Gallery Inspirations
              </span>
            </Link>

            {/* Impactful Tagline */}
            <h3 className="text-xl sm:text-2xl font-light text-white leading-snug max-w-md">
              {isPt ? (
                <>
                  Buscando algo <span className="font-bold text-white">fora do padrão</span>? Explore nosso catálogo.
                </>
              ) : (
                <>
                  Looking for something <span className="font-bold text-white">extraordinary</span>? Explore our catalog.
                </>
              )}
            </h3>

            <p className="text-xs text-[#71717A] max-w-sm leading-relaxed">
              {isPt
                ? 'Biblioteca colaborativa de código aberto com a curadoria das melhores referências de design, engenharia web e interfaces do mundo.'
                : 'Open-source collaborative library curating premier design, web engineering, and digital interface references worldwide.'}
            </p>

            {/* Action CTA Button + Quick Icon Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <RainbowButton count={11} />

              {/* Circular Action Buttons (inspired by DevStart reference) */}
              <div className="flex items-center gap-2">
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#121214] border border-[#27272a] hover:border-white/30 text-[#A1A1AA] hover:text-white flex items-center justify-center transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleOpenSearch}
                  className="w-10 h-10 rounded-full bg-[#121214] border border-[#27272a] hover:border-white/30 text-[#A1A1AA] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  title={isPt ? "Buscar (Ctrl+K)" : "Search (Ctrl+K)"}
                >
                  <Search className="w-4 h-4" />
                </button>

                <Link
                  to="/guide"
                  className="w-10 h-10 rounded-full bg-[#121214] border border-[#27272a] hover:border-white/30 text-[#A1A1AA] hover:text-white flex items-center justify-center transition-colors"
                  title={isPt ? "Guia" : "Guide"}
                >
                  <Sparkles className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Col 2: Numbered Navigation (inspired by Firsight reference /01, /02) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-mono tracking-widest text-[#71717A] uppercase">
              {isPt ? 'Navegação' : 'Navigation'}
            </h4>
            <ul className="space-y-3 text-xs">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center text-[#D4D4D8] hover:text-white transition-colors"
                  >
                    <span className="font-mono text-[#365dff] group-hover:text-[#60A5FA] mr-2 text-[11px] transition-colors">
                      /{item.num}
                    </span>
                    <span className="group-hover:underline underline-offset-4 decoration-white/20">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Categorias em Destaque (with ↗ arrow) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono tracking-widest text-[#71717A] uppercase">
              {isPt ? 'Categorias' : 'Categories'}
            </h4>
            <ul className="space-y-3 text-xs">
              {categoryLinks.map((cat) => (
                <li key={cat.path}>
                  <Link
                    to={cat.path}
                    className="group inline-flex items-center gap-1.5 text-[#D4D4D8] hover:text-white transition-colors"
                  >
                    <span className="group-hover:underline underline-offset-4 decoration-white/20">
                      {cat.label}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#365dff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Ecossistema & Contato */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-mono tracking-widest text-[#71717A] uppercase">
              {isPt ? 'Ecossistema' : 'Ecosystem'}
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[#D4D4D8] hover:text-white transition-colors"
                >
                  <span className="group-hover:underline underline-offset-4 decoration-white/20">
                    GitHub Oficial
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#365dff] transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[#D4D4D8] hover:text-white transition-colors"
                >
                  <span className="group-hover:underline underline-offset-4 decoration-white/20">
                    Deploy Vercel
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#365dff] transition-all" />
                </a>
              </li>
              <li className="pt-2 text-[11px] text-[#71717A] leading-relaxed">
                <span>{isPt ? 'Licença MIT · Código Aberto' : 'MIT License · Open Source'}</span>
              </li>
              <li className="text-[11px] text-[#71717A] truncate">
                <a
                  href="mailto:luizeduardo98r4@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  luizeduardo98r4@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Live System Status Pulse (inspired by DevStart reference) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <div className="flex items-center gap-2">
            <span>
              {APP_CONFIG.name} © {APP_CONFIG.year}. {isPt ? 'Todos os direitos reservados.' : 'All rights reserved.'}
            </span>
          </div>

          {/* Live Pulsing Status Indicator */}
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-[#A1A1AA] bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[#E4E4E7]">
              {isPt ? 'Catálogo online · 130+ referências ativas' : 'Catalog online · 130+ active references'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
