import React, { useState, useEffect } from 'react';
import { GALLERY_PHOTOS } from '../data/januData';
import { GalleryPhoto } from '../types';
import { Heart, Upload, RotateCw, X, Eye, Plus, Sparkles } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  useEffect(() => {
    // Load existing custom photos from localStorage
    const savedCustom = localStorage.getItem('janu_custom_photos');
    let customList: GalleryPhoto[] = [];
    if (savedCustom) {
      try {
        customList = JSON.parse(savedCustom);
      } catch (e) {
        console.error("Error loading custom photos", e);
      }
    }
    setPhotos([...customList, ...GALLERY_PHOTOS]);
  }, []);

  const handleFlip = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFlippedCardId((prev) => (prev === id ? null : id));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      const newPhoto: GalleryPhoto = {
        id: `custom-${Date.now()}`,
        url: dataUrl,
        caption: 'Our Precious Memory ❤️',
        secretNote: 'A beautiful moment with my Janu etched forever in my heart.',
        date: 'Saved Memory',
        isCustom: true
      };

      const updated = [newPhoto, ...photos];
      setPhotos(updated);

      // Save custom ones to localStorage
      const customOnly = updated.filter((p) => p.isCustom);
      localStorage.setItem('janu_custom_photos', JSON.stringify(customOnly));
    };
    reader.readAsDataURL(file);
  };

  return (
    <section id="gallery" className="my-8 scroll-mt-20">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <span>Our Memories Gallery</span>
            <Sparkles className="w-5 h-5 text-rose-400" />
          </h2>
          <p className="text-xs text-rose-200/70 mt-0.5">
            Tap a card to flip & reveal secret love notes!
          </p>
        </div>

        {/* Custom Upload Button */}
        <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-900/60 hover:bg-rose-800 border border-rose-500/40 text-rose-100 text-xs font-semibold cursor-pointer shadow-lg transition">
          <Upload className="w-3.5 h-3.5 text-rose-300" />
          <span>Add Photo</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Post-Meeting Gallery Promise Banner */}
      <div className="bg-gradient-to-r from-rose-950/90 via-purple-950/90 to-blue-950/90 border border-rose-400/50 p-4 rounded-2xl mb-6 shadow-xl text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold mb-2 border border-rose-400/30">
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          <span>Our Future Promise: Filling Our Gallery Together 📸</span>
        </div>
        <p className="text-xs text-rose-100 font-serif italic leading-relaxed max-w-sm mx-auto">
          "Pondati, after we meet in Hosur in 1 or 2 months, we will fill our complete gallery with all our real pictures together — holding hands, warm hugs, endless kisses, and precious smiles!"
        </p>
      </div>

      {/* Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Special First Meet Placeholder Card */}
        <div className="relative h-80 w-full bg-gradient-to-br from-rose-950/80 via-purple-950/80 to-black border-2 border-dashed border-rose-400/60 rounded-2xl p-5 shadow-2xl flex flex-col justify-between text-center group hover:border-rose-300 transition cursor-pointer">
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="w-16 h-16 rounded-full bg-rose-600/20 border-2 border-rose-400 flex items-center justify-center text-rose-300 mb-3 group-hover:scale-110 transition-transform shadow-lg animate-pulse">
              <Plus className="w-8 h-8" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">
              Reserved For Our First Meet Picture 📸
            </h3>
            <p className="text-xs text-rose-200/80 font-serif italic max-w-xs leading-relaxed">
              In 1 or 2 months when Kamalesh flies from London to Hosur, this slot will be filled with our first picture holding hands & kissing endlessly! ✈️💋
            </p>
          </div>

          <label className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-purple-600 text-white text-xs font-bold cursor-pointer hover:opacity-90 transition shadow-lg">
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Picture Early or Save Slot</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
        {photos.map((photo) => {
          const isFlipped = flippedCardId === photo.id;

          return (
            <div
              key={photo.id}
              className="relative h-80 w-full perspective-[1000px] cursor-pointer group"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT FACE (Polaroid Style) */}
                <div className="absolute inset-0 backface-hidden bg-white/95 text-gray-900 rounded-2xl p-3 shadow-2xl flex flex-col border-4 border-rose-100 transform group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] text-rose-200 font-medium">
                      {photo.date || 'Janu'}
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-between pt-2.5 px-1">
                    <p className="text-xs font-bold text-gray-800 line-clamp-1 font-serif italic">
                      {photo.caption}
                    </p>
                    <button
                      onClick={(e) => handleFlip(photo.id, e)}
                      id={`flip-btn-${photo.id}`}
                      className="flex items-center gap-1 text-[11px] font-semibold text-rose-600 hover:text-rose-800 bg-rose-50 px-2 py-1 rounded-md border border-rose-200 transition"
                      title="Flip to read note"
                    >
                      <RotateCw className="w-3 h-3" />
                      <span>Note</span>
                    </button>
                  </div>
                </div>

                {/* BACK FACE (Secret Love Note) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-rose-950 via-purple-950 to-black text-rose-100 rounded-2xl p-5 shadow-2xl flex flex-col justify-between border-2 border-rose-500/40">
                  <div>
                    <div className="flex items-center justify-between border-b border-rose-800/50 pb-2 mb-3">
                      <span className="text-xs font-bold text-rose-400 flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 fill-rose-500" />
                        <span>Secret Love Note</span>
                      </span>
                      <button
                        onClick={(e) => handleFlip(photo.id, e)}
                        className="text-rose-300 hover:text-white text-xs underline"
                      >
                        Back
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-rose-100/90 italic font-serif leading-relaxed">
                      "{photo.secretNote}"
                    </p>
                  </div>

                  <div className="text-[10px] text-rose-400/80 text-right pt-2 border-t border-rose-900/30">
                    Always & Forever for Janu ❤️
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-lg w-full bg-rose-950/90 border border-rose-500/40 rounded-3xl p-4 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className="w-full h-80 object-cover rounded-2xl mb-4 border border-rose-500/30"
              referrerPolicy="no-referrer"
            />

            <h3 className="text-base font-bold text-rose-200 mb-1">{selectedPhoto.caption}</h3>
            <p className="text-xs text-rose-100/80 italic font-serif">
              "{selectedPhoto.secretNote}"
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
