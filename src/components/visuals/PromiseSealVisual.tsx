import React from 'react';

export const PromiseSealVisual: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 py-4 sm:py-8">
      {/* Clean Single Main Heading */}
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          “My Honest Promise”
        </h2>
        <p className="text-sm text-gray-300 font-sans mt-2 max-w-sm mx-auto">
          No hollow declarations. Just the truth between a student and their teacher.
        </p>
      </div>

      {/* The Core Typographic Centerpiece Card */}
      <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-amber-400/40 shadow-2xl text-center relative overflow-hidden">
        {/* Radiant Gold Wax Seal Stamp Motif */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 p-[2px] shadow-glow-gold">
          <div className="w-full h-full rounded-full bg-[#0D2218] flex items-center justify-center relative">
            <span className="font-serif font-bold text-2xl text-gold-gradient">M</span>
            <div className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-amber-400 text-black text-[9px] font-mono font-bold tracking-widest uppercase">
              PROMISE
            </div>
          </div>
        </div>

        {/* The Exact Words of the Honest Promise (Preserved in full) */}
        <div className="space-y-6 max-w-lg mx-auto">
          <p className="font-serif text-lg sm:text-2xl text-gray-300 leading-relaxed italic">
            “I can't promise you that I'll always be the topper you want me to become.”
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>

          <p className="font-serif text-2xl sm:text-3xl text-white font-medium leading-snug">
            “But I can promise you this—”
          </p>

          <div className="space-y-4 pt-2">
            <p className="font-serif text-3xl sm:text-4xl text-gold-gradient font-bold tracking-tight">
              “I won't stop trying.”
            </p>

            <p className="font-serif text-lg sm:text-xl text-emerald-300 leading-relaxed">
              “I'll keep putting in more effort than I did yesterday, <br className="hidden sm:inline" />
              and I'll keep moving toward the person you always believed I could become.”
            </p>
          </div>
        </div>

        <div className="w-36 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8 shadow-glow-gold"></div>
      </div>

      <div className="text-center">
        <span className="text-xs text-white/40 font-sans tracking-wide">
          A promise of continuous effort is the only promise worth keeping.
        </span>
      </div>
    </div>
  );
};
