import React from 'react';
import { Feather } from 'lucide-react';

export const LetterfoldVisual: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Clean Single Main Heading */}
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          “Some places cannot be replaced.”
        </h2>
        <p className="text-sm text-gray-300 font-sans mt-2 max-w-md mx-auto">
          One student among many, but deeply and permanently grateful.
        </p>
      </div>

      {/* Folded Stationery Envelope / Letter Paper Card */}
      <div className="glass-panel rounded-3xl p-7 sm:p-12 border border-amber-500/30 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-6 -right-6 w-36 h-36 opacity-10 pointer-events-none">
          <Feather className="w-full h-full text-amber-300" />
        </div>

        <div className="space-y-6 max-w-lg mx-auto text-center sm:text-left">
          <div className="border-b border-white/10 pb-3 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-300/80">
              A Personal Note
            </span>
            <span className="font-handwriting text-lg text-amber-300">
              September 5
            </span>
          </div>

          <div className="space-y-4 font-serif text-base sm:text-xl text-gray-200 leading-relaxed">
            <p>
              “I may not always be your favourite student.
              <br className="hidden sm:inline" />
              And I know you have taught and guided hundreds of students over the years.”
            </p>

            <p className="text-gray-400 italic">
              “I understand that completely.”
            </p>

            <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400/80 to-transparent my-4"></div>

            <p className="font-medium text-white text-xl sm:text-2xl leading-snug">
              “But what you gave me, <br className="hidden sm:inline" />
              and the place you hold in my journey, <br className="hidden sm:inline" />
              <span className="text-gold-gradient font-bold">cannot be replaced.</span>”
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs sm:text-sm text-gray-400 font-sans italic">
            You don't have to remember every interaction for it to have permanently shaped the way I approach life and learning.
          </div>
        </div>
      </div>
    </div>
  );
};
