import React, { useState } from 'react';
import { MUAMALAH_QUIZ } from '../../data/muamalahData';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';

export function MuamalahQuiz() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const activeQuestion = MUAMALAH_QUIZ[currentIdx];

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (selectedAnswers[questionId]) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const calculateScore = () => {
    let correct = 0;
    MUAMALAH_QUIZ.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOptionId) {
        correct++;
      }
    });
    return Math.round((correct / MUAMALAH_QUIZ.length) * 100);
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
          <HelpCircle className="w-4 h-4 text-emerald-700" />
          <span>Evaluasi BAB 13: Fiqih Muamalah Māliyyah</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Latihan Soal & Evaluasi Kasus Akad-Akad Muamalah
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-2xl leading-relaxed">
          Uji pemahaman komprehensif Anda mengenai perbedaan Muzara'ah dan Mukhabarah, pembagian risiko rugi pada Mudharabah, hak opsi Syuf'ah atas tanah sekutu, perbedaan Dhaman dan Kafalah, transparansi Murabahah bank syariah, dan ketentuan gadai Rahn.
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
              Hasil Evaluasi BAB 13
            </span>
            <h2 className="text-3xl font-bold font-serif text-stone-900 mt-1">
              Skor Pemahaman: {calculateScore()}%
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              {calculateScore() >= 80
                ? 'Mumtaz! Anda telah menguasai rukun, syarat, dan skema akad-akad muamalah syariah dengan sangat baik.'
                : calculateScore() >= 60
                ? 'Jayyid! Anda telah memahami prinsip-prinsip pokok transaksi muamalah Islam.'
                : 'Perlu pengulangan. Pelajari kembali materi akad sektor riil, kemitraan, dan penjaminan di modul BAB 13.'}
            </p>
          </div>

          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg text-sm transition-colors shadow-xs"
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
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
              Soal {currentIdx + 1} dari {MUAMALAH_QUIZ.length}
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
                'border-stone-200 hover:border-emerald-600 hover:bg-emerald-50/40 text-stone-800';

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
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>Pembahasan Fiqih:</span>
              </div>
              <p className="text-stone-700 leading-relaxed">
                {activeQuestion.explanation}
              </p>
              <div className="text-[11px] font-mono text-emerald-900 bg-emerald-50 p-2 rounded border border-emerald-100">
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

            {currentIdx < MUAMALAH_QUIZ.length - 1 ? (
              <button
                type="button"
                disabled={!selectedAnswers[activeQuestion.id]}
                onClick={() => setCurrentIdx((i) => i + 1)}
                className="px-5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs disabled:opacity-40 disabled:pointer-events-none transition-colors"
              >
                Lanjut ke Soal Berikutnya
              </button>
            ) : (
              <button
                type="button"
                disabled={!selectedAnswers[activeQuestion.id]}
                onClick={() => setIsCompleted(true)}
                className="px-5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs disabled:opacity-40 disabled:pointer-events-none transition-colors"
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
