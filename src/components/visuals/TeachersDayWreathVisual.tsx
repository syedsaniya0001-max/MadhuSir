import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const TeachersDayWreathVisual: React.FC = () => {
  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#F59E0B', '#10B981', '#FCD34D', '#34D399', '#FB7185'],
        ticks: 240,
        gravity: 0.7,
        shapes: ['circle', 'square']
      });
    } catch {
      // Fallback
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      triggerCelebration();
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const gratitudePoints = [
    "Thank you for every correction.",
    "Every encouragement.",
    "Every conversation.",
    "Every time you believed in me.",
    "Every time you made time.",
    "Every time you chose to be there."
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Clean Main Heading */}
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-tight font-normal">
          Happy Teachers' Day, <br />
          <span className="text-gold-gradient font-semibold">Madhu Sir.</span>
        </h2>
      </div>

      {/* Radiant Botanical Wreath Glass Card */}
      <div className="glass-panel rounded-3xl p-7 sm:p-12 border border-amber-500/40 shadow-2xl text-center relative overflow-hidden">
        {/* Luminous Golden Wreath SVG */}
        <div className="w-48 sm:w-56 h-32 mx-auto mb-4 flex items-center justify-center">
          <svg viewBox="0 0 200 120" className="w-full h-full overflow-visible">
            <path d="M100,110 C50,110 20,80 20,50 C20,20 60,10 90,10" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" filter="drop-shadow(0 0 8px #F59E0B)" />
            <ellipse cx="32" cy="75" rx="7" ry="3.5" transform="rotate(-30 32 75)" fill="#FCD34D" />
            <ellipse cx="24" cy="50" rx="7" ry="3.5" transform="rotate(-5 24 50)" fill="#34D399" />
            <ellipse cx="38" cy="28" rx="7" ry="3.5" transform="rotate(30 38 28)" fill="#10B981" />
            <ellipse cx="68" cy="14" rx="7" ry="3.5" transform="rotate(60 68 14)" fill="#FCD34D" />

            <path d="M100,110 C150,110 180,80 180,50 C180,20 140,10 110,10" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" filter="drop-shadow(0 0 8px #F59E0B)" />
            <ellipse cx="168" cy="75" rx="7" ry="3.5" transform="rotate(30 168 75)" fill="#FCD34D" />
            <ellipse cx="176" cy="50" rx="7" ry="3.5" transform="rotate(5 176 50)" fill="#34D399" />
            <ellipse cx="162" cy="28" rx="7" ry="3.5" transform="rotate(-30 162 28)" fill="#10B981" />
            <ellipse cx="132" cy="14" rx="7" ry="3.5" transform="rotate(-60 132 14)" fill="#FCD34D" />

            <circle cx="100" cy="55" r="16" fill="#0D2218" stroke="#F59E0B" strokeWidth="2" filter="drop-shadow(0 0 10px #F59E0B)" />
            <path d="M96,52 A2.5,2.5 0 0,1 100,54 A2.5,2.5 0 0,1 104,52 Q105,56 100,60 Q95,56 96,52 Z" fill="#FCD34D" />
          </svg>
        </div>

        {/* Gratitude Points Grid (Preserved in full) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-lg mx-auto text-left">
          {gratitudePoints.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-3 hover:border-amber-400/40 transition-colors">
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-glow-gold shrink-0"></span>
              <span className="font-serif text-sm sm:text-base text-gray-200 font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-center">
          <button
            onClick={triggerCelebration}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black text-xs font-sans font-semibold transition-all shadow-glow-gold active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Celebrate with golden confetti</span>
          </button>
        </div>
      </div>
    </div>
  );
};
