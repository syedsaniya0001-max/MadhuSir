import React from 'react';
import { Award, Briefcase, Laptop, Sparkles, ArrowRight } from 'lucide-react';

export const FutureDeskVisual: React.FC = () => {
  const dreams = [
    {
      title: "“As a Topper”",
      subtitle: "Academic & intellectual excellence",
      description: "You never wanted me to be average. You pushed me to aim for the very top of my cohort.",
      icon: <Award className="w-6 h-6 text-amber-300" />,
      badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/40",
      glow: "shadow-glow-gold"
    },
    {
      title: "“The Highest Package”",
      subtitle: "Rewarding my effort & skills",
      description: "You want my hard work to be recognized and rewarded with the best opportunities.",
      icon: <Briefcase className="w-6 h-6 text-emerald-300" />,
      badgeColor: "bg-emerald-400/20 text-emerald-300 border-emerald-400/40",
      glow: "shadow-glow-emerald"
    },
    {
      title: "“A Great Software Job”",
      subtitle: "Thriving in my career",
      description: "You want to see me building real software, solving big problems, and standing on my own feet.",
      icon: <Laptop className="w-6 h-6 text-cyan-300" />,
      badgeColor: "bg-cyan-400/20 text-cyan-300 border-cyan-400/40",
      glow: "shadow-[0_0_25px_rgba(34,211,238,0.25)]"
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Clean Single Main Heading */}
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          “I want to see you as a topper.”
        </h2>
        <p className="text-sm text-gray-300 font-sans mt-2 max-w-md mx-auto">
          Whenever we talk, the conversation always turns to your big hopes for my future.
        </p>
      </div>

      {/* 3 Inspiring Milestone Cards (Redesigned & Attractive) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {dreams.map((d, idx) => (
          <div 
            key={idx}
            className={`p-5 rounded-2xl glass-panel border border-white/10 ${d.glow} flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {d.icon}
                </div>
                <span className={`text-[10px] font-sans font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${d.badgeColor}`}>
                  Goal 0{idx + 1}
                </span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-white font-medium mb-1">
                {d.title}
              </h3>
              <p className="text-xs font-sans text-amber-300/80 mb-2 font-medium">
                {d.subtitle}
              </p>
              <p className="text-xs text-gray-300 font-sans leading-relaxed">
                {d.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* The Heartfelt Personal Reflection */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl text-center space-y-3">
        <blockquote className="font-serif italic text-lg sm:text-2xl text-gold-gradient leading-relaxed max-w-lg mx-auto">
          “You keep telling me you want to see me as a topper, with the highest package, doing well in a good software job.”
        </blockquote>
        
        <p className="text-xs sm:text-sm text-gray-300 font-sans max-w-md mx-auto leading-relaxed">
          It makes me smile every time. Because behind those high expectations is a teacher who genuinely cares and believes I can achieve great things.
        </p>
      </div>

      {/* Gentle transition hint */}
      <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-xs sm:text-sm text-amber-200 font-sans text-center flex items-center justify-center gap-2 shadow-glow-gold">
        <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
        <span>Which brings me to the only honest promise I can make you...</span>
      </div>
    </div>
  );
};
