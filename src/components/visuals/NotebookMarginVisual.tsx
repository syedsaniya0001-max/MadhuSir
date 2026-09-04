import React from 'react';

export const NotebookMarginVisual: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Clean Single Main Heading */}
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          “Even a correction could become growth.”
        </h2>
        <p className="text-sm text-gray-300 font-sans mt-2 max-w-lg mx-auto">
          Handwriting was only one small example. It showed how you noticed small details, corrected me, and taught me to take pride in my work.
        </p>
      </div>

      {/* Styled Glass Notebook Card */}
      <div className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl overflow-hidden">
        {/* Red Margin Line */}
        <div className="absolute top-0 bottom-0 left-10 sm:left-14 w-0.5 bg-rose-500/50 shadow-[0_0_8px_#F43F5E] pointer-events-none"></div>

        <div className="pl-7 sm:pl-10 space-y-5">
          <div className="border-b border-white/10 pb-2 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">
              Physics Assignment Notes
            </span>
            <span className="text-xs font-handwriting text-amber-300 text-base">
              Intermediate Year 1
            </span>
          </div>

          <div className="space-y-4">
            <div className="bg-black/40 p-4 sm:p-5 rounded-2xl border border-white/10 backdrop-blur-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 font-sans block mb-1">
                Your Observation
              </span>
              <p className="font-serif italic text-base sm:text-lg text-gray-200 leading-relaxed">
                “Your derivation is correct, but write with clarity and discipline. The way you present your work reflects the clarity of your thoughts.”
              </p>
              <div className="mt-2 text-right">
                <span className="font-handwriting text-xl text-rose-400">
                  — Sir's red pen note in my margin
                </span>
              </div>
            </div>

            {/* The 4-Step Pattern Grid */}
            <div className="py-1">
              <span className="text-xs font-sans text-white/50 uppercase tracking-widest block text-center mb-2.5">
                The Pattern:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                  <span className="block text-[10px] font-sans uppercase text-white/40">Step 1</span>
                  <span className="font-serif font-semibold text-sm text-white mt-0.5 block">Notice</span>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/40 shadow-glow-gold">
                  <span className="block text-[10px] font-sans uppercase text-amber-300/70">Step 2</span>
                  <span className="font-serif font-semibold text-sm text-amber-300 mt-0.5 block">Correct</span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-400/40 shadow-glow-emerald">
                  <span className="block text-[10px] font-sans uppercase text-emerald-300/70">Step 3</span>
                  <span className="font-serif font-semibold text-sm text-emerald-300 mt-0.5 block">Improve</span>
                </div>
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-400/40">
                  <span className="block text-[10px] font-sans uppercase text-cyan-300/70">Step 4</span>
                  <span className="font-serif font-semibold text-sm text-cyan-300 mt-0.5 block">Become Better</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            <p>
              It was never just about neat letters on paper. You taught me that carelessness is optional, and taking care is a deliberate choice. That lesson stayed with me for everything.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
