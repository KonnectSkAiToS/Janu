import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Cake, Sparkles, Heart, Flame } from 'lucide-react';

export const BirthdayCakeWish: React.FC = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [wishBlown, setWishBlown] = useState(false);

  const handleBlowCandles = () => {
    setCandlesLit(false);
    setWishBlown(true);

    // Trigger Heart Confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e11d48', '#f43f5e', '#be123c', '#fb7185', '#ffd700']
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#e11d48', '#ffd700']
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#e11d48', '#ffd700']
      });
    }, 250);
  };

  const handleRelight = () => {
    setCandlesLit(true);
    setWishBlown(false);
  };

  return (
    <section id="cake" className="my-8 scroll-mt-20">
      <div className="bg-gradient-to-br from-rose-950 via-purple-950 to-black border-2 border-rose-500/40 p-6 sm:p-8 rounded-3xl shadow-2xl text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-rose-600/20 blur-3xl rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          <span>Interactive 27th Birthday Cake</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Make a Wish, Janu! 🎂
        </h2>
        <p className="text-xs text-rose-200/80 max-w-sm mx-auto mb-6">
          {candlesLit
            ? 'Tap the button below to blow out the candles and make your secret birthday wish!'
            : 'Your wish has been launched into the universe with endless love! ✨'}
        </p>

        {/* Cake Visualization */}
        <div className="relative w-48 h-44 mx-auto mb-6 flex flex-col items-center justify-end">
          {/* Candles */}
          <div className="flex justify-center gap-4 mb-1 z-10">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col items-center">
                {/* Flame */}
                {candlesLit ? (
                  <div className="animate-pulse">
                    <Flame className="w-5 h-5 text-amber-400 fill-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                  </div>
                ) : (
                  <div className="w-1.5 h-2 bg-gray-400/50 rounded-full animate-fade-out" />
                )}
                {/* Wax Stick */}
                <div className="w-2 h-8 bg-gradient-to-b from-rose-200 to-rose-400 rounded-sm border border-rose-300 shadow-md" />
              </div>
            ))}
          </div>

          {/* Cake Layers */}
          <div className="w-36 h-10 bg-gradient-to-r from-rose-700 via-rose-500 to-rose-700 rounded-t-2xl border-t-2 border-rose-300 shadow-md flex items-center justify-center text-white text-xs font-bold">
            <span>27 YEARS OLD</span>
          </div>
          <div className="w-44 h-12 bg-gradient-to-r from-purple-900 via-rose-900 to-purple-900 rounded-b-2xl border-t-2 border-rose-400/40 shadow-xl flex items-center justify-center text-rose-200 text-[11px] font-medium tracking-wide">
            <span>Vaishu Jananni GM</span>
          </div>
        </div>

        {/* Action Button */}
        {candlesLit ? (
          <button
            onClick={handleBlowCandles}
            id="blow-candles-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs shadow-xl shadow-rose-900/50 active:scale-95 transition"
          >
            <Flame className="w-4 h-4 text-yellow-300 animate-bounce" />
            <span>Blow Out Candles 🕯️</span>
          </button>
        ) : (
          <div>
            <div className="p-4 rounded-2xl bg-white/10 border border-rose-500/30 text-rose-100 text-xs font-serif italic mb-4 max-w-sm mx-auto animate-bounce-short">
              "May all your dreams come true, my dearest Janu. May our love grow deeper every single second until we meet in person!" ❤️
            </div>
            <button
              onClick={handleRelight}
              className="text-xs text-rose-300 hover:text-white underline font-medium"
            >
              Relight Candles 🕯️
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
