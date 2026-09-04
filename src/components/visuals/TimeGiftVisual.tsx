import React from 'react';
import { Clock, Check } from 'lucide-react';

export const TimeGiftVisual: React.FC = () => {
  const circumstances = [
    {
      condition: "Outside your subject",
      meaning: "Helping me with academic confusion and choices that had nothing to do with Physics."
    },
    {
      condition: "No obligation",
      meaning: "Class was over, yet you chose to stay back, listen, and help me."
    },
    {
      condition: "When you were busy",
      meaning: "Even with packed schedules and staff work, you never turned me away."
    },
    {
      condition: "When time was scarce",
      meaning: "You gave me your personal time to encourage me and steady my nerves."
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Clean Single Main Heading */}
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          “You didn't have to. You still did.”
        </h2>
        <p className="text-sm text-gray-300 font-sans mt-2 max-w-md mx-auto">
          You often supported me even when you were busy and didn't have to.
        </p>
      </div>

      {/* Luminous Solar Chronometer Card */}
      <div className="glass-panel rounded-3xl p-7 sm:p-9 border border-amber-500/30 shadow-2xl text-center relative overflow-hidden">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-dashed border-amber-400/60 flex items-center justify-center bg-amber-500/10 shadow-glow-gold relative">
          <Clock className="w-9 h-9 text-amber-300" />
          <div className="absolute -top-1 right-2 w-3 h-3 bg-amber-400 rounded-full shadow-glow-gold"></div>
        </div>

        <p className="font-handwriting text-2xl sm:text-3xl text-amber-300 mb-2">
          You still made time to talk. You still encouraged me. You still listened.
        </p>

        <p className="text-xs sm:text-sm text-gray-300 font-sans italic max-w-md mx-auto">
          That kind of genuine support is something I will never forget.
        </p>
      </div>

      {/* The 4 Realities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {circumstances.map((c, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-sans flex items-center gap-1.5 mb-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              {c.condition}
            </span>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              {c.meaning}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
