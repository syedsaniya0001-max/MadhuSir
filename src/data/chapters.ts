export interface ChapterData {
  id: number;
  chapterNumber: string;
  tag: string;
  title: string;
  subtitle?: string;
  quote?: string;
  theme: {
    primaryAccent: string;
    badgeBg: string;
    badgeText: string;
    borderAccent: string;
  };
}

export const CHAPTERS: ChapterData[] = [
  {
    id: 1,
    chapterNumber: "01",
    tag: "FOR MADHU SIR",
    title: "“I don't really know how to thank you.”",
    subtitle: "“So I made this.”",
    quote: "Not for everything you've taught me in a classroom, but for everything your guidance has quietly meant to me.",
    theme: {
      primaryAccent: "#BF8A31",
      badgeBg: "bg-amber-100/70",
      badgeText: "text-amber-900",
      borderAccent: "border-amber-200/60"
    }
  },
  {
    id: 2,
    chapterNumber: "02",
    tag: "WHERE IT STARTED",
    title: "“I was still figuring things out.”",
    subtitle: "Uncertainty, new beginnings, and finding footing.",
    quote: "It wasn't a movie scene. It was just a student learning how to stand up in a new world.",
    theme: {
      primaryAccent: "#52735D",
      badgeBg: "bg-emerald-100/70",
      badgeText: "text-emerald-900",
      borderAccent: "border-emerald-200/60"
    }
  },
  {
    id: 3,
    chapterNumber: "03",
    tag: "THE SMALL THINGS",
    title: "“It wasn't one big moment.”",
    subtitle: "A steady sequence of quiet nudges.",
    quote: "Growth didn't arrive in a single speech. It was built across countless ordinary days.",
    theme: {
      primaryAccent: "#A06E1E",
      badgeBg: "bg-yellow-100/70",
      badgeText: "text-yellow-900",
      borderAccent: "border-yellow-200/60"
    }
  },
  {
    id: 4,
    chapterNumber: "04",
    tag: "ONE SMALL EXAMPLE",
    title: "“Even a correction could become growth.”",
    subtitle: "A philosophy written in the margins.",
    quote: "Notice → Correct → Improve → Become better.",
    theme: {
      primaryAccent: "#C06649",
      badgeBg: "bg-orange-100/70",
      badgeText: "text-orange-900",
      borderAccent: "border-orange-200/60"
    }
  },
  {
    id: 5,
    chapterNumber: "05",
    tag: "MORE THAN PHYSICS",
    title: "“You helped me far beyond the subject.”",
    subtitle: "Tools for life outside the textbook.",
    quote: "You were my Intermediate Physics lecturer, but your lessons prepared me for everything else.",
    theme: {
      primaryAccent: "#7C6F93",
      badgeBg: "bg-purple-100/70",
      badgeText: "text-purple-900",
      borderAccent: "border-purple-200/60"
    }
  },
  {
    id: 6,
    chapterNumber: "06",
    tag: "WHEN YOU DIDN'T HAVE TO",
    title: "“You didn't have to. You still did.”",
    subtitle: "The generosity of genuine care.",
    quote: "When it wasn't your subject, when you were busy, you still chose to make time.",
    theme: {
      primaryAccent: "#A34F34",
      badgeBg: "bg-rose-100/70",
      badgeText: "text-rose-900",
      borderAccent: "border-rose-200/60"
    }
  },
  {
    id: 7,
    chapterNumber: "07",
    tag: "THE THING I REMEMBER MOST",
    title: "“You trusted me.”",
    subtitle: "An unchanging anchor across the years.",
    quote: "Years passed, but the way you believed in me didn't.",
    theme: {
      primaryAccent: "#BF8A31",
      badgeBg: "bg-amber-100/70",
      badgeText: "text-amber-900",
      borderAccent: "border-amber-200/60"
    }
  },
  {
    id: 8,
    chapterNumber: "08",
    tag: "NOT JUST A LECTURER",
    title: "“Teacher. Friend. Well-wisher.”",
    subtitle: "Three roles that shaped my path.",
    quote: "The word 'friend' is intentional. You stood for us and stood with us.",
    theme: {
      primaryAccent: "#52735D",
      badgeBg: "bg-emerald-100/70",
      badgeText: "text-emerald-900",
      borderAccent: "border-emerald-200/60"
    }
  },
  {
    id: 9,
    chapterNumber: "09",
    tag: "WHAT PEOPLE DON'T SEE",
    title: "“You were one of my roots.”",
    subtitle: "Growth is what happens underneath.",
    quote: "People see the tree. They don't always see the roots. I do.",
    theme: {
      primaryAccent: "#405B49",
      badgeBg: "bg-stone-200/70",
      badgeText: "text-stone-900",
      borderAccent: "border-stone-300/60"
    }
  },
  {
    id: 10,
    chapterNumber: "10",
    tag: "4 YEARS LATER…",
    title: "“The student you once guided is still growing.”",
    subtitle: "Transformation through time and practice.",
    quote: "From 'Can I really do this?' to 'Let me try.'",
    theme: {
      primaryAccent: "#52735D",
      badgeBg: "bg-teal-100/70",
      badgeText: "text-teal-900",
      borderAccent: "border-teal-200/60"
    }
  },
  {
    id: 11,
    chapterNumber: "11",
    tag: "THE DREAM YOU KEEP SAYING",
    title: "“I want to see you as a topper.”",
    subtitle: "High packages, good software jobs, and big aspirations.",
    quote: "You keep telling me what you wish for my future, and I hear every word.",
    theme: {
      primaryAccent: "#BF8A31",
      badgeBg: "bg-amber-100/70",
      badgeText: "text-amber-900",
      borderAccent: "border-amber-200/60"
    }
  },
  {
    id: 12,
    chapterNumber: "12",
    tag: "MY HONEST PROMISE",
    title: "“I won't stop trying.”",
    subtitle: "A real promise from a student to their teacher.",
    quote: "I can't promise I'll always be the topper you want. But I can promise I will never stop putting in effort.",
    theme: {
      primaryAccent: "#A34F34",
      badgeBg: "bg-orange-100/70",
      badgeText: "text-orange-900",
      borderAccent: "border-orange-200/60"
    }
  },
  {
    id: 13,
    chapterNumber: "13",
    tag: "AFTER ALL THESE YEARS",
    title: "“Some places cannot be replaced.”",
    subtitle: "One student among many, but deeply grateful.",
    quote: "I know you have many students. But what you gave me cannot be replaced.",
    theme: {
      primaryAccent: "#7C6F93",
      badgeBg: "bg-slate-200/70",
      badgeText: "text-slate-900",
      borderAccent: "border-slate-300/60"
    }
  },
  {
    id: 14,
    chapterNumber: "14",
    tag: "TEACHERS' DAY",
    title: "“Happy Teachers' Day, Madhu Sir.”",
    subtitle: "For every correction, encouragement, and choice to be there.",
    quote: "For the countless ways you believed in me when I needed it most.",
    theme: {
      primaryAccent: "#52735D",
      badgeBg: "bg-emerald-100/70",
      badgeText: "text-emerald-900",
      borderAccent: "border-emerald-200/60"
    }
  },
  {
    id: 15,
    chapterNumber: "15",
    tag: "ONE LAST THING",
    title: "“I'll always be your student.”",
    subtitle: "A closing letter.",
    quote: "I may not remember every lesson taught in a classroom, but I will always remember the teacher who helped me become a better version of myself.",
    theme: {
      primaryAccent: "#BF8A31",
      badgeBg: "bg-amber-100/70",
      badgeText: "text-amber-900",
      borderAccent: "border-amber-200/60"
    }
  }
];
