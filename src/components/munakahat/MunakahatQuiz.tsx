import React, { useState } from 'react';
import { MUNAKAHAT_QUIZ } from '../../data/munakahatData';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';

export function MunakahatQuiz() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const activeQuestion = MUNAKAHAT_QUIZ[currentIdx];

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (selectedAnswers[questionId]) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const calculateScore = () => {
    let correct = 0;
    MUNAKAHAT_QUIZ.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOptionId) {
        correct++;
      }
    });
    return Math.round((correct / MUNAKAHAT_QUIZ.length) * 100);
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setIsCompleted(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <HelpCircle className="w-4 h-4" />
          <span>Evaluasi BAB II: Fiqih Munakahat</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Latihan Soal & Studi Kasus Pernikahan
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-2xl leading-relaxed">
          Uji pemahaman Anda tentang hukum pernikahan, rukun dan syarat sah nikah, keharaman mahram, urutan wali nasab, serta masa iddah.
        </p>
      </div>

      {isCompleted ? (
        /* Result Screen */
        <div className="bg-white rounded-xl border border-stone-200 p-8 shadow-xs text-center max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-stone-500">
              Hasil Latihan Munakahat
            </span>
            <h2 className="text-3xl font-bold font-serif text-stone-900 mt-1">
              Skor Pemahaman: {calculateScore()}%
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              Benar sebanyak{' '}
              {MUNAKAHAT_QUIZ.filter((q) => selectedAnswers[q.id] === q.correctOptionId).length} dari {MUNAKAHAT_QUIZ.length} pertanyaan.
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg flex items-center gap-2 transition-colors shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ulangi Latihan</span>
            </button>
          </div>
        </div>
      ) : (
        /* Question Card */
        <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 shadow-xs max-w-3xl mx-auto space-y-6">
          {/* Progress */}
          <div>
            <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
              <span>
                Pertanyaan {currentIdx + 1} dari {MUNAKAHAT_QUIZ.length}
              </span>
              <span className="font-semibold text-emerald-800">
                Fiqih Munakahat (Pernikahan)
              </span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
              <div
                className="bg-emerald-700 h-full transition-all duration-300"
                style={{
                  width: `${((currentIdx + 1) / MUNAKAHAT_QUIZ.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
              {activeQuestion.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {activeQuestion.options.map((opt) => {
              const answered = selectedAnswers[activeQuestion.id];
              const isSelected = answered === opt.id;
              const isCorrect = opt.id === activeQuestion.correctOptionId;

              let btnStyle = 'border-stone-200 hover:border-stone-300 hover:bg-stone-50 text-stone-800';

              if (answered) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                } else if (isSelected) {
                  btnStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                } else {
                  btnStyle = 'border-stone-200 opacity-60 text-stone-600';
                }
              }

              return (
                <button
                  key={opt.id}
                  disabled={Boolean(answered)}
                  onClick={() => handleSelectOption(activeQuestion.id, opt.id)}
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start justify-between gap-3 ${btnStyle}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-md bg-stone-100 flex items-center justify-center font-bold text-xs uppercase text-stone-700 shrink-0">
                      {opt.id}
                    </span>
                    <span className="mt-0.5 leading-relaxed">{opt.text}</span>
                  </div>

                  {answered && isCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  {answered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {selectedAnswers[activeQuestion.id] && (
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs">
              <div className="font-bold text-stone-900">Pembahasan Fiqih:</div>
              <p className="text-stone-700 leading-relaxed">{activeQuestion.explanation}</p>
              <div className="text-[11px] text-stone-500 pt-1 border-t border-stone-200/80">
                <strong>Rujukan Dalil: </strong>
                {activeQuestion.dalil}
              </div>
            </div>
          )}

          {/* Nav buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-200">
            <button
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
              className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 disabled:opacity-30 disabled:pointer-events-none"
            >
              ← Soal Sebelumnya
            </button>

            {currentIdx < MUNAKAHAT_QUIZ.length - 1 ? (
              <button
                disabled={!selectedAnswers[activeQuestion.id]}
                onClick={() => setCurrentIdx((prev) => prev + 1)}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 disabled:pointer-events-none rounded-lg transition-colors"
              >
                Soal Berikutnya →
              </button>
            ) : (
              <button
                disabled={!selectedAnswers[activeQuestion.id]}
                onClick={() => setIsCompleted(true)}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 disabled:opacity-40 disabled:pointer-events-none rounded-lg transition-colors"
              >
                Lihat Hasil Akhir
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
