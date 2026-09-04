import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  X, 
  ChevronRight,
  Palette,
  Sparkles
} from 'lucide-react';
import { CHAPTERS } from '../data/chapters';

export type AppTheme = 'emerald' | 'golden' | 'midnight';

interface NavigationProps {
  currentChapter: number;
  totalChapters: number;
  onSelectChapter: (id: number) => void;
  onNext: () => void;
  onPrev: () => void;
  theme: AppTheme;
  onToggleTheme: (newTheme: AppTheme) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentChapter,
  totalChapters,
  onSelectChapter,
  onNext,
  onPrev,
  theme,
  onToggleTheme,
}) => {
  const [isTocOpen, setIsTocOpen] = useState(false);

  const cycleTheme = () => {
    const next: AppTheme = theme === 'emerald' ? 'golden' : theme === 'golden' ? 'midnight' : 'emerald';
    onToggleTheme(next);
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'golden': return '🌅 Golden';
      case 'midnight': return '🌌 Midnight';
      case 'emerald':
      default: return '🌿 Emerald';
    }
  };

  const progressPercentage = ((currentChapter - 1) / (totalChapters - 1)) * 100;
  const currentChapterData = CHAPTERS.find(c => c.id === currentChapter) || CHAPTERS[0];

  return (
    <>
      {/* Top Floating Glass Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-xl border-b border-white/10 px-4 py-3 transition-all">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Logo / Chapter Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-emerald-400 p-[1px] shadow-glow-gold">
              <div className="w-full h-full bg-[#07140E] rounded-full flex items-center justify-center">
                <span className="font-serif font-bold text-amber-300 text-xs">M</span>
              </div>
            </div>
            <div>
              <span className="font-serif text-sm sm:text-base font-semibold text-white tracking-tight block">
                For Madhu Sir
              </span>
              <span className="text-[11px] font-sans text-amber-300/80 hidden sm:block">
                Chapter {currentChapterData.chapterNumber} · {currentChapterData.tag}
              </span>
            </div>
          </div>

          {/* Actions: Theme Switcher, Chapters */}
          <div className="flex items-center gap-2">
            {/* Theme Switcher Button */}
            <button
              onClick={cycleTheme}
              title="Switch Visual Theme"
              className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-sans text-amber-200 hover:text-amber-100 flex items-center gap-1.5 transition-all active:scale-95"
            >
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span>{getThemeLabel()}</span>
            </button>

            {/* Table of Contents Button */}
            <button
              onClick={() => setIsTocOpen(true)}
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-amber-500/20 hover:from-emerald-500/30 hover:to-amber-500/30 border border-amber-400/40 text-xs font-sans font-medium text-white flex items-center gap-1.5 transition-all shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-300" />
              <span>Chapters</span>
              <span className="text-[10px] bg-white/15 px-1.5 py-0.5 rounded-full font-mono text-amber-200">
                {currentChapter}/{totalChapters}
              </span>
            </button>
          </div>
        </div>

        {/* Glowing Gradient Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-emerald-400 via-amber-400 to-yellow-300 shadow-[0_0_12px_#F59E0B] transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </header>

      {/* Table of Contents Drawer Modal */}
      {isTocOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex justify-end animate-fade-in">
          <div className="w-full max-w-md bg-[#0A1A12] h-full shadow-2xl flex flex-col p-6 overflow-hidden border-l border-amber-500/30">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Chapters</span>
                </span>
                <h2 className="font-serif text-xl text-white font-medium mt-0.5">
                  For Madhu Sir
                </h2>
              </div>
              <button
                onClick={() => setIsTocOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="Close chapters menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chapter List */}
            <div className="flex-1 overflow-y-auto py-4 space-y-2 pr-1">
              {CHAPTERS.map((ch) => {
                const isCurrent = ch.id === currentChapter;
                return (
                  <button
                    key={ch.id}
                    onClick={() => {
                      onSelectChapter(ch.id);
                      setIsTocOpen(false);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between ${
                      isCurrent
                        ? 'bg-amber-500/15 border border-amber-400/60 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                        : 'hover:bg-white/5 border border-white/5'
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <span className={`text-xs font-mono font-bold shrink-0 mt-0.5 ${
                        isCurrent ? 'text-amber-300' : 'text-white/40'
                      }`}>
                        {ch.chapterNumber}
                      </span>
                      <div className="truncate">
                        <span className="text-[10px] font-sans uppercase tracking-wider text-amber-400/80 block">
                          {ch.tag}
                        </span>
                        <h3 className={`text-xs sm:text-sm font-serif truncate ${
                          isCurrent ? 'font-semibold text-white' : 'text-white/80'
                        }`}>
                          {ch.title.replace(/[“”]/g, '')}
                        </h3>
                      </div>
                    </div>
                    {isCurrent ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-glow-gold shrink-0"></span>
                    ) : (
                      <ChevronRight className="w-4 h-4 text-white/30 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 text-center text-xs text-white/40 font-sans">
              Tap any chapter to jump directly
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom Navigation Pill (Only on Chapters > 1) */}
      {currentChapter > 1 && (
        <nav 
          aria-label="Chapter navigation"
          className="fixed bottom-5 left-0 right-0 z-30 flex justify-center px-4 pointer-events-none"
        >
          <div className="pointer-events-auto bg-[#07140E]/90 backdrop-blur-2xl px-4 sm:px-6 py-3 rounded-full border border-amber-500/30 shadow-2xl flex items-center gap-3 sm:gap-5">
            {/* Prev Button */}
            <button
              onClick={onPrev}
              disabled={currentChapter === 1}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full hover:bg-white/10 disabled:opacity-20 disabled:hover:bg-transparent text-white/80 hover:text-white text-xs font-sans font-medium flex items-center gap-1.5 transition-all"
              aria-label="Previous chapter"
            >
              <ArrowLeft className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Chapter Counter Badge */}
            <div className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-medium text-amber-200 shadow-inner">
              {currentChapter} <span className="text-white/40">/</span> {totalChapters}
            </div>

            {/* Next Button */}
            {currentChapter < totalChapters ? (
              <button
                onClick={onNext}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-xs font-sans flex items-center gap-1.5 transition-all shadow-glow-gold active:scale-95"
                aria-label="Next chapter"
              >
                <span>Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => onSelectChapter(1)}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-400 hover:to-amber-400 text-black font-semibold text-xs font-sans flex items-center gap-1.5 transition-all shadow-glow-emerald active:scale-95"
              >
                <span>Replay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </nav>
      )}
    </>
  );
};
