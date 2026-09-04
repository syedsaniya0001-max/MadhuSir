import React from 'react';
import { ArrowRight, Feather } from 'lucide-react';

interface CoverVisualProps {
  onBegin: () => void;
}

export const CoverVisual: React.FC<CoverVisualProps> = ({ onBegin }) => {
  return (
    <div className="w-full max-w-2xl mx-auto text-center px-4 py-4 sm:py-8 animate-fade-in">
      {/* Decorative Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-6 shadow-glow-gold backdrop-blur-md">
        <Feather className="w-3.5 h-3.5 text-amber-400" />
        <span>For Madhu Sir</span>
      </div>

      {/* Main Glass Cover Card */}
      <div className="relative glass-panel rounded-3xl p-8 sm:p-14 border border-amber-500/30 shadow-2xl overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Main Headings */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight font-normal mb-4 text-gold-gradient tracking-tight">
          “I don't really know <br className="hidden sm:inline" />
          how to thank you.”
        </h1>

        <p className="font-handwriting text-3xl sm:text-4xl text-amber-300 mb-8 drop-shadow-md">
          “So I made this.”
        </p>

        {/* Supporting Line */}
        <div className="max-w-lg mx-auto mb-10">
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-serif italic border-y border-white/10 py-4">
            “Not for everything you've taught me in a classroom, but for everything your guidance has quietly meant to me.”
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <button
            onClick={onBegin}
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-black font-semibold hover:opacity-95 transition-all duration-300 shadow-glow-gold hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] active:scale-95 text-base font-sans"
          >
            <span>Begin</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
