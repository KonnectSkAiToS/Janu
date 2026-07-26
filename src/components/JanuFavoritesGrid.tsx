import React, { useState } from 'react';
import { FOOD_ITEMS, JANU_PROFILE } from '../data/januData';
import { Heart, Sparkles, Utensils, Footprints, Flower2, CloudMoon } from 'lucide-react';

export const JanuFavoritesGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'sweet' | 'fruit' | 'meal'>('all');

  const filteredItems = FOOD_ITEMS.filter((item) => {
    if (!item.isFavorite) return false;
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="favorites" className="my-8 scroll-mt-20">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <span>Janu's Favorite Delicacies</span>
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
        </h2>
        <p className="text-xs text-rose-200/70 mt-0.5">
          Everything that brings a sweet smile to her face!
        </p>
      </div>

      {/* Special Highlights Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {/* Footwear & Style */}
        <div className="bg-gradient-to-br from-rose-950/70 to-purple-950/60 border border-rose-500/30 p-3.5 rounded-2xl flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 shrink-0">
            <Footprints className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Footwear Rule</div>
            <div className="text-[11px] text-rose-200/80 font-medium">No Heels! Back strap sleepers 👟</div>
          </div>
        </div>

        {/* Favorite Flower */}
        <div className="bg-gradient-to-br from-rose-950/70 to-purple-950/60 border border-rose-500/30 p-3.5 rounded-2xl flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 shrink-0">
            <Flower2 className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Favorite Flower</div>
            <div className="text-[11px] text-rose-200/80 font-medium">{JANU_PROFILE.favoriteFlower}</div>
          </div>
        </div>

        {/* Favorite Sky Wonder */}
        <div className="bg-gradient-to-br from-purple-950/70 to-rose-950/60 border border-purple-500/30 p-3.5 rounded-2xl flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
            <CloudMoon className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Dream Wonder</div>
            <div className="text-[11px] text-purple-200/80 font-medium">{JANU_PROFILE.favoriteSky}</div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1 text-xs">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-3.5 py-1.5 rounded-full font-medium transition ${
            activeTab === 'all'
              ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/50'
              : 'bg-white/5 border border-white/10 text-rose-200 hover:bg-white/10'
          }`}
        >
          All Favorites
        </button>
        <button
          onClick={() => setActiveTab('sweet')}
          className={`px-3.5 py-1.5 rounded-full font-medium transition ${
            activeTab === 'sweet'
              ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/50'
              : 'bg-white/5 border border-white/10 text-rose-200 hover:bg-white/10'
          }`}
        >
          Sweets & Drinks 🥛
        </button>
        <button
          onClick={() => setActiveTab('fruit')}
          className={`px-3.5 py-1.5 rounded-full font-medium transition ${
            activeTab === 'fruit'
              ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/50'
              : 'bg-white/5 border border-white/10 text-rose-200 hover:bg-white/10'
          }`}
        >
          Fresh Fruits 🍇
        </button>
        <button
          onClick={() => setActiveTab('meal')}
          className={`px-3.5 py-1.5 rounded-full font-medium transition ${
            activeTab === 'meal'
              ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/50'
              : 'bg-white/5 border border-white/10 text-rose-200 hover:bg-white/10'
          }`}
        >
          Home Meals 🍛
        </button>
      </div>

      {/* Grid Items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-rose-950/40 via-purple-950/30 to-black/80 border border-rose-900/30 hover:border-rose-500/50 p-3.5 rounded-2xl shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <div className="text-2xl mb-1.5">{item.imageEmoji}</div>
              <h3 className="text-xs font-bold text-white mb-0.5">{item.name}</h3>
              <p className="text-[11px] text-rose-200/70 leading-normal">{item.description}</p>
            </div>
            <div className="mt-2 text-[10px] text-rose-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-yellow-400" />
              <span>Janu's Favorite</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
