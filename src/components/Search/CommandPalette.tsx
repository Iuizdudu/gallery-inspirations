import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, ExternalLink, CornerDownLeft, Command } from 'lucide-react';
import { REFERENCES, Reference } from '../../data/references';
import { CATEGORIES, getCategoryById } from '../../data/categories';
import { useLanguage } from '../../locales/translations';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Filter references based on query
  const filteredReferences = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      // When query is empty, show featured items
      return REFERENCES.slice(0, 8);
    }

    return REFERENCES.filter((ref) => {
      const cat = getCategoryById(ref.categoryId);
      const catName = language === 'pt-BR' ? cat?.namePt : cat?.nameEn;
      const desc = language === 'pt-BR' ? ref.descriptionPt : ref.descriptionEn;

      return (
        ref.title.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q) ||
        (catName && catName.toLowerCase().includes(q)) ||
        (ref.author && ref.author.toLowerCase().includes(q)) ||
        (ref.tags && ref.tags.some((tag) => tag.toLowerCase().includes(q)))
      );
    }).slice(0, 15);
  }, [query, language]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredReferences.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredReferences.length) % Math.max(1, filteredReferences.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredReferences[selectedIndex]) {
          const item = filteredReferences[selectedIndex];
          onClose();
          window.open(item.url, '_blank', 'noopener,noreferrer');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredReferences, selectedIndex, navigate, onClose]);

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current) {
      const selectedEl = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="command-palette-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 sm:px-6 bg-black/80 backdrop-blur-md t-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#121212] border border-[#262626] rounded-2xl shadow-2xl overflow-hidden flex flex-col text-[#F5F5F5] t-modal-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-5 sm:px-6 py-4 border-b border-[#262626] gap-3.5 bg-[#161616]">
          <Search className="w-5 h-5 text-[#38BDF8] shrink-0" />
          <input
            ref={inputRef}
            id="command-palette-title"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder={t.searchModalPlaceholder}
            className="w-full bg-transparent border-none outline-none text-base sm:text-lg text-[#F5F5F5] placeholder-[#71717A]"
          />
          {query && (
            <button
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="text-[#71717A] hover:text-[#F5F5F5] p-1.5 rounded-md hover:bg-[#222222] t-button"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs text-[#94A3B8] bg-[#222222] border border-[#2e2e2e] rounded font-mono">
            ESC
          </span>
        </div>

        {/* Quick Category Jump Tags when query is empty */}
        {!query && (
          <div className="px-5 py-2.5 border-b border-[#222222] bg-[#121212]/80 flex items-center gap-2 overflow-x-auto text-xs text-[#A1A1AA] scrollbar-none">
            <span className="shrink-0 text-[#71717A] font-medium">{t.searchRecent}:</span>
            {CATEGORIES.slice(0, 10).map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onClose();
                  navigate(`/category/${cat.slug}`);
                }}
                className="shrink-0 px-3 py-1 rounded-full bg-[#181818] border border-[#262626] hover:border-[#38BDF8]/40 hover:bg-[#222222] hover:text-white text-xs t-pill"
              >
                {language === 'pt-BR' ? cat.namePt : cat.nameEn}
              </button>
            ))}
          </div>
        )}

        {/* Results List */}
        <div
          ref={resultsRef}
          className="max-h-[500px] overflow-y-auto divide-y divide-[#1e1e1e] p-2.5 sm:p-3"
        >
          {filteredReferences.length === 0 ? (
            <div className="py-14 px-4 text-center text-sm text-[#71717A]">
              {t.searchModalEmpty}
            </div>
          ) : (
            filteredReferences.map((ref, idx) => {
              const isSelected = idx === selectedIndex;
              const cat = getCategoryById(ref.categoryId);
              const catName = language === 'pt-BR' ? cat?.namePt : cat?.nameEn;

              return (
                <div
                  key={ref.id}
                  onClick={() => {
                    onClose();
                    window.open(ref.url, '_blank', 'noopener,noreferrer');
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-start justify-between p-3 rounded-lg cursor-pointer t-row-item ${
                    isSelected
                      ? 'bg-[#1e1e1e] border-l-2 border-[#38BDF8] translate-x-1'
                      : 'hover:bg-[#181818] hover:translate-x-0.5'
                  }`}
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm text-[#F5F5F5] group-hover:text-white">
                        {ref.title}
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] line-clamp-1">
                      {language === 'pt-BR' ? ref.descriptionPt : ref.descriptionEn}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-center">
                    {isSelected && (
                      <span className="flex items-center gap-1.5 text-[11px] text-[#38BDF8] bg-[#0C1A30] border border-[#1D4ED8]/40 px-2.5 py-1 rounded-md font-medium shadow-sm">
                        <span>Acessar</span>
                        <ExternalLink className="w-3 h-3 text-[#38BDF8]" />
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-[#0E0E0E] border-t border-[#262626] flex items-center justify-between text-xs text-[#71717A]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="px-1.5 py-0.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-[10px]">↑↓</span>
              {t.searchNavigateHint}
            </span>
            <span className="flex items-center gap-1">
              <span className="px-1.5 py-0.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-[10px]">↵</span>
              {t.searchSelectHint}
            </span>
          </div>
          <span>{t.searchEscHint}</span>
        </div>
      </div>
    </div>
  );
};
