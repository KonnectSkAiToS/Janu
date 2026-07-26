import React from 'react';
import { KAMALESH_ADDRESS, JANU_ADDRESS } from '../data/januData';
import { Plane, MapPin, Heart, ShieldCheck, Sparkles, Calendar, ArrowRight } from 'lucide-react';

export const LongDistanceBridge: React.FC = () => {
  return (
    <section id="long-distance" className="my-8 scroll-mt-20">
      <div className="bg-gradient-to-br from-rose-950/80 via-purple-950/70 to-blue-950/80 border border-rose-500/40 p-5 sm:p-7 rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Decorative Plane Line */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          <span>London ✈️ Hosur Tamil Nadu</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          London to Hosur Love Bridge 🌉❤️
        </h2>
        <p className="text-xs text-rose-200/80 mb-6">
          Miles apart right now, but united forever in heart & soul!
        </p>

        {/* Two Locations Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Kamalesh Card */}
          <div className="bg-black/40 border border-blue-500/30 p-4 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-blue-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>Kamalesh’s Address</span>
                </span>
                <span className="text-lg">🇬🇧</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">East Ham, London</h3>
              <p className="text-xs text-blue-200/80 font-mono leading-relaxed">
                {KAMALESH_ADDRESS}
              </p>
            </div>
            <div className="mt-3 text-[10px] text-blue-300/60 italic font-serif border-t border-blue-900/40 pt-2">
              Waiting eagerly to board the flight to India ✈️
            </div>
          </div>

          {/* Janu Card */}
          <div className="bg-black/40 border border-rose-500/30 p-4 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-rose-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>Janu’s Home Address</span>
                </span>
                <span className="text-lg">🇮🇳</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Vaishu Jananni GM</h3>
              <p className="text-xs text-rose-200/80 font-mono leading-relaxed">
                {JANU_ADDRESS}
              </p>
            </div>
            <div className="mt-3 text-[10px] text-rose-300/60 italic font-serif border-t border-rose-900/40 pt-2">
              Waiting for her Kamalesh to arrive home ❤️
            </div>
          </div>
        </div>

        {/* Flight Meeting Countdown Box */}
        <div className="bg-gradient-to-r from-rose-900/60 via-purple-900/60 to-blue-900/60 border border-rose-400/40 p-4 rounded-2xl mb-5 text-center">
          <div className="flex items-center justify-center gap-2 text-rose-200 font-bold text-sm mb-1">
            <Plane className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span>Meeting Goal: In 1 or 2 Months! ✈️</span>
          </div>
          <p className="text-xs text-rose-100/90 leading-relaxed font-serif italic">
            "In one or two months, definitely I will be there to meet you soon pondati! Hold on tight!"
          </p>
        </div>

        {/* Future Assurance Card */}
        <div className="bg-black/50 border border-emerald-500/40 p-4 rounded-2xl flex items-start gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-emerald-300 mb-0.5">
              Kamalesh’s Lifetime Guarantee for Janu
            </h4>
            <p className="text-xs text-stone-200 leading-relaxed">
              "Don't worry about our future pondati, I have planned everything for life until life ends, so don't worry!"
            </p>
          </div>
        </div>

        {/* Instagram Story Recall Note */}
        <div className="mt-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-rose-200/90 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-rose-400 shrink-0" />
          <span>
            <strong className="text-rose-300">31st Dec 2024:</strong> I replied to your Instagram story. I still remember that day! After that it’s been years and still we are together ❤️
          </span>
        </div>
      </div>
    </section>
  );
};
