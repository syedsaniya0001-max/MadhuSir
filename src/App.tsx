import React, { useState, useEffect, useRef } from 'react';
import { CHAPTERS } from './data/chapters';
import { Navigation, AppTheme } from './components/Navigation';
import { ParticleCanvas } from './components/ParticleCanvas';
import { CoverVisual } from './components/visuals/CoverVisual';
import { SeedSproutVisual } from './components/visuals/SeedSproutVisual';
import { SteppingPathVisual } from './components/visuals/SteppingPathVisual';
import { NotebookMarginVisual } from './components/visuals/NotebookMarginVisual';
import { SkillConstellationVisual } from './components/visuals/SkillConstellationVisual';
import { TimeGiftVisual } from './components/visuals/TimeGiftVisual';
import { TrustAnchorVisual } from './components/visuals/TrustAnchorVisual';
import { TriadRingsVisual } from './components/visuals/TriadRingsVisual';
import { RootsBotanicalVisual } from './components/visuals/RootsBotanicalVisual';
import { ThenNowVisual } from './components/visuals/ThenNowVisual';
import { FutureDeskVisual } from './components/visuals/FutureDeskVisual';
import { PromiseSealVisual } from './components/visuals/PromiseSealVisual';
import { LetterfoldVisual } from './components/visuals/LetterfoldVisual';
import { TeachersDayWreathVisual } from './components/visuals/TeachersDayWreathVisual';
import { FinalLetterClosing } from './components/visuals/FinalLetterClosing';

export const App: React.FC = () => {
  const [currentChapter, setCurrentChapter] = useState<number>(1);
  const [theme, setTheme] = useState<AppTheme>('emerald');
  const totalChapters = CHAPTERS.length;
  const touchStartX = useRef<number | null>(null);

  // Scroll to top on chapter switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentChapter]);

  const handleSelectChapter = (id: number) => {
    if (id >= 1 && id <= totalChapters) {
      setCurrentChapter(id);
    }
  };

  const handleNext = () => {
    if (currentChapter < totalChapters) {
      setCurrentChapter(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentChapter > 1) {
      setCurrentChapter(prev => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === ' ' && currentChapter > 1) {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentChapter, totalChapters]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 55) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  // Render bespoke component for each chapter
  const renderChapterContent = () => {
    switch (currentChapter) {
      case 1:
        return <CoverVisual onBegin={handleNext} />;
      case 2:
        return <SeedSproutVisual />;
      case 3:
        return <SteppingPathVisual />;
      case 4:
        return <NotebookMarginVisual />;
      case 5:
        return <SkillConstellationVisual />;
      case 6:
        return <TimeGiftVisual />;
      case 7:
        return <TrustAnchorVisual />;
      case 8:
        return <TriadRingsVisual />;
      case 9:
        return <RootsBotanicalVisual />;
      case 10:
        return <ThenNowVisual />;
      case 11:
        return <FutureDeskVisual />;
      case 12:
        return <PromiseSealVisual />;
      case 13:
        return <LetterfoldVisual />;
      case 14:
        return <TeachersDayWreathVisual />;
      case 15:
        return <FinalLetterClosing onReplay={() => handleSelectChapter(1)} />;
      default:
        return <CoverVisual onBegin={handleNext} />;
    }
  };

  const chapterMeta = CHAPTERS.find(c => c.id === currentChapter) || CHAPTERS[0];

  const getThemeBackgroundClass = () => {
    switch (theme) {
      case 'golden':
        return 'bg-[#120A05] text-[#FFFBF7]';
      case 'midnight':
        return 'bg-[#080912] text-[#F8FAFC]';
      case 'emerald':
      default:
        return 'bg-[#06100B] text-[#F9FAFB]';
    }
  };

  return (
    <div 
      className={`min-h-screen relative flex flex-col justify-between selection:bg-amber-400 selection:text-black transition-colors duration-700 ${getThemeBackgroundClass()}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Interactive Floating Embers Canvas */}
      <ParticleCanvas theme={theme} />

      {/* Atmospheric Ambient Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] transition-all duration-1000 ${
            theme === 'golden' ? 'bg-amber-600/25' : theme === 'midnight' ? 'bg-indigo-600/25' : 'bg-emerald-600/25'
          }`}
        />
        <div 
          className={`absolute top-1/3 -right-32 w-96 h-96 rounded-full blur-[140px] transition-all duration-1000 ${
            theme === 'golden' ? 'bg-rose-600/20' : theme === 'midnight' ? 'bg-purple-600/20' : 'bg-amber-500/20'
          }`}
        />
        <div 
          className={`absolute -bottom-32 left-1/3 w-96 h-96 rounded-full blur-[130px] transition-all duration-1000 ${
            theme === 'golden' ? 'bg-orange-600/20' : theme === 'midnight' ? 'bg-blue-600/20' : 'bg-teal-600/20'
          }`}
        />
      </div>

      {/* Header & Global Controls */}
      <Navigation
        currentChapter={currentChapter}
        totalChapters={totalChapters}
        onSelectChapter={handleSelectChapter}
        onNext={handleNext}
        onPrev={handlePrev}
        theme={theme}
        onToggleTheme={setTheme}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex items-center justify-center pt-24 sm:pt-28 pb-32 sm:pb-36 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-4xl mx-auto transition-all duration-500">
          {/* Chapter indicator pill for Chapters > 1 */}
          {currentChapter > 1 && (
            <div className="text-center mb-5 sm:mb-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-400/30 bg-black/40 backdrop-blur-md shadow-glow-gold text-[11px] font-sans font-semibold tracking-widest text-amber-300 uppercase">
                <span>Chapter {chapterMeta.chapterNumber}</span>
                <span className="text-amber-500/50">•</span>
                <span className="text-white/90">{chapterMeta.tag}</span>
              </div>
            </div>
          )}

          {/* Chapter Interactive Component */}
          {renderChapterContent()}
        </div>
      </main>

      {/* Subtle Desktop Keyboard Helper Footer */}
      <footer className="relative z-10 py-3 text-center text-[11px] font-sans text-white/40 border-t border-white/10 hidden sm:block">
        Use keyboard <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-amber-300 font-mono text-[10px]">←</kbd> and <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-amber-300 font-mono text-[10px]">→</kbd> to navigate
      </footer>
    </div>
  );
};

export default App;
