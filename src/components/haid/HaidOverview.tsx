import React, { useState } from 'react';
import { BLOOD_COLORS, FORBIDDEN_ACTS } from '../../data/haidData';
import { HeartPulse, ShieldAlert, Sparkles, CheckCircle2, AlertOctagon, Info } from 'lucide-react';

export function HaidOverview() {
  const [selectedBlood, setSelectedBlood] = useState<'haid' | 'nifas' | 'istihadhah'>('haid');

  return (
    <div className="space-y-8">
      {/* Intro Hero */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 tracking-wide uppercase">
          <HeartPulse className="w-4 h-4 text-rose-700" />
          <span>BAB 2: Fiqih Darah Wanita (Haid, Istihadhah, & Nifas)</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
          Kaidah Hukum, Batasan Durasi & Warna Darah
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
          Mempelajari hukum darah wanita adalah fardhu 'ain bagi setiap muslimah dan suami/wali.
          Syariat Islam membedakan dengan tegas antara darah alami (Haid & Nifas) yang mewajibkan mandi
          dan melarang shalat/puasa, dengan darah penyakit (Istihadhah) yang tidak menggugurkan shalat.
        </p>
      </div>

      {/* Perbandingan 3 Jenis Darah */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
            <Sparkles className="w-4 h-4" />
            <span>Matriks Syar'i Tiga Darah Wanita</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            Perbandingan Karakteristik & Ketentuan Fiqih
          </h2>
        </div>

        {/* 3 Darah Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* HAID */}
          <div
            onClick={() => setSelectedBlood('haid')}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${
              selectedBlood === 'haid'
                ? 'bg-rose-50 border-rose-600 ring-1 ring-rose-600 shadow-xs'
                : 'bg-stone-50 hover:bg-stone-100 border-stone-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-900 uppercase tracking-wide">
                1. Darah Haid
              </span>
              <span className="font-arabic text-sm text-stone-500">الحيض</span>
            </div>
            <h3 className="text-base font-bold text-stone-900 mt-2">Darah Alami Menstruasi</h3>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Darah yang keluar dari pangkal rahim wanita sehat pada waktu-waktu tertentu, bukan karena sakit atau melahirkan.
            </p>
            <div className="mt-4 pt-3 border-t border-stone-200/80 space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-500">Minimal:</span>
                <span className="font-semibold text-stone-900">24 Jam (Sehari Semalam)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Maksimal:</span>
                <span className="font-semibold text-stone-900">15 Hari 15 Malam</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Kebiasaan:</span>
                <span className="font-semibold text-stone-900">6 atau 7 Hari</span>
              </div>
            </div>
          </div>

          {/* NIFAS */}
          <div
            onClick={() => setSelectedBlood('nifas')}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${
              selectedBlood === 'nifas'
                ? 'bg-amber-50 border-amber-600 ring-1 ring-amber-600 shadow-xs'
                : 'bg-stone-50 hover:bg-stone-100 border-stone-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                2. Darah Nifas
              </span>
              <span className="font-arabic text-sm text-stone-500">النفاس</span>
            </div>
            <h3 className="text-base font-bold text-stone-900 mt-2">Darah Pasca Melahirkan</h3>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Darah yang keluar dari rahim setelah tuntasnya proses persalinan / keluarnya seluruh anggota janin.
            </p>
            <div className="mt-4 pt-3 border-t border-stone-200/80 space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-500">Minimal:</span>
                <span className="font-semibold text-stone-900">Lahzhah (Sekejap tetesan)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Maksimal:</span>
                <span className="font-semibold text-stone-900">60 Hari 60 Malam</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Kebiasaan:</span>
                <span className="font-semibold text-stone-900">40 Hari</span>
              </div>
            </div>
          </div>

          {/* ISTIHADHAH */}
          <div
            onClick={() => setSelectedBlood('istihadhah')}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${
              selectedBlood === 'istihadhah'
                ? 'bg-sky-50 border-sky-600 ring-1 ring-sky-600 shadow-xs'
                : 'bg-stone-50 hover:bg-stone-100 border-stone-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-sky-900 uppercase tracking-wide">
                3. Darah Istihadhah
              </span>
              <span className="font-arabic text-sm text-stone-500">الاستحاضة</span>
            </div>
            <h3 className="text-base font-bold text-stone-900 mt-2">Darah Penyakit Abnormal</h3>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Darah yang keluar di luar masa minimal/maksimal haid atau nifas, berasal dari robeknya urat ('adzil).
            </p>
            <div className="mt-4 pt-3 border-t border-stone-200/80 space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-500">Status Hukum:</span>
                <span className="font-semibold text-sky-950">Suci (Wajib Shalat)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Wudhu:</span>
                <span className="font-semibold text-sky-950">Tiap Shalat Fardhu</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Puasa:</span>
                <span className="font-semibold text-sky-950">Wajib & Sah Dikerjakan</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Warna & Tingkatan Kekuatan Darah (Tamyiz) */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
            <HeartPulse className="w-4 h-4" />
            <span>Kaidah Tamyiz: Urutan Kekuatan Darah</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            5 Warna Darah dari Paling Kuat (Qawiy) hingga Lemah (Dha'if)
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Saat terjadi pendarahan melebihi 15 hari, warna dan sifat darah menjadi penentu utama membedakan mana Haid dan mana Istihadhah:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {BLOOD_COLORS.map((color) => (
            <div
              key={color.id}
              className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs"
            >
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-md bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
                  {color.powerRank}
                </span>
                <span className="font-arabic text-stone-500 text-xs">{color.nameArabic}</span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm">{color.nameIndo}</h3>
              <p className="text-stone-600 leading-relaxed text-[11px]">{color.description}</p>
              <span className="text-[10px] uppercase font-bold tracking-wider text-rose-900 bg-rose-50 px-2 py-0.5 rounded border border-rose-200 block">
                {color.powerRank === 1
                  ? 'Kekuatan: Tingkat 1 (Paling Kuat)'
                  : `Kekuatan: Tingkat ${color.powerRank}`}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 8 Larangan Saat Haid & Nifas */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
            <ShieldAlert className="w-4 h-4" />
            <span>Larangan Syariat</span>
          </div>
          <h2 className="text-lg font-bold text-stone-900 font-serif mt-1">
            8 Hal yang Diharamkan bagi Wanita yang Sedang Haid atau Nifas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {FORBIDDEN_ACTS.map((act) => (
            <div
              key={act.id}
              className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-bold text-stone-900 text-sm">{act.name}</h3>
                <span className="font-arabic text-stone-500 text-xs">{act.nameArabic}</span>
              </div>
              <p className="text-stone-700 leading-relaxed">{act.description}</p>

              <div className="flex items-center justify-between pt-2 border-t border-stone-200/80">
                <span className="text-[10px] text-stone-400 font-mono">
                  {act.dalil.split(':')[0]}
                </span>
                {act.qadhaRequired ? (
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-bold text-[10px] border border-amber-300">
                    Wajib Diqadha'
                  </span>
                ) : (
                  <span className="px-2 py-0.5 bg-stone-200 text-stone-800 rounded font-semibold text-[10px]">
                    Tidak Diqadha'
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
