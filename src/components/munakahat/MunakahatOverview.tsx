import React, { useState } from 'react';
import { MARRIAGE_RULINGS } from '../../data/munakahatData';
import { MarriageRuling } from '../../types/munakahat';
import { Heart, Scale, Users, ScrollText, ArrowRight, ShieldCheck } from 'lucide-react';

interface MunakahatOverviewProps {
  onGoToFaraidh?: () => void;
}

export function MunakahatOverview({ onGoToFaraidh }: MunakahatOverviewProps) {
  const [selectedRuling, setSelectedRuling] = useState<MarriageRuling>('Sunnah');

  const currentRuling = MARRIAGE_RULINGS.find((r) => r.ruling === selectedRuling)!;

  return (
    <div className="space-y-8">
      {/* Intro Hero */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          <Heart className="w-4 h-4 text-emerald-700" />
          <span>BAB 19: Fiqih Munakahat (Pernikahan dalam Islam)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Hukum, Rukun & Kaidah Sah Pernikahan
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Pernikahan (An-Nikah) dalam syariat Islam adalah akad yang menghalalkan pergaulan antara laki-laki dan perempuan
          bukan mahram untuk mewujudkan keluarga sakinah, mawaddah, wa rahmah, serta menjaga keturunan yang sah.
        </p>
      </div>

      {/* 5 Hukum Menikah Interaktif */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Scale className="w-4 h-4" />
            <span>Kondisi & 5 Hukum Menikah</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Hukum Menikah Menyesuaikan Keadaan Setiap Individu
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Pernikahan tidak selalu bernilai satu hukum tetap, melainkan dinamis bergantung pada kesiapan fisik, finansial, dan mental seseorang:
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2">
          {MARRIAGE_RULINGS.map((item) => {
            const isSelected = selectedRuling === item.ruling;
            return (
              <button
                key={item.ruling}
                type="button"
                onClick={() => setSelectedRuling(item.ruling)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                }`}
              >
                {item.ruling}
              </button>
            );
          })}
        </div>

        {/* Selected ruling card */}
        <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
          <div className="flex items-baseline justify-between border-b border-stone-200/80 pb-3">
            <div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                Hukum: {currentRuling.ruling}
              </span>
              <h3 className="text-base font-bold text-stone-900 mt-0.5 font-arabic">
                {currentRuling.arabicTerm}
              </h3>
            </div>
            <span className="text-xs text-stone-500 font-medium bg-white px-2.5 py-1 rounded border border-stone-200">
              Kondisi Subjektif
            </span>
          </div>

          <div className="text-xs space-y-2">
            <div>
              <strong className="text-stone-900 block font-semibold">Kriteria & Kondisi:</strong>
              <p className="text-stone-700 leading-relaxed">{currentRuling.condition}</p>
            </div>
            <div>
              <strong className="text-stone-900 block font-semibold">Penjelasan Fiqih:</strong>
              <p className="text-stone-700 leading-relaxed">{currentRuling.explanation}</p>
            </div>
            <div className="pt-2 text-stone-500 text-[11px] border-t border-stone-200/80">
              <strong>Landasan Dalil: </strong>
              {currentRuling.dalil}
            </div>
          </div>
        </div>
      </div>

      {/* 5 Rukun Nikah & Syarat Sah */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Users className="w-4 h-4" />
            <span>Rukun Pokok Pernikahan</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            5 Rukun Nikah yang Menentukan Sahnya Akad
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Bila salah satu rukun ini tidak terpenuhi, maka akad pernikahan menjadi batal (fasid/bathil) secara syariat:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {/* Rukun 1 */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block w-fit">
              Rukun 1
            </span>
            <h3 className="font-bold text-sm text-stone-900">Calon Suami (Az-Zauj)</h3>
            <ul className="space-y-1 text-stone-600 list-disc list-inside">
              <li>Beragama Islam.</li>
              <li>Laki-laki sejati (bukan khuntsa musykil).</li>
              <li>Baligh dan berakal sehat.</li>
              <li>Bukan mahram bagi calon istri.</li>
              <li>Jelas identitas individunya.</li>
              <li>Tanpa paksaan / atas kerelaan sendiri.</li>
              <li>Tidak sedang dalam keadaan ihram haji/umrah.</li>
            </ul>
          </div>

          {/* Rukun 2 */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block w-fit">
              Rukun 2
            </span>
            <h3 className="font-bold text-sm text-stone-900">Calon Istri (Az-Zaujah)</h3>
            <ul className="space-y-1 text-stone-600 list-disc list-inside">
              <li>Beragama Islam (atau wanita Ahli Kitab yang memenuhi syarat).</li>
              <li>Perempuan sejati.</li>
              <li>Bukan mahram bagi calon suami.</li>
              <li>Tidak dalam ikatan pernikahan sah dengan pria lain.</li>
              <li>Tidak sedang dalam masa iddah.</li>
              <li>Jelas orangnya dan tidak sedang ihram.</li>
            </ul>
          </div>

          {/* Rukun 3 */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block w-fit">
              Rukun 3
            </span>
            <h3 className="font-bold text-sm text-stone-900">Wali Nikah (Al-Wali)</h3>
            <ul className="space-y-1 text-stone-600 list-disc list-inside">
              <li>Laki-laki muslim, baligh, dan berakal.</li>
              <li>Merdeka dan adil (tidak fasik).</li>
              <li>Wali nasab sesuai urutan derajat tertib syariat (diawali ayah kandung).</li>
              <li>Bila wali nasab tidak ada/adhal, beralih ke Wali Hakim.</li>
            </ul>
          </div>

          {/* Rukun 4 */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block w-fit">
              Rukun 4
            </span>
            <h3 className="font-bold text-sm text-stone-900">Dua Orang Saksi Adil</h3>
            <ul className="space-y-1 text-stone-600 list-disc list-inside">
              <li>Minimal 2 orang laki-laki muslim yang merdeka.</li>
              <li>Baligh, berakal, dan adil.</li>
              <li>Mendengar dan memahami ijab qabul secara langsung.</li>
              <li>Mampu melihat kedua pihak yang berakad.</li>
            </ul>
          </div>

          {/* Rukun 5 */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 md:col-span-2">
            <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 block w-fit">
              Rukun 5
            </span>
            <h3 className="font-bold text-sm text-stone-900">Shighat Ijab & Qabul (Al-'Aqd)</h3>
            <p className="text-stone-600 leading-relaxed">
              Pernyataan penyerahan dari wali nikah (Ijab) dan penerimaan dari mempelai laki-laki (Qabul). Syarat shighat:
            </p>
            <ul className="space-y-1 text-stone-600 list-disc list-inside">
              <li>Menggunakan lafal pernikahan yang tegas: <em>Nikah</em> atau <em>Tazwij</em>.</li>
              <li>Antara Ijab dan Qabul bersambung langsung (muttashil) tanpa jeda pemisah yang lama.</li>
              <li>Tidak disertai syarat tempo atau pembatasan waktu (menolak nikah mut'ah/kontrak).</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Jembatan Integrasi: Kaitan Munakahat dengan Kewarisan (Faraidh) */}
      <div className="bg-emerald-50/60 rounded-xl border border-emerald-200 p-6 space-y-4">
        <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm uppercase tracking-wide">
          <ShieldCheck className="w-5 h-5 text-emerald-700" />
          <span>Kaitan Erat: Pernikahan sebagai Sebab Utama Hak Waris (Faraidh)</span>
        </div>
        <p className="text-xs text-emerald-900 leading-relaxed">
          Dalam Fiqih Islam, akad pernikahan yang sah secara otomatis menjadi salah satu dari <strong>3 Sebab Utama Mewarisi (Asbabul Irtsi)</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-white rounded-lg border border-emerald-200 shadow-xs space-y-1">
            <strong className="text-emerald-950 block font-semibold">1. Hak Pasti Suami & Istri (Ashabul Furudh):</strong>
            <p className="text-stone-700">
              Suami berhak mendapat <strong>1/2</strong> (tanpa anak) atau <strong>1/4</strong> (dengan anak). Istri berhak mendapat <strong>1/4</strong> (tanpa anak) atau <strong>1/8</strong> (dengan anak).
            </p>
          </div>

          <div className="p-3 bg-white rounded-lg border border-emerald-200 shadow-xs space-y-1">
            <strong className="text-emerald-950 block font-semibold">2. Kebal dari Hijab Hirman:</strong>
            <p className="text-stone-700">
              Pasangan nikah yang sah tidak pernah bisa digugurkan hak warisnya oleh kerabat manapun di muka bumi selama pernikahan masih utuh saat salah satunya wafat.
            </p>
          </div>
        </div>

        {onGoToFaraidh && (
          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={onGoToFaraidh}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Eksplorasi Perhitungan Waris Suami/Istri di BAB 21 (Faraidh)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
