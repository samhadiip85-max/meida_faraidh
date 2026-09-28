import React, { useState } from 'react';
import { WATER_TYPES } from '../../data/thaharahData';
import { WaterCategory } from '../../types/thaharah';
import { Droplets, CheckCircle, AlertTriangle, XCircle, Info, Sparkles } from 'lucide-react';

export function ThaharahOverview() {
  const [selectedCategory, setSelectedCategory] = useState<WaterCategory>('mutlak');

  // 2 Qullah Simulator State
  const [tankLength, setTankLength] = useState<number>(60); // cm
  const [tankWidth, setTankWidth] = useState<number>(60);   // cm
  const [tankHeight, setTankHeight] = useState<number>(60);  // cm
  const [hasContaminant, setHasContaminant] = useState<boolean>(false);
  const [hasSensoryChange, setHasSensoryChange] = useState<boolean>(false);

  // Volume in Liters: (L x W x H) / 1000
  const calculatedVolume = Math.round((tankLength * tankWidth * tankHeight) / 1000);
  const isTwoQullah = calculatedVolume >= 216;

  // Determination of water status
  let waterPurityStatus = 'Suci & Menyucikan (Air Mutlak)';
  let waterPurityBadge = 'bg-emerald-100 text-emerald-950 border-emerald-300';
  let waterPurityExplanation =
    'Air memenuhi syarat kesucian dan volume aman untuk wudhu, mandi wajib, serta menyucikan najis.';

  if (hasContaminant) {
    if (!isTwoQullah) {
      waterPurityStatus = 'Mutanajjis (Najis - Tidak Sah Bersuci)';
      waterPurityBadge = 'bg-rose-100 text-rose-950 border-rose-300';
      waterPurityExplanation =
        'Karena volume air KURANG DARI 2 QULLAH (< 216 Liter), kemasukan najis membuat seluruh air menjadi mutanajjis seketika, meskipun warna, rasa, dan baunya belum berubah.';
    } else {
      if (hasSensoryChange) {
        waterPurityStatus = 'Mutanajjis (Najis karena Berubah Sifat)';
        waterPurityBadge = 'bg-rose-100 text-rose-950 border-rose-300';
        waterPurityExplanation =
          'Meskipun volume air mencapai 2 Qullah (≥ 216 Liter), air menjadi mutanajjis karena salah satu sifatnya (bau/rasa/warna) telah berubah akibat najis tersebut.';
      } else {
        waterPurityStatus = 'Tetap Suci & Menyucikan (Aman dari Najis)';
        waterPurityBadge = 'bg-emerald-100 text-emerald-950 border-emerald-300';
        waterPurityExplanation =
          'Karena volume air MENCAPAI 2 QULLAH (≥ 216 Liter) dan TIDAK ada perubahan pada bau, rasa, maupun warna, air tetap suci dan menyucikan (Sabda Nabi SAW: "Idzaa kaanal maa-u qullataini lam yahmilil khabats").';
      }
    }
  }

  const activeWater = WATER_TYPES.find((w) => w.id === selectedCategory)!;

  return (
    <div className="space-y-8">
      {/* Intro Hero */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Droplets className="w-4 h-4 text-emerald-700" />
          <span>BAB 1: Fiqih Thaharah (Bersuci dalam Islam)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Konsep Thaharah, Macam-Macam Air & Kaidah Dua Qullah
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Thaharah adalah kunci sahnya ibadah shalat ("مِفْتَاحُ الصَّلَاةِ الطُّهُورُ"). Bersuci mencakup
          menghilangkan hadats (dengan wudhu, mandi wajib, atau tayammum) dan membersihkan najis dari badan,
          pakaian, serta tempat ibadah.
        </p>
      </div>

      {/* 4 Pembagian Air (Aqsamul Miyah) */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Sparkles className="w-4 h-4" />
            <span>Aqsamul Miyah (Pembagian 4 Jenis Air)</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Status Hukum Air untuk Wudhu & Menyucikan Najis
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Ulama Mazhab Syafi'i membagi air menjadi 4 kategori hukum berdasarkan kemampuan menyucikannya:
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {WATER_TYPES.map((w) => {
            const isSelected = selectedCategory === w.id;
            return (
              <button
                key={w.id}
                type="button"
                onClick={() => setSelectedCategory(w.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-950 shadow-xs ring-1 ring-emerald-600'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block font-semibold">
                  {w.id}
                </span>
                <span className="text-xs sm:text-sm font-bold block mt-0.5 leading-snug">
                  {w.nameIndo.split('(')[0]}
                </span>
                <span className="text-[11px] text-stone-500 font-arabic mt-1 block truncate">
                  {w.nameArabic}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Air Details */}
        <div className="bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/80 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                Status Fiqih
              </span>
              <h3 className="text-base font-bold text-stone-900 mt-0.5">
                {activeWater.nameIndo}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              {activeWater.purificationPermitted ? (
                <span className="px-3 py-1 bg-emerald-100 text-emerald-950 font-bold rounded-lg border border-emerald-300 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Sah untuk Wudhu & Mandi</span>
                </span>
              ) : (
                <span className="px-3 py-1 bg-rose-100 text-rose-950 font-bold rounded-lg border border-rose-300 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-rose-700" />
                  <span>Tidak Sah untuk Bersuci</span>
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <strong className="text-stone-900 block font-semibold">Definisi Syar'i:</strong>
            <p className="text-stone-700 leading-relaxed">{activeWater.definition}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1.5">
              <strong className="text-stone-900 block font-semibold">Contoh Air:</strong>
              <ul className="space-y-1 text-stone-600 list-disc list-inside">
                {activeWater.examples.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1.5">
              <strong className="text-stone-900 block font-semibold">Ketentuan Penggunaan:</strong>
              <ul className="space-y-1 text-stone-600 list-disc list-inside">
                {activeWater.conditions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-[11px] text-stone-500 pt-2 border-t border-stone-200/80">
            <strong>Rujukan Dalil: </strong>
            {activeWater.dalil}
          </div>
        </div>
      </div>

      {/* Simulator Interaktif 2 Qullah (Qullatain) */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Droplets className="w-4 h-4" />
            <span>Simulator Interaktif Volume Air 2 Qullah</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Ukur Dimensi Bak Mandi & Cek Efek Kejatuhan Najis
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Standar Mazhab Syafi'i menetapkan batas 2 Qullah adalah ± 216 liter (setara kubus 60 cm × 60 cm × 60 cm).
            Ubah ukuran bak mandi di bawah untuk melihat reaksinya:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-4 text-xs">
            <div>
              <div className="flex justify-between font-semibold text-stone-700 mb-1">
                <span>Panjang Bak Mandi (cm):</span>
                <span className="font-mono-num text-stone-900 font-bold">{tankLength} cm</span>
              </div>
              <input
                type="range"
                min="30"
                max="120"
                step="5"
                value={tankLength}
                onChange={(e) => setTankLength(Number(e.target.value))}
                className="w-full accent-emerald-700"
              />
            </div>

            <div>
              <div className="flex justify-between font-semibold text-stone-700 mb-1">
                <span>Lebar Bak Mandi (cm):</span>
                <span className="font-mono-num text-stone-900 font-bold">{tankWidth} cm</span>
              </div>
              <input
                type="range"
                min="30"
                max="120"
                step="5"
                value={tankWidth}
                onChange={(e) => setTankWidth(Number(e.target.value))}
                className="w-full accent-emerald-700"
              />
            </div>

            <div>
              <div className="flex justify-between font-semibold text-stone-700 mb-1">
                <span>Tinggi Air Bak (cm):</span>
                <span className="font-mono-num text-stone-900 font-bold">{tankHeight} cm</span>
              </div>
              <input
                type="range"
                min="30"
                max="120"
                step="5"
                value={tankHeight}
                onChange={(e) => setTankHeight(Number(e.target.value))}
                className="w-full accent-emerald-700"
              />
            </div>

            {/* Test Najis switches */}
            <div className="pt-2 border-t border-stone-200 space-y-2">
              <span className="font-bold text-stone-900 block">Skenario Percobaan Najis:</span>
              <label className="flex items-center gap-2 cursor-pointer p-2 bg-stone-50 rounded-lg border border-stone-200">
                <input
                  type="checkbox"
                  checked={hasContaminant}
                  onChange={(e) => {
                    setHasContaminant(e.target.checked);
                    if (!e.target.checked) setHasSensoryChange(false);
                  }}
                  className="w-4 h-4 rounded text-emerald-700 focus:ring-emerald-600"
                />
                <span className="text-stone-800">
                  Kemasukan Najis Kecil (misal: kotoran cicak atau setetes urin)
                </span>
              </label>

              {hasContaminant && isTwoQullah && (
                <label className="flex items-center gap-2 cursor-pointer p-2 bg-stone-50 rounded-lg border border-stone-200">
                  <input
                    type="checkbox"
                    checked={hasSensoryChange}
                    onChange={(e) => setHasSensoryChange(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-700 focus:ring-emerald-600"
                  />
                  <span className="text-stone-800">
                    Najis tersebut mengubah rasa, bau, atau warna air
                  </span>
                </label>
              )}
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-6 bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-stone-400">
                Status Volume Air
              </span>
              <span
                className={`px-2.5 py-0.5 text-xs font-bold rounded border ${
                  isTwoQullah
                    ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                    : 'bg-amber-100 text-amber-900 border-amber-300'
                }`}
              >
                {isTwoQullah ? '≥ 2 Qullah (Air Banyak)' : '< 2 Qullah (Air Sedikit)'}
              </span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-stone-200 text-center space-y-1">
              <span className="text-xs text-stone-500">Volume Total Terhitung:</span>
              <div className="text-3xl font-bold font-mono-num text-emerald-900">
                {calculatedVolume} Liter
              </div>
              <span className="text-[11px] text-stone-400 font-mono-num block">
                Batas Aman 2 Qullah: 216 Liter ({tankLength} × {tankWidth} × {tankHeight} cm)
              </span>
            </div>

            <div className={`p-4 rounded-xl border ${waterPurityBadge} space-y-1.5 text-xs`}>
              <div className="flex items-center gap-1.5 font-bold text-sm">
                {waterPurityStatus.includes('Najis') ? (
                  <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0" />
                ) : (
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                )}
                <span>{waterPurityStatus}</span>
              </div>
              <p className="leading-relaxed">{waterPurityExplanation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
