import React, { useState } from 'react';
import { Heart, Flame, Sparkles, Lock, Unlock, Eye, Gift, Check, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LoveLine {
  id: number;
  title: string;
  emoji: string;
  line: string;
  tag: string;
}

const LOVE_LINES_18: LoveLine[] = [
  {
    id: 1,
    title: 'Endless Kisses On First Meet 💋',
    emoji: '💋',
    line: 'The moment my eyes see you in person, I will pull you close into my arms and shower you with endless, unbroken kisses on your forehead, cheeks, and lips!',
    tag: 'First Sight Magic'
  },
  {
    id: 2,
    title: 'Tightest Hug In The World 🫂',
    emoji: '🫂',
    line: 'I will hold you so tight against my chest that you will hear my heart beating fast, whispering "My pondati is finally in my arms, I will never let you go!"',
    tag: 'London to Hosur'
  },
  {
    id: 3,
    title: 'Forehead Kiss of Respect & Life 🌹',
    emoji: '🌹',
    line: 'Placing a long, warm kiss on your forehead as a sacred vow that Kamalesh will protect, cherish, and love Janu until life ends.',
    tag: 'Sacred Vow'
  },
  {
    id: 4,
    title: 'Cheek Kisses Until You Blush 🥰',
    emoji: '🥰',
    line: 'Kissing both your sweet cheeks non-stop until you giggle, hide your blushing face in my shoulders, and call me your crazy Kamalesh!',
    tag: 'Sweet Blushes'
  },
  {
    id: 5,
    title: 'Holding Hands & Sweet Cuddles 🤝✨',
    emoji: '🤝',
    line: 'Interlocking my fingers with yours, wrapping one arm around your waist, and whispering sweet passion directly into your ears.',
    tag: 'Intimate Warmth'
  },
  {
    id: 6,
    title: 'Endless Kisses & Our Future Kids 👶❤️',
    emoji: '👶',
    line: 'Waiting eagerly to hold you, kiss you endlessly every single night, and welcome our sweet little babies into our dream family!',
    tag: 'Our Dream Family'
  }
];

export const PassionatePromises: React.FC = () => {
  const [kissCount, setKissCount] = useState(100);
  const [activeWhisper, setActiveWhisper] = useState<LoveLine | null>(null);
  const [sentKiss, setSentKiss] = useState(false);

  const handleSendKiss = () => {
    setKissCount((prev) => prev + 1);
    setSentKiss(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#f43f5e', '#ec4899', '#e11d48', '#fb7185', '#ffd700']
    });

    setTimeout(() => setSentKiss(false), 2000);
  };

  return (
    <section id="passionate-love" className="my-8 scroll-mt-20">
      <div className="relative bg-gradient-to-br from-rose-950 via-purple-950 to-stone-950 border-2 border-rose-500/50 p-5 sm:p-7 rounded-3xl shadow-2xl overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute -top-12 -right-12 w-44 h-44 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold mb-3 border border-rose-500/30">
          <Flame className="w-3.5 h-3.5 text-rose-400 animate-bounce" />
          <span>Passionate 18+ First Meet Love Lines 💋🔥</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <span>Endless Kisses & Passion Promises</span>
          <Sparkles className="w-5 h-5 text-yellow-300" />
        </h2>
        <p className="text-xs text-rose-200/80 mb-6 leading-relaxed">
          What Kamalesh will do the exact moment he meets his sweet pondati Janu in Hosur!
        </p>

        {/* Floating Kiss Counter */}
        <div className="bg-gradient-to-r from-rose-900/60 via-purple-900/60 to-rose-950/80 border border-rose-400/40 p-4 rounded-2xl mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <div className="text-xs text-rose-300 font-bold uppercase tracking-wider mb-0.5">
              Kamalesh’s Kiss Meter For Janu 💋
            </div>
            <div className="text-2xl font-extrabold text-white flex items-center justify-center sm:justify-start gap-1">
              <span>{kissCount.toLocaleString()}</span>
              <span className="text-rose-400 text-sm font-normal italic">Endless Kisses & Counting!</span>
            </div>
          </div>

          <button
            onClick={handleSendKiss}
            id="send-kiss-btn"
            className="px-4 py-2.5 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-xs shadow-lg flex items-center gap-2 active:scale-95 transition shrink-0"
          >
            <Heart className={`w-4 h-4 ${sentKiss ? 'fill-white animate-ping' : 'fill-white'}`} />
            <span>{sentKiss ? 'Kiss Sent To Pondati! 💋' : 'Send A Sweet Kiss 💋'}</span>
          </button>
        </div>

        {/* Grid of Passionate Love Lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
          {LOVE_LINES_18.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveWhisper(item)}
              className="bg-black/50 border border-rose-500/30 hover:border-rose-400/70 p-4 rounded-2xl shadow-lg transition cursor-pointer active:scale-95 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl group-hover:scale-125 transition-transform">
                    {item.emoji}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/30">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-white mb-1 group-hover:text-rose-300 transition">
                  {item.title}
                </h3>
                <p className="text-[11px] text-rose-200/80 leading-relaxed italic font-serif line-clamp-3">
                  "{item.line}"
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-rose-300 font-semibold flex items-center gap-1">
                <Flame className="w-3 h-3 text-rose-400" />
                <span>Tap to read full passionate promise 💋</span>
              </div>
            </div>
          ))}
        </div>

        {/* Special Reassurance Box */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/80 to-rose-950/80 border border-purple-400/40 text-center">
          <p className="text-xs text-rose-100 font-serif italic leading-relaxed">
            "I am missing you a lot pondati... waiting for your kisses and our kids! Once again wish you happy birthday my angel princess ammu pattu chlm!"
          </p>
          <div className="mt-2 text-[10px] font-bold text-yellow-300 uppercase tracking-widest">
            — Forever Yours, Kamalesh 💋❤️
          </div>
        </div>
      </div>

      {/* Modal for Full Passionate Whisper */}
      {activeWhisper && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveWhisper(null)}
        >
          <div
            className="relative max-w-sm w-full bg-gradient-to-br from-rose-950 via-purple-950 to-black border-2 border-rose-400/70 rounded-3xl p-6 text-white shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-5xl mb-3 animate-bounce">{activeWhisper.emoji}</div>
            <h3 className="text-base font-bold text-rose-200 mb-1">{activeWhisper.title}</h3>
            <span className="inline-block text-[10px] px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-semibold mb-4 border border-rose-500/30">
              {activeWhisper.tag}
            </span>

            <div className="p-4 rounded-2xl bg-black/60 border border-rose-500/40 text-rose-100 text-xs sm:text-sm font-serif italic leading-relaxed mb-5">
              "{activeWhisper.line}"
            </div>

            <button
              onClick={() => setActiveWhisper(null)}
              className="px-5 py-2 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-lg transition"
            >
              Hold Tight & Dream Of First Meet 💋
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
