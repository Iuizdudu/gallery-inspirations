import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  Search,
  Home,
  List,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
} from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { REFERENCES, getReferencesByCategory } from '../../data/references';
import { CategoryIcon } from '../Icons/CategoryIcon';
import { useLanguage } from '../../locales/translations';

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
  onOpenSearch: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  onToggleCollapse,
  isMobileOpen,
  onCloseMobile,
  onOpenSearch,
}) => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to count references per category
  const getCategoryCount = (catId: string) => {
    return getReferencesByCategory(catId).length;
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#0D0D0D] border-r border-[#1E1E1E] text-[#F5F5F5] select-none">
      {/* Brand Header - Exactly aligned with Navbar h-16 */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-[#1E1E1E] shrink-0">
        <NavLink
          to="/"
          onClick={onCloseMobile}
          className="flex items-center group overflow-hidden w-full"
          title="Gallery Inspirations"
        >
          {isCollapsed ? (
            <div className="mx-auto w-10 h-10 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-[#262626] flex items-center justify-center overflow-hidden shrink-0 p-1.5 shadow-md transition-colors">
              <img
                src="/assets/aistudio/logo_icon.png"
                alt="Gallery Inspirations"
                className="w-full h-full object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ) : (
            <div className="flex items-center w-full">
              <img
                src="/assets/aistudio/logo_trimmed.png"
                alt="Gallery Inspirations"
                className="h-9 sm:h-10 max-h-10 w-auto max-w-[195px] object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-all duration-150 drop-shadow-[0_2px_12px_rgba(255,255,255,0.18)]"
              />
            </div>
          )}
        </NavLink>

        {/* Mobile close button */}
        <button
          onClick={onCloseMobile}
          className="lg:hidden p-1.5 text-[#71717A] hover:text-white rounded-md"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Quick Search Button */}
      <div className="px-3 pt-3.5 pb-2 shrink-0">
        <button
          onClick={() => {
            onCloseMobile();
            onOpenSearch();
          }}
          className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-lg bg-[#141414] hover:bg-[#1A1A1A] border border-[#262626] text-[#71717A] hover:text-[#A1A1AA] transition-all group ${
            isCollapsed ? 'justify-center px-2' : 'justify-between'
          }`}
          title={t.searchCommandShortcut}
        >
          <div className="flex items-center gap-2 truncate">
            <Search className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#365dff] shrink-0 transition-colors" />
            {!isCollapsed && (
              <span className="truncate">{t.searchPlaceholderSidebar}</span>
            )}
          </div>
          {!isCollapsed && (
            <kbd className="px-1.5 py-0.5 text-[10px] bg-[#1E1E1E] border border-[#2E2E2E] rounded text-[#A1A1AA] font-mono">
              Ctrl K
            </kbd>
          )}
        </button>
      </div>

      {/* Top Primary Navigation Links */}
      <div className="px-3 py-2 space-y-1 shrink-0">
        <NavLink
          to="/"
          end
          onClick={onCloseMobile}
          className={({ isActive }) =>
            `flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
              isActive
                ? 'bg-[#181818] text-[#365dff] border border-[#262626]'
                : 'text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#141414]'
            } ${isCollapsed ? 'justify-center px-2' : ''}`
          }
          title={t.home}
        >
          <Home className="w-4 h-4 shrink-0" />
          {!isCollapsed && <span>{t.home}</span>}
        </NavLink>

        <button
          onClick={() => {
            onCloseMobile();
            if (location.pathname !== '/') {
              navigate('/#categories-index');
            } else {
              const el = document.getElementById('categories-index');
              el?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#141414] transition-colors ${
            isCollapsed ? 'justify-center px-2' : ''
          }`}
          title={t.contentIndex}
        >
          <List className="w-4 h-4 shrink-0" />
          {!isCollapsed && <span>{t.contentIndex}</span>}
        </button>
      </div>

      {/* Divider */}
      <div className="my-1 border-t border-[#1E1E1E] shrink-0" />

      {/* Categories Heading */}
      {!isCollapsed && (
        <div className="px-4 py-2 shrink-0">
          <span className="text-[10px] font-semibold tracking-wider text-[#71717A] uppercase">
            {t.categoriesSection}
          </span>
        </div>
      )}

      {/* 18 Official Categories List with Independent Scroll */}
      <div className="flex-1 overflow-y-auto px-3 py-1 space-y-0.5 custom-scrollbar">
        {CATEGORIES.map((category) => {
          const count = getCategoryCount(category.id);
          const categoryName = language === 'pt-BR' ? category.namePt : category.nameEn;

          return (
            <NavLink
              key={category.id}
              to={`/category/${category.slug}`}
              onClick={onCloseMobile}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors group ${
                  isActive
                    ? 'bg-[#181818] text-white border-l-2 border-[#365dff]'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#141414]'
                } ${isCollapsed ? 'justify-center px-2' : ''}`
              }
              title={categoryName}
            >
              <div className="flex items-center gap-2.5 truncate">
                <span className="text-[#71717A] group-hover:text-[#365dff] transition-colors shrink-0">
                  <CategoryIcon name={category.iconName} className="w-4 h-4" />
                </span>
                {!isCollapsed && (
                  <span className="truncate font-normal">{categoryName}</span>
                )}
              </div>

              {!isCollapsed && count > 0 && (
                <span className="text-[10px] font-mono text-[#71717A] group-hover:text-[#A1A1AA] tabular-nums">
                  {count}
                </span>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Bottom Footer Action: Collapse Toggle Button */}
      <div className="p-3 border-t border-[#1E1E1E] shrink-0 hidden lg:block">
        <button
          onClick={onToggleCollapse}
          className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-[#71717A] hover:text-[#F5F5F5] hover:bg-[#141414] rounded-lg transition-colors ${
            isCollapsed ? 'justify-center px-2' : ''
          }`}
          title={isCollapsed ? t.expandSidebar : t.collapseSidebar}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <>
              <ChevronLeft className="w-4 h-4" />
              <span>{t.collapseSidebar}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside
        className={`hidden lg:block shrink-0 h-screen sticky top-0 transition-all duration-300 z-40 ${
          isCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={onCloseMobile}
          />

          {/* Drawer content */}
          <div className="relative w-72 max-w-[85vw] h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
