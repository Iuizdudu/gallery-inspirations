import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe, Github, Menu, ChevronDown, Check } from 'lucide-react';
import { useLanguage, Language } from '../../locales/translations';
import { GITHUB_REPO_URL } from '../../data/config';
import { PillNav, PillNavItem } from './PillNav';

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
    { label: t.navChangelog, href: '/changelog' },
    { label: t.navBlog, href: '/blog' }
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
    <header className="sticky top-0 z-30 w-full h-16 px-4 sm:px-8 flex items-center justify-between backdrop-blur-md bg-[#090909]/80 border-b border-[#1E1E1E]">
      {/* Mobile Drawer Trigger & Brand */}
      <div className="flex items-center gap-3 lg:hidden">
        <button
          onClick={onToggleSidebarMobile}
          aria-label="Abrir menu"
          className="p-1.5 rounded-lg bg-[#141414] border border-[#262626] text-[#A1A1AA] hover:text-white transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <img
          src="/assets/aistudio/logo_trimmed.png"
          alt="Gallery Inspirations"
          className="h-8 sm:h-9 w-auto max-w-[170px] object-contain brightness-0 invert opacity-95"
        />
      </div>

      {/* Center React Bits PillNav Component */}
      <div className="hidden md:flex items-center mx-auto">
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
          highlightColor="#3B82F6"
          highlightTextColor="#ffffff"
        />
      </div>

      {/* Right Actions: Language Selector & GitHub Contribute Button */}
      <div className="flex items-center gap-3">
        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#A1A1AA] hover:text-[#F5F5F5] bg-[#121212] hover:bg-[#181818] border border-[#262626] rounded-full t-button"
          >
            <Globe className="w-3.5 h-3.5 text-[#71717A]" />
            <span>{language === 'pt-BR' ? 'PT-BR' : 'EN'}</span>
            <ChevronDown className="w-3 h-3 text-[#71717A]" />
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
                {language === 'pt-BR' && <Check className="w-3.5 h-3.5 text-[#3B82F6]" />}
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className="w-full flex items-center justify-between px-3 py-2 text-xs text-left text-[#F5F5F5] hover:bg-[#1C1C1C] transition-colors"
              >
                <span>English</span>
                {language === 'en' && <Check className="w-3.5 h-3.5 text-[#3B82F6]" />}
              </button>
            </div>
          )}
        </div>

        {/* Contribute Button - Opens official GitHub repository */}
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Contribuir no repositório GitHub"
          className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-white bg-[#141414] hover:bg-[#1C1C1C] hover:border-[#38BDF8]/50 border border-[#262626] rounded-full shadow-sm t-button"
        >
          <Github className="w-4 h-4 text-white" />
          <span className="hidden sm:inline">{t.navContribute}</span>
        </a>
      </div>
    </header>
  );
};
