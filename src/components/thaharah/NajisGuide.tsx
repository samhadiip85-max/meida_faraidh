import React, { useState } from 'react';
import { NAJIS_LIST } from '../../data/thaharahData';
import { NajisTier } from '../../types/thaharah';
import { Sparkles, ShieldAlert, CheckCircle2, Droplets, Info } from 'lucide-react';

const COMMON_NAJIS_SCENARIOS = [
  {
    id: 'kencing_bayi_lk',
    title: 'Kencing Bayi Laki-laki (< 2 Tahun, ASI saja)',
    tier: 'mukhaffafah',
    tierLabel: 'Mukhaffafah (Ringan)',
    steps: [
      '1. Jika masih basah, keringkan cairan urin dengan kain/tisu kering.',
      '2. Ambil air mutlak di telapak tangan atau semprotan.',
      '3. Percikkan air secara merata di atas seluruh area najis hingga basah merata.',
      '4. Tidak disyaratkan air harus mengalir atau diperas. Setelah basah terpercik, pakaian suci kembali.',
    ],
    note: 'Jika bayi perempuan, najisnya berstatus Mutawassithah (wajib dicuci hingga air mengalir).',
  },
  {
    id: 'darah_kotoran',
    title: 'Kotoran Hewan / Darah / Muntah pada Pakaian',
    tier: 'mutawassithah',
    tierLabel: 'Mutawassithah (Sedang - \'Ainiyah)',
    steps: [
      '1. Buang dan bersihkan wujud benda najis (feses/darah) terlebih dahulu.',
      '2. Siram dan basuh dengan air mutlak yang mengalir.',
      '3. Cuci sampai HILANG 3 sifat najis: Bau, Rasa, dan Warnanya.',
      '4. Jika bau atau warna sangat membandel setelah dicuci berulang kali, hukumnya dimaafkan (ma\'fu).',
    ],
    note: 'Air harus didatangkan/disiramkan ke pakaian yang terkena najis, bukan pakaian najis yang dicelup ke dalam ember kecil berisi air sedikit.',
  },
  {
    id: 'jilatan_anjing',
    title: 'Jilatan Anjing / Babi pada Piring atau Pakaian',
    tier: 'mughallazhah',
    tierLabel: 'Mughallazhah (Berat)',
    steps: [
      '1. Bersihkan sisa air liur atau kotoran najis.',
      '2. Siapkan air mutlak dan debu/tanah yang suci.',
      '3. Basuh area yang terkena sebanyak 7 kali basuhan air mengalir.',
      '4. Wajib mencampurkan debu/tanah suci pada salah satu dari 7 basuhan (paling utama basuhan pertama/kedua).',
      '5. Bilas hingga bersih dan suci kembali.',
    ],
    note: 'Sabda Nabi SAW: "Menyucikan bejana salah seorang di antara kalian jika dijilat anjing adalah dengan membasuhnya 7 kali, yang pertamanya dicampur tanah" (HR. Muslim).',
  },
];

export function NajisGuide() {
  const [selectedTier, setSelectedTier] = useState<NajisTier>('mukhaffafah');
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('kencing_bayi_lk');

  const currentNajis = NAJIS_LIST.find((n) => n.tier === selectedTier)!;
  const currentScenario = COMMON_NAJIS_SCENARIOS.find((s) => s.id === selectedScenarioId)!;

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <ShieldAlert className="w-4 h-4" />
          <span>Panduan Lengkap Kebersihan & Kesucian</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Tiga Tingkatan Najis & Cara Menyucikannya
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Najis adalah benda kotor yang mencegah sahnya shalat. Syariat Islam membagi najis menjadi
          3 tingkatan dengan tingkat kesulitan pensucian yang berbeda: Mukhaffafah (Ringan),
          Mutawassithah (Sedang), dan Mughallazhah (Berat).
        </p>
      </div>

      {/* Simulator Interaktif Skenario Praktis */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <Sparkles className="w-4 h-4" />
          <span>Praktik Nyata: Pilih Kasus Najis untuk Melihat Cara Mensucikannya</span>
        </div>
        <p className="text-xs text-stone-500">
          Klik salah satu contoh peristiwa najis di bawah ini untuk melihat prosedur pensucian yang benar:
        </p>

        <div className="flex flex-wrap gap-2">
          {COMMON_NAJIS_SCENARIOS.map((sc) => {
            const isSelected = selectedScenarioId === sc.id;
            return (
              <button
                key={sc.id}
                type="button"
                onClick={() => setSelectedScenarioId(sc.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs font-semibold'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                {sc.title}
              </button>
            );
          })}
        </div>

        {/* Selected Scenario Box */}
        <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3 text-xs">
          <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
            <h3 className="font-bold text-sm text-stone-900">{currentScenario.title}</h3>
            <span
              className={`px-2.5 py-0.5 rounded font-bold text-[11px] ${
                currentScenario.tier === 'mukhaffafah'
                  ? 'bg-sky-100 text-sky-900 border border-sky-300'
                  : currentScenario.tier === 'mutawassithah'
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-rose-100 text-rose-900 border border-rose-300'
              }`}
            >
              {currentScenario.tierLabel}
            </span>
          </div>

          <div className="space-y-1.5">
            <strong className="text-stone-900 block font-semibold">
              Tata Cara Pensucian Syar'i:
            </strong>
            <ul className="space-y-1.5">
              {currentScenario.steps.map((st, i) => (
                <li key={i} className="p-2 bg-white rounded border border-stone-200 font-medium text-stone-800">
                  {st}
                </li>
              ))}
            </ul>
          </div>

          {currentScenario.note && (
            <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>{currentScenario.note}</span>
            </div>
          )}
        </div>
      </div>

      {/* 3 Tingkatan Najis Ensiklopedia */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Eksplorasi Rinci 3 Kategori Najis
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pahami batasan benda najis dan dalil pensuciannya dalam Fiqih Mazhab Syafi'i:
          </p>
        </div>

        {/* Tier Tabs */}
        <div className="flex gap-2">
          {NAJIS_LIST.map((n) => {
            const isSelected = selectedTier === n.tier;
            return (
              <button
                key={n.id}
                type="button"
                onClick={() => setSelectedTier(n.tier)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                {n.name.split('(')[0]}
              </button>
            );
          })}
        </div>

        {/* Selected Tier View */}
        <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4 text-xs">
          <div className="flex items-baseline justify-between border-b border-stone-200/80 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                Kategori
              </span>
              <h3 className="text-base font-bold text-stone-900 mt-0.5">{currentNajis.name}</h3>
            </div>
            <span className="text-sm font-arabic text-stone-600 bg-white px-3 py-1 rounded border border-stone-200">
              {currentNajis.tierArabic}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1.5">
              <strong className="text-stone-900 block font-semibold">Contoh Benda Najis:</strong>
              <ul className="space-y-1 text-stone-600 list-disc list-inside">
                {currentNajis.examples.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1.5">
              <strong className="text-stone-900 block font-semibold">Cara Menyucikan:</strong>
              <ul className="space-y-1 text-stone-600 list-disc list-inside">
                {currentNajis.cleansingMethod.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-[11px] text-stone-500 pt-2 border-t border-stone-200/80">
            <strong>Dasar Dalil: </strong>
            {currentNajis.dalil}
          </div>
        </div>
      </div>
    </div>
  );
}
