import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Heart, Sparkles } from 'lucide-react';

export const RomanticAudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Gentle romantic piano chord sequence (Frequency in Hz)
  // C4, E4, G4, B4 (Cmaj7) -> A3, C4, E4, G4 (Am7) -> F3, A3, C4, E4 (Fmaj7) -> G3, B3, D4, F#4 (G7)
  const chords = [
    [261.63, 329.63, 392.00, 493.88], // Cmaj7
    [220.00, 261.63, 329.63, 392.00], // Am7
    [174.61, 220.00, 261.63, 329.63], // Fmaj7
    [196.00, 246.94, 293.66, 369.99], // Gmaj7
  ];

  const playNote = (ctx: AudioContext, freq: number, time: number, duration: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    // Soft attack, warm decay
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.08, time + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + duration);
  };

  const startMusic = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    let chordIdx = 0;
    const ctx = audioCtxRef.current;

    const playNextChord = () => {
      if (!ctx || ctx.state === 'closed') return;
      const now = ctx.currentTime;
      const currentChord = chords[chordIdx];

      // Arpeggiate chord notes softly
      currentChord.forEach((freq, idx) => {
        playNote(ctx, freq, now + idx * 0.2, 3.2);
      });

      chordIdx = (chordIdx + 1) % chords.length;
    };

    playNextChord();
    intervalRef.current = window.setInterval(playNextChord, 3500);
    setIsPlaying(true);
  };

  const stopMusic = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <button
      onClick={toggleMusic}
      id="romantic-audio-toggle"
      className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full border shadow-xl transition-all duration-300 backdrop-blur-md ${
        isPlaying
          ? 'bg-rose-950/80 border-rose-500/50 text-rose-200 shadow-rose-900/50 animate-pulse'
          : 'bg-black/40 border-white/20 text-white/80 hover:bg-black/60'
      }`}
      title={isPlaying ? 'Pause Romantic Music' : 'Play Romantic Music'}
    >
      {isPlaying ? (
        <>
          <Sparkles className="w-4 h-4 text-rose-400 animate-spin" />
          <span className="text-xs font-medium tracking-wide">Playing Love Melody</span>
          <Volume2 className="w-4 h-4 text-rose-400" />
        </>
      ) : (
        <>
          <Heart className="w-4 h-4 text-rose-400" />
          <span className="text-xs font-medium tracking-wide">Play Music</span>
          <VolumeX className="w-4 h-4 text-white/50" />
        </>
      )}
    </button>
  );
};
