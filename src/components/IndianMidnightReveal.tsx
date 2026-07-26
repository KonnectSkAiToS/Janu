import React, { useState, useEffect } from 'react';
import { JANU_PROFILE } from '../data/januData';
import { Sparkles, Clock, Heart, Lock, Unlock, Gift, Copy, Check, Volume2, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

export const IndianMidnightReveal: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [istTimeStr, setIstTimeStr] = useState('');
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isMidnightIST: false,
  });

  useEffect(() => {
    const updateISTTimer = () => {
      // Current UTC time
      const now = new Date();
      
      // Calculate IST time (UTC + 5 hours 30 mins = +330 mins)
      const utcTimestamp = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTimestamp = utcTimestamp + 330 * 60000;
      const istNow = new Date(istTimestamp);

      // Formatted IST string
      setIstTimeStr(
        istNow.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }) + ' IST'
      );

      // Target: July 27th 00:00:00 IST
      let targetYear = istNow.getFullYear();
      let targetIST = new Date(Date.UTC(targetYear, 6, 26, 18, 30, 0)); // July 26 18:30 UTC = July 27 00:00 IST

      // If passed by more than 24 hours, target next year
      if (now.getTime() > targetIST.getTime() + 86400000) {
        targetIST = new Date(Date.UTC(targetYear + 1, 6, 26, 18, 30, 0));
      }

      const diffMs = targetIST.getTime() - now.getTime();

      if (diffMs <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, isMidnightIST: true });
        // Auto unlock at midnight IST
        setIsUnlocked(true);
      } else {
        const totalSecs = Math.floor(diffMs / 1000);
        const days = Math.floor(totalSecs / (3600 * 24));
        const hours = Math.floor((totalSecs % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSecs % 3600) / 60);
        const seconds = totalSecs % 60;

        setCountdown({ days, hours, minutes, seconds, isMidnightIST: false });
      }
    };

    updateISTTimer();
    const timer = setInterval(updateISTTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleManualUnlock = () => {
    setIsUnlocked(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#ec4899', '#f43f5e', '#ffd700', '#a855f7'],
    });
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(JANU_PROFILE.loveMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="reveal-message" className="my-8 scroll-mt-20">
      <div className="relative bg-gradient-to-br from-rose-950 via-purple-950 to-blue-950 border-2 border-rose-500/50 p-6 sm:p-8 rounded-3xl shadow-2xl text-center overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* IST Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-400/40 text-blue-200 text-xs font-semibold mb-4 shadow-lg backdrop-blur-md">
          <Clock className="w-3.5 h-3.5 text-blue-400 animate-spin" />
          <span>Indian Standard Time (IST): {istTimeStr || '00:00 IST'}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
          <span>Midnight 00:00 Birthday Reveal</span>
          <Sparkles className="w-5 h-5 text-yellow-300" />
        </h2>
        <p className="text-xs text-rose-200/80 max-w-sm mx-auto mb-6">
          Set for <span className="font-bold text-rose-300">27th July 00:00 IST</span> — Kamalesh’s official birthday message for his pondati Janu!
        </p>

        {/* IST Countdown Display */}
        {!countdown.isMidnightIST && !isUnlocked && (
          <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto mb-6">
            <div className="bg-black/50 p-3 rounded-2xl border border-rose-500/30">
              <div className="text-xl font-extrabold text-white">{countdown.days}</div>
              <div className="text-[10px] text-rose-300/70 uppercase font-medium">Days</div>
            </div>
            <div className="bg-black/50 p-3 rounded-2xl border border-rose-500/30">
              <div className="text-xl font-extrabold text-white">{countdown.hours}</div>
              <div className="text-[10px] text-rose-300/70 uppercase font-medium">Hours</div>
            </div>
            <div className="bg-black/50 p-3 rounded-2xl border border-rose-500/30">
              <div className="text-xl font-extrabold text-white">{countdown.minutes}</div>
              <div className="text-[10px] text-rose-300/70 uppercase font-medium">Mins</div>
            </div>
            <div className="bg-black/50 p-3 rounded-2xl border border-rose-500/30">
              <div className="text-xl font-extrabold text-blue-400 animate-pulse">{countdown.seconds}</div>
              <div className="text-[10px] text-rose-300/70 uppercase font-medium">Secs</div>
            </div>
          </div>
        )}

        {/* Lock / Unlock State */}
        {!isUnlocked ? (
          <div className="bg-black/40 border border-white/10 p-6 rounded-2xl backdrop-blur-md max-w-md mx-auto">
            <div className="w-14 h-14 rounded-full bg-rose-600/30 border-2 border-rose-400 mx-auto flex items-center justify-center text-rose-300 mb-3 shadow-lg animate-pulse">
              <Lock className="w-7 h-7" />
            </div>

            <p className="text-xs text-rose-100/90 mb-4 italic font-serif">
              "Counting down to 00:00 Indian Time! Can’t wait? Tap below to preview Kamalesh’s special message right now!"
            </p>

            <button
              onClick={handleManualUnlock}
              id="unlock-birthday-msg-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-600 to-blue-600 hover:from-rose-500 hover:to-blue-500 text-white font-bold text-xs shadow-xl shadow-rose-950/60 active:scale-95 transition"
            >
              <Unlock className="w-4 h-4 text-yellow-300" />
              <span>Unlock Midnight Birthday Magic Now 🔑</span>
            </button>
          </div>
        ) : (
          /* UNLOCKED EXACT MESSAGE DISPLAY */
          <div className="bg-gradient-to-br from-blue-950/90 via-purple-950/90 to-rose-950/90 border-2 border-yellow-400/60 p-5 sm:p-7 rounded-3xl text-left shadow-2xl relative animate-fade-in">
            <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
              <div className="flex items-center gap-2 text-yellow-300 font-bold text-xs">
                <Gift className="w-4 h-4 text-yellow-300 animate-bounce" />
                <span>FROM KAMALESH TO JANU PONDATI ❤️</span>
              </div>

              <button
                onClick={handleCopyMessage}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-rose-100 text-xs font-medium transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-rose-300" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Exact User Message */}
            <div className="p-4 rounded-2xl bg-black/50 border border-rose-500/30 text-rose-100 text-xs sm:text-sm font-serif leading-relaxed tracking-wide mb-4 whitespace-pre-wrap">
              {JANU_PROFILE.loveMessage}
            </div>

            <div className="flex items-center justify-between text-[11px] text-rose-300/80 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1 font-semibold text-rose-200">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>Forever Your Kamalesh</span>
              </span>
              <span>27th July 1999 • Angel Princess Ammu</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
