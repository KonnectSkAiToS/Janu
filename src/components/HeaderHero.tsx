import React, { useState, useEffect } from 'react';
import { JANU_PROFILE } from '../data/januData';
import { Heart, Calendar, Sparkles, Clock, Compass, GraduationCap, Stars, Plane, Lock } from 'lucide-react';
import heroAuroraImg from '../assets/images/janu_hero_aurora_1785041438991.jpg';

interface HeaderHeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export const HeaderHero: React.FC<HeaderHeroProps> = ({ onScrollToSection }) => {
  // Days since 31st Dec 2024
  const [daysSinceTalk, setDaysSinceTalk] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  
  // Birthday countdown (27th July)
  const [bdayCountdown, setBdayCountdown] = useState({ days: 0, hours: 0, mins: 0, secs: 0, isToday: false });

  useEffect(() => {
    const updateCounters = () => {
      const now = new Date();

      // 1. First Talk: Dec 31, 2024 23:50:00
      const talkStart = new Date('2024-12-31T23:50:00');
      const talkDiff = Math.max(0, now.getTime() - talkStart.getTime());
      
      const totalSecsTalk = Math.floor(talkDiff / 1000);
      const daysT = Math.floor(totalSecsTalk / (3600 * 24));
      const hoursT = Math.floor((totalSecsTalk % (3600 * 24)) / 3600);
      const minsT = Math.floor((totalSecsTalk % 3600) / 60);
      const secsT = totalSecsTalk % 60;

      setDaysSinceTalk({ days: daysT, hours: hoursT, mins: minsT, secs: secsT });

      // 2. Birthday Countdown to July 27th
      let currentYear = now.getFullYear();
      let bdayTarget = new Date(`${currentYear}-07-27T00:00:00`);
      
      // If July 27 this year is passed by more than 1 day, target next year
      if (now.getTime() - bdayTarget.getTime() > 86400000) {
        bdayTarget = new Date(`${currentYear + 1}-07-27T00:00:00`);
      }

      const isToday = now.getMonth() === 6 && now.getDate() === 27; // July is month 6 (0-indexed)
      const bdayDiff = Math.max(0, bdayTarget.getTime() - now.getTime());
      
      const totalSecsBday = Math.floor(bdayDiff / 1000);
      const daysB = Math.floor(totalSecsBday / (3600 * 24));
      const hoursB = Math.floor((totalSecsBday % (3600 * 24)) / 3600);
      const minsB = Math.floor((totalSecsBday % 3600) / 60);
      const secsB = totalSecsBday % 60;

      setBdayCountdown({ days: daysB, hours: hoursB, mins: minsB, secs: secsB, isToday });
    };

    updateCounters();
    const interval = setInterval(updateCounters, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-rose-900/40 bg-gradient-to-b from-purple-950/80 via-rose-950/70 to-black/90 p-5 sm:p-6 shadow-2xl backdrop-blur-md">
      {/* Decorative Aurora Graphic Header */}
      <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden mb-6 shadow-xl border border-rose-500/20">
        <img
          src={heroAuroraImg}
          alt="Northern Lights with Rose"
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600/80 text-white text-xs font-semibold backdrop-blur-md w-max mb-2 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>27th July Birthday Celebration</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            Vaishu Jananni GM <span className="text-rose-400 font-serif italic">(Janu)</span> ❤️
          </h1>
          <p className="text-xs sm:text-sm text-rose-200/90 mt-1 flex items-center gap-2">
            <span>Dhanush Rasi 🏹</span> • <span>Uthiradam Nakshatram ✨</span>
          </p>
        </div>
      </div>

      {/* Main Birthday Wish Tag */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-rose-900/30 border border-rose-500/30 text-rose-100 mb-2 max-w-full">
          <Heart className="w-5 h-5 text-rose-500 mr-2 animate-bounce shrink-0" />
          <span className="text-xs sm:text-sm font-bold text-rose-200">
            Happy 27th Birthday Pondati from Kamalesh! ❤️
          </span>
        </div>
        <p className="text-xs text-rose-300/80 max-w-sm mx-auto">
          London ✈️ Hosur • Met on Instagram on 31st Dec 2024 • Planning our life together until life ends!
        </p>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs">
        <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-2.5 text-rose-100">
          <GraduationCap className="w-5 h-5 text-purple-400 shrink-0" />
          <div>
            <div className="font-semibold text-purple-300">MBA Degree</div>
            <div className="text-[10px] text-purple-200/70">Marketing & HR Mgmt</div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-2.5 text-rose-100">
          <Stars className="w-5 h-5 text-yellow-400 shrink-0" />
          <div>
            <div className="font-semibold text-yellow-300">Astrology</div>
            <div className="text-[10px] text-yellow-200/70">Dhanush • Uthiradam</div>
          </div>
        </div>
      </div>

      {/* Live Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Days Since First Talk */}
        <div className="bg-gradient-to-br from-rose-900/40 to-purple-950/60 border border-rose-500/30 rounded-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs text-rose-300 font-medium mb-2">
            <Clock className="w-3.5 h-3.5 text-rose-400" />
            <span>Time Since Kamalesh Replied (31 Dec 2024)</span>
          </div>
          <div className="grid grid-cols-4 gap-1">
            <div className="bg-black/40 p-2 rounded-lg border border-rose-500/20">
              <div className="text-lg font-extrabold text-white">{daysSinceTalk.days}</div>
              <div className="text-[9px] text-rose-300/70 uppercase">Days</div>
            </div>
            <div className="bg-black/40 p-2 rounded-lg border border-rose-500/20">
              <div className="text-lg font-extrabold text-white">{daysSinceTalk.hours}</div>
              <div className="text-[9px] text-rose-300/70 uppercase">Hrs</div>
            </div>
            <div className="bg-black/40 p-2 rounded-lg border border-rose-500/20">
              <div className="text-lg font-extrabold text-white">{daysSinceTalk.mins}</div>
              <div className="text-[9px] text-rose-300/70 uppercase">Mins</div>
            </div>
            <div className="bg-black/40 p-2 rounded-lg border border-rose-500/20">
              <div className="text-lg font-extrabold text-rose-400 animate-pulse">{daysSinceTalk.secs}</div>
              <div className="text-[9px] text-rose-300/70 uppercase">Secs</div>
            </div>
          </div>
        </div>

        {/* Birthday Countdown */}
        <div className="bg-gradient-to-br from-purple-900/40 to-rose-950/60 border border-purple-500/30 rounded-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs text-purple-300 font-medium mb-2">
            <Calendar className="w-3.5 h-3.5 text-purple-400" />
            <span>{bdayCountdown.isToday ? "It's Janu's Birthday Today! 🎉" : "Countdown to 27th July (IST)"}</span>
          </div>
          {bdayCountdown.isToday ? (
            <div className="py-2 text-rose-300 font-bold text-sm animate-pulse">
              🎂 Today is the day! Blow out the candles! 🎈
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-1">
              <div className="bg-black/40 p-2 rounded-lg border border-purple-500/20">
                <div className="text-lg font-extrabold text-white">{bdayCountdown.days}</div>
                <div className="text-[9px] text-purple-300/70 uppercase">Days</div>
              </div>
              <div className="bg-black/40 p-2 rounded-lg border border-purple-500/20">
                <div className="text-lg font-extrabold text-white">{bdayCountdown.hours}</div>
                <div className="text-[9px] text-purple-300/70 uppercase">Hrs</div>
              </div>
              <div className="bg-black/40 p-2 rounded-lg border border-purple-500/20">
                <div className="text-lg font-extrabold text-white">{bdayCountdown.mins}</div>
                <div className="text-[9px] text-purple-300/70 uppercase">Mins</div>
              </div>
              <div className="bg-black/40 p-2 rounded-lg border border-purple-500/20">
                <div className="text-lg font-extrabold text-purple-400 animate-pulse">{bdayCountdown.secs}</div>
                <div className="text-[9px] text-purple-300/70 uppercase">Secs</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Navigation Pills for Mobile Touch */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
        <button
          onClick={() => onScrollToSection('reveal-message')}
          className="px-3.5 py-1.5 rounded-full bg-blue-950/90 hover:bg-blue-900 border border-blue-400/40 text-blue-200 shrink-0 flex items-center gap-1 font-semibold transition"
        >
          <Lock className="w-3 h-3 text-yellow-300" />
          <span>00:00 Reveal</span>
        </button>
        <button
          onClick={() => onScrollToSection('long-distance')}
          className="px-3.5 py-1.5 rounded-full bg-rose-950/90 hover:bg-rose-900 border border-rose-400/40 text-rose-200 shrink-0 flex items-center gap-1 font-semibold transition"
        >
          <Plane className="w-3 h-3 text-rose-400" />
          <span>London-Hosur</span>
        </button>
        <button
          onClick={() => onScrollToSection('dreams')}
          className="px-3.5 py-1.5 rounded-full bg-purple-950/90 hover:bg-purple-900 border border-purple-400/40 text-purple-200 shrink-0 flex items-center gap-1 font-semibold transition"
        >
          <Compass className="w-3 h-3 text-purple-400" />
          <span>Dream Travels</span>
        </button>
        <button
          onClick={() => onScrollToSection('timeline')}
          className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-rose-200 shrink-0 flex items-center gap-1 transition"
        >
          <span>💬 Story</span>
        </button>
        <button
          onClick={() => onScrollToSection('gallery')}
          className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-rose-200 shrink-0 flex items-center gap-1 transition"
        >
          <span>📷 Gallery</span>
        </button>
        <button
          onClick={() => onScrollToSection('passionate-love')}
          className="px-3.5 py-1.5 rounded-full bg-rose-950/90 hover:bg-rose-900 border border-rose-400/40 text-rose-200 shrink-0 flex items-center gap-1 font-semibold transition"
        >
          <span>💋 First Meet Kisses</span>
        </button>
        <button
          onClick={() => onScrollToSection('favorites')}
          className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-rose-200 shrink-0 flex items-center gap-1 transition"
        >
          <span>🍬 Favorites</span>
        </button>
      </div>
    </div>
  );
};
