import React, { useState } from 'react';
import { TIMELINE_EVENTS } from '../data/januData';
import { Instagram, MessageSquare, PhoneCall, HeartHandshake, Sparkles, Heart } from 'lucide-react';

export const LoveTimeline: React.FC = () => {
  const [hugsSent, setHugsSent] = useState(0);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number }[]>([]);

  const handleSendHug = () => {
    setHugsSent((prev) => prev + 1);
    const id = Date.now();
    const randomX = Math.floor(Math.random() * 80) + 10; // percent
    setFloatingHearts((prev) => [...prev, { id, x: randomX }]);

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1500);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram className="w-5 h-5 text-rose-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-green-400" />;
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-purple-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-pink-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-yellow-400" />;
    }
  };

  return (
    <section id="timeline" className="relative my-8 scroll-mt-20">
      {/* Floating hearts container for interactive hugs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute bottom-10 animate-fade-out-up text-rose-500 font-bold text-2xl"
            style={{ left: `${heart.x}%` }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <span>Our Love Story</span>
            <span className="text-rose-400">✨</span>
          </h2>
          <p className="text-xs text-rose-200/70 mt-0.5">
            Met on Instagram • Waiting to meet in person
          </p>
        </div>

        <button
          onClick={handleSendHug}
          id="send-hug-btn"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs font-semibold shadow-lg shadow-rose-950/50 active:scale-95 transition"
        >
          <Heart className="w-3.5 h-3.5 fill-white animate-pulse" />
          <span>Send Hug ({hugsSent})</span>
        </button>
      </div>

      <div className="relative border-l-2 border-rose-800/50 ml-4 space-y-8 pl-6">
        {TIMELINE_EVENTS.map((event, idx) => (
          <div key={event.id} className="relative group">
            {/* Timeline node icon */}
            <div className="absolute -left-[35px] top-0 flex items-center justify-center w-9 h-9 rounded-full bg-rose-950 border-2 border-rose-500 shadow-md shadow-rose-900/50 group-hover:scale-110 transition-transform">
              {getIcon(event.icon)}
            </div>

            {/* Event Card */}
            <div className="bg-gradient-to-br from-rose-950/60 via-purple-950/40 to-black/80 border border-rose-900/40 hover:border-rose-500/50 p-4 rounded-2xl shadow-xl transition duration-300">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-extrabold text-rose-400 tracking-wider uppercase">
                  {event.date}
                </span>
                {event.badge && (
                  <span className="px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-medium">
                    {event.badge}
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-white mb-0.5">{event.title}</h3>
              <div className="text-xs font-medium text-rose-300/80 mb-2">{event.subtitle}</div>
              <p className="text-xs text-rose-100/80 leading-relaxed">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
