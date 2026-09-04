import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const SteppingPathVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      action: "Encouraged Me",
      description: "Whenever doubt crept in, your reassurance helped me refocus.",
      icon: "🌱"
    },
    {
      action: "Believed In Me",
      description: "You treated me as capable before I even proved it to myself.",
      icon: "✨"
    },
    {
      action: "Corrected Me",
      description: "You didn't criticize — you showed me how my work could be better.",
      icon: "✍️"
    },
    {
      action: "Gave Me Opportunities",
      description: "You put me in situations to test myself and build my voice.",
      icon: "🎯"
    },
    {
      action: "Guided My Direction",
      description: "You helped me structure a realistic daily study plan that worked.",
      icon: "🧭"
    },
    {
      action: "Kept Me Motivated",
      description: "You reminded me that slow days are still part of moving forward.",
      icon: "🔥"
    },
    {
      action: "Nurtured Continuous Improvement",
      description: "You taught me that today's best effort is simply tomorrow's starting line.",
      icon: "🌿"
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Clean Single Main Heading */}
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          “It wasn't one big moment.”
        </h2>
        <p className="text-sm text-gray-300 font-sans mt-2 max-w-md mx-auto">
          Your guidance came through many small, consistent moments over time.
        </p>
      </div>

      {/* Interactive Path List */}
      <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-white/10 shadow-2xl relative">
        <div className="space-y-3 relative">
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-400 via-amber-400 to-rose-400 pointer-events-none hidden sm:block opacity-40 shadow-glow-gold"></div>

          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(isSelected ? null : idx)}
                className={`relative flex items-start gap-4 p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'bg-white/10 border-amber-400/80 shadow-glow-gold scale-[1.01]' 
                    : 'bg-white/[0.03] hover:bg-white/[0.07] border-white/5 hover:border-amber-400/30'
                }`}
              >
                <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-mono font-bold transition-all duration-300 ${
                  isSelected 
                    ? 'bg-amber-400 text-black shadow-glow-gold' 
                    : 'bg-white/10 text-white/80'
                }`}>
                  0{idx + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-serif font-medium text-white flex items-center gap-2">
                      <span>{step.action}</span>
                      <span>{step.icon}</span>
                    </h3>
                    <span className="text-[11px] font-sans text-amber-300/60 flex items-center gap-1">
                      {isSelected ? "Close" : "Details"}
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                  <p className={`text-xs sm:text-sm font-sans mt-1 leading-relaxed ${
                    isSelected ? 'text-amber-100 font-medium block' : 'text-gray-400 line-clamp-1 sm:line-clamp-none'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 text-center">
          <p className="font-handwriting text-xl sm:text-2xl text-amber-300">
            “No single day was dramatic. But looking back, every day counted.”
          </p>
        </div>
      </div>
    </div>
  );
};
