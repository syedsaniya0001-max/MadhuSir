import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export const TrustAnchorVisual: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Clean Single Main Heading */}
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          “The thing I remember most is your trust.”
        </h2>
        <p className="text-sm text-gray-300 font-sans mt-2 max-w-md mx-auto">
          Not marks. Not Physics. Not handwriting. Not achievements. Your trust.
        </p>
      </div>

      {/* Golden Glowing Bridge & Anchor Card */}
      <div className="glass-panel rounded-3xl p-7 sm:p-10 border border-amber-500/30 shadow-2xl text-center relative overflow-hidden">
        <div className="w-full h-24 mb-4 flex items-center justify-center">
          <svg viewBox="0 0 400 80" className="w-full max-w-md h-full overflow-visible">
            <path d="M10,65 L390,65" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
            <path 
              d="M30,65 C120,10 280,10 370,65" 
              fill="none" 
              stroke="#F59E0B" 
              strokeWidth="3" 
              filter="drop-shadow(0 0 10px #F59E0B)"
            />
            <line x1="80" y1="46" x2="80" y2="65" stroke="#FCD34D" strokeWidth="1.2" opacity="0.7" />
            <line x1="130" y1="28" x2="130" y2="65" stroke="#FCD34D" strokeWidth="1.2" opacity="0.7" />
            <line x1="200" y1="20" x2="200" y2="65" stroke="#F59E0B" strokeWidth="2" filter="drop-shadow(0 0 6px #F59E0B)" />
            <line x1="270" y1="28" x2="270" y2="65" stroke="#FCD34D" strokeWidth="1.2" opacity="0.7" />
            <line x1="320" y1="46" x2="320" y2="65" stroke="#FCD34D" strokeWidth="1.2" opacity="0.7" />
            <circle cx="200" cy="20" r="5" fill="#FDE68A" filter="drop-shadow(0 0 8px #F59E0B)" />
            <circle cx="200" cy="65" r="4" fill="#F59E0B" />
          </svg>
        </div>

        {/* The Core Quotes */}
        <div className="space-y-4 max-w-lg mx-auto">
          <blockquote className="font-serif text-2xl sm:text-3xl text-gold-gradient leading-snug">
            “Years passed, but the way you believed in me didn't.”
          </blockquote>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>

          <p className="font-handwriting text-2xl sm:text-3xl text-amber-300">
            “Your trust became something I could carry with me.”
          </p>
        </div>
      </div>

      {/* Sincere Narrative Details */}
      <div className="glass-panel-subtle rounded-2xl p-5 sm:p-6 border border-white/10 text-xs sm:text-sm text-gray-200 font-sans space-y-3 leading-relaxed">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p>
            When a teacher believes in you even before your success is proven, that is genuine trust. That belief gave me strength.
          </p>
        </div>
        <div className="flex items-start gap-3 pt-3 border-t border-white/10">
          <Heart className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <p>
            Even after years passed and college stages changed, you kept checking on me and supporting my path. That continuity means the world to me.
          </p>
        </div>
      </div>
    </div>
  );
};
