import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Copy, Check, AlertCircle } from 'lucide-react';
import { Category } from '../../data/categories';
import { useLanguage } from '../../locales/translations';
import {
  buildCategoryAiPrompt,
  copyTextToClipboard,
  getDeduplicatedCategoryReferences,
} from '../../utils/aiPromptBuilder';
import './AiPromptButton.css';

type CopyStatus = 'idle' | 'copied' | 'empty' | 'error';

interface AiPromptButtonProps {
  category: Category;
}

export const AiPromptButton: React.FC<AiPromptButtonProps> = ({ category }) => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<CopyStatus>('idle');
  const timerRef = useRef<number | null>(null);

  const categoryReferences = useMemo(
    () => getDeduplicatedCategoryReferences(category.id),
    [category.id]
  );

  const hasReferences = categoryReferences.length > 0;

  useEffect(() => {
    setStatus('idle');
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, [category.id]);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const scheduleReset = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setStatus('idle');
      timerRef.current = null;
    }, 2500);
  };

  const handleCopyPrompt = async () => {
    if (!hasReferences) {
      setStatus('empty');
      scheduleReset();
      return;
    }

    const prompt = buildCategoryAiPrompt(category, categoryReferences);
    if (!prompt) {
      setStatus('empty');
      scheduleReset();
      return;
    }

    const success = await copyTextToClipboard(prompt);
    setStatus(success ? 'copied' : 'error');
    scheduleReset();
  };

  const isCopied = status === 'copied';
  const isEmpty = status === 'empty';
  const isError = status === 'error';

  const statusLabel = isCopied
    ? t.aiPromptCopied
    : isEmpty
      ? t.aiPromptEmpty
      : isError
        ? t.aiPromptError
        : t.aiPromptLabel;

  return (
    <div className="inline-flex flex-col items-start sm:items-end gap-1.5">
      <div className="copy-ai-wrap group" data-status={status}>
        <div className="copy-ai-glow" aria-hidden="true" />
        <div className="copy-ai-dark-ring" aria-hidden="true" />
        <div className="copy-ai-dark-ring" aria-hidden="true" />
        <div className="copy-ai-dark-ring" aria-hidden="true" />
        <div className="copy-ai-white-ring" aria-hidden="true" />
        <div className="copy-ai-border-ring" aria-hidden="true" />

        <button
          type="button"
          onClick={handleCopyPrompt}
          aria-label={t.aiPromptHint}
          title={t.aiPromptHint}
          className={`copy-ai-btn ${!hasReferences ? 'opacity-75' : ''}`}
        >
          <span className="copy-ai-mist" aria-hidden="true" />

          <span
            className={`relative z-10 font-medium tracking-[-0.01em] ${
              isCopied
                ? 'text-[#dce7ff]'
                : isEmpty || isError
                  ? 'text-amber-200'
                  : 'text-[#f4f6fb]'
            }`}
          >
            {statusLabel}
          </span>

          <span className="copy-ai-badge-wrap relative z-10" aria-hidden="true">
            <span className="copy-ai-badge-border" />
            <span className="copy-ai-badge">
              {isCopied ? (
                <Check className="w-3.5 h-3.5 text-[#93c5fd]" />
              ) : isEmpty || isError ? (
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#c7d4f5] group-hover:text-white transition-colors" />
              )}
            </span>
          </span>
        </button>
      </div>

      <span className="sr-only" aria-live="polite">
        {isCopied
          ? t.aiPromptCopied
          : isEmpty
            ? t.aiPromptEmpty
            : isError
              ? t.aiPromptError
              : ''}
      </span>
    </div>
  );
};
