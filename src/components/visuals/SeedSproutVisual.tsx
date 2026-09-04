import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const SeedSproutVisual: React.FC = () => {
  const [pulsed, setPulsed] = useState(false);

  const initialStruggles = [
    "Handling a new, demanding environment",
    "Uncertain about myself and my abilities",
    "Learning how to deal with mistakes",
    "Learning to believe in myself",
    "Finding proper direction to study well",
    "Learning that improvement takes daily effort"
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Clean Single Main Heading */}
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          “I was still figuring things out.”
        </h2>
      </div>

      {/* Bioluminescent Sprout Interactive Card */}
      <div 
        onClick={() => setPulsed(!pulsed)}
        className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl text-center cursor-pointer group transition-all duration-300 hover:border-emerald-400/60"
      >
        <div className="h-36 sm:h-44 w-full flex items-center justify-center relative overflow-hidden">
          <svg viewBox="0 0 200 140" className="w-56 h-full transition-transform duration-700 ease-out">
            <ellipse cx="100" cy="115" rx="80" ry="20" fill="#042F2E" opacity="0.6" />
            <path d="M20,110 Q100,105 180,110" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
            
            <circle cx="100" cy="118" r={pulsed ? "28" : "18"} fill="none" stroke="#F59E0B" strokeWidth="1" opacity={pulsed ? "0.6" : "0.25"} className="transition-all duration-700" />
            <circle cx="100" cy="118" r="8" fill="#F59E0B" opacity="0.9" filter="drop-shadow(0 0 8px #F59E0B)" />

            <path 
              d="M100,118 Q97,80 100,50" 
              fill="none" 
              stroke="#34D399" 
              strokeWidth="3" 
              strokeLinecap="round" 
              filter="drop-shadow(0 0 6px #10B981)"
            />

            <path 
              d="M100,75 C82,70 70,52 78,40 C90,40 98,60 100,75 Z" 
              fill="#059669" 
              stroke="#34D399" 
              strokeWidth="1.5" 
              filter="drop-shadow(0 0 8px #10B981)"
            />
            <path 
              d="M100,60 C118,52 130,35 122,25 C110,25 102,45 100,60 Z" 
              fill="#10B981" 
              stroke="#6EE7B7" 
              strokeWidth="1.5" 
              filter="drop-shadow(0 0 10px #34D399)"
            />

            <circle cx="100" cy="48" r="3" fill="#FDE68A" filter="drop-shadow(0 0 6px #F59E0B)" />
            <path d="M100,122 Q92,132 88,138" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <path d="M100,122 Q108,132 112,139" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          </svg>
        </div>

        <p className="text-sm text-gray-300 font-sans italic max-w-md mx-auto">
          Every tree begins as a small, quiet seed beneath the soil. It doesn’t know yet how tall it will grow — only that it needs guidance to start.
        </p>
      </div>

      {/* Honest Reality Points */}
      <div className="glass-panel-subtle rounded-2xl p-6 border border-white/10 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {initialStruggles.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-gray-200 font-sans">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-white/10 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed text-center">
          I was not confident at first. What changed things for me was not an overnight speech — it was having a teacher who consistently noticed, corrected, and guided me forward.
        </div>
      </div>
    </div>
  );
};
