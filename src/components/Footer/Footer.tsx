import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../locales/translations';
import { GITHUB_REPO_URL, APP_CONFIG } from '../../data/config';
import { CATEGORIES } from '../../data/categories';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="mt-20 border-t border-[#1E1E1E] bg-[#0A0A0A] text-[#71717A] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Statement */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-[#3B82F6] flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>
              <span className="font-semibold text-sm text-[#F5F5F5] tracking-tight">
                Inspiration Archive
              </span>
            </div>
            <p className="text-xs text-[#A1A1AA] max-w-sm leading-relaxed">
              {t.footerRights}
            </p>
            <p className="text-[11px] text-[#71717A]">
              {t.footerCuratedBy}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-semibold tracking-wider text-[#A1A1AA] uppercase">
              {t.contentIndex}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link to="/" className="hover:text-[#F5F5F5] transition-colors">
                  {t.navHome}
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-[#F5F5F5] transition-colors">
                  {t.navDocs}
                </Link>
              </li>
              <li>
                <Link to="/guide" className="hover:text-[#F5F5F5] transition-colors">
                  {t.navGuide}
                </Link>
              </li>
              <li>
                <Link to="/changelog" className="hover:text-[#F5F5F5] transition-colors">
                  {t.navChangelog}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#F5F5F5] transition-colors">
                  {t.navBlog}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Community & Contribution */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-semibold tracking-wider text-[#A1A1AA] uppercase">
              GitHub
            </h4>
            <p className="text-[11px] text-[#71717A]">
              Proponha novas referências criando um Pull Request.
            </p>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#3B82F6] hover:text-[#60A5FA] transition-colors pt-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>{t.contributeButton}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#181818] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <span>
            © {APP_CONFIG.year} Inspiration Archive. Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-4">
            <span>Geist · Lucide · React</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#3B82F6]">v{APP_CONFIG.version}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
