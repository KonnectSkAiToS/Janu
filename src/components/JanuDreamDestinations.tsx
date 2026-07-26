import React, { useState } from 'react';
import { DREAM_DESTINATIONS, DreamDestination } from '../data/januData';
import { Compass, Sparkles, Heart, Plane, Mountain, Flame, Check } from 'lucide-react';

export const JanuDreamDestinations: React.FC = () => {
  const [selectedDest, setSelectedDest] = useState<DreamDestination | null>(null);

  return (
    <section id="dreams" className="my-8 scroll-mt-20">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <span>Janu's Dream Time Travel & Travel List</span>
          <Compass className="w-5 h-5 text-blue-400 animate-spin-slow" />
        </h2>
        <p className="text-xs text-rose-200/70 mt-0.5">
          From time travel & the moon to cold paradises across the world!
        </p>
      </div>

      {/* Grid of Dreams */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {DREAM_DESTINATIONS.map((dest) => (
          <div
            key={dest.id}
            onClick={() => setSelectedDest(dest)}
            className="bg-gradient-to-br from-rose-950/50 via-purple-950/40 to-blue-950/60 border border-rose-900/30 hover:border-rose-400/60 p-3.5 rounded-2xl shadow-lg transition cursor-pointer active:scale-95 group flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {dest.emoji}
              </div>
              <h3 className="text-xs font-bold text-white mb-1 group-hover:text-rose-300 transition">
                {dest.name}
              </h3>
              <p className="text-[11px] text-rose-200/70 leading-normal line-clamp-2">
                {dest.description}
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-blue-300 font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-yellow-300" />
              <span>Tap Kamalesh’s Promise</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Detail Card for Selected Dream */}
      {selectedDest && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedDest(null)}
        >
          <div
            className="relative max-w-sm w-full bg-gradient-to-br from-rose-950 via-purple-950 to-blue-950 border-2 border-rose-400/60 rounded-3xl p-6 text-white shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-5xl mb-3 animate-bounce">{selectedDest.emoji}</div>
            <h3 className="text-lg font-bold text-white mb-1">{selectedDest.name}</h3>
            <p className="text-xs text-rose-200/80 mb-4">{selectedDest.description}</p>

            <div className="p-4 rounded-2xl bg-black/50 border border-rose-500/40 text-rose-100 text-xs font-serif italic mb-5 leading-relaxed">
              <span className="block font-sans font-bold text-yellow-300 not-italic mb-1 text-[11px]">
                ❤️ KAMALESH'S PROMISE TO JANU:
              </span>
              "{selectedDest.kamaleshPromise}"
            </div>

            <button
              onClick={() => setSelectedDest(null)}
              className="px-5 py-2 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs shadow-lg transition"
            >
              Close & Keep Dreaming ✨
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
