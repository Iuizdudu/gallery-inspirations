import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, Globe, Github, Menu, ChevronDown, Check } from 'lucide-react';
import { useLanguage, Language } from '../../locales/translations';
import { GITHUB_REPO_URL } from '../../data/config';

interface NavbarProps {
  onToggleSidebarMobile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebarMobile }) => {
  const { language, setLanguage, t } = useLanguage();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 w-full px-4 sm:px-8 py-3.5 flex items-center justify-between backdrop-blur-md bg-[#090909]/80 border-b border-[#1E1E1E]">
      {/* Mobile Drawer Trigger & Brand */}
      <div className="flex items-center gap-3 lg:hidden">
        <button
          onClick={onToggleSidebarMobile}
          aria-label="Abrir menu"
          className="p-1.5 rounded-lg bg-[#141414] border border-[#262626] text-[#A1A1AA] hover:text-white transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <span className="font-semibold text-sm text-[#F5F5F5] tracking-tight">
          Inspiration Archive
        </span>
      </div>

      {/* Center Floating Pill Navigation - Stitch Style */}
      <nav aria-label="Navegação principal" className="hidden md:flex items-center mx-auto">
        <div className="flex items-center gap-1 p-1 bg-[#121212]/90 border border-[#262626] rounded-full shadow-lg backdrop-blur-md">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-[#1E1E1E] text-white shadow-inner border border-[#333333]'
                  : 'text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#181818]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Sparkles className={`w-3.5 h-3.5 ${isActive ? 'text-[#3B82F6]' : 'text-[#71717A]'}`} />
                <span>{t.navHome}</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/docs"
            className={({ isActive }) =>
              `px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-[#1E1E1E] text-white border border-[#333333]'
                  : 'text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#181818]'
              }`
            }
          >
            {t.navDocs}
          </NavLink>

          <NavLink
            to="/guide"
            className={({ isActive }) =>
              `px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-[#1E1E1E] text-white border border-[#333333]'
                  : 'text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#181818]'
              }`
            }
          >
            {t.navGuide}
          </NavLink>

          <NavLink
            to="/changelog"
            className={({ isActive }) =>
              `px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-[#1E1E1E] text-white border border-[#333333]'
                  : 'text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#181818]'
              }`
            }
          >
            {t.navChangelog}
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-[#1E1E1E] text-white border border-[#333333]'
                  : 'text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#181818]'
              }`
            }
          >
            {t.navBlog}
          </NavLink>
        </div>
      </nav>

      {/* Right Actions: Language Selector & GitHub Contribute Button */}
      <div className="flex items-center gap-3">
        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#A1A1AA] hover:text-[#F5F5F5] bg-[#121212] hover:bg-[#181818] border border-[#262626] rounded-full transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[#71717A]" />
            <span>{language === 'pt-BR' ? 'PT-BR' : 'EN'}</span>
            <ChevronDown className="w-3 h-3 text-[#71717A]" />
          </button>

          {langDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-32 bg-[#121212] border border-[#262626] rounded-xl shadow-xl py-1 z-50 animate-in fade-in zoom-in-95"
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
          className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-white bg-[#141414] hover:bg-[#1C1C1C] hover:border-[#3B82F6]/50 border border-[#262626] rounded-full transition-all duration-150 shadow-sm"
        >
          <Github className="w-4 h-4 text-white" />
          <span className="hidden sm:inline">{t.navContribute}</span>
        </a>
      </div>
    </header>
  );
};
