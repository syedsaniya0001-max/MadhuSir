import React, { useState } from 'react';
import { Mic, Calendar, Target, Flame, Heart, TrendingUp, Sparkles } from 'lucide-react';

export const SkillConstellationVisual: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<number>(0);

  const skills = [
    {
      title: "Public Speaking & Confidence",
      subtitle: "Finding my voice",
      icon: <Mic className="w-5 h-5 text-amber-300" />,
      detail: "You encouraged me to step forward, speak clearly in front of others, and overcome my hesitation.",
      badge: "Confidence"
    },
    {
      title: "Proper Study Planning",
      subtitle: "Daily structure with intent",
      icon: <Calendar className="w-5 h-5 text-emerald-300" />,
      detail: "You taught me how to break down heavy subjects, plan realistic study hours, and stay organized.",
      badge: "Discipline"
    },
    {
      title: "Focus & Eliminating Noise",
      subtitle: "Focus amidst pressure",
      icon: <Target className="w-5 h-5 text-cyan-300" />,
      detail: "You helped me block out distractions and anxiety so I could concentrate on what mattered most.",
      badge: "Focus"
    },
    {
      title: "Staying Motivated",
      subtitle: "Energy when progress felt slow",
      icon: <Flame className="w-5 h-5 text-orange-400" />,
      detail: "During tough test weeks, you stood by me and reminded me that setbacks are just part of preparation.",
      badge: "Resilience"
    },
    {
      title: "Genuine Self-Belief",
      subtitle: "Trusting my potential",
      icon: <Heart className="w-5 h-5 text-rose-400" />,
      detail: "Before I trusted my own ability, you believed in me. That gave me the courage to keep pushing.",
      badge: "Belief"
    },
    {
      title: "Continuous Improvement",
      subtitle: "Always striving higher",
      icon: <TrendingUp className="w-5 h-5 text-yellow-300" />,
      detail: "You instilled in me the mindset to never settle, but to keep putting in effort to become better every day.",
      badge: "Growth"
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Clean Single Main Heading */}
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          “You helped me far beyond the subject.”
        </h2>
        <p className="text-sm text-gray-300 font-sans mt-2 max-w-md mx-auto">
          You were my Intermediate Physics lecturer. But your biggest lessons went far beyond any textbook syllabus.
        </p>
      </div>

      {/* Grid of Glowing Nodes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((s, idx) => {
          const isSelected = selectedSkill === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedSkill(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                isSelected
                  ? 'bg-white/15 border-amber-400/80 shadow-glow-gold scale-[1.02]'
                  : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.08] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-amber-400/20 shadow-glow-gold' : 'bg-white/5'}`}>
                  {s.icon}
                </div>
                <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-amber-300/80">
                  {s.badge}
                </span>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-serif font-medium text-white leading-snug">
                  {s.title}
                </h3>
                <span className="text-[11px] font-sans text-gray-400 block mt-0.5">
                  {s.subtitle}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Expanded Active Skill Card */}
      <div className="glass-panel rounded-3xl p-6 border border-amber-500/30 shadow-2xl animate-fade-in">
        <div className="flex items-center gap-2 mb-2 text-amber-300">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <h4 className="font-serif font-medium text-lg text-white">
            {skills[selectedSkill].title}
          </h4>
        </div>
        <p className="text-sm text-gray-200 font-sans leading-relaxed">
          {skills[selectedSkill].detail}
        </p>
      </div>
    </div>
  );
};
