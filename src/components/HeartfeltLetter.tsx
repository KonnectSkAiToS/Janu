import React, { useState, useEffect } from 'react';
import { JANU_PROFILE } from '../data/januData';
import { Mail, Heart, Edit3, Save, Check, Sparkles, Lock } from 'lucide-react';

export const HeartfeltLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [letterContent, setLetterContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedLetter = localStorage.getItem('janu_custom_love_letter');
    if (savedLetter) {
      setLetterContent(savedLetter);
    } else {
      setLetterContent(JANU_PROFILE.loveMessage);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('janu_custom_love_letter', letterContent);
    setIsEditing(false);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <section id="letter" className="my-8 scroll-mt-20">
      <div className="mb-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white inline-flex items-center gap-2">
          <span>Heartfelt Love Letter</span>
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
        </h2>
        <p className="text-xs text-rose-200/70 mt-0.5">
          A personal message sealed with infinite love
        </p>
      </div>

      {!isOpen ? (
        /* Envelope Sealed State */
        <div
          onClick={() => setIsOpen(true)}
          className="relative max-w-md mx-auto bg-gradient-to-br from-rose-950 via-purple-950 to-black border-2 border-rose-500/40 p-8 rounded-3xl shadow-2xl text-center cursor-pointer hover:border-rose-400/80 hover:scale-[1.02] transition-all duration-500 group"
        >
          {/* Glowing Seal */}
          <div className="w-16 h-16 rounded-full bg-rose-600 border-2 border-rose-300 mx-auto flex items-center justify-center shadow-lg shadow-rose-600/50 mb-4 group-hover:rotate-12 transition-transform">
            <Heart className="w-8 h-8 text-white fill-white animate-pulse" />
          </div>

          <h3 className="text-lg font-bold text-white mb-1 font-serif">
            To My Dearest Vaishu Jananni (Janu) ❤️
          </h3>
          <p className="text-xs text-rose-300/80 mb-6 italic">
            "Written for your 27th Birthday • Sealed with Love"
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-600/80 hover:bg-rose-500 text-white text-xs font-semibold shadow-lg shadow-rose-900/60 backdrop-blur-md">
            <Mail className="w-4 h-4" />
            <span>Tap to Unseal Letter 💌</span>
          </div>
        </div>
      ) : (
        /* Open Letter State */
        <div className="relative max-w-lg mx-auto bg-amber-50 text-stone-900 rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-rose-200/80 transition-all duration-500 animate-fade-in">
          {/* Header Controls */}
          <div className="flex items-center justify-between border-b border-stone-300 pb-3 mb-4">
            <div className="flex items-center gap-2 text-rose-900 font-bold text-xs">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>LOVE LETTER FOR JANU</span>
            </div>

            <div className="flex items-center gap-2">
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow transition"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-800 hover:bg-rose-900 text-white text-xs font-semibold shadow transition"
                  title="Customize Letter Text"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-stone-500 hover:text-stone-800 text-xs font-medium underline pl-2"
              >
                Close
              </button>
            </div>
          </div>

          {isSaved && (
            <div className="mb-3 p-2 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Letter updated and saved with love!</span>
            </div>
          )}

          {/* Letter Body */}
          {isEditing ? (
            <textarea
              value={letterContent}
              onChange={(e) => setLetterContent(e.target.value)}
              rows={12}
              className="w-full p-3 rounded-xl border border-stone-300 text-xs leading-relaxed text-stone-900 font-serif focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
            />
          ) : (
            <div className="whitespace-pre-line text-xs sm:text-sm text-stone-800 leading-relaxed font-serif italic mb-6">
              {letterContent}
            </div>
          )}

          {/* Footer Signature */}
          <div className="pt-4 border-t border-stone-300 flex items-center justify-between text-xs text-rose-900 font-semibold font-serif">
            <span>27th July 2026 • Birthday Edition</span>
            <span className="flex items-center gap-1">
              <span>Forever Yours</span>
              <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            </span>
          </div>
        </div>
      )}
    </section>
  );
};
