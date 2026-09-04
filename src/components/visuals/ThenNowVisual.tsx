import React from 'react';
import { Sparkles } from 'lucide-react';

export const ThenNowVisual: React.FC = () => {
  const comparisons = [
    {
      thenText: "“Can I really do this?”",
      nowText: "“Let me try.”",
    },
    {
      thenText: "Uncertainty",
      nowText: "Confidence",
    },
    {
      thenText: "Learning passively",
      nowText: "Creating & Building",
    },
    {
      thenText: "Looking for direction",
      nowText: "Building my own path",
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Clean Single Main Heading */}
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          “4 Years Later…”
        </h2>
        <p className="text-sm text-gray-300 font-sans mt-2 max-w-md mx-auto">
          The student you once guided is still growing and building.
        </p>
      </div>

      {/* Comparative Cards */}
      <div className="space-y-3">
        {comparisons.map((c, idx) => (
          <div 
            key={idx} 
            className="p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 shadow-2xl grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-center relative overflow-hidden"
          >
            {/* THEN */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/40 block mb-1">
                Then · Intermediate
              </span>
              <p className="font-serif text-base text-gray-300 italic">
                {c.thenText}
              </p>
            </div>

            {/* NOW */}
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-400/40 shadow-glow-emerald">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-emerald-300 block mb-1 flex items-center justify-between">
                <span>Now · Today</span>
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              </span>
              <p className="font-serif font-semibold text-lg text-white">
                {c.nowText}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Sincere Reflection */}
      <div className="glass-panel-subtle rounded-2xl p-5 border border-white/10 text-xs sm:text-sm text-gray-200 font-sans leading-relaxed text-center">
        <p className="font-serif italic text-base text-amber-300 mb-1">
          “The idea is not that you magically transformed me overnight.”
        </p>
        <p className="text-gray-400">
          The idea is that your guidance became an essential part of my journey, helping me grow into someone who takes on challenges with confidence.
        </p>
      </div>
    </div>
  );
};
