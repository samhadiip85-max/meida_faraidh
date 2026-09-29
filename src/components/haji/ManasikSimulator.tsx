import React, { useState } from 'react';
import { MANASIK_STEPS } from '../../data/hajiData';
import { Compass, CheckCircle2, AlertTriangle, ArrowRight, Info, MapPin, Calendar, Clock } from 'lucide-react';

export function ManasikSimulator() {
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(1); // default 9 Dzulhijjah (Arafah)

  const activeStep = MANASIK_STEPS[selectedDayIdx];

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Calendar className="w-4 h-4 text-emerald-700" />
          <span>Simulasi Kronologis Manasik Haji</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Rangkaian Perjalanan Haji Hari Demi Hari (8 - 13 Dzulhijjah)
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Ikuti simulasi perjalanan manasik dari hari Tarwiyah di Mina, wukuf di Arafah, mabit Muzdalifah,
          hari Nahar (lempar Aqabah, sembelih dam, thawaf ifadhah), hingga hari-hari Tasyriq (Nafar Awal & Nafar Tsani).
        </p>
      </div>

      {/* Day Selector Buttons */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Pilih Hari Pelaksanaan Manasik:
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Klik nomor hari di bawah ini untuk melihat detail lokasi, amalan syar'i, dan tips praktisnya:
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {MANASIK_STEPS.map((step, idx) => {
            const isSelected = selectedDayIdx === idx;
            return (
              <button
                key={step.dayNumber}
                type="button"
                onClick={() => setSelectedDayIdx(idx)}
                className={`p-3 rounded-xl border text-center transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs font-bold'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                <span className="text-[10px] block opacity-80 uppercase">
                  {step.dateHijri}
                </span>
                <span className="text-sm font-bold block my-1">
                  Hari ke-{step.dayNumber}
                </span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono block ${
                  isSelected ? 'bg-emerald-800 text-white' : 'bg-stone-200 text-stone-700'
                }`}>
                  {step.location.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Day Box */}
        <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 space-y-5 text-xs">
          {/* Header of selected day */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/80 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  {activeStep.dateHijri}
                </span>
                <span className="text-stone-300">·</span>
                <span className="text-stone-500 font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  <span>Lokasi: {activeStep.location}</span>
                </span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mt-0.5">
                {activeStep.nameIndo}
              </h3>
            </div>

            <span
              className={`px-3 py-1 rounded-lg font-bold self-start sm:self-auto uppercase tracking-wide text-[11px] border ${
                activeStep.statusHukum === 'rukun'
                  ? 'bg-rose-100 text-rose-950 border-rose-300'
                  : activeStep.statusHukum === 'wajib'
                  ? 'bg-emerald-100 text-emerald-950 border-emerald-300'
                  : 'bg-stone-200 text-stone-800 border-stone-300'
              }`}
            >
              Status: {activeStep.statusHukum.toUpperCase()} HAJI
            </span>
          </div>

          {/* Activities List */}
          <div className="space-y-2">
            <strong className="text-stone-900 block font-semibold text-sm">
              Agenda & Amalan Manasik:
            </strong>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {activeStep.activities.map((act, i) => (
                <div
                  key={i}
                  className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-[11px] shrink-0 border border-emerald-200">
                    {i + 1}
                  </span>
                  <span className="text-stone-700 leading-relaxed text-xs">{act}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips Box */}
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-start gap-3 text-stone-800">
            <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <strong className="text-emerald-950 font-bold block text-xs">
                Catatan Fiqih & Tips Lapangan:
              </strong>
              <p className="text-stone-700 leading-relaxed">{activeStep.tips}</p>
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex justify-between pt-2 border-t border-stone-200/80">
            <button
              disabled={selectedDayIdx === 0}
              onClick={() => setSelectedDayIdx((prev) => Math.max(0, prev - 1))}
              className="px-3.5 py-1.5 text-stone-600 font-medium hover:text-stone-900 disabled:opacity-30"
            >
              ← Hari Sebelumnya
            </button>
            <button
              disabled={selectedDayIdx === MANASIK_STEPS.length - 1}
              onClick={() => setSelectedDayIdx((prev) => Math.min(MANASIK_STEPS.length - 1, prev + 1))}
              className="px-3.5 py-1.5 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 disabled:opacity-30 transition-colors"
            >
              Hari Selanjutnya →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
