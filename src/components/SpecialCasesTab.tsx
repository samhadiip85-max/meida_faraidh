import React from 'react';
import { SPECIAL_CASES_DATA, SpecialCase } from '../data/specialCasesData';
import { BookMarked, ArrowRight, UserCheck, HelpCircle, CheckCircle } from 'lucide-react';
import { HeirRole } from '../types/faraidh';

interface SpecialCasesTabProps {
  onLoadCaseToCalculator: (deceasedGender: 'male' | 'female', presetHeirs: { role: HeirRole; count: number }[]) => void;
}

export function SpecialCasesTab({ onLoadCaseToCalculator }: SpecialCasesTabProps) {
  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <BookMarked className="w-4 h-4" />
          <span>Laboratorium Kasus Fiqih Klasik</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kasus-Kasus Istimewa dalam Faraidh
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl">
          Kasus-kasus unik yang menjadi tonggak ijtihad para sahabat (Sayyidina Umar bin Khattab, Ali bin Abi Thalib, dan Zaid bin Tsabit radhiyallahu \'anhum) dalam menyelesaikan problem hitungan warisan.
        </p>
      </div>

      {/* Grid of cases */}
      <div className="space-y-6">
        {SPECIAL_CASES_DATA.map((item: SpecialCase) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:border-emerald-300 transition-all"
          >
            {/* Case Header */}
            <div className="p-5 sm:p-6 border-b border-stone-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-stone-50/50">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-arabic text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    {item.arabicName}
                  </span>
                  <span className="text-xs text-stone-500">· {item.decisionMaker}</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-stone-900 font-serif mt-1">
                  {item.name}
                </h2>
                <p className="text-xs text-stone-600 mt-1">{item.historicalContext}</p>
              </div>

              <button
                type="button"
                onClick={() => onLoadCaseToCalculator(item.deceasedGender, item.presetHeirs)}
                className="self-start md:self-center px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg flex items-center gap-2 transition-colors shrink-0 shadow-xs"
              >
                <span>Buka di Kalkulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Case Content: Problem vs Solution */}
            <div className="p-5 sm:p-6 space-y-5">
              {/* Komposisi Ahli Waris */}
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/80 flex items-center gap-2 text-xs">
                <UserCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-semibold text-stone-900">Komposisi Kasus:</span>
                <span className="text-stone-700">{item.heirsDescription}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Permasalahan */}
                <div className="p-4 bg-rose-50/50 rounded-xl border border-rose-200/80 space-y-2 text-xs">
                  <div className="flex items-center gap-2 font-bold text-rose-900 uppercase tracking-wide">
                    <HelpCircle className="w-4 h-4 text-rose-600" />
                    <span>Dilema Hitungan Harfiah:</span>
                  </div>
                  <p className="text-rose-950 leading-relaxed">{item.theProblem}</p>
                </div>

                {/* Solusi Ijtihad Sahabat */}
                <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200/80 space-y-2 text-xs">
                  <div className="flex items-center gap-2 font-bold text-emerald-950 uppercase tracking-wide">
                    <CheckCircle className="w-4 h-4 text-emerald-700" />
                    <span>Solusi Ijtihad & Fatwa Sahabat:</span>
                  </div>
                  <p className="text-emerald-950 leading-relaxed">{item.theResolution}</p>
                </div>
              </div>

              {/* Kaidah Fiqih yang Dihasilkan */}
              <div className="p-3 bg-stone-100/70 rounded-lg text-xs text-stone-700">
                <strong className="text-stone-900">Kaidah Fiqih Pokok: </strong>
                {item.ruleTakeaway}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
