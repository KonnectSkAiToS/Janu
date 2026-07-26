import React, { useState } from 'react';
import { NorthernLightsCanvas } from './components/NorthernLightsCanvas';
import { RomanticAudioPlayer } from './components/RomanticAudioPlayer';
import { HeaderHero } from './components/HeaderHero';
import { IndianMidnightReveal } from './components/IndianMidnightReveal';
import { LongDistanceBridge } from './components/LongDistanceBridge';
import { JanuDreamDestinations } from './components/JanuDreamDestinations';
import { LoveTimeline } from './components/LoveTimeline';
import { PhotoGallery } from './components/PhotoGallery';
import { PassionatePromises } from './components/PassionatePromises';
import { JanuFavoritesGrid } from './components/JanuFavoritesGrid';
import { JanuStrictRules } from './components/JanuStrictRules';
import { HeartfeltLetter } from './components/HeartfeltLetter';
import { BirthdayCakeWish } from './components/BirthdayCakeWish';
import { JanuTriviaQuiz } from './components/JanuTriviaQuiz';
import { Heart, Moon, Sparkles } from 'lucide-react';

export default function App() {
  const [auroraEnabled, setAuroraEnabled] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-rose-500 selection:text-white relative overflow-x-hidden">
      {/* Background Aurora Canvas */}
      {auroraEnabled && <NorthernLightsCanvas />}

      {/* Floating Audio Player */}
      <RomanticAudioPlayer />

      {/* Background Aurora Toggle */}
      <button
        onClick={() => setAuroraEnabled((prev) => !prev)}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-black/40 border border-white/20 text-white/80 hover:bg-black/60 backdrop-blur-md transition text-xs flex items-center gap-1.5"
        title={auroraEnabled ? 'Disable Northern Lights background' : 'Enable Northern Lights background'}
      >
        <Moon className={`w-3.5 h-3.5 ${auroraEnabled ? 'text-purple-400' : 'text-stone-400'}`} />
        <span className="hidden sm:inline text-[11px] font-medium">
          {auroraEnabled ? 'Aurora Sky ON' : 'Aurora Sky OFF'}
        </span>
      </button>

      {/* Mobile-optimized Container */}
      <main className="relative z-10 max-w-md mx-auto px-4 py-6 sm:py-10 flex flex-col gap-6">
        {/* Hero Header */}
        <HeaderHero onScrollToSection={scrollToSection} />

        {/* Indian Midnight 00:00 Reveal & Message */}
        <IndianMidnightReveal />

        {/* London to Hosur Long Distance Bridge & Reassurance */}
        <LongDistanceBridge />

        {/* Dream Bucket List: Time Travel, Moon, Cold Places */}
        <JanuDreamDestinations />

        {/* Love Story Timeline */}
        <LoveTimeline />

        {/* Photo Gallery & Memories */}
        <PhotoGallery />

        {/* Passionate 18+ First Meet Love Lines & Kisses Promises */}
        <PassionatePromises />

        {/* Favorites Delicacies & Footwear */}
        <JanuFavoritesGrid />

        {/* Dislikes & Strict Rules */}
        <JanuStrictRules />

        {/* Heartfelt Love Letter */}
        <HeartfeltLetter />

        {/* Birthday Cake Candle Blow */}
        <BirthdayCakeWish />

        {/* Trivia Quiz */}
        <JanuTriviaQuiz />

        {/* Romantic Footer */}
        <footer className="mt-8 text-center border-t border-rose-900/40 pt-6 pb-12 text-xs text-rose-300/70">
          <div className="flex items-center justify-center gap-1 mb-2 font-serif text-sm text-rose-200">
            <span>Made with endless love by Kamalesh for his Janu</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
          </div>
          <p className="text-[11px] opacity-80 mb-1">
            Vaishu Jananni GM (Janu) • DOB: 27th July 1999 • Turning 27
          </p>
          <p className="text-[10px] text-rose-400/60">
            East Ham, London E6 2AR 🇬🇧 ✈️ Hosur, Tamil Nadu 635126 🇮🇳
          </p>
        </footer>
      </main>
    </div>
  );
}
