import React, { useState } from 'react';
import { IDDAH_CASES } from '../../data/munakahatData';
import { IddahCondition } from '../../types/munakahat';
import { Clock, CheckCircle2, AlertCircle, HeartHandshake, ShieldAlert } from 'lucide-react';

export function IddahCalculator() {
  const [selectedCase, setSelectedCase] = useState<IddahCondition>('death_not_pregnant');

  const currentResult = IDDAH_CASES[selectedCase];

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Clock className="w-4 h-4" />
          <span>Kalkulator & Panduan Masa Iddah</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Ketentuan Masa Tunggu (Iddah) bagi Wanita
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Iddah adalah masa menunggu bagi seorang wanita setelah putusnya ikatan perkawinan (karena talak atau kematian suami)
          untuk memastikan kekosongan rahim (bara'atur rahim) dan menjaga kepastian nasab keturunan.
        </p>
      </div>

      {/* Interactive Case Picker */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Pilih Kondisi Perpisahan Pernikahan
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Durasi dan ketentuan masa iddah berbeda drastis sesuai kondisi biologis dan penyebab perpisahan:
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              id: 'death_not_pregnant',
              label: 'Suami Wafat (Tidak Hamil)',
              badge: 'Cerai Mati',
            },
            {
              id: 'pregnant_any',
              label: 'Sedang Hamil (Cerai Hidup / Mati)',
              badge: 'Kondisi Hamil',
            },
            {
              id: 'divorce_menstruating',
              label: 'Cerai Hidup (Masih Haid Rutin)',
              badge: 'Cerai Hidup',
            },
            {
              id: 'divorce_non_menstruating',
              label: 'Cerai Hidup (Menopause / Belum Haid)',
              badge: 'Cerai Hidup',
            },
            {
              id: 'divorce_before_dukhul',
              label: 'Cerai Sebelum Dukhul (Bersetubuh)',
              badge: 'Qablal Dukhul',
            },
          ].map((item) => {
            const isSelected = selectedCase === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCase(item.id as IddahCondition)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-950 shadow-xs ring-1 ring-emerald-600'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                    {item.badge}
                  </span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-700" />}
                </div>
                <span className="font-bold text-xs sm:text-sm leading-snug">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed calculation result card */}
        <div className="bg-stone-50 rounded-xl border border-stone-200 p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4">
            <div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                Hasil Ketentuan Iddah
              </span>
              <h3 className="text-lg font-bold text-stone-900 mt-0.5">
                {currentResult.title}
              </h3>
            </div>
            <div className="p-3 bg-white rounded-lg border border-emerald-300 shadow-xs text-center shrink-0">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">
                Lama Masa Tunggu:
              </span>
              <span className="text-base font-bold text-emerald-900 font-mono-num">
                {currentResult.durationText}
              </span>
            </div>
          </div>

          {/* Dalil text */}
          <div className="p-3.5 bg-emerald-50/50 rounded-lg border border-emerald-200 space-y-1">
            <span className="text-[11px] font-semibold text-emerald-900 block">
              Dalil Al-Qur'an:
            </span>
            <div className="font-arabic text-stone-900 text-sm leading-loose">
              {currentResult.dalilArabic}
            </div>
            <span className="text-[10px] text-stone-500 block">
              Sumber: {currentResult.dalilSource}
            </span>
          </div>

          {/* Rights & Rujuk status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Hak Nafkah & Ihdad */}
            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-2">
              <span className="font-bold text-stone-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Hak & Kewajiban Selama Iddah:</span>
              </span>
              <ul className="space-y-1 list-disc list-inside text-stone-600">
                {currentResult.rightsDuringIddah.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            {/* Hak Rujuk */}
            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-2">
              <span className="font-bold text-stone-900 flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-emerald-700" />
                <span>Status Rujuk (Kembali Tanpa Akad Baru):</span>
              </span>
              {currentResult.rujukAllowed ? (
                <div className="p-2.5 bg-emerald-50 rounded border border-emerald-200 text-emerald-950">
                  <strong>Boleh Rujuk:</strong> Mantan suami berhak merujuk kembali istrinya selama masa iddah berlangsung (pada talak 1 atau 2) tanpa perlu akad nikah baru atau mahar baru.
                </div>
              ) : (
                <div className="p-2.5 bg-stone-100 rounded border border-stone-200 text-stone-700">
                  <strong>Tidak Ada Rujuk:</strong> Tidak berlaku hak rujuk sepihak. Pada cerai mati atau qablal dukhul, hubungan pernikahan sudah selesai secara syar'i.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3 Hikmah Pensyariatan Iddah */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-3">
        <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
          3 Hikmah Agung Pensyariatan Masa Iddah
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
            <strong className="text-stone-900 block font-semibold">1. Memastikan Kesucian Rahim</strong>
            Mencegah campur-aduknya benih sperma dan kerancuan nasab keturunan (Hifzhun Nasl).
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
            <strong className="text-stone-900 block font-semibold">2. Memberi Kesempatan Rujuk</strong>
            Waktu introspeksi bagi kedua pasangan untuk memulihkan keutuhan rumah tangga setelah emosi mereda.
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
            <strong className="text-stone-900 block font-semibold">3. Wujud Kesetiaan & Ihdad</strong>
            Penghormatan atas ikatan mitsaqan ghalizha yang pernah terjalin dan masa berkabung bagi suami yang wafat.
          </div>
        </div>
      </div>
    </div>
  );
}
