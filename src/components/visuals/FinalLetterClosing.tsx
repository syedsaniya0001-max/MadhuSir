import React from 'react';
import { RotateCcw, Feather } from 'lucide-react';

interface FinalLetterClosingProps {
  onReplay: () => void;
}

export const FinalLetterClosing: React.FC<FinalLetterClosingProps> = ({ onReplay }) => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 py-4 sm:py-8 text-center animate-fade-in">
      {/* Decorative Badge */}
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-300/80 font-sans px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
        <Feather className="w-4 h-4 text-amber-400" />
        <span>The Final Letter</span>
      </div>

      {/* Main Letter Card */}
      <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-amber-500/40 shadow-2xl space-y-8 relative overflow-hidden">
        <div className="absolute bottom-2 left-2 w-20 h-20 opacity-15 pointer-events-none">
          <svg viewBox="0 0 50 50" fill="none" stroke="#F59E0B" strokeWidth="1.5">
            <path d="M5,45 Q20,20 45,5 M10,35 Q25,25 35,15" />
          </svg>
        </div>

        {/* The Enduring Truth (Preserved in full) */}
        <div className="space-y-6 max-w-lg mx-auto">
          <p className="font-serif text-xl sm:text-2xl text-gray-200 leading-relaxed font-normal italic">
            “I may not remember every lesson taught in a classroom, <br className="hidden sm:inline" />
            but I will always remember the teacher who helped me become a better version of myself.”
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>

          <p className="font-serif text-lg sm:text-2xl text-white leading-relaxed">
            “Thank you, Madhu Sir, <br />
            for being one of the roots of who I am becoming.”
          </p>

          <div className="pt-2">
            <p className="font-handwriting text-3xl sm:text-4xl text-amber-300 drop-shadow-md">
              My forever favorite teacher, friend and well-wisher.
            </p>
          </div>
        </div>

        {/* Strong Standalone Final Core Statement */}
        <div className="py-8 sm:py-10 border-y border-white/15 my-6 bg-black/30 rounded-2xl">
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.35em] text-emerald-400 block mb-3">
            AND ALWAYS REMEMBER
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-gold-gradient drop-shadow-xl">
            “I'll always be your student.”
          </h1>
        </div>

        {/* Replay Button */}
        <div className="pt-2">
          <button
            onClick={onReplay}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black text-sm font-sans font-semibold transition-all duration-300 active:scale-95 shadow-glow-gold"
          >
            <RotateCcw className="w-4 h-4 text-black" />
            <span>↻ Replay from the beginning</span>
          </button>
        </div>
      </div>

      <div className="text-xs text-white/40 font-sans">
        Happy Teachers' Day 2026 · Built with sincere respect, gratitude & continuous effort
      </div>
    </div>
  );
};
