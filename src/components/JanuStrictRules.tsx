import React, { useState } from 'react';
import { FOOD_ITEMS } from '../data/januData';
import { ShieldAlert, CheckCircle2, XCircle, Heart, Sparkles, AlertCircle } from 'lucide-react';

export const JanuStrictRules: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<{ name: string; approved: boolean; message: string } | null>(null);

  const testItems = [
    { name: 'Mothi Laddu ♥️', approved: true, message: '✨ Janu’s eyes light up! Approved with 100% Love!' },
    { name: 'Brinjal (Eggplant)', approved: false, message: '🚫 REJECTED! Brinjal is strictly banned from Janu’s plate!' },
    { name: 'More Kolambu & Muta Poriyal', approved: true, message: '🍛 Janu’s ultimate comforting meal! Approved!' },
    { name: 'Keerai (Spinach)', approved: false, message: '🚫 REJECTED! Not liking Keerai at all!' },
    { name: 'Back Strap Sleepers 👟', approved: true, message: '👟 Perfect choice! Comfortable, elegant & heel-free!' },
    { name: 'High Heels 👠', approved: false, message: '🚫 REJECTED! Heels strictly forbidden!' },
    { name: 'Mango / Strawberry / Pineapple', approved: false, message: '🚫 REJECTED! No Mangos, Cherries, Strawberries, or Pineapples!' },
    { name: 'Seedless Green Grapes 🍇', approved: true, message: '🍇 Approved! As long as they are seedless!' },
    { name: 'Palkova & Warm Badam Milk 🥛', approved: true, message: '🥛 Warm sweet perfection! Janu approves with a big smile!' },
  ];

  return (
    <section id="rules" className="my-8 scroll-mt-20">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <span>Janu's Golden Rules & Dislikes</span>
          <ShieldAlert className="w-5 h-5 text-amber-400" />
        </h2>
        <p className="text-xs text-rose-200/70 mt-0.5">
          Know what my queen strictly dislikes and approves!
        </p>
      </div>

      {/* Dislikes Card List */}
      <div className="bg-gradient-to-br from-red-950/60 via-purple-950/40 to-black border border-red-800/40 p-4 rounded-2xl shadow-xl mb-6">
        <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider mb-3">
          <AlertCircle className="w-4 h-4" />
          <span>Strictly Banned Items for Janu 🚫</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div className="bg-black/40 border border-red-500/20 p-2.5 rounded-xl text-rose-100 flex items-center gap-2">
            <span className="text-base">🍆</span>
            <div>
              <div className="font-bold text-red-300">No Brinjal</div>
              <div className="text-[10px] text-red-200/60">Eggplant banned</div>
            </div>
          </div>

          <div className="bg-black/40 border border-red-500/20 p-2.5 rounded-xl text-rose-100 flex items-center gap-2">
            <span className="text-base">🥬</span>
            <div>
              <div className="font-bold text-red-300">No Keerai</div>
              <div className="text-[10px] text-red-200/60">Not liking spinach</div>
            </div>
          </div>

          <div className="bg-black/40 border border-red-500/20 p-2.5 rounded-xl text-rose-100 flex items-center gap-2">
            <span className="text-base">👠</span>
            <div>
              <div className="font-bold text-red-300">No Heels</div>
              <div className="text-[10px] text-red-200/60">Sleepers only 👟</div>
            </div>
          </div>

          <div className="bg-black/40 border border-red-500/20 p-2.5 rounded-xl text-rose-100 flex items-center gap-2">
            <span className="text-base">🚫</span>
            <div>
              <div className="font-bold text-red-300">Fruit Ban</div>
              <div className="text-[10px] text-red-200/60">No Mango/Cherry/Berries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Janu Approval Game */}
      <div className="bg-gradient-to-br from-rose-950/60 via-purple-950/50 to-black border border-rose-500/30 p-5 rounded-2xl shadow-xl text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          <span>Interactive Approval Game</span>
        </div>

        <h3 className="text-base font-bold text-white mb-1">Offer Something to Janu!</h3>
        <p className="text-xs text-rose-200/70 mb-4">
          Tap an item below to see if Janu would approve or reject it!
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          {testItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedItem(item)}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-rose-100 text-xs font-medium active:scale-95 transition"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Approval Result Box */}
        {selectedItem && (
          <div
            className={`p-4 rounded-xl border text-xs font-semibold transition-all duration-300 ${
              selectedItem.approved
                ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-200 shadow-lg shadow-emerald-950/50 animate-bounce-short'
                : 'bg-rose-950/80 border-rose-500/50 text-rose-200 shadow-lg shadow-rose-950/50 animate-shake'
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              {selectedItem.approved ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
              )}
              <span className="text-sm font-bold">
                {selectedItem.approved ? 'APPROVED BY JANU ❤️' : 'REJECTED BY JANU 🚫'}
              </span>
            </div>
            <p className="text-xs font-normal opacity-90">{selectedItem.message}</p>
          </div>
        )}
      </div>
    </section>
  );
};
