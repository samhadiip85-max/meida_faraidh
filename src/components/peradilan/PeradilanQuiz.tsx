import React, { useState } from 'react';
import { PERADILAN_QUIZ } from '../../data/peradilanData';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';

export function PeradilanQuiz() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const activeQuestion = PERADILAN_QUIZ[currentIdx];

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (selectedAnswers[questionId]) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const calculateScore = () => {
    let correct = 0;
    PERADILAN_QUIZ.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOptionId) {
        correct++;
      }
    });
    return Math.round((correct / PERADILAN_QUIZ.length) * 100);
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
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <HelpCircle className="w-4 h-4 text-rose-700" />
          <span>Evaluasi BAB 18: Fiqih Al-Qadhā' (Peradilan Islam)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Latihan Soal & Evaluasi Hukum Acara Peradilan Syariah
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-2xl leading-relaxed">
          Uji pemahaman Anda mengenai kaidah beban pembuktian (*Al-Bayyinatu \'alal mudda\'ī*), hadits tiga golongan hakim, komposisi saksi muamalah harta, adab persidangan risalah Umar bin Khattab, dan hukum sumpah nukul.
        </p>
      </div>

      {isCompleted ? (
        /* Result Screen */
        <div className="bg-white rounded-xl border border-stone-200 p-8 shadow-xs text-center max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 bg-rose-100 text-rose-800 rounded-full flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-stone-500">
              Hasil Evaluasi BAB 18
            </span>
            <h2 className="text-3xl font-bold font-serif text-stone-900 mt-1">
              Skor Pemahaman: {calculateScore()}%
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              {calculateScore() >= 80
                ? 'Mumtaz! Anda telah memahami hukum peradilan Islam, etika kehakiman, dan hukum acara pembuktian dengan sangat mendalam.'
                : calculateScore() >= 60
                ? 'Jayyid! Anda telah menguasai kaidah pokok hukum acara peradilan syariah.'
                : 'Perlu pengulangan. Pelajari kembali materi rukun peradilan, adab hakim, dan hierarki alat bukti di modul BAB 18.'}
            </p>
          </div>

          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white font-semibold rounded-lg text-sm transition-colors shadow-xs"
          >
            <RotateCcw className="w-4 h-4" />
            Ulangi Latihan Soal
          </button>
        </div>
      ) : (
        /* Question Card */
        <div className="bg-white rounded-xl border border-stone-200 p-6 md:p-8 shadow-xs space-y-6">
          {/* Progress Header */}
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-md">
              Soal {currentIdx + 1} dari {PERADILAN_QUIZ.length}
            </span>
            <span className="text-xs text-stone-500">
              {Object.keys(selectedAnswers).length} Dijawab
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
            {activeQuestion.question}
          </h2>

          {/* Options */}
          <div className="space-y-3 pt-2">
            {activeQuestion.options.map((opt) => {
              const hasAnswered = !!selectedAnswers[activeQuestion.id];
              const isSelected = selectedAnswers[activeQuestion.id] === opt.id;
              const isCorrect = opt.id === activeQuestion.correctOptionId;

              let btnStyle =
                'border-stone-200 hover:border-rose-600 hover:bg-rose-50/40 text-stone-800';

              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'border-rose-400 bg-rose-50 text-rose-900';
                } else {
                  btnStyle = 'border-stone-100 opacity-50 text-stone-600';
                }
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  disabled={hasAnswered}
                  onClick={() => handleSelectOption(activeQuestion.id, opt.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all text-sm flex items-start gap-3 ${btnStyle}`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                      hasAnswered && isCorrect
                        ? 'bg-emerald-600 text-white'
                        : hasAnswered && isSelected && !isCorrect
                        ? 'bg-rose-600 text-white'
                        : 'bg-stone-100 text-stone-700'
                    }`}
                  >
                    {opt.id.toUpperCase()}
                  </span>
                  <div className="flex-1 leading-relaxed">{opt.text}</div>
                  {hasAnswered && isCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {selectedAnswers[activeQuestion.id] && (
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-stone-800">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                <span>Pembahasan Fiqih:</span>
              </div>
              <p className="text-stone-700 leading-relaxed">
                {activeQuestion.explanation}
              </p>
              <div className="text-[11px] font-mono text-rose-900 bg-rose-50 p-2 rounded border border-rose-200">
                <strong>Dalil / Rujukan: </strong>
                {activeQuestion.dalil}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-100">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((i) => i - 1)}
              className="px-4 py-2 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold"
            >
              Sebelumnya
            </button>

            {currentIdx < PERADILAN_QUIZ.length - 1 ? (
              <button
                type="button"
                disabled={!selectedAnswers[activeQuestion.id]}
                onClick={() => setCurrentIdx((i) => i + 1)}
                className="px-5 py-2 rounded-lg bg-rose-700 hover:bg-rose-800 text-white font-semibold text-xs disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                Lanjut ke Soal Berikutnya
              </button>
            ) : (
              <button
                type="button"
                disabled={!selectedAnswers[activeQuestion.id]}
                onClick={() => setIsCompleted(true)}
                className="px-5 py-2 rounded-lg bg-rose-700 hover:bg-rose-800 text-white font-semibold text-xs disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                Lihat Nilai Akhir
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
