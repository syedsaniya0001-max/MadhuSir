import React from 'react';
import { GraduationCap, Users, HeartHandshake } from 'lucide-react';

export const TriadRingsVisual: React.FC = () => {
  const triad = [
    {
      role: "Teacher",
      tagline: "Instructs & corrects",
      description: "You broke down complex Physics into clear thinking, corrected my mistakes, and refused to let me stay complacent.",
      borderColor: "border-emerald-400/40",
      bgBadge: "bg-emerald-400/15 text-emerald-300",
      textColor: "text-emerald-300",
      icon: <GraduationCap className="w-5 h-5 text-emerald-300" />
    },
    {
      role: "Friend",
      tagline: "Listens & stands with me",
      description: "The word friend is intentional. Someone I could talk to without fear. You listened, encouraged me during tough times, and stood by me.",
      borderColor: "border-amber-400/50",
      bgBadge: "bg-amber-400/15 text-amber-300",
      textColor: "text-amber-300",
      icon: <Users className="w-5 h-5 text-amber-300" />
    },
    {
      role: "Well-Wisher",
      tagline: "Wants to see me succeed",
      description: "Someone who genuinely wants to see me grow, achieve great things, and build a rewarding future.",
      borderColor: "border-rose-400/40",
      bgBadge: "bg-rose-400/15 text-rose-300",
      textColor: "text-rose-300",
      icon: <HeartHandshake className="w-5 h-5 text-rose-300" />
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Clean Single Main Heading */}
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          “Teacher. Friend. Well-wisher.”
        </h2>
        <p className="text-sm text-gray-300 font-sans mt-2 max-w-md mx-auto">
          Calling you a lecturer only speaks to what you taught. Calling you a friend and well-wisher speaks to who you are to me.
        </p>
      </div>

      {/* Triad Luminous Rings SVG */}
      <div className="flex justify-center items-center py-2">
        <svg viewBox="0 0 260 100" className="w-60 sm:w-68 h-auto overflow-visible">
          <circle cx="80" cy="50" r="38" fill="none" stroke="#10B981" strokeWidth="2.5" strokeDasharray="4 3" opacity="0.8" filter="drop-shadow(0 0 8px #10B981)" />
          <circle cx="80" cy="50" r="35" fill="#047857" opacity="0.2" />

          <circle cx="130" cy="50" r="40" fill="none" stroke="#F59E0B" strokeWidth="3" filter="drop-shadow(0 0 12px #F59E0B)" />
          <circle cx="130" cy="50" r="36" fill="#F59E0B" opacity="0.25" />

          <circle cx="180" cy="50" r="38" fill="none" stroke="#FB7185" strokeWidth="2.5" strokeDasharray="4 3" opacity="0.8" filter="drop-shadow(0 0 8px #FB7185)" />
          <circle cx="180" cy="50" r="35" fill="#E11D48" opacity="0.2" />

          <circle cx="130" cy="50" r="4" fill="#FDE68A" filter="drop-shadow(0 0 6px #F59E0B)" />
        </svg>
      </div>

      {/* Three Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {triad.map((t, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl glass-panel border ${t.borderColor} flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`p-2 rounded-xl ${t.bgBadge}`}>
                  {t.icon}
                </span>
                <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-white/50">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="font-serif text-xl text-white mb-1">
                {t.role}
              </h3>
              <p className={`text-xs font-sans font-medium mb-2 ${t.textColor}`}>
                {t.tagline}
              </p>
              <p className="text-xs text-gray-300 font-sans leading-relaxed">
                {t.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
        <p className="font-handwriting text-xl sm:text-2xl text-amber-300">
          “The word ‘friend’ is intentional. Because you never stood above me — you stood with me.”
        </p>
      </div>
    </div>
  );
};
