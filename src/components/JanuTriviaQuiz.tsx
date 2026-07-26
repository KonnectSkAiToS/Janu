import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/januData';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw, Sparkles } from 'lucide-react';

export const JanuTriviaQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (index: number) => {
    if (answered) return;
    setSelectedOpt(index);
    setAnswered(true);

    if (index === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOpt(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
  };

  return (
    <section id="quiz" className="my-8 scroll-mt-20">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <span>How Well Do You Know Janu?</span>
          <HelpCircle className="w-5 h-5 text-purple-400" />
        </h2>
        <p className="text-xs text-rose-200/70 mt-0.5">
          Take the romantic quiz about her favorites and story!
        </p>
      </div>

      <div className="bg-gradient-to-br from-rose-950/70 via-purple-950/60 to-black border border-rose-500/30 p-5 sm:p-6 rounded-3xl shadow-2xl">
        {!showResult ? (
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-rose-300 mb-3">
              <span>Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}</span>
              <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-200">
                Score: {score}
              </span>
            </div>

            <h3 className="text-base font-bold text-white mb-4">
              {currentQ.question}
            </h3>

            <div className="space-y-2.5 mb-5">
              {currentQ.options.map((option, idx) => {
                let btnStyle = 'bg-white/5 border-white/10 text-rose-100 hover:bg-white/10';

                if (answered) {
                  if (idx === currentQ.correctIndex) {
                    btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                  } else if (idx === selectedOpt) {
                    btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={answered}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition duration-200 flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {answered && idx === currentQ.correctIndex && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    )}
                    {answered && idx === selectedOpt && idx !== currentQ.correctIndex && (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className="mb-4 p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-200 text-xs italic leading-relaxed">
                ✨ {currentQ.explanation}
              </div>
            )}

            {answered && (
              <button
                onClick={handleNext}
                className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs shadow-lg transition"
              >
                {currentIdx + 1 === QUIZ_QUESTIONS.length ? 'See Results 🎉' : 'Next Question ➡️'}
              </button>
            )}
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 mx-auto flex items-center justify-center text-amber-300 mb-3 shadow-xl">
              <Award className="w-8 h-8 animate-bounce" />
            </div>

            <h3 className="text-lg font-bold text-white mb-1">
              {score === QUIZ_QUESTIONS.length ? 'Perfect Score! 💯' : 'Awesome Job! ❤️'}
            </h3>
            <p className="text-xs text-rose-200/80 mb-4">
              You scored {score} out of {QUIZ_QUESTIONS.length} on Janu’s romantic quiz!
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-rose-100 text-xs font-serif italic mb-5 max-w-sm mx-auto">
              "You know every tiny detail about your future wife Vaishu Jananni GM! Certified #1 Janu Lover!"
            </div>

            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-lg transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Play Again</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
