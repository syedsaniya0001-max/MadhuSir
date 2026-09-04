import React, { useState } from 'react';
import { Layers, Sparkles } from 'lucide-react';

export const RootsBotanicalVisual: React.FC = () => {
  const [highlightRoots, setHighlightRoots] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Clean Single Main Heading */}
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          “You were one of my roots.”
        </h2>
        <p className="text-sm text-gray-300 font-sans mt-2 max-w-md mx-auto">
          People notice the visible tree above ground. But real growth comes from what was nurtured underneath.
        </p>
      </div>

      {/* Bioluminescent Tree & Roots Cutaway Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-amber-300 flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Botanical Cross-Section</span>
          </span>
          <button
            onClick={() => setHighlightRoots(!highlightRoots)}
            className="text-xs font-sans font-medium px-4 py-1.5 rounded-full border border-amber-400/40 hover:border-amber-400 bg-amber-500/10 hover:bg-amber-500/20 text-amber-200 transition-all shadow-glow-gold active:scale-95"
          >
            {highlightRoots ? "Viewing: Roots System" : "Highlight Roots"}
          </button>
        </div>

        {/* Botanical Cutaway SVG */}
        <div className="w-full h-64 sm:h-72 relative flex items-center justify-center">
          <svg viewBox="0 0 360 260" className="w-full h-full max-w-md">
            <rect x="10" y="10" width="340" height="110" rx="12" fill="#0A241A" opacity="0.5" />
            <line x1="10" y1="120" x2="350" y2="120" stroke="#10B981" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" />
            <text x="20" y="114" fill="#34D399" fontSize="10" fontFamily="'DM Sans', sans-serif" fontWeight="700" letterSpacing="1.5">
              ABOVE (VISIBLE GROWTH)
            </text>
            <text x="20" y="136" fill="#F59E0B" fontSize="10" fontFamily="'DM Sans', sans-serif" fontWeight="700" letterSpacing="1.5">
              BELOW (THE ROOTS)
            </text>

            <rect x="10" y="121" width="340" height="129" rx="12" fill="#06100B" opacity="0.8" />

            {/* Tree Foliage */}
            <g className="transition-opacity duration-500" style={{ opacity: highlightRoots ? 0.35 : 1 }}>
              <circle cx="180" cy="55" r="32" fill="#059669" opacity="0.6" filter="drop-shadow(0 0 12px #10B981)" />
              <circle cx="155" cy="70" r="26" fill="#10B981" opacity="0.7" />
              <circle cx="205" cy="68" r="28" fill="#10B981" opacity="0.75" />
              <circle cx="180" cy="78" r="25" fill="#34D399" opacity="0.85" />
              
              <circle cx="165" cy="50" r="3.5" fill="#FDE68A" filter="drop-shadow(0 0 6px #F59E0B)" />
              <circle cx="195" cy="55" r="4" fill="#FDE68A" filter="drop-shadow(0 0 6px #F59E0B)" />
              <circle cx="178" cy="40" r="3" fill="#FB7185" />
              
              <path d="M174,120 L176,82 Q180,80 184,82 L186,120 Z" fill="#D97706" opacity="0.9" />
              <path d="M176,92 Q160,82 150,75" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M184,88 Q200,80 210,74" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </g>

            {/* Subterranean Roots */}
            <g className={`transition-all duration-500 ${highlightRoots ? 'scale-[1.02] origin-center' : ''}`}>
              <path 
                d="M180,120 Q183,150 177,190 Q175,215 180,240" 
                fill="none" 
                stroke="#F59E0B" 
                strokeWidth={highlightRoots ? "4" : "3"} 
                strokeLinecap="round" 
                filter="drop-shadow(0 0 10px #F59E0B)"
              />
              <path 
                d="M179,135 Q145,150 110,175 Q90,190 70,195" 
                fill="none" 
                stroke="#FCD34D" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                filter="drop-shadow(0 0 8px #F59E0B)"
              />
              <path 
                d="M181,142 Q215,155 245,178 Q275,195 295,200" 
                fill="none" 
                stroke="#FCD34D" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                filter="drop-shadow(0 0 8px #F59E0B)"
              />
              <path 
                d="M178,165 Q150,185 130,220" 
                fill="none" 
                stroke="#F59E0B" 
                strokeWidth="2" 
                strokeLinecap="round" 
              />
              <path 
                d="M180,175 Q205,195 225,228" 
                fill="none" 
                stroke="#F59E0B" 
                strokeWidth="2" 
                strokeLinecap="round" 
              />

              <circle cx="145" cy="150" r="4" fill="#FDE68A" filter="drop-shadow(0 0 6px #F59E0B)" />
              <circle cx="215" cy="155" r="4" fill="#FDE68A" filter="drop-shadow(0 0 6px #F59E0B)" />
              <circle cx="180" cy="190" r="4.5" fill="#FDE68A" filter="drop-shadow(0 0 8px #F59E0B)" />
            </g>
          </svg>
        </div>

        {/* The Essential Statements */}
        <div className="space-y-3 pt-3 border-t border-white/10 text-center">
          <blockquote className="font-serif text-xl sm:text-2xl text-white leading-snug">
            “People see the tree. They don't always see the roots. <br className="hidden sm:inline" />
            <span className="text-gold-gradient font-bold">I do.</span>”
          </blockquote>

          <p className="font-handwriting text-2xl sm:text-3xl text-emerald-300">
            “Thank you, Madhu Sir, for being one of the roots of who I am becoming.”
          </p>
        </div>
      </div>

      {/* Honest Balance Box */}
      <div className="glass-panel-subtle rounded-2xl p-5 border border-white/10 text-xs sm:text-sm text-gray-200 font-sans space-y-2 leading-relaxed">
        <p>
          This does not mean you are responsible for everything I become. My effort is mine. The daily work, late hours, and challenges are mine to face.
        </p>
        <p className="text-gray-400">
          The point is that your guidance, steady trust, and encouragement became one of the vital foundations that helped shape my growth.
        </p>
      </div>
    </div>
  );
};
