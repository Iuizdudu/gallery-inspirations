import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe, Github, Menu, ChevronDown, Check } from 'lucide-react';
import { useLanguage, Language } from '../../locales/translations';
import { GITHUB_REPO_URL } from '../../data/config';
import { PillNav, PillNavItem } from './PillNav';
import { BrandLogo } from '../BrandLogo/BrandLogo';
import './NavbarGitHubButton.css';

interface NavbarProps {
  onToggleSidebarMobile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebarMobile }) => {
  const { language, setLanguage, t } = useLanguage();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  const navItems: PillNavItem[] = [
    { label: t.navHome, href: '/' },
    { label: t.navDocs, href: '/docs' },
    { label: t.navGuide, href: '/guide' },
    { label: t.navChangelog, href: '/changelog' }
  ];

  // Router Link component to integrate React Router SPA navigation into PillNav
  const RouterLink = ({ href, className, children, onClick, ...rest }: any) => {
    return (
      <a
        href={href}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          onClick?.(e);
          if (href && href !== '#') {
            navigate(href);
          }
        }}
        {...rest}
      >
        {children}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-30 w-full h-16 px-3 sm:px-8 flex items-center justify-between gap-2 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4 backdrop-blur-md bg-[#090909]/80 border-b border-[#1E1E1E]">
      {/* Left slot: Mobile Drawer Trigger & Brand (occupies equal 1fr track on desktop for true centering) */}
      <div className="flex items-center gap-2 md:justify-self-start min-w-0">
        <div className="flex items-center gap-2 sm:gap-2.5 lg:hidden min-w-0">
          <button
            onClick={onToggleSidebarMobile}
            aria-label="Abrir menu"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#121212] hover:bg-[#181818] border border-[#262626] text-[#A1A1AA] hover:text-white transition-colors shrink-0"
          >
            <Menu className="w-4 h-4" />
          </button>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className="flex items-center gap-2 min-w-0 group"
            aria-label="Gallery Inspirations"
          >
            {/* Mobile brand (< sm): always visible icon + full stacked Gallery Inspirations lockup */}
            <div className="flex sm:hidden items-center gap-2 min-w-0">
              <img
                src="/favicon.svg"
                alt="Gallery Inspirations"
                className="w-7 h-7 rounded-full object-contain ring-1 ring-white/10 shrink-0"
              />
              <div className="flex flex-col justify-center shrink-0 gap-[2px]">
                <span
                  style={{ fontFamily: "'Syne', sans-serif" }}
                  className="font-extrabold text-[13.5px] leading-none tracking-[-0.03em] bg-gradient-to-b from-white via-white to-[#B8BCC6] bg-clip-text text-transparent whitespace-nowrap"
                >
                  Gallery
                </span>
                <span className="font-mono font-medium uppercase text-[7.5px] tracking-[0.16em] leading-none text-[#9CA3AF] whitespace-nowrap">
                  Inspirations
                </span>
              </div>
            </div>

            {/* Tablet brand (sm - md): full BrandLogo */}
            <div className="hidden sm:flex">
              <BrandLogo size="sm" />
            </div>
          </a>
        </div>
      </div>

      {/* Center React Bits PillNav Component */}
      <div className="hidden md:flex items-center justify-center md:justify-self-center">
        <PillNav
          items={navItems}
          activeHref={location.pathname}
          linkComponent={RouterLink}
          theme="dark"
          layout="joined"
          surface="glass"
          itemStyle="pill"
          hoverEffect="fill"
          indicator="dot"
          size="md"
          collapse="never"
          highlightColor="#365dff"
          highlightTextColor="#ffffff"
        />
      </div>

      {/* Right Actions: Language Selector & GitHub Contribute Button */}
      <div className="flex items-center gap-1.5 sm:gap-3 md:justify-self-end shrink-0">
        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="h-9 flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 text-xs font-medium text-[#A1A1AA] hover:text-[#F5F5F5] bg-[#121212] hover:bg-[#181818] border border-[#262626] rounded-full t-button"
          >
            <Globe className="w-3.5 h-3.5 text-[#71717A] shrink-0" />
            <span className="sm:hidden">{language === 'pt-BR' ? 'PT' : 'EN'}</span>
            <span className="hidden sm:inline">{language === 'pt-BR' ? 'PT-BR' : 'EN'}</span>
            <ChevronDown className="w-3 h-3 text-[#71717A] shrink-0" />
          </button>

          {langDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-32 bg-[#121212] border border-[#262626] rounded-xl shadow-xl py-1 z-50 t-dropdown-enter"
              onMouseLeave={() => setLangDropdownOpen(false)}
            >
              <button
                onClick={() => handleLanguageChange('pt-BR')}
                className="w-full flex items-center justify-between px-3 py-2 text-xs text-left text-[#F5F5F5] hover:bg-[#1C1C1C] transition-colors"
              >
                <span>Português</span>
                {language === 'pt-BR' && <Check className="w-3.5 h-3.5 text-[#365dff]" />}
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className="w-full flex items-center justify-between px-3 py-2 text-xs text-left text-[#F5F5F5] hover:bg-[#1C1C1C] transition-colors"
              >
                <span>English</span>
                {language === 'en' && <Check className="w-3.5 h-3.5 text-[#365dff]" />}
              </button>
            </div>
          )}
        </div>

        {/* Contribute Button - Compact dark icon on mobile, dark sliding GitHub pill on sm+ */}
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Contribuir no repositório GitHub"
          aria-label={t.navContribute}
          className="sm:hidden w-9 h-9 rounded-full bg-[#121212] hover:bg-[#181818] text-white border border-[#262626] flex items-center justify-center shrink-0 transition-colors active:scale-95"
        >
          <Github className="w-4 h-4 text-white" />
        </a>

        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Contribuir no repositório GitHub"
          aria-label={t.navContribute}
          className="hidden sm:inline-flex github-slide-btn"
        >
          <span className="github-slide-btn__icon" aria-hidden="true">
            <Github className="w-4 h-4 text-white" />
          </span>
          <span className="github-slide-btn__text1">{t.navContribute}</span>
          <span className="github-slide-btn__text2">GitHub</span>
        </a>
      </div>
    </header>
  );
};
